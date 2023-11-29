import React from "react";
import './Pagination.scss';


function Pagination({totalChild,currentPage,childPerPage,setCurrentPage})
{
    let pages = [];
    for(let i = 0; i <= Math.ceil(totalChild/childPerPage)-1;i++)
    {
        pages.push(i);
    }
    return(
        <div className="pagination-list">
               {
        pages.map((page,index)=>{
            return (
                <button
                key={index}
                onClick={() => {
                    setCurrentPage(page)
                }}
                className={page === currentPage ? "active" : ""} 
                >
                </button>
            );
        })
      }
        </div>
    );
}
export default Pagination;
