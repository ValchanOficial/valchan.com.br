---
date: 2026-09-19
title: "O Engenheiro de Software com Mentalidade de Produto"
description: "Anotações - parte 1 - Capítulo 1 ao 3"
category: "Livro"
image: "/assets/img/cover/cover2.png"
---

Double Diamond, o ciclo de vida de software é resumido em quatro fases:

- Discover (Descobrir): Identificar quem estamos atendendo e quais problemas precisam ser resolvidos.
- Define (Definir): Arquitetar um produto que resolva esses problemas.
- Develop (Desenvolver): Escolher e detalhar uma implementação.
- Deliver (Entregar): Construir o produto, validar o que foi construído, disponibilizá-lo aos clientes e coletar feedback.

Se questione: “Em que fase estamos agora?”. O engenheiro experiente, com mentalidade de produto, molda o destino do produto ao longo de todas as quatro fases do ciclo de vida.

## Capitulo 1

O que é um cenário? É uma história de usuário projetada para provocar reflexão crítica sobre um produto. Ele é composto por duas partes principais: um personagem e uma simulação de suas ações à medida que descobre e navega por um produto ou funcionalidade para resolver seu problema.

- Persona: informações de contexto, incluindo habilidades e capacidades relevantes.
- Motivação: O que ele quer ou precisa do seu produto no momento em que o utiliza.
- Simulação: é o enredo do cenário, conduzindo o personagem, passo a passo, por todas as ações necessárias para concluir a tarefa.

RCA - Root Cause Analysis: é o porquê ou o para que o usuário está realizando uma ação específica.

Técnica de shoe-shifting: colocar-se no lugar do usuário e refletir sobre o que você realmente saberia e como se comportaria nessa situação.

- O que aconteceu antes e o que levou o usuário até aquele momento? Como ele sabia o que precisava fazer?
- O que acontece depois?
- Devo detalhar melhor alguma etapa?
- Procure por etapas ignoradas e casos extremos ao criar cenários ou revisar cenários.

## Capitulo 2

É dever das máquinas e de quem as projeta compreender as pessoas. Não é nosso deve compreender as regras arbitrárias e sem sentido das máquinas - Don Norman, em The Design of Everyday Things

Signifiers: são pistas na interface sobre o que a funcionalidade faz.

Jornada do usuário:

- Descoberta: o usuário tem um problema que deseja resolver, mas ainda não sabe como.
- Compreensão: o usuário encontra uma funcionalidade e deseja aprender o que ela faz e como ela funciona.
- Uso: o usuário deseja empregar a funcionalidade para a finalidade pretendida, evitando utilizá-la de forma inadequada ou insegura.

Mapa de descoberta de produto:

- Casa mapa ou gráfico é projetado para uma persona específica que está navegando pelo produto, de forma semelhante a percorrer um labirinto.
- Cada nó é um elemento do produto.
- Cada aresta (seta) representa como esse conhecimento é descoberto por essa persona.

Ofereça aos usuários múltiplas maneiras de encontrar uma funcionalidade, considerando os diferentes meios de cada um.

Escolhendo nomes compreensíveis: um nome é a chance de colocar uma ou duas ideias na cabeça do usuário. Além de ajudar na descoberta, um bom nome também deve facilitar a compreensão. Os usuários nem sempre querem saber o que a funcionalidade é; querem saber: “Como isso vai me ajudar?”. Ter mentalidade de produto significa pensar no impacto para o usuário, e não só descrever o sistema.

- Combine imagens e palavras
- WYSIWYG (What You See Is What You Get/ O que você vê é o que você obtém): funcionalidade com pré-visualização em tempo real
- Reformule: utilize sinônimos ou reformulações para descrever funcionalidades em tooltips e na documentação.
- Sempre lembre os usuários do contexto: as pessoas têm memória de curto prazo limitada e podem esquecer em que ponto estavam.

## Capitulo 3

- Como podemos reduzir o gap entre o que faz sentido para nós e o que faz sentido para o usuário?
- Como podemos organizar o código de forma eficaz para atingir esse objetivo?

Diagnósticos podem ser a interface mais importante do seu produto. Criar diagnósticos bem estruturados, com mensagens realmente úteis, é uma forma de investir tempo com um retorno incrivelmente valioso e de alto impacto.

Cenários para diagnósticos:

- Compreender o cenário - a persona que se beneficiará do erro e sua situação.
- Fornecer o contexto suficiente para que os usuários compreendam o erro.
- Fornecer mensagens de erro acionáveis que indiquem o que fazer para resolver o problema.
- Escolher com atenção códigos e tipos de erro, permitindo que os desenvolvedores upstream atendam seus usuários com eficácia.
- Lançar erros na camada de API ou de UI, para que as mensagens possam ser escritas com todo o contexto sobre o que o usuário tentava fazer.
- Fazer shift left; ou seja, identificar erros os mais cedo possível para alertar os usuários a tempo, antes que coas randuimes aconteçam.

Categorizando cenários de erro:

- Qual deve ser a mensagem de erro?
- Qual será a classe ou código do erro?
- Quais metadados são necessários para identificar o problema?

É preciso pensar em duas categorias de cenários: o humano e o do desenvolvedor.

Categorias de erros:

- Erro de sistema: o sistema que processa os pagamentos está fora do ar. Timeouts. Erros trnasitórios sob carga.
- Asserção: essa variável local nunca deveria ser nula.
- Argumento inválido do desenvolvedor: foi recebido um número inteiro quando se esperava uma string.
- Argumento inválido do usuário: o usuário digitou um número de cartão de crédito incorreto.
- Pré-condições não atendidas: o usuário não está autorizado a acessar um determinado recurso ou não fez login.

Mensagem de aviso e der erro:

- O que exatamente aconteceu para causar o erro, em termos da ontologia do produto? Essa explicação deve ajudá-los a entender o impacto da falha e dar pistas sobre como corrigi-la.
- O que podem fazer a respeito, se houver algo a fazer? Diagnósticos acionáveis ajudam diretamente os usuários a concluir a tarefa.

Forneça contexto:

- Retornar os dados relevantes.
- Fornecer um motivo detalhado.
- Lembrar ao usuário o que ele fez.

Uma boa prática é retornar não apenas qual foi a entrada incorreta, mas também o que a operação estava tentando realizar.

O contexto que adicionamos aos erros geralmente deve responder a três perguntas: o que estava sendo tentado, com quem ou com o quê isso estava acontecendo e por que ocorreu a falha.

Torne mensagens de erro e de aviso acionáveis:

Em muitas circunstâncias, saber o que aconteceu é apenas metade do trabalho. Muitas vezes, os usuários precisam receber sugestões ou orientações sobre o que fazer.

Levante erros na interface:

- O que aconteceu no sistema?
- E o que o usuário estava tentando fazer?

As pessoas comentem erros na interface de duas maneiras:

- Levantam erros de forma proativa, utilizando validações antecipadas na fronteiras da API.
- Utilizam manipuladores de erro para interceptar um erro de baixo nível e reempacotá-lo em uma forma apropriada.

Validações antecipadas: lance erros a partir da camada mais externa da sua API ou do código da aplicação, em que é possível capturar o cenário do usuário.

Reempacote erros

Levante erros programáveis:

- Levantar erros específicos: projete erros em tempo de execução, erros de sistema, erros de pré-condições não atendidas e erros de argumentos inválidos do usuário para suportar aninhamento, permitindo que código seja construído sobre eles.
- Agrupar exceções
- Adicionar metadados estruturados e persistir contexto adicional: mantenha suas cadeias de informação robustas. Guarde informações úteis para diagnósticos.

Forneça diagnósticos o mais cedo possível: costuma ser chamado de abordagem shift left e traz inúmeras vantagens para o sistema e para os usuários.

Para o sistema, essa prática reduz o uso de recursos ao interromper a execução de caminhos de código inúteis. Tal redução pode ser crítica, por exemplo, para se defender de ataques de negação de serviço. Também protege esse mesmo código de processar entradas imprevisíveis, prevenindo bugs como perda de dados.

Quatro técnicas comuns para adotar a abordagem shift left:

- Realizar validações estáticas
- Validar antecipadamente
- Permitir que os usuários testem
- Solicitar confirmações do usuário

Dry Run: significa um ensaio, simulação ou teste preliminar de um processo, sem executar as ações reais, para verificar funcionamento e identificar erros.

Reforçando, nas mensagens:

- Forneça contexto. Na maioria dos casos, retorne a operação que estava sendo realizada e os dados incorretos que foram fornecidos.
- Utilize conceitos da ontologia voltada ao usuário do produto.
- Sugira ações e esteja disposto a sugerir alternativas quando não houver apenas uma.

Entregar

Valide o produto com usuários: validar o produto com usuários ajuda a responder questões abertas importantes sobre ele e também a revelar problemas que não haviam sido considerados.
