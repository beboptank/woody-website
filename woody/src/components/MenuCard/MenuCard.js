import React from "react";

import "./MenuCard.scss";

const MenuCard = ({ type, image, itemlist }) => (



    <div className="menucardcontainer">
        <h2 className="menucardcontainer__type">{type.toUpperCase(type)}</h2>
        <div className="menucardcontainer__listcontainer">
            <ul className="menucardcontainer__listcontainer__itemlist">
                {itemlist.map(item => <li className="menucardcontainer__listcontainer__itemlist__item">{item}</li>)}
            </ul>
        </div>
    </div>
)

export default MenuCard;

MenuCard.defaultProps = {
    type: 'beer',
    subtype: '',
    itemlist: ['Bud', 'Corona', 'Heartland']
}