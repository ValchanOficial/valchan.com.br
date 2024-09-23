import React from "react";

import Main from "../components/Main";
import Head from "../components/seo";
import Search from "../components/Search";

const SearchPage = () => (
  <Main>
    <Head title="Search" description="Página de busca | Search Page" />
    <Search />
  </Main>
);

export default SearchPage;
