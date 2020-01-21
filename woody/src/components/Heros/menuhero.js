import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import "../layout.scss";
import "./menuhero.scss";

export default function MenuHero({ text }) {
    return (
        <div className="menuhero-container">
            <div className="herocontainer__info">
                <h1>{text}</h1>
            </div>
        </div>
    );
}

MenuHero.propTypes = {
    text: PropTypes.string,
}

MenuHero.defaultProps = {
    // String
    text: "Woody, bro.",
}