---
date: 2022-11-14
title: "NVM + Node + Yarn"
description: "Como instalar e gerenciar as versões do NodeJS"
category: "NodeJS"
image: "/assets/img/cover/cover2.png"
---

- Instala o curl

```bash
sudo apt install curl
```

- Instala o NVM

```bash
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
```

- Atualiza o .bashrc

```bash
source ~/.bashrc
```

- Instala o Node

```bash
nvm install --lts
```

- Instala o Yarn

```bash
npm install --global yarn
```

- Outos comandos

```bash
nvm ls # Lista as versões instaladas
nvm install node # Instala a última versão do Node
nvm install 18.12.1 # Instala a versão 18.12.1
nvm use 18.12.1 # Utiliza a versão 18.12.1
nvm alias default 18.12.1 # Define a versão 18.12.1 como padrão
```

**_Fontes:_**

- <a href="https://github.com/nvm-sh/nvm" target="_blank" rel="noopener noreferrer">NVM</a>
- <a href="https://nodejs.dev/en/" target="_blank" rel="noopener noreferrer">NodeJS</a>
- <a href="https://yarnpkg.com/" target="_blank" rel="noopener noreferrer">Yarn</a>
