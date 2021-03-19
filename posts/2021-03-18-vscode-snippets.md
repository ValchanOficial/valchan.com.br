---
date: 2021-03-18
title: "VSCode + Snippets"
description: "Melhorando sua produtividade com os snippets"
category: "VSCode"
image: "/assets/img/cover.png"
---

<h2>O que são snippets?</h2>

Snippets são atalhos que geram blocos de código, assim como o <a href="https://code.visualstudio.com/docs/editor/emmet" target="_blank" rel="noopener noreferrer">Emmet</a>, segue o exemplo html. Exemplo:

<div class="averageSize">

![Exemplo Emmet](/assets/img/emmet.png)

</div>

Para criar um snippet:

Você pode escolher entre criar um snippet Global, que poderá ser utilizado em todos os projetos, ou criar um snippet específico, apenas para o projeto que você está atuando.

- Ctrl + Shift + P
- Configure User Snippets
- New Global Snippets file... OU New Snippets file for 'NomeDoSeuProjeto'...

Selecione uma das opções e então digite o nome do seu snippet e pressione "Enter", com isso um arquivo .code-snippets será criado:

<div class="averageSize">

![Exemplo Emmet](/assets/img/snippets.png)

</div>

Apague os comentários e adicione as informações do bloco de código que seu snippet irá gerar e então salve (Ctrl+S)

```javascript
{
	"MeuPrimeiroSnippet": { // Nome do seu snippet
		"scope": "javascript,typescript", // escopo: linguagens que ele será utilizado
		"prefix": "log", // prefixo para executar o snippet no arquivo
		"body": [ // dados que este snippet irá gerar
			"console.log('$1');", // $1 será onde ficará o foco ao iniciar o snippet
		],
		"description": "Gera comando que registra a informação no console " // descrição do seu snippet
	}
}
```

Um exemplo de um snippet ReactJS:

```javascript
{
	"ComponentReactJS": {
		"scope": "javascript,typescript",
		"prefix": "componentReactJs",
		"body": [
			"import React from 'react'",
			"",
			"const Component = () => {",
			"  return (<><div>Component $1</div></>)",
			"}",
			"",
			"export default Component",
		],
		"description": "Generates a ReactJS Component"
	}
}
```

Para utilizar o snippet eu irei criar um arquivo javascript ou typescript, que foi o que eu havia especificado no escopo.
Conforme eu vou digitando o prefixo, as opções de snippets são exibidos.
Exemplo:

<div class="averageSize">

![Exemplo Emmet](/assets/img/snippet-exemplo.png)

</div>

Selecione o snippet que deseja utilizar e veja a mágica acontecer! 😁

<div class="smallSize" align="center">

![Magic](https://media1.tenor.com/images/a3ef12891434d1a97d124c7faf633904/tenor.gif)

</div>
