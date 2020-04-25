import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import * as S from './style';
import GlobalStyles from "../../styles/global";

import Header from "../Header";
import Sidebar from "../Sidebar";

const Main = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <S.LayoutWrapper>      
      <GlobalStyles />
        <Header siteTitle={data.site.siteMetadata.title} />
        <S.Content>
            <Sidebar/>
            <S.LayoutMain>{children}</S.LayoutMain>
        </S.Content>
        <S.Footer>© {new Date().getFullYear()}, {data.site.siteMetadata.title}</S.Footer>
    </S.LayoutWrapper>
  )
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Main
