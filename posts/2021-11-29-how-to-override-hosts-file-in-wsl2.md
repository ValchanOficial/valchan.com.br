---
date: 2021-11-29
title: "Como sobrescrever o arquivo hosts do WSL?"
description: "Preciso alterar meu arquivo hosts do WSL, como posso fazer isso?"
category: "Windows"
image: "/assets/img/cover.png"
---

Por padrão, o WSL(Subsistema Windows para Linux) gera automaticamente um arquivo hosts no diretório /etc e não é possível sobrescrever o mesmo. Para que seja possível alterá-lo você precisa adicionar algumas configurações, abra o terminal e executa o comando:

```bash
sudo vim /etc/wsl.conf
```

Feito isso você irá abrir o arquivo wsl.conf no vim, adicione as seguintes linhas:

```
[network]
generateHosts = False
```

Depois, só salvar o arquivo com o comando ```:x```

Feito isso, o WSL não irá mais gerar o arquivo hosts automaticamente. E você poderá editá-lo.


- <a href="https://docs.microsoft.com/en-us/windows/wsl/wsl-config#network" target="_blank" rel="noopener noreferrer">WSL network</a> 

- <a href="https://vim.rtorr.com/" target="_blank" rel="noopener noreferrer">Vim Cheat Sheet</a> 