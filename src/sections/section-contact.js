import React from "react"

import Section from "../components/Section"
import { RestingBird } from "../components/SVG"

import SocialLinks from "../components/SocialLinks"
import * as S from "./style"

export default function SectionContact() {
  return (
    <Section id="contact" name="Home" bg="--background-light">
      <S.ContactWrapper>
        <S.ContactTitle>
          <S.Title>Contato</S.Title>
          <SocialLinks />
        </S.ContactTitle>
        {/* Me siga nas redes sociais */}
        <RestingBird />
        {<S.Paragraph>VALCHAN {new Date().getFullYear()}</S.Paragraph>}
      </S.ContactWrapper>
    </Section>
  )
}
