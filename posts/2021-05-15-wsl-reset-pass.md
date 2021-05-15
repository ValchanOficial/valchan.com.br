---
date: 2021-05-15
title: "Resetando a senha de seu usuário no WSL"
description: "Esqueci minha senha no WSL, e agora??"
category: "WSL"
image: "/assets/img/cover.png"
---

Passo a passo:

1 - Abra o PowerShell e verifique de qual a distribuição você quer resetar a senha
``` bash
wsl -l # lista as distribuições instaladas
```

2 -  Acesse o usuário root da distribuição, por padrão o "root" é o principal
``` bash
wsl -d distribution --user root 
# exemplo: 
# wsl -d Ubuntu-20.04 --user root
```

3 - Digite passwd seguido do nome do usuário que você deseja resetar a senha
``` bash
passwd username 
# exemplo:
# passwd exemploUser
```

4 - Digite e redigite sua nova senha

5 - Prontinho!! :D


- <a href="https://askubuntu.com/a/1171006" target="_blank" rel="noopener noreferrer">askUbuntu</a>
