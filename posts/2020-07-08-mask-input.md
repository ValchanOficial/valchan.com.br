---
date: 2020-07-08
title: "Como criar máscaras(mask) com o regex"
description: "Como criar máscaras(mask) para os inputs utilizando o regex."
category: "javascript"
image: '/assets/img/cover.png'
---

Essa é uma postagem bem curta com o objetivo de mostrar como adicionar uma máscara enquanto você digita em um campo de texto utilizando o regex.

Segue os códigos:

```js
// 000.000.000-00
const maskCPF = value => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d)/, "$1.$2")
    .replace(/(\d{3})(\d{1,2})/, "$1-$2")
    .replace(/(-\d{2})\d+?$/, "$1");
};

// (00) 00000-0000
const maskPhone = value => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d{4})(\d)/, "$1-$2");
};

// 00000-000
const maskCEP = value => {
  return value.replace(/\D/g, "").replace(/^(\d{5})(\d{3})(\d)/, "$1-$2");
};

// 00/00/0000
const maskDate = value => {
  return value
    .replace(/\D/g, "")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{4})(\d)/, "$1");
};

// Aceita apenas que letras sejam digitadas
const maskOnlyLetters = value => {
  return value.replace(/[0-9!@#¨$%^&*)(+=._-]+/g, "");
};

// Aceita apenas números
const maskOnlyNumbers = value => {
  return value.replace(/\D/g, "");
};
```

Caso você queira ver um exemplo:

Link: <a href="https://codesandbox.io/s/react-input-mask-go75h" target="_blank" rel="noopener noreferrer">React Input Mask</a>

Caso você tenha visto algum ponto que possa ser melhorado ou feito diferente e queira compartilhar, só comentar abaixo :3
