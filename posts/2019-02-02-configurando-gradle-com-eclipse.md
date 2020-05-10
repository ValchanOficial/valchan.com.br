---
date: 2019-02-02
title: "Configurando Gradle para o Eclipse"
description: "Aprenda como configurar o Gradle, passo a passo!"
category: "gradle"
image: '/assets/img/cover.png'
---

**Primeiramente vamos baixar os softwares necessários:**
- [Gradle](https://gradle.org/releases/). //Versão atual: v5.1.1
- [Eclipse IDE](https://www.eclipse.org/);
- [Java](https://www.oracle.com/technetwork/java/javase/downloads/index.html); //Versão atual: 11.0.2
- [JRE]() //Versão 8u201

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

<p class="alinhar"><img class="tamanho" src="../assets/images-posts/Gradle e Eclipse/gradleProject.png" alt="CERTIFICADO S2B"/></p>

Em Project name utilize um nome de sua escolha, Ex.: Teste e clique em "Next >" e após clique em "Finish";

Seu projeto deve ficar assim:

<p class="alinhar"><img class="tamanho" src="../assets/images-posts/Gradle e Eclipse/gradleProject1.png" alt="CERTIFICADO S2B"/></p>

Adicione dentro do build.gradle abaixo plugin do java-library: 
"**apply plugin: 'eclipse'** ", salve para que quando você adicionar alguma dependency no **build.gradle**, sempre execute o comando **gradle eclipse** no cmd e dê um Refresh no projeto para ter acesso as bibliotecas.

<p class="alinhar"><img class="tamanho" src="../assets/images-posts/Gradle e Eclipse/gradleProject2.png" alt="CERTIFICADO S2B"/></p>

**DOIS ERROS COMUNS:**

1 -Erro com a versão do Java: corrija em seu build.gradle:

<code>
apply plugin: 'java' <br>
apply plugin: 'eclipse' <br>
sourceCompatibility = 1.8 <br>
targetCompatibility = 1.8 <br><br>
repositories { <br>
&nbsp;&nbsp;&nbsp;jcenter() <br>
} <br>
dependencies { <br>
&nbsp;&nbsp;&nbsp;testImplementation 'junit:junit:4.12' <br>
}
</code>

Não se esqueça de ir no cmd e digitar **gradle eclipse** e no seu projeto dar um **Refresh**

2 - Erro de duplicidade da pasta main e test: Clique com o botão direito sobre o projeto > em "Build Path" > "Configure Build Path.." e delete as pastas repetidas que não contenham nada dentro e clique em "Apply and Close";
<br>
<p class="alinhar"><img class="tamanho" src="../assets/images-posts/Gradle e Eclipse/gradleProject3.png" alt="CERTIFICADO S2B"/></p>

**DICA:** Você pode encontrar as bibliotecas que você precisa em [MavenRepository](https://mvnrepository.com/), selecione a biblioteca que você deseja utilizar e na aba de **Gradle** você encontrará a depency para o build.gradle.

**Pronto!** Você já pode começar a utilizar o gradle! :D