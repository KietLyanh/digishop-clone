import React from "react";
import './MobileChildPage.scss';
import imgAvt from "~/pages/MobilePage/images/1689580046873VD-17.jpg";

function MobileChildItems({ isDisabled, standard_package, child_package, setValueStandard, setValueOnChange }) {
    const list = [90, 180, 360];
    return (
        <div className="mobilechild__content-item co-lg-9">

            <img src={imgAvt} alt="opps"
            style={{
                height:"200px",
                width:"200px"
            }}
            />

            <div className="mobilechild__content-item-desc">
                {isDisabled ?
                    <div className="mobilechild__content-item-desc-name">
                        {/* dung ? de check xem co data hay khong */}
                        <h3>{standard_package?.standard_name}</h3>
                        <span>{standard_package?.standard_timelimit} ngày</span>
                    </div>
                    :
                    <div className="mobilechild__content-item-desc-name">
                        <h3>{child_package?.child_name}</h3>
                        <span>{child_package?.child_timeLimit} ngày</span>
                    </div>}
                <div className="mobilechild__content-item-desc-hotdeal"></div>
                {isDisabled ? <h4>{ standard_package?.standard_price }đ</h4> : <h4>{ child_package?.child_price }đ</h4>}
                <div className="mobilechild__content-item-desc-features">

                    <p>{ standard_package?.detail_treatment }</p>

                    <div className="mobilechild__content-item-desc-btn">
                        <button onClick={() => setValueStandard()}
                        disabled={isDisabled}
                        // style={{
                        //     pointerEvents: isDisabled ? "none" : "all"
                        // }}
                        className={ isDisabled ? "active" : ""}
                        >30 Ngày</button>
                        {list.map((number, index) => (
                            <button key={index}
                             onClick={() => setValueOnChange(number)}
                             className={child_package?.child_timeLimit === number ? "active" : ""}
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