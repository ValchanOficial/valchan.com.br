import React from "react"

import Section from "../components/Section"
import ShinyText from "../components/ShinyText"

import { Rocket, Stars } from "../components/SVG"

import * as S from "./style"

export default function SectionQuote() {
  return (
    <Section name="Home" bg="--background-dark">
      <S.QuoteContainer>
        <Stars />
        <S.Quote>
          <ShinyText>
            “I'm passionate about creating real change and working on projects
            that make a difference in the world!”
          </ShinyText>
        </S.Quote>
        <Rocket />
      </S.QuoteContainer>
    </Section>
  )
}
