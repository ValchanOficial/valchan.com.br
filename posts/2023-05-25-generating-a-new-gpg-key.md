---
date: 2023-05-25
title: "Gerando uma chave GPG"
description: "Como gerar uma chave GPG para utilizar na assinatura de seus commits e tags."
category: "GPG Key"
image: "/assets/img/cover.png"
---

Instale o GnuPG

```bash
sudo apt install gnupg
```

Gere uma chave

```bash
gpg --full-generate-key
# - RSA
# - 4096 bits
# - 0 // Tempo de expiração
# - name: <seu name>
# - email: <seu email>
# - comment: // Comentário é opcional
# passphrase: <crie e confirme sua senha>
```

Liste as chaves

```bash
gpg --list-secret-keys --keyid-format LONG
# Você deve ver algo como:
# sec   rsa4096/<rsaID> 2023-01-01 [XX]
#       123ABC
# uid                 [ultimate] <seu nome> <seu email>
# ssb   rsa4096/123ABC 2023-01-01 [X]
```

Exporte a chave

```bash
gpg --armor --export <rsaID>
```

Copie e adicione no Github: <a href="https://github.com/settings/gpg/new" target="_blank" rel="noopener noreferrer">link</a>

Configure o Git para utilizar a chave

```bash
git config --global user.signingkey <rsaID>
```

Configure o Git para assinar todos os commits

```bash
git config --global commit.gpgSign true
```

Configure o Git para assinar todas as tags

```bash
git config --global tag.gpgSign true
```

Adicionado tty para o GPG funcionar no WSL2

```bash
# Adicione no ~/.bashrc
# vim ~/.bashrc ou nano ~/.bashrc
# No final do arquivo adicione:
export GPG_TTY=$(tty)
```

**_Fontes:_**

- <a href="https://curso.fullcycle.com.br/curso-fullcycle/" target="_blank" rel="noopener noreferrer">Curso FullCycle 3.0</a>

- <a href="https://docs.github.com/en/authentication/managing-commit-signature-verification/generating-a-new-gpg-key">Github Docs</a>

- <a href="https://git-scm.com/docs/">Git Docs</a>

- <a href="https://www.gnupg.org/download/" target="_blank" rel="noopener noreferrer">GnuPG</a>
