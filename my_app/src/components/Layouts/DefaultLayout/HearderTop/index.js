import React ,{useState,useEffect} from 'react';
import './HeaderTop.scss';
import '~/components/GlobalStyles/GlobalStyles.scss';
import config from '~/config';
import { NavLink, useNavigate } from 'react-router-dom';
import { HeaderIcon, LogoutIcon } from '~/components/icons/icons';


function HeaderTop() {
    const navigate = useNavigate();
    const [isHeaderVisible,setIsHeaderVisible] = useState(true);
    const handlesScroll = () => {
        setIsHeaderVisible(window.scrollY <= 0);
    }
    const handleLogout = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('username');
        navigate('/');
    }
    useEffect(() => {
        window.addEventListener('scroll',handlesScroll)
        return () => {
            window.removeEventListener('scroll',handlesScroll)
        }
    },[])
    return (
        <div className={`grid__full-width  ${isHeaderVisible ? 'headerTop-extinct' : 'headerTop-fixed'}`} style={{backgroundColor:'#f2f2f2'}}>
            <section className="header-top-wrapper" >
                {localStorage.getItem('accessToken') ? <div className="header-top-title" >
                    <h1>Chào Mừng {localStorage.getItem('username')}</h1>
                    <div onClick={handleLogout}>
                        <LogoutIcon
                        className="header-top-logoutico"
                        height="20px"
                        width="20px"
                        />
                    </div>
                </div> : <></>}
                <NavLink to={config.routes.support}>
                    <div className="header-top-wrapper-link">
                        <div className="header-top-wrapper-icon">
                        <HeaderIcon/>
                        </div>
                        <p>Hỗ trợ</p>
                    </div>
                </NavLink>
            </section>
        </div>
    );
}

export default HeaderTop;
