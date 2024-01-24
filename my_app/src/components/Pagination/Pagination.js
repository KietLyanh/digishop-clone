import React, { useEffect, useState } from "react";
import './Pagination.scss';
import { PaginationIcon } from "../icons";


function Pagination({ start, pagination, setCurrentIndex, isOpen, timeoutRef, onChangeValue}) {
    const {page,totalPages,limit} = pagination;
    let pages = [];
    for (let i = start; i <= totalPages; i++) {
        pages.push(i);
    }
    const handleOnChangeValue = (newpage) => {
          onChangeValue(newpage)
    }
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
                                    setCurrentIndex(child_page);
                                    clearTimeout(timeoutRef);
                                }}
                                className={child_page === page ? "active" : ""}
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
