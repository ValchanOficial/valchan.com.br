---
date: 2021-11-18
title: "Imagem de Background utilizando var inline"
description: "Como alterar uma imagem de background no component com uma var inline?"
category: "ReactJS"
image: "/assets/img/cover.png"
---

```javascript
// App.js
import "./styles.css"

export default function App() {
  const imageUrl =
    "https://images.unsplash.com/photo-1637247474589-e948ee383422"
  const bgImage = { "--bg-image": `url(${imageUrl})` }

  return (
    <div className="App" style={bgImage}>
      <h1>Hello ReactJS</h1>
    </div>
  )
}
```

```css
/* styles.css */
.App {
  background-image: var(--bg-image);
  background-size: cover;
}
```

Caso você esteja utilizando typescript, você pode utilizar o código abaixo:

```javascript
// App.ts
import { CSSProperties } from 'react';
import "./styles.css";

export default function App() {
  const imageUrl = "https://images.unsplash.com/photo-1637247474589-e948ee383422";
  const bgImage = { "--bg-image": `url(${imageUrl})` } as CSSProperties;

  return (
    <div className="App" style={bgImage}>
      <h1>Hello ReactJS</h1>
    </div>
  );
}
```

<div class="smallSize" align="center">

![Magic](https://media1.tenor.com/images/a3ef12891434d1a97d124c7faf633904/tenor.gif)

</div>

<iframe
  src="https://codesandbox.io/embed/set-background-image-by-var-inline-9z7m4?fontsize=14&hidenavigation=1&theme=dark"
  style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
  title="set-background-image-by-var-inline"
  allow="camera; geolocation; microphone;"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

- <a href="https://unsplash.com/photos/v5RRE2uTQJk" target="_blank" rel="noopener noreferrer">Imagem em Unsplash</a>

- <a href="https://react-typescript-cheatsheet.netlify.app/docs/advanced/types_react_api/#typesreact" target="_blank" rel="noopener noreferrer">CSSProperties</a>
