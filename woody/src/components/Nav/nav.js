import { Link, withAssetPrefix } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import "../layout.scss";
import "./nav.scss";

const Nav = ({ siteTitle }) => (

  <div className="navcontainer">

    <nav className="navcontainer__navbar">
      <h1 className="navcontainer__navbar__title">
        <Link
          to="pages/index.js"
          style={{
            color: `white`,
            textDecoration: `none`
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <ul className="navcontainer__items">
        <li className="navcontainer__items__link"><Link to="pages/menu/">Menu</Link></li>
        <li className="navcontainer__items__link">Events</li>
        <li className="navcontainer__items__link">Gallery</li>
        <li className="navcontainer__items__link">Contact</li>
      </ul>
    </nav>

  </div>
)

Nav.propTypes = {
  siteTitle: PropTypes.string,
}

Nav.defaultProps = {
  siteTitle: `Woody`,
}

export default Nav
