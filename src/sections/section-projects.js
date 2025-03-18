import React from "react"

import { Flower } from "../components/SVG"
import Section from "../components/Section"
import Slider from "../components/Slider"

import * as S from "./style"

export default function SectionProjects() {
  const someProjects = [
    {
      name: "KINTO Mobility",
      image: "/assets/img/projects/kinto-mobility.png",
    },
    {
      name: "Eyxo",
      image: "/assets/img/projects/eyxo.png",
    },
    {
      name: "CICV Cobertura Humanitária",
      image: "/assets/img/projects/cobertura-humanitaria.png",
    },
    {
      name: "PUCRS - Pós Graduação em Desenvolvimento Full Stack: TCC",
      image: "/assets/img/projects/pucrs-tcc.png",
    },
    {
      name: "Facebook Developer Circles + Platzi: Brasileirão 2019",
      image: "/assets/img/projects/platzi.png",
    },
    {
      name: "Órbi Web Games Developer: Space Shooter",
      image: "/assets/img/projects/space-shooter.png",
    },
    {
      name: "Next Level Week eSports",
      image: "/assets/img/projects/nlw-esports.png",
    },
  ]

  return (
    <Section id="projects" name="Home" bg="--background-dark-light">
      <S.ProjectsContainer>
        <S.Content>
          <Flower />
          <S.Title
            style={{
              color: "var(--main)",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            Projetos
          </S.Title>
        </S.Content>
        <Slider slides={someProjects} />
      </S.ProjectsContainer>
    </Section>
  )
}
