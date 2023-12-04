import React, { useEffect, useState } from "react";
import './Slideshow.scss';
import banner1 from "./image/16952607338251695176510280Gian hang VNPT Shopee_Tiktok_ bannerChinh-compressed.jpg"
import banner2 from "./image/1695260766541475x180 VD90.jpg"
import banner3 from "./image/anh2.jpg"
import banner4 from "./image/1695260799069985x374 D159V-compressed.jpg"
import banner5 from "./image/1695260820827985x374 VD120-compressed.jpg"
import banner6 from "./image/1700446463191speedtest 3_975x347.jpg"
import prevImg from "./image/prev-icon.png";
import Pagination from "~/components/Pagination/Pagination";
function Slideshow()
{
    const [banner,setBanner] = useState();
    const [currentBanner,setCurrentBanner] = useState(0);
    const list = [banner1,banner2,banner3,banner4,banner5,banner6]
    useEffect(()=>{
      setBanner(list[currentBanner]);
      const loop = setInterval(()=>{
       if(currentBanner === list.length-1)
       {
        setCurrentBanner(0);
        console.log("đã lưu");
       }
       else{
        setCurrentBanner(currentBanner+1);
        console.log("đã lưu");
       }
      },3000)
      return () => 
      {clearInterval(loop)
      console.log("delete");}

    
    },[currentBanner])
    const preBanner = () => {
   
      if(currentBanner === 0)
      {
        setCurrentBanner(list.length - 1);
      }
      else 
      {
        setCurrentBanner(currentBanner - 1);
      }
     
    }

    const nextBanner = () => {
    
      if(currentBanner === list.length - 1)
      {
        setCurrentBanner(0);
      }
      else 
      {
        setCurrentBanner(currentBanner + 1);
      }

    }
    return(
        <div class="home-banner-container">
        <div class="home-banner-container-row">
          <div class="col-lg-8 home-banner-8">
            <div class="home-banner-container-img1">
              <img
              className="home-banner-container-img1-img"
                src={banner}
                alt="opps"
                height="690px"
                // style={{ transform: `translateX(${currentBanner * 100}%)` }} 
              />
              <img className="prevIcon" onClick={preBanner} src={prevImg}/>
              <img className="nextIcon" onClick={nextBanner} src={prevImg} style={{rotate:"180deg"}}/>
             <div className="pagination">
               <Pagination
                totalChild={list.length}
                childPerPage={parseInt("1")}
                currentPage={currentBanner}
                setCurrentPage={setCurrentBanner}
              />
             </div>
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