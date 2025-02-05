import React from "react"

import Section from "../components/Section"
import { Flower } from "../components/SVG"

export default function SectionProjects() {
  const someProjects = [
    {
      name: "São João Farmacias",
      image: "",
    },
    {
      name: "Kinto",
      image: "",
    },
    {
      name: "Eyxo",
      image: "",
    },
    {
      name: "CICV Cobertura Humanitária Website e CMS",
      image: "",
    },
  ]

  return (
    <Section id="#about" name="Home" bg="--background-dark">
      <Flower />
      Projetos
    </Section>
  )
}
