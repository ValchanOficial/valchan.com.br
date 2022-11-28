---
date: 2022-04-21
title: "Rotacionando imagem"
description: "Como rotacionar uma imagem via CSS?"
category: "CSS"
image: "/assets/img/cover.png"
---

```javascript
import { useState } from "react"
import "./styles.css"

import img from "./undraw_arrow.svg"

export default function App() {
  const [rotate, setRotate] = useState(0)

  const handleRotateImage = () =>
    setRotate(oldState => (oldState === 270 ? 0 : oldState + 90))

  return (
    <div className="App">
      <button className="Btn" onClick={handleRotateImage}>
        Rotate Image
      </button>
      <div className="ImgBox">
        <img
          className="Img"
          src={img}
          alt="Undraw Outer Space"
          style={{ transform: `rotate(${rotate}deg)` }}
        />
      </div>
    </div>
  )
}
```

```css
.App {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.Btn {
  background: #6c63ff;
  border: 0;
  border-radius: 8px;
  padding: 1rem;
}

.ImgBox {
  background: #89d8fe;
  width: 20rem;
  height: 20rem;
  margin: 2rem 0 0;
  border-radius: 8px;
}

.Img {
  // necessário para imagem se manter com o tamanho da div pai
  display: block;
  height: 100%;
  width: 100%;
}
```

<iframe src="https://codesandbox.io/embed/rotate-image-45v2zt?fontsize=14&hidenavigation=1&theme=dark"
  style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
  title="rotate image"
  allow="camera; geolocation; microphone;"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>
