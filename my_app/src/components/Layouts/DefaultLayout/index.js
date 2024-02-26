import React, { useState } from "react";
import './DefaultLayout.scss';
import PropTypes from "prop-types";
import Header from "./Header";
import HeaderTop from "./HearderTop";
import Footer from "./Footer";
import Slideshow from "./Slideshow";
import Popup from "~/components/PopupDialog/popup";
function DefaultLayout({children})
{
    const [openOverlay,setOpenOverlay] = useState(false);

    const handleSetOverlay = (newValue) => {
        setOpenOverlay(newValue)
    }
    return(
        <div className="wrapper" >
            <div className="header">
                <HeaderTop/>
                <Header
                setOpenOverlay={handleSetOverlay}
                />
            </div>
            <Slideshow className="slideshow"/>
            
            <div className="container">
                {children}
            </div>
            <div className="footer">
                <Footer/>
            </div>
            {openOverlay && <Popup
            closeOverlay={handleSetOverlay}
            />}
        </div>
    );
}
DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired
};
export default DefaultLayout;