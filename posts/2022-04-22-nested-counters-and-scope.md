---
date: 2022-04-22
title: "HTML + CSS: Contadores e escopo aninhados"
description: "Como criar uma lista com tópicos e subtópicos"
category: "CSS"
image: "/assets/img/cover.png"
---

```html
<ol>
  <li>one</li>
  <li>
    two
    <ol>
      <li>two.one</li>
      <li>two.two</li>
      <li>two.three</li>
    </ol>
  </li>
  <li>
    three
    <ol>
      <li>three.one</li>
      <li>
        three.two
        <ol>
          <li>three.two.one</li>
          <li>three.two.two</li>
        </ol>
      </li>
    </ol>
  </li>
  <li>four</li>
</ol>
```

```css
ol {
  counter-reset: item;
}
li {
  display: block;
}
li:before {
  content: counters(item, ".") " ";
  counter-increment: item;
}
```

<iframe src="https://codesandbox.io/embed/html-list-nested-counters-and-scope-yukb2t?fontsize=14&hidenavigation=1&theme=dark"
  style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
  title="html list - nested counters and scope"
  allow="camera; geolocation; microphone;"
  sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
></iframe>

- <a href="https://stackoverflow.com/questions/10405945/html-ordered-list-1-1-1-2-nested-counters-and-scope-not-working" target="_blank" rel="noopener noreferrer">Stackoverflow - html ordered list (Nested counters and scope)</a>
- <a href="https://gabrieleromanato.name/css-counters-in-depth" target="_blank" rel="noopener noreferrer">CSS counters in depth</a>
- <a href="https://www.w3schools.com/cssref/pr_gen_counter-increment.asp" target="_blank" rel="noopener noreferrer">CSS counter-increment Property</a>
- <a href="https://www.w3schools.com/cssref/pr_gen_content.asp" target="_blank" rel="noopener noreferrer">CSS content Property</a>
- <a href="https://www.w3schools.com/cssref/pr_gen_counter-reset.asp" target="_blank" rel="noopener noreferrer">CSS counter-reset Property</a>
