import React from "react";
import './Slideshow.scss';
import banner1 from "./image/16952607338251695176510280Gian hang VNPT Shopee_Tiktok_ bannerChinh-compressed.jpg"
import banner2 from "./image/1695260766541475x180 VD90.jpg"
import banner3 from "./image/anh2.jpg"
function Slideshow()
{
    return(
        <div class="home-banner-container">
        <div class="home-banner-container-row">
          <div class="col-lg-8 home-banner-8">
            <div class="home-banner-container-img1">
              <img
                src={banner1}
                alt="opps"
                height="690px"
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