---
date: 2023-02-25
title: "Como criar um bot para o Discord"
description: "Veja o passo a passo para criar um bot para o Discord"
category: "Javascript"
image: "/assets/img/cover/cover2.png"
---

**Criando e configurando o bot no Discord:**

- Primeiro, você precisa criar um aplicativo no <a href="https://discord.com/developers/applications" target="_blank" rel="noopener noreferrer">Discord Developer Portal</a>
- Clique em "New Application" e dê um nome para o seu bot
- Na aba "General Information", copie o Application ID (Client ID)
- Na aba "Bot", clique em "Add Bot" e em seguida em "Yes, do it!"
- Copie o Token do bot clicando em "Copy"
- Logo abaixo em "Privileged Gateway Intents", habilite a "Message Content Intent" e clique em "Save Changes"
- Na aba "OAuth2", selecione a opção "URL Generator"
- Selecione a opção "bot" e as permissões: "Read Messages/View Channels" e "Send Messages"
- Copie a URL gerada e acesse ela no seu navegador para adicionar o bot no seu servidor

**Criando o projeto:**

- Crie uma pasta para o seu projeto e acesse ela
- Inicialize o projeto com o comando `npm init -y`
- Instale as dependências do projeto com o comando `npm install discord.js dotenv`
- Crie um arquivo `.env` na raiz do seu projeto e cole o Token e o Application ID (Client ID) que você copiou anteriormente:

```
TOKEN=<seu-token-aqui>
CLIENT_ID=<seu-client-id-aqui>
```

- Crie um arquivo index.js cole o código abaixo:

```js
import { Client, GatewayIntentBits, REST, Routes } from "discord.js"
import dotenv from "dotenv"
dotenv.config()

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
})

// Verifica se o bot está pronto
client.once("ready", () => console.log("Bot is ready!"))

// Realiza o login do bot
client.login(process.env.TOKEN)

// Verifica se alguma mensagem foi enviada no chat do Discord e responde caso a mensagem seja "hello"
client.on("messageCreate", async message => {
  if (message.author.bot) return

  if (!!message.content && message.content.toLowerCase() === "hello") {
    message.reply(`Hello ${message.author.username}!`)
  }
})

// Cria um comando de slash /hello no Discord que responde com "Hello World!"
client.on("interactionCreate", async interaction => {
  if (!interaction.isChatInputCommand()) return

  if (interaction.commandName === "hello") {
    await interaction.reply("Hello World!")
  }
})

// Lista de commandos de slash
const commands = [
  {
    name: "hello",
    description: "Replies with Hello World!",
  },
]

// Sincroniza os comandos de slash com o Discord
const rest = new REST({ version: "10" }).setToken(process.env.TOKEN)

;(async () => {
  try {
    console.log("Started refreshing application (/) commands.")

    await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), {
      body: commands,
    })

    console.log("Successfully reloaded application (/) commands.")
  } catch (error) {
    console.error(error)
  }
})()
```

- Execute o comando `npm run start`
- Acesse o chat do Discord e escreve `hello` para chamar a mensagem e `/hello` para usar o comando

<div class="averageSize">

![Exemplo das chamados do Discord Bot](/assets/img/discord-bot.png)

</div>
