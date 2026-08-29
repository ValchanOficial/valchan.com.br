import { graphql, useStaticQuery } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
const HOME_DESCRIPTION =
  "Valéria Padilha de Vargas — desenvolvedora de software. Portfólio, experiências e blog sobre tecnologia."

function Seo({
  title,
  description,
  image,
  pathname = "/",
  type = "website",
}) {
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

  const metaDescription = description || descriptionSeo || HOME_DESCRIPTION
  const canonical = new URL(pathname || "/", siteUrl).href
  const ogImage = `${siteUrl}${image || "/assets/img/cover/cover2.png"}`
  const fullTitle = title ? `${title} | ${titleSeo}` : titleSeo

  const jsonLd =
    type === "article"
      ? {
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: title,
          description: metaDescription,
          image: ogImage,
          url: canonical,
          author: { "@type": "Person", name: author },
        }
      : {
          "@context": "https://schema.org",
          "@type": "Person",
          name: author,
          url: siteUrl,
          jobTitle: "Software Developer",
        }

  return (
    <>
      <html lang="pt-BR" />
      <title>{fullTitle}</title>
      <link rel="canonical" href={canonical} />
      <meta name="description" content={metaDescription} />
      <meta name="author" content={author} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={titleSeo} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />
      <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
    </>
  )
}

Seo.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
  type: PropTypes.oneOf(["website", "article"]),
}

export default Seo
export { HOME_DESCRIPTION }
