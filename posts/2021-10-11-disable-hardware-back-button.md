---
date: 2021-10-11
title: "Desabilitando botão de voltar do hardware: Android e iOS"
description: "Como desabitar a função de voltar do botão a nível de hardware dos celulares utilizando o React Native?"
category: "React Native"
image: "/assets/img/cover.png"
---

Apenas para Android, você irá no seu ``App.js`` e utilizando a API BackHandler e o hook useEffect, você poderá desabilitar o botão de voltar do celular.

```javascript
import { useEffect } from 'react';
import { BackHandler } from 'react-native';

const App = () => {
...
useEffect(() => {
  BackHandler.addEventListener('backPress', () => true)
  return () => BackHandler.removeEventListener('backPress', () => true)
}, [])
...
}

export default App;
```

No iOS você irá nas opções do Stack Navigator, e setar o ``gestureEnabled`` como ``false``.<br/>
**Info**: O padrão é ``true`` no iOS, e ``false`` no Android.

```javascript
<Stack.Navigator 
  initialRouteName="Example Navigator"
  screenOptions={{
    gestureEnabled: false,
  }}
/>
// ou a nível de tela
<Stack.Screen 
  name="Example Screen"
  options={{
    gestureEnabled: false,
  }}
/>
```

Fazendo estes dois passos, você desabilitará o botão de voltar do celular tanto no Android quanto no iOS.


- <a href="https://reactnavigation.org/docs/stack-navigator/#gestureenabled" target="_blank" rel="noopener noreferrer">gestureEnabled</a> 
- <a href="https://reactnative.dev/docs/backhandler" target="_blank" rel="noopener noreferrer">BackHandler</a> 
