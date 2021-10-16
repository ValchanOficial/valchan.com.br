---
date: 2021-10-12
title: "Gerando array com dias da semana"
description: "Preciso dos dias da semana em um array, como faço?"
category: "Javascript"
image: "/assets/img/cover.png"
---

Segue abaixo um exemplo de como gerar um array com os dias da semana.

```javascript
const getWeekDays = () => {
  const currentDate = new Date()
  return Array.from({length: 7}).map((_,index) => {
    const first = currentDate.getDate() - currentDate.getDay() + index 
    return new Date(currentDate.setDate(first)).toISOString().slice(0, 10)
  })
}

console.log(getWeekDays()) 
// [ '2021-10-10', '2021-10-11', '2021-10-12', '2021-10-13', '2021-10-14', '2021-10-15', '2021-10-16' ]
```

Vamos à lógica:

- Sabemos que uma semana tem 7 dias. Começando pelo Domingo e terminando no Sábado.
- Pego qual o dia atual: ``currentDate``
- Utilizo o Array.from para criar um array com 7 posições.
- Utilizando o método ``.map`` para percorrer o array, pego o dia atual e subtraio com o valor do dia atual + o índice do array.
Exemplo:<br/>
Se o currentDate for 11 e o índice for 0, o resultado será 10, Domingo.<br/>
Se o currentDate for 11 e o índice for 1, o resultado será 11, Segunda.<br/>
Se o currentDate for 11 e o índice for 2, o resultado será 12, Terça.<br/>
E assim por diante.<br/>
- E no final chamo um ``new Date(currentDate.setDate(first))`` para pegar a data e utilizo o ``.toISOString().slice(0, 10)`` para retornar ela no formato ``YYYY-MM-DD``.

