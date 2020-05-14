---
date: 2020-05-13
title: "A mágica do Object Literals"
description: "Reescrevendo o Switch e If/else com Object Literals."
category: "javascript"
image: '/assets/img/cover.png'
---

Recentemente eu estava fazendo um desafio e então precisei utilizar o switch, como tinham várias possibilidades eu percebi que o código estava ficando com bastante linhas (e feio).

Então eu pensei comigo, deve ter outro jeito de reescrever esse código e manter a funcionalidade, foi então que eu encontrei a solução em um artigo escrito por **Chris Burgin** no Medium, utilizando o Object Literals!

// Off: Engraçado que eu utilizava Object Literals em outras situações, mas nunca tinha pensado em utilizar com switch/ if-else

Situação utilizando o switch:

```js
const texto = 'Laranja';
const textoDefault = 'Arroz';

const fruta = (texto) => {
	switch (texto) {
    case 'Laranja':
      return 'Laranjas são deliciosas!';
    case 'Banana':
      return 'Bananas são deliciosas!';
    case 'Limão':
      return 'Limões são deliciosos!';
    default:
      return 'Desculpa, mas não encontrei este termo.';
  }
}

console.log(fruta(texto));
// "Laranjas são deliciosas!"

console.log(fruta(textoDefault));
// "Desculpa, mas não encontrei este termo."
```

Situação utilizando if-else: 

```js
// OU utilizando if-else
const texto = 'Laranja';
const textoDefault = 'Arroz';

const fruta = (texto) => {
  if(texto === 'Laranja') {
    return 'Laranjas são deliciosas!'
  }else if(texto.includes('Banana')) {
    return 'Bananas são deliciosas!'
  } else if(texto === 'Limão') {
    'Limões são deliciosos!'
  } else {
      return 'Desculpa, mas não encontrei este termo.';
  }
}

console.log(fruta(texto));
// "Laranjas são deliciosas!"

console.log(fruta(textoDefault));
// "Desculpa, mas não encontrei este termo."
```

Resolução:

```js
const texto = 'Laranja';
const textoDefault = 'Arroz';
const fruta = (texto) => ({
  'Laranja': 'Laranjas são deliciosas!',
  'Banana': 'Bananas são deliciosas!',
  'Limão': 'Limões são deliciosos!',
  'Default': 'Desculpa, mas não encontrei este termo.'
})[texto];

console.log(fruta(texto));
// "Laranjas são deliciosas!"

console.log(fruta(textoDefault) ? fruta(textoDefault) : fruta('Default'));
// "Desculpa, mas não encontrei este termo."
```

***Fontes:***

- <a href="https://medium.com/chrisburgin/rewriting-javascript-replacing-the-switch-statement-cfff707cf045" target="_blank" rel="noopener noreferrer">Medium - Chris Burgin</a>

- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Object_literals" target="_blank" rel="noopener noreferrer">MDN web docs</a>

