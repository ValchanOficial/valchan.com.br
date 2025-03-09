---
date: 2021-10-27
title: "Lint-staged + Husky"
description: "A Piece of Cake: como configurar lint-staged com o husky"
category: "Javascript"
image: "/assets/img/cover/cover2.png"
---

Primeiramente precisamos instalar o husky e o lint-staged.

```bash
npm install lint-staged husky --save-dev
# ou
yarn add -D lint-staged husky
```

Agora na raiz do projeto, criamos o arquivo `.lintstagedrc.json`, e nele colocamos as configurações:

```json
// exemplo 1
{
  "*.{js,jsx}": "eslint --fix" // --fix corrige automaticamente os erros mais simples
}
// exemplo 2
{
  "*.{ts,tsx}": "eslint --fix"
}
// exemplo 3
{
  "*.{js,jsx,ts,tsx}": "eslint --fix"
}
// exemplo 4
{
  "*.{js,jsx,ts,tsx}": [
    "eslint --fix",
    "git add"
  ],
}
// exemplo 5
{
  "*.{js,css,md}": "prettier --write" // --write para que o prettier escreva no arquivo
}
// exemplo 6
{
  "*.js": [
    "eslint --fix",
    "jest --passWithNoTests"
    // --passWithNoTests permite que a verificação passe mesmo que não existam arquivos de teste
  ]
}
// exemplo 7
{
  "*.scss": [
    "stylelint --syntax scss --fix",
    "git add"
  ],
}
```

Na versão mais recente do Next.js, criamos o arquivo `.lintstagedrc.js`:

```javascript
module.exports = {
  "**/*.js?(x)": filenames =>
    `next lint --fix --file ${filenames
      .map(file => file.split(process.cwd())[1])
      .join(" --file ")}`,
}
```

Como você pode ver, há várias formas de configurar o arquivo do lint-staged, prepare da forma que melhor se adéque ao seu projeto. Feito isso, precisamos configurar o husky para que ele execute o lint-staged a cada commit.<br/>
Dentro do package.json, iremos adicionar o script do husky:<br/>

```json
  // ...
  "scripts": {
    // ...
    "prepare": "husky install",
    // ...
  },
  // ...
```

Este script será executado apenas uma vez, para a inicialização do husky.<br/>
Iremos rodar o comando:

```bash
npm run prepare
# ou
yarn prepare
```

Feito isso, uma pasta .huskyrc será criada, e nela iremos colocar as configurações do husky com o seguinte comando:

```bash
npx husky add .husky/pre-commit "npx lint-staged"
```

Feito isso um arquivo de pre-commit será criado na pasta do husky, e agora a cada commit que você fizer o husky irá rodar o lint-staged.<br/>

- **Extra**

Instalação do git-commit-msg-linter:

```bash
npm install git-commit-msg-linter --save-dev
# ou
yarn add -D git-commit-msg-linter
```

Depois rodar o comando:

```bash
npx husky add .husky/commit-msg ".git/hooks/commit-msg \$1"
```

- <a href="https://github.com/okonet/lint-staged" target="_blank" rel="noopener noreferrer">lint-staged</a>

- <a href="https://github.com/typicode/husky" target="_blank" rel="noopener noreferrer">husky</a>

- <a href="https://github.com/legend80s/commit-msg-linter" target="_blank" rel="noopener noreferrer">git-commit-msg-linter</a>
