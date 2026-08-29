import React from "react"

import Main from "../components/Main"
import Seo, { HOME_DESCRIPTION } from "../components/seo"

import { ParallaxProvider } from "react-scroll-parallax"
import SectionAbout from "../sections/section-about"
import SectionBlog from "../sections/section-blog"
import SectionContact from "../sections/section-contact"
import SectionExperiences from "../sections/section-experiences"
import SectionMain from "../sections/section-main"
import SectionProjects from "../sections/section-projects"
import SectionQuote from "../sections/section-quote"
import SectionRecommendations from "../sections/section-recommendations"

export default function Home() {
  return (
    <ParallaxProvider>
      <Main>
        <SectionMain />
        <SectionAbout />
        <SectionQuote />
        <SectionProjects />
        <SectionExperiences />
        <SectionRecommendations />
        <SectionBlog />
        <SectionContact />
      </Main>
    </ParallaxProvider>
  )
}

export const Head = () => (
  <Seo title="Home" description={HOME_DESCRIPTION} pathname="/" />
)
