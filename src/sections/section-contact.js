import React from "react"

import BackgroundCubes from "../components/BackgroundCubes"
import Newsletter from "../components/Newsletter"
import Section from "../components/Section"
import SocialLinks from "../components/SocialLinks"

import { RestingBird } from "../components/SVG"

import * as S from "./style"

export default function SectionContact() {
  return (
    <Section id="contact" name="Home" bg="--background-light">
      <S.ContactWrapper>
        <BackgroundCubes />
        <S.ContactTitle>
          <S.Title>Contato</S.Title>
          <SocialLinks />
          <Newsletter />
        </S.ContactTitle>
        <RestingBird />
        {<S.Paragraph>VALCHAN • {new Date().getFullYear()}</S.Paragraph>}
      </S.ContactWrapper>
    </Section>
  )
}
