---
date: 2019-10-14
title: "Lendo arquivo CSV com Golang"
description: "Utilizando o Golang para ler arquivos CSV."
category: "golang"
---

<p class="alinhar"><img src="../assets/images/octocat.gif" alt="Octocat" title="Octocat" width="100" height="100"></p>

Lendo arquivo CSV com Golang

**Necessário ter instalado:**
- <a href="https://golang.org/" target="_blank" rel="nofollow, noreferrer,noopener,external">Go</a>

**Baixe o projeto:**
1. <a href="https://github.com/ValchanOficial/GoCSV/archive/master.zip" target="_blank" rel="nofollow, noreferrer,noopener,external">Projeto</a> e descompacte;
2. Depois execute o comando **go run read_csv.go** para executar a aplicação.

**Código:**

```
package main

import (
	"bufio"
	"encoding/csv"
	"fmt"
	"io"
	"log"
	"strings"
)

// CSV : csv
type CSV struct { //estrutura que receberá os dados do CSV
	Name     string `json:"name"`
	Nickname string `json:"nickname"`
	Text     string `json:"text"`
}

func checkErr(err error) { //checa erros
	if err != nil {
		log.Panic("ERROR: " + err.Error())
	}
}

func main() {
	//sem arquivo
	var csvFile = strings.NewReader(`name;nickname;text
	Valéria;Valchan;has been here!`)

	// com arquivo
	//csvFile, err := os.Open("test.csv") //abre arquivo
	//checkErr(err)

	reader := csv.NewReader(bufio.NewReader(csvFile)) //lê arquivo
	reader.Comma = ';'                                //define delimitador

	var person []CSV

	for {
		line, err := reader.Read() //para cada linha
		if err == io.EOF {
			break
		} else if err != nil {
			checkErr(err)
		}
		person = append(person, CSV{ //adiciona uma pessoa
			Name:     line[0],
			Nickname: line[1],
			Text:     line[2],
		})
	}

	// personJSON, err := json.Marshal(person) //converte para JSON
	// checkErr(err)
	// fmt.Println(string(personJSON)) //exibe dados do csv
	// //[{"name":"name","nickname":"nickname","text":"text"},{"name":"Valéria","nickname":"Valchan","text":"has been here!"}]

	fmt.Println(person[1].Nickname + " " + person[1].Text) //exibe dados do csv
	// Valchan has been here!
}
```

**Link para o código: <a href="https://github.com/ValchanOficial/GoCSV/blob/master/read_csv.go" target="_blank" rel="nofollow, noreferrer,noopener,external">Github</a>**
