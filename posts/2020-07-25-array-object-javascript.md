---
date: 2020-07-25
title: "Array em Object e Object para Array"
description: "Como transformar um Array em Object ou um Object em Array utilizando o Reduce e o forEach"
category: "javascript"
image: '/assets/img/cover/cover2.png'
---

Esse post é mais direto, vou mostrar apenas o código comentado com o que as duas funções fazem :3

```js
const array = [
  { key: "numero", value: "um"},
  { key: "nome", value: "Maria"},
  { key: "alimento", value: "arroz"},
]

// recebo uma lista e retorno um objeto chave: valor
const convertArrayToObject = (list) => {
  const obj = {}; // crio o objeto que irá receber os campos e valores
  return list.reduce((_,item) => { // chamo a função reduce da lista ignorando o acumulador e pegando apenas cada objeto do array
    obj[item.key] = item.value; // crio o campo chave no meu obj e atribuo o valor
    return obj;  // retorno meu objeto com o novo campo chave: valor
  }, {}); // retorno meu objeto contendo seus campos com chave: valor
}

// recebo um objeto chave: valor e retorno uma lista
const convertObjectToArray = (obj) => {
  const arrayValue = []; // crio um novo array
  // transformo meu objeto em array e para cada campo desse array..
  Object.keys(obj).forEach(key => {
    // adiciono a chave e o valor do objeto no novo array
  	arrayValue.push({ key, value: obj[key]});
  })
  return arrayValue; // retorno meu array contendo minha lista de objetos contendo chave: valor
}

const arrayToObject = convertArrayToObject(array);
console.log(arrayToObject);
// Object { numero: "um", nome: "Maria", alimento: "arroz" }

const objectToArray = convertObjectToArray(arrayToObject);
console.log(objectToArray);
/* 
  Array [
    { key: "numero", value: "um" }, 
    { key: "nome", value: "Maria" }, 
    { key: "alimento", value: "arroz" }
  ]
*/
```
