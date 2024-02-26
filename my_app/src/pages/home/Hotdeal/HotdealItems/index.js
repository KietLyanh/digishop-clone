import React from 'react';
import './HotdealItem.scss';
import { NavLink } from 'react-router-dom';
import numeral from 'numeral';
function HotdealItems({ picture, icon, standard_name,id, detail_treatment, standard_price, displayImg, displayContent }) {
    return (
        <div className="hotdeal-row-box hotdeal-col_4 hotdeal-col_6">
            <div className="hotdeal-row-box-content">
                <h3>{standard_name}</h3>
                <div className="hotdeal-row-box-content-img"
                    style={{
                        display: displayImg
                    }} >
                    <img src={picture} alt="" />
                </div>
                <div className="hotdeal-row-box-content-text"
                    style={{
                        display: displayContent
                    }}
                >
                    <p>
                        {detail_treatment}
                    </p>
                </div>
                <div className="hotdeal-row-box-content-text-price">
                    <h4>{numeral(standard_price).format('0,0')}</h4>
                    <p>đ/lượt</p>
                </div>
            </div>
            <div className="hotdeal-row-box-sold">
                <div className="hotdeal-row-box-sold-btn">
                    <button>
                        <NavLink to={`/di-dong/${id}/${standard_name}`}>
                            <span>Chi tiết</span>
                            {icon}
                        </NavLink>
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
