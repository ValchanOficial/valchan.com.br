---
date: 2021-02-07
title: "Você conhece a Fluent API?"
description: "Como deixar seu código mais legível"
category: "Javascript"
image: '/assets/img/cover/cover2.png'
---

Atualmente eu estou fazendo o treinamento <a href="https://javascriptexpert.com.br" target="_blank" rel="noopener noreferrer">Javascript Expert do Erick Wendel</a>, recomendo demais, e em uma das aulas ele mostrou sobre a Fluent API, que é uma forma de você organizar suas classes encadeando suas funções, bastante comum em linguagens orientadas a objetos como o .NET, eu já havia visto sendo usada bastante no typeorm mas não conhecia o nome, achei muito incrível e fui atrás de ver mais sobre.

Segue abaixo alguns exemplos:

``` javascript
class Exemplo1 {
  content
  constructor(value) {
    this.content = `A: ${value}`
  }

  joinText(value2) {
    this.content = `${this.content} - B: ${value2}`
    return this
  }

  build() {
    return this.content
  }

  toUpperCase() {
    this.content = this.content.toUpperCase()
    return this
  }

  show() {
    console.log(this.content)
  }
}

const example = new Exemplo1('arroz').joinText('feijão').build()
console.log(example) // "A: arroz - B: feijão"

const example2 = new Exemplo1('arroz').joinText('feijão').toUpperCase().show()
// "A: ARROZ - B: FEIJÃO"
```

Deixando as coisas mais interessantes com um array:

``` javascript
class Exemplo2 {
  content
  constructor(content) {
    this.content = content
  }

  findAll() {
    return this
  }

  findByName(name) {
    this.content = this.content.find(pessoa => pessoa.name === name)
    return this
  }

  ageGreaterThan(age) {
    this.content = this.content.filter(pessoa => pessoa.age >= age)
    return this
  }

  nameStartsWith(letter) {
    this.content = this.content.filter(pessoa => pessoa.name.toLowerCase().startsWith(letter.toLowerCase()))
    return this
  }

  display() {
    return this.content
  }
}

const pessoas = [
  {name: 'Maria', age: 21},
  {name: 'João', age: 34},
  {name: 'Valchan', age: 26},
  {name: 'Mario', age: 17},
  {name: 'Juliana', age: 18}
]

const example = new Exemplo2(pessoas).findAll().display()
const example2 = new Exemplo2(pessoas).findByName('Maria').display()
const example3 = new Exemplo2(pessoas).ageGreaterThan(18).display()
const example4 = new Exemplo2(pessoas).nameStartsWith('M').display()
const example5 = new Exemplo2(pessoas).ageGreaterThan(18).nameStartsWith('J').display()

console.log(example)
// > Array [Object { name: "Maria", age: 21 }, Object { name: "João", age: 34 }, Object { name: "Valchan", age: 26 }, Object { name: "Mario", age: 17 }, Object { name: "Juliana", age: 18 }]

console.log(example2)
// > Object { name: "Maria", age: 21 }

console.log(example3)
// > Array [Object { name: "Maria", age: 21 }, Object { name: "João", age: 34 }, Object { name: "Valchan", age: 26 }, Object { name: "Juliana", age: 18 }]

console.log(example4)
// > Array [Object { name: "Maria", age: 21 }, Object { name: "Mario", age: 17 }]

console.log(example5)
// > Array [Object { name: "João", age: 34 }, Object { name: "Juliana", age: 18 }]
```

Bem mais legível, não concorda? 😁


- <a href="https://javascriptexpert.com.br" target="_blank" rel="noopener noreferrer">Javascript Expert</a>
