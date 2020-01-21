import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import VideoHero from "../components/Heros/videohero";
import MenuHero from "../components/Heros/menuhero";
import EventHero from "../components/Heros/eventhero";
import InstaHero from "../components/Heros/instahero";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <VideoHero text="This is the video hero." />
    <MenuHero text="This is the menu hero." />
    <EventHero text="This is the event hero." />
    <InstaHero text="This is the insta hero." />
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
