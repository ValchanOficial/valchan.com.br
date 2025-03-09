---
date: 2021-12-31
title: "Utilizando o Google Tag Manager(GTM)"
description: "Como fazer a integração do GTM?"
category: "ReactJS"
image: "/assets/img/cover/cover2.png"
---

Há várias formas de fazer a integração do gtm, vejamos algumas abaixo:

- Script do Google
```html
<!-- Dentro da tag head -->
<script>
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-EXAMPLE');
</script>

<!-- Dentro da tag body -->
<noscript>
    <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-EXAMPLE"
        height="0" width="0" style="display:none;visibility:hidden"
    ></iframe>
</noscript>
```

- Utilizando o dangerouslySetInnerHTML
```javascript
// Dentro da tag head
<script
    dangerouslySetInnerHTML={{
        __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM-EXAMPLE}');`
    }}
/>
// Dentro da tag body
<noscript>
    <iframe
      src={`https://www.googletagmanager.com/ns.html?id=${GTM-EXAMPLE}`}
      height="0" width="0" style={{display:'none', visibility:'hidden'}}
    />
</noscript>
```

- Utilizando a lib react-ga
```javascript
/*
    npm install react-ga --save
    ou
    yarn add react-ga
*/
import ReactGA from 'react-ga';

const exampleGTM = 'GTM-EXAMPLE';

export default class MyApp extends App {
    componentDidMount() {
        ReactGA.initialize(exampleGTM);
        ReactGA.pageview(window.location.pathname + window.location.search);
    }
    render() {
        const { pageProps } = this.props;
        return <Component {...pageProps}/>;
    }
}
// ou utilizando useEffect
import { useEffect } from 'react';
import ReactGA from 'react-ga';

const exampleGTM = 'GTM-EXAMPLE';

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        ReactGA.initialize(exampleGTM);
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);
    return <Component {...pageProps}/>
}
export default MyApp;
```

- Utilizando a lib react-gtm-module
```javascript
/*
    npm install react-gtm-module --save
    ou
    yarn add react-gtm-module
*/
import TagManager from 'react-gtm-module';

const exampleGTM = 'GTM-EXAMPLE';

export default class MyApp extends App {
    componentDidMount() {
        TagManager.initialize({ gtmId: exampleGTM });
    }
    render() {
        const { pageProps } = this.props;
        return <Component {...pageProps}/>;
    }
}
// ou utilizando useEffect
import { useEffect } from 'react';
import TagManager from 'react-gtm-module';

const exampleGTM = 'GTM-EXAMPLE';

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        TagManager.initialize({ gtmId: exampleGTM });
    }, []);
    return <Component {...pageProps}/>
}
export default MyApp;
```

- <a href="https://github.com/alinemorelli/react-gtm" target="_blank" rel="noopener noreferrer">react-gtm-module</a>

- <a href="https://github.com/react-ga/react-ga" target="_blank" rel="noopener noreferrer">react-ga</a>
