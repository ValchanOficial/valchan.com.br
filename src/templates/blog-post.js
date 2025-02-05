import { graphql } from "gatsby"
import React from "react"

import Main from "../components/Main"
import RecommendedPosts from "../components/RecommendedPosts"
import Head from "../components/seo"

import Header from "../components/Header"
import * as S from "../components/Post/style"

const BlogPost = ({ data, pageContext }) => {
  const post = data.post
  const next = pageContext.nextPost
  const previous = pageContext.previousPost

  return (
    <Main>
      <Head
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.image}
      />
      <Header isPost={true} />
      <S.PostContainer>
        <S.PostContent>
          <S.PostHeader>
            <S.PostDate>
              {post.frontmatter.date} • {post.time} min de leitura
            </S.PostDate>
            <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
            <S.PostDescription>
              {post.frontmatter.description}
            </S.PostDescription>
          </S.PostHeader>
          <S.MainContent>
            <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
          </S.MainContent>
          <RecommendedPosts next={next} previous={previous} />
          <div
            style={{ width: "100%" }}
            data-chirpy-theme="light"
            data-chirpy-comment="true"
            id="chirpy-comment"
          />
        </S.PostContent>
      </S.PostContainer>
    </Main>
  )
}

export const query = graphql`
  query ($slug: String) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        title
        description
        date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
        image
      }
      html
      time: timeToRead
    }
  }
`

export default BlogPost
