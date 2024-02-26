import React from "react";
import numeral from "numeral";
import './MobileChildItems.scss';
import { PhondataIcon } from "~/components/icons/icons";
import imgMoney from "~/pages/MobilePage/images/recharge-money.png";
function MobileChildDeposit() {
    const listNumber = [50000, 100000, 200000, 300000, 500000];
    return (
        <div className="mobilechild__content-deposit">
            <h3>Nạp tiền ngay vào tài khoản?</h3>
            <img src={imgMoney} alt="opps" />
            <div className="mobilechild__content-deposit-money">
                {listNumber.map((number, index) => (
                        <div>
                            <input type="radio" id={`${number}`} name="checkbox" ></input>
                            <label key={index} for={`${number}`}>{numeral(number).format('0,0')}</label>
                        </div>
                ))}
            </div>
            <button>
                <span>Nạp Ngay</span>
                <PhondataIcon width="15px" height="15px" />
            </button>

        </div>
    );
}
export default MobileChildDeposit;