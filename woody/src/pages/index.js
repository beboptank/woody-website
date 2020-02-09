import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout";
import SEO from "../components/seo";
import Nav from "../components/Nav/nav";
import VideoHero from "../components/Heros/videohero";
import MenuHero from "../components/Heros/menuhero";
import EventHero from "../components/Heros/eventhero";
import InstaHero from "../components/Heros/instahero";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Nav />
    <VideoHero text="This is the video hero." />
    <MenuHero text="Refreshing cocktails and beer. Homemade curry." />
    <EventHero text="It's always time for party time." />
    <InstaHero text="Looking good, everybody." />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
