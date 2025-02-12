import PropTypes from "prop-types"
import React from "react"

import Main from "../components/Main"
import Pagination from "../components/Pagination"
import PostItem from "../components/PostItem"
import Head from "../components/seo"

import { graphql } from "gatsby"
import * as S from "../components/ListWrapper/style"

export default function BlogList(props) {
  const { data, pageContext } = props

  const postList = data.posts.edges
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : `/page/${currentPage - 1}`
  const nextPage = `/page/${currentPage + 1}`

  return (
    <Main>
      <Head />
      <S.ListWrapper>
        {postList.map(
          ({
            node: {
              frontmatter: { category, date, description, title },
              time,
              fields: { slug },
            },
          }) => (
            <PostItem
              key={title}
              slug={slug}
              category={category}
              date={date}
              time={time}
              title={title}
              description={description}
            />
          )
        )}
      </S.ListWrapper>
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        currentPage={currentPage}
        numPages={numPages}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </Main>
  )
}

export const query = graphql`
  query ($skip: Int, $limit: Int) {
    posts: allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            category
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
            description
            title
          }
          time: timeToRead
        }
      }
    }
  }
`

BlogList.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.object,
}

BlogList.defaultProps = {
  data: [],
}
