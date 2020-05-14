---
date: 2019-02-02
title: "Configurando Gradle para o Eclipse"
description: "Aprenda como configurar o Gradle, passo a passo!"
category: "gradle"
image: '/assets/img/cover.png'
---

**Primeiramente vamos baixar os softwares necessários:**
- <a href="https://gradle.org/releases/" target="_blank" rel="nofollow, noreferrer,noopener,external">Gradle</a>; //Versão atual: v5.1.1
- <a href="https://www.eclipse.org/" target="_blank" rel="nofollow, noreferrer,noopener,external">Eclipse IDE</a>;
- <a href="https://www.oracle.com/technetwork/java/javase/downloads/index.html" target="_blank" rel="nofollow, noreferrer,noopener,external">Java</a>; //Versão atual: 11.0.2
- <a href="https://www.oracle.com/java/technologies/javase/javase8-archive-downloads.html" target="_blank" rel="nofollow, noreferrer,noopener,external">JRE</a>. //Versão 8u201

**Preparação do ambiente - Passo a Passo:**

1. Baixe e instale o Eclipse, Java: JRE e JDK;
2. Baixe o Gradle e coloque os arquivos descompactados no local C;
3. Configure o Java e o Gradle no Windows 10: vá até o Painel de Controle > Sistema e Segurança > Sistema;
4. Clique em "Configurações avançadas do sistema";
5. Clique em "Variáveis de Ambiente...";
6. Clique no botão “Nova” em “Variáveis do sistema”;
7. Digite no nome da variável: "JAVA_HOME";
8. No valor da variável: coloque o endereço onde foi instalado. Exempo: “C:\Program Files\Java\jdk-11.0.2”;
9. Clique em "OK";
10. Com o Gradle faça a mesma coisa, clique em "Novo" nome da variável: "GRADLE_HOME" e o valor da variável: "C:\Gradle\gradle-5.1.1" e clique em "OK"
11. Selecione "Path" e clique em "Editar...";
12. Clique em "Novo" e digite "%JAVA_HOME%", e depois clique em "OK";
13. Para o Gradle clique novamente em "Novo" e digite "%GRADLE_HOME\bin", e depois clique em "OK";
14. Clique em "OK" novamente para salvar as configurações;
15. Para confirmar se foi configurado certo e a verificar a versão, vá ao CMD(Prompt de comando) e digite "java -version" e após, digite "gradle -version"

**Dentro do Eclipse vamos criar um projeto Gradle:**
Vá em "File" > "New" > "Other..";
Em Wizards digite "Gradle", selecione "Gradle Project" e "Next >";

![Gradle](/assets/img/gradleProject.png)

Em Project name utilize um nome de sua escolha, Ex.: Teste e clique em "Next >" e após clique em "Finish";

Seu projeto deve ficar assim:

<div class="averageSize">

![Gradle Project](/assets/img/gradleProject1.png)

</div>

Adicione dentro do build.gradle abaixo plugin do java-library: 
"**apply plugin: 'eclipse'** ", salve para que quando você adicionar alguma dependency no **build.gradle**, sempre execute o comando **gradle eclipse** no cmd e dê um Refresh no projeto para ter acesso as bibliotecas.

<div class="averageSize">

![Gradle Project](/assets/img/gradleProject2.png)

</div>

**DOIS ERROS COMUNS:**

1 -Erro com a versão do Java: corrija em seu build.gradle:

```java
apply plugin: 'java'
apply plugin: 'eclipse'
sourceCompatibility = 1.8
targetCompatibility = 1.8
repositories {
    jcenter()
}
dependencies {
    testImplementation 'junit:junit:4.12'
}
```

Não se esqueça de ir no cmd e digitar **gradle eclipse** e no seu projeto dar um **Refresh**

2 - Erro de duplicidade da pasta main e test: Clique com o botão direito sobre o projeto > em "Build Path" > "Configure Build Path.." e delete as pastas repetidas que não contenham nada dentro e clique em "Apply and Close";

<div class="averageSize">

![Gradle Project](/assets/img/gradleProject3.png)

</div>

**DICA:** Você pode encontrar as bibliotecas que você precisa em <a href="https://mvnrepository.com/" target="_blank" rel="nofollow, noreferrer,noopener,external">MavenRepository</a>, selecione a biblioteca que você deseja utilizar e na aba de **Gradle** você encontrará a depency para o build.gradle.

**Pronto!** Você já pode começar a utilizar o gradle! :D