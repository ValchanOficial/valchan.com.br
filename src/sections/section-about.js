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
            A technology-loving developer who constantly seeks knowledge.
          </S.Title>
          <S.Paragraph>
            Professional with over six years of experience in full-stack
            development using technologies around javascript such as NodeJS,
            NestJS, NextJS, ReactJS among others, having a career developed in
            relevant companies in the technology area. <br></br>
            <br></br>
            Graduated in Systems Analysis and Development at UNICESUMAR,
            Post-Graduation in Fullstack Development at PUCRS, currently
            specializing with MBA Full Cycle Architecture at Full Cycle, and
            Post-graduation tech developer 360º at Rocktseat, creative,
            determined, contributing to problem-solving, and always seeking and
            sharing knowledge.
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
