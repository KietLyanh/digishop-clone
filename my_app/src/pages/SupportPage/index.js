import './SupportPage.scss';
import Button from '~/components/Button';
import Banner from './images/gdbs_banner.png'
import { StoreFilterIcon, StoreIconComputer, StoreIconEnvelop, StoreIconGlobal, StoreIconLiveChat, StoreIconMobile, StoreIconPhone, StoreIconSearch, StoreIconTele, StoreIconWoman } from '~/components/icons/icons';
function SupportPage()
{
    return (
        <div className="support__container grid__full-width">

            <div className="support__img grid__full-width">
               <img src={Banner} alt='opps'/>
            </div>

            <div className="support__sp">

                <h1>Các kênh hỗ trợ khách hàng</h1>

                <div className="support__sp-contact">

                    <div className='support__sp-contact-phone col-md-4'>
                        <h4>Tổng đài</h4>
                        <div>
                            <h4>Internet/Truyền hình MyTV</h4>
                            <Button lv="lv1" color="#fff" border="none" backgroundColor="#3aa4f6" text="1800 1166" height="35px" fontWeight="300" fontSize="1.5rem" />
                        </div>

                        <div>
                            <h4>Di Động VinaPhone</h4>
                            <Button lv="lv1" color="#fff" border="none" backgroundColor="#3aa4f6" text="1800 1091" height="35px" fontWeight="300" fontSize="1.5rem" />
                        </div>

                        <div className="support__sp-contact-phone-icon">
                            <StoreIconPhone className="icon" height="35px" width="35px" />
                        </div>

                    </div>
                    <div className='support__sp-contact-sms col-md-4'>
                        <div>
                            <h4>Email:</h4>
                            <Button lv="lv2" color="#fff" border="none" backgroundColor="#3aa4f6" text="cskh@vnpt.vn" height="35px" fontWeight="300" fontSize="1.5rem" />
                        </div>
                        <div>
                            <h4>Kết nối trực tiếp:</h4>
                            <div  className="support__sp-contact-sms-cnt">
                                <div className="support__sp-contact-sms-cnt-ico">
                                    <div className="icon">
                                        <StoreIconLiveChat height="30px" width="30px"/>
                                    </div>
                                    <h5>Livechat</h5>
                                </div>
                                <div className="support__sp-contact-sms-cnt-ico">
                                    <div className="icon">
                                        <StoreIconTele height="30px" width="30px"/>
                                    </div>
                                    <h5>Livechat</h5>
                                </div>
                            </div>
                        </div>


                        <div className="support__sp-contact-sms-icon">
                            <StoreIconEnvelop className="icon" height="35px" width="35px" />
                        </div>

                    </div>
                    <div className='support__sp-contact-internet col-md-4'>
                        <h4>Cộng đồng</h4>
                        <div>
                            <h4>Fanpage:</h4>
                            <Button lv="lv3" color="#fff" border="none" backgroundColor="#3aa4f6" text="facebook.com/vinaphonefan" height="35px" fontWeight="300" fontSize="1.5rem" />
                        </div>

                        <div className="support__sp-contact-internet-icon">
                            <StoreIconGlobal className="icon" height="35px" width="35px" />
                        </div>

                    </div>
                </div>


            </div>

        </div>
    );
}
export default SupportPage;