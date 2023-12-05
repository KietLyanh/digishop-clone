import React from "react";
import './home.scss';
import LinkPage from "./LinkPage";
import Hotdeal from "./Hotdeal";

function home()
{
    return(
        <div className="body-content">
            <LinkPage/>
            <Hotdeal/>
        </div>
    );
}
export default home;