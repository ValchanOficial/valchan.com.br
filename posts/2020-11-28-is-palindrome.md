---
date: 2020-11-28
title: "É um palíndromo?"
description: "Verificando se uma frase, palavra ou sequência é um palíndromo"
category: "Javascript"
image: '/assets/img/cover.png'
---

Um palíndromo é uma palavra, frase ou qualquer outra sequência de unidades que tenha a propriedade de poder ser lida tanto da direita para a esquerda como da esquerda para a direita. Num palíndromo, normalmente são desconsiderados os sinais ortográficos, assim como o espaços entre palavras <a href="https://pt.wikipedia.org/wiki/Pal%C3%ADndromo" target="_blank" rel="noopener noreferrer">Wikipédia</a>

``` javascript
const removeAccentsAndSpecialCharacters = (word) => word.toString()
.normalize('NFD')
.replace(/[^\w\s]/gi, '')

const isPalindrome = (word) =>  
removeAccentsAndSpecialCharacters(word).toLowerCase().replace(/\s/g, "") 
=== 
removeAccentsAndSpecialCharacters(word).split('').reverse()
.join('').replace(/\s/g, "").toLowerCase();

console.log(isPalindrome('abccba')) //true
console.log(isPalindrome('abccbx')) // false
console.log(isPalindrome('abccfg')) // false
console.log(isPalindrome('Anotaram a data da maratona')) // true
console.log(isPalindrome('A grama é amarga')) // true
console.log(isPalindrome('Olé! Maracujá, caju, caramelo')) // true
console.log(isPalindrome('112211')) // true
console.log(isPalindrome(112211)) // true
```
