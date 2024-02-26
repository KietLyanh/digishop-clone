import React from "react";
import './MobileChildItems.scss';
import imgAvt from "~/pages/MobilePage/images/1689580046873VD-17.jpg";
import numeral from "numeral";

function MobileChildItems({ all_packages, setValueOnChange }) {
    const list = [30,90, 180, 360];
    return (
        <div className="mobilechild__content-item co-lg-9">

            <img src={imgAvt} alt="opps"
                style={{
                    height: "200px",
                    width: "200px"
                }}
            />

            <div className="mobilechild__content-item-desc">
               
                    <div className="mobilechild__content-item-desc-name">
                        <h3>{all_packages?.packages_name}</h3>
                        <span>{all_packages?.packages_timelimit} ngày</span>
                    </div>
                <div className="mobilechild__content-item-desc-hotdeal"></div>
                <h4>{numeral(all_packages?.packages_price).format('0,0')}đ</h4>
                <div className="mobilechild__content-item-desc-features">

                    <p>{all_packages?.detail_treatment}</p>

                    <div className="mobilechild__content-item-desc-btn">
                    
                      {list.map((number,index) => (
                          <button 
                          key={index}
                          onClick={() => setValueOnChange(number)}
                          className={all_packages?.packages_timelimit === number  ? "active" : ""}
                      >{number} Ngày</button>
                      ))}

                    </div>

                    <button className="mobilechild__content-item-desc-sg">Đăng ký Ngay</button>
                </div>
            </div>

        </div>
    );
}
export default MobileChildItems;