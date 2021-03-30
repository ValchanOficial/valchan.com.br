---
date: 2021-03-30
title: "Stack, Tab e Drawer"
description: "Rotas e navegação no React Native"
category: "React Native"
image: "/assets/img/cover.png"
---

Primeiramente vamos ver a diferença entre os tipos de navegação:

- <a href="https://reactnavigation.org/docs/stack-navigator/" target="_blank" rel="noopener noreferrer">StackNavigator</a>: assim como o próprio nome diz, o StackNavigator irá empilhar as telas conforme elas são acessadas, ou seja, telas mais antigas ficarão abaixo e a tela mais recente no topo.

- <a href="https://reactnavigation.org/docs/getting-started/" target="_blank" rel="noopener noreferrer">TabNavigator</a>: já com o TabNavigator, a navegação é pelas guias(tabs), ou menu de opções, que fica na parte superior ou inferior da tela.

- <a href="https://reactnavigation.org/docs/getting-started/" target="_blank" rel="noopener noreferrer">DrawerNavigator</a>: a navegação se da por slide, ou seja, ao arrastar a tela, um menu lateral será exibido contendo as opções para navegação.

Agora que você já sabe a diferença entre eles, vamos colocar a mão na massa e juntar as três formas?

Vamos inicializar um projeto :

```bash
    npx create-react-native-app navigation-example
```

Selecione a opção "Default new app", e depois de criado, acesse a pasta do projeto

Segindo a documentação, vamos adicionar as dependências(utilizando o npm ou yarn, fica à sua escolha):

```bash
npm install @react-navigation/native
ou
yarn add @react-navigation/native
```

Depois:

```bash
npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

ou

yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
```

Por fim adicione:

``` bash
npm install @react-navigation/stack ou yarn add @react-navigation/stack
e
npm install @react-navigation/bottom-tabs ou yarn add @react-navigation/bottom-tabs
e
npm install @react-navigation/drawer ou yarn add @react-navigation/drawer
```


Feito isso, abra a pasta do projeto no editor de texto que mais lhe agrada, no meu caso eu utilizo o VSCode.

Crie a pasta src na raiz do projeto e exclua o App.js da raiz

Dentro da pasta src, adicione as pastas pages e routes e o App.js

Feito isso, vamos criar a estrutura dentro do src:

```bash
src
- pages
  - Home/index.js
  - Info/index.js
  - TabA/index.js
  - TabB/index.js
  - TabC/index.js
- routes
  - drawer.routes.js
  - stack.routes.js
  - tabs.routes.js
- App.js
```


Segue abaixo como ficarão os arquivos:

App.js

``` javascript
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes/drawer.routes';

const App = () => {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  )
}

export default App
```

No App.js fica o NavigationContainer que dará a sustentação de navegação para as páginas, no caso aqui eu deixei a drawer como principal, você pode deixar qualquer um dos três como principal


Home/index.js

``` javascript
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
        <Text>Home </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Tabs')}>
            <Text>Tabs</Text>
        </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
   flex: 1,
  },
});

export default Home
```

Na home eu estou utilizando a propriedade <a href="https://reactnavigation.org/docs/navigation-prop/" target="_blank" rel="noopener noreferrer">navigation</a> fornecida pela Screen para navegar para a tela de tabs


Info/index.js

``` javascript
import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Info = () => {
  return (<><Text style={styles.container}>Info </Text></>)
}
const styles = StyleSheet.create({
  container: {
   flex: 1,
  },
});

export default Info
```

TabA/index.js TabB/index.js e TabC/index.js

``` javascript
import React from 'react';
import { StyleSheet, Text } from 'react-native';

const TabA = () => {
  return (<><Text style={styles.container}>TabA </Text></>)
}
const styles = StyleSheet.create({
  container: {
   flex: 1,
   alignItems:"center",
   justifyContent:"center"
  },
});

export default TabA
```

No caso aqui eu só troquei o nomes: TabA, TabB e TabC para diferenciar as tabs

drawer.routes.js

``` javascript
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import Info from '../pages/Info';
import StackScreen from './stack.routes';

const Drawer = createDrawerNavigator();

const Routes = () => {
  return (
    <Drawer.Navigator headerMode="none" initialRouteName="StackScreen">
      <Drawer.Screen name="StackScreen" component={StackScreen} />
      <Drawer.Screen name="Info" component={Info} />
    </Drawer.Navigator>
  )
}

export default Routes
```

Na drawer eu estou puxando as rotas da StackScreen e a página de Informações, e estou sinalizando que a rota inicial será a da StackScreen

stack.routes.js

``` javascript
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from '../pages/Home';
import TabScreen from './tabs.routes';

const Stack = createStackNavigator()

const StackScreen = () => {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Tabs" component={TabScreen} />
    </Stack.Navigator>
  )
}

export default StackScreen
```

Na página da StackScreen eu tenho minha página de Home e as rotas da TabScreen


tabs.routes.js

``` javascript
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import TabA from '../pages/TabA';
import TabB from '../pages/TabB';
import TabC from '../pages/TabC';

const Tab = createBottomTabNavigator();

const TabScreen = () => (
    <Tab.Navigator headerMode="none" initialRouteName="TabA">
        <Tab.Screen name="TabA" component={TabA} options={{
            tabBarLabel: "TabA"
        }}/>
        <Tab.Screen name="TabB" component={TabB} options={{
            tabBarLabel: "TabB"
        }}/>
        <Tab.Screen name="TabC" component={TabC} options={{
            tabBarLabel: "TabC"
        }}/>
    </Tab.Navigator>
)

export default TabScreen
```

No final teremos a navegação:

```bash
Drawer
- StackScreen
  - Home
  - Tabs
    - TabA
    - TabB
    -TabC
- Info
```


E a ordem sempre será a mesma:

Um NavigationContainer contendo uma Navigator(Drawer, Stack, Tab) e este Navigator contendo as Screen(Drawer, Stack, Tab) que podem renderizar outras telas ou rotas.

O que achou? :3

Link para o projeto no GitHub: <a href="https://github.com/ValchanOficial/NavigationExample" target="_blank" rel="noopener noreferrer">NavigationExample</a>


- <a href="https://reactnavigation.org/docs/getting-started/" target="_blank" rel="noopener noreferrer">React Navigation</a>
