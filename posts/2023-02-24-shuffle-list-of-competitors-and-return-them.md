---
date: 2023-02-24
title: "Embaralhando uma lista de competidores"
description: "Como embaralhar de forma aleatória uma lista de competidores utilizando Javascript"
category: "Javascript"
image: "/assets/img/cover.png"
---

```js
const competitors = [
  { id: 1, name: "Maria" },
  { id: 2, name: "Pedro" },
  { id: 3, name: "João" },
  { id: 4, name: "Juan" },
  { id: 5, name: "Gabriela" },
  { id: 6, name: "Sofia" },
]

function shuffle(competitors) {
  let shuffled = []
  let i = 0

  while (competitors.length > 0) {
    // Gera um número aleatório entre 0 e o tamanho da lista original de competidores
    let index = Math.floor(Math.random() * competitors.length)

    // Adiciona o competidor na nova lista
    shuffled[i] = competitors[index]

    // E o remove da lista original
    competitors.splice(index, 1)

    i++
  }

  return shuffled
}

console.log(shuffle(competitors))
/*
[ 
  { id: 5, name: 'Gabriela' },
  { id: 1, name: 'Maria' },
  { id: 3, name: 'João' },
  { id: 2, name: 'Pedro' },
  { id: 4, name: 'Juan' },
  { id: 6, name: 'Sofia' } 
]
*/
```
