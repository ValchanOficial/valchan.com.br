import React from "react"

import Avatar from "../components/Avatar"
import Section from "../components/Section"
import { FlyingBird } from "../components/SVG"

import Button from "../components/Button"
import CircularText from "../components/CircularText"
import * as S from "./style"

export default function SectionAbout() {
  const onClickDownloadCV = async () => {
    const pdfPath = require("../../static/assets/pdf/cv.pdf")
    window.open(pdfPath.default, "_blank")
  }

  return (
    <Section id="about" name="Home" bg="--background-light">
      <S.AboutContainer>
        <S.Article>
          <S.Title>
            Uma desenvolvedora apaixonada por tecnologia que está sempre em
            busca de conhecimento.
          </S.Title>
          <S.Paragraph>
            Sou uma profissional com mais de seis anos de experiência em
            desenvolvimento full-stack, utilizo tecnologias em torno do
            JavaScript, como NodeJS, NestJS, NextJS, ReactJS, entre outras, com
            uma carreira desenvolvida em empresas relevantes na área de
            tecnologia. <br></br>
            <br></br>
            Graduada em Análise e Desenvolvimento de Sistemas pela UNICESUMAR,
            Pós-Graduada em Desenvolvimento Fullstack pela PUCRS, atualmente me
            especializando com o MBA em Arquitetura Full Cycle pela FCTECH e a
            Pós-graduação Tech Developer 360º na Rocktseat, sou criativa,
            determinada, contribuindo para a solução de problemas e buscando
            sempre compartilhar conhecimento.
          </S.Paragraph>
        </S.Article>
        <S.Container>
          <FlyingBird />
          <Avatar />
          <CircularText>progress over perfection •&nbsp;</CircularText>
          <Button onClick={onClickDownloadCV} style={{ marginTop: "4rem" }}>
            CV
          </Button>
        </S.Container>
      </S.AboutContainer>
    </Section>
  )
}
