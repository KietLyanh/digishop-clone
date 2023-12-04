import React from "react";
import './LinkPage.scss';
import Menu, { MenuItems } from "./Menu";
import mobilesim from "./image/1677835048065ic_chuyenmanggiuso.png";
import internet from "./image/1695201829478icon 1.png";
import mobiledata from "./image/1677835051833ic_goicuocdidong.png";
import card from "./image/1677835058428ic_napthe.png"
import routes from "~/config/routes";
import config from "~/config";
function LinkPage()
{
    return(
        <div className="home-header2-container">
            <Menu>
                <MenuItems 
                    title="Chọn sim số"
                    image={mobilesim}
                    to = {config.routes.mobileSim}
                />
                <MenuItems
                    title="Internet - Truyền hình"
                    image={internet}
                    to= {config.routes.internetTV}
                />
                <MenuItems
                    title="Gói cước di động"
                    image={mobiledata}
                    to={config.routes.mobile}
                />
                <MenuItems
                    title="Nạp thẻ"
                    image={card}
                    to={config.routes.cardReaload}
                />
            </Menu>
        </div>
    );
}
export default LinkPage;