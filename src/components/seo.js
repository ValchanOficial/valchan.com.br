import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import * as React from "react"

function Head({ title, description, image }) {
  const {
    site: {
      info: { description: descriptionSeo, siteUrl, title: titleSeo, author },
    },
  } = useStaticQuery(graphql`
    query {
      site {
        info: siteMetadata {
          title
          description
          author
          siteUrl
        }
      }
    }
  `)

  const metaDescription = description || descriptionSeo
  const url = siteUrl
  const ogImage = `${url}${image || "/assets/img/cover/cover2.png"}`

  return (
    <>
      <html lang="pt-BR" />
      <title>{title ? `${title} | ${titleSeo}` : titleSeo}</title>
      <meta name="description" content={metaDescription} />
      <meta name="author" content={author} />
      <meta
        name="title"
        property="og:title"
        content={title ? `${title} | ${titleSeo}` : titleSeo}
      />
      <meta name="url" property="og:url" content={url} />
      <meta name="image" property="og:image" content={ogImage} />
      <meta
        name="description"
        property="og:description"
        content={metaDescription}
      />
      <meta name="type" property="og:type" content="website" />
      <meta
        name="site_name"
        property="og:site_name"
        content={title ? `${title} | ${titleSeo}` : titleSeo}
      />
    </>
  )
}

Head.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string,
}

export default Head
