import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import numeral from 'numeral';
import './PhoneData.scss';
import iconTitle from './images/1677836500566ico_didong.png';
import { PhondataIcon } from '~/components/icons/icons';
import listmobiledata from '~/api/listmobiledata';
function PhoneData() {
    const [phoneData,setPhoneData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const response = await listmobiledata.getAll();
            const jsonString = JSON.stringify(response);
            const dataArray = JSON.parse(jsonString);
            setPhoneData(dataArray);
        }
        fetchData();
        // console.log(phoneData[0].detail_treatment);
    },[])
    return (
        <div className="phonedata-container">
            <div className="phonedata-title">
                <img src={iconTitle} alt="opps" />
                <h2>Gói cước di động</h2>
                <NavLink>
                    <p>Gói DATA</p>
                </NavLink>
                <NavLink>
                    <p>Gói trả trước</p>
                </NavLink>
                <NavLink>
                    <p>Xem tất cả</p>
                </NavLink>
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
                                        <h4>{numeral(info.standard_price).format('0,0')}</h4>
                                        <p>đ/lượt</p>
                                    </div>
                                    <NavLink to={`/di-dong/${info.standard_id}/${info.standard_name}`}>
                                    <div className="phonedata-row-box-btn">
                                            <span>Xem thêm</span>
                                            <PhondataIcon />
                                    </div>
                                    </NavLink>
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
