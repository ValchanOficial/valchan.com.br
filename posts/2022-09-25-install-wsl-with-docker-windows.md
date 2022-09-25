---
date: 2022-09-25
title: "Windows + WSL2 + Docker"
description: "Instalando o WSL2 com Docker no Windows"
category: "WSL"
image: "/assets/img/cover.png"
---

## Requisitos:
- Windows 11 64-bit: Home ou Pro 21H2 ou maior, ou Enterprise ou Education 21H2 ou maior.
- Windows 10 64-bit: Home ou Pro 21H1 (build 19043) ou maior, ou Enterprise ou Education 20H2 (build 19042) ou maior.

## Instalação do WSL2:

- Abra o PowerShell modo admin e execute os seguintes comandos:

```powershell
# Ativação do WSL
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart

# Ativação do recurso de máquina virtual
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```
Pode ser que você tenha que ativar a virtualização na BIOS, verifique como fazer no site do fabricante.<br/>

- Para versões mais antigas, baixe e instale o pacote de atualização do kernel do Linux: <a href="https://learn.microsoft.com/pt-br/windows/wsl/install-manual#step-4---download-the-linux-kernel-update-package" target="_blank" rel="noopener noreferrer">Pacote de Atualização do Kernel do Linux</a>

- Novamente no PowerShell:

```powershell
# Defina a versão do WSL para a 2
wsl --set-default-version 2
```

- Instale o Ubuntu pela Microsft Store: <a href="https://www.microsoft.com/store/productId/9PDXGNCFSCZV" target="_blank" rel="noopener noreferrer">Ubuntu</a>

- De volta ao terminal do PowerShell:

```powershell
wsl --install -d Ubuntu
```

- Ao rodar este comando será aberta uma janela do Ubuntu
- - Crie seu o usuário e senha

## Instalação do Docker no WSL2:
- No terminal do Ubuntu:

```bash
# Faça o login utilizando seu usuário e senha
sudo su
# Atualize a lista de pacotes e programas do Ubuntu
apt-get update
# Instale as dependencias do Docker
apt-get install apt-transport-https ca-certificates curl software-properties-common
apt-get install build-essential
# baixe o Docker
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add
add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
apt-get update
apt-get install docker-ce
# Execute o Docker
service docker start
docker run --rm hello-world
```
Se tudo estiver ok, ao fazer isso você deverá ver a mensagem "Hello from Docker!" seguida de um texto informativo.<br/>

Info: sempre que necessário se o serviço não estiver rodando, use o comando para inicia-lo ``service docker start``.

***Fontes:***

- <a href="https://docs.docker.com/desktop/install/windows-install/" target="_blank" rel="noopener noreferrer">Install Docker Desktop on Windows</a>

- <a href="https://askubuntu.com/questions/883032/installing-docker-on-ubuntu-16-04-setting-up-repository" target="_blank" rel="noopener noreferrer">AskUbuntu</a>
 