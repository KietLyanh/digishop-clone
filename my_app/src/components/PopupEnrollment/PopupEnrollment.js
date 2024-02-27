import React from "react";
import './PopupEnrollment.scss';

function PopupEnrollment() {
    return (
        <>
            <div className="popuperoll-box">
                <span className="popuperoll-closebtn" >X</span>
                <div className="popuperoll-content">
                <h3>Đăng nhập</h3>
                <h4>Dành cho CBCNV</h4>
                <button>Bấm vào đây để đăng nhập</button>
                </div>
                
            </div>
            <div className="popuperoll-overlay"></div>
        </>
    );
}
export default PopupEnrollment;