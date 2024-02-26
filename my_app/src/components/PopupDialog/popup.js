import React from "react";
import './popup.scss';

function Popup({closeOverlay})
{
    return(
        <>
            <div className="popup-box">
                <span className="popup-closebtn" onClick={() => closeOverlay(false)}>X</span>
                <div className="popup-content">
                <h3>Đăng nhập</h3>
                <h4>Dành cho CBCNV</h4>
                <button>Bấm vào đây để đăng nhập</button>
                </div>
                
            </div>
            <div className="popup-overlay"></div>
        </>
    );
}
export default Popup;