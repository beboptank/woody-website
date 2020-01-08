import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import "../layout.scss";
import "./hero.scss";

export default function Hero({text, src}) {
    return (
        <div className="herocontainer" src={src}>
            <div className="herocontainer__info">
                <h1>{text}</h1>
            </div>
        </div>
    );
}

Hero.propTypes = {
    text: PropTypes.string,
}

Hero.defaultProps = {
    // String
    text: "Woody, bro.",
    // String - use to set background image
    src: "",
}