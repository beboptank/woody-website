import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import "../layout.scss";
import "./videohero.scss";

export default function VideoHero({text}) {
    return (
        <div className="herocontainer">
            <div className="herocontainer__info">
                <h1>{text}</h1>
            </div>
        </div>
    );
}

VideoHero.propTypes = {
    text: PropTypes.string,
}

VideoHero.defaultProps = {
    // String
    text: "Woody, bro.",
    // Class Name - for backgrounds
    cx: "",
}