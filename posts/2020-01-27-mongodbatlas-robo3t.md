---
date: 2020-01-27
title: "Conectando MongoDB Atlas + Robo 3T"
description: "Tutorial de como conectar o MongoDB Atlas com o Robo 3T."
category: "mongodb"
---

Step by step ~ Primeiramente você precisa ter sua conta criada no <a href="https://www.mongodb.com/cloud/atlas" target="_blank" rel="nofollow, noreferrer,noopener,external"> <b>MongoDB Atlas</b></a> e ter o <a href="https://robomongo.org/download" target="_blank" rel="nofollow, noreferrer,noopener,external"> <b>Robo3T</b></a> instalado.

Tendo sua conta criada no MongoDB Atlas, crie seu cluster e projeto (recomendo os free se você estiver apenas começando a conhecer). Muito importante: guarde seu user e senha do projeto, que você precisará para se conectar ao Robo3T. 

Abra o Robo3T e siga as instruções:

- Clique em "File" (canto superior esquerdo) -> Depois em "Connect..";
- Clique em "Create";
- Na primeira aba de "<b>Connection</b>";
- Type: "Direct Connection";
- Name: o nome que você quiser colocar xD;
- Address: 
- - para conseguir o address você precisará acessar no MongoDB Atlas o seu projeto, clicando no "Cluster", você verá algumas informações sobre seu Cluster incluindo a "REGION", que é uma primária e duas secundárias, o nome será algum texto parecido com esse: <b>cluster-shard-00-00-qdmfp.gcp.mongodb.net</b>, copie o texto e cole na primeira parte do Address do Robo3T e a porta é a padrão do MongoDB: 27017.

<p class="alinhar"><img class="tamanho" src="../assets/images-posts/mongodb.png" alt="Cluster do MongoDB Atlas"/></p>

<p class="alinhar"><img class="tamanho" src="../assets/images-posts/robo3t_1.png" alt="Aba Connection do Robo3T"/></p>

- Na aba de "<b>Authentication</b>" ;
- - Marque o checkbox "Perform authentication";
- - Em "Database": "admin";
- - Em "User Name": coloque seu usuário criado no projeto do MongoDB Atlas;
- - O mesmo vale para o campo "Password", coloque a senha que você criou no MongoDB Atlas;
- - "Auth Mechanism": "SCRAM-SHA-1".

<p class="alinhar"><img class="tamanho" src="../assets/images-posts/robo3t_2.png" alt="Aba Authentication do Robo3T"/></p>

- Na aba "<b>SSL</b>":
- - Marque o checkbox "Use SSL protocol";
- - "Authentication Method": "Self-signed Certificate".
- Depois clique em "Save" para salvar todas as suas configurações e "Test" para testar a conexão.

<p class="alinhar"><img class="tamanho" src="../assets/images-posts/robo3t_3.png" alt="Aba SSL do Robo3T"/></p>

Feito isso você conseguirá acessar seu banco pelo Robo3T! :3

Aproveitando para avisar -> usando o código <b>MAXIME200</b> você ganha $200 para usar como quiser no MongoAtlas.
Para ativar o código é bem simples:
- Vai em "Organizations" (clicando no menu que fica no canto superior direito);
- Seleciona a "Organization Name" que você quer ativar;
- Billing;
- Ali em Credits -> "Apply Credit";
- Adiciona o código e "Submit" e pronto :3
