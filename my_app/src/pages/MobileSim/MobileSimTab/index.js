import Button from '~/components/Button';
import './MobileSimTab.scss';

const listsub = [
    "Tất cả",
    "Trả trước",
    "Trả sau"
]
const listnumber = [
    "091","094","088","081","082","083","084","085"
]

const listcharge = [
    "Tất cả",
    "0",
    "100,000",
    "150,000",
    "200,000",
    "400,000",
    "500,000",
    "600,000",
    "800,000",
    "1,500,000"
]
function MobileSimTab() {
    return (
        <div className="mbsim__tab col-md-3">
            <div className="mbsim__tab-sub">
                <h3>Loại thuê bao</h3>
                <div className="mbsim__tab-sub-items">
                    {
                        listsub.map((item,index) => (
                            <div key={index} className="mbsim__tab-sub-item">
                                <input type='radio' name='check' id={`${item}`}/>
                                <label for={`${item}`}>{item}</label>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="mbsim__tab-number">
            <h3>Theo đầu số</h3>
                <div className="mbsim__tab-number-items">
                    {
                        listnumber.map((item,index) => (
                            <div key={index} className="mbsim__tab-number-item">
                                <input type='radio' name='checkbox' id={`${item}`}/>
                                <label for={`${item}`}>{item}</label>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="mbsim__tab-charge">
            <h3>Cước cam kết</h3>
                <div className="mbsim__tab-charge-items">
                    {
                        listcharge.map((item,index) => (
                            <button key={index} className="mbsim__tab-charge-item">
                                {item}
                            </button>
                        ))
                    }
                </div>
            </div>
            
        </div>
    );
}
export default MobileSimTab;