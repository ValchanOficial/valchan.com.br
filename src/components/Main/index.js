import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import GlobalStyles from "../../styles/global"
import * as S from "./style"

import Header from "../Header"
import Sidebar from "../Sidebar"

const Main = ({ children }) => {
  const data = useStaticQuery(graphql`
    query {
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
        <Sidebar />
        <S.LayoutMain>{children}</S.LayoutMain>
      </S.Content>
    </S.LayoutWrapper>
  )
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Main
