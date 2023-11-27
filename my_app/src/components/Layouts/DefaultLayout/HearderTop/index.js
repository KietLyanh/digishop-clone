import React from 'react';
import './HeaderTop.scss';
import '~/components/GlobalStyles/GlobalStyles.scss';
import config from '~/config';
import { NavLink } from 'react-router-dom';

function HeaderTop() {
    return (
        <div className="grid__full-width" style={{backgroundColor:'#f2f2f2'}}>
            <section className="header-top-wrapper" >
                <NavLink to={config.routes.support}>
                    <div className="header-top-wrapper-link">
                        <div className="header-top-wrapper-icon">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g id="icon/hardware/headset_mic_24px">
                                    <path
                                        id="headset-mic-path"
                                        d="M8.57595 1.315C5.38929 1.52167 2.97595 4.315 2.97595 7.50834V11.9683C2.97595 13.075 3.86929 13.9683 4.97595 13.9683H5.64262C6.37595 13.9683 6.97595 13.3683 6.97595 12.635V9.96834C6.97595 9.235 6.37595 8.635 5.64262 8.635H4.30929V7.495C4.30929 4.935 6.28262 2.70834 8.83595 2.635C11.4826 2.56167 13.6426 4.675 13.6426 7.30167V8.635H12.3093C11.576 8.635 10.976 9.235 10.976 9.96834V12.635C10.976 13.3683 11.576 13.9683 12.3093 13.9683H13.6426V14.635H9.64262C9.27595 14.635 8.97595 14.935 8.97595 15.3017C8.97595 15.6683 9.27595 15.9683 9.64262 15.9683H12.976C14.0826 15.9683 14.976 15.075 14.976 13.9683V7.30167C14.976 3.855 12.0693 1.08834 8.57595 1.315Z"
                                        fill="black"
                                        fill-opacity="0.54"
                                    />
                                </g>
                            </svg>
                        </div>
                        <p>Hỗ trợ</p>
                    </div>
                </NavLink>
            </section>
        </div>
    );
}

export default HeaderTop;
