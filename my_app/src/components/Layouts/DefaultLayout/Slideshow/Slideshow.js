import React, { useEffect, useRef, useState } from "react";
import './Slideshow.scss';
import banner1 from "./image/16952607338251695176510280Gian hang VNPT Shopee_Tiktok_ bannerChinh-compressed.jpg"
import banner2 from "./image/1695260766541475x180 VD90.jpg"
import banner3 from "./image/anh2.jpg"
import banner4 from "./image/1695260799069985x374 D159V-compressed.jpg"
import banner5 from "./image/1695260820827985x374 VD120-compressed.jpg"
import banner6 from "./image/1700446463191speedtest 3_975x347.jpg"
import banner7 from "./image/1708478413804985x374 (7).jpg"
import prevImg from "./image/prev-icon.png";
import Pagination from "~/components/Pagination/Pagination";
const list = [banner7,banner1, banner2, banner3, banner4, banner5, banner6]
const delay = 3000;
function Slideshow() {

  // const [banner,setBanner] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef(null);
  const totalPage = list.length - 1;
  const isOpenPagination = true;
  const pagination = {
    totalPages: totalPage,
    page: currentIndex
  }
  const nextIndex = (prevIndex) => (prevIndex === list.length - 1 ? 0 : prevIndex + 1);
  const handleTimeout = (nextIndexParam) => {
      setCurrentIndex(nextIndexParam !== undefined ? nextIndexParam : nextIndex);
      timeoutRef.current = setTimeout(handleTimeout, delay);
    }
  useEffect(() => {

    timeoutRef.current = setTimeout(handleTimeout, delay);
    console.log("unmount");
    return () => clearTimeout(timeoutRef.current);

  }, [])

  return (
    <div class="home-banner-container">
      <div class="home-banner-container-row">
        <div class="col-lg-8 home-banner-slideshow">
          <div class="home-banner-slideshow-slideshowSlider"
            style={{ transform: `translate3d(${-currentIndex * 100}%, 0, 0)` }}
          >
            {list.map((image, index) => (
              <img
                className="slide"
                key={index}
                src={image}
                alt="opps"
                height="690px"
              />
            ))}
          </div>
          <img className="prevIcon" onClick={() => {
            clearTimeout(timeoutRef.current);
            handleTimeout(currentIndex === 0 ? list.length - 1 : currentIndex - 1);
            
          }
          } src={prevImg} />
          <img className="nextIcon" onClick={() => {
            clearTimeout(timeoutRef.current);
            handleTimeout(currentIndex === list.length - 1 ? 0 : currentIndex + 1);
            
          }} src={prevImg} style={{ rotate: "180deg" }} />
          <div className="pagination">
            <Pagination
              isOpen={isOpenPagination}
              start={0}
              pagination={pagination}
              setCurrentIndex={handleTimeout}
              timeoutRef={timeoutRef.current}
              color="white"
            />
          </div>
        </div>
        <div class="col-lg-4 home-banner-4">
          <div class="home-banner-container-img2">
            <img
              src={banner2}
              alt="opps"
            />
          </div>
          <div class="home-banner-container-img3">
            <img src={banner3} alt="opps" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Slideshow;