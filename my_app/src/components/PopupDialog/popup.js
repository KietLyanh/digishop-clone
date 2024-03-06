import React from "react";
import { NavLink } from "react-router-dom";
import './popup.scss';
import config from "~/config";

function Popup({closeOverlay})
{
    return(
        <>
            <div className="popup-box">
                <span className="popup-closebtn" onClick={() => closeOverlay(false)}>X</span>
                <div className="popup-content">
                <h3>Đăng nhập</h3>
                <h4>Dành cho CBCNV</h4>
                <NavLink to={config.routes.login}><button className="popup-btn" onClick={() => closeOverlay(false)}>Bấm vào đây để đăng nhập</button></NavLink>
                </div>
                
            </div>
            <div className="popup-overlay"></div>
        </>
    );
}
export default Popup;