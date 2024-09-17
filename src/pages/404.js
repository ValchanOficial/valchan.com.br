import React from "react"

import Main from "../components/Main"
import Head from "../components/seo"
import NotFoundSVG from "../components/SVG/404.svg"

const NotFoundPage = () => (
  <Main>
    <Head
      title="404: Not found"
      description="Página não encontrada | Page not found"
    />
    <div className="notFound">
      <h1>Page Not Found!</h1>
      <img
        className="notFound__img"
        src={NotFoundSVG}
        alt="404 Error - Página não encontrada - Not Found Cat"
      />
    </div>
  </Main>
)

export default NotFoundPage
