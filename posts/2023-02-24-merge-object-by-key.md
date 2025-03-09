---
date: 2023-02-24
title: "Como agrupar objetos de um array pela chave"
description: "Como agrupar objetos de um array pela chave utilizando o reduce() do Javascript"
category: "Javascript"
image: "/assets/img/cover/cover2.png"
---

```js
const input = [
  { id: 1, name: "Jeff" },
  { id: 1, name: "Cris" },
  { id: 2, name: "Maria" },
]

const output = input.reduce((acc, { id, name }) => {
  const index = acc.findIndex(item => item.id === id)
  index === -1 ? acc.push({ id, name: [name] }) : acc[index].name.push(name)
  return acc
}, [])

console.log(output)
// [ { id: 1, name: [ 'Jeff', 'Cris' ] }, { id: 2, name: [ 'Maria' ] } ]
```
