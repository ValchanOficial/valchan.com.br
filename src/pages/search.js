import React from "react"

import Main from "../components/Main"
import Seo from "../components/seo"
import Search from "../components/Search"

const SearchPage = () => (
  <Main>
    <Search />
  </Main>
)

export const Head = ({ location }) => (
  <Seo
    title="Busca"
    description="Busque posts no blog da Valchan"
    pathname={location.pathname}
  />
)

export default SearchPage
