import React from "react";
import './Dropdownlist.scss';
function Dropdownlist({list,height,width})
{
    // const data = ["Sim số", "Gói cước di động", "Chuyển mạng giữ số", "Nạp thẻ"];

    return(
        <div className="dropdown" style={{
            height: height,
            width: width
        }}>
           <span></span>
           <div className="dropdown-list">
            {list.map((cp,index) => {
                return <a className="dropdown-list-child card-4" key={index}>{cp}</a> 
            })}
            </div>
        </div>
    );
}
export default Dropdownlist;