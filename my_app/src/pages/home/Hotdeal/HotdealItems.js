import React from 'react';
import './Hotdeal.scss';
function HotdealItems({ picture,icon, child_name, detail_treatment, child_price,displayImg,displayContent }) {
    return (
        <div className="hotdeal-row-box hotdeal-col_4 hotdeal-col_6">
            <div className="hotdeal-row-box-content">
                <h3>{child_name}</h3>
                <div className="hotdeal-row-box-content-img"
                    style={{
                        display:displayImg
                    }} >
                    <img src={picture} alt="" />
                </div>
                <div className="hotdeal-row-box-content-text"
                style={{
                    display:displayContent
                }}
                >
                  <p>
                    {detail_treatment}
                  </p>
                </div>
                <div className="hotdeal-row-box-content-text-price">
                  <h4>{child_price}</h4>
                  <p>đ/lượt</p>
                </div>
            </div>
            <div className="hotdeal-row-box-sold">
                <div className="hotdeal-row-box-sold-btn">
                    <button>
                        <span>Chi tiết</span>
                        {icon}
                    </button>
                    <button>Đăng ký</button>
                </div>
                <div className="hotdeal-row-box-soldout">
                    <div className="hotdeal-row-box-sell">
                        <span>Đã bán 6104</span>
                        <div className="hotdeal-row-box-sell-progress">
                            <div className="value"></div>
                        </div>
                    </div>
                    <div className="hotdeal-row-box-countdown">
                        <span>01</span>
                        <span>01</span>
                        <span>01</span>
                    </div>
                </div>
            </div>
            <span className="hotdeal-row-box-hot">HOT</span>
        </div>
    );
}
export default HotdealItems;
