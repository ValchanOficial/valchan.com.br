---
date: 2021-11-29
title: "Reordenando lista de forma aleatória"
description: "Reordenando lista de forma aleatória utilizando as funções map() e sort()"
category: "Javascript"
image: "/assets/img/cover.png"
---


```javascript
let unshuffledList = ['a', 'b', 'c', 1, 2, 3, { test: true }, { test: false }];

const shuffleListWayOne = (list) => {
  return list
    .map((value) => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);
};

const shuffleListWayTwo = (list) => {
    return list.sort(() => Math.random() - 0.5);
}

console.log(shuffleListWayOne(unshuffledList));
console.log(shuffleListWayTwo(unshuffledList));
```


- <a href="https://stackoverflow.com/a/46545530/15426180" target="_blank" rel="noopener noreferrer">Stack Overflow</a>

- <a href="https://flaviocopes.com/how-to-shuffle-array-javascript/" target="_blank" rel="noopener noreferrer">Flavio Copes</a>