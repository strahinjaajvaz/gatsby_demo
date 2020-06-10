import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Img from "gatsby-image"

import Title from "../Title"

import styles from "../../css/about.module.css"

const query = graphql`
  query {
    file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

function About(props) {
  let data = useStaticQuery(query)
  console.log(data)
  return (
    <section className={styles.about}>
      <Title title="About" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <Img fluid={data.file.childImageSharp.fluid} />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>explore the difference</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit modi
            quibusdam culpa.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit modi
            quibusdam culpa.
          </p>
          <button type="button" className="btn-primary">
            Read more
          </button>
        </article>
      </div>
    </section>
  )
}
export default About
