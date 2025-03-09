---
date: 2021-01-02
title: "Buscando e removendo itens duplicados de arrays"
description: "Com Set e Map tudo fica mais simples!! 😉"
category: "Javascript"
image: '/assets/img/cover/cover2.png'
---

``` javascript
const array = [1,2,3,4,5]
const array2 = [4,5,6,7,8]

let array3 = []
const set = new Set()

// no array3 foram adicionados os items do array e array2
array3 = array3.concat(array)
array3 = array3.concat(array2)

// no set foi feita a mesma coisa
// a diferença é que no Set ele não permite itens iguais
array.map(id => set.add(id))
array2.map(id => set.add(id))

// tirando a prova real
console.log('Array size:', array3.length) // "Array size:" 10
console.log('Set size:', Array.from(set).length) // "Set size:" 8
console.log(array3.length > Array.from(set).length) // true
```

E com um array de objetos? Como faz?

``` javascript
const exemplo = [
  {"id": "1", "title": "Exemplo1"},
  {"id": "2", "title": "Exemplo2"},
  {"id": "3", "title": "Exemplo3"},
  {"id": "4", "title": "Exemplo4"},
  {"id": "1", "title": "Exemplo5"},
]

// Neste caso o filtro está sendo feito pelo id do item
const removeDuplicatedItensById = (array) => [...new Set([...array.map(item => array[item.id])])]

console.log(exemplo.length) // 5
console.log(removeDuplicatedItensById(exemplo).length) // 4
console.log(removeDuplicatedItensById(exemplo)) 
/* Array [
    Object { id: "2", title: "Exemplo2" }, 
    Object { id: "3", title: "Exemplo3" }, 
    Object { id: "4", title: "Exemplo4" }, 
    Object { id: "1", title: "Exemplo5" }
    ]
*/
```


- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set" target="_blank" rel="noopener noreferrer">Set</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map" target="_blank" rel="noopener noreferrer">Map</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array" target="_blank" rel="noopener noreferrer">Array</a>
