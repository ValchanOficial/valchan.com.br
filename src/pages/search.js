import React from "react";

import Main from "../components/Main";
import SEO from "../components/seo";
import Search from "../components/Search";

const SearchPage = () => (
  <Main>
    <SEO title="Search" />
    <Search />
  </Main>
);

export default SearchPage;