import React from "react";
import './InternetPage.scss';
import InternetItem from "./InternetItem";
import { listInternet } from "~/api/listInternetClone";
import config from "~/config";
import { NavLink } from "react-router-dom";
import { MobilePageTitleIcon } from "~/components/icons";
import Pagination from "~/components/Pagination/Pagination";
import ico_capquang from "./images/ico_capquang.png";
import ico_internetTH from "./images/16ico_internet truyen hinh.png";
import ico_internetTV from "./images/ico_truyenhinhtv.png";
import ico_mobile from "./images/ico_internet di dong.png";
function InternetPage() {
    // function handleResize() {
    //     // Lấy độ rộng của cửa sổ trình duyệt
    //     var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    
    //     // In ra console để kiểm tra
    //     console.log("Độ rộng cửa sổ trình duyệt là: " + windowWidth + " pixels");
    // }
    
    // // Gắn sự kiện resize vào cửa sổ
    // window.addEventListener('resize', handleResize);
    
    // // Gọi hàm handleResize khi trang được tải lần đầu
    // handleResize();
    return (
        <div className="internet__container">

            <div className='internet__linkpage'>
                <div className="internet__linkpage-title">
                    <NavLink to={config.routes.home} className="internet__linkpage-ftitle">
                        <h4>Trang chủ</h4>
                    </NavLink>
                    <MobilePageTitleIcon height="15px" width="15px" />
                    <h4>Internet - Truyền hình</h4>
                </div>
                <div class="internet__linkpage-route">
                    <NavLink>
                        <p>Xem tất cả</p>
                    </NavLink>
                    <MobilePageTitleIcon height="15px" width="15px" />
                </div>
            </div>

            <section className="internet__item">

                <div className='internet__item-title'>
                    <img src={ico_capquang} alt="opps" />
                    <h2>Internet Cáp Quang</h2>
                </div>

                <div className="internet__item-box">
                    {
                        listInternet.map((info_box,index) => (
                            <InternetItem
                            key={index}
                            title={info_box.title}
                            detail={info_box.detail}
                            price={info_box.price}
                            />
                        ))
                    }
                    {/* <Pagination
                    isOpen={true}
                    /> */}
                </div>

            </section>

            <section className="internet__item">

                <div className='internet__item-title'>
                    <img src={ico_internetTH} alt="opps" />
                    <h2>Internet Cáp Quang</h2>
                </div>

                <div className="internet__item-box">
                    {
                        listInternet.map((info_box,index) => (
                            <InternetItem
                            key={index}
                            title={info_box.title}
                            detail={info_box.detail}
                            price={info_box.price}
                            />
                        ))
                    }
                    {/* <Pagination
                    isOpen={true}
                    /> */}
                </div>

            </section>

            <section className="internet__item">

                <div className='internet__item-title'>
                    <img src={ico_mobile} alt="opps" />
                    <h2>Internet Cáp Quang</h2>
                </div>

                <div className="internet__item-box">
                    {
                        listInternet.map((info_box,index) => (
                            <InternetItem
                            key={index}
                            title={info_box.title}
                            detail={info_box.detail}
                            price={info_box.price}
                            />
                        ))
                    }
                    {/* <Pagination
                    isOpen={true}
                    /> */}
                </div>

            </section>

            <section className="internet__item">

                <div className='internet__item-title'>
                    <img src={ico_internetTV} alt="opps" />
                    <h2>Internet Cáp Quang</h2>
                </div>

                <div className="internet__item-box">
                    {
                        listInternet.map((info_box,index) => (
                            <InternetItem
                            key={index}
                            title={info_box.title}
                            detail={info_box.detail}
                            price={info_box.price}
                            />
                        ))
                    }
                    {/* <Pagination
                    isOpen={true}
                    /> */}
                </div>

            </section>

        </div>
    );
}
export default InternetPage;