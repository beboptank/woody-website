import PropTypes from "prop-types";
import React from "react";
import Button from "../Button/button";
import "../layout.scss";
import "./eventhero.scss";

export default function EventHero({ text }) {
    return (
        <div className="eventhero-container">
            <div className="eventhero-container__info">
                <h1>{text}</h1>
                <Button text={"Upcoming Events"} />
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