# Relatório de Segurança — valchan.com.br

**Data:** 28/08/2026
**Escopo:** blog/portfólio estático em Gatsby 5 + React 18 (sem backend próprio), hospedado na Netlify
**Referências usadas:** OWASP Cheat Sheets (XSS, CSP, HTML5, Third Party JavaScript, NPM Security), MDN (SRI, Trusted Types, Clickjacking), React docs

---

## Resumo executivo

O site é estático, não tem autenticação de usuários finais, não usa cookies de sessão, `localStorage`, `eval`, `postMessage` nem redirects dinâmicos. Isso elimina de saída boa parte das classes de vulnerabilidade web (CSRF, roubo de token, open redirect, DOM XSS via URL). O tratamento das chaves do Algolia está correto: a chave administrativa fica fora do bundle e só a *search-only key* é exposta ao browser.

**Nenhum achado crítico explorável foi confirmado no código da aplicação.** Os riscos reais concentram-se em três pontos: (1) um script de terceiros com privilégio total de execução na origem, sem CSP nem SRI; (2) o painel Netlify CMS em `/admin` rodando um bundle descontinuado desde 2022; (3) ausência total de cabeçalhos de segurança em produção.

| Severidade | Achados |
| --- | --- |
| Crítica | 0 |
| Alta | 3 (A-01, A-02, A-03) |
| Média | 3 (M-01, M-02, M-03) |
| Baixa / informativo | 4 (B-01 a B-04) |

Auditoria de dependências (`yarn npm audit --all --recursive`): **2 críticas, 81 altas, 90 moderadas, 14 baixas** — praticamente todas transitivas e de tempo de build (ver M-03).

---

## Status das correções

Aplicadas na branch `fix/security-hardening`:

| Achado | Status | Commit |
| --- | --- | --- |
| A-01 — script do Chirpy | Aceito com mitigação — restrito no `script-src` da CSP | (ver A-03) |
| A-02 — Netlify CMS descontinuado | Resolvido — CMS removido | `feat(security)!: remover o Netlify CMS` |
| A-03 — CSP ausente | Corrigido (em Report-Only) | `chore(security): adicionar cabeçalhos de segurança via Gatsby Headers API` + `fix(security): remover cabeçalhos que o Gatsby já emite por padrão` |
| M-01 — sanitização do markdown | Pendente — risco de regressão visual | — |
| M-02 — Docker sem `.dockerignore` | Corrigido | `chore(security): endurecer a imagem Docker de desenvolvimento` |
| M-03 — dependências | Corrigido parcialmente | `chore(security): atualizar Gatsby 5.13.7 -> 5.16.1` + `chore(security): migrar react-instantsearch-dom@6 para react-instantsearch@7` |
| B-01 — `window.open` sem `noopener` | Corrigido | `fix(security): abrir o CV com noopener` |
| B-03 — `/admin` no `robots.txt` | Descartado — a rota deixou de existir com A-02 | — |

### Efeito na auditoria de dependências

| Severidade | Antes | Depois |
| --- | --- | --- |
| Crítica | 2 | 2 |
| Alta | 81 | 63 |
| Moderada | 90 | 54 |
| Baixa | 14 | 10 |

As duas críticas remanescentes são de tempo de build e não têm correção pela raiz: `shell-quote` (GHSA-w7jw-789q-3m8p) entra via `react-dev-utils@12.0.1`, dependência direta do próprio `gatsby@5.16.1`, e `tar` (GHSA-23hp-3jrh-7fpw) via `node-gyp@10.0.1`, puxado por `@parcel/watcher` e `fsevents`. Nenhuma das duas vai para o bundle do browser; resolver depende de upstream no Gatsby.

Ganho que não aparece nessa tabela: o **DOMPurify saiu inteiramente da árvore** com a remoção do CMS, e o `immutable` vulnerável passou a existir apenas via `@ardatan/relay-compiler` (build-time do Gatsby), deixando de ser código executado no browser.

A CSP ficou em `Content-Security-Policy-Report-Only`: ela **relata** violações sem bloquear nada. Para virar proteção efetiva, é preciso coletar os relatórios em produção, ajustar as diretivas e só então renomear o cabeçalho para `Content-Security-Policy`. **Até que essa troca aconteça, A-03 não está de fato mitigado** — o valor atual é diagnóstico, não proteção.

### O que foi verificado, e o que não foi

**Verificado:** build limpo (`gatsby clean && gatsby build`) passando no Gatsby 5.16.1, com as 228 páginas geradas. Com `NETLIFY_LOCAL=true` para ativar o `gatsby-adapter-netlify`, a CSP e o `Permissions-Policy` aparecem nas 700 rotas do `public/_headers`, sem duplicar os cabeçalhos do core. O `/admin` deixou de ser gerado no output. As classes `ais-*` usadas pelo CSS da busca continuam presentes no markup da v7.

**Não verificado — precisa de atenção antes do merge:**

1. **Busca (`/search`) não foi testada funcionalmente.** As chaves do Algolia não existem no `.env` local, então o build falha no `onPostBuild` do plugin de indexação e a busca não pode ser exercitada. A migração compila e renderiza, mas confirme em um deploy preview.
2. **A v7 não renderiza os widgets no server-side.** O `useConnector` só produz markup de SSR quando existe um `InstantSearchServerContext`, criado pelo `getServerState()`. Sem ele, o `<section>` da busca vem vazio no HTML e os widgets aparecem só após a hidratação. A v6, baseada em componentes de classe, renderizava o campo de busca já no HTML. É uma regressão de percepção de carregamento, não de funcionalidade — adotar `getServerState` exigiria mudar a arquitetura de SSR da página, o que ficou fora do escopo.
3. **Build do Docker não foi validado** — o Docker não está instalado na máquina onde as correções foram aplicadas. O `--immutable` falha se o `yarn.lock` divergir do `package.json`, então rode um `docker compose build` antes de confiar.

### Observação fora do escopo de segurança

O `@hot-loader/react-dom` nas devDependencies é um resíduo da era React 17 e gera aviso de peer dependency a cada install. Não é usado em nenhum lugar do código. Removê-lo reduziria superfície de supply chain, mas ficou de fora por não ser um achado de segurança.

---

## Severidade Alta

### A-01 — Script de terceiros sem CSP e sem SRI executando em todas as páginas de post

**Regra:** REACT-3P-001 / REACT-SRI-001 / JS-SUPPLY-001
**Local:** `src/templates/blog-post.js:57-61`

```jsx
      <script
        defer
        src="https://chirpy.dev/bootstrapper.js"
        data-chirpy-domain="valchan.com.br"
      />
```

**Impacto:** se `chirpy.dev` for comprometido, tiver o domínio expirado/tomado, ou servir um bundle alterado, JavaScript arbitrário passa a executar com privilégio total na origem `valchan.com.br` em todas as páginas de post — leitura e alteração de DOM, injeção de conteúdo, redirecionamento de visitantes, exfiltração de dados de formulário.

**Correção:** o `bootstrapper.js` é um *loader* que injeta outros scripts em runtime, então SRI isoladamente não resolve (o hash cobriria apenas o loader). A mitigação eficaz é uma CSP com `script-src` restrito aos domínios estritamente necessários (ver A-03), avaliando conscientemente se o widget de comentários justifica o risco.

**Mitigação (defesa em profundidade):** isolar o widget dentro de um `<iframe sandbox>`, se o Chirpy suportar esse modo de embed.

**Notas de falso positivo:** o risco é intrínseco a qualquer script de terceiro; não é um bug do código. O que agrava aqui é a ausência de CSP como rede de segurança.

> **Aceito com mitigação.** Decidido manter o widget. O `script-src` da CSP restringe os scripts a `'self'` e `https://chirpy.dev`, o que limita o dano de um comprometimento do vendor — mas isso só vale de fato quando a CSP sair do modo Report-Only. Até então, A-01 permanece sem mitigação efetiva.

---

### A-02 — Painel Netlify CMS descontinuado e publicamente acessível em `/admin`

**Regra:** REACT-3P-001 / REACT-SUPPLY-001
**Locais:**
- `package.json:37` — `"netlify-cms-app": "^2.15.72"`
- `gatsby-config.js:199` — `` `gatsby-plugin-netlify-cms` ``
- `static/admin/config.yml:1-5` — `backend: name: github / repo: ValchanOficial/valchan.com.br`

**Impacto:** `netlify-cms-app` está congelado em 2.15.72 e não recebe correções de segurança (o projeto foi sucedido pelo Decap CMS, hoje na 3.15.1). O bundle servido em `https://valchan.com.br/admin` embute `dompurify@2.15.1` — versão com dezenas de advisories de bypass de sanitização — e `immutable@3.x` com prototype pollution (advisory `GHSA-wf6x-7x77-mvgw`). O painel de login é alcançável por qualquer visitante; a escrita em si depende do OAuth do GitHub, mas o código vulnerável roda no browser antes disso e não terá patch.

**Correção:** migrar para o Decap CMS (`decap-cms-app` 3.x, com `gatsby-plugin-decap-cms`), que é o sucessor mantido e usa o mesmo formato de `config.yml` — a migração é em geral só troca de pacote e de plugin.

**Mitigação:** se a migração não for imediata, restringir `/admin` no edge da Netlify (proteção por senha ou regra de acesso) para que o bundle desatualizado não fique exposto ao público.

**Notas de falso positivo:** confirmar se o CMS ainda é usado para publicar. Se os posts hoje são escritos direto no repositório, o caminho mais simples e seguro é remover o plugin e o `static/admin/` por completo.

> **Resolvido por remoção.** Confirmado que os posts são escritos direto no repositório, então o CMS foi removido em vez de migrado — some a rota, o bundle e a árvore de dependências de uma vez. Publicar passa a ser exclusivamente por commit em `posts/`.

---

### A-03 — Ausência de CSP em produção

**Regra:** REACT-HEADERS-001 / REACT-CSP-001 / JS-CSP-001
**Evidência:** não existe `netlify.toml`, `_headers`, `static/_headers`, nem chave `headers` em `gatsby-config.js` (verificado no repositório inteiro). O `src/html.js` também não traz `<meta http-equiv="Content-Security-Policy">`.

> **Correção deste achado após verificação em build.** A avaliação inicial dizia que *nenhum* cabeçalho de segurança existia. Isso estava errado: o core do Gatsby define `BASE_HEADERS` em `node_modules/gatsby/dist/utils/adapter/constants.js:5-17` e o `gatsby-adapter-netlify` já os aplica a todas as rotas — `x-xss-protection: 1; mode=block`, `x-content-type-options: nosniff`, `referrer-policy: same-origin` e `x-frame-options: DENY`. Confirmado inspecionando o `public/_headers` gerado por um build local com `NETLIFY_LOCAL=true`. Portanto **MIME sniffing, clickjacking e vazamento de referrer já estavam cobertos**; o que realmente faltava era a CSP e o `Permissions-Policy`.

**Impacto:** sem `Content-Security-Policy`, qualquer injeção de script (via A-01, via HTML bruto em post, ou via comprometimento do CDN de fontes) executa sem qualquer barreira. Esta é a lacuna que importa aqui, justamente porque A-01 carrega JavaScript de terceiro com privilégio total.

**Correção:** o `gatsby-adapter-netlify` já está instalado, então basta declarar os cabeçalhos no `gatsby-config.js` (ou criar um `netlify.toml`). O mais importante é o `script-src`; comece em modo *report-only* para não quebrar nada e só depois aplique em modo bloqueante. Um ponto de partida:

```
Content-Security-Policy-Report-Only:
  default-src 'self';
  script-src 'self' https://chirpy.dev;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  font-src 'self' https://fonts.gstatic.com;
  img-src 'self' data: https:;
  connect-src 'self' https://*.algolia.net https://*.algolianet.com https://valchan.us1.list-manage.com;
  frame-ancestors 'none';
  base-uri 'self'
X-Content-Type-Options: nosniff
Referrer-Policy: strict-origin-when-cross-origin
```

**Notas de falso positivo:** cabeçalhos podem estar configurados na UI da Netlify, fora do repositório. Vale confirmar em runtime com `curl -I https://valchan.com.br` antes de assumir que estão ausentes. **Não** recomendo HSTS aqui — o impacto é duradouro e difícil de reverter.

**Efeito colateral conhecido:** a Headers API do Gatsby não repassa o `source: /*` como uma regra única — ela expande a política para cada rota do manifest. Com 706 rotas, o `public/_headers` gerado passou de ~500 KB. Está dentro do que a Netlify processa e não quebra o deploy, mas se incomodar, a alternativa é declarar a CSP como uma regra `/*` única em um `netlify.toml`. Não segui esse caminho porque a semântica de precedência entre `netlify.toml` e o `_headers` gerado pelo adapter não é verificável localmente, enquanto a Headers API foi confirmada funcionando em build.

---

## Severidade Média

### M-01 — HTML de markdown renderizado sem sanitização

**Regra:** REACT-XSS-001 / REACT-MARKUP-001
**Local:** `src/templates/blog-post.js:31`

```jsx
            <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
```

**Impacto:** o `gatsby-transformer-remark` repassa HTML bruto do markdown sem sanitizar, então uma tag `<script>` ou `<img onerror=...>` escrita dentro de um post vira XSS armazenado para todos os leitores. Hoje o risco prático é baixo porque o conteúdo é de autoria da própria dona do site, mas o `editorial_workflow` do CMS existe justamente para abrir esse fluxo a terceiros — se algum dia um colaborador puder publicar, isso se torna Alta.

**Correção:** não é preciso quebrar nada agora. As opções, da mais leve à mais rígida: (a) manter e tratar o conteúdo do repositório como confiável, documentando essa decisão; (b) sanitizar o `post.html` no build com `rehype-sanitize` ou DOMPurify, mantendo uma allowlist que preserve o realce de sintaxe do Prism (`<pre>`, `<code>`, `<span class>`); (c) usar a CSP de A-03 como rede de segurança.

**Atenção a regressão:** sanitizar sem allowlist adequada quebra o realce de código do `gatsby-remark-prismjs` e as imagens processadas pelo `gatsby-remark-images`. Qualquer mudança aqui precisa de conferência visual em posts com bloco de código e imagem.

**Notas de falso positivo:** o `dangerouslySetInnerHTML` em `src/html.js:30` é o template SSR padrão do Gatsby e **não** é um achado (ver B-04).

---

### M-02 — Dockerfile sem `.dockerignore` e com instalação não reprodutível

**Regra:** REACT-SUPPLY-001 / REACT-CONFIG-001
**Locais:** `Dockerfile:1`, `Dockerfile:5`, `Dockerfile:9`; ausência de `.dockerignore` na raiz

```dockerfile
FROM node:18-alpine
...
COPY . ./
...
RUN yarn cache clean && yarn install
```

**Impacto:** três problemas somados:
1. `COPY . ./` sem `.dockerignore` copia `.env`, `.git` e `node_modules` do host para dentro das camadas da imagem. Se essa imagem for publicada em qualquer registry, a `ALGOLIA_ADMIN_KEY` e todo o histórico do git vão com ela — e apagar em uma camada posterior não remove das camadas anteriores.
2. `yarn install` sem `--immutable` permite que o lockfile seja reescrito no build, abrindo espaço para *drift* de versões e para pacotes não revisados.
3. `node:18-alpine` está em fim de vida e não recebe mais correções de segurança.

**Correção:** criar um `.dockerignore` com pelo menos `.git`, `.env*`, `node_modules`, `public`, `.cache`; trocar `yarn install` por `yarn install --immutable`; atualizar a base para `node:20-alpine` (o `package.json:70` já exige `node >=20.16`, então a imagem está inclusive inconsistente com o projeto). Remover também o `COPY . .` duplicado da linha 11.

**Notas de falso positivo:** o `docker-compose.yml` monta o código como volume e roda `yarn dev`, indicando uso apenas em desenvolvimento local. Se a imagem nunca sai da máquina, o item 1 é bem menos grave — mas o `.dockerignore` continua valendo pelo custo quase zero.

---

### M-03 — Dependências vulneráveis e desatualizadas, sem processo de auditoria

**Regra:** REACT-SUPPLY-001
**Locais:** `package.json:13` (`gatsby: ^5.9.1`, resolvido para 5.13.7; atual 5.16.1), `package.json:43` (`react-instantsearch-dom`, deprecado)

**Impacto:** as 2 advisories críticas (`shell-quote` GHSA-w7jw-789q-3m8p via `react-dev-utils`, `tar` GHSA-23hp-3jrh-7fpw via `node-gyp`) e a grande maioria das 81 altas são transitivas e só executam durante o build — não vão para o bundle do browser. O impacto real é sobre a máquina/runner de build, não sobre os visitantes.

O Dependabot **já está ativo** no repositório: o histórico tem PRs `dependabot/npm_and_yarn/*` mesclados e o GitHub reporta 161 vulnerabilidades na branch default. Ou seja, a detecção funciona — o gargalo é que as atualizações não estão sendo absorvidas, porque a maior parte depende de subir a major do Gatsby e de trocar pacotes descontinuados, o que o Dependabot não resolve sozinho.

**Correção, em ordem de custo-benefício:**
1. Atualizar o Gatsby (`5.13.7 → 5.16.1`), o que já resolve boa parte da árvore transitiva.
2. Migrar `react-instantsearch-dom@6` → `react-instantsearch@7` (o pacote antigo está oficialmente deprecado).
3. Tratar o `netlify-cms-app` conforme A-02 — é ele que sustenta o DOMPurify e o Immutable vulneráveis do lado do cliente.

**Notas de falso positivo:** o `prismjs` está em 1.30.0, que já é a versão mais recente e corrigida — nada a fazer nele.

---

## Severidade Baixa / Informativo

### B-01 — `window.open` sem `noopener`

`src/sections/section-about.js:14` — `window.open(pdfPath.default, "_blank")`. A janela aberta mantém referência ao `window.opener`. Como o destino é um PDF da própria origem, não há risco de *reverse tabnabbing*. Fica como consistência com o resto do código (`src/components/SocialLinks/index.js:21` já usa `rel="noopener noreferrer"` corretamente): usar `window.open(url, "_blank", "noopener")`.

### B-02 — Google Fonts carregado de CDN externo sem SRI

`src/html.js:14-19` e `gatsby-config.js:62-70`. Folhas de estilo têm superfície de ataque bem menor que scripts, e o `fonts.googleapis.com` gera CSS dinâmico (SRI é inviável). Mitigar via `style-src`/`font-src` na CSP de A-03, ou auto-hospedar as fontes.

### B-03 — `/admin` não desautorizado no `robots.txt`

`static/robots.txt` permite tudo. O `public/admin/index.html` gerado já traz `<meta name="robots" content="none">`, então a indexação está coberta na prática. Adicionar `Disallow: /admin` é apenas defesa em profundidade — e não substitui a correção de A-02, já que `robots.txt` não é controle de acesso.

### B-04 — Falso positivo confirmado: `src/html.js:30`

`dangerouslySetInnerHTML={{ __html: props.body }}` é o template SSR padrão do Gatsby. O `props.body` é o HTML gerado pelo próprio build, não entrada de usuário. **Nenhuma ação necessária.**

---

## Práticas corretas já presentes

Vale registrar para não regredirem:

- `gatsby-config.js:78` usa `ALGOLIA_ADMIN_KEY` **sem** o prefixo `GATSBY_`, o que mantém a chave administrativa fora do bundle do browser; `src/components/Search/index.js:10` expõe apenas a `GATSBY_ALGOLIA_SEARCH_KEY` (*search-only*). Está exatamente como deveria — não renomeie a variável admin para `GATSBY_*`.
- `.gitignore:58` ignora `.env*`; o `.env` local contém apenas `NODE_ENV=development` e o `env.example` traz só placeholders.
- `src/components/SocialLinks/index.js:20-21` usa `target="_blank"` com `rel="noopener noreferrer"`.
- Nenhuma ocorrência de `eval`, `new Function`, `document.write`, `innerHTML`, `postMessage`, `localStorage` ou `sessionStorage` em `src/`.
- Sem autenticação por cookie e sem requisições que mudam estado no próprio domínio, portanto CSRF não se aplica.
- `yarn.lock` presente e `packageManager` fixado (`yarn@4.0.2`).

---

## Próximos passos recomendados

1. **Coletar os relatórios da CSP em produção e migrar para modo bloqueante.** Enquanto o cabeçalho for `Report-Only`, A-03 não protege nada. Este é o item de maior valor pendente, justamente porque é o que sustenta a mitigação de A-01.
2. **Validar a busca em deploy preview** (ver item 1 da seção anterior).
3. **Validar o build do Docker** (ver item 3 da seção anterior).
4. **Decidir sobre M-01** (sanitização do HTML de markdown), que segue pendente por risco de regressão visual nos posts.

---

## Ordem sugerida de correção (avaliação original)

1. **A-03** (cabeçalhos + CSP em report-only) — baixo risco de quebra e mitiga parcialmente A-01, A-02 e M-01 de uma vez.
2. **A-02** (migrar para Decap CMS ou remover `/admin`) — maior redução de superfície de ataque do lado do cliente.
3. **M-02** (`.dockerignore` + `--immutable` + Node 20) — trivial, sem impacto funcional.
4. **M-03** (atualizar Gatsby, migrar InstantSearch, habilitar Dependabot).
5. **A-01** (decidir sobre o widget do Chirpy) — decisão de produto, não só técnica.
6. **M-01** (sanitização do HTML de markdown) — deixar para o fim, pois é o que mais risca regressão visual nos posts.

> Observação sobre testes: o `package.json:67` define `"test": "echo && exit 1"`, ou seja, não há suíte de testes. Qualquer correção acima precisa de verificação manual (`yarn build` + conferência visual das páginas afetadas), já que não existe rede de proteção automatizada.
