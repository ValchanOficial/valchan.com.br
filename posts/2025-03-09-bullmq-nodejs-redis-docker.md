---
date: 2025-03-09
title: "Gerenciando Filas com BullMQ + Node.JS + Redis + Docker"
description: "Aprenda a configurar o BullMQ com Redis usando Docker e exemplos práticos para sua implementação."
category: "BullMQ"
image: "/assets/img/cover/cover2.png"
---

O gerenciamento eficiente de filas é essencial para aplicações que precisam lidar com tarefas assíncronas, como processamento de jobs em background, envio de e-mails e geração de relatórios. O <a href="https://docs.bullmq.io/" target="_blank" rel="noopener noreferrer">BullMQ</a> é uma biblioteca poderosa baseada em Redis que facilita esse gerenciamento no Node.js. Neste artigo, vamos configurar o BullMQ com Redis usando Docker e apresentar exemplos práticos para sua implementação.

## 1. Configurando o Redis com Docker

O BullMQ utiliza o Redis como seu backend. Para evitar a instalação direta do Redis no sistema, podemos utilizar o Docker para rodá-lo em um contêiner isolado.

### Instalação do Docker

Caso ainda não tenha o Docker instalado, siga as instruções do meu outro post e veja como instalar: <a href="https://valchan.com.br/install-wsl-with-docker-windows/" target="_blank" rel="nofollow, noreferrer,noopener,external">Windows + WSL2 + Docker</a>

### Executando o Redis no Docker

Execute o seguinte comando para iniciar um contêiner Redis:

```docker run -d --name redis-bullmq -p 6379:6379 redis```

Esse comando:

- -d: Executa o contêiner em segundo plano
- --name redis-bullmq: Nomeia o contêiner
- -p 6379:6379: Expõe a porta 6379 (padrão do Redis)
- redis: Usa a imagem oficial do Redis

Para verificar se o Redis está rodando, use:

```docker ps```

E para se conectar ao Redis dentro do contêiner:

```docker exec -it redis-bullmq redis-cli```

## 2. Criando um Projeto Node.js com BullMQ

Agora, vamos configurar um projeto Node.js e instalar as dependências necessárias.

### Criando o projeto

```bash
mkdir bullmq-example && cd bullmq-example
npm init -y
```

Instalando as dependências

```npm install bullmq ioredis dotenv```

Aqui instalamos:

- bullmq: Biblioteca de gerenciamento de filas
- ioredis: Cliente Redis para Node.js
- dotenv: Para carregar variáveis de ambiente

## 3. Configurando e Criando uma Fila com BullMQ

### Criando o arquivo .env

Crie um arquivo .env na raiz do projeto para armazenar a configuração do Redis:

```
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
```

### Criando a conexão com o Redis

Crie um arquivo queue.js para configurar a fila:

```javascript
const { Queue } = require('bullmq');
require('dotenv').config();

const connection = {
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
};

const queue = new Queue('taskQueue', { connection });

async function addJob() {
  await queue.add('exampleJob', { message: 'Hello, BullMQ!' });
  console.log('Job adicionado à fila!');
}

addJob();
```

Esse código:

- Cria uma conexão com o Redis
- Define uma fila chamada taskQueue
- Adiciona um job à fila

Execute o script para adicionar um job:

```node queue.js```

## 4. Criando um Processador de Jobs

Agora, vamos criar um processador que consumirá os jobs da fila. Crie um arquivo worker.js:

```javascript
const { Worker } = require('bullmq');
require('dotenv').config();

const connection = {
  host: process.env.REDIS_HOST,
  port: process.env.REDIS_PORT,
};

const worker = new Worker('taskQueue', async job => {
  console.log(`Processando job: ${job.id}, Dados:`, job.data);
}, { connection });

worker.on('completed', job => {
  console.log(`Job ${job.id} concluído com sucesso!`);
});

worker.on('failed', (job, err) => {
  console.log(`Job ${job.id} falhou:`, err);
});
```

Esse worker:

- Consome jobs da fila taskQueue
- Exibe os dados do job no console
- Registra eventos de sucesso ou falha

Para iniciar o worker:

```node worker.js```

Agora, sempre que um job for adicionado à fila, ele será processado pelo worker automaticamente.

## Conclusão

O BullMQ facilita a implementação de filas no Node.js, tornando o processamento de tarefas mais eficiente e escalável. Neste artigo, aprendemos a:

- Configurar o Redis via Docker
- Criar um projeto Node.js com BullMQ
- Adicionar jobs a uma fila
- Criar um worker para processar os jobs

Agora, você pode expandir esse conceito para diversas aplicações, como envio de e-mails, processamento de imagens e muito mais. 🚀
