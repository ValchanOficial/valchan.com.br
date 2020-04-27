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

```javascript
	const nodemailer = require('nodemailer');
	function sendEmail() {
		return new Promise((resolve, reject) => {
			try {
			// realiza conexão
			const transporter = nodemailer.createTransport({
				host: 'smtp.gmail.com',
				secure: true, // true para 465, false para outras portas
				port: 465,
				auth: { // você deve criar uma conta gmail para autenticar
				user: 'calopsita.mail@gmail.com', // login
				pass: 'umacalopsitaesteveaqui' // senha
				},
				tls: {
					rejectUnauthorized: false
				}
			});

			// envia e-mail
			const info = transporter.sendMail({
				from: '"Calopsita 🐤" <calopsita.mail@gmail.com>', // remetente
				to: ['destinatario@dest.com.br', 'destinatario@dest.com.br'], // destinatários
				subject: 'Calopsita?!', // Assunto
				text: 'Uma calopsita esteve aqui', // Plain text body
				html: '<b>Uma calopsita esteve aqui</b>' // HTML body
			});
				resolve(info); // se tudo ok então
			} catch (error) {
				reject(error); // se der algum erro
			}
		});
	}

	// executando
	sendEmail().then((info) => {
		console.log('Mensagem enviada!');
		console.log(info.envelope);
	}).catch(error => {
		console.log('Erro: ' + error.message);
});
```

Caso tenha interesse em saber mais, segue o link da documentação: <a href="https://nodemailer.com/about/" target="_blank" rel="nofollow, noreferrer,noopener,external">documentação</a>.
