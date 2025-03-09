---
date: 2021-10-12
title: "Qual o mês?"
description: "Tenho uma data em formato ISOString e preciso pegar o nome do mês desta data, como faço?"
category: "Javascript"
image: "/assets/img/cover/cover2.png"
---

Há várias formas de fazer, segue abaixo dois exemplos:

Exemplo 1:

```javascript
const months = { 
  "01": "Janeiro",
  "02": "Fevereiro",
  "03": "Março",
  "04": "Abril",
  "05": "Maio",
  "06": "Junho",
  "07": "Julho",
  "08": "Agosto",
  "09": "Setembro",
  "10": "Outubro",
  "11": "Novembro",
  "12": "Dezembro",
}

const getMonthName = (data) => {
  const date = data.match(/\d+/g);
  const [_, month] = date;
  return months[month];
};

const data = new Date().toISOString(); // 2021-10-12T00:00:00.000Z 
console.log(getMonthName(data)) // Outubro
```

Exemplo 2:

```javascript
const getMonthName = (data) => new Date(data).toLocaleString('pt-BR', { month: 'long' });
const data = new Date().toISOString();  // 2021-10-12T00:00:00.000Z 
console.log(getMonthName(data)) // outubro
```

