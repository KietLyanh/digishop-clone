import React from "react";
import './DefaultLayout.scss';
import PropTypes from "prop-types";
import Header from "./Header";
import HeaderTop from "./HearderTop";
import Footer from "./Footer";
import Slideshow from "./Slideshow";
function DefaultLayout({children})
{
    return(
        <div className="wrapper">
            <div className="header">
                <HeaderTop/>
                <Header/>
            </div>
            <Slideshow/>
            <div className="container">
                {children}
            </div>
            <div className="footer">
                <Footer/>
            </div>
        </div>
    );
}
DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired
};
export default DefaultLayout;