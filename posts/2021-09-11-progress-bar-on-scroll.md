---
date: 2021-09-11
title: "Barra de progresso ao rolar a página"
description: "Como fazer uma barra de progresso que indique a rolagem da página?"
category: "ReactJS"
image: "/assets/img/cover.png"
---

Vamos por partes:

**clientHeight** e **clientWidth** são as dimensões da janela do navegador, ou seja, apenas o que o usuário vê.

**scrollHeight** e **scrollWidth** são as dimensões da página.

Segue imagem abaixo:

![Imagem representando clientHeight, clientWidth, scrollHeight, scrollWidth entre outros](/assets/img/content.png)

App.js

```javascript
import ProgressBar from "./ProgressBar"

import "./styles.css"

export default function App() {
  return (
    <div className="App">
      <ProgressBar />
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nisi
        libero. Nulla sed ligula eu magna imperdiet dapibus. Suspendisse sed
        ultrices metus. Integer sapien urna, pharetra et ante at, congue rutrum
        tortor. Sed elit ligula, vestibulum at ex non, convallis tincidunt mi.
        Cras quis luctus nunc, nec accumsan augue. Curabitur finibus nibh ac
        gravida mollis.
        <br />
        <br />
        Etiam non convallis lorem. Vivamus eget magna sit amet urna condimentum luctus
        a non nibh. Vestibulum magna risus, tempor non mollis eget, hendrerit vel
        metus. Suspendisse vel purus tristique, convallis lectus ut, varius ligula.
        Nulla eget lacinia sapien. Nulla non neque ut lacus hendrerit imperdiet.
        Suspendisse enim quam, mollis id mauris sit amet, suscipit varius lorem.
        In convallis enim lacus, id viverra justo commodo in. Vestibulum pulvinar
        dolor nec tempor sodales. Aenean ut erat vel tellus auctor bibendum. Mauris
        hendrerit interdum arcu in elementum.
      </div>
    </div>
  )
}
```

ProgressBar/index.js

```javascript
import { useState, useEffect } from "react"

import "./styles.css"

export default function ProgressBar() {
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    let progressBarHandler = () => {
      const totalScroll = document.documentElement.scrollTop
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight
      const scroll = `${totalScroll / windowHeight}`
      setScroll(scroll)
    }
    window.addEventListener("scroll", progressBarHandler)
    return () => window.removeEventListener("scroll", progressBarHandler)
  }, [])

  return (
    <div className="ProgressBar" style={{ transform: `scale(${scroll}, 1)` }} />
  )
}
```

ProgressBar/styles.css

```css
.ProgressBar {
  position: sticky;
  background: linear-gradient(to left, rgb(108, 37, 223), rgb(153, 9, 84));
  height: 6px;
  z-index: 1;
  top: 0;
  left: 0;
  transform-origin: top left;
  transform: scale(0, 0);
  border-radius: 8px;
}
```

<iframe src="https://codesandbox.io/embed/progress-bar-on-scroll-rno17?fontsize=14&hidenavigation=1&theme=dark"
    style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
    title="progress-bar-on-scroll"
    allow="camera; geolocation; microphone;"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

- Img: <a href="https://stackoverflow.com/a/45897388/11842937" target="_blank" rel="noopener noreferrer">StackOverflow</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/clientHeight" target="_blank" rel="noopener noreferrer">clientHeight</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/clientWidth" target="_blank" rel="noopener noreferrer">clientWidth</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollHeight" target="_blank" rel="noopener noreferrer">scrollHeight</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollWidth" target="_blank" rel="noopener noreferrer">scrollWidth</a>
- <a href="https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollTop" target="_blank" rel="noopener noreferrer">scrollTop</a>
