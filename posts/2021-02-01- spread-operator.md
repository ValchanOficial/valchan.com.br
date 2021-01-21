---
date: 2021-01-02
title: "E o tal do Spread operator?"
description: "Veja alguns exemplo do que é possível fazer com o Spread operator"
category: "Javascript"
image: '/assets/img/cover.png'
---

``` javascript
const numbers = [1, 2, 3, 4, 5, 6];
const numbers2 = [7, 8, 9, 10];

// separando itens do array
const [a, b, ...c] = numbers
console.log(b); // 2
console.log(c); // Array [3, 4, 5, 6]

// pegando todos items do array
console.log(...numbers) // 1 2 3 4 5 6

// concatenando arrays
console.log([...numbers, ...numbers2]) // Array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// utilizando dentro de funções
const sum = ([...array]) => array.reduce((total, value) => total + value);
console.log(sum(numbers)) // 21

// separando texto por caracteres
const text = "calopsita";
console.log([...text]); // Array ["c", "a", "l", "o", "p", "s", "i", "t", "a"]

const test = {
	"value": null
}

const test2 = {
	"value": 1,
  "value2": 2,
  "value3": 3,
}

// fazendo testes lógicos com objetos
console.log({...(!test.value && {value: test.value})}) 	// Object { value: null }
console.log({...(test.value && {value: test.value})}) 	// Object {  }
console.log({...(test2.value && {value: test2.value})}) // Object { value: 1 }

// pegando separando valores de um objeto
const {value, ...rest} = test2
console.log(value) // 1 
console.log(rest) // Object { value2: 2, value3: 3 }

// concatenando objetos
const obj1 = {"id": 1, "name": "Valchan"}
const obj2 = {"color": "Blue", "country": "Brazil"}
console.log({...obj1, ...obj2}) // Object { id: 1, name: "Valchan", color: "Blue", country: "Brazil" }
```


- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax" target="_blank" rel="noopener noreferrer">Spread Operator</a>
