import React from "react";
import { graphql } from "gatsby";

import Main from '../components/Main';
import Seo from "../components/seo";
import RecommendedPosts from "../components/RecommendedPosts";
import Comments from "../components/Comments";

import * as S from "../components/Post/style";

const BlogPost = ({ data, pageContext }) => {
  const post = data.post;
  const next = pageContext.nextPost;
  const previous = pageContext.previousPost;

  return (
    <Main>
      <Seo 
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.image}
       />
      <S.PostContainer>
        <S.PostContent>
          <S.PostHeader>
            <S.PostDate>
              {post.frontmatter.date} • {post.time} min de leitura
            </S.PostDate>
            <S.PostTitle>{post.frontmatter.title}</S.PostTitle>
            <S.PostDescription>{post.frontmatter.description}</S.PostDescription>
          </S.PostHeader>
          <S.MainContent>
            <div dangerouslySetInnerHTML={{ __html: post.html }}></div>
          </S.MainContent>
          <RecommendedPosts next={next} previous={previous} />
          <Comments url={post.fields.slug} title={post.frontmatter.title} />
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
      title,
      description,
      date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
      image
    }
    html,
    time: timeToRead
  }
}`

export default BlogPost;