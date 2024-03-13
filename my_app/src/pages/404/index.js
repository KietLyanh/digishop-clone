import logo from './images/not-found-2384304_1280.jpg'
import './NotFound.scss';

function NotFound() {

    return (
        <div className='bg__img'>
            <img
            className='bg__img-main'
            style={{
                width:"100%",
                height:"100%",
                
            }}
            src={logo} alt='opps'/>
        </div>
    );
}
export default NotFound;