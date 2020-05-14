---
date: 2019-09-07
title: "Tutorial - Instalando o Maven no Windows"
description: "Instalando o Apache Maven no Windows 10."
category: "maven"
image: '/assets/img/cover.png'
---

**Obs**.: Necessário ter o JDK instalado, atualizado e o JAVA_HOME configurado. Exemplo: 

<div class="averageSize">

![JAVA_HOME](/assets/img/java_home.png)

</div>

Acesse o <a href="http://maven.apache.org/download.cgi" target="_blank" rel="nofollow, noreferrer,noopener,external">Site Oficial do Maven</a> e realize o download do arquivo **.zip**;

<div class="averageSize">

![MAVEN_HOME](/assets/img/maven_1.png)

</div>

Após realizar o download, crie uma pasta para descompactar o arquivo dentro. Exemplo: 
```bash
    C:\maven\apache-maven-3.6.2
```
Tendo o arquivo descompactado vá "**Editar as variáveis de ambiente do sistema**";

<div class="averageSize">

![MAVEN_HOME](/assets/img/maven_2.png)

</div>

Depois vá em "**Variáveis de Ambiente**" e clique em "**Novo...**" para adicionar uma nova variável de ambiente;

<div class="averageSize">

![MAVEN_HOME](/assets/img/maven_3.png)

</div>

Crie a variável "**MAVEN_HOME**" com o caminho onde você descompactou os arquivos: "**C:\maven\apache-maven-3.6.2**" e clique em "**OK**" para salvar a variável;

<div class="averageSize">

![MAVEN_HOME](/assets/img/maven_4.png)

</div>

Tendo ela criada, selecione "**Path**" e depois "**Editar...**" e adicione "**%MAVEN_HOME%\bin**" ao Path clicando em "**Novo**";

<div class="averageSize">

![MAVEN_HOME](/assets/img/maven_5.png)

</div>

Feito isto vá ao Prompt de Comando (CMD) e digite o comando:
```bash
    mvn - version
```
Com isto você confirma que o Maven foi instalado corretamente

<div class="averageSize">

![MAVEN_HOME](/assets/img/maven_6.png)

</div>