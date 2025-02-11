import React from "react"

import { Parallax } from "react-scroll-parallax"

import Section from "../components/Section"
import ShinyText from "../components/ShinyText"

import { Rocket, Stars } from "../components/SVG"

import BackgroundSparklesStars from "../components/BackgroundSparklesStars"
import * as S from "./style"

export default function SectionQuote() {
  return (
    <Section name="Home" bg="--background-dark">
      <BackgroundSparklesStars />
      <S.QuoteContainer>
        <Parallax
          style={{
            alignSelf: "flex-start",
          }}
          translateY={[0, -20]}
        >
          <Stars />
        </Parallax>
        <S.Quote>
          <ShinyText>
            “I'm passionate about creating real change and working on projects
            that make a difference in the world!”
          </ShinyText>
        </S.Quote>
        <Parallax
          style={{
            alignSelf: "flex-end",
          }}
          translateY={[50, -50]}
        >
          <Rocket />
        </Parallax>
      </S.QuoteContainer>
    </Section>
  )
}
