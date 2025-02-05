import React from "react"

import Section from "../components/Section"
import { Crown, WaitingBird } from "../components/SVG"

import * as S from "./style"

export default function SectionRecommendations() {
  const recommendations = [
    {
      name: "Erik Henrique",
      role: "Tech Manager",
      text: `Tive o prazer de trabalhar com a Val por quase um ano, é uma profissional muito dedicada e excepcional! Possui uma extensa bagagem em tecnologia, voltada para resolução de problemas e busca se aprofundar ao máximo em todas as frentes da equipe.
Seu olhar para pessoas faz com que ela crie laços importantes dentro do time, procura se desafiar sempre em competências de soft e hard skill. Como exemplos foi a responsável por trazer uma conversa no time sobre diversidade, abordando o tema com leveza e orientado o time e atuou no desenvolvimento do projeto buscando entregar com qualidade e procurando entender todos os requisitos. 
São alguns pequenos exemplos de uma participação grandiosa.`,
    },
    {
      name: "Gabriel Elias Salla",
      role: "Senior Software Engineer",
      text: `Tive o prazer de trabalhar com a Val no projeto de venda interativa do Boticário. Sua expertise em backend e habilidades na definição de soluções técnicas foram essenciais para o sucesso do projeto. Val é uma profissional dedicada, inovadora e altamente capacitada. Sem dúvida, uma valiosa adição a qualquer equipe.`,
    },
  ]

  return (
    <Section name="Home" bg="--background-dark">
      <Crown />
      <S.RecommendationsContainer>
        <S.Title style={{ color: "var(--main)" }}>Recomendações</S.Title>
        <S.RecommendationsWrapper>
          {recommendations.map((recommendation, index) => (
            <S.Recommendation key={index}>
              <h3>{recommendation.name}</h3>
              <span>{recommendation.role}</span>
              <p>{recommendation.text}</p>
            </S.Recommendation>
          ))}
        </S.RecommendationsWrapper>
      </S.RecommendationsContainer>
      <WaitingBird />
    </Section>
  )
}
