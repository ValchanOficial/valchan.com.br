---
date: 2022-05-14
title: "Shallow Copy VS Deep Copy"
description: "Como criar um cópia de um objeto no Javascript?"
category: "Javascript"
image: "/assets/img/cover/cover2.png"
---

Primeiramente qual a diferença entre Shallow Copy e Deep Copy?

- **Shallow Copy** é uma cópia superficial, ou seja, é realizada a cópia do objeto, porém os atributos do objeto clone que não são do tipo primitivo, são copiados como referência para os atributos do objeto original.

- **Deep Copy** é uma cópia profunda, ou seja, copia todos os atributos, os que são tipos primitivos e inclusive os que não são tipos primitivos, por exemplo, um array.

```javascript
const example = {
  name: 'Example',
}

// Exemplo copiando por referência
const clone = example;
clone.name = 'Example2';
console.log(example); // { name: 'Example2' }
console.log(clone); // { name: 'Example2' }

// ---- Exemplos de Shallow Copy ----

// Spread Operator
const clone1 = {...example};
clone1.name = 'ShallowCopy1';
console.log(clone1); // { name: 'ShallowCopy1' }

// Object.assign
const clone2 = Object.assign({}, example)
clone2.name = 'ShallowCopy2';
console.log(clone2); // { name: 'ShallowCopy2' }

// clone do Lodash
const clone3 = clone(example); // _.clone() // Lodash
clone3.name = 'ShallowCopy3';
console.log(clone3); // { name: 'ShallowCopy3' }

// ---- Exemplos de Deep Copy ----

// JSON
const deepCopy1 = JSON.parse(JSON.stringify(example))
deepCopy1.name = 'DeepCopy1';
console.log(deepCopy1); // { name: 'DeepCopy1' }

// structuredCopy
// Funciona apenas no browser
const deepCopy2 = structuredCopy(example)
deepCopy2.name = 'DeepCopy2';
console.log(deepCopy2); // { name: 'DeepCopy2' }

// cloneDeep do Lodash
const deepCopy3 = cloneDeep(example); // _.cloneDeep() // Lodash
deepCopy3.name = 'DeepCopy3';
console.log(deepCopy3); // { name: 'DeepCopy3' }
```

Minha recomendação é que você utilize o deep copy, pois assim você irá garantir que caso o objeto original seja alterado, esta alteração não afete a cópia e vice-versa.<br/>
Outro ponto seria se o objeto conter funções, uma shallow copy não irá atender bem ao que é esperado.

- <a href="https://developer.mozilla.org/en-US/docs/Glossary/Deep_copy" target="_blank" rel="noopener noreferrer">Deep Copy</a>
- <a href="https://developer.mozilla.org/en-US/docs/Glossary/Shallow_copy" target="_blank" rel="noopener noreferrer">Shallow Copy</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/API/structuredCopy" target="_blank" rel="noopener noreferrer">structuredCopy()</a>
- <a href="https://lodash.com/docs/4.17.15#clone" target="_blank" rel="noopener noreferrer">Lodash - clone()</a>
- <a href="https://lodash.com/docs/4.17.15#cloneDeep" target="_blank" rel="noopener noreferrer">Lodash - cloneDeep()</a>
