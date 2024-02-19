import React, { useState } from "react";
import '../DefaultLayout/DefaultLayout.scss';
import PropTypes from "prop-types";
import Header from "../DefaultLayout/Header";
import HeaderTop from "../DefaultLayout/HearderTop";
import Footer from "../DefaultLayout/Footer";
// import Slideshow from "./Slideshow";
import Popup from "~/components/PopupDialog/popup";
function LayoutSecond({children})
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
LayoutSecond.propTypes = {
    children: PropTypes.node.isRequired
};
export default LayoutSecond;