import React from "react";
import './MobileItems.scss'
import {NavLink} from "react-router-dom";
import {MobilePageTitleIcon} from "~/components/icons";
import imgAvt from "./../images/1689580046873VD-17.jpg"
function MobileItems({name,price,detail})
{
    return(
        <div className='mobileitems-container'>
            <div className='mobileitems-img'>
                <img src={imgAvt}
                style={
                    {
                        height:'150px',
                        width:'150px'
                    }
                }
                />
            </div>
            <div className='mobileitems-content'>
                <div className='mobileitems-info'>
                    <div className='mobileitems-info-name'>{name}</div>
                    <div className='mobileitems-info-price'>{price}</div>
                    <div className='mobileitems-info-detail'>{detail}</div>
                    <div className='mobileitems-info-btn'>
                        <NavLink >
                            <p>Xem thêm</p>
                            <MobilePageTitleIcon height='15px'
                            width='15px'/>
                        </NavLink>
                    </div>
                </div>
                <button> Đăng Ký </button>
            </div>
        </div>
    );
}
export default MobileItems;