import React from "react"
import Section from "../components/Section"
import { Butterfly, Developer } from "../components/SVG"

import CircularText from "../components/CircularText"
import * as S from "./style"

export default function SectionExperiences() {
  const experiences = [
    {
      company: "Remessa Online",
      role: "Desenvolvedora de Software Fullstack",
      dateStart: "2025/09/23",
      dateEnd: "",
    },
    {
      company: "Grupo Boticário",
      role: "Desenvolvedora |||",
      dateStart: "2022/06/20",
      dateEnd: "2025/01/07",
    },
    {
      company: "On2",
      role: "Dev Pleno I",
      dateStart: "2021/08/18",
      dateEnd: "2022/06/10",
    },
    {
      company: "On2",
      role: "Desenvolvedora FullStack",
      dateStart: "2020/08/17",
      dateEnd: "2021/05/31",
    },
    {
      company: "CompassoUOL",
      role: "Desenvolvedora",
      dateStart: "2019/07/17",
      dateEnd: "2020/07/30",
    },
  ]

  return (
    <Section id="work" name="Home" bg="--background-light">
      <S.ButterflyWithText>
        <Butterfly />
        <CircularText>Driven by purpose & impact •&nbsp;</CircularText>
      </S.ButterflyWithText>
      <S.ExperiencesContainer>
        <S.Title>Experiências</S.Title>
        {experiences.map((experience, index) => (
          <S.Experience key={index}>
            <S.Paragraph>
              <h3>{experience.company}</h3>
              <p>{experience.role}</p>
              <p>
                {experience.dateStart} - {experience.dateEnd || "Atual"}
              </p>
            </S.Paragraph>
          </S.Experience>
        ))}
      </S.ExperiencesContainer>
      <Developer />
    </Section>
  )
}
