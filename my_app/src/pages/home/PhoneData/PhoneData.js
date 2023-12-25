import React, { useEffect, useState } from 'react';
import './PhoneData.scss';
import iconTitle from './images/1677836500566ico_didong.png';
import { PhondataIcon } from '~/components/icons';
function PhoneData() {
    const [phoneData,setPhoneData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("http://localhost:9999/backend-forReact/listmobiledata");
            if(!response.ok)
            {
                throw new Error("network response was not ok");
            }
            const result = await response.json();
            const jsonString = JSON.stringify(result);
            const dataArray = JSON.parse(jsonString);
            setPhoneData(dataArray);
        }
        fetchData();
    },[])
    return (
        <div className="phonedata-container">
            <div className="phonedata-title">
                <img src={iconTitle} alt="opps" />
                <h2>Gói cước di động</h2>
                <a>Gói DATA</a>
                <a>Gói trả trước</a>
                <a>Xem tất cả</a>
            </div>

            <div className="phonedata-row">
                <div
                    className="phonedata-row-res"
                    style={{
                        display: 'flex',
                        height: '100%',
                        marginBottom: '20px',
                        maxHeight: '100%',
                        flexWrap:'wrap',
                        overflow:'hidden'
                    }}
                >
                   {phoneData.slice(0,8).map((info,index) => (
                    <div className="col-3-phonedata col-3-phonedataHeight" key={index}>
                        <div className="phonedata-row-box">
                            <div className="phonedata-row-box-item">
                                <div className="phonedata-row-box-content">
                                    <div className="phonedata-row-box-title">
                                        <h3>{info.standard_name}</h3>
                                    </div>
                                    <div className="phonedata-row-box-desc">
                                        <p>
                                           {info.detail_treatment}
                                        </p>
                                    </div>
                                    <div className="phonedata-row-box-price">
                                        <h4>{info.standard_price}</h4>
                                        <p>đ/lượt</p>
                                    </div>
                                    <div className="phonedata-row-box-btn">
                                        <span>Đăng ký</span>
                                        <PhondataIcon />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   ))}
                </div>
            </div>
        </div>
    );
}
export default PhoneData;
