import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import "../layout.scss";
import "./instahero.scss";

export default function InstaHero({ text }) {
    return (
        <div className="instahero-container">
            <div className="herocontainer__info">
                <h1>{text}</h1>
            </div>
        </div>
    );
}

InstaHero.propTypes = {
    text: PropTypes.string,
}

InstaHero.defaultProps = {
    // String
    text: "Woody, bro.",
}