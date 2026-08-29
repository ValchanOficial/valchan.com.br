import { useAutoAnimate } from "@formkit/auto-animate/react"
import React, { useState } from "react"

import { graphql, useStaticQuery } from "gatsby"

import Button from "../components/Button"
import { LovelyBird } from "../components/SVG"
import Section from "../components/Section"

import * as S from "./style"

export default function SectionBlog() {
  const MAX_POSTS_VISIBLE = 6
  const [visibleItems, setVisibleItems] = useState(MAX_POSTS_VISIBLE)
  const [parent] = useAutoAnimate({
    easing: "ease-in-out",
    duration: 500,
  })

  const data = useStaticQuery(graphql`
    query HomeBlogPosts {
      posts: allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
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
  `)

  const posts = data?.posts?.edges || []

  const handleLoadMore = () => {
    if (visibleItems < posts.length) {
      setVisibleItems(oldState => oldState + MAX_POSTS_VISIBLE)
    }
  }
  const handleLoadLess = () => {
    if (posts.slice(0, visibleItems).length > MAX_POSTS_VISIBLE) {
      setVisibleItems(oldState => oldState - MAX_POSTS_VISIBLE)
    }
  }

  return (
    <Section id="blog" bg="--background-light">
      <S.BlogWrapper>
        <S.TitleWrapper>
          <S.Title style={{ color: "var(--main)", textTransform: "uppercase" }}>
            Blog
          </S.Title>
          <LovelyBird />
        </S.TitleWrapper>
        <S.ListWrapper ref={parent}>
          {posts.slice(0, visibleItems).map(
            ({
              node: {
                frontmatter: { category, date, description, title },
                time,
                fields: { slug },
              },
            }) => (
              <S.PostLink key={slug} to={slug}>
                <S.PostTag># {category}</S.PostTag>
                <S.PostTitle>{title}</S.PostTitle>
                <S.PostDate>
                  {date} • <span>{time} min de leitura</span>
                </S.PostDate>
                <S.PostDescription>{description}</S.PostDescription>
              </S.PostLink>
            )
          )}
          <div>
            <Button onClick={handleLoadMore}>Veja Mais</Button>
            {visibleItems > 6 && (
              <Button onClick={handleLoadLess}>Veja Menos</Button>
            )}
          </div>
        </S.ListWrapper>
      </S.BlogWrapper>
    </Section>
  )
}
