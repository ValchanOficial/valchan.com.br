import React, { useState } from "react"
import Form from "../Form"

import * as S from "./style"

const messages = {
  success: "Prontinho! 😊",
  error:
    "Ops! Parece que houve algum erro... Por favor, tente novamente mais tarde",
}

const Newsletter = () => {
  const [result, setResult] = useState("")
  const [sending, setSending] = useState(false)

  return (
    <S.Container>
      <S.Text>Acompanhe as novidades mensalmente:</S.Text>
      <Form setResult={setResult} setSending={setSending} />
      {result && !sending && <S.Message>{messages[result]}</S.Message>}
    </S.Container>
  )
}

export default Newsletter
