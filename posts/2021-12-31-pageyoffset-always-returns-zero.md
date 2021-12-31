---
date: 2021-12-31
title: "pageYOffset sempre retornando zero"
description: "Quem já se deparou com este erro?"
category: "CSS"
image: "/assets/img/cover.png"
---

Este é um erro bem curioso que acontece quando você tenta utilizar o ``pageYOffset`` para obter a posição vertical do scroll.
Motivo: ``overflow-x: hidden`` no html/body
Como resolver: Basicamente você vai precisar envolver seu conteúdo em uma div com ``overflow-x: hidden``.

```html
<body>
   <div class="wrapper">
      Seu conteúdo aqui
   </div>
</body>
```

```css
html, body {
    margin:0;
    padding:0;
    height: 100%;
}
.wrapper {
    height: 100%;
    overflow-x: hidden;
}
```


- <a href="https://stackoverflow.com/a/30056532/15426180" target="_blank" rel="noopener noreferrer">Stackoverflow</a>

- <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/pageYOffset" target="_blank" rel="noopener noreferrer">Window.pageYOffset</a>