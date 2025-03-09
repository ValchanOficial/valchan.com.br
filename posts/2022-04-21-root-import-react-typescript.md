---
date: 2022-04-21
title: "Root import"
description: "Fazendo o import de arquivos de uma forma mais limpa"
category: "Typescript"
image: "/assets/img/cover/cover2.png"
---

Imagine que você está importando um arquivo, e o caminho para este arquivo fica desta forma:

```javascript
import Batata from "../../../components/Batata";
```

Como deixar este import assim?

```javascript
import Batata from "components/Batata";
```

Muito simples, assim que você tem sua pasta root(raiz) definida, só especificar ela no arquivo `tsconfig.json`

```json
"baseUrl": "./"
// ou
"baseUrl": "src"
```

Super simples e fácil, não?

<div class="smallSize" align="center">

![Magic](https://media1.tenor.com/images/a3ef12891434d1a97d124c7faf633904/tenor.gif)

</div>

E caso você queira especificar os paths, você pode usar o Path mapping:

```json
"paths": {
  "@components": "./src/components/*"
}
```
Resultado:
```javascript
import Batata from "@components/Batata";
```

Ou você também pode fazer esta forma:

```json
"paths": {
  "~/*": "./src/*"
}
```
Resultado: 
```javascript
import Batata from "~/components/Batata";
```

- <a href="https://www.typescriptlang.org/tsconfig#baseUrl" target="_blank" rel="noopener noreferrer">tsconfig - baseUrl</a>
- <a href="https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping" target="_blank" rel="noopener noreferrer">tsconfig - Path mapping</a>
