---
date: 2024-08-26
title: "GitHub Models"
description: "Recebi o acesso à versão beta pública e limitada do GitHub Models"
category: "AI"
image: "/assets/img/cover/cover2.png"
---

<div class="smallSize" align="center">

![Octocat](/assets/img/octocat.gif)

</div>

## Introdução

O GitHub Models é a nova plataforma que permite que devs treinem, testem e implantem os modelos de IA diretamente no GitHub. A plataforma foi projetada para ser fácil de usar e acessível a todas as pessoas desenvolvedoras, independentemente de sua experiência em IA.

## Modelos disponíveis no GitHub Marketplace e Playground

O playground está em beta público limitado e sujeito a alterações.

O <a href="https://github.com/marketplace/models" target="_blank" rel="nofollow, noreferrer,noopener,external">GitHub Marketplace: Models</a> fornece um playground gratuito onde você pode ajustar os parâmetros do modelo e enviar prompts para ver como o modelo responde.

Passo a passo:

- Dentro do GitHub Marketplace
- Clique em "Models" no menu lateral
- Selecione um modelo
- Acesse o Playground, botão superior direito

Na imagem: Verificando modelo Meta-Llama-3-8B-Instruct

![Github Models: Verificando modelo Meta-Llama-3-8B-Instruct](/assets/img/github-models/gh-models-1.png)

Na imagem: Utilizando o playground do modelo Meta-Llama-3-8B-Instruct

![Github Models: Utilizando o playground do modelo Meta-Llama-3-8B-Instruct](/assets/img/github-models/gh-models-2.png)

- Para ajustar os parâmetros do modelo, selecione a guia "Parameters" disponível no lado direito.
- Para ver o código que corresponde aos parâmetros selecionados, alterne da guia "Chat" para a guia "Code". Exemplo de código:

```javascript
/*
Run this model in Javascript

> npm install @azure-rest/ai-inference @azure/core-auth @azure/core-sse
*/
import ModelClient from "@azure-rest/ai-inference";
import { AzureKeyCredential } from "@azure/core-auth";

// To authenticate with the model you will need to generate a personal access token (PAT) in your GitHub settings. 
// Create your PAT token by following instructions here: https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens
const token = process.env["GITHUB_TOKEN"];

export async function main() {
    const client = new ModelClient(
        "https://models.inference.ai.azure.com",
        new AzureKeyCredential(token)
    );

    const response = await client.path("/chat/completions").post({
        body: {
            messages: [
                { role: "user", content: "Can you explain the basics of machine learning?" }
            ],
            model: "Meta-Llama-3-8B-Instruct",
            temperature: 0.8,
            max_tokens: 4096,
            top_p: 0.1
        }
    });

    if (response.status !== "200") {
        throw response.body.error;
    }
    console.log(response.body.choices[0].message.content);
}

main().catch((err) => {
    console.error("The sample encountered an error:", err);
});
```

## Chamada de modelos via GitHub Codespace

Os modelos de IA disponíveis no GitHub podem ser chamados diretamente do Codespace.

- Clique em "Get started"
- Você verá o passo a passo para configurar e executar o modelo via código ou você pode clicar em "Run in Codespace" para executar o modelo diretamente no Codespace.

Na imagem: Executando modelo via Codespace

![Github Models: Codespace](/assets/img/github-models/gh-models-3.png)

- Aqui você encontra alguns códigos de exemplo que utilizam a biblioteca Azure AI Inference: <a href="https://aka.ms/azsdk/azure-ai-inference/js/samples" target="_blank" rel="nofollow, noreferrer,noopener,external">Azure AI Inference client library samples for JavaScript and Typescript (Beta)</a>

## Uso de modelos via GitHub CLI

Também é possível chamar modelos de IA diretamente do GitHub CLI. Exemplos:

```bash
# gh models run <model-id> <prompt>
gh models run phi-3-mini-4k-instruct "Create 5 questions to help me understand the basics of machine learning"

# Combinando com outros comandos:
git log -n 10 | gh models run phi-3-mini-4k-instruct "Summarize this commit history. Use max 1 line per commit"
```

Na imagem: comando executado  

![Github Models: Comandos combinados](/assets/img/github-models/gh-models-4.jpg)

A imagem foi retirada do vídeo de demonstração do GitHub Models: <a href="https://youtu.be/WiBB8Lsgl7I" target="_blank" rel="nofollow, noreferrer,noopener,external"> GitHub Models DEMO | AI models for developers on GitHub </a> 

## Rate limit

O playground e o uso gratuito da API possuem rate limit (limite de requisições) por minuto, por dia, por tokens e por requisições simultâneas. Se você chegar ao limite, precisará aguardar ele atualizar antes de fazer novas requisições.

Os modelos Low, High e Embedding possuem limites diferentes. Para ver qual tipo de modelo você está usando, consulte as informações do modelo no GitHub Marketplace.

Além disso, por estar em beta público limitado, esses limites estão sujeitos a alterações sem aviso prévio.

- <a href="https://docs.github.com/en/github-models/prototyping-with-ai-models#rate-limits" target="_blank" rel="nofollow, noreferrer,noopener,external">Docs: Rate Limits</a>

***Fontes:***

- <a href="https://docs.github.com/en/github-models" target="_blank" rel="nofollow, noreferrer,noopener,external">Docs: Github Models</a>

- <a href="https://docs.github.com/pt/github-models/prototyping-with-ai-models" target="_blank" rel="nofollow, noreferrer,noopener,external">Docs: Prototipagem com modelos de IA</a>

- <a href="https://github.blog/news-insights/product-news/introducing-github-models/" target="_blank" rel="nofollow, noreferrer,noopener,external">Introducing GitHub Models: A new generation of AI engineers building on GitHub by Thomas Dohmke</a>
