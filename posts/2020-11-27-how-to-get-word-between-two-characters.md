---
date: 2020-11-27
title: "Como obter um texto que esta entre dois valores?"
description: "Com apenas uma linha de código! 😉"
category: "Javascript"
image: '/assets/img/cover.png'
---

Imagina que você quer pegar uma palavra, algo do tipo que está no meio de um texto, exemplo um id de um vídeo na url do YouTube. Com o Javascript é possível fazer isso com apenas uma linha!

Segue abaixo o código:

``` javascript
const getWordBetweenTwoCharacters = (text, start, end) => text.split(start).pop().split(end)[0].trim()


console.log(getWordBetweenTwoCharacters('Uma calopsita esteve aqui','Uma','esteve')) 
// calopsita

console.log(getWordBetweenTwoCharacters('https://www.youtube.com/watch?v=FnazXYWlyr8','?v=', '&'))
// FnazXYWlyr8
```

Ainda é possível fazer outros aprimoramentos, caso precise por exemplo deixar os textos em lowerCase para facilitar na hora de buscar as palavras 

