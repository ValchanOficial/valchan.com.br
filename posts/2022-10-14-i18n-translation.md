---
date: 2022-10-14
title: "Como adicionar internacionalização no seu projeto React?"
description: "Super simples e rápido, veja como implementar a internacionalização"
category: "i18n"
image: "/assets/img/cover.png"
---

Abra seu projeto e instale as dependências necessárias:

- i18next
- i18next-browser-languagedetector

Feito isto, crie uma pasta para salvar os arquivos de traduções, por exemplo `locations`. Dentro desta pasta, crie um arquivo para cada idioma que você deseja suportar, por exemplo `en-US.json`. E dentro de cada um destes arquivos, crie um objeto com as traduções, por exemplo o `pt-BR.json`:

```json
{
  "translation": {
    "hello-world": "Olá Mundo",
    "button": "Alterar",
    "interpolation": "Exemplo {{value}}",
    "language": {
      "en-US": "Inglês",
      "pt-BR": "Português"
    }
  }
}
```

Ainda dentro de `locations`, crie um arquivo chamado `index.js` e adicione o seguinte código:

```js
import i18next from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import enUS from "./en-US.json"
import ptBR from "./pt-BR.json"

export const DEFAULT_LNG = "pt-BR"
export const resources = {
  "en-US": enUS,
  "pt-BR": ptBR,
}

i18next
  .use(LanguageDetector) // Utilizado para a detecção automática do idioma
  .init({
    compatibilityJSON: "v4",
    lng: DEFAULT_LNG,
    fallbackLng: DEFAULT_LNG,
    resources,
  })
```

Agora, no seu `App.js`, adicione o seguinte código:

```js
import "./styles.css"
import i18next from "i18next"
import { DEFAULT_LNG } from "./locations"
import { useState } from "react"

export default function App() {
  const [lng, setLng] = useState(DEFAULT_LNG)
  const { t, changeLanguage } = i18next

  const updateLang = language =>
    changeLanguage(language)
      .then(() => setLng(language))
      .catch(e => console.log(e))

  return (
    <div className="App">
      <h1>{t(`language.${lng}`)}</h1>
      <h1>{t("hello-world")}</h1>
      <button onClick={() => updateLang("en-US")}>en-US</button>
      <button onClick={() => updateLang("pt-BR")}>pt-BR</button>
      <p>{t("interpolation", { value: lng })}</p>
    </div>
  )
}
```

Segue exemplo:

<iframe src="https://codesandbox.io/embed/i18n-translation-bsozc9?fontsize=14&hidenavigation=1&theme=dark"
  style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
  title="i18n-translation"
  allow="camera; geolocation; microphone;"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe></br></br>

<div class="smallSize" align="center">

![Magic](https://media1.tenor.com/images/a3ef12891434d1a97d124c7faf633904/tenor.gif)

</div></br>

E caso você queira usar hooks, existe a biblioteca `react-i18next`.

O que achou? 😉 </br></br>

**_Fontes:_**

- <a href="https://www.i18next.com/" target="_blank" rel="noopener noreferrer">i18next</a>
- <a href="https://react.i18next.com/" target="_blank" rel="noopener noreferrer">react-i18next</a>
