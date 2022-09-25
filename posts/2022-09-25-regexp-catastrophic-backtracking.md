---
date: 2022-09-25
title: "Catastrophic Backtracking"
description: "O que é e como evitar o Catastrophic Backtracking"
category: "RegEx"
image: "/assets/img/Catastrophic_Backtracking.png"
---

Expressões regulares são uma ferramenta poderosa para encontrar padrões em textos. Mas, nem tudo são flores.. Uma das coisas que podem atrapalhar o uso de expressões regulares é o **Catastrophic Backtracking**.

## O que é o Catastrophic Backtracking?

O Catastrophic Backtracking é um problema que ocorre quando uma expressão regular é executada em um texto muito grande e que possui um padrão muito específico. O interpretador da expressão regular acaba levando bastante tempo para encontrar o padrão e, por isso, ou o sistema fica lento ou até mesmo pode travar por causa disto.

Um exemplo de como esse problema realmente é sério: <br/>
Imagine que no front você tenha um input de texto, e que por algum motivo você utiliza uma expressão regular para validar esse texto digitado. Se o usuário ou uma pessoa mal intencionada digitar um texto muito grande e que contenha um padrão específico, com certeza o Catastrophic Backtracking irá ocorrer, e o estrago você já sabe.

Exemplo do site <a href="https://www.regular-expressions.info/catastrophic.html" target="_blank" rel="noopener noreferrer">Regular-Expressions.info</a> utilizando a regex ``^(.*?,){11}P`` no <a href="https://www.regexbuddy.com/debug.html" target="_blank" rel="noopener noreferrer">RegexBuddy’s debugger</a>:

<div class="averageSize">

![Catastrophic Backtracking com a RegEx: ^(.*?,){11}P no RegexBuddy](/assets/img/rxbcatastrophic.png)

</div>

## Como evitar o Catastrophic Backtracking?

- Limite a quantidade de caracteres, tanto no input quanto no regex
- Evite muitas opções de match, busque formas de ser mais específico
- Evite usar muitos metacaracteres como o ``+`` ou ``*``, use-os apenas quando necessário!
- - Info: ``*`` - Corresponde ao caractere precedente zero ou mais vezes. Por exemplo, ``zo*`` corresponde a ``z`` ou ``zoo``. 
- - Info: ``+`` - Corresponde ao caractere precedente uma ou mais vezes. Por exemplo, ``zo+`` corresponde a ``zoo``, mas não a ``z``. 
- Teste sua regex antes de colocar em produção, eu utilizo bastante o site: <a href="https://regexr.com/" target="_blank" rel="noopener noreferrer">RegExr</a> ou o <a href="https://regex101.com/" target="_blank" rel="noopener noreferrer">RegEx101</a>.<br/><br/>


***Fontes:***

- <a href="https://www.regular-expressions.info/catastrophic.html" target="_blank" rel="noopener noreferrer">Runaway Regular Expressions: Catastrophic Backtracking</a>
- <a href="https://community.appway.com/screen/kb/article/checking-strings-avoiding-catastrophic-backtracking-1482810891360" target="_blank" rel="noopener noreferrer">Checking Strings: Avoiding Catastrophic Backtracking</a>
 - <a href="https://www.ibm.com/docs/pt-br/rational-clearquest/8.0.1?topic=tags-meta-characters-in-regular-expressions" target="_blank" rel="noopener noreferrer">Metacaracteres em Expressões Regulares </a>