import PropTypes from "prop-types";
import React from "react";
import Button from "../Button/button"
import "../layout.scss";
import "./instahero.scss";

export default function InstaHero({ text }) {
    return (
        <div className="instahero-container">
            <div className="instahero-container__info">
                <h1>{text}</h1>
                <Button text={"Photos and Videos from Instagram"} />
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