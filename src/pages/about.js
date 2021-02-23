import React from "react"
import Header from "./components/header"

export default function About() {
  return (
    <div style={{ color: `teal` }}>
      <Header headerText="About Gatsby" whatEver="whatever"/>
      <Header headerText="YoMama" />
      <p>Such wow. Very React.</p>
    </div>
  )
}