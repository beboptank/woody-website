import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import "../layout.scss";
import "./eventhero.scss";

export default function EventHero({ text }) {
    return (
        <div className="eventhero-container">
            <div className="herocontainer__info">
                <h1>{text}</h1>
            </div>
        </div>
    );
}

EventHero.propTypes = {
    text: PropTypes.string,
}

EventHero.defaultProps = {
    // String
    text: "Woody, bro.",
}