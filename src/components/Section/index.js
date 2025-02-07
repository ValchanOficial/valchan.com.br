import React from "react"
import Head from "../seo"

const Section = ({ children, id = "#", name, bg = "--background-dark" }) => {
  return (
    <section id={id} style={{ background: `var(${bg})`, position: "relative" }}>
      <Head title="Home" description="Página inicial" />
      {children}
    </section>
  )
}

export default Section
