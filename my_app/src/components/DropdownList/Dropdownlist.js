import React, { useState } from "react";
import './Dropdownlist.scss';
function Dropdownlist({list,height,width,fontWeight,flexIndex,fontSize})
{
    // const data = ["Sim số", "Gói cước di động", "Chuyển mạng giữ số", "Nạp thẻ"];
    const [standardValue,setValue] = useState(list[0].title)
    console.log(list[0].title);
    const handleChange = (e) => {
        setValue(e);
        console.log(e);
    }
    return(
        <div className="dropdown" style={{
            height: height,
            width: width
        }}>
            
           <div className="dropdown-list">
            {list.map((cp,index) => {
                return <a className="dropdown-list-child " key={index}
                // onClick={handleChange(cp.title)}
                style={{
                    fontWeight:fontWeight,
                    flex:`0 0 ${flexIndex}`,
                    maxHeight: `${flexIndex}`,
                    fontSize:fontSize
                }}
                >{cp.title}</a>
            })}
            </div>
        </div>
    );
}
export default Dropdownlist;