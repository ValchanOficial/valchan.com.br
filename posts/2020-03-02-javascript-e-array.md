---
date: 2020-03-02
title: "Javascript e Arrays"
description: "Parte 1: Exemplos de código utilizando as funções dos Arrays."
category: "javascript"
image: '/assets/img/cover.png'
---

**.some()**
<br>
Retorna um valor boolean caso algum dos elementos do array tenha a condição atendida.
<br>
Exemplo:<br>
``` javascript
const array = [1, 2, 3, 4, 5];
console.log(array.some(elemento => elemento === 4)); //true
console.log(array.some(elemento => elemento === 6)); //false
```
**.map()**
<br>
Retorna um novo array com as condições passadas.
<br>
Exemplo:<br>
``` javascript
const array = [1, 4, 9, 16];
console.log(array.map(x => x * 2)); // Array [2, 8, 18, 32]
```
Exemplo com object:<br>
``` javascript
const foguetes = [
    { pais:'Brasil', lancamentos:32 },
    { pais:'Estados Unidos', lancamentos:23 },
    { pais:'China', lancamentos:54 }
];
const lancamentosList = foguetes.map((elem) => {
  return {
    pais: elem.pais,
    lancamentos: elem.lancamentos+10,
  } 
});
console.log(lancamentosList);
// Array [Object { pais: "Brasil", lancamentos: 42 }, Object { pais: "Estados Unidos", lancamentos: 33 }, Object { pais: "China", lancamentos: 64 }]
```
<br><br>
**.find()**
<br>
Retorna o primeiro elemento que se encaixa na condição.
<br>
Exemplo:<br>
``` javascript
const array = [5, 12, 8, 130, 44];
console.log(array.find(elemento => elemento > 10)); // 12
```
**.concat()**
<br>
Concatena duas listas em uma.
<br>
Exemplo:<br>
``` javascript
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);
console.log(array3); // Array ["a", "b", "c", "d", "e", "f"]
```
**.findIndex()**
<br>
Retorna o índice do objeto a ser buscado, caso não encontre, retorna -1.
<br>
Exemplo:<br>
``` javascript
const array = [5, 12, 8, 130, 44];
console.log(array.findIndex(elemento => elemento === 130)); //3
console.log(array.findIndex(elemento => elemento === 2)); //-1
```
**.sort()**
<br>
Reorganiza lista.
<br>
Exemplo:<br>
``` javascript
const nomes = ['Maria', 'Jean', 'José', 'Felipe', 'Paula', 'Guilherme'];
console.log(nomes.sort());
//Array ["Felipe", "Guilherme", "Jean", "José", "Maria", "Paula"]
```
Exemplo 2:<br>
``` javascript
const numeros = [1, 30, 4, 21, 100000];
console.log(numeros.sort());
//Array [1, 100000, 21, 30, 4]
```
Exemplo com object:<br>
``` javascript
const usuarios = [{nome: 'maria'}, {nome: 'josé'}, {nome: 'pedro'}];
console.log(usuarios);
//Array [Object { nome: "maria" }, Object { nome: "josé" }, Object { nome: "pedro" }]
usuarios.sort((a, b) => a.nome.localeCompare(b.nome));
console.log(usuarios);
//Array [Object { nome: "josé" }, Object { nome: "maria" }, Object { nome: "pedro" }]
```
**.every()**
<br>
Retorna um booleano caso todos os elementos atendam a condição.
<br>
Exemplo:<br>
``` javascript
const array = [1, 30, 39, 29, 10, 13];
console.log(array.every(valor => valor < 40)); //true
console.log(array.every(valor => valor > 40)); //false
```
**.fill()**
<br>
Altera os elementos de um array.<br>
array.fill(valorDeTroca, inicioDoArray(padrão 0), finalDoArray(array.length));
<br>
Exemplo:<br>
``` javascript
const array = [1, 2, 3, 4];
//preenche a lista com 0, começa da posição 2 até o 4(tamanho do array)
console.log(array.fill(0, 2, array.length));// [1, 2, 0, 0]
console.log(array.fill(5, 1)); // [1, 5, 5, 5]
console.log(array.fill(6)); // [6, 6, 6, 6]
```
**.reduce()**
<br>
Acumula os valores de um array retornando apenas um valor.<br>
array.reduce((acumulador, valorAtual) => acumulador + valorAtual, valorInicialDoAcumulador)
<br>
Exemplo:<br>
``` javascript
const array = [1, 2, 3, 4];
console.log(array.reduce((acumulador, valorAtual) => acumulador + valorAtual)); //10
console.log(array.reduce((acumulador, valorAtual) => acumulador + valorAtual, 5)); //15
```
Exemplo com object:
``` javascript
const valores = {
  a: {valor:1},
  b: {valor:2},
  c: {valor:3}
}
const resultado = Object.values(valores).reduce((total, {valor}) => total + valor, 0)
console.log(resultado) // 6
```
**.includes()**
<br>
Verifica se o valor passado é igual a algum elemento e retorna um booleano.<br>
array.includes(valorPassado);
<br>
Exemplo:<br>
``` javascript
const numeros = [1, 2, 3];
console.log(numeros.includes(2)); // true
console.log(numeros.includes(4)); // false
```
Exemplo 2:<br>
``` javascript
const animais = ['gato', 'cao', 'morcego'];
console.log(animais.includes('gato')); // true
console.log(animais.includes('ato')); // false
```
**.reverse()**
<br>
Inverte a posição dos elementos do array, o primeiro se torna o último e o último se torna o primeiro.
<br>
Exemplo:<br>
``` javascript
const numeros = ['um', 'dois', 'três'];
console.log('numeros:', numeros); // "numeros:" Array ["um", "dois", "três"]
console.log('reverso:', numeros.reverse()); // "reverso:" Array ["três", "dois", "um"]
// Obs.: a alteração é no array original!
console.log('numeros:', numeros); // "numeros:" Array ["três", "dois", "um"]
```
**.filter()**
<br>
Retorna um novo array baseado nas condições passadas.
<br>
Exemplo:<br>
``` javascript
const palavras = ['nome', 'texto', 'maçã', 'caixote', 'coelho', 'presente'];
const array1 = palavras.filter(palavra => palavra.length > 6);
const array2 = palavras.filter(palavra => palavra.length === 2);
console.log(array1); // Array ["caixote", "presente"]
console.log(array2);// Array []
```
**.forEach()**
<br>
Executa um função para cada elemento do array.
<br>
Exemplo:<br>
``` javascript
const array = ['a', 'b', 'c'];
array.forEach(elemento => console.log(elemento));
// "a"
// "b"
// "c"
```
**Fontes:**
- https://youtu.be/uFJkTJhDSdA
- https://developer.mozilla.org/en-US/docs/Web/JavaScript
- https://stackoverflow.com/a/45784629/11842937
- https://stackoverflow.com/questions/47841899/js-map-return-object
