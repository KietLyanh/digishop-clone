import Button from '~/components/Button';
import './StorePage.scss';
import { StoreFilterIcon, StoreIconComputer, StoreIconEnvelop, StoreIconGlobal, StoreIconLiveChat, StoreIconMobile, StoreIconPhone, StoreIconSearch, StoreIconTele, StoreIconWoman } from '~/components/icons/icons';
function StorePage() {
    return (
        <div className="store__container grid__full-width">

            <div className="store__map grid__full-width">
                <div className="store__map-search col-md-4">
                    <input className="store__map-search-name" type='text' placeholder='Tên cửa hàng và địa điểm...'>
                    </input>

                    <div className="store__map-search-title">
                        <h5>Bộ lọc</h5>
                        <StoreFilterIcon className="store__icon" height="20px" width="20px" />
                    </div>
                    <div className="store__map-search-filter">
                        <input className="store__input" type='text' placeholder='Tỉnh/Thành Phố*'></input>
                        <input className="store__input" type='text' placeholder='Quận/Huyện*'></input>
                        <input className="store__input" type='text' placeholder='Cửa hàng/ Điểm giao dịch'></input>
                    </div>

                    <div className="store__map-search-btn">
                        <Button
                            text="ĐÓNG"
                            lv="lv4"
                            backgroundColor="#fff"
                            color="#3aa4f6"
                            border="#3aa4f6 solid 1px"
                            height="40px"
                            fontWeight="bold"
                        />
                    </div>
                </div>

                <div className="store__map-place col-md-8">
                    <h1>GOOGLE MAP</h1>
                </div>
            </div>

            <div className="store__sp">

                <h1>Các kênh hỗ trợ khách hàng</h1>

                <div className="store__sp-contact">

                    <div className='store__sp-contact-phone col-md-4'>
                        <h4>Tổng đài</h4>
                        <div>
                            <h4>Internet/Truyền hình MyTV</h4>
                            <Button lv="lv1" color="#fff" border="none" backgroundColor="#3aa4f6" text="1800 1166" height="35px" fontWeight="300" fontSize="1.5rem" />
                        </div>

                        <div>
                            <h4>Di Động VinaPhone</h4>
                            <Button lv="lv1" color="#fff" border="none" backgroundColor="#3aa4f6" text="1800 1091" height="35px" fontWeight="300" fontSize="1.5rem" />
                        </div>

                        <div className="store__sp-contact-phone-icon">
                            <StoreIconPhone className="icon" height="35px" width="35px" />
                        </div>

                    </div>
                    <div className='store__sp-contact-sms col-md-4'>
                        <div>
                            <h4>Email:</h4>
                            <Button lv="lv2" color="#fff" border="none" backgroundColor="#3aa4f6" text="cskh@vnpt.vn" height="35px" fontWeight="300" fontSize="1.5rem" />
                        </div>
                        <div>
                            <h4>Kết nối trực tiếp:</h4>
                            <div  className="store__sp-contact-sms-cnt">
                                <div className="store__sp-contact-sms-cnt-ico">
                                    <div className="icon">
                                        <StoreIconLiveChat height="30px" width="30px"/>
                                    </div>
                                    <h5>Livechat</h5>
                                </div>
                                <div className="store__sp-contact-sms-cnt-ico">
                                    <div className="icon">
                                        <StoreIconTele height="30px" width="30px"/>
                                    </div>
                                    <h5>Livechat</h5>
                                </div>
                            </div>
                        </div>


                        <div className="store__sp-contact-sms-icon">
                            <StoreIconEnvelop className="icon" height="35px" width="35px" />
                        </div>

                    </div>
                    <div className='store__sp-contact-internet col-md-4'>
                        <h4>Cộng đồng</h4>
                        <div>
                            <h4>Fanpage:</h4>
                            <Button lv="lv3" color="#fff" border="none" backgroundColor="#3aa4f6" text="facebook.com/vinaphonefan" height="35px" fontWeight="300" fontSize="1.5rem" />
                        </div>

                        <div className="store__sp-contact-internet-icon">
                            <StoreIconGlobal className="icon" height="35px" width="35px" />
                        </div>

                    </div>
                </div>

                <div className="store__sp-site" >
                    <div className="store__sp-site-item col-md-3">
                        <StoreIconComputer height="130px" width="130px" />
                        <h4>Ưu đãi - Khuyến mãi</h4>
                    </div>
                    <div className="store__sp-site-item col-md-3">
                        <StoreIconSearch height="130px" width="130px" />
                        <h4>Câu hỏi thường gặp</h4>
                    </div>
                    <div className="store__sp-site-item col-md-3">

                        <StoreIconWoman height="130px" width="130px" />
                        <h4>Live chat online</h4>
                    </div>
                    <div className="store__sp-site-item col-md-3">

                        <StoreIconMobile height="130px" width="130px" />
                        <h4>Chuyển mạng giữ số</h4>
                    </div>
                </div>

            </div>

        </div>
    );
}
export default StorePage;