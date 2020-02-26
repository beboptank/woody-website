import React from "react";

import "./MenuCard.scss";

const MenuCard = ({ type, price, image, itemlist }) => (
    <div className="menucardcontainer">
        <h2>{type}</h2>
        <h3>{price}</h3>
        <p>{itemlist}</p>
    </div>
)

export default MenuCard;

MenuCard.defaultProps = {
    type: 'beer',
    price: '700 yen',
    itemlist: ['Bud', 'Corona', 'Heartland']
}