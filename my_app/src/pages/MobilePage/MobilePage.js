import React, { useState } from 'react';

import './MobilePage.scss';
import { NavLink } from 'react-router-dom';
import { MobilePageTitleIcon } from '~/components/icons';
import iconTitle from '~/pages/home/PhoneData/images/1677836500566ico_didong.png'
import config from '~/config';
import DropdownList from '~/components/DropdownList';
import MobileItems from './MobileItems';
function MobilePage()
{
    // xử lý dropdownlist
    const data = ["Tìm kiếm gói cước theo", "Giá từ thấp - cao", "Giá từ cao - thấp"];
    const [isDisplay,setIsDisplay] = useState(false);
    const handleOnclick = () => {
        setIsDisplay(!isDisplay);
    }

    return (
        <div className="mobile-container">
            <div className='mobile-linkpage'>
                <NavLink to={config.routes.home} className="mobile-linkpage-ftitle">
                    <h4>Trang chủ</h4>
                </NavLink>
                <MobilePageTitleIcon height="15px" width="15px"/>
                <h4>Di động</h4>
            </div>
            <div className='mobile-title'>
                <img src={iconTitle} alt="opps" />
                <h2>Di động</h2>
            </div>
            <div className='mobile-features'>
                {/* xử lý phần header */}
                <div className='mobile-features-header'>
                    <h4>Gói trả trước</h4>
                    <h4>Gói DATA</h4>
                    <button onClick={handleOnclick}>
                        <p>Tìm kiếm gói cước theo</p>
                        <MobilePageTitleIcon height="15px" width="15px"/>
                    </button>
                    {isDisplay ? 
                        <DropdownList
                            list={data}
                            height="250px"
                            width="250px"
                        />
                     : <></>}
                </div>
                

                {/* xử lý phần tìm kiếm */}

                <div className='mobile-features-search'>
                    <h3>Tìm kiếm gói cước theo tên gói cước và số thuê bao</h3>
                    <input></input>
                    <button>XÁC NHẬN</button>
                </div>

            </div>
            <div className='mobile-display'>
            {/* items */}
            <MobileItems/>
            {/* phân trang */}
            </div>
        </div>
    );
}
export default MobilePage;