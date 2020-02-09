import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import "../layout.scss";
import "./nav.scss";

const Nav = ({ siteTitle }) => (

  <div className="navcontainer">

    <nav className="navcontainer__navbar">
      <h1 className="navcontainer__navbar__title">
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            textTransform: `lowercase`
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <ul className="navcontainer__items">
        <li className="navcontainer__items__link"><Link to="/menu/" style={{
          color: `white`,
          textDecoration: `none`
        }}>Menu</Link></li>
        <li className="navcontainer__items__link"><Link to="/events/" style={{
          color: `white`,
          textDecoration: `none`
        }}>Events</Link></li>
        <li className="navcontainer__items__link"><Link to="/gallery/" style={{
          color: `white`,
          textDecoration: `none`
        }}>Gallery</Link></li>
        <li className="navcontainer__items__link"><Link to="/contact/" style={{
          color: `white`,
          textDecoration: `none`
        }}>Contact</Link></li>
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
