---
date: 2021-04-13
title: "Vamos ligar as pontos com o Linking 😉"
description: "Enviando mensagens para o What'sApp, E-mail, SMS e abrindo links externos com o Linking do React Native"
category: "React Native"
image: "/assets/img/cover.png"
---

Utilizando o <a href="https://reactnative.dev/docs/linking" target="_blank" rel="noopener noreferrer">Linking</a>, tudo fica mais simples, só utilizar a função ``Linking.openURL()`` passando as informações e corpo das mensagens. Como você pode ver no exemplo abaixo, no ``onPress()`` eu chamo as minhas funções, cada uma passando as informações necessárias.

``` javascript
import React, { useCallback } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Linking } from 'react-native';

export default function App() {
  const whatsappExample = "555101234567" // país+cidade+numero
  const emailExample = "example@example.com" // país+cidade+numero
  const subject = 'Email Example' // assunto do e-mail
  const text = 'example' // corpo do e-mail e whatsapp
  const externalLink = "https://reactnative.dev/docs/getting-started" // deve conter o prefixo http ou https

  const openWhatsapp = useCallback(() => {
    Linking.openURL(`whatsapp://send?phone=${whatsappExample}&text=${text}`);
  }, [])

  const openEmail = useCallback(() => {
    Linking.openURL(`mailto:${emailExample}?subject=${subject}&body=${text}`)
  }, [])

  const openSMS = useCallback(() => {
    Linking.openURL(`sms:${whatsappExample}`)
  }, [])

  const openExternalLink = useCallback(() => {
    Linking.openURL(`${externalLink}`)
  }, [])

  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.button} onPress={openWhatsapp}>
        <Text style={styles.paragraph}>Abrir Whatsapp</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={openEmail}>
        <Text style={styles.paragraph}>Abrir Email</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={openSMS}>
        <Text style={styles.paragraph}>Abrir SMS</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={openExternalLink}>
        <Text style={styles.paragraph}>Abrir Link Externo</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: '#F1C4CB',
  },
  button: {
    justifyContent: 'center',
    alignItems: "center",
    backgroundColor: '#FA607A',
    width: 200,
    height: 50,
    borderRadius: 8,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16
  },
});
```

Exemplo no Snack Expo: <a href="https://snack.expo.io/@valchanoficial/example-with-linking" target="_blank" rel="noopener noreferrer">Link</a> 

- <a href="https://reactnative.dev/docs/linking" target="_blank" rel="noopener noreferrer">Linking</a>
