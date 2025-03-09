---
date: 2021-09-10
title: "Como listar e matar um processo pela porta no Windows e Linux"
description: "Adeus reiniciar o computador"
category: "Command"
image: "/assets/img/cover/cover2.png"
---

No Windows:

```bash
# Lista todos os processos que estão rodando
netstat -ano
# Lista todos os processos que estão rodando na porta 8000
netstat -ano | findstr 8000
# Mata processo que está rodando na porta 8000 pelo PID
taskkill /f /pid <PID>
```

No Linux: 

```bash
# Lista todos os processos que estão rodando
sudo netstat -tlpn
# Lista todos os processos que estão rodando na porta 8000
sudo netstat -tlpn | grep 8000
# Mata processo que está rodando na porta 8000
sudo kill -9 `sudo lsof -t -i:8000`
sudo kill -9 $(lsof -t -i:8000)
```

- <a href="https://docs.microsoft.com/pt-br/windows-server/administration/windows-commands/netstat" target="_blank" rel="noopener noreferrer">netstat</a>
- <a href="https://docs.microsoft.com/pt-br/windows-server/administration/windows-commands/taskkill" target="_blank" rel="noopener noreferrer">taskkill</a>
- <a href="https://ss64.com/bash/kill.html" target="_blank" rel="noopener noreferrer">kill</a>
