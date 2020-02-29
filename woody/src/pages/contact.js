import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Nav from "../components/Nav/nav";


import "./scss/menu.scss";


const Contact = () => (
    <Layout>
        <Nav />
        <SEO title="woody Menu" />
        <h1>Contact</h1>

        <div className="contactcontainer">
            
        </div>

        <Link to="/">Home</Link>
    </Layout>
)

export default Contact