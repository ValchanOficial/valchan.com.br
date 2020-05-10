---
date: 2019-09-30
title: "Node.JS + PostgreSQL"
description: "Pequeno CRUD em Node.JS com PostgreSQL."
category: "node"
image: '/assets/img/cover.png'
---

<p class="alinhar"><img src="../assets/images/octocat.gif" alt="Octocat" title="Octocat" width="100" height="100"></p>

Pequeno CRUD em Node.JS com PostgreSQL

**Necessário ter instalado:**
- <a href="https://nodejs.org/en/" target="_blank" rel="nofollow, noreferrer,noopener,external">Node e NPM</a>
- <a href="https://www.enterprisedb.com/downloads/postgres-postgresql-downloads" target="_blank" rel="nofollow, noreferrer,noopener,external">PostgreSQL v11.5</a>
- <a href="https://www.pgadmin.org/" target="_blank" rel="nofollow, noreferrer,noopener,external">pgAdmin</a> //Facilitador na hora de criar a tabela
- <a href="https://www.getpostman.com/" target="_blank" rel="nofollow, noreferrer,noopener,external">Postman</a> //Não é necessário, mas serve para facilitar na hora de fazer as requisições

**Baixe o projeto:**
1. <a href="https://github.com/ValchanOficial/NodePostgreSQL/archive/master.zip" target="_blank" rel="nofollow, noreferrer,noopener,external">Projeto</a> e descompacte;
2. Após descompactar o projeto, execute via terminal o comando: **npm install** para baixar as dependências necessárias;
3. Depois execute o comando **npm start** para iniciar a aplicação.

**O servidor irá subir na porta 3000:**
- <a href="http://localhost:3000/" target="_blank" rel="nofollow, noreferrer,noopener,external">http://localhost:3000/</a>

**Rotas:**

**/find** - Retorna os dados de todos usuários cadastrados. Exemplo:<br>
<code>
        [{<br>
            &thinsp;"id": 0,<br>
            &thinsp;"name": "Valchan",<br>
            &thinsp;"email": "val@valchan.com.br",<br>
        },<br>
        {<br>
            &thinsp; "id": 1,<br>
            &thinsp; "name": "Valéria",<br>
            &thinsp; "email": "valchan@valchan.com.br",<br>
        }]<br>
</code><br>
**/find/:userId** - Retorna os dados de um usuário. Exemplo:<br>
<code>
        {<br>
            &thinsp; "id": 1,<br>
            &thinsp; "name": "Valéria",<br>
            &thinsp; "email": "valchan@valchan.com.br",<br>
        }<br>
</code><br>
**/create** - Cria um usuário. Exemplo:<br>
<code>
        {<br>
            &thinsp; "name": "Valéria",<br>
            &thinsp; "email": "valchan@valchan.com.br"<br>
        }<br>
</code><br>
**/update/:userId** - Atualiza os dados de um usuário. Exemplo resposta 200:<br>
<code>{<br> &thinsp; "message": "User successfully updated! ID: 12"<br> }</code><br>
**/delete/:userId** - Deleta um usuário. 
Exemplo resposta 200:<br>
<code>{<br> &thinsp; "message": "User successfully deleted!"<br> } </code><br>

**Link para o código: <a href="https://github.com/ValchanOficial/NodePostgreSQL" target="_blank" rel="nofollow, noreferrer,noopener,external">Github</a>**