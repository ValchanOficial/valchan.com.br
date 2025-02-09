---
date: 2025-02-09
title: "WSL2 + Ollama + DeepSeek + Open WebUI"
description: "Como rodar o DeepSeek local no WSL2 via Ollama e acessar a interface da Open WebUI via navegador"
category: "AI"
image: "/assets/img/cover.png"
---

## Configurações

```bash
# Acesse o /etc/wsl.conf com o nano
sudo nano /etc/wsl.conf

# Adicione os valores abaixo para habilitar o gerenciador de serviços no WSL2 
[boot]
systemd=true

# Ctrl + X, seleciona Y para salvar alteração e Enter para confirmar o nome do arquivo

# No PowerShell, use o comando para reiniciar as instâncias do WSL:
wsl.exe --shutdown
```

## Instalação do Ollama

```bash
# Abrindo novamente o WSL2, instale o Ollama:
curl -fsSL https://ollama.com/install.sh | sh

# Tente rodar o commando "ollama" no terminal
ollama
# Deverá aparecer:
# Usage:
#   ollama [flags]
#   ollama [command]

# Available Commands:
#   serve       Start ollama
#   create      Create a model from a Modelfile
#   show        Show information for a model
#   run         Run a model
#   stop        Stop a running model
#   pull        Pull a model from a registry
#   push        Push a model to a registry
#   list        List models
#   ps          List running models
#   cp          Copy a model
#   rm          Remove a model
#   help        Help about any command

# Flags:
#   -h, --help      help for ollama
#   -v, --version   Show version information

# Use "ollama [command] --help" for more information about a command.
```

## Instalação do DeepSeek

```bash
# Tendo o Ollama instalado, faça o pull do DeepSeek:
ollama pull deepseek-r1

# Para verificar se o DeepSeek foi baixado, use o comando:
ollama list 
# Deverá aparecer:
# NAME                  ID              SIZE      MODIFIED
# deepseek-r1:latest    0123abc    4.7 GB    1 hours ago

# ou acesse http://127.0.0.1:11434/api/tags para visualizar no navegador
```

## Instalação da Open WebUI

```bash
# Tendo o Docker instalado, faça o pull da Open WebUI:
docker run -d --network=host -v open-webui:/app/backend/data -e OLLAMA_BASE_URL=http://127.0.0.1:11434 --name open-webui --restart always ghcr.io/open-webui/open-webui:main
```

- Acesse a interface da Open WebUI no navegador http://localhost:8080

- Nas configurações de conexão, ajuste para que a conexão do Ollama API seja: http://127.0.0.1:11434

- Utilizando o DeepSeek na interface da Open WebUI

<div class="midSize">

![Utilizando o deepseek na interface da Open WebUI](/assets/img/ai/deepseek.png)

</div>

<div class="smallSize" align="center">

![Magic](https://media1.tenor.com/images/a3ef12891434d1a97d124c7faf633904/tenor.gif)

</div>

***Fontes:***

- <a href="https://learn.microsoft.com/en-us/windows/wsl/systemd#how-to-enable-systemd" target="_blank" rel="noopener noreferrer">Microsoft - systemd</a>

- <a href="https://ollama.com/download/linux" target="_blank" rel="noopener noreferrer">Ollama</a>

- <a href="https://ollama.com/library/deepseek-r1" target="_blank" rel="noopener noreferrer">Ollama - deepseek-r1 </a>

- <a href="https://docs.openwebui.com/" target="_blank" rel="noopener noreferrer">Open WebUI - Docs</a>

- <a href="https://github.com/open-webui/open-webui" target="_blank" rel="noopener noreferrer">Open WebUI - GitHub</a>

- <a href="https://github.com/open-webui/open-webui/blob/main/TROUBLESHOOTING.md" target="_blank" rel="noopener noreferrer">Open WebUI - Troubleshooting</a>
