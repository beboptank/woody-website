import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Gallery = () => (

    <Layout>
        <SEO title="Gallery" />
        <h1>Hi from the Gallery</h1>
        <p>Welcome to the gallery page</p>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default Gallery