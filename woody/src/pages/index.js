import React from "react"

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
    <VideoHero text="Welcome to woody." />
    <MenuHero text="Refreshing cocktails and beer. Homemade curry." />
    <EventHero text="Come on in - it's always party time at woody." />
    <InstaHero text="Say cheese and cheers to good friends and drinks." />
  </Layout>
)

export default IndexPage
