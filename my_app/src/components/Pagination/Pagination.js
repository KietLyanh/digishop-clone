import React, { useEffect, useState } from "react";
import './Pagination.scss';
import { PaginationIcon } from "../icons/icons";


function Pagination({ start, pagination, setCurrentIndex, isOpen, timeoutRef, onChangeValue,color}) {
    const {page,totalPages,limit} = pagination;
    let pages = [];
    for (let i = start; i <= totalPages; i++) {
        pages.push(i);
    }
    const handleOnChangeValue = (newpage) => {
          onChangeValue(newpage)
    }
     color = color === "white" ? "#fff" : "#007aff";
    // const isOpen = false
    return (
        <>
            {isOpen ? <div className="pagination-circle">
                {
                    pages.map((child_page, index) => {
                        return (
                            <button
                                key={index}
                                onClick={() => {
                                    clearTimeout(timeoutRef);
                                    setCurrentIndex(child_page);
                                    
                                }}
                                style={{
                                    backgroundColor:`${child_page === page ? color : "#5c5c5c"}`,
                                    opacity:`${child_page === page ? "1" : "0.4"}`
                                }}
                            >
                            </button>
                        );
                    })
                }
            </div> :
                <div className="pagination-square">
                    <button
                    onClick={() => handleOnChangeValue(page - 1)}
                    className="pagination-square-pre pagination-square-icon"
                     disabled={page <= 1}
                    //  aria-disabled={prevDisabled}
                     style={{
                        pointerEvents: (page <= 1) ? 'none' : 'all'
                     }}
                    ><PaginationIcon
                        width="1rem"
                        height="1rem"
                    /></button>
                    {
                        pages.map((child_page, index) => {
                            return (
                                <button
                                    key={index}
                                    onClick={() => {
                                        onChangeValue(child_page)
                                    }}
                                    className={child_page === page ? "active" : ""}
                                >
                                    {child_page}
                                </button>
                            );
                        })
                    }
                    <button
                    className="pagination-square-next pagination-square-icon"
                    onClick={() => handleOnChangeValue(page + 1)}
                    disabled={page >= totalPages}
                    //  aria-disabled={prevDisabled}
                     style={{
                        pointerEvents: (page >= totalPages) ? 'none' : 'all'
                     }}
                    ><PaginationIcon
                    width="1rem"
                    height="1rem"
                     /></button>
                </div>
            }
        </>
    );
}
export default Pagination;
