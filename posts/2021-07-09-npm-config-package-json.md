---
date: 2021-07-09
title: "Customizando seu package.json com o NPM"
description: "Como setar valores default para o package.json utilizando o NPM(Node Package Manager)"
category: "NPM"
image: "/assets/img/cover.png"
---

Você sabia que é possível setar valores padrão para o package.json que é gerado ao rodar o ``npm init -y``? Segue os comandos:

```bash
npm config set <key>=<value> [<key>=<value> ...]
# exemplo:
npm config set init-author-name "Valchan"
npm config set init-license "MIT"
```

E como eu faço para ver se essa alteração realmente aconteceu?

```bash
npm config get
# Irá trazer a informações de todas keys
npm config get [<key> [<key> ...]]
# Irá trazer a informação da key específica
```

Ok, setei um valor, e se agora eu quiser remover ele? O que faço?
Muito simples:

```bash
npm config delete <key> [<key> ...]
# exemplo:
npm config delete init-author-name
npm config delete init-license
```

Além disso há outros comandos e keys que você pode encontrar na página da documentação oficial do NPM. Deixei alguns links abaixo.


- <a href="https://docs.npmjs.com/cli/v7/commands/npm-config" target="_blank" rel="noopener noreferrer">npm config</a>

- <a href="https://docs.npmjs.com/cli/v7/configuring-npm/package-json" target="_blank" rel="noopener noreferrer">package.json</a>

