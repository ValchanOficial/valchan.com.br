---
date: 2026-09-21
title: "O Engenheiro de Software com Mentalidade de Produto"
description: "Anotações - parte 3 - Capítulo 7 ao 9"
category: "Livro"
image: "/assets/img/cover/cover2.png"
---

## Capitulo 7

> Devemos começar pela experiência do cliente e trabalhar de trás para frente até chegar à tecnologia. Não podemos começar pela tecnologia e tentar descobrir como a vendemos.
> — Steve Jobs

**Da visão aos requisitos:**

- **Briefing de produto:** um documento de visão que alinha todos em torno dos objetivos. Às vezes, recebe o nome de “briefing de problema” ou “one-pager”. Inlcui, no mínimo: uma tese e antítese de produto e o público-alvo, objetivos ou métricas de produto a serem monitoradas, além de cenários norteadores. Nos termos do modelo de processo Double Diamond, o objetivo é destravar a descoberta.
- **Documento de requisitos do produto:** detalha os atributos que esse produto deve ter, não apenas no longo prazo, mas também ao propor uma primeira entrega ou milestone, mantendo a prescritividade no nível mínimo necessário. O objetivo é destravar a definição.
- **Especificação de produto:** mostra como o produto deve ser projetado. O objetivo é destravar o desenvolvimento.

Primeiro de forma formal ou informal, devemos dividir o trabalho em múltiplas fases: “por que”, “o que” e “como”, sempre sob a perspectiva do usuário. De modo geral, a fase 1 concentra-se em por que os usuários querem que tomemos determinada ação, a fase 2 em o que os usuários estão demandando, e a fase 3 em como os usuários alcançarão seus objetivos. Em cada etapa, devemos evitar aprofundamento excessivo em detalhes que só precisam ser considerados mais adiante.

Em segundo lugar, devemos utilizar simulações de cenários em cada fase para garantir que a equipe esteja alinhada e resolvendo problemas completos, prática conhecida como descoberta orientada por cenários.

Por fim, devemos permitir feedbacks nas fases iniciais.

Ao longo do caminho, alguns conceitos importantes relacionados à descoberta e priorização serão destacados:

- Como manter os casos de uso organizados.
- A  transição de mentalidade de produto para a de sistemas.
- Como refletir a fundo sobre o valor que o produto proporcionará aos usuários, incluindo as quatro “verdades brutais”.
- Avaliação holística do nível de esforço necessário para a construção e manutenção de software.
- Utilizar fluxos de usuário para identificar jobs to be done.

**Descoberta orientada por cenários:** Scenario-Driven Discovery ou SDD, é a prática de utilizar cenários ao longo de todo o processo de descoberta.

Podemos nos apoiar em cenários para garantir a entrega de um produto completo e útil aos usuários. Essa abordagem funciona por alguns motivos:

- Ao destacar as necessidades dos personagens, o porquê se torna claro, assegurando o alinhamento entre requisitos e a intenção original.
- Possibilita histórias abrangentes, aumentando a probabilidade de descobrirmos funcionalidades importantes ou casos extremos.
- Diferentemente de listas abstratas de requisitos, histórias são dificilmente interpretadas de forma equivocada. Com um conjunto de histórias em comum, a equipe se alinha naturalmente.
- É mais fácil identificar lacunas no enredo em cenários do que depurar listas de requisitos.

Os cenários no briefing de produto são geralmente chamados de cenários norteadores.

**Cenário norteadores** são histórias prioritárias que acompanharemos ao longo de todo o ciclo de vida do produto.

No documento de requisitos do produto, os cenários são fragmentados em “requisitos” granulares ou, em metodologias ágeis, em “histórias”.

Na especificação de produto, os cenários são chamados de fluxos de usuário ou de storyboards.

**Faça brainstorming de cenários em equipe**

**Selecione e refine os cenários norteadores:** devemos selecionar os cenários mais importantes e ilustrativos para compor o roadmap de produto. Posteriormente, iremos priorizá-los com mais rigor, mas o primeiro passo é curar as ideias mais relevantes e desenvolver as histórias que as evidenciam melhor.

**Converta os cenários norteadores em requisitos:** se histórias de usuários fossem inseridas em uma tabela de banco de dados, ela conteria uma lista de momentos ordenados por tempo, vinculados à persona de um usuário. Essa é uma excelente forma de pensar nas jornadas de usuários no produto.

**Requisitos de alto nível:** os requisitos de alto nível e os princípios de design constituem um resumo que define o que buscamos com o design. Qual persona estamos priorizando? Estamos buscando receita? Facilidade de uso? Esse resumo pode estabelecer comunicação e confiança com pessoas que não poderão analisar todos os casos de uso detalhados.

**Documento de requisitos do produto (PRD):** PRD pode significar algo ligeiramente diferente, dependendo da empresa que o utiliza. Para algumas equipes, ele também pode incluir a especificação de produto. A quantidade de design a ser incluída no PRD não é precisa e deve ser alinhada com a equipe, espacialmente em projetos maiores.

Para nossos propósitos, o objetivo do PRD é destravar engenheiros e designers de UI para realizarem o trabalho de design detalhado. A especificação de produto, destravará a implementação. Assim, daremos ênfase ao “o que” e menor ênfase ao “como”. Incluiremos:

- Requisitos de produto de alto nível e princípios de design.
- Requisitos de produto granulares: um compêndio de casos de uso ou compêndio de histórias que registre todas as interações específicas desejadas por usuários.
- Definição de milestone para selecionar quais funcionalidades serão entregues na primeira versão.
- Reunir as equipes e stakeholders adequados para trabalhar no documento.

**Compêndio de casos de uso:** chamado de documento de compêndio de casos de uso porque cada requisito é escrito sob a perspectiva do usuário. Alguns modelos comuns para requisito são:

- “[Usuário] pode [ação] para que [motivação].”
- “[O produto] fornece [funcionalidade] para que o [usuário] possa [obter valor].”

Cada requisito é um trecho de um dos nossos cenários.

A arte de escrever requisitos consiste em declarar o que precisa acontecer sem ser excessivamente prescritivo quanto ao “como”.

**Organize o compêndio de casos de uso:** compêndios de casos de uso normalmente orientam engenheiros ao longo das fases de priorização, de design e de execução. Embora o ideal seja identificar todos os requisitos desde o início, com frequência novos requisitos são adicionados à medida que iteramos.

Essa dinâmica torna o compêndio de casos de uso um documento estrutural e, em projetos de médio a grande porte, vale a pena mantê-lo organizado e com tags.

Se desejarmos, podemos transformar cada requisito em um ticket no sistema de planejamento - por exemplo, o Jira da Atlassian tem o tipo de ticket Story, cada um correspondente a um desses requisitos centrados no usuário.

Também é possível utilizar uma planilha ou um aplicativo como o Notion, com tabelas de banco de dados incorporadas, permitindo que o compêndio seja ordenado, filtrado e gerenciado. Esses itens também podem receber tags relacionadas a elementos da visão original do produto. Vejamos a seguir algumas sugestões de tags ou seções:

- Persona
- Cenário norteador
- Caso extremo
- Milestone
- Status
- Comentário

**Priorize os requisitos para o primeiro milestone:** após alinharmos com a equipe os requisitos de longo prazo, o próximo passo é criar um roadmap. O que significa que precisamos priorizar.

A priorização é uma das partes mais desafiadoras e impactantes do nosso trabalho e, muitas vezes, acaba sendo um pouco caótica. Cada pessoa tem sua própria visão sobre o que é importante, e é fácil perder o foco.

**O que realmente importa na priorização?** Os dois fatores mais fundamentais por trás da priorização são impacto para o usuário e esforço.

Otimize a relação custo-benefício; isto é, priorize cenários e funcionalidades com base em uma combinação de impacto para o usuário (o benefício) e esforço total da empresa (o custo).

**Otimizando para o custo:** primeiro, devemos estar dispostos, às vezes, a empregar mais esforço do que o mínimo necessário se isso gerar vantagem sobre a concorrência ou encantar os usuários do produto. Por exemplo, se a base de usuários for significativa, vale investir um pouco de tempo agora para economizar, no conjunto, muito tempo deles depois.

Além disso, devemos considerar o custo total, e não apenas o de engenharia.

**Otimizando para o benefício:** se quisermos adotar uma abordagem matemática, o impacto para os usuários é o resultado da multiplicação entre a escala (ou alcance) e o valor por usuário, calculada ao longo de um horizonte de tempo específico.

Impacto para o usuário = valor para o usuário x escala x tempo

O impacto para o usuário pode ser estimado por meio de uma função de utilidade, que representa o valor que os usuários obtêm de um produto em relação às funcionalidades incluídas. À medida que aprimoramos o produto, a função de utilidade deve aumentar.

Existem quatro lições doloridas, ou “**verdades brutais**”, sobre como é difícil construir algo valioso para os usuários:

**1 - Escalar é difícil:** é desafiador criar produtos de alto impacto em grande escala.

**2 - O valor para o usuário é acumulado tardiamente:** a função de utilidade não é linear à medida que os produtos incorporam funcionalidades. Eles são inúteis até receberem um número considerável de funcionalidades. Bicicletas não são úteis até terem duas rodas, freios, guidão para virar e marchas para subir ladeiras.

**3 - A diferenciação competitiva é acumulada ainda mais tardiamente:** a terceira verdade é que a concorrência exerce uma pressão adicional. A menos que estejamos criando algo totalmente novo, ao entrar em um mercado, geralmente precisamos oferecer um grande número de funcionalidades antes que alguém nos leve a sério. E, mesmo depois disso, ainda precisamos acrescentar algo a mais, como uma nova funcionalidade, custos mais baixos etc. Em outros casos, reformularemos o produto e competiremos com versões anteriores. Chamado de valor sobre o produto substituto (Value Over Replacement Product, VORP). Para calcular o VORP, subtraímos da função de utilidade o valor dos produtos existentes no mercado ou da versão anterior do produto que estamos construindo. VORP só se torna positivo depois que o valor simples para o usuário já passou a aparecer. Ele exige que construamos produtos que não sejam apenas úteis, mas também diferenciados.

**4 - Sustentar valor ao longo do tempo é difícil:** a quarta e última verdade brutal está relacionada ao componente do tempo. É mais difícil entregar valor duradouro aos usuários do que obter ganhos rápidos. Construir uma bicicleta barata que quebre com facilidade, ou que não seja confortável o bastante para incentivar o uso recorrente, é mais simples do que construir uma que os usuários utilizem por anos.

Por causa das quatro verdades brutais, a maioria dos produtos e funcionalidades não gera grande impacto porque está mal acabada, falta alguma funcionalidade essencial ou não foi projetada para escalar e ser manutenível ao longo do tempo.

As verdades brutais são um bom lembrete para que a engenharia não falhe por falta. Mas e pelo excesso? Também devemos evitar: polimento excessivo, tentar alcançar objetivos demais ao mesmo tempo, escolher as prioridades erradas, demorar muito para lançar o produto no mercado, estourar o orçamento ou ficar sem feedback dos usuários.

**Combinando custo e benefício: m**uitas equipes começam com um produto mínimo viável (Minimum Viable Product, ou MVP). Defino MVP como o ponto na função de utilidade em que o valor se torna substancialmente positivo, ainda que para um público-alvo potencialmente pequeno, ignorando, inicialmente, a verdade brutal número 1 (escala).

Talvez você já tenha ouvido o termo produto mínimo adorável (Minimum Lovable Product, ou MLP), que vem ganhando popularidade como reação ao fato do MVP muitas vezes ser excessivamente rudimentar.

Em contextos competitivos, vale a pena considerar o MLP como o ponto em que o VORP se torna substancialmente positivo. O MLP se relaciona ao VORP porque as pessoas tendem a amar e se apegar apenas a produtos com alto VORP. Não amaremos uma bicicleta que tenha apenas as funcionalidades básicas do checklist — a menos que seja a nossa primeira.

No contexto das verdades brutas, o MVP se concentra no número 2 (valor para o usuário); já o MLP se refere ao número 3 (valor diferenciado).

**Defina os cenários norteadores-alvo para o primeiro milestone:** ao utilizar a descoberta orientada por cenários, devemos definir o produto mínimo viável ou o produto mínimo adorável, priorizando os requisitos de um cenário norteador (or de um conjunto mínimo deles, caso um único não seja suficiente).
Concentrar-se em um cenário norteador traz diversas vantagens:

- Como cenários norteadores são histórias completas, entregaremos valor positivo.
- Como incorporamos nossa melhor visão de produto, entregaremos algo com VORP positivo para alguém.
- Como se concentram em apenas uma persona e uma história, podemos deixar de fora funcionalidades supérfluas e adiar implementações genéricas.

Podemos restringir nosso público-alvo inicial. O exemplo mais comum é limitar o lançamento a funcionários internos que possam realizar dogfooding da primeira versão, ou a parceiros de design dispostos a experimentar versões iniciais em troca de influência sobre o produto ou de suporte personalizado. Outra opção é limitar o público a usuários de uma única plataforma, como Android em vez de iOS, ou a usuários avançados que não necessitem de tantas instruções.

**Priorize o compêndio de casos de uso.**

**Construa fluxos de usuário detalhados para o primeiro milestone:** um fluxo de usuário mostra, em detalhes, a sequência de etapas que o usuário percorre para cumprir um dos requisitos, bem como quaisquer pré-condições necessárias para que a simulação funcione.

Você já deve ter ouvido falar em fluxos de usuário, muitas vezes chamados de “storyboards”, no contexto de design de UI. Eles podem consistir em uma sequência de mocks de UI que simular os cliques do usuário.

Se, em vez disso, nossa interface fosse código, nossos fluxos seriam compostos por trechos de código e linhas de comando, intercalados com comentários.

Aqui estão algumas orientações de alto nível para criar fluxos:

- Os fluxos de usuário devem conter detalhes suficientes para podermos debater questões importantes de interface, e extrair deles especificações claras de sistema.
- Assim como na seleção de cenários norteadores, pondere as diferentes opções. Faça brainstorming, apresente fluxos de usuário alternativos e peça ajuda à equipe para escolher o mais adequado. Essa é uma excelente forma de incorporar opiniões diversas e demonstrar que não estamos presos a uma abordagem específica.
- Concentre seus esforços no primeiro milestone, juntamente com quaisquer itens ainda não priorizados que você considere críticos para compreender desde cedo, de modo a possibilitar um design holístico.
- Como em qualquer cenário, os fluxos de usuário devem contar histórias completas, começando pelo que motivou o usuário e por como ela descobriu as funcionalidades.

**Validando fluxos de usuário:** ao trabalhar com interfaces importantes, devemos validá-las com usuários reais para garantir que sejam fáceis de encontrar, intuitivas e atendam às necessidades mais importantes dos usuários.

**Solicitações de comentários (RFC):** se o objetivo for principalmente garantir que a funcionalidade faça a coisa certa no mundo real, podemos criar um documento de RFC que mostre aos usuários potenciais um storyboard, perguntando se o cenário seria útil para eles e solicitando feedback sobre o design.

**Estudos de usabilidade:** um estudo de usabilidade solicita aos participantes de entrevistas que executem tarefas com base em um protótipo funcional, o que revela diversos problemas, como capacidade de descoberta, usabilidade e lacunas de funcionalidade.

Agendamos algumas entrevistas, geralmente por videochamada, e definimos uma série de tarefas que desejamos que os participantes realizem.

O protótipo funcional deve parecer cumprir os objetivos dessas tarefas, deixando outras funcionalidades ainda não implementadas. Muitas ferramentas de design permitem criar esse tipo de protótipo, e há inclusive ferramentas capazes de utilizar aplicativos existentes, ou capturas de tela deles, para criar versões modificadas com protótipos de novas funcionalidades.

Para iniciar a entrevista:

- Ajudamos o participante a se sentir confortável e explicamos o formato.
- Pedimos a ele que pense em voz alta enquanto utiliza o protótipo funcional.
- Deixamos claro que podem fazer perguntas, mas que talvez não sejam respondidas imediatamente.

Em seguida, apresentamos a tarefa, que corresponde à parte motivadora de um fluxo-chave de usuário.

Além de apresentar o caso de uso, devemos fornecer a menor orientação possível. Caso seja necessário responder a uma pergunta, devemos registrar essa informação para depurá-la posteriormente.

**Traduzindo fluxos de usuário em jobs to be done:** a última etapa do nosso grande reindexamento é definir os componentes e as funcionalidades que precisamos construir. Esses componentes, às vezes, são chamados de jobs to be done.

Fluxos de usuário podem ser traduzidos em jobs to be done da mesma forma que cenários norteadores são divididos em requisitos.

**Retroalimentando os requisitos:** fazendo uma analogia pertinente, ninguém espera uma bela cascata em modelo waterfall que flui da fase de descoberta para a fase de design, em uma única direção. Na prática, é mais como uma maré que avança, recua e mistura diferentes águas. Talvez, às vezes, precisemos adicionar alguns cenários enquanto projetamos soluções para os usuários.

Ou seja, a lista de cenários norteadores e o compêndio de casos de uso devem ser “documentos vivos” que atualizamos continuamente.

## Capitulo 8

> Torne cada detalhe perfeito e limite o número de detalhes a serem aperfeiçoados.
> — Jack Dorsey, fundador da Block

Affordances são as maneiras pelas quais um produto pode ser utilizado, seja de forma intencional ou não.

Devido a códigos e protocolos inseguros, o mundo digital está repleto de affordances indesejáveis, como mensagens de spam, e-mails, violações de privacidade, lavagem de dinheiro, ataques de phishing, entre outras. Em alguns casos, essas situações eram inevitáveis, mas, em outros, um design mais voltado ao futuro poderia ter evitado o problema.

Don Norman popularizou essa definição de affordances em seu clássico livro The Design of Everyday Things, juntamente com o conceito de signifiers. Se affordances são as ações que um produto pode realizar, signifiers são as pistas que utilizamos para determinar o que devemos fazer com ele.

Ao projetar interfaces, é preciso realizar brainstorming sobre suas affordances e analisar cuidadosamente os usos corretos e incorretos de cada uma, excluindo as indesejadas. Esse processo exige muito senso de design e iteração; afinal, em ponto está o limite entre viabilizar casos de uso de alta taxa de transferência e abrir brecha para ataques de negação de serviço com um monte de solicitações?

Para as affordances que decidirmos expor, devemos utilizar signifiers para orientar os usuários para as opções mais seguras e úteis.

O design de interfaces de software, em grande parte, resume-se a escolher quais affordances expor e como sinalizá-las aos usuários.

Com affordances, signifiers, cenários e personas, você estará apto a:

- Destacar o uso correto do produto e desencorajar o uso incorreto.
- Escolher com sabedoria o momento de disponibilizar affordances.
- Aprender quando tornar funcionalidades extensíveis e quando resolver problemas específicos.

**O papel do viés e da ideologia no design de software:** engenheiros de software levam crenças ideológicas e vieses ao trabalho. Vejamos alguns exemplos:

- Alguns preferem projetar produtos flexíveis e voltados a usuários avançados, enquanto outros preferem produtos opinativos, seguros e fáceis de usar.
- Alguns são pessimistas e analisam as desvantagens e os impactos negativos de funcionalidades e produtos. Outros se concentram mais nas vantagens.
- Alguns acreditam que software livre e código aberto é uma opção superior em termos de transparência, ética e segurança. Já os defensores de software proprietário enfatizam direitos de propriedade intelectual e incentivos comerciais à inovação.

Ideologias podem dar força e direção, mas na hora de projetar software, funcionam apenas como pontos de partida. O produto ideal sempre será mais influenciado pelos usuários e suas necessidades do que pelas crenças dos designers.

**Pré-requisitos de um bom design:**

- Construir a capacidade de coletar feedback e iterar rapidamente em nossas práticas de desenvolvimento. Essa abordagem nos dará confiança de que, se uma interface for excessivamente limitada, poderemos aprimorá-la posteriormente.
- Desenvolver uma compreensão do público-alvo e do que ele deseja. Por exemplo, se todos desejarem a mesma coisa, devemos torná-la a única opção. Se desejarem coisas diferentes, devemos inserir pontos de flexibilidade.
- Utilizar a descoberta orientada por cenários (SDD) para analisar em detalhes como os clientes utilizarão o produto. Se esses cenários revelarem lacunas de segurança, devemos avaliar se é possível fechá-las sem comprometer a generalidade.

Com essas ferramentas e técnicas, não precisaremos recorrer com tanta frequência a atalhos ideológicos, e poderemos tomar decisões de design quando tivermos as melhores informações e a motivação necessária para implementá-las.

**Destaque o uso correto do produto e encoraje o uso incorreto:** um produto bem projetado sinaliza e define como padrão as affordances produtivas e seguras, ao mesmo tempo em que garante que os usuários não utilizem acidentalmente as mais arriscadas.

Affordances podem ser sinalizadas como mais ou menos convidativas, assim como semáforos indicam o quão seguro é avançar. Affordances verdes indicam que é possível seguir com segurança, enquanto as luzes amarelas indicam cautela e as vermelhas, proibição.

Divida suas affordances em verde, amarelo e vermelho com base em quão recomendadas são, e então sinalize-as de acordo.

Vejamos algumas técnicas comuns para orientar usuários a utilizar as affordances mais úteis: Em 2003, Rico Mariani cunhou o termo pit of success para descrever a prática de ajudar usuários a “cair em práticas vencedoras”.

- Escolha padrões seguros e previsíveis.
- Otimize o caminho de menor resistência.
- Conceda affordances à persona correta no cenário correto.
- Realize validações.

**Escolha padrões seguros e previsíveis, ou nenhum padrão:** combine flexibilidade com facilidade de uso ao fornecer padrões adequados para o grande público, permitindo personalização para os mais exigentes.

A qualidade de uma interface de produto pode ser medida pela relevância das perguntas que ela faz aos seus usuários.

**Otimize o caminho de menor resistência:** usuários não utilizam produtos de forma perfeitamente premeditada. Em geral, seguem naturalmente o caminho de menor resistência.

**Conceda affordances à persona correta no cenário correto:** é preciso refletir cuidadosamente sobre para quem estamos oferecendo escolhas e em que momento.

Pense com cuidado sobre qual persona deve tomar decisões.

Além de direcionar a funcionalidade para a persona adequada, devemos oferecer as affordances no momento oportuno, isto é, quando o usuário tiver as informações necessárias para tomar uma decisão e estiver motivado a fazê-lo.

Quando a persona correta estiver decidindo no momento certo, é hora de validar essa decisão.

**Realize validações:** valide as decisões dos usuários.

**Escolha com sabedoria o momento de disponibilizar affordances:** costuma-se dizer que a tecnologia pode ser usada para o bem ou para o mal, e a affordance mais segura é aquela que não existe.

Em um mundo ideal, no qual iteramos e ouvimos usuários, a pergunta sobre uma funcionalidade prospectiva não é: “devemos adicioná-la?”, e sim: “quando adicioná-la?” Se deixarmos de fora uma funcionalidade importante, podemos simplesmente adicioná-la depois.

Em um ambiente assim, vale a pena ser um pouco conservador quanto ao que é exposto aos usuários. Sempre podemos adicioná-las posteriormente, quando tivermos mais detalhes dos usuários sobre o que precisam.

Em caso de dúvida, deixe de fora.

Se formos excessivamente agressivos e disponibilizarmos uma funcionalidade cedo demais, muitas coisas ruins podem acontecer:

- Não temos dados suficientes sobre os usuários. Acabamos tomando decisões de design mal fundamentadas porque recorremos a padrões ideológicos.
- Testes inadequados produzem resultados ruins.
- Os usuários têm dificuldade em utilizá-la porque não dedicamos tempo suficiente ao design.
- Poderíamos ter construído algo de maior valor.
- Pode exigir manutenção ou dedicação de longo prazo, e a equipe simplesmente não terá tempo para isso.
- Se estivermos construindo software como uma API que precisa ser estável, os usuários não gostarão quando a revisarmos e quebrarmos a compatibilidade.

Observe que é muito mais provável pularmos essas etapas quando a funcionalidade não está no topo da lista de prioridades da equipe. Eis, portanto, uma dica prática:

Construa funcionalidades quando puder dedicar foco suficiente para fazer um bom trabalho.

A outra dica prática para “Em caso de dúvida, deixe de fora” é: “Não fique com dúvida”. Para ter certeza de que uma funcionalidade é mesmo necessária, às vezes bastam algumas conversas com usuários, ou uma análise das métricas. Das duas, uma: ou acabaremos construindo a funcionalidade, ou perceberemos que ela não era tão importante quanto imaginávamos. Ambas são bons resultados!

Vejamos a seguir algumas máximas úteis para lançar uma funcionalidade que funcionam bem tanto em teoria quanto em prática:

- Se vale a pena construir, vale a pena validar.
- Não seja nem otimista nem pessimista.
- Aplique a regra de três.
- Construa em etapas.
- Se necessário, comece com uma versão experimental.

**Se vale a pena construir, vale a pena validar:** não lance funcionalidades não validadas.

**Aplique a regra de três:** se aparecerem três clientes diferentes com feedbacks que apontam para a mesma funcionalidade, é sinal de que tem mais gente por aí que vai utilizá-la. Então provavelmente vale a pena construir.

Apenas certifique-se de compreender bem os cenários subjacentes dos usuários para realizar esse julgamento.

Se você conseguir pensar em três cenários convincentes para uma funcionalidade, ou se três usuários a solicitarem, considere seriamente sua implementação.

Às vezes, não é possível concluir funcionalidades de uma só vez; então, precisamos definir como implementá-las em etapas ou criar uma sequência de lançamentos.

**Construa em etapas:** às vezes, há um cenário de usuário que queremos atender, mas ele não é a prioridade mais alta. No entanto, será muito mais difícil adicionar suporte a esse cenário depois, a menos que construamos algo agora. Nesses casos, temos de lidar com uma "decisão de mão única", o que pode tornar difícil desfazê-la ou recuperá-la mais tarde.

Em outras situações, a funcionalidade é complexa demais para ser lançada de uma só vez. Precisamos lançar uma versão inicial, obter feedback e, então, concluí-la.

Nesses casos, estabeleça um perímetro ao construir.

Esse perímetro nos dará tempo para adicionar a funcionalidade posteriormente.

**Se necessário, comece com uma versão experimental:** nem sempre dá para ter certeza ou realizar uma pesquisa completa antes de lançar uma funcionalidade. Às vezes, a melhor forma de pesquisar é construir algo e testar nossas suposições.

Nesses casos, podemos coletar mais informações fazendo dogfooding da funcionalidade ou lançando-a como um experimento. Utilize flags de funcionalidade liberadas para uma pequena porcentagem de usuários e, se apropriado, realize testes A/B. Enviei uma solicitação de comentários (RFC). Convide beta testers para testá-la.

Você pode até retirar a funcionalidade e está tudo bem.

Após decidirmos se e quando lançar uma funcionalidade, precisamos definir com que alcance e nível de generalidade ela será exposta.

**Funcionalidades restritas versus extensíveis:** devemos construir a versão extensível da funcionalidade para habilitar mais casos de uso, ou uma versão restrita, voltada a um cenário específico? Como devemos tomar essas decisões?

Pode ser que tenhamos um viés pessoal, seja em direção a interfaces flexíveis ou opinativas. O design baseado em cenários pode ajudar a superar esses padrões.

Se a versão extensível de uma funcionalidade habilita três cenários distintos, poderosos e de curto prazo, construa-a. Caso contrário, comece com algo específico e direcionado a um ou dois cenários que os usuários realmente valorizam.

Ao estimar o custo de construir a versão extensível, leve alguns pontos em consideração:

- Se vale a pena lançar, vale a pena testar. Se estiver construindo para três cenários, escreva um teste de cenário (consulte o Capítulo 4) para cada um deles. Dessa forma, você garante que a funcionalidade seja tão extensível quanto imagina.
- A extensibilidade acrescenta complexidade e, muitas vezes, resulta em mais affordances vermelhas e amarelas. Certifique-se também de identificá-las e mitigá-las.
- Tenha cautela quando os casos de uso tiverem prioridades muito diferentes. Na lista anterior, os cenários apareciam em ordem decrescente de prioridade, e as validações em tempo de execução eram claramente as mais urgentes. Poderíamos ter construído algo específico, como validadores. No entanto, mesmo o último caso era bastante convincente, e simplesmente aguardamos para construir a versão amigável do produto quando tivéssemos tempo. Em outras palavras, desde o início lançamos as bases para construí-lo, mas não o implementamos até mais tarde.

## Capitulo 9

> Em software, raramente contamos com requisitos realmente significativos. Mesmo quando eles existirem, a única medida de sucesso que de fato importa é se nossa solução resolve a percepção, em constante evolução, do cliente sobre qual é o seu problema.
> — Jeff Atwood

**Fundamentos da arquitetura de produto:** com o que os usuário realmente se importam?

Quatro técnicas ao considerar uma melhoria para evitar os erros de priorização mais comuns:

- **Ampliar a perspectiva e observar o panorama geral.**
- **Evitar o "efeito poste de luz":** efeito poste de luz (ou princípio da busca do bêbado). A história conta que um homem bêbado procura suas chaves perdidas sob um poste de iluminação pública, embora não as tenha deixado ali. Quando questionado sobre o motivo, ele responde: "Porque é aqui que há luz". Para enxergar além da área iluminada, trace uma linha entre os problemas que está resolvendo e o "porquê" — os cenários de usuário que exigem que você pense neles. Uma maneira prática de manter a disciplina é registrar a justificativa em termos de impacto para o usuário.
- **Comunicar o impacto ao usuário.**
- **Investigar o impacto por meio de tecnologias que reduzem a "lacuna entre o sistema e o produto":** essa lacuna se manifesta de duas maneiras: observabilidade e confiabilidade.

**Experiências confiáveis para o usuário:** devemos sempre lembrar que latência, disponibilidade e dados são, na prática, proxies para o que realmente importa: os usuários se engajam com o produto e concluem suas tarefas com sucesso?

**Latência:** a maneira mais direta de medir a latência do sistema é cronometrar uma operação, como um endpoint, uma função ou uma chamada de procedimento remoto. Ao inserir os resultados em uma métrica no sistema de observabilidade de nossa preferência, obtemos diversas vantagens:

- Ao medir o tempo de todas as operações, obtemos um conjunto abrangente de métricas.
- Se identificarmos uma interação lenta do usuário, dados detalhados de cada operação nos ajudarão a identificar os responsáveis.
- Ao otimizar a latência de uma operação, podemos acompanhar a melhoria por meio de suas métricas.
- Podemos alertar a equipe quando houver regressões significativas.

Esses dados são úteis e, de modo geral, devemos instrumentar o produto dessa forma sempre que a latência for uma preocupação.

Como identificar em que situações a latência realmente é um problema? Vejamos alguns testes práticos com exemplos:

- Quais operações os usuários ou os sistemas upstream aguardam ativamente e quais ocorrem em segundo plano? Qual conteúdo os usuários desejam ver imediatamente, como os primeiros parágrafos de uma página web, e qual pode ser exibido depois?
- Quais fluxos de usuário são mais comuns? Otimizar esses fluxos reduzirá a maior parte do tempo gasto pelos usuários.
- Em que circunstâncias os usuários tendem a ser mais sensíveis à latência? Momentos em que os usuários não têm certeza se continuarão a ler, comprar ou navegar são chamados de momentos de baixa intenção. Usuários podem se distrair nesses momentos.

Essas intuições ajudam, mas, em alguns casos, precisamos de uma abordagem mais rigorosa.

A taxa de conversão é um exemplo de métrica de cenário, pois mede o progresso do usuário ao longo de um cenário.

**Disponibilidade:** assim como ocorre com a latência, devemos otimizar a disponibilidade das operações sob a perspectiva do usuário, ao mesmo tempo em que compreendemos o comportamento do sistema subjacente.

Há muitos aspectos da experiência do usuário que essas métricas não capturam:

- As solicitações de rede estão chegando ao serviço?
- Os retries no lado do cliente estão compensando as instabilidades do serviço, transformando problemas de disponibilidade em aumento da latência?
- A página web que carrega o botão que chama o serviço está realmente renderizando o botão?
- Os usuários estão enfrentando erros no cliente que impedem a realização de chamadas ao servidor?
- Os usuários estão confusos devido a uma mudança recente na UI e não conseguem mais encontrar o botão?

O monitoramento do lado do cliente é facilitado por uma tecnologia que reduz a lacuna entre o sistema e o produto, como o monitoramento de usuários reais (Real User Monitoring, ou RUM). Essas ferramentas capturam problemas vivenciados pelos usuários, incluindo tempos de carregamento de página, erros no lado do cliente, timeouts de rede e assim por diante, e podem correlacionar esses erros com fatores como navegador, versão do aplicativo, localização geográfica e outros.

Aqui estão algumas ideias de tecnologias que ajudam a compensar problemas de disponibilidade do sistema: mecanismos de fluxo de trabalho e redes de distribuição de conteúdo (CDNs).

**Consistência de dados:** a consistência de dados é um dos desafios mais difíceis de analisar sob a perspectiva do usuário, pois há diferentes níveis de consistência que podemos oferecer, cada qual envolvendo trade-offs significativos. Como afirma Martin Kleppmann no excelente Designing Data-Intensive Applications, "As garantias de consistência não vêm de graça: sistemas com garantias mais fortes podem ter desempenho inferior ou ser menos tolerantes a falhas do que sistemas com garantias mais fracas."

| Garantia | Significado |
| --- | --- |
| Write your Writes (WyW) | Todas as gravações futuras consideram gravações anteriores. |
| Read your Writes (RyW) | Quando o usuário lê dados, a leitura considera todas as gravações anteriores que ele realizou. |
| Write after system Writes (WsW) | Atualizações causadas por automações e agentes entram em vigor imediatamente. |
| Write after others' Writes (WoW) | Outros usuários que utilizam o produto não podem realizar gravações sem considerar suas gravações, e vice-versa. |
| Read others' Writes (RoW) | Veremos imediatamente os resultados das gravações de outros usuários assim que receberem confirmação de sucesso. |
| Read after system Writes (RsW) | Edições realizadas por automações e agentes são imediatamente propagadas após confirmação pelo sistema. |

Por exemplo, vamos supor que estejamos construindo endpoints para um pedido coletivo de comida, no qual diferentes usuários podem editar simultaneamente o carrinho, e depois o criador do pedido enviará o pedido final. A seguir, veremos uma análise camada por camada de como projetar isso com foco em consistência:

- **Banco de dados:** podemos utilizar um banco de dados transacional para que todas as gravações sejam consistentes, ou resolver o problema em uma camada superior.
- **Design de sistema:** permita que cada usuário do pedido adicione um item a uma lista no banco de dados, em vez de realizar gravações sobrepostas na mesma tabela. Essa abordagem evita toda uma classe de preocupações relacionadas a RoW e WoW.
- **Entradas do endpoint:** não queremos que solicitações idênticas, repetidas do cliente, resultem em pedidos extras adicionados ao carrinho. Podemos permitir que os clientes forneçam chaves de idempotência, verificando se essas chaves já foram registradas antes de aceitar uma solicitação idêntica.
- **Saídas do endpoint:** forneça os dados atualizados ao cliente. Assim, o cliente pode visualizar o estado atual do carrinho sem precisar fazer uma nova consulta e correr o risco de acessar uma réplica do banco de dados possivelmente desatualizada.
- **Clientes:** utilize cookies ou armazenamento local para armazenar os dados, tornar o aplicativo responsivo e atualizá-lo periodicamente.
- **Decisões de produto:** bloqueie o carrinho quando o proprietário da conta entrar no fluxo de checkout, evitando disputas entre as operações de adicionar pedidos e enviar o pagamento. O proprietário precisará desbloquear o carrinho caso alguém reclame ao tentar adicionar algo de última hora.

Frameworks que reduzem a lacuna entre o que os bancos de dados oferecem e o que o produto exige podem ajudar nesse caso. Por exemplo, vejamos a seguir algumas tecnologias úteis quando os usuários desejam semântica atômica e transacional, mas os bancos de dados subjacentes não oferecem esse suporte:

- **Event sourcing:** esses frameworks mantêm o registro de tudo o que ocorreu como "eventos" e, em caso de falha, os reproduzem e dão continuidade. Podem, por exemplo, ser utilizados para popular um novo banco de dados a partir de um checkpoint. Na prática, uma cadeia inteira de operações é agrupada em uma sequência, e o usuário percebe um comportamento consistente ao longo de toda a sequência.
- **Padrão saga:** esse padrão, que pode ser aplicado ao event sourcing, fornece garantias do tipo "tudo ou nada" para uma funcionalidade do produto, mesmo quando as operações não podem utilizar bancos de dados transacionais. Ao definir uma série de etapas, atribuímos a cada uma um "undo" (desfazer) que é acionado quando algo falha, e o sistema garante que ou tudo ocorre ou nada ocorre.
- **Verificadores de integridade de dados:** verificam bancos de dados quanto à consistência entre si, com base em resultados do usuário que consideramos relevantes, como garantir que, após uma transação financeira, os registros de quem pagou e de quem recebeu estejam consistentes.

**Trade-offs entre latência, disponibilidade e consistência de dados:** Martin Fowler observou que "Arquitetura não é sobre construir o sistema perfeito; mas sobre fazer trade-offs."

**Escalabilidade:** em qualquer produto que depende da internet, a escala traz desafios. O sistema pode ter taxa de transferência limitada, e as consequências de os usuários excederem esses limites podem ser graves, como ocorre em ataques de negação de serviço bem-sucedidos. Esse cenário decorre da falta de isolamento, ou seja, alguns usuários do produto podem prejudicar a experiência de outros.

Existem duas categorias de problemas que limitam a taxa de transferência: gargalos e elasticidade. Gargalos são pontos de estrangulamento que impedem o sistema de suportar mais usuários simultaneamente. Já problemas de elasticidade indicam que poderíamos suportar uma maior taxa de transferência, mas reagimos de forma insuficiente às mudanças na demanda dos usuários, talvez porque o escalonamento do número de máquinas seja lento demais.

**Simulações de escala:** as dinâmicas de escalabilidade são complexas demais para serem compreendidas apenas mentalmente. Precisaremos de scripts sofisticados para testar a carga, picos repentinos de tráfego e a capacidade.

- **Simulação de carga:** um teste que simula um volume de tráfego realista de produção para verificar se conseguimos escalar até certo ponto.
- **Simulação de capacidade:** um teste semelhante que envia volumes crescentes desse tráfego, com o objetivo de identificar os limites do sistema e avaliar sua degradação quando esses limites são alcançados.
- **Simulação de pico:** um teste que eleva rapidamente o tráfego para simular picos realistas de solicitações de usuários, garantindo que o sistema seja elástico.

Priorize alta fidelidade ao ambiente de produção em suas simulações de escala.

**Comunicando requisitos não funcionais aos usuários:** os dois principais objetivos da comunicação com clientes sobre NFRs são alinhar incentivos e construir confiança. Começaremos pelo primeiro.

As garantias são fornecidas em contratos chamados acordos de nível de serviço (Service-Level Agreements, ou SLAs), que normalmente regulam:

- **Disponibilidade:** o tempo de atividade do serviço, medido em porcentagem.
- **Tempos de resposta a incidentes:** com que rapidez os engenheiros devem responder a incidentes?
- **Latência:** qual é o nível de responsividade dos endpoints críticos?

Esses contratos são importantes porque incentivam a empresa a manter foco constante na confiabilidade.

Se você culpar a Amazon Web Services (AWS) por uma interrupção em uma região, os clientes vão concluir que você não pretende fazer nada a respeito no futuro. Se, em vez disso, você explicar que pretende adicionar outra região ou outro provedor de serviços em nuvem para se preparar para desastres, eles entenderão que a empresa está aprendendo com os erros e evoluindo, e terão mais interesse em permanecer como clientes no longo prazo.

Uma prática cultural relacionada que acelera significativamente as melhorias de infraestrutura tanto no Facebook quanto na Stripe é o "blameless postmortem". Nessa abordagem, quando as equipes se reúnem para entender o que ocorreu durante um incidente de produção, o foco recai principalmente nas falhas sistêmicas que permitiram que o incidente ocorresse, em vez de atribuir culpa a indivíduos.

## Encerramento

Assim como as lontras-marinhas, o engenheiro com mentalidade de produto reúne uma combinação rara de habilidades. Pensar em termos de cenários, personas, signifiers e affordances, aliado a competências técnicas, proporciona uma espécie de “empatia estruturada”. Essa abordagem se encaixa muito bem na disciplina da engenharia, pois ajuda a navegar pelos trade-offs envolvidos.

Para desenvolver essas habilidades, o mais importante é simplesmente praticar o foco nos usuários:

- Pergunte constantemente “por quê?”. Por que os usuários estão se comportando dessa maneira? Como se beneficiarão do que estamos construindo?
- Valide o software. Realize dogfooding, testes e simulações, e exponha você e sua equipe aos clientes e ao feedback deles.
- Construa de forma iterativa, em parte para ter contato mais frequente com os usuários.
- Simule as jornadas dos usuários. Da mesma forma que um jogador de xadrez aprende a antecipar cada vez mais movimentos, você pode aprimorar sua capacidade de construir histórias mais longas e completas sobre os usuários.
- Alinhe seus objetivos pessoais e de equipe aos objetivos dos usuários. Dessa forma, você ajuda a manter o foco no que realmente importa.
