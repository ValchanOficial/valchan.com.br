---
date: 2022-07-23
title: "VAR X LET X CONST"
description: "Você sabe a diferença entre VAR, LET e CONST?"
category: "Javascript"
image: "/assets/img/cover/cover2.png"
---

<table style="table-layout: fixed;">
    <tr>
        <th></th>
        <th>VAR</th>
        <th>LET</th>
        <th>CONST</th>
    </tr>
    <tr>
        <td>Escopo Global</td>
        <td>✅</td>
        <td>🚫</td>
        <td>🚫</td>
    </tr>
    <tr>
        <td>Escopo de Função</td>
        <td>✅</td>
        <td>✅</td>
        <td>✅</td>
    </tr>
    <tr>
        <td>Escopo de bloco</td>
        <td>🚫</td>
        <td>✅</td>
        <td>✅</td>
    </tr>
    <tr>
        <td>Pode iniciar sem um valor ou ter seu valor reescrito?</td>
        <td>✅</td>
        <td>✅</td>
        <td>🚫</td>
    </tr>
    <tr>
        <td>Pode ser redeclarada ou usada antes de sua declaração?</td>
        <td>✅</td>
        <td>🚫</td>
        <td>🚫</td>
    </tr>
    <tr>
        <td>Pode ser movida pra o topo de seu escopo(hoisting) e o valor ser mantido?</td>
        <td>✅</td>
        <td>🚫</td>
        <td>🚫</td>
    </tr>
</table>
</br>
</br>

A partir das informações apresentadas uma dica que eu dou é: **não utilize var** 😉

E caso você queira saber mais sobre os escopos, recomendo ler este artigo:

- https://imasters.com.br/desenvolvimento/escopos-em-javascript
