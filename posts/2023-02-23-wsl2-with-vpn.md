---
date: 2023-02-23
title: "Windows + WSL2 + VPN"
description: "Como resolver problemas de conectividade entre a VPN corporativa e o WSL2 utilizando o wsl-vpnkit"
category: "WSL"
image: "/assets/img/cover.png"
---

Fora do WSL2 você consegue conectar às URLs que utilizam a VPN corporativa, e dentro do WSL2 estas mesmas URLs não são acessíveis.<br/><br/>Para resolver este problema, vamos ao passo a passo:

- Primeiramente, baixe o <a href="https://github.com/sakai135/wsl-vpnkit/releases/latest" target="_blank" rel="noopener noreferrer">wsl-vpnkit.tar.gz</a> e coloque na raiz do seu usuário do Windows (Exemplo: `C:\Users\seu-usuario`)

- Abra o PowerShell e execute o comando: `wsl --import wsl-vpnkit $env:USERPROFILE\wsl-vpnkit wsl-vpnkit.tar.gz --version 2`

- Depois verifique se está tudo ok: `wsl -d wsl-vpnkit`

- E por fim iniciar o wsl-vpnkit: `wsl.exe -d wsl-vpnkit service wsl-vpnkit start`

Obs.: Você precisa inicializar o wsl-vpnkit toda vez que reiniciar o computador ou o WSL2, algumas alternativas para isto seria utilizar o Agendador de Tarefas do Windows(Task Scheduler) para criar a tarefa de inicialização automática do wsl-vpnkit, outra alternativa seria adicionar o comando no arquivo `.bashrc`, `.profile`, ou `.zshrc` do WSL2.

**_Fontes:_**

- <a href="https://www.virtuallypotato.com/fixing-wsl2-connectivity-when-connected-to-a-vpn-with-wsl-vpnkit/?query=wsl2" target="_blank" rel="noopener noreferrer">Fixing WSL2 connectivity when connected to a VPN with wsl-vpnkit</a>
- <a href="https://github.com/sakai135/wsl-vpnkit" target="_blank" rel="noopener noreferrer">sakai135/wsl-vpnkit</a>
