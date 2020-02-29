import React from 'react';
import { Link } from 'gatsby';
import './button.scss';

export default function Button({ text, href }) {
    return (
        <div className='buttoncontainer'>
            <Link to={ href }>
                <button className='buttoncontainer__button' type='button'>{ text }</button>
            </Link>
        </div>
    )
}

Button.defaultProps = {
    text: "Woody",
    href: "www.google.com"
}