---
date: 2026-09-19
title: "O Engenheiro de Software com Mentalidade de Produto"
description: "Anotações - parte 2 - Capítulo 4 ao 6"
category: "Livro"
image: "/assets/img/cover/cover2.png"
---

## Capitulo 4

Seja o primeiro cliente do seu próprio produto. Essa é uma forma barata, segura e precoce de validação.

Beta testers: são usuários voluntários ou selecionados que testam uma versão preliminar (beta) de software, aplicativos ou produtos antes do lançamento oficial ao público.

Dogfooding: prática da equipe utilizar o próprio produto. Vantagens:

- Pode ocorrer mais cedo no ciclo de vida do produto, antes que o lançamento esteja pronto para pessoas externas à empresa.
- É mais barato testar internamente ou com colegas do que com usuários finais.
- Não traz consequências negativas para os usuários nem compromete a confiança deles.

Abordagens:

- Escrever testes de cenário que validam o produto, espelhando o uso no mundo real.
- Escrever guias de uso para descrever como é utilizar o produto. Se feita com atenção, essa prática alerta sobre problemas com antecedência.
- Documentar “registros de atrito”, que detalham a experiência durante o dogfooding. Essa prática incentiva o dogfooding e gera um feedback mais rico.
- Criar amostras e testá-las (para produtos que se adequam).

Ao utilizar testes automatizados bem selecionados, podemos:

- Verificar a correção em cenários-chave.
- Aprimorar casos extremos.
- Documentar o uso pretendido.
- Obrigar-nos a refletir sobre o que estamos construindo.
- Construir algo de valor duradouro que possa ser executado repetidamente.

Mocks: placeholders não funcionais que verificam se dependências são chamadas de determinadas formas.

Fakes: substituições simplificadas para funcionalidades complexas.

Pressão de produto: é a validação informada pelas sequências de ações que os usuários provavelmente executarão, individualmente e coletivamente. Lista de testes ordenada de acordo com a pressão de produto:

- Testes unitários
- Testes de integração
- Testes funcionais
- Testes de cenário
- Simulações de carga
- Testes end-to-end
- Testes de aceitação do usuário

Principais objetivos ao elaborar uma estratégia de realização de testes são:

- Minimizar os riscos mais críticos de sistema e de produto que poderiam comprometer o funcionamento do produto.
- Certificar-se de que os cenários-chave identificados durante a fase de Descoberta seja testados.
- Evitar testes de aceitação do usuário repetidos por meio da automação.
- Criar testes de alto valor em relação ao esforço investido.
- Manter uma alta relação sinal-ruído, em que as falhas sejam, sem geral, relevantes.
- Cobrir casos extremos importantes com teste funcionais.

Testes a evitar:

- Testes unitários que dependem de muitos detalhes de implementação e de dependências simuladas costumam exigir manutenção frequente à medida que a base de código evolui. Em alguns casos, o autor relata que que exclui testes unitários que escreveu durante a implementação, quando já existem testes funcionais que os cobrem adequadamente.
- Testes end-to-end excessivamente minuciosos, com asserções específicas demais, quebram com frequência à medida que a superfície do produto evolui.
- Simulações de carga que utilizam padrões de tráfego irreais podem levar a decisões de escalonamento e endurecimento excessivos do sistema que jamais serão necessárias.

Desenvolvimento orientado à documentação: escrever documentação é uma excelente forma de aprender sobre o próprio produto e aprimorá-lo enquanto se ensina.

Há três níveis de conhecimento do usuário: Knowns, Known Unknowns e Unknown Unknowns.

- Deixe claro quais personas são o público-alvo e adapte a documentação a cada uma delas.
- Devemos encontrar os usuários no ponto em que estão, distinguindo entre o que têm em mente inicialmente e o que precisarão aprender.
- Utilize guias conceituais para ensinar primitivas ou conceitos que serão reutilizados ao longo do produto.

Meça a qualidade da interface de uma funcionalidade pelo tamanho do guia de uso necessário para explicá-la.

O processo de escrever documentação nos obriga a mudar de perspectiva e considerar a jornada do usuário.

Registro de atrito: é um documento informal que escrevemos ao utilizar o produto. É um diário de um cenário, com ênfase nos pontos de atrito.

- Comece apresentando a persona que representa. O produto é novo para você?
- Quais conhecimentos prévios podem influenciar a sua experiência?
- Expresse sua intenção ao usar o produto.
- A maior parte do documento deve descrever os pontos mais relevantes da sua experiência.

Receber registros de atrito é extremamente útil. Conhecer a realidade concreta da experiência de um usuário com o produto é valioso. Considere os seguintes perfis:

- Você mesmo: coloque-se no lugar um usuário iniciante.
- Early adopters: solicite que escrevam registros de atrito.
- Novos integrantes da equipe: convide-os a registrar atritos para se familiarizarem com os detalhes do produto.
- Desenvolvedores, designers, cientistas de dados etc.: reúna pessoas para sessões coletivas de uso do produto, como bug bashes ou hackathons.

O registro de atrito deve ser um espaço seguro no qual possamos comentar e até apontar detalhes minuciosos sobre os produtos de outras pessoas, e no qual a equipe que recebe o feedback se sinta confortável para decidir se e quando priorizar o que identificado.

## Capitulo 5

Gêmeo digital: é a combinação de tecnologias projetadas para capturar e simular o que ocorre no mundo real. É uma representação virtual e um conjunto de simulações de um sistema em produção e do hardware subjacente no qual ele é executado. Ex.: carros autônomos.

Gêmeo digital - Qual seria o equivalente em um produto de software comum? é a combinação de testes automatizados e ambientes de teste, métricas e alertas, camadas beta, instrumentação em produção, análises e rastreamentos. Inclui também feedback de fóruns, registros de chat de suporte ao clientes, casos de reprodução e transcrições de entrevistas de descoberta com clientes. Abrange tudo o que ajuda a construir um retrato, quantitativo ou qualitativo, de como o produto está se comportando no mundo real.

Cada funcionalidade que construímos deve:

- Atender aos requisitos de produto, obviamente.
- Estabelecer confiança de que cumpre esses requisitos e continuará cumprindo-os à medida que novas mudanças forem incorporadas, para podermos automatizar os mecanismos de entrega.
- Ser fácil de evoluir conforme novos requisitos surgirem, evitando ficarmos presos a decisões anteriores.

Quais são os componentes de uma stack de software iterativa que permitam às equipes acompanhar requisitos de produto em constante mudança e o aumento das demandas dos usuários?

- Sempre escreva testes automatizados, dedicando especial esforço à validação dos cenários mais importantes. Uma cobertura de testes sólida, com cenários mais relevantes devidamente validados, gera confiança de que mudanças não comprometerão as interações mais críticas dos usuários com o produto.
- Utilize testes de integração contínua, exigindo que os testes sejam aprovados antes que novo código seja incorporado ao repositório, para que bugs sejam identificados rapidamente quando forem introduzidos.
- Utilize flags de funcionalidade, mecanismos que permitem ativar ou desativar funcionalidades independentemente do deploy do código. Flags de funcionalidade viabilizam mudanças cuidadosas e quase instantâneas. Elas também permitem introduzir gradualmente novo código, criando confiança para experimentar com segurança.
- Realize revisão de código para garantir que cada alteração atenda às necessidades dos clientes, seja manutenível e bem testada.
- Instrumente o produto com métricas operacionais que monitorem fatores como taxas de erro, taxas de conclusão do fluxo, desempenho e capacidade, em tempo real. Devemos monitorá-las e configurar alertas quando apresentarem anomalias, assegurando, especialmente, que estejam calibradas para detectar erros precocemente durante um lançamento problemático.
- Adote primitivas de resiliência, como filas, retries e limites de taxa, que restrinjam o raio de impacto (blast radius) que um sistema com falha pode causar a outros sistemas em caso de falha.

Devemos incorporar, em cada componente, mecanismos que nos permitam confiar nele. Ou seja, cada mudança deve vir acompanhada de validações que comprovem sua operação, o cumprimento dos requisitos dos produto e a continuidade desse desempenho.

Além de confiança, também precisamos tornar as próprias mudanças mais simples e eficazes:

- Monitore métricas de produto vinculadas a resultados de negócio, à adoção e ao sucesso dos clientes, orientando decisões consistentes sobre o que modificar.
- Dedique atenção contínua a ferramentas e processos que ajudem a superar restrições de compatibilidade retroativa que se acumulam ao longo do tempo. Por exemplo, construa ferramentas de migração de banco de dados ou viabilize novas versões de API que permitam atualização sem impactar os usuários de versões anteriores.
- Utilize abstrações como módulos, sistemas de tipos e protocolos projetados para compatibilidade retroativa versionada, facilitando a coordenação por meio de interfaces bem definidas. Essas práticas permitem que equipes avancem de forma independente ao separarem responsabilidades.

Construa em cada componente mecanismos que viabilizem sua evolução. Os componentes devem ser extensíveis, manuteníveis e instrumentados para apoiar a tomada de decisões-chave.

Então, uma vez que estabelecemos confiança e tornamos a mudança simples, o que vem em seguida?

- Faça deploys com a maior frequência possível para disponibilizar patches críticos e novas funcionalidades com rapidez. Se estiver operando um serviço online, o ideal é adotar a implantação contínua e utilizar a implantação azul/verde ou implantação arco-íris para liberar novas versões gradualmente e permitir rollback imediato em caso de problema.
- Mantenha um programa beta ou de early adopters para que clientes mais engajados possam testar e refinar novas funcionalidades, além de sinalizar lançamentos que possam impactá-los. Em alguns casos, isso pode ser viabilizado com flags de funcionalidade.
- Faça rollouts graduais: disponibilize a nova versão inicialmente a uma seleção aleatória e imparcial de pessoas antes de expandir para 100%. É importante que não seja sempre o mesmo grupo, para evitar expor repetidamente os mesmos usuários a versões instáveis sem que percebam.
- Tenha uma plataforma de analytics flexível, que permita alterar facilmente as consultas à medida que surgem novas dinâmicas ou a necessidade de investigar problemas imprevistos.
- Experimente utilizar um framework de testes A/B para comparar o desempenho de diferentes versões de funcionalidades.

Slicing and dicing: é um técnica de análise de dados usada em ferramentas OLAP (Online Analytical Processing) para dividir e explorar grandes conjuntos de dados multidimensionais de forma flexível.

  O QUE VOCÊ FARIA SE NÃO TIVESSE MEDO? - Laboratório de Pesquisa Analógica do Facebook

Obtendo feedback de usuários:

- Versões beta
- Widgets de feeback
- Programas de champions

Busque criar um ciclo flywheel de feeback no qual os usuários retornem em busca de suporte de qualidade enquanto contribuem para a melhoria do produto. Oferecer suporte de qualidade envolve alguns componentes simples:

- Ser responsivo e eliminar barreiras de entrada.
- Agir com cordialidade.
- Explorar o cenário do usuário.
- Resolver o problema do usuário.
- Perguntar como o produto poderia ter atendido melhor.
- Escalar o suporte, tornando-o mais eficiente à medida que a base de usuários cresce.

O poder do suporte ao usuário:

- Ofereça um excelente suporte aos usuários para gerar um efeito de ciclo flywheel.
- Aprofunde a compreensão dos cenários dos clientes, obtendo mais insight para corrigir os problemas deles e aprimorar o produto.
- Pré-aloque uma quantidade determinada de tempo da equipe para suporte, de forma estruturada, evitando distribuir essa responsabilidade aleatoriamente entre todos os membros.
- Concentre-se explicitamente no escalonamento do suporte para atender a mais usuários com o mesmo nível de esforço.
- Torne fácil realizar melhorias tanto no código quanto na documentação.

Métricas de produto podem ser organizadas em três categorias distintas:

- Indicadores-chave de desempenho (KPIs)
- Métricas de valor
- Métricas de adoção

Comparação entre métricas táticas e estratégicas:

Métrica tática Métrica estratégica Indicador antecedente Indicador retrospectivo Impulsionada por foco Impulsionada por criatividade Facilmente manipulável Difícil de controlar Mede valor potencial para o usuário Mede valor real para o usuário Fácil e medir com precisão Difícil de ser atribuída à funcionalidade

## Capitulo 6

Construa para um usuário específico.

Que tipo de pessoa utilizaria nosso produto neste estágio?

- Ator irracional: toma decisões que contradizem suas próprias motivações. É aquele consumidor econômico, com orçamento apertado, que decide pagar oito dólares por um latte. Ou o influenciador que ganha milhares por mês atuando em plataformas já consolidadas, mas que testará sua rede social vazia só porque você ofereceu um cartão-presente de 10 dólares da Amazon.
- Usuária fã entusiasmada: ama o produto sem um motivo claro. Está disposta a publicar nas redes sociais para divulgar aos amigos, e seu entusiasmo contagiante fará com que eles experimentem. Adotará instantaneamente cada funcionalidade lançada, publicando capturas de tela e vídeos de uso.
- Usuário estoico: é o tipo que passa o dia usando o produto. Está disposto a aprender o que for preciso, mesmo que seja complicado; testa funcionalidades demoradas sem reclamar; e, se o produto falhar ou mudar demais, só respira fundo e tenta outra vez.
- Clone: sabe tanto sobre o sistema quanto sobre a gente, e por isso, não precisa de mecanismos de descoberta. O conhecimento dele do funcionamento interno faz com que tenha uma tolerância incomum a comportamentos pouco intuitivos. O Clone escancara a armadilha da “maldição do conhecimento”.
- Mãe ou pai: são pessoas reais, mas, infelizmente, temos, no máximo, um ou dois exemplares por perto.

Descoberta com clientes:

Antes de construir um produto ou funcionalidade, precisamos entender o que pode motivar os usuários a adotá-lo ou a rejeitá-lo. Quando um número suficiente de usuários compartilha incentivos e condições semelhantes, isso se consolida em uma persona. As personas são cruciais no início para definir com quem devemos conversar, e mais adiante, para testar diferentes ideias de produto e funcionalidades.

Conseguindo entrevistas:

- Trabalhe em estreita colaboração com profissionais voltados ao cliente, como UX Researcher ou Gerente de Produto. Também é possível recorrer à área de vendas e se conectar com um Gerente de Contas, Representante de Sucesso do Cliente, Profissional de Marketing ou Arquiteto de Soluções. Pergunte a eles se pode acompanhar uma reunião já agendada e reserve alguns minutos ao final para fazer perguntas.
- Faça networking com profissionais que trabalham diretamente com clientes; isso lhe permitirá solicitar entrevistas dedicadas, e eles até podem viabilizá-las para você. Ofereça suporte técnico ou apresente o roadmap futuro. Clientes costumam se sentir valorizados quando um engenheiro dedica seu tempo a conversar com eles.
- Pergunte aos usuários, durante as interações de suporte, se estariam dispostos a participar de uma entrevista. Se o suporte foi útil, é provável que aceitem!
- Trabalhe em estreita colaboração com profissionais que conheçam o que as outras pessoas desejam.
- Conduza uma pesquisa e utilize-a para identificar quem se voluntaria para participar de entrevistas de acompanhamento.

Entrevistas de descoberta com clientes (CDIs): são conversas estruturadas com clientes atuais ou potenciais. Há três objetivos básicos:

- Compreender as motivações profundas e o contexto do usuário.
- Avaliar a intensidade dessas motivações.
- Se já houver uma ideia concreta de produto, incentive a criatividade da pessoa entrevistadas ao solicitar feedback sobre a ideia, o mock ou o protótipo.

Quanto menos você direcionar o usuário, mais confiável será a resposta dele.

Peça ao usuário que conte exemplo concretos de situações vividas:

- Os usuários permanecem no concreto, relatando o que realmente fizeram, em vez de, sem querer, construir uma narrativa distorcida sobre o que acreditam que desejam ou aspiram a fazer.
- Analisar uma história concreta ajuda a construir cenários que orientarão o trabalho de design posteriormente.
- Histórias ativam a memória dos usuários e trazem à tona detalhes importantes da experiência.

Prepare um guia de entrevista para consultar ao longo da conversa, ele pode incluir uma ou duas perguntas iniciais, focadas no universo do usuário; uma ou duas para a fase intermediária, que conectam o usuário ao produto. e algo para apresentar na fase final, já voltado ao produto.

Ao final é importante anotar os insights mais relevantes que surgiram. Também é recomendado avaliar a intensidade do sinal presente nas respostas dos clientes, para entender a importância relativa de diferentes fatores.

Chamada de vendas:

Engenheiros às vezes são convidados a participar de chamadas de vendas para fornecer respostas técnicas, impressionar clientes, apresentar o roadmap ou avaliar a viabilidade de atender a necessidades específicas. Essas chamadas também podem ser uma oportunidade de descoberta junto aos clientes, afinal, a pessoa responsável pelas vendas também quer entender a persona do usuário.

Pesquisas de descoberta com clientes:

Permitem identificar necessidades do usuário de forma mais ampla do que as entrevistas, embora não sejam tão adaptáveis nem tão aprofundadas.

Regras gerais para entrevistas com clientes:

- O entrevistado deve se sentir à vontade para expressar opiniões, dar feedback e apresentar dúvidas.
- Quanto menos você direcionar as respostas, mais confiáveis elas serão. Esse princípio deve vir em primeiro lugar, especialmente no início da entrevista.
- Formule perguntas neutras, sem embutir expectativas pessoais.
- Peça a ele que mencione situações concretas, em vez de opiniões abstratas ou especulações. “Conte sobre alguma ocasião em que…” costuma ser uma bom ponto de partida.

Aproveite as conexões estabelecidas com alguns entrevistados para futuras conversas.

Escolhendo um público-alvo: o público-alvo é umas versão generalizadas de uma persona. Esses usuários potenciais devem:

- Ser baseados em um perfil demográfico real;
- Ter uma motivação significativa para utilizar o produto, especialmente em comparação com alternativas concorrentes.
- Ter meios para adquiri-lo e utilizá-lo.
- Não apresentar motivações fortes para evitá-lo.

Alinhando a equipe com personas:

Quanto mais complexo for o produto, mais importante é que todos utilizem as personas para manter a sintonia.

Ao documentar um público-alvo, reunimos suas necessidades em um só lugar. Podemos então utilizar essas necessidades para alinhar o time sobre o que significa sucesso. Se atendemos apenas duas das três necessidades essenciais do público, ainda há trabalho a fazer. Ainda não é hora de lançar o produto.

Também precisamos deixar claro que não estamos buscando atender. Esses são chamados de nonpersonas.

Nonpersonas ajudam a evitar o trabalho extra que desacelera o desenvolvimento e não contribui para os objetivos imediatos, o que costumamos chamar de scope creep.

A maioria dos produtos bem-sucedidos atende a múltipla personas.

Quando personas entram em conflito:

Lidar com incentivos conflitantes entre personas opostas está entre os problemas de produto mais difíceis - e os mais valiosos - de resolver.

Compreendendo o valor de um cliente:

Cada cliente traz valor ao ecossistema. Talvez ele produza conteúdo, envie relatórios de bugs, ofereça bens e serviços ou gere receita para a empresa, permitindo financiar melhorias no produto. Precisamos compreender esse valor e, então, cultivar os usuários que mais precisam de nossas contribuições.

O valor pode até ser dinâmico, dependendo de fatores de mercado. No transporte por aplicativo, o valor de um motorista é maior quando há escassez de motoristas. Aumentar seus pagamentos coloca mais motoristas nas ruas e permite gerar mais receita.

Priorizando entre personas concorrentes:

Se o produto sustenta um marketplace multilateral, será necessário priorizar o desenvolvimento de funcionalidades entre os diferentes lados.
