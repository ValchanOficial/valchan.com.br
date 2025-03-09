---
date: 2021-07-09
title: "Habilitando e desabilitando o Hyper-V"
description: "Como habilitar ou desabilitar o Hyper-V no Windows?"
category: "Hyper-V"
image: "/assets/img/cover/cover2.png"
---

Segue algumas formas de desativar e ativar o Hyper-V

Info: Após os passos é necessário reiniciar o computador.

1 - Por linha de comando no PowerShell:

- Desativar
``` bash
bcdedit /set hypervisorlaunchtype off
```
- Ativar:
``` bash
bcdedit /set hypervisorlaunchtype auto
```

2 - Via interface:

- Na barra de pesquisa, procure por "Ativar ou desativar recursos do Windows", ao abrir, você verá uma lista, procure por Hyper-V, desmarque o check e dê um OK.

<div class="averageSize">

![Hyper-V](/assets/img/HyperV.png)

</div>

