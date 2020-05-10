---
date: 2019-09-07
title: "Tutorial - Instalando o Maven no Windows"
description: "Instalando o Apache Maven no Windows 10."
category: "maven"
image: '/assets/img/cover.png'
---

<p class="alinhar"><img src="../assets/images/octocat.gif" alt="Octocat" title="Octocat" width="100" height="100"></p>

> Tutorial para instalação do Apache Maven no Windows 10

**Obs**.: Necessário ter o JDK instalado, atualizado e o JAVA_HOME configurado. Exemplo: 

<p class="alinhar"><img src="../assets/images-posts/Maven/java_home.png" alt="JAVA_HOME" title="JAVA_HOME" height="150"></p>

Acesse o <a href="http://maven.apache.org/download.cgi" target="_blank" rel="nofollow, noreferrer,noopener,external">Site Oficial do Maven</a> e realize o download do arquivo **.zip**;

<p class="alinhar"><img src="../assets/images-posts/Maven/maven_1.png" alt="MAVEN_HOME" title="MAVEN_HOME" height="200"></p>

Após realizar o download, crie uma pasta para descompactar o arquivo dentro. Exemplo: 
<br><code>
&thinsp;C:\maven\apache-maven-3.6.2
</code><br>
Tendo o arquivo descompactado vá "**Editar as variáveis de ambiente do sistema**";

<p class="alinhar"><img src="../assets/images-posts/Maven/maven_2.png" alt="MAVEN_HOME" title="MAVEN_HOME" width="500"></p>

Depois vá em "**Variáveis de Ambiente**" e clique em "**Novo...**" para adicionar uma nova variável de ambiente;

<p class="alinhar"><img src="../assets/images-posts/Maven/maven_3.png" alt="MAVEN_HOME" title="MAVEN_HOME" width="500"></p>

Crie a variável "**MAVEN_HOME**" com o caminho onde você descompactou os arquivos: "**C:\maven\apache-maven-3.6.2**" e clique em "**OK**" para salvar a variável;

<p class="alinhar"><img src="../assets/images-posts/Maven/maven_4.png" alt="MAVEN_HOME" title="MAVEN_HOME" height="150"></p>

Tendo ela criada, selecione "**Path**" e depois "**Editar...**" e adicione "**%MAVEN_HOME%\bin**" ao Path clicando em "**Novo**";

<p class="alinhar"><img src="../assets/images-posts/Maven/maven_5.png" alt="MAVEN_HOME" title="MAVEN_HOME" width="500"></p>

Feito isto vá ao Prompt de Comando (CMD) e digite o comando:
<br><code>
&thinsp;mvn - version
</code><br>
Com isto você confirma que o Maven foi instalado corretamente
<p class="alinhar"><img src="../assets/images-posts/Maven/maven_6.png" alt="JAVA_HOME" title="JAVA_HOME" width="500"></p>