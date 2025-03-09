---
date: 2020-11-28
title: "YouTube thumbnail"
description: "Como obter a miniatura do vídeo do Youtube?"
category: "Javascript"
image: '/assets/img/cover/cover2.png'
---

Eu estava vendo essa <a href="https://stackoverflow.com/a/20542029" target="_blank" rel="noopener noreferrer">pergunta</a> feita no StackOverflow de como obter a miniatura usado PHP, mas eu não fiz com PHP e sim com Javascript, e utilizando também a função de <a href="/how-to-get-word-between-two-characters/">getWordBetweenTwoCharacters()</a> que eu havia criado anteriormente.

Segue abaixo o código:

``` javascript
const url = 'https://www.youtube.com/watch?v=FnazXYWlyr8'

const getWordBetweenTwoCharacters = (text, start, end) => text.split(start).pop().split(end)[0].trim()

const getThumbnailUrlFromYoutubeUrl = (thumbnailUrl) => {
  if(!thumbnailUrl) return ''
  const videoId = getWordBetweenTwoCharacters(thumbnailUrl, '?v=', '&')
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
}

console.log(getThumbnailUrlFromYoutubeUrl(url)) 
// "https://img.youtube.com/vi/FnazXYWlyr8/hqdefault.jpg"
```

É possível adicionar mais melhorias nesta função, como por exemplo, ser passado o tamanho que a pessoa quer a imagem.

Obs.: Algumas miniaturas podem ou não existir, provavelmente dependendo da qualidade do vídeo!

Segue a tabela abaixo de variações:


<table>
  <tr>
    <th>Largura (Width)</th>
    <th>Altura (Height)</th>
    <th>URL</th>
  </tr>
  <tr>
    <td>120</td>
    <td>90</td>
    <td>https://i.ytimg.com/vi/{videoId}/1.jpg</td>
  </tr>
  <tr>
    <td>120</td>
    <td>90</td>
    <td>https://i.ytimg.com/vi/{videoId}/2.jpg</td>
  </tr>
  <tr>
    <td>120</td>
    <td>90</td>
    <td>https://i.ytimg.com/vi/{videoId}/3.jpg</td>
  </tr>
  <tr>
    <td>120</td>
    <td>90</td>
    <td>https://i.ytimg.com/vi/{videoId}/default.jpg</td>
  </tr>
  <tr>
    <td>320</td>
    <td>180</td>
    <td>https://i.ytimg.com/vi/{videoId}/mq1.jpg</td>
  </tr>
  <tr>
    <td>320</td>
    <td>180</td>
    <td>https://i.ytimg.com/vi/{videoId}/mq2.jpg</td>
  </tr>
  <tr>
    <td>320</td>
    <td>180</td>
    <td>https://i.ytimg.com/vi/{videoId}/mq3.jpg</td>
  </tr>
  <tr>
    <td>320</td>
    <td>180</td>
    <td>https://i.ytimg.com/vi/{videoId}/mqdefault.jpg</td>
  </tr>
  <tr>
    <td>480</td>
    <td>360</td>
    <td>https://i.ytimg.com/vi/{videoId}/0.jpg</td>
  </tr>
  <tr>
    <td>480</td>
    <td>360</td>
    <td>https://i.ytimg.com/vi/{videoId}/hq1.jpg</td>
  </tr>
  <tr>
    <td>480</td>
    <td>360</td>
    <td>https://i.ytimg.com/vi/{videoId}/hq2.jpg</td>
  </tr>
  <tr>
    <td>480</td>
    <td>360</td>
    <td>https://i.ytimg.com/vi/{videoId}/hq3.jpg</td>
  </tr>
  <tr>
    <td>480</td>
    <td>360</td>
    <td>https://i.ytimg.com/vi/{videoId}/hqdefault.jpg</td>
  </tr>
  <tr>
    <td>640</td>
    <td>480</td>
    <td>https://i.ytimg.com/vi/{videoId}/sd1.jpg</td>
  </tr>
  <tr>
    <td>640</td>
    <td>480</td>
    <td>https://i.ytimg.com/vi/{videoId}/sd2.jpg</td>
  </tr>
  <tr>
    <td>640</td>
    <td>480</td>
    <td>https://i.ytimg.com/vi/{videoId}/sd3.jpg</td>
  </tr>
  <tr>
    <td>640</td>
    <td>480</td>
    <td>https://i.ytimg.com/vi/{videoId}/sddefault.jpg</td>
  </tr>
  <tr>
    <td>1280</td>
    <td>720</td>
    <td>https://i.ytimg.com/vi/{videoId}/hq720.jpg</td>
  </tr>
  <tr>
    <td>1920</td>
    <td>1080</td>
    <td>https://i.ytimg.com/vi/{videoId}/maxresdefault.jpg</td>
  </tr>
</table>

