---
date: 2021-01-01
title: "São iguais?"
description: "Organizando objeto por chave e verificando se são iguais"
category: "Javascript"
image: '/assets/img/cover/cover2.png'
---

``` javascript
const exemplo1 = {
	'a': 'arroz',
  	'b': 'balão',
    'c': {
        'd': 'dado'
    }
};

const exemplo2 = {
	'a': 'arroz',
    'c': {
        'd': 'dado'
    },
  	'b': 'balão'
};

const exemplo3 = {
	'a': 'arroz',
  	'c': 'computador'
};

// função que recebe um objeto, divide por propriedades com o Object.keys(), ordena essas propriedades com o .sort(), e então agrupa elas em um novo objeto com o .reduce()
const sortObject = obj => Object.keys(obj).sort().reduce((acumulador, valorAtual) => (acumulador[valorAtual] = obj[valorAtual], acumulador), {});

// função que verifica se ambos objetos são iguais
const isEqual = (obj1, obj2) => JSON.stringify(sortObject(obj1)) === JSON.stringify(sortObject(obj2));

console.log(sortObject(exemplo1));
// Object { a: "arroz", b: "balão", c: Object { d: "dado" } }

console.log(sortObject(exemplo2));
// Object { a: "arroz", b: "balão", c: Object { d: "dado" } }

console.log(sortObject(exemplo3));
// Object { a: "arroz", c: "computador" }

console.log(isEqual(exemplo1, exemplo2)); // true
console.log(isEqual(exemplo2, exemplo3)); // false
```

**Fonte:**

- <a href="https://stackoverflow.com/questions/5467129/sort-javascript-object-by-key" target="_blank" rel="noopener noreferrer">sortObject</a>
- <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/keys" target="_blank" rel="noopener noreferrer">Object.keys(obj)</a>
- <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort" target="_blank" rel="noopener noreferrer">sort()</a>
- <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce" target="_blank" rel="noopener noreferrer">reduce()</a>

**Outros jeitos:**

- <a href="https://gomakethings.com/check-if-two-arrays-or-objects-are-equal-with-javascript/" target="_blank" rel="noopener noreferrer">Check if two arrays or objects are equal with JavaScript</a>
