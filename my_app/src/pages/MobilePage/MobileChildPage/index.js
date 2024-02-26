import React, { useEffect, useState } from "react";
import "./MobileChildPage.scss"
import { NavLink } from "react-router-dom";
import getPackagesByDate from "~/api/listmobilestandard";
import { useParams } from "react-router-dom";
import MobileChildItems from "./MobileChildItems";
import MobileChildDeposit from "./MobileChildDeposit";
import MobileChildDetail from "./MobileChildDetail";
import config from "~/config";
import { MobilePageTitleIcon } from "~/components/icons/icons";
import Listmobilestandard from "~/api/listmobilestandard";

function MobileChildPage() {

    const { package_id, package_name } = useParams();
    // console.log(package_id,date);
    const [allPackages, setAllPackage] = useState(null);
    const [filterChild, setFilterChild] = useState({ package_id: package_id, package_name: package_name });
    // console.log(filterChild);
    // xu ly du lieu all package
    useEffect(() => {
        const fetchdata = async () => {
            try {
                const response = await Listmobilestandard.getPackagesByDate(filterChild);
                if (response) {
                    // console.log(response);
                    setAllPackage(response);
                } else {
                    console.error("Invalid response:", response);
                }
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchdata();
    }, [filterChild])

    // xu ly loc child package
    const setValueOnChange = (number) => {
        let name;
        let n = package_id.length;
        let word = package_id.replace(package_id.substring(n - 2, n), '');
        switch (number) {
            case 30:
                name = `${word}`;
                break;
            case 90:
                name = `3${word}`;
                break;
            case 180:
                name = `6${word}`;
                break;

            case 360:
                name = `12${word}`;
                break;

        }
        setFilterChild({
            ...filterChild,
            package_name: name
        })
    }



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
                        all_packages={allPackages}
                        setValueOnChange={setValueOnChange}
                    />

                    {/* MobileChildDeposit */}
                    <MobileChildDeposit />

                </div>




                {/* MobileChildDetail */}
                <MobileChildDetail
                    allPackages={allPackages}
                />
            </div>

            <div className="mobilechild__content-res">

                {/* MobileChildItems */}
                <MobileChildItems
                    all_packages={allPackages}
                    setValueOnChange={setValueOnChange}
                />

                {/* MobileChildDetail */}
                <MobileChildDetail
                    allPackages={allPackages}
                />

                {/* MobileChildDeposit */}
                <MobileChildDeposit />
            </div>

        </div >
    );
}
export default MobileChildPage;

