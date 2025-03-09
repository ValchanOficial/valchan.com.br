﻿---
date: 2019-08-11
title: "Node.JS + Mongoose + mongoose-auto-increment"
description: "CRUD em Node.JS utilizando o Mongoose e mongoose-auto-increment."
category: "node"
image: '/assets/img/cover/cover2.png'
---

Link: <a href="https://www.npmjs.com/package/mongoose-auto-increment" target="_blank" rel="nofollow, noreferrer,noopener,external">mongoose-auto-increment</a>

**Necessário ter instalado:**
- <a href="https://nodejs.org/en/" target="_blank" rel="nofollow, noreferrer,noopener,external">Node e NPM</a>
- <a href="https://www.mongodb.com/download-center/community" target="_blank" rel="nofollow, noreferrer,noopener,external">MongoDB</a>
- <a href="https://www.getpostman.com/" target="_blank" rel="nofollow, noreferrer,noopener,external">Postman</a> //Não é necessário, mas serve para facilitar na hora de fazer as requisições

**Baixe o projeto:**
1. <a href="https://github.com/ValchanOficial/NodeMongo/archive/master.zip" target="_blank" rel="nofollow, noreferrer,noopener,external">Projeto</a> e descompacte;
2. Após descompactar o projeto, execute via terminal o comando: **npm install** para baixar as dependências necessárias;
3. Depois execute o comando **nodemon start** para iniciar a aplicação.

**O servidor irá subir na porta 3000:**
- <a href="http://localhost:3000/" target="_blank" rel="nofollow, noreferrer,noopener,external">http://localhost:3000/</a>

**Rotas:**

**/find** - Retorna os dados de todos usuários cadastrados. Exemplo:
```bash
        [{
            "_id": 0,
            "name": "Valchan",
            "email": "val@valchan.com.br",
            "__v": 0
        },
        {
             "_id": 1,
             "name": "Valéria",
             "email": "valchan@valchan.com.br",
             "__v": 0
        }]
```
**/find/:userId** - Retorna os dados de um usuário. Exemplo:
```bash
        {
             "_id": 1,
             "name": "Valéria",
             "email": "valchan@valchan.com.br",
             "__v": 0
        }
```
**/create** - Cria um usuário. Exemplo:
```bash
        {
             "name": "Valéria",
             "email": "valchan@valchan.com.br"
        }
```
**/update/:userId** - Atualiza os dados de um usuário. Exemplo resposta 200:
```bash
{  "message": "User updated successfully!" }
```
**/delete/:userId** - Deleta um usuário. 
Exemplo resposta 200:
```bash
{  "message": "User deleted successfully!" }
```

**Link para o código: <a href="https://github.com/ValchanOficial/NodeMongo" target="_blank" rel="nofollow, noreferrer,noopener,external">Github</a>**
