import React, { useEffect, useRef, useState } from "react";
import './InternetPage.scss';
import InternetItem from "./InternetItem";
import { listInternet } from "~/api/listInternetClone";
import config from "~/config";
import { NavLink } from "react-router-dom";
import { MobilePageTitleIcon } from "~/components/icons/icons";
import Pagination from "~/components/Pagination/Pagination";
import ico_capquang from "./images/ico_capquang.png";
import ico_internetTH from "./images/16ico_internet truyen hinh.png";
import ico_internetTV from "./images/ico_truyenhinhtv.png";
import ico_mobile from "./images/ico_internet di dong.png";
function InternetPage() {

    let widthDefault = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    let itemIndex;
    if (widthDefault <= 600) {
       itemIndex = 1;
    }
    else if (widthDefault <= 800) {
        itemIndex = 2;
    }
    else {
        itemIndex = 3;
    }
    const [currentItem, setCurrentItem] = useState(itemIndex);

    useEffect(() => {
        function handleResize() {
            // Lấy độ rộng của cửa sổ trình duyệt
            let windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

            // In ra console để kiểm tra

            if (windowWidth <= 600) {
                setCurrentItem(1);
            }
            else if (windowWidth <= 800) {
                
                setCurrentItem(2);
            }
            else {
                setCurrentItem(3);
            }
        }

        // Gắn sự kiện resize vào cửa sổ
        window.addEventListener('resize', handleResize);

        // Gọi hàm handleResize khi trang được tải lần đầu
        return () => { window.removeEventListener('resize', handleResize) }
    }, [])
    const [currentIndexFirst, setCurrentIndexFirst] = useState(0);
    const [currentIndexSecond, setCurrentIndexSecond] = useState(0);
    const [currentIndexThird, setCurrentIndexThird] = useState(0);
    const [currentIndexFour, setCurrentIndexFour] = useState(0);
    const totalItem = listInternet.length - currentItem;

    const pagination = [
        {
            page: currentIndexFirst,
            totalPages: totalItem
        },
        {
            page: currentIndexSecond,
            totalPages: totalItem
        },
        {
            page: currentIndexThird,
            totalPages: totalItem
        },
        {
            page: currentIndexFour,
            totalPages: totalItem
        }
    ]

   

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

            <section id="cap-quang" className="internet__item" >

                <div className='internet__item-title'>
                    <img src={ico_capquang} alt="opps" />
                    <h2>Internet Cáp Quang</h2>
                </div>

                <div className="internet__item-box"
                    style={{
                        transform: `translate3d(${-currentIndexFirst * (100 / currentItem)}%, 0, 0)`
                    }}
                >
                    {
                        listInternet.map((info_box, index) => (
                            <InternetItem
                                key={index}
                                title={info_box.title}
                                detail={info_box.detail}
                                price={info_box.price}
                            />
                        ))
                    }
                </div>

                <Pagination
                    start={0}
                    isOpen={true}
                    pagination={pagination[0]}
                    setCurrentIndex={setCurrentIndexFirst}
                    timeoutRef={null}
                    color="blue"
                />

            </section>

            <section id="internet-truyenhinh" className="internet__item">

                <div className='internet__item-title'>
                    <img src={ico_internetTH} alt="opps" />
                    <h2>Internet Và Truyền Hình</h2>
                </div>

                <div className="internet__item-box"
                    style={{
                        transform: `translate3d(${-currentIndexSecond * (100 / currentItem)}%, 0, 0)`
                    }}>
                    {
                        listInternet.map((info_box, index) => (
                            <InternetItem
                                key={index}
                                title={info_box.title}
                                detail={info_box.detail}
                                price={info_box.price}
                            />
                        ))
                    }
                </div>

                <Pagination
                    start={0}
                    isOpen={true}
                    pagination={pagination[1]}
                    setCurrentIndex={setCurrentIndexSecond}
                    timeoutRef={null}
                    color="blue"
                />

            </section>

            <section className="internet__item" id="internet-truyenhinh-didong">

                <div className='internet__item-title'>
                    <img src={ico_mobile} alt="opps" />
                    <h2>Internet , Truyền Hình Và Di Động</h2>
                </div>

                <div className="internet__item-box"
                    style={{
                        transform: `translate3d(${-currentIndexThird * (100 / currentItem)}%, 0, 0)`
                    }}>
                    {
                        listInternet.map((info_box, index) => (
                            <InternetItem
                                key={index}
                                title={info_box.title}
                                detail={info_box.detail}
                                price={info_box.price}
                            />
                        ))
                    }
                </div>

                <Pagination
                    start={0}
                    isOpen={true}
                    pagination={pagination[2]}
                    setCurrentIndex={setCurrentIndexThird}
                    timeoutRef={null}
                    color="blue"
                />

            </section>

            <section className="internet__item" id="truyehinh-tv">

                <div className='internet__item-title'>
                    <img src={ico_internetTV} alt="opps" />
                    <h2>Truyền Hình</h2>
                </div>

                <div className="internet__item-box"
                    style={{
                        transform: `translate3d(${-currentIndexFour * (100 / currentItem)}%, 0, 0)`
                    }}
                >
                    {
                        listInternet.map((info_box, index) => (
                            <InternetItem
                                key={index}
                                title={info_box.title}
                                detail={info_box.detail}
                                price={info_box.price}
                            />
                        ))
                    }
                </div>

                <Pagination
                    start={0}
                    isOpen={true}
                    pagination={pagination[3]}
                    setCurrentIndex={setCurrentIndexFour}
                    timeoutRef={null}
                    color="blue"
                />

            </section>

        </div>
    );
}
export default InternetPage;