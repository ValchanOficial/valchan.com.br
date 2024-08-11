---
date: 2024-08-05
title: "WSL2 + LocalStack"
description: "Simule a infraestrutura da AWS localmente!"
category: "WSL2"
image: "/assets/img/cover.png"
---

## LocalStack

Se você é uma pessoa desenvolvedora que trabalha com a AWS, você sabe que o desenvolvimento e testes na nuvem podem ser bastante caros e demorados. É aí que o LocalStack entra em cena! O LocalStack é uma ferramenta poderosa que simula a infraestrutura da AWS em um ambiente local, permitindo que você desenvolva e teste suas aplicações sem a necessidade de acessar diretamente a nuvem da AWS.

## Configuração Inicial com Docker

Para começar a usar o LocalStack, você precisará do Docker configurado em sua máquina. Veja como iniciar o LocalStack:

```bash
# Baixe a imagem do LocalStack
docker pull localstack/localstack

# Lista das imagens baixadas
docker images

# Execute o container do LocalStack
docker run --rm -d -p 4566:4566 -p 4510-4559:4510-4559 localstack/localstack
# rm: Remove o container após a execução
# d: Executa o container em background
# p: Mapeia as portas do container para a máquina host

# Liste os containers em execução, copie o containerId do localstack
docker ps

# Acesse o terminal do container
docker exec -it <containerId> /bin/bash
# it: Mantém o terminal aberto
```

## Interação com o AWS CLI

Dentro do container do LocalStack, você pode usar o AWS CLI para interagir com os serviços da AWS. A configuração é simples:

```bash
# Configure o AWS CLI
aws configure

# Chave de acesso, aqui você pode colocar qualquer valor
AWS Access Key ID [None]: example-key 

# Chave secreta, aqui você também pode colocar qualquer valor
AWS Secret Access Key [None]: example-secret-key 

# Região padrão, é necessário informar uma região válida
Default region name [None]: us-east-1 

# Formato de saída, pode ser json, text ou table, também é possível deixar em branco
Default output format [None]: 
```

## Utilizando o S3

O S3 é um serviço de armazenamento de objetos da AWS. Com o LocalStack, você pode criar buckets e armazenar arquivos facilmente:

```bash
# Criando um bucket S3
aws s3 --endpoint-url=http://localhost:4566 mb s3://my-bucket-test

# Listando os buckets existentes
aws s3 --endpoint-url=http://localhost:4566 ls
```

## Exemplo de uso com cURL

Aqui está um exemplo de como você pode interagir com o S3 utilizando o cURL:

```bash
# Criando arquivos
curl -d 'Valchan was here' -H 'Content-Type: text/plain' --location --request PUT 'http://localhost:4566/my-bucket-test/valchan.txt'
curl -d '{ "message": "Valchan was here" }' -H 'Content-Type: application/json' --location --request PUT 'http://localhost:4566/my-bucket-test/valchan.json'

# Consultando arquivos
curl -s http://localhost:4566/my-bucket-test/valchan.txt
curl -s http://localhost:4566/my-bucket-test/valchan.json | json_pp
```

## Trabalhando com SQS

O SQS é um serviço de filas da AWS. Veja como criar e gerenciar filas usando o LocalStack:

```bash
# Criando uma fila SQS
awslocal sqs create-queue --queue-name localstack-sqs-queue

# Listando as filas existentes
awslocal sqs list-queues
```

## Enviando e Recebendo Mensagens com SQS

Uma vez que a fila esteja criada, você pode enviar e receber mensagens. Aqui estão alguns exemplos:

```bash
# Enviando uma mensagem para a fila
awslocal sqs send-message --queue-url http://localhost:4566/000000000000/localstack-sqs-queue --message-body "Hello, LocalStack!"

# Recebendo uma mensagem da fila
awslocal sqs receive-message --queue-url http://localhost:4566/000000000000/localstack-sqs-queue
```

## Exemplo de uso com Python

Você também pode usar o boto3, a biblioteca oficial da AWS para Python, para interagir com a fila SQS. Veja um exemplo:

```python
import boto3

# Configurando o cliente SQS
sqs = boto3.client('sqs', endpoint_url='http://localhost:4566', region_name='us-east-1', aws_access_key_id='example-key', aws_secret_access_key='example-secret-key')

# URL da fila
queue_url = 'http://sqs.us-east-1.localhost.localstack.cloud:4566/000000000000/localstack-sqs-queue'

# Enviando uma mensagem para a fila
response = sqs.send_message(
    QueueUrl=queue_url,
    MessageBody='Hello, Valchan was here!'
)
print(f"Message sent! Message ID: {response['MessageId']}")

# Recebendo mensagens da fila
response = sqs.receive_message(
    QueueUrl=queue_url,
    MaxNumberOfMessages=1
)
for message in response.get('Messages', []):
    print(f"Received message: {message['Body']}")
    # Excluindo a mensagem da fila
    sqs.delete_message(
        QueueUrl=queue_url,
        ReceiptHandle=message['ReceiptHandle']
    )
```

## Conclusão

Agora você está pronto/a para explorar as infinitas possibilidades que o LocalStack tem a oferecer! 😉

***Fontes:***

- <a href="https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-welcome.html" target="_blank" rel="nofollow, noreferrer,noopener,external">AWS CLI</a>

- <a href="https://docs.localstack.cloud/user-guide/integrations/aws-cli" target="_blank" rel="nofollow, noreferrer,noopener,external">LocalStack AWS CLI</a>

- <a href="https://hub.docker.com/r/localstack/localstack" target="_blank" rel="nofollow, noreferrer,noopener,external">Docker Hub LocalStack</a>

- <a href="https://docs.localstack.cloud/user-guide/aws/feature-coverage" target="_blank" rel="nofollow, noreferrer,noopener,external">Docs LocalStack</a>

- <a href="https://everything.curl.dev/index.html" target="_blank" rel="nofollow, noreferrer,noopener,external">Everything curl</a>
