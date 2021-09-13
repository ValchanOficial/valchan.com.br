import React from "react";

import Main from "../components/Main";
import Seo from "../components/seo";
import Search from "../components/Search";

const SearchPage = () => (
  <Main>
    <Seo title="Search" description="Página de busca | Search Page" />
    <Search />
  </Main>
);

export default SearchPage;