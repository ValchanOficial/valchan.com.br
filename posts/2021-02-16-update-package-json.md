---
date: 2021-02-16
title: "Atualizando as dependências do package.json"
description: "Como verificar e atualizar todas as dependências do package.json"
category: "Dev"
image: '/assets/img/cover/cover2.png'
---

Com poucos comandos é possível atualizar suas dependências:


Para versões mais atuais do NPM

``` bash
npm outdated                     # verifica dependências que possuem atualização
npm update                       # atualiza dependências
npm install                      # instala dependências
```

``` bash
yarn upgrade-interactive --latest   # atualiza dependências selecionadas
yarn upgrade --latest               # atualiza dependências
```


Ou utilizando o <a href="https://www.npmjs.com/package/npm-check-updates" target="_blank" rel="noopener noreferrer">npm-check-updates</a>


``` bash
npm install -g npm-check-updates # instala o npm-check-updates de forma global
npm-check-updates                # verifica dependências que possuem atualização
ncu -u                           # atualiza dependências
npm install                      # instala dependências
```

Ou

``` bash
npx npm-check-updates -u         # utiliza a última versão do npm-check-updates atualiza dependências
npm install                      # instala dependências
```


- <a href="https://www.npmjs.com/package/npm-check-updates" target="_blank" rel="noopener noreferrer">npm-check-updates</a>
- <a href="https://docs.npmjs.com/cli/v6/commands/npm-outdated" target="_blank" rel="noopener noreferrer">npm outdated</a>
- <a href="https://docs.npmjs.com/cli/v6/commands/npm-update" target="_blank" rel="noopener noreferrer">npm update</a>
