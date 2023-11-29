import React from "react";
import PropTypes from 'prop-types';
import './Menu.scss';

function Menu({children})
{
    return(
        <nav className="container-header">{children}</nav>
    );
}
Menu.propTypes = {
    children: PropTypes.node.isRequired
}
export default Menu;
