import { graphql } from "gatsby"
import React from "react"

import Main from "../components/Main"
import RecommendedPosts from "../components/RecommendedPosts"
import Seo from "../components/seo"

import Header from "../components/Header"
import * as S from "../components/Post/style"

const BlogPost = ({ data, pageContext }) => {
  const post = data.post
  const next = pageContext.nextPost
  const previous = pageContext.previousPost

  return (
    <Main>
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

export const Head = ({ data, location }) => {
  const post = data.post
  return (
    <>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.image}
        pathname={location.pathname}
        type="article"
      />
      <script
        defer
        src="https://chirpy.dev/bootstrapper.js"
        data-chirpy-domain="valchan.com.br"
      />
    </>
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
