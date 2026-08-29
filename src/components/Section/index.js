import React from "react"

const Section = ({ children, id, bg = "--background-dark" }) => {
  return (
    <section
      id={id}
      style={{ background: `var(${bg})`, position: "relative" }}
    >
      {children}
    </section>
  )
}

export default Section
