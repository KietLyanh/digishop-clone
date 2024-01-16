import React from "react";
import './MobileItems.scss'
import '~/components/GlobalStyles/GlobalStyles.scss'
import {NavLink} from "react-router-dom";
import {MobilePageTitleIcon} from "~/components/icons";
import imgAvt from "./../images/1689580046873VD-17.jpg"
function MobileItems({name,price,detail})
{
    return(
        <div className='mobileitems-container card-2'>
            <div className='mobileitems-img'>
                <img src={imgAvt}
                style={
                    {
                        height:'130px',
                        width:'130px'
                    }
                }
                />
            </div>
            <div className='mobileitems-content'>
                <div className='mobileitems-info'>
                    <NavLink to = {`/di-dong/${name}`}>
                         <h3>{name}</h3>
                    </NavLink>
                    <NavLink to = {`/di-dong/${name}`}>
                        <h4>{price}đ</h4>
                    </NavLink>
                    <NavLink to = {`/di-dong/${name}`}>
                        <div className="mobileitems-info-p">
                            <p>{detail}</p>
                        </div>
                    </NavLink>
                    <NavLink to = {`/di-dong/${name}`} >
                    <div className='mobileitems-info-btn'>
                            <p>Xem thêm</p>
                            <MobilePageTitleIcon height='15px'
                            width='15px'
                            />
                    </div>
                    </NavLink>
                </div>
                <button> Đăng Ký </button>
            </div>
        </div>
    );
}
export default MobileItems;