import React from "react"

import Main from "../components/Main"
import Seo from "../components/seo"
import NotFoundSVG from "../components/SVG/404.svg"

const NotFoundPage = () => (
  <Main>
    <div className="notFound">
      <h1>Página não encontrada</h1>
      <img
        className="notFound__img"
        src={NotFoundSVG}
        alt="Ilustração de um gato indicando que a página não foi encontrada"
      />
    </div>
  </Main>
)

export const Head = ({ location }) => (
  <Seo
    title="Página não encontrada"
    description="A página que você procura não existe."
    pathname={location.pathname}
  />
)

export default NotFoundPage
