import addToMailChimp from "gatsby-plugin-mailchimp"
import React, { useState } from "react"

import Button from "../Button"
import * as S from "./style"

const Form = ({ setSending, setResult }) => {
  const [values, setValues] = useState({ FNAME: "", email: "" })
  const [disabled, setDisabled] = useState(false)

  const getPathName = () => window.location.pathname
  const subscribe = ({ FNAME, email, pathname = getPathName() }) =>
    addToMailChimp(email, { FNAME, pathname })

  const onSubmit = async e => {
    e.preventDefault()
    if (disabled) return

    setSending(true)
    const { result } = await subscribe(values)
    setResult(result)
    setDisabled(true)
    setSending(false)
  }

  const handleChange = ({ target: { name, value } }) => {
    setValues(oldState => ({
      ...oldState,
      [name]: value,
    }))
  }

  return (
    <S.Container onSubmit={onSubmit} noValidate>
      <S.InputContainer>
        <S.Field>
          <S.Label htmlFor="newsletter-name">Nome</S.Label>
          <S.Input
            id="newsletter-name"
            type="text"
            value={values.FNAME}
            placeholder="Nome"
            name="FNAME"
            autoComplete="name"
            onChange={handleChange}
          />
        </S.Field>
        <S.Field>
          <S.Label htmlFor="newsletter-email">E-mail</S.Label>
          <S.Input
            id="newsletter-email"
            type="email"
            value={values.email}
            placeholder="E-mail"
            name="email"
            autoComplete="email"
            required
            onChange={handleChange}
          />
        </S.Field>
      </S.InputContainer>
      <Button
        type="submit"
        disabled={disabled}
        style={{ width: "100%", fontSize: "1rem" }}
      >
        Inscrever-se
      </Button>
    </S.Container>
  )
}

export default Form
