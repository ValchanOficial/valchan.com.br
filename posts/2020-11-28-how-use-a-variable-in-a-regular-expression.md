---
date: 2020-11-28
title: "Variável + Expressão Regular"
description: "Como usar uma variável em uma expressão regular?"
category: "Javascript"
image: '/assets/img/cover.png'
---

``` javascript
const text = "Eu sou a Valchan, ou Val, porém eu prefiro que me chamem de Valchan.";
const replaceThis = "Val";
const re = new RegExp(`\\b${replaceThis}\\b`, 'gi');
console.log(text.replace(re, "Valéria")); 
// "Eu sou a Valchan, ou Valéria, porém eu prefiro que me chamem de Valchan."

const text = "6 + 8 = 14";
const replaceThis = "6";
const replaceThis2 = "8";
const re = new RegExp(`${replaceThis}|${replaceThis2}`, 'gi');
console.log(text.replace(re, "7")); 
//"7 + 7 = 14"


// Adicionando em uma função:
const text = "Begônias ou rosas?";
const replaceThis = "rosas";
const newValue = "violetas"
const replaceText = (text, replaceThis, newValue) => text.replace(new RegExp(`${replaceThis}`, 'gi'), newValue)
console.log(replaceText(text, replaceThis, newValue))
// "Begônias ou violetas?"
```

**Fonte:**

- <a href="https://stackoverflow.com/questions/494035/how-do-you-use-a-variable-in-a-regular-expression/50828436#50828436" target="_blank" rel="noopener noreferrer">StackOverflow</a>
