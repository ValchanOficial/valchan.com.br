---
date: 2019-10-01
title: "Node.JS + Nodemailer"
description: "Enviando e-mail SMTP com Node.JS e Nodemailer."
category: "node"
---

<p class="alinhar"><img src="../assets/images/octocat.gif" alt="Octocat" title="Octocat" width="100" height="100"></p>


> Utilizando a dependência <a href="https://nodemailer.com/about/" target="_blank" rel="nofollow, noreferrer,noopener,external">Nodemailer</a> para enviar e-mail

- Para testar crie uma conta gmail e <a href="https://myaccount.google.com/u/5/lesssecureapps" target="_blank" rel="nofollow, noreferrer,noopener,external">permita</a> o acesso

- Baixe o projeto no Github: <a href="https://github.com/ValchanOficial/Nodemailer" target="_blank" rel="nofollow, noreferrer,noopener,external">Nodemailer</a>.

- Após fazer o clone ou baixar o projeto, execute os comandos..
- Instalando as dependências:
```bash
	npm install
```
- Executando:
```bash
	npm run app
```
- Código:

<code>
<br>
const nodemailer = require('nodemailer');<br><br>
function sendEmail() {<br>
&thinsp;return new Promise((resolve, reject) => {<br>
&thinsp;&thinsp;try {<br>
&thinsp;&thinsp;&thinsp;// realiza conexão<br>
&thinsp;&thinsp;&thinsp;const transporter = nodemailer.createTransport({<br>
&thinsp;&thinsp;&thinsp;&thinsp;host: 'smtp.gmail.com',<br>
&thinsp;&thinsp;&thinsp;&thinsp;secure: true, // true para 465, false para outras portas<br>
&thinsp;&thinsp;&thinsp;&thinsp;port: 465,<br>
&thinsp;&thinsp;&thinsp;&thinsp;auth: { // você deve criar uma conta gmail para autenticar<br>
&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;user: 'calopsita.mail@gmail.com', // login<br>
&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;pass: 'umacalopsitaesteveaqui' // senha<br>
&thinsp;&thinsp;&thinsp;&thinsp;},<br>
&thinsp;&thinsp;&thinsp;&thinsp;tls: {<br>
&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;rejectUnauthorized: false<br>
&thinsp;&thinsp;&thinsp;&thinsp;}<br>
&thinsp;&thinsp;&thinsp;});<br>
&thinsp;&thinsp;&thinsp;// envia e-mail<br>
&thinsp;&thinsp;&thinsp;const info = transporter.sendMail({<br>
&thinsp;&thinsp;&thinsp;&thinsp;from: '"Calopsita 🐤" <calopsita.mail@gmail.com>', // remetente<br>
&thinsp;&thinsp;&thinsp;&thinsp;to: ['destinatario@dest.com.br', 'destinatario@dest.com.br'], // destinatários<br>
&thinsp;&thinsp;&thinsp;&thinsp;subject: 'Calopsita?!', // Assunto<br>
&thinsp;&thinsp;&thinsp;&thinsp;text: 'Uma calopsita esteve aqui', // Plain text body<br>
&thinsp;&thinsp;&thinsp;&thinsp;html: '<b>Uma calopsita esteve aqui</b>' // HTML body<br>
&thinsp;&thinsp;&thinsp;});<br>
&thinsp;&thinsp;&thinsp;resolve(info); // se tudo ok então<br>
&thinsp;&thinsp;} catch (error) {<br>
&thinsp;&thinsp;&thinsp;reject(error); // se der algum erro<br>
&thinsp;&thinsp;}<br>
&thinsp;});<br>
}<br>
// executando<br>
sendEmail().then((info) => {<br>
&thinsp;console.log('Mensagem enviada!');<br>
&thinsp;console.log(info.envelope);<br>
}).catch(error => {<br>
&thinsp;console.log('Erro: ' + error.message);<br>
});<br>
</code><br>

Caso tenha interesse em saber mais, segue o link da documentação: <a href="https://nodemailer.com/about/" target="_blank" rel="nofollow, noreferrer,noopener,external">documentação</a>.
