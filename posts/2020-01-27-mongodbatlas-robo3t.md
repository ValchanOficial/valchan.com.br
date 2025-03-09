---
date: 2020-01-27
title: "Conectando MongoDB Atlas + Robo 3T"
description: "Tutorial de como conectar o MongoDB Atlas com o Robo 3T."
category: "mongodb"
image: '/assets/img/cover/cover2.png'
---

Step by step ~ Primeiramente você precisa ter sua conta criada no <a href="https://www.mongodb.com/cloud/atlas" target="_blank" rel="nofollow, noreferrer,noopener,external">MongoDB Atlas</a> e ter o <a href="https://robomongo.org/download" target="_blank" rel="nofollow, noreferrer,noopener,external">Robo3T</a> instalado.

Tendo sua conta criada no MongoDB Atlas, crie seu cluster e projeto (recomendo os free se você estiver apenas começando a conhecer). Muito importante: guarde seu user e senha do projeto, que você precisará para se conectar ao Robo3T. 

Abra o Robo3T e siga as instruções:

- Clique em "File" (canto superior esquerdo) -> Depois em "Connect..";
- Clique em "Create";
- Na primeira aba de "**Connection**";
- Type: "Direct Connection";
- Name: o nome que você quiser colocar xD;
- Address: 
- - para conseguir o address você precisará acessar no MongoDB Atlas o seu projeto, clicando no "Cluster", você verá algumas informações sobre seu Cluster incluindo a "REGION", que é uma primária e duas secundárias, o nome será algum texto parecido com esse: **cluster-shard-00-00-qdmfp.gcp.mongodb.net**, copie o texto e cole na primeira parte do Address do Robo3T e a porta é a padrão do MongoDB: 27017.

![Cluster do MongoDB Atlas](/assets/img/mongodb.png)
![Aba Connection do Robo3T](/assets/img/robo3t_1.png)

- Na aba de "**Authentication**" ;
- - Marque o checkbox "Perform authentication";
- - Em "Database": "admin";
- - Em "User Name": coloque seu usuário criado no projeto do MongoDB Atlas;
- - O mesmo vale para o campo "Password", coloque a senha que você criou no MongoDB Atlas;
- - "Auth Mechanism": "SCRAM-SHA-1".

![Aba Authentication do Robo3T](/assets/img/robo3t_2.png)

- Na aba "**SSL**":
- - Marque o checkbox "Use SSL protocol";
- - "Authentication Method": "Self-signed Certificate".
- Depois clique em "Save" para salvar todas as suas configurações e "Test" para testar a conexão.

![Aba SSL do Robo3T](/assets/img/robo3t_3.png)

Feito isso você conseguirá acessar seu banco pelo Robo3T! :3

Aproveitando para avisar -> usando os códigos **GETATLAS, JOEK100 e LAUREN200** você ganha até $400 para usar como quiser no MongoAtlas.
Para ativar o código é bem simples:
- Vai em "Organizations" (clicando no menu que fica no canto superior direito);
- Seleciona a "Organization Name" que você quer ativar;
- Billing;
- Ali em Credits -> "Apply Credit";
- Adiciona o código e "Submit" e pronto :3


Encontrei os codes no <a class="hashtag" href="https://www.reddit.com/r/mongodb/comments/koki7a/jan_1_2021_credit_codes/" target="_blank" rel="noopener noreferrer">Reddit</a>
