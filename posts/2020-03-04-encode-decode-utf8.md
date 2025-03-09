---
date: 2020-03-04
title: "Codificação e decodificação UTF8 com Javascript"
description: "Enconding e decoding com Javascript."
category: "javascript"
image: '/assets/img/cover/cover2.png'
---

***1º modo:***

```javascript

  function utf8Decode(utf8String) {
      if (typeof utf8String != 'string') 
      throw new TypeError('parameter ‘utf8String’ is not a string');

      const unicodeString = utf8String
      .replace(/[\u00e0-\u00ef][\u0080-\u00bf][\u0080-\u00bf]/g,(c) => {
        return String.fromCharCode(((c.charCodeAt(0)&0x0f)<<12) 
        | ((c.charCodeAt(1)&0x3f)<<6) 
        | ( c.charCodeAt(2)&0x3f)); })
      .replace(/[\u00c0-\u00df][\u0080-\u00bf]/g, (c) => {
        return String.fromCharCode((c.charCodeAt(0)&0x1f)<<6 
        | c.charCodeAt(1)&0x3f); 
      });
      return unicodeString;
  }

  function utf8Encode(unicodeString) {
      if (typeof unicodeString != 'string') 
      throw new TypeError('parameter ‘unicodeString’ is not a string');

      const utf8String = unicodeString
      .replace(/[\u0080-\u07ff]/g,(c) => {
        let cc = c.charCodeAt(0);
        return String.fromCharCode(0xc0 | cc>>6, 0x80 | cc&0x3f); })
      .replace(/[\u0800-\uffff]/g,(c) => {
        let cc = c.charCodeAt(0);
        return String.fromCharCode(0xe0 | cc>>12, 0x80 | cc>>6&0x3F, 0x80 | cc&0x3f); 
      });
      return utf8String;
  }
```

***2º modo:***

```javascript
const encodeUTF8 = (s) => unescape(encodeURIComponent(s));
const decodeUTF8  = (s) => decodeURIComponent(escape(s));
console.log(encodeUTF8('Açaí')) // "AÃ§aÃ­"
console.log(decodeUTF8("AÃ§aÃ­")) // "Açaí"
```

***Fontes:***

- <a href="http://ecmanaut.blogspot.com/2006/07/encoding-decoding-utf8-in-javascript.html" target="_blank" rel="noopener noreferrer">ecmanaut</a>

- <a href="https://gist.github.com/chrisveness/bcb00eb717e6382c5608" target="_blank" rel="noopener noreferrer">utf8-regex.js</a>
