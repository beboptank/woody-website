import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Nav from "../components/Nav/nav";
import MenuCard from "../components/MenuCard/MenuCard";

import "./scss/menu.scss";


const Menu = () => (
    <Layout>
        <Nav />
        <SEO title="woody Menu" />
        <div className="menucontainer">
            <h1 className="menucontainer__header">Menu</h1>

            <div>
                <MenuCard 
                    type="Beer"
                    itemlist={[
                        "Budweiser ¥650", 
                        "Corona ¥700",
                        "Heinekien ¥700",
                        "Guinness ¥700",
                        "Heartland ¥700",
                        "Hoegarden ¥700",
                        "Sapporo ¥700",
                        "Kirin ¥700",
                        "Shandy Gaff ¥700",
                        "Campari Beer ¥700",
                        "Tokyo White ¥750",
                        "Brooklyn Lager ¥750",
                        "Blue Moon ¥750",
                        "Goose Island IPA ¥750"
                        ]}
                />
                <MenuCard 
                    type="Cocktails"
                    itemlist={[
                        "Rum and Coke ¥700",
                        "Mai-Tai ¥700",
                        "Sex on the Beach ¥700",
                        "Sea Breeze ¥700",
                        "Campari Orange ¥700",
                        "Campari Soda ¥700",
                        "Screwdriver ¥700",
                        "Salty Dog ¥700",
                        "Moscow Mule ¥750",
                        "Sakura Ginger ¥750",
                        "Gin & Tonic ¥750",
                        "Jägerbomb ¥800",
                        "Cocabomb ¥800",
                        "XYZ ¥800",
                        "Piña Colada ¥800"
                    ]}
                />
                <MenuCard 
                    type="Food"
                    itemlist={[
                        "Curry & Rice ¥1000",
                        "French Fries ¥800"
                    ]}
                />
            </div>
            
            <Link to="/">Home</Link>
        </div>
    </Layout>
)

export default Menu