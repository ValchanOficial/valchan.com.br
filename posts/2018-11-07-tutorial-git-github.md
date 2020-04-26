---
date: 2018-11-07
title: "Configurando o Git com GitHub"
description: "Vamos versionar nossos códigos com Git e Github!"
category: "git"
---

<p class="alinhar"><img src="../assets/images-posts/github.png" alt="GitHub" width="300" height="250" /></p>
## Configurando o Git com GitHub

Realize o download do Git: [https://git-scm.com/](https://git-scm.com/) e instale;

-   Execute o GitBash;
-   Digite o comando como seu e-mail: ssh-keygen -t rsa -b 4096 -C “**seuEmailDoGitHub**“;
-   Aperte enter até a key ser gerada;
-   Após, execute o comando: eval $(ssh-agent -s) para executar o ssh-agent;
-   Execute o comando: ssh-add ~/.ssh/id_rsa;
-   No seu usuário do GitHub vá em “Settings”;
-   Clique em “SSH and GPG Keys”;
-   Abra a pasta no seu computador: C:\Users\seuUsuario.ssh
-   Abra com algum editor de texto o arquivo id_rsa;
-   Copie todo o conteúdo que vai começar com “ssh-rsa” e terminar com o e-mail que foi digitado;
-   Dentro do GitHub clique em “New SSH Key”;
-   Adicione um título qualquer(Off: eu coloco sempre alguma informação que me ajude a identificar o local de onde eu estou utilizando, tipo: Casa, Trabalho, Faculdade..);
-   Por fim, cole abaixo o conteúdo do id_rsa e clique em “Add SSH key”;
-   Você deverá receber um e-mail informando que a chave foi adicionada à sua conta do GitHub;
-   Configure no git seu e-mail e nome com os comandos: git config –global user.email “seuEmail” git config –global user.name “seuNome”
-   Após isto, o Git está pronto para ser utilizado.

## Subindo um arquivo/ projeto

Caso você ainda esteja começando o projeto, eu irei mostrar como fazer;

-   Crie um “New Repository”;
-   Adicione um nome, descrição se você achar necessário e marque o checkbox “Initialize this repository with a README”;
-   Clique em “Create repository”;
-   Tendo a pasta criada, clique em “Clone or download” no canto direito da tela;
-   Copie todo o texto: “git@github…”;
-   Dentro do GitBash digite com o texto copiado: git clone git@github.. e aperte enter;
-   Com isso deve aparecer a mensagem: “Cloning into ‘nomeDaPasta’…”;
-   Caso apareça essa mensagem: “Are you sure you want to continue connecting (yes/no)?” responda yes e aperte enter;
-   Escreva “ls” e confirme que a pasta se encontra clonada se encontra;
-   Digite “cd nomeDaPasta/” para entrar na pasta;

Comandos que você irá usar bastante:

-   Para verificar se algum arquivo foi alterado digite: **git status**;
-   Para adicionar arquivo modificado ao git: **git add .**;
-   Após adicionar o arquivo digite: **git commit -m “mensagem/descrição”** com a descrição do que foi feito;
-   E por fim: **git push** para enviar para o GitHub o conteúdo.
-   Caso o projeto possua alguma atualização: **git pull**;

**DICA:**

-   [StackEdit](https://stackedit.io/): serve para editar o arquivo README.md.