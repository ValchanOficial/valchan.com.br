---
date: 2022-04-22
title: "Ignorando o console no Jest"
description: "Algumas formas de ignorar as mensagens do console no Jest"
category: "Jest"
image: "/assets/img/cover.png"
---

Dentro da configurações do Jest `setupTests.js`

```javascript
jest.spyOn(global.console, 'log').mockImplementation(() => jest.fn());
```

Dentro do teste você pode adicionar no `beforeAll` ou no próprio `it` ou `test`:

```javascript
beforeAll(() => {
  jest.spyOn(console, 'log').mockImplementation(jest.fn());
  // ...
});

// ou

it('teste', () => {
  jest.spyOn(console, 'log').mockImplementation(jest.fn());
  // ...
});

// ou

test('teste', () => {
  jest.spyOn(console, 'log').mockImplementation(jest.fn());
  // ...
});
```

Utilizando a flag `--silent`
```bash
jest --silent
```

- <a href="https://jestjs.io/docs/jest-object#jestspyonobject-methodname" target="_blank" rel="noopener noreferrer">jest.spyOn(object, methodName)</a>
- <a href="https://jestjs.io/docs/cli#--silent" target="_blank" rel="noopener noreferrer">CLI --silent</a>