---
date: 2021-04-16
title: "Pop( ), Push( ), Shift( ) e Unshift( )"
description: "Métodos de inserção e remoção de items no array do Javascript"
category: "Javascript"
image: "/assets/img/cover.png"
---

- Pop() -> remove o último elemento de um array e retorna este elemento
- Push() -> adiciona um ou mais elementos ao final de um array e retorna o tamanho deste array
- Shift() -> remove o primeiro elemento de um array e retorna esse elemento
- Unshift() -> adiciona um ou mais elementos no início de um array e retorna o tamanho deste array

Exemplo: 

``` javascript
const letras = ['a', 'b', 'c', 'd', 'e'];

console.log(letras.pop()); // e
console.log(letras); // ["a", "b", "c", "d"]

console.log(letras.push('f')); // 5
letras.push('g','h','i'); 
console.log(letras); // ["a", "b", "c", "d", "f", "g", "h", "i"]

console.log(letras.shift());  // "a"
console.log(letras); // ["b", "c", "d", "f", "g", "h", "i"]

console.log(letras.unshift('2')); // 8
letras.unshift('0', '1'); 
console.log(letras); // ["0", "1", "2", "b", "c", "d", "f", "g", "h", "i"]
```


- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop" target="_blank" rel="noopener noreferrer">Pop()</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push" target="_blank" rel="noopener noreferrer">Push()</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift" target="_blank" rel="noopener noreferrer">Shift()</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift" target="_blank" rel="noopener noreferrer">Unshift</a>
