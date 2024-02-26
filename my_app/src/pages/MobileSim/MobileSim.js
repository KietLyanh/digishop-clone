import './MobileSim.scss'
import { NavLink } from 'react-router-dom';
import { MobilePageTitleIcon } from '~/components/icons/icons';
import config from '~/config';
import MobileSimTab from './MobileSimTab';
import MobileSimList from './MobileSimList';

function MobileSim()
{
    
    return(
        <div className="mbsim__container">
             <div className='mbsim__linkpage'>
                <NavLink to={config.routes.home} className="mbsim__linkpage-ftitle">
                    <h4>Trang chủ</h4>
                </NavLink>
                <MobilePageTitleIcon height="15px" width="15px" />
                <h4>Sim số</h4>
            </div>

            <div className="mbsim__title">
                <h2>Sim số</h2>
                <h5>Chọn số</h5>
                <h5>Sim kèm gói cước</h5>
            </div>

            <div className="mbsim__main">
                <MobileSimTab/>
                <MobileSimList />
            </div>
        </div>
    );
}
export default MobileSim;