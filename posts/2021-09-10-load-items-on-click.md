---
date: 2021-09-10
title: "Como carregar dados utilizando o evento onClick"
description: "Estou com um array, mas não quero exibir tudo de uma vez só, como faço para carregar apenas quando o usuário quiser?"
category: "ReactJS"
image: "/assets/img/cover.png"
---



```javascript
import { useState } from "react";

const fakeItems = [
  { id: 0, title: "Example0" },
  { id: 1, title: "Example1" },
  { id: 2, title: "Example2" },
  { id: 3, title: "Example3" },
  { id: 4, title: "Example4" },
  { id: 5, title: "Example5" },
];

export default function App() {
  const [list, setList] = useState(fakeItems); // meu array de objetos
  const [visibleItems, setVisibleItems] = useState(3); // este será o número de itens que serão exibidos na tela

  const handleLoadMore = () => {
    if (visibleItems < list.length) { // se houver mais items para exibir
      setVisibleItems((oldState) => oldState + 3); // eu adiciono 3 itens
    }
  };

  const handleLoadLess = () => {
    if (list.slice(0, visibleItems).length > 3) { // se o tamanho da lista for maior que 3
      setVisibleItems((oldState) => oldState - 3); // eu removo 3 itens
    }
  };

  return (
    <div>

      <div>
        {/* aqui eu faço um map apenas dos itens que estão visíveis */}
        {list.slice(0, visibleItems).map((item) => (
          <span key={item.id}>{item.title}</span>
        ))}
      </div>

      <div>
        <button onClick={handleLoadMore}>Load more</button>
        <button onClick={handleLoadLess}>Load less</button>
      </div>

    </div>
  );
}

```

<iframe 
    src="https://codesandbox.io/embed/on-click-load-items-from-array-qcmyz?fontsize=14&hidenavigation=1&theme=dark"
    style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
    title="on-click-load-items-from-array"
    allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
    sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

