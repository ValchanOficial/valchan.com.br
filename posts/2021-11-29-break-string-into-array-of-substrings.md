---
date: 2021-11-29
title: "Quebrando string em substrings"
description: "Como criar um array de textos a partir de um texto maior"
category: "Javascript"
image: "/assets/img/cover.png"
---

```javascript
const value =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis turpis eget odio eleifend tincidunt aliquam eu est. Mauris tincidunt nulla ac urna iaculis, ac luctus ipsum pharetra. Donec a elementum justo. Duis fringilla urna dui. Donec volutpat mollis nunc, vitae laoreet arcu dapibus et. In placerat vel lacus id efficitur. Morbi ultricies velit a sapien tristique pulvinar. Cras imperdiet ex ac sagittis lacinia. Aliquam fringilla sollicitudin nisl, ac lacinia lorem rutrum eu. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In a fermentum velit, ac laoreet ipsum. Cras a placerat magna, eget scelerisque tellus. Duis vitae sagittis nulla. Morbi fermentum est at dui facilisis luctus. Sed cursus eleifend velit, quis mattis nisi egestas et. Sed pellentesque dignissim arcu, nec euismod mauris tincidunt at. Morbi mollis ut leo at semper. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Mauris venenatis, sapien sodales dictum placerat, nulla risus fringilla lectus, sed tincidunt sem orci eget velit. Aliquam dignissim diam eros, at ullamcorper lacus pretium lobortis. Nunc ut turpis vel ipsum imperdiet ultricies hendrerit ac urna. Etiam at sapien in mauris eleifend varius. Phasellus volutpat commodo arcu, nec egestas mauris. Etiam ac mattis velit. Nulla eget purus sit amet urna vehicula ornare eget in eros. Aenean ornare vel eros consequat dapibus. Sed porta dui ipsum, et aliquam justo ullamcorper et. Donec porta urna sit amet consectetur sodales. Sed fringilla erat nec nisl congue, in vehicula sapien semper. Proin et faucibus justo. Phasellus eu risus tristique, dictum erat et, congue est. Fusce quis tempor lectus. Donec non aliquam tortor. Phasellus turpis magna, porttitor dignissim nibh venenatis, blandit hendrerit odio. 123459696966969"

const charactersPerLine = 80

const breakStringIntoArrayOfSubstrings = (txt, characters) => {
  let text = txt
  const length = Math.ceil(txt.length / characters)
  return Array.from({ length }).map(() => {
    const value = text.substr(0, characters)
    text = text.slice(characters, text.length)
    return value.trim()
  })
}

const final = breakStringIntoArrayOfSubstrings(value, charactersPerLine)

console.log(final.length) // 25
console.log(final.at(0)) // Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis turpis eget
console.log(final.at(-1)) //  porttitor dignissim nibh venenatis, blandit hendrerit odio. 123459696966969
```
