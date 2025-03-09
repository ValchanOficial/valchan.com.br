---
date: 2023-01-19
title: "Árvore de Natal no terminal"
description: "Como desenhar uma árvore de Natal no terminal?"
category: "Javascript"
image: "/assets/img/cover/cover2.png"
---

```js
const drawTree = height => {
  for (let i = 0; i < height; i++) {
    const stars = "*".repeat(2 * i + 1)
    const spacesBefore = " ".repeat(height - i - 1)
    console.log(spacesBefore + stars)
  }
}

drawTree(3)
```

Entrada: 3  
Saída:

```bash
  *
 ***
*****
```
