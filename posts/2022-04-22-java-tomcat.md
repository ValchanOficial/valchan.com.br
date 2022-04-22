---
date: 2022-04-22
title: "Tomcat"
description: "Adicionando o Tomcat no Eclipse"
category: "Java"
image: "/assets/img/cover.png"
---

- Baixe o Tomcat: <a href="https://tomcat.apache.org/" target="_blank" rel="noopener noreferrer">link</a>
- Clique em `Download` e depois na parte de `Binary Distributions` você verá as opções, baixe a que for de acordo com o seu sistema
- Descompacte o arquivo em uma pasta, sugiro que seja um local fácil de achar
- Abra o Eclipse
- Depois clique em `Windows` > `Show View` > `Servers` // Caso não apareça, clique em `Other...`, ali terá a pasta `Server`
- A aba `Servers` será exibida, então só clicar no espaço em branco com o botão direto e selecionar `New` > `Server`

![Tomcat New Server](/assets/img/tomcatConfig.png)

- Selecione a versão que você baixou do Tomcat
- No `Server runtime environment`, clique em `Add...`
- No `Tomcat installation directory`, clique em `Browse...` e selecione a pasta que você descompactou
- Feito isso, `Finish` e `Finish`

![Tomcat Define a New Server](/assets/img/tomcatConfig2.png)

- Você verá que na aba `Servers` seu servidor do Tomcat estará pronto para uso.

- <a href="https://marketplace.eclipse.org/content/eclipse-enterprise-java-and-web-developer-tools" target="_blank" rel="noopener noreferrer">Eclipse Enterprise Java and Web Developer Tools</a>
- <a href="https://tomcat.apache.org/" target="_blank" rel="noopener noreferrer">Tomcat</a>