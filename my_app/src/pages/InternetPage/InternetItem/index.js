import React from "react";
import './InternetItem.scss';
import numeral from "numeral";
import { PhondataIcon } from "~/components/icons/icons";



function InternetItem({ title, detail, price }) {
  return (
    <div className="internet-row-item internet-col-3">
      <div className="internet-row-item-box">
        <div className="internet-row-item-border"></div>
        <div className="internet-row-item-top">
          <h3>{title}</h3>
        </div>
        <div className="internet-row-item-body">
          <div className="internet-row-item-content">
            <p>
              {detail}
            </p>
          </div>
          <div className="internet-row-item-price">
            <h4>{numeral(price).format('0,0')}</h4>
            <span>đ/ 1 tháng</span>
          </div>
        </div>
        <div className="internet-row-item-btn">
          <button>
            <span>Chi tiết</span>
            <PhondataIcon width="15px" height="15px" />
          </button>
          <button>Đăng ký</button>
        </div>
      </div>
    </div>
  );
}
export default InternetItem;