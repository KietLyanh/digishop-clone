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
function Header({setOpenOverlay}) {

    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    const handlesScroll = () => {
        setIsHeaderVisible(window.scrollY <= 0);
    }

    useEffect(() => {
        window.addEventListener('scroll', handlesScroll);

        return () => {
            window.removeEventListener('scroll', handlesScroll);
        }
    }, [])

    const Datamobile = [{
        title: 'Sim số',
        linkpage: config.routes.mobileSim
    },
    {
        title: 'Gói cước di động',
        linkpage: config.routes.mobile
    },
    {
        title: 'Chuyển mạng giữ số',
        linkpage: ''
    },

    {
        title: 'Nạp thẻ',
        linkpage: ''
    }];
    const Datainternet = [
        {
            title: 'Internet cáp quang',
            linkpage: "/internet-tv#cap-quang"
        },
        {
            title: 'Internet và Truyền hình',
            linkpage: "/internet-tv#internet-truyenhinh"
        },
        {
            title:  'Internet, Truyền Hình Và Di Động',
            linkpage: "/internet-tv#internet-truyenhinh-didong"
        },
        {
            title:  'Truyền hình MyTV',
            linkpage: "/internet-tv#truyehinh-tv"
        }
    ];

    return (
        <>
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
                                popupOpen={null}
                            />
                            <MenuItems
                                to={config.routes.mobile}
                                image={mobileLogo}
                                title="DI ĐỘNG"
                                displayIcon="none"
                                className="header-wrapper-nav-item-phone"
                                classNameImg="header-wrapper-nav-item-phone-img"
                                dropdown={<Dropdownlist list={Datamobile} height="170px" width="170px" flexIndex='25%' fontWeight='600' fontSize='1.4rem' />}
                                popupOpen={null}
                            />
                            <MenuItems
                                to={config.routes.internetTV}
                                title="INTERNET - TRUYỀN HÌNH"
                                image={internetLogo}
                                displayIcon="none"
                                className="header-wrapper-nav-item-internet"
                                classNameImg="header-wrapper-nav-item-internet-img"
                                dropdown={<Dropdownlist list={Datainternet} height="170px" width="250px" flexIndex='25%' fontWeight='600' fontSize='1.4rem' />}
                                marginLeftDropdown="-22px"
                                popupOpen={null}
                            />
                            <MenuItems
                                to={config.routes.store}
                                icon={<StoreIcon className="fa-w-20" width="20px" height="20px" />}
                                displayImg="none"
                                displayTitle="none"
                                popupOpen={null}
                            />
                            <MenuItems
                                icon={<SearchIcon className="fa-w-16" width="20px" height="20px" />}
                                displayImg="none"
                                displayTitle="none"
                                search={<Search width="350px" />}
                                popupOpen={null}
                            />
                            <MenuItems
                                icon={<UserIcon className="fa-w-14" width="20px" height="20px" />}
                                displayImg="none"
                                displayTitle="none"
                                popupOpen={setOpenOverlay}
                           
                            />
                        </div>
                    </Menu>
                </aside>
            </div>

            <div class="header-wrapper-fix" style={{display:"none"}}>
                <div class="container-header">
                    <div class="header-content">
                        <div class="header-content-closebtn">
                            <div class="header-content-Mainbtn"></div>
                        </div>
                        <a class="header-wrapper-nav-item-logo" href="/">
                            <img src={homeLogo} alt="oops" />
                        </a>
                     
                         <MenuItems
                             icon={<UserIcon className="fa-w-14" width="20px" height="20px" />}
                             displayImg="none"
                             displayTitle="none"
                             popupOpen={setOpenOverlay}
                             
                         />
                    </div>
                </div>
            </div>
        </>
    );
}
export default Header;