import React, { useState } from "react";
import './Dropdownlist.scss';
// import { NavLink } from "react-router-dom";
import { HashLink as NavLink } from "react-router-hash-link";
function Dropdownlist({list,height,width,fontWeight,flexIndex,fontSize})
{
    // const data = ["Sim số", "Gói cước di động", "Chuyển mạng giữ số", "Nạp thẻ"];
    return(
        <div className="dropdown" style={{
            height: height,
            width: width
        }}>
            
           <div className="dropdown-list">
            {list.map((cp,index) => (
                <div className="dropdown-list-child"
                key={index}
                style={{
                    fontWeight:fontWeight,
                    flex:`0 0 ${flexIndex}`,
                    maxHeight: `${flexIndex}`,
                    fontSize:fontSize
                }}>
            <NavLink to={cp?.linkpage} smooth><span>{cp?.title}</span></NavLink>
                </div>
            ))}
            </div>
        </div>
    );
}
export default Dropdownlist;