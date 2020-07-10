---
date: 2020-07-09
title: "Como executar um script externo no ReactJS"
description: "Como executar um script externo no ReactJS"
category: "reactjs"
image: '/assets/img/cover.png'
---

Recentemente precisei executar um script do Ebit no ReactJS diretamente no component.

Daí eu pensei, bom deve ter um jeito disso ser feito, fui pesquisar!
Pesquisei, pesquisei, e não encontrei nenhum assunto de como executar o bendito script deles com o ReactJS, a documentação é bem curta e não tem tantos detalhes, nas buscas em português só encontrei sobre implementação com a Loja Integrada, que eu não conheço, então nem vou me estender.

Pois bem, daí eu continuei: - E se eu mudar minha busca para "external script react", encontrei a solução numa postagem do Medium escrita pela **Nivedha Duraisamy**, recomendo a leitura, link no final.

A solução foi utilizar o useEffect para executar o script enquanto o componente era renderizado.

Segue o exemplo:

```js
import React, { useEffect } from "react";
import "./styles.css";

const App = () => {
  const storeId = "storeId";

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.id = "getSelo";
    script.src = `https://imgs.ebit.com.br/ebitBR/selo-ebit/js/getSelo.js?${storeId}`;
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="App">
      <a
        id="seloEbit"
        href={`http://www.ebit.com.br/${storeId}`}
        target="_blank"
        rel="noopener noreferrer"
        data-noop="redir(this.href);"
      >
        {""}
      </a>
    </div>
  );
};

export default App;
```

O que reforço hoje: desafios e a busca para a resolução deles te trazem novos conhecimentos! :3

<blockquote>  
  <p>Ninguém nasce sabendo tudo, você aprende todo dia com alguém, com um livro, um artigo, com uma documentação ou uma dúvida no Stackoverflow, por exemplo..<br>Juntos podemos aprender muito mais!<br>Compartilhe conhecimento!</p>
  <cite>Valchan</cite>
</blockquote>

Código no CodeSandbox: <a href="https://codesandbox.io/s/selo-ebit-6foxq" target="_blank" rel="noopener noreferrer">Link</a>.

**Observação**: não irá aparecer a imagem porque eu não estou passando nenhum **storeId**


**Fonte:**

- <a href="https://medium.com/better-programming/4-ways-of-adding-external-js-files-in-reactjs-823f85de3668" target="_blank" rel="noopener noreferrer">4 Ways to Add External JavaScript Files in React</a>
