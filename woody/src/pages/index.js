import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import Hero from "../components/Hero/hero";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero text="This is the video hero." />
    <Hero text="This is the menu hero." />
    <Hero text="This is the event hero." />
    <Hero text="This is the insta hero." />
    <h1>Woody</h1>
    <p>Welcome to Woody's website.</p>
    <p>Let's party.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
