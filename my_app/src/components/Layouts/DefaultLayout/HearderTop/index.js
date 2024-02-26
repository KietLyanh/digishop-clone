import React ,{useState,useEffect} from 'react';
import './HeaderTop.scss';
import '~/components/GlobalStyles/GlobalStyles.scss';
import config from '~/config';
import { NavLink } from 'react-router-dom';
import { HeaderIcon } from '~/components/icons/icons';

function HeaderTop() {
    const [isHeaderVisible,setIsHeaderVisible] = useState(true);
    const handlesScroll = () => {
        setIsHeaderVisible(window.scrollY <= 0);
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
