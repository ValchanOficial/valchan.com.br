---
date: 2019-10-14
title: "Enviando email com Golang"
description: "A piece of cake: Enviando e-mail SMTP com Golang."
category: "golang"
---

<p class="alinhar"><img src="../assets/images/octocat.gif" alt="Octocat" title="Octocat" width="100" height="100"></p>

Enviando email via SMTP do Google com Golang(GO)

**Necessário ter instalado:**
- <a href="https://golang.org/" target="_blank" rel="nofollow, noreferrer,noopener,external">Go</a>

**Baixe o projeto:**
1. <a href="https://github.com/ValchanOficial/SendEmailWithGO/archive/master.zip" target="_blank" rel="nofollow, noreferrer,noopener,external">Projeto</a> e descompacte;
2. Necessário ter uma conta gmail para testar a aplicação(se você não tiver, <a href="https://shorturl.at/bfiQ3" target="_blank" rel="nofollow, noreferrer,noopener,external">crie</a> uma para testar);
3. Depois adicione os dados no código execute o comando **go run send_email.go** para executar a aplicação.

**Código:**

```
package main

import (
	"crypto/tls"
	"fmt"
	"log"
	"net/smtp"
	"strings"
)

func main() {
	sendMail("...@gmail.com", []string{"bar@foo.com", "foo@bar.com"}, "Hello World")
	fmt.Println("Email successfully sent!")
}

func checkErr(err error) {
	if err != nil {
		log.Panic("ERROR: " + err.Error())
	}
}

func sendMail(from string, to []string, body string) {
	//configuração
	servername := "smtp.gmail.com:465"                  //servidor SMTP e PORTA
	host := "smtp.gmail.com"                            //host
	pass := "UmaCalopsitaEsteveAqui"                    //senha
	auth := smtp.PlainAuth("Valchan", from, pass, host) //autenticação
	tlsConfig := &tls.Config{
		InsecureSkipVerify: true,
		ServerName:         host,
	}
	toHeader := strings.Join(to, ",")
	msg := "From: " + from + "\n" + "To: " + toHeader + "\n" + "Subject: Hello World\n\n" + body

	//conecta com o servidor SMTP
	conn, err := tls.Dial("tcp", servername, tlsConfig)
	checkErr(err)

	//retorna client SMTP
	c, err := smtp.NewClient(conn, host)
	checkErr(err)

	//autentica
	err = c.Auth(auth)
	checkErr(err)

	//adiciona remetente
	err = c.Mail(from)
	checkErr(err)

	//adiciona destinatários
	for _, addr := range to {
		err = c.Rcpt(addr)
		checkErr(err)
	}

	//prepara corpo do email
	w, err := c.Data()
	checkErr(err)

	//adiciona corpo do e-mail
	_, err = w.Write([]byte(msg))
	checkErr(err)

	//fecha corpo do e-mail
	err = w.Close()
	checkErr(err)

	//encerra conexão
	c.Quit()
}
```

**Link para o código: <a href="https://github.com/ValchanOficial/SendEmailWithGO/blob/master/send_email.go" target="_blank" rel="nofollow, noreferrer,noopener,external">Github</a>**
