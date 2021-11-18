---
date: 2021-11-18
title: "Como importar e exportar variáveis de ambiente no Windows?"
description: "Tenho variáveis em um arquivo .env e preciso importar essas variáveis de ambiente no Windows, como posso fazer isto?"
category: "Windows"
image: "/assets/img/cover.png"
---

Eu tenho meu arquivo .env e preciso utilizar as variáveis de ambiente no projeto rodando no Windows, como eu posso fazer isso?

Primeiramente vamos conhecer os comandos do Windows para importar e exportar variáveis de ambiente.

**Caso eu queira exportar:**

```bash
SET >> .env
```

**Caso eu queira importar:**

```bash
for /F %A in (.env) do SET %A
```

Agora dentro do projeto e só criar um comando dentro de scripts do package.json:

```json
  "scripts": {
    "meu-comando": "for /F %A in (.env) do SET %A",
  }
```

E executar ele:

```bash
npm run meu-comando
# ou
yarn meu-comando
```


- <a href="https://docs.microsoft.com/pt-br/windows-server/administration/windows-commands/set_1" target="_blank" rel="noopener noreferrer">SET</a> 

- <a href="https://docs.microsoft.com/pt-br/windows-server/administration/windows-commands/for" target="_blank" rel="noopener noreferrer">FOR</a> 
