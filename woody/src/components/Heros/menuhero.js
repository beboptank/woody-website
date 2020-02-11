import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Button from "../Button/button";
import "../layout.scss";
import "./menuhero.scss";

export default function MenuHero({ text }) {
    return (
        <div className="menuhero-container">
            <div className="menuhero-container__info">
                <h1>{text}</h1>
                <Button text={"The Menu"}/>
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