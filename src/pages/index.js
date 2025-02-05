import React from "react"

import Main from "../components/Main"
import Head from "../components/seo"

import SectionAbout from "../sections/section-about"
import SectionBlog from "../sections/section-blog"
import SectionContact from "../sections/section-contact"
import SectionExperiences from "../sections/section-experiences"
import SectionMain from "../sections/section-main"
// import SectionProjects from "../sections/section-projects"
import SectionQuote from "../sections/section-quote"
import SectionRecommendations from "../sections/section-recommendations"

export default function Home() {
  return (
    <Main>
      <Head title="Home" description="Página inicial" />
      <SectionMain />
      <SectionAbout />
      <SectionQuote />
      {/* <SectionProjects /> */}
      <SectionExperiences />
      <SectionRecommendations />
      <SectionBlog />
      <SectionContact />
    </Main>
  )
}
