---
date: 2023-06-21
title: "Como criar um chatbot com o Rasa"
description: "Rasa Open Source Versão 3.x"
category: "Rasa 3.x"
image: "/assets/img/cover.png"
---

- Preparando o ambiente:

É necessário possuir o Python e o pip instalados:

```bash
sudo apt update
sudo apt install python3 python3-pip
# Verifique se foram instalados corretamente
python3 --version
pip3 --version
```

- Criando um ambiente virtual:

```bash
# Cria o ambiente virtual
python3 -m venv ./venv
# Ativa o ambiente virtual
source ./venv/bin/activate
```

- Instando o Rasa:

```bash
pip3 install rasa
# Verifique se foi instalado corretamente
rasa --version
```

- Criando um projeto:

```bash
rasa init
```
Quando você rodar o comando, ele fará as seguintes perguntas:  
```bash
# O caminho onde o projeto será criado, por padrão é o diretório atual
Please enter a path where the project will be created [default: current directory]

# Você deseja treinar um modelo inicial? Y - Sim, N - Não
Do you want to train an initial model? 💪🏽 (Y/n)

# Você deseja conversar com o seu assistente? Y - Sim, N - Não
Do you want to speak to the trained assistant on the command line? 🤖 (Y/n)
```

O comando rasa init irá cria um projeto Rasa com arquivos de exemplo. O projeto criado possui a seguinte estrutura:

```
.
├── actions
│   ├── __init__.py
│   └── actions.py
├── config.yml
├── credentials.yml
├── data
│   ├── nlu.yml
│   └── stories.yml
├── domain.yml
├── endpoints.yml
├── models
│   └── <timestamp>.tar.gz
└── tests
   └── test_stories.yml
```

- Treinando o model:

```bash
rasa train
```
O comando rasa train treina um modelo Rasa utilizando seu NLU de intenções e histórias, o modelo gerado fica salvo na pasta models.

- Testando o model:

```bash
rasa shell
```
O comando rasa shell carrega o modelo treinado e inicia um shell interativo para que você possa conversar com seu bot.

- Encerrando a conversa:

```bash
/stop
```
Digitando /stop dentro do shell interativo, você pode encerrar a conversa.

<div class="mediumSize" align="center">

![Rasa Shell](/assets/img/rasa.png)

</div>

- Iniciando o servidor de custom actions:

```bash
rasa run actions
```
Utilizando Rasa SDK, o comando rasa run actions inicia o servidor de ações personalizadas. Este comando você deve deixar rodando em um segundo terminal. As ações customizadas ficam dentro da pasta actions. Além disso é necessário ir no arquivo endpoints.yml e adicionar o seguinte código:

```yaml
action_endpoint:
  url: "http://localhost:5055/webhook"
```

Para ver mais comandos, você pode acessar este link: <a href="https://rasa.com/docs/rasa/command-line-interface" target="_blank" rel="nofollow, noreferrer,noopener,external">Command Line Interface</a> 

Para acessar o playground: <a href="https://rasa.com/docs/rasa/playground/" target="_blank" rel="nofollow, noreferrer,noopener,external">Rasa Playground</a>

Caso você queira ver um exemplo com uma action customizada, você pode acessar este repositório que eu criei: <a href="https://github.com/ValchanOficial/rasa_nlu" target="_blank" rel="nofollow, noreferrer,noopener,external">Rasa 3.x NLU - Github API</a>, você escreve github e depois passa o username que você deseja pesquisar, exemplo ValchanOficial, então ele retorná o username e a lista de repositórios.

<div align="center">

![Rasa Shell - Chamando action customizada](/assets/img/rasa2.png)

</div>

**_Fontes:_**

- <a href="https://rasa.com/docs/rasa/" target="_blank" rel="noopener noreferrer">Rasa Docs</a>
