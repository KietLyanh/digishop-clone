import React from "react";
import PropTypes from 'prop-types';
import './Menu.scss';
import { NavLink } from "react-router-dom";

function MenuItems({
    to,icon,title,image,displayTitle,displayImg,className,classNameImg,dropdown
})
{
    return(
        <div>
        <NavLink 
             to={to}>
            <div className={className}>
            {icon}
            <img style={{display:`${displayImg}`}} src={image} className={classNameImg}/>
            <p style={{display:`${displayTitle}`}}>{title}</p>
            </div>
        </NavLink>
            <div className="dropdown" >{dropdown}</div>
        </div>
    );
}
MenuItems.propTypes = {
    to: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
    image:PropTypes.node.isRequired,
    displayTitle: PropTypes.node.isRequired,
    displayImg: PropTypes.node.isRequired,
    className: PropTypes.node.isRequired,
    dropdown: PropTypes.node.isRequired
}
export default MenuItems;