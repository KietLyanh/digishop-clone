import React from "react";
import PropTypes from "prop-types"
import '~/pages/home/LinkPage/LinkPage.scss'
function Menu({children})
{
    return(
        <nav className="home-header2-row">{children}</nav>
    );
}
Menu.propTypes = {
    children: PropTypes.node.isRequired
}
export default Menu;