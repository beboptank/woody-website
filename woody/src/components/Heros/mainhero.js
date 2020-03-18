import PropTypes from "prop-types";
import React from "react";
import "../layout.scss";
import "./mainhero.scss";

export default function MainHero({ text }) {
    return (
        <div className="hero-container">
            <div className="hero-container__info">
                <h1>{text}</h1>
            </div>
        </div>
    );
}

MainHero.propTypes = {
    text: PropTypes.string,
}

MainHero.defaultProps = {
    // String
    text: "Woody, bro."
}