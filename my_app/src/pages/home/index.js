import React from "react";
import './home.scss';
import LinkPage from "./LinkPage";
import Hotdeal from "./Hotdeal";
import Sims from "./Sims";
import PhoneData from "./PhoneData";

function home()
{
    return(
        <div className="body-content">
            <LinkPage/>
            <Hotdeal/>
            <Sims/>
            <PhoneData/>
        </div>
    );
}
export default home;