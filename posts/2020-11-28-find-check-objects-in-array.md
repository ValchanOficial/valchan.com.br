---
date: 2020-11-28
title: "Verificando ou buscando por objetos em um Array"
description: "some( ), find( ) e filter( ) com match( )"
category: "Javascript"
image: '/assets/img/cover.png'
---

``` javascript
const example = [
  { name:"arroz", value:"Arroz" },
  { name:"feijão", value:"Feijão" },
  { name:"milho", value:"Milho" },
]

console.log(example.some((item) => item.name.match(/arroz|milho/g)))    
// Há algum item com o nome de 'arroz' ou 'milho'?
// true

console.log(example.find((item) => item.name.match(/arroz|milho/g)))    
// Qual o primeiro item que o nome dá match com as palavras 'arroz' ou 'milho'?
// Object { name: "arroz", value: "Arroz" }

console.log(example.filter((item) => item.name.match(/arroz|milho/g)))  
// Busque todos items que o nome dão match com essas palavras: 'arroz' e/ou 'milho'
// Array [Object { name: "arroz", value: "Arroz" }, Object { name: "milho", value: "Milho" }]
```
