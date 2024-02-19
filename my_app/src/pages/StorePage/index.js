import Button from '~/components/Button';
import './StorePage.scss';
import GlobalStyles from '~/components/GlobalStyles';
import { StoreFilterIcon } from '~/components/icons';
function StorePage()
{
    return (
        <div className="store__container grid__full-width">

            <div className="store__map">
                <div className="store__map-search col-md-4">
                    <input className="store__map-search-name" type='text' placeholder='Tên cửa hàng và địa điểm...'>
                    </input>

                    <div className="store__map-search-title">
                        <h5>Bộ lọc</h5>
                        <StoreFilterIcon className="store__icon" height="20px" width="20px"/>
                    </div>
                    <div className="store__map-search-filter">
                        <input type='text'  placeholder='Tỉnh/Thành Phố*'></input>
                        <input type='text' placeholder='Quận/Huyện*'></input>
                        <input type='text' placeholder='Cửa hàng/ Điểm giao dịch'></input>
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

                <div className="store__map-place col-md-8">This is Map!</div>
            </div>

            <div className="store__contact"></div>

        </div>
    );
}
export default StorePage;