---
date: 2023-03-22
title: "Bancos de dados NoSQL"
description: "Famílias de banco de dados NoSQL"
category: "NoSQL"
image: "/assets/img/cover.png"
---

Os bancos de dados NoSQL estão divididos em 4 famílias:

- Baseado em documentos;
- Baseado em chave-valor;
- Baseado em colunas;
- Baseado em grafos.

## **Banco de dados baseado em documentos**

Os baseados em documentos, são perfeitos para trabalhar com dados não estruturados, além disso, um documento pode conter vários outros documentos. São utilizados para armazenar dados de forma flexível, sem a necessidade de um esquema pré-definido.

Exemplos: MongoDB; CouchDB; ArangoDB; RethinkDB; OrientDB; RavenDB.<br/><br/>
Casos de uso (MongoDB):

- Análise de dados em tempo real;
- Controle/Gerenciamento de informações de usuários;
- Armazenamento de dados de sessão;
- IOT (Internet das coisas);
- Catálogo de produtos.

<hr/>

## **Banco de dados chave-valor**

O modelo chave-valor é conhecido por sua facilidade de gerenciamento, com o funcionamento igual ao de um dicionário, o dado armazenado é registrado em uma chave, e para a recuperar o valor é necessário informar apenas a chave.

Exemplos: Redis; Memcached; DynamoDB; Riak; Tokyo Cabinet; Scalaris.<br/><br/>
Casos de uso (Redis):

- Cache de informações frequentemente acessadas;
- Armazenamento de informação de sessão de usuário;
- Chats, sistemas de mensagem;
- Placares de jogos;
- Análise de dados em tempo real (Redis Search).<br/>

Curiosidade: o Redis Search trabalha de forma muito semelhante ao Elastic Search.

<hr/>

## **Banco de dados colunar**

O modelo colunar de armazenamento mantém cada coluna do banco de dados separadamente, guardando contiguamente os valores de atributos pertencendo à mesma coluna, de forma densa e comprimida. Essa forma de armazenamento pode beneficiar a leitura dos dados, porém, comprometendo a escrita do disco. São utilizados para consulta de grandes volumes de dados.

Exemplos: Cassandra; Hadoop; HBase; Google BigTable, Google BigQuery; Hypertable; Amazon Redshift.<br/><br/>
Casos de uso (Cassandra):

- E-commerce e gestão de inventário;
- Eventos time-series;
- Serviços de pagamento/financeiros;
- Distribuição e armazenamento de conteúdo.

<hr/>

## **Banco de dados baseado em grafos**

Utiliza o modelo de grafos, foca bastante nas relações entre os dados, tornando essa relação inclusive mais importante que os dados em si. Ele faz uso de algoritmos tradicionais como Dijkstra para proporcionar uma alta velocidade de resposta para consultas complexas.

É formado por 3 componentes básicos:

- Nós: são os vértices do grafo, a unidade básica, o registro no banco;
- Relacionamentos: são as arestas, a conexão/ ligação entre os nós;
- Propriedades (ou atributos): informações dos nós e relacionamentos.

Exemplos: Neo4j; OrientDB; FlockDB; Titan; InfoGrid; Infinite Graph; HyperGraphDB.<br/><br/>
Casos de uso (Neo4j):

- Redes sociais;
- Detecção de fraude;
- Recomendação de conteúdo;
- Controle e gestão de identidade;
- Análise de riscos;
- Mapas e coordenação de rotas.

<div class="mediumSize" align="center">

![Dev Girl and Analytics Boy](/assets/img/tech-data.png)

</div>

**_Fontes:_**

- PUCRS - Pós-Graduação em Desenvolvimento Full Stack

- <a href="https://neo4j.com/news/introducao-aos-bancos-de-dados-nosql/" target="_blank" rel="noopener noreferrer">Neo4j News - Introdução aos bancos de dados NoSQL</a>

- <a href="https://turing.pro.br/anais/ERBD-2013/artigos/pesquisa/111410.pdf" target="_blank" rel="noopener noreferrer">PDF TuringProBr - Modelo de Banco de Dados Colunar - Bruno Eduardo Soares, Clodis Boscarioli</a>

- <a href="https://kondado.com.br/blog/blog/2019/10/31/o-que-e-um-banco-de-dados-colunar/" target="_blank" rel="noopener noreferrer">Kondado - O que é um banco de dados colunar</a>

Se você quiser fazer um curso de pós-graduação, MBA ou certificação de curta duração na PUCRS, só falar comigo que eu tenho cupom de desconto de 12% 😉
