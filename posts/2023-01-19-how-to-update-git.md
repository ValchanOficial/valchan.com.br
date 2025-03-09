---
date: 2023-01-19
title: "Como atualizar o git?"
description: "De forma super simples e rápida, veja como atualizar o git"
category: "Git"
image: "/assets/img/cover/cover2.png"
---

- Primeira forma:

```bash
sudo add-apt-repository ppa:git-core/ppa
# ppa significa Personal Package Archive e git-core é o nome do pacote que contém o git

sudo apt update && apt upgrade
# apt é o gerenciador de pacotes do Ubuntu
# update é para atualizar a lista de pacotes
# upgrade é para atualizar os pacotes

sudo apt install git
# instala o git
```

- Segunda forma:

```bash
git update
```

- Terceira forma:

```bash
git update-git-for-windows
# Se você estiver usando o Git Bash no Windows
```

- Quarta forma:

Baixando o instalador do git no site oficial: https://git-scm.com/downloads
<br/><br/>
Para verificar a versão do git, basta digitar:

```bash
git --version
```

<div class="smallSize" align="center">

![Octocat](/assets/img/octocat.gif)

</div>
