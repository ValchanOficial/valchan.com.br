require("dotenv").config();

const queries = require("./src/utils/algolia_queries");

module.exports = {
  siteMetadata: {
    title: `Valchan`,
    position: `Developer`,
    description: `A technology-loving developer who constantly seeks knowledge ♡`,
    author: `Valéria Padilha de Vargas`,
    siteUrl: `https://valchan.com.br`
  },
  plugins: [
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://valchan.us1.list-manage.com/subscribe/post?u=babcaf62e2cad74799b8c19e1&amp;id=b10871eb30', // Mailchimp endpoint
        timeout: 3500,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/assets/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `icons`,
        path: `${__dirname}/static/assets/icons`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              linkImagesToOriginal: false,
            },
          },
          `gatsby-remark-lazy-load`,
          `gatsby-remark-prismjs`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts-with-attributes`,
      options: {
        fonts: [
          `Dosis`,
          `Satisfy`,
          `Montserrat\:100,300,400,400i,700`,
        ],
        display: 'swap',
        attributes: {
          rel: "stylesheet preload prefetch",
        },
      },
    
    },
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-algolia-search`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 10000, // default: 1000
        enablePartialUpdates: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Valéria Padilha de Vargas`,
        short_name: `Valéria Padilha de Vargas`,
        start_url: `/`,
        background_color: `#F1C4CB`,
        theme_color: `#E5183A`,
        display: `minimal-ui`,
        icon: `static/assets/icons/maskable_icon.png`,
        icons: [
          {
            src: `static/assets/icons/maskable_icon_x48.png`,
            sizes: `48x48`,
            type: `image/png`,
            purpose: `maskable`,
          },
          {
            src: `static/assets/icons/maskable_icon_x72.png`,
            sizes: `72x72`,
            type: `image/png`,
            purpose: `maskable`,
          },
          {
            src: `static/assets/icons/maskable_icon_x96.png`,
            sizes: `96x96`,
            type: `image/png`,
            purpose: `maskable`,
          },
          {
            src: `static/assets/icons/maskable_icon_x128.png`,
            sizes: `128x128`,
            type: `image/png`,
            purpose: `maskable`,
          },
          {
            src: `static/assets/icons/maskable_icon_x192.png`,
            sizes: `192x192`,
            type: `image/png`,
            purpose: `maskable`,
          },
          {
            src: `static/assets/icons/maskable_icon_x512.png`,
            sizes: `512x512`,
            type: `image/png`,
            purpose: `maskable`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.frontmatter.description,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }]
                })
              })
            },
            query: `
              {
                allMarkdownRemark(sort: {order: DESC, fields: [frontmatter___date]}) {
                  edges {
                    node {
                      fields {
                        slug
                      }
                      frontmatter {
                        title
                        description
                        date
                      }
                      excerpt
                      html
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: "Valchan's RSS Feed"
          }
        ]
      }
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify-cms`,
  ],
}
