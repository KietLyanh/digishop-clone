import React, { useEffect, useState } from "react";
import MobileItems from "../MobileItems";
import './MobileBySearch.scss';
import Pagination from "~/components/Pagination/Pagination";
import Listmobilestandard from "~/api/listmobilestandard";
import { Exception } from "sass";


function MobileBySearch({valueBySearch}) {
    const pagination = {
        page: 1,
        totalPages: 1,
        limit: null
    }
    // console.log(valueBySearch);
    const [mobileSearch,setMobileSearch] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await Listmobilestandard.getAllPackages({keyword:valueBySearch});
                if(response)
                {
                    // console.log(response);
                    setMobileSearch(response);
                }
                else{
                    console.error("Invalid response:", response);
                }
            }
            catch(error){
                console.log(error);
            }

        }
        fetchData()

    },[valueBySearch])
    return(
        <div className="mobile-search">
            <div className="mobile-search">
                {mobileSearch?.map((ms,index) => (
                    <MobileItems
                    isOpen={true}
                    key={index}
                    id={ms.packages_id}
                    name={ms.packages_name}
                    price={ms.packages_price}
                    detail={ms.detail_treatment}
                    />
                ))}
            </div>

            <Pagination
            start={1}
            pagination={pagination}
            />
        </div>
    );
}
export default MobileBySearch;