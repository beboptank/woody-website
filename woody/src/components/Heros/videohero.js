import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import "../layout.scss";
import "./videohero.scss";
import video from "../../images/introExample.mp4";

export default function VideoHero({text}) {
    return (
        <div className="herocontainer">
            <div className="herocontainer__info">
                <h1>{text}</h1>
            </div>
            <video id="videoBackground" autoPlay muted loop>
                <source src={video} type="video/mp4" />
            </video>
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