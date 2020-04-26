import React from "react";
import { graphql } from "gatsby";

import Main from '../components/Main';
import SEO from "../components/seo";

import * as S from "../components/Post/style";

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <Main>
      <SEO title={post.frontmatter.title} />
        <S.PostContent>
          <S.PostHeader>
            <S.PostDate>
              {post.frontmatter.date} • {post.timeToRead} min de leitura
            </S.PostDate>
            <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
            <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
          </S.PostHeader>
          <S.MainContent>
            <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
          </S.MainContent>
        </S.PostContent>
    </Main>
  )
}

export const query = graphql`
  query Post($slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title,
        description,
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
      }
      html,
      timeToRead
    }
  }
`

export default BlogPost;