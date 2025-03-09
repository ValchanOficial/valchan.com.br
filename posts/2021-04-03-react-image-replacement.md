---
date: 2021-04-03
title: "Adicionando imagem padrão quando houver erro"
description: "Setando imagem padrão ao ocorrer uma falha no carregamento de uma imagem"
category: "React"
image: "/assets/img/cover/cover2.png"
---

De forma bem simples:

- Irei pegar o currentTarget da img quando ocorrer o onError()
- Chamo a função setDefaultImage() passando este currentTarget
- Nesta função eu seto o currentTarget.onerror como null para informar que não há mais erro
- E também chamo o setImageWithErro() passando a minha imagem padrão(defaultImage), esta que substituirá a imagem do state que deu erro.

App.js

```javascript
import { useState, useCallback } from "react"
import "./styles.css"

const defaultImage = require("./assets/404.png")
// image by https://www.freepik.com/storyset

const App = () => {
  const [image, setImage] = useState(
    "https://raw.githubusercontent.com/ValchanOficial/ValchanOficial/master/social/valchan_octocat.png"
  )
  const [imageWithErro, setImageWithErro] = useState(
    "https://valchan.com.br/errorImage.png"
  )

  const setDefaultImage = useCallback(currentTarget => {
    setImageWithErro(defaultImage)
    currentTarget.onerror = null
  }, [])

  return (
    <div className="App">
      <img className="Image" alt="Valchan" src={image ?? defaultImage} />
      <img
        className="Image"
        alt="Valchan"
        src={imageWithErro ?? defaultImage}
        onError={({ currentTarget }) => setDefaultImage(currentTarget)}
      />
    </div>
  )
}

export default App
```

<iframe 
  src="https://codesandbox.io/embed/image-replacement-reactjs-thfjm?fontsize=14&hidenavigation=1&theme=dark"
  style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
  title="image replacement reactjs"
  allow="camera; geolocation; microphone;"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

- <a href="https://www.freepik.com/storyset" target="_blank" rel="noopener noreferrer">Freepik</a>
