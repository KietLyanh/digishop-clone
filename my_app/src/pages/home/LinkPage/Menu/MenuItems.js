import React from "react";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import '~/pages/home/LinkPage/LinkPage.scss';
function MenuItems({image,title,to})
{
    return(
        <NavLink
        to={to}>
            <div className="home-header2-item">
                <div className="header-img">
                     <img src={image} alt="opps"/>
                </div>
                <p>{title}</p>
            </div>
        </NavLink>
    );
}
MenuItems.propTypes = {
    image: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    to: PropTypes.node.isRequired
}
export default MenuItems;