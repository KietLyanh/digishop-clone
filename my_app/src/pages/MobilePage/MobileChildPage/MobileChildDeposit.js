import React from "react";
import './MobileChildPage.scss';
import { PhondataIcon } from "~/components/icons";
import imgMoney from "~/pages/MobilePage/images/recharge-money.png";
function MobileChildDeposit() {
    return (
        <div className="mobilechild__content-deposit">
            <h3>Nạp tiền ngay vào tài khoản?</h3>
            <img src={imgMoney} alt="opps"/>
            <div className="mobilechild__content-deposit-money"></div>
            <button>
                <span>Nạp Ngay</span>
                <PhondataIcon width="15px" height="15px"/>
            </button>

        </div>
    );
}
export default MobileChildDeposit;