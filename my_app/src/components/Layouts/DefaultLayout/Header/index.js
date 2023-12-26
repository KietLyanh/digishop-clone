import React, { useEffect, useState } from 'react';
import './Header.scss';
import Menu, { MenuItems } from './Menu';
import config from '~/config';
import homeLogo from './image/logo.png';
import mobileLogo from './image/1679798384615ic_didong2x.png';
import internetLogo from './image/1679798391140ic_internet2x.png';
import { StoreIcon, UserIcon, SearchIcon } from '~/components/icons/icons';
import Dropdownlist from '~/components/DropdownList/Dropdownlist';
import Search from '~/components/Search';
import Popup from '~/components/PopupDialog/popup';
function Header() {

    const [isHeaderVisible,setIsHeaderVisible] = useState(true);
    const handlesScroll = () => {
        setIsHeaderVisible(window.scrollY <= 0);
    }

    useEffect(() => {
        window.addEventListener('scroll',handlesScroll);

        return () => {
            window.removeEventListener('scroll',handlesScroll);
        }
    },[])

    const Datamobile = ['Sim số', 'Gói cước di động', 'Chuyển mạng giữ số', 'Nạp thẻ'];
    const Datainternet = [
        'Internet cáp quang',
        'Internet và Truyền hình',
        'Internet, Truyền Hình Và Di Động',
        'Truyền hình MyTV',
    ];

    return (
        <div className={`grid__full-width ${isHeaderVisible ? 'header-extinct' : 'header-fixed'}`} style={{ backgroundColor: '#fff' }}>
            <aside className="header-wrapper">
                <Menu>
                    <div className="header-content">
                        <MenuItems
                            to={config.routes.home}
                            title="home"
                            displayIcon="none"
                            displayImg="block"
                            displayTitle="none"
                            image={homeLogo}
                        />
                        <MenuItems
                            to={config.routes.mobile}
                            image={mobileLogo}
                            title="DI ĐỘNG"
                            displayIcon="none"
                            className="header-wrapper-nav-item-phone"
                            classNameImg="header-wrapper-nav-item-phone-img"
                            dropdown={<Dropdownlist list={Datamobile} height="170px" width="170px" />}
                        />
                        <MenuItems
                            to={config.routes.internetTV}
                            title="INTERNET - TRUYỀN HÌNH"
                            image={internetLogo}
                            displayIcon="none"
                            className="header-wrapper-nav-item-internet"
                            classNameImg="header-wrapper-nav-item-internet-img"
                            dropdown={<Dropdownlist list={Datainternet} height="170px" width="250px" />}
                            marginLeftDropdown="-22px"
                        />
                        <MenuItems
                            to={config.routes.store}
                            icon={<StoreIcon className="fa-w-20" width="20px" height="20px" />}
                            displayImg="none"
                            displayTitle="none"
                        />
                        <MenuItems
                            icon={<SearchIcon className="fa-w-16" width="20px" height="20px" />}
                            displayImg="none"
                            displayTitle="none"
                            search={<Search width="350px" />}
                        />
                        <MenuItems
                            icon={<UserIcon className="fa-w-14" width="20px" height="20px" />}
                            displayImg="none"
                            displayTitle="none"
                            popup={<Popup />}
                        />
                    </div>
                </Menu>
            </aside>
        </div>
    );
}
export default Header;
