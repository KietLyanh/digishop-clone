import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Listmobilestandard from "~/api/listmobilestandard";
import { useParams } from "react-router-dom";
import MobileChildItems from "./MobileChildItems";
import MobileChildDeposit from "./MobileChildDeposit";
import MobileChildDetail from "./MobileChildDetail";
import config from "~/config";
import { MobilePageTitleIcon } from "~/components/icons";

function MobileChildPage() {

    const {name_package} = useParams();
    const [standard_package, setPackage] = useState(null);
    const [child_package, setChildPackage] = useState(null);
    const [filterChild,setFilterChild] = useState({date:null,standard_id:null});
    const [isDisabled,setIsDisabled] = useState(true);
    const [isActive,setIsActive] = useState();
    // xu ly du lieu standard package
    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await Listmobilestandard.getByName({name:name_package});
                if (response) {
                    // console.log(response);
                    setPackage(response);
                } else {
                    console.error("Invalid response:", response);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchdata();
    }, [])

    const setValueStandard = () => {
        console.log('dang mo');
        setIsActive(true);
        setIsDisabled(true)
    }

        // xu ly loc child package
    const setValueOnChange = (number) => {
            if(standard_package !== null)
            {
                setFilterChild({
                    date:number,
                    standard_id: standard_package.standard_id
                })
                console.log(isDisabled);
                setIsDisabled(false)
            }
        }

        // xu ly du lieu child package
    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response =  await Listmobilestandard.getChildByDate(filterChild);
                console.log(filterChild);
                if (response) {
                    console.log(response);
                    setChildPackage(response);
                } else {
                    console.error("Invalid response:", response);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
            
        }       
        fetchdata();
       
    },[filterChild])

    return (
            <div className="mobilechild__container">
                
                <div className="mobilechild__title">
                <NavLink to={config.routes.home} className="mobilechild__title-link">
                    <h4>Trang chủ</h4>
                </NavLink>
                <MobilePageTitleIcon height="15px" width="15px" />
                <NavLink to={config.routes.mobile} className="mobilechild__title-link">
                    <h4>Di động</h4>
                </NavLink>
                <MobilePageTitleIcon height="15px" width="15px" />
                <NavLink to={config.routes.mobile} className="mobilechild__title-link">
                    <h4>Gói trả trước</h4>
                </NavLink>
                <MobilePageTitleIcon height="15px" width="15px" />
                <h4>Chi tiết gói</h4>
                </div>

                <div className="mobilechild__content">

                    <div className="mobilechild__content-items">

                        {/* MobileChildItems */}
                        <MobileChildItems
                        isDisabled={isDisabled}
                        standard_package={standard_package}
                        child_package={child_package}
                        setValueStandard={setValueStandard}
                        setValueOnChange={setValueOnChange}
                        />

                        {/* MobileChildDeposit */}
                        <MobileChildDeposit/>

                    </div>




                    {/* MobileChildDetail */}
                    <MobileChildDetail/>

                    


                </div>

            </div>
    );
}
export default MobileChildPage;

//  {/* <p>
//             {standard_package === null
//                 ? "No data available"
//                 : standard_package.standard_price || "No price available"}
//         </p> */}
//         <h1>jfkjdfkj {standard_package?.standard_price}</h1>
//         {/* {timelimit.map((number,index) => (
//             <button key={index} >{number}</button>
//         ))} */}
//         <button onClick={() => setValueStandard()}
//         // disabled={isDisabled}
//         style={{
//             pointerEvents: isDisabled ? "none" :"all"
//         }}
//         >30</button>
//         <button onClick={() => setValueOnChange(90)}>90</button>
//         <button onClick={() => setValueOnChange(180)}>180</button>
//         <button onClick={() => setValueOnChange(360)}>360</button>
//         {isDisabled ? <p>{standard_package?.standard_name}</p> : <p>{child_package?.child_name}</p>}