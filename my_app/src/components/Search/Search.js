import React from "react";
import './Search.scss';
function Search({width})
{
    return(
        <div className="search-container"
        style={{
            width:width
        }}>
           <input  placeholder="Tìm kiếm" type="text"/> 
        </div>
    );
}
export default Search;