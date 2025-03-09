---
date: 2022-05-15
title: "Notação de Big-O"
description: "O que é a notação de Big-O?"
category: "DSA"
image: "/assets/img/cover/cover2.png"
---

Atualmente estou estudando sobre Notação de Big-O... E me sinto frustada em saber que muitas faculdades* abordam este assunto de forma muito superficial.

*Baseado em conversas que tive com amigos, e também com a minha própria experiência na graduação, o máximo que vi foi sobre as estruturas: pilhas, filas etc.

Daria até para levantar um assunto apenas sobre a qualidade de ensino das faculdades da área de tecnologia aqui no Brasil.

Mas enfim... seguindo com o assunto sobre Big-O...

**"Como podemos medir a eficiência de um algoritmo?"** <br/>
Ref.: Livro da Loiane Groner - Estruturas de dados e algoritmos com Javascript

A Notação de Big-O é usada para descrever o desempenho, eficiência, ou a complexidade de um algoritmo, utilizando o tempo de execução e o espaço/memória consumida como métrica.

Nesta tabela é possível ver a complexidade da notação big-O: <a href="https://bigocheatsheet.com" target="_blank" rel="noopener noreferrer">Big-O Cheat Sheet</a>


Vejamos alguns exemplos:

- **O(1)** Constant / Constante
Independente do valor de entrada de x o consumo se manterá o mesmo, ou seja, se mantém constante, sem variações<br/>
Se x for 10 ou 100 não faz diferença

```javascript
function O1(x) {
  return ++x;
}
O1(1);
```
Entrada: 1 -  Saída: 2

- **O(n)** Linear
O consumo vai aumentando conforme o N aumenta<br/>
Se N for 10 irá executar 10x<br/>
Se N for 100 irá executar 100x

```javascript
function ON(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count += 1;
  }
  return count;
}
ON([1, 2, 3, 4, 5]);
```
Entrada: [1, 2, 3, 4, 5] - Saída: 5

- **O(n^2)** Quadratic / Quadrática
Aqui o negócio começa a ficar cabuloso<br/>
Se a entrada for um array com 10 itens (N), ele irá passar pelo primeiro loop 10x e pelo loop interno mais 10x<br/>
No final isto irá executar 100x!<br/>
`10^2 = 100`<br/>
Sim, agora imagine um array contendo 1000 itens? 😜

```javascript
function ON2(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      count += 1;
    }
  }
  return count;
}
ON2([1, 2, 3, 4, 5]);
```
Entrada: [1, 2, 3, 4, 5] - Saída: 25

E vai indo...
- **O(log(n))** Logarithmic / Logarítmica
- **O((log(n))c)** Polylogarithmic / Polilogarítmica
- **O(n^c)** Polynomial / Polinomial
- **O(c^n)** Exponential / Exponencial

<br/>

Ainda sigo estudando sobre a Notação Big-O, para isto estou utilizando estes livros:
- Estruturas de dados e algoritmos com Javascript - Loiane Groner
- Algoritmos - Teoria e Prática por Thomas Cormen
- Cracking the Coding Interview por Gayle Laakmann McDowell

<br/>

E aí o que achou? Você já tinha ouvido falar sobre a Notação Big-O? 🙂
