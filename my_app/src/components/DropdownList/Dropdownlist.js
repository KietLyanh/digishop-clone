import React, { useState } from "react";
import './Dropdownlist.scss';
function Dropdownlist({list,height,width,fontWeight,flexIndex,fontSize})
{
    // const data = ["Sim số", "Gói cước di động", "Chuyển mạng giữ số", "Nạp thẻ"];
    return(
        <div className="dropdown" style={{
            height: height,
            width: width
        }}>
            
           <div className="dropdown-list">
            {list.map((cp,index) => {
                return <a className="dropdown-list-child " key={index}
                style={{
                    fontWeight:fontWeight,
                    flex:`0 0 ${flexIndex}`,
                    maxHeight: `${flexIndex}`,
                    fontSize:fontSize
                }}
                >{cp}</a>
            })}
            </div>
        </div>
    );
}
export default Dropdownlist;