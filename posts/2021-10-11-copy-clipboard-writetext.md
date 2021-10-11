---
date: 2021-10-11
title: "Copiando textos utilizando a API Clipboard"
description: "Como copio um texto para a área de transferência?"
category: "Javascript"
image: "/assets/img/cover.png"
---

Com o código abaixo é possível copiar um texto para a área de transferência de forma bem simples utilizando a função ``writeText`` do Clipboard.

```javascript
const text = "Hello World!";
navigator.clipboard.writeText(text)
  .then(() => console.log("Texto copiado com sucesso!"))
  .catch(err => console.error("Falha ao copiar o texto:", err));
// ou
await navigator.clipboard.writeText(text);
```

A função ``writeText()`` retorna uma promise, que é resolvida quando o texto foi copiado com sucesso, ou rejeitada quando ocorre um erro de permissão de escrita.


- <a href="https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText" target="_blank" rel="noopener noreferrer">Clipboard.writeText()</a> 
- <a href="https://w3c.github.io/clipboard-apis/#dom-clipboard-writetext" target="_blank" rel="noopener noreferrer">writeText()</a> 
