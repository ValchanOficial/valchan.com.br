import React from "react";

import Main from '../components/Main';
import Seo from "../components/seo";
import PostItem from "../components/PostItem";
import Pagination from '../components/Pagination';

import * as S from "../components/ListWrapper/style";
import { graphql } from "gatsby";
import Newsletter from "../components/Newsletter";

const BlogList = (props) => {
  const postList = props.data.posts.edges;
  const { currentPage, numPages } = props.pageContext;
  const isFirst = currentPage === 1;
  const isLast = currentPage === numPages;
  const prevPage = currentPage - 1 === 1 ? '/' : `/page/${currentPage - 1}`;
  const nextPage = `/page/${currentPage + 1}`;

  return (
    <Main>
      <Seo title="Home" />
      <S.ListWrapper>
        {postList.map(
          ({
            node: {
              frontmatter: { category, date, description, title },
              time,
              fields: { slug }
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
      <Newsletter/>
    </Main>
  )
}

export const query = graphql`
query ($skip: Int, $limit: Int) {
  posts: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
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
}`

export default BlogList;