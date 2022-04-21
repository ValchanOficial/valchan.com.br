---
date: 2022-04-21
title: "Expira e Inspira"
description: "Como fazer essa animação utilizando CSS?"
category: "CSS"
image: "/assets/img/cover.png"
---

```javascript
import "./styles.css";

export default function App() {
  return (
    <div className="main">
      <div className="breathing" />
    </div>
  );
}
```

```css
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.breathing {
  animation: breathing 4s ease-out infinite normal;
  background-color: red;
  clip-path: path(
    "M15,45 A30,30,0,0,1,75,45 A30,30,0,0,1,135,45 Q135,90,75,110 Q15,90,15,45 Z"
  );
  height: 120px;
  width: 150px;
}

@keyframes breathing {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(2);
  }

  100% {
    transform: scale(1);
  }
}
```

Exemplo:

<iframe src="https://codesandbox.io/embed/breathing-animation-r82hsj?fontsize=14&hidenavigation=1&theme=dark"
    style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
    title="breathing animation"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

Se quiser ver mais sobre o clip-path, dê uma olhada no meu outro [post](https://valchan.com.br/clip-path/)


Não se esqueça:

<blockquote>  
  <p>Inspira. Respira. Não Pira.</p>
  <cite>Autor(a) Desconhecido(a)</cite>
</blockquote>

- <a href="https://codepen.io/machi/pen/YymGzP" target="_blank" rel="noopener noreferrer">CodePen - Breathing CSS animation - Kouyo Machi</a>

- <a href="https://vmar76.medium.com/using-css-animations-to-visualize-breathing-techniques-7a20ee0aed5a" target="_blank" rel="noopener noreferrer">Using CSS Animations to Visualize Breathing Techniques</a>