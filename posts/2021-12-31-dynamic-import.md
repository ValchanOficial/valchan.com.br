---
date: 2021-12-31
title: "Importação dinâmica"
description: "Next.js e a importação dinâmica de módulos ES2020"
category: "NextJS"
image: "/assets/img/cover.png"
---

Eu pensava que não precisaria utilizar recursos avançados do NextJS, mas recentemente em um projeto eu me deparei com um problema relacionado ao SSR(Server-Side Rendering), como vocês sabem, quando utilizamos o SSR o ``navigator``, ``window`` e ``self`` por exemplo não ficam disponíveis durante o processo de renderização, ou seja, não conseguimos utilizar eles direito.

Provavelmente você já deve ter visto um destes erros:

- ``ReferenceError: navigator is not defined``
- ``ReferenceError: self is not defined ``
- ``ReferenceError: window is not defined ``

Há várias formas de resolver estes erros, utilizando o useEffect, utilizando o Webpack por exemplo.
Alguns exemplos que eu vi de pessoas fazendo no webpack:
- ``config.output.globalObject = `(typeof self !== 'undefined' ? self : this)`;``
- ``output: { globalObject: 'this' }``

Porém dessa forma não resolvia o meu problema, foi aí que eu pesquisei mais a fundo e encontrei o import dinâmico.

O problema ocorria na lib que eu havia importando, nos estilos dela estava sendo utilizado o self.
Segue abaixo um exemplo do código utilizando o next/dynamic.
Passando ``ssr: false``, ele não renderiza no server-side, e sim no client-side.

```javascript
import dynamic from 'next/dynamic'

const DynamicComponent = dynamic(
  () => import('lib/example'),
  { ssr: false }
)

function Example() {
  return (
    <>
      <DynamicComponent />
    </>
  )
}

export default Example
```


- <a href="https://nextjs.org/docs/advanced-features/dynamic-import#with-no-ssr" target="_blank" rel="noopener noreferrer">Next.js</a>
- <a href="https://webpack.js.org/configuration/output/#outputglobalobject" target="_blank" rel="noopener noreferrer">Webpack - output.globalObject</a>