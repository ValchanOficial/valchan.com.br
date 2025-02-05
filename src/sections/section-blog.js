import React, { useEffect, useState } from "react"

import { graphql, useStaticQuery } from "gatsby"

import Button from "../components/Button"
import Section from "../components/Section"
import { LovelyBird } from "../components/SVG"

import * as S from "./style"

export default function SectionBlog() {
  const MAX_POSTS_VISIBLE = 6
  const [visibleItems, setVisibleItems] = useState(MAX_POSTS_VISIBLE)
  const [posts, setPosts] = useState([])

  const data = useStaticQuery(graphql`
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
  `)

  useEffect(() => {
    setPosts(data?.posts?.edges || [])
  }, [data])

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
    <Section id="blog" name="Home" bg="--background-light">
      <S.BlogWrapper>
        <S.TitleWrapper>
          <S.Title style={{ color: "var(--main)", textTransform: "uppercase" }}>
            Blog
          </S.Title>
          <LovelyBird />
        </S.TitleWrapper>
        <S.ListWrapper>
          {posts.slice(0, visibleItems).map(
            ({
              node: {
                frontmatter: { category, date, description, title },
                time,
                fields: { slug },
              },
            }) => (
              <S.PostLink key={title} to={slug}>
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
