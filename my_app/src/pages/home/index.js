import React from "react";
import './home.scss';
import LinkPage from "./LinkPage";
import Hotdeal from "./Hotdeal";
import Sims from "./Sims";

function home()
{
    return(
        <div className="body-content">
            <LinkPage/>
            <Hotdeal/>
            <Sims/>
        </div>
    );
}
export default home;