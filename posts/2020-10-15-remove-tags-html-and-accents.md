---
date: 2020-10-15
title: "Removendo tags HTML e acentos de strings"
description: "Como remover de forma bem simples as tags HTML e os acentos dos textos"
category: "Javascript"
image: '/assets/img/cover.png'
---

Removendo as tags HTML:

``` javascript
const str = '<p>Uma <storng>calopsita</strong> esteve aqui e a <a href="https://valchan.com.br/">Valchan</a> também!!';

console.log(str.replace(/<[^>]*>?/gm, '').trim()); 
// "Uma calopsita esteve aqui e a Valchan também!!"
```

Removendo os acentos:

``` javascript
let name1 = 'Amélia';
let name2 = 'Amélia';

name2 = name2.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

console.log(`${name1}, ${name2}`); 
// "Amélia, Amelia"
```

<div class="smallSize" align="center">

![Magic](/assets/img/magic.gif)

</div>

- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions" target="_blank" rel="noopener noreferrer">Regular expressions (Regex)</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim" target="_blank" rel="noopener noreferrer">trim()</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace" target="_blank" rel="noopener noreferrer">replace()</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/normalize" target="_blank" rel="noopener noreferrer">normalize()</a>

