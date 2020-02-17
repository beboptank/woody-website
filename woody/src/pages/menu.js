import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Menu = () => (
    <Layout>
        <SEO title="Menu" />
        <h1>Menu</h1>
        <p>Welcome to the menu page</p>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default Menu