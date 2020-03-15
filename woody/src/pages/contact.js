import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneSquare } from "@fortawesome/free-solid-svg-icons";
import {faFacebookSquare, faInstagramSquare } from "@fortawesome/free-brands-svg-icons";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Nav from "../components/Nav/nav";


import "./scss/contact.scss";


const Contact = () => (
    <Layout>
        <Nav />
        <SEO title="woody Contact" />
        <h1>Contact</h1>

        <div className="contactcontainer">
            <a href="https://www.facebook.com/woodyfukui"><FontAwesomeIcon icon={faFacebookSquare} className="contactcontainer__icon" /></a>
            <a href="https://www.instagram.com/woody_diary/"><FontAwesomeIcon icon={faInstagramSquare} className="contactcontainer__icon" /></a>
            <div className="contactcontainer__phone">
                <a><FontAwesomeIcon className="contactcontainer__icon" icon={faPhoneSquare} /></a>
                <p className="contactcontainer__phone__number">090-6608-8099</p>
            </div>
        </div>

        <Link to="/">Home</Link>
    </Layout>
)

export default Contact