import React from "react"

import Title from "../Title"

import styles from "../../css/about.module.css"
import img from "../../images/defaultBcg.jpeg"

function About(props) {
  return (
    <section className={styles.about}>
      <Title title="About" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={img} alt="about img" />
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
