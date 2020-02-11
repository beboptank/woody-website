import React from 'react';
import './button.scss';

export default function Button({ text, href }) {
    return (
        <div className='buttoncontainer'>
            <a className='buttoncontainer__link' href={ href }>
                <button className='buttoncontainer__button' type='button'>{ text }</button>
            </a>
        </div>
    )
}

Button.defaultProps = {
    text: "Woody",
    href: "www.google.com"
}