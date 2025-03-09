---
date: 2021-04-08
title: "[Resolvido] React Native e erros"
description: "Um lista de alguns erros que ocorrem durante o desenvolvendo em React Native e como resolver"
category: "React Native"
image: "/assets/img/cover/cover2.png"
---

As soluções que estão aqui são as que funcionaram comigo, podem ou não serem úteis, mas eu espero que alguma seja útil :)


- Error: xcrun: error: SDK “iphoneos” cannot be located</br>
Solução: 
``` bash
$ sudo xcode-select --switch /Applications/Xcode.app
```

- Error: EMFILE: too many open files, watch</br>
Solução: 
``` bash
$ brew update
$ brew install watchman
```

- Error: Duplicate output file</br>
Solução: 
``` bash
$ npx react-native link
$ npx react-native unlink react-native-vector-icons
```
info: Na versão 0.60+ do React Native ele tem o Autolinking e ao realizar o link, algumas dependências podem ficar duplicadas, que é o caso do react-native-vector-icons


- Error: ``IPHONEOS_DEPLOYMENT_TARGET`` is set to 8.0, but the range of supported deployment target versions is 9.0 to 14.0.99</br>
Solução: </br>
No arquivo Podfile você pode:</br>
1 - Setar o valor do ``IPHONEOS_DEPLOYMENT_TARGET`` com uma versão compatível(9.0 a 14.0.99)</br>
2 - Ou você pode remover o ``IPHONEOS_DEPLOYMENT_TARGET``</br>
3 - Você também pode verificar e alterar a versão do platform :ios</br>

```
1: 
post_install do |installer|
 installer.pods_project.targets.each do |target|
  target.build_configurations.each do |config|
   config.build_settings['IPHONEOS_DEPLOYMENT_TARGET'] = '9.0'
  end
 end
end
```
```
2: 
post_install do |installer|
 installer.pods_project.targets.each do |target|
  target.build_configurations.each do |config|
   config.build_settings.delete 'IPHONEOS_DEPLOYMENT_TARGET'
  end
 end
end
```
``` 
3:
platform :ios, '9.0'
```

- Error: Exception in thread “main” java.util.zip.ZipException: zip END header not found</br>
Solução:</br>
1 - Vá até o diretório dists: C:\Users\USERNAME\\.gradle\wrapper\dists</br>
2 - Delete as pastas do gradle</br>
3 - Tente novamente: npx react-native run-android</br>

