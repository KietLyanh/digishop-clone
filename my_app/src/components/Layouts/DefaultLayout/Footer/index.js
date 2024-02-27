import React from "react";
import { NavLink } from "react-router-dom";
import '~/components/GlobalStyles/GlobalStyles.scss'
import './Footer.scss';
import insta from "./images/instagram_grey_ic.png"
import fb from "./images/facebook.png"
import youtube from "./images/youtube.png"
import tiktok from "./images/tiktok-ic.png"
import zalo from "./images/zalo.png"
import logo from "./images/logo.png"
import notice from "./images/dathongbao_bct.png"
import config from "~/config";
function Footer() {

  const menu = ["Giới thiệu", "Tin tức - khuyến mại", "Câu hỏi thường gặp", "Điều khoản"];
  const infomation = [
    "Cơ quan chủ quản: Tổng Công ty Dịch vụ Viễn thông (VNPTVinaphone) – chi nhánh Tập đoàn Bưu chính Viễn thông Việt Nam.",
    " Trụ sở chính: Tòa nhà VNPT, Số 57 phố Huỳnh Thúc Kháng, Phường Láng Hạ, Quận Đống Đa, Thành phố Hà Nội, Việt Nam.",
    " Mã số doanh nghiệp: 0106869738 do Sở Kế hoạch và Đầu tư TP. Hà Nội cấp lần đầu ngày 11/06/2015, cấp lần thứ 6 ngày 07/01/2021.",
    " Giấy phép cung cấp dịch vụ viễn thông số 469/GP-BTTTT do Bộ Thông tin và Truyền thông cấp ngày 14/10/2016.",
    "Giấy phép cung cấp dịch vụ viễn thông số 18/GP-CVT do Bộ Thông tin và Truyền thông cấp ngày 18/01/2018."
  ];
  return (
    <div>
      <section className="footer-menu grid__full-width" style={{
        background: "#EAEFF7"
      }}>

        {menu.map((title, index) => (
          <NavLink>
            <span key={index}>
              {title}
            </span>
          </NavLink>
        ))}
      </section>
      <section className="footer-content grid__full-width" style={{
        backgroundColor: "#fff"
      }}>
        <div className="container-footer">
          <div className="row">
            <div className="col-3">
              <h6>Thông tin liên hệ</h6>
              {infomation.map((info, index) => (
                <p key={index}>{info}</p>
              ))}
            </div>
            <div className="col-3">
              <h6>Hỗ trợ khách hàng</h6>
              <p>Tổng đài: Internet/MyTV: 1800 1166.</p>
              <p>Di động: 1800 1091</p>
              <p>Email KHTT: cskh@vnpt.vn</p>
            </div>
            <div className="col-3">
              <h6>Menu</h6>
              <ul>
                <li>
                  <NavLink to={config.routes.home} ><p>Trang chủ</p></NavLink>
                </li>
                <li>
                  <NavLink to={config.routes.mobile}><p>Di động</p></NavLink>
                </li>
                <li>
                  <NavLink to={config.routes.internetTV}><p>Internet - Truyền hình</p></NavLink>
                </li>
                <li>
                  <p>Chuyển mạng giữ số</p>
                </li>
                <li>
                  <p>Tin tức</p>
                </li>
              </ul>
              <h6>Mạng xã hội</h6>
              <div className="col-3-img-social">
                <p>
                  <img src={fb} alt="opps" />
                </p>
                <p>
                  <img src={youtube} alt="opps" />
                </p>
                <p> <img src={zalo} alt="opps" /></p>
                <p>
                  <img
                    src={tiktok}
                    alt="opps"
                    style={{
                      width: "20px",
                      height: "20px"
                    }}
                  /></p>
                <p>
                  <img
                    src={insta}
                    alt="opps"
                    style={{
                      width: "20px",
                      height: "20px"
                    }}
                  /></p>
              </div>
            </div>
            <div className="col-3">
              <h6>Chính sách và điều khoản</h6>
              <ul>
                <li>
                  <p>Tiêu chuẩn chất lượng sản phẩm/ dịch vụ</p>
                </li>
                <li>
                  <p>Điều khoản chung</p>
                </li>
                <li>
                  <p>Chính sách giao hàng</p>
                </li>
                <li>
                  <p>Chính sách thanh toán</p>
                </li>
                <li>
                  <p>Chính sách bảo mật thanh toán</p>
                </li>
                <li>
                  <p>Chính sách đổi trả sản phẩm/dịch vụ</p>
                </li>
                <li>
                  <p>Chính sách bảo mật thông tin cá nhân</p>
                </li>
                <li>
                  <p>Quy trình giải quyết khiếu nại</p>
                </li>
                <li>
                  <p>Quy trình mua bán</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="footer-bottom  grid__full-width" style={{
        backgroundColor: "#fff"
      }}>
        <div className="container-footer-bottom" >
          <div className="footer-bottom-logo-copyright">
            <img src={logo} alt="opps" />
            <p>Copyright © 2020 by VNPT VinaPhone. All rights reserved.</p>
          </div>
          <div className="footer-bottom-logo-title">
            <p>WEBSITE MUA SẮM ONLINE CHÍNH THỨC CỦA VNPT VINAPHONE</p>
            <img
              src={notice}
              alt="opps"
              height="60px"
            />
          </div>
        </div>
      </section>

      <section className="footer-menu-res grid__full-width" style={{backgroundColor:"#EAEFF7"}}>
        <a>Giới thiệu</a>
        <a>Tin tức - khuyến mại</a>
        <a>Câu hỏi thường gặp</a>
        <a>Điều khoản</a>
      </section>
      <section className="footer-content-res grid__full-width" style={{backgroundColor:"#fff"}}>
        <div className="img-social-res">
          <a>
            <img src={fb} alt="opps" />
          </a>
          <a>
            <img src={youtube} alt="opps" />
          </a>
          <a> <img src={zalo} alt="opps" /></a>
        </div>
        <div className="footer-content-sp">
          <h6>Hỗ trợ khách hàng</h6>
          <p>Tổng đài: Internet/MyTV: 1800 1166.</p>
          <p>Di động: 1800 1091</p>
          <p>Email KHTT: cskh@vnpt.vn</p>
        </div>
        <div className="footer-content-info">
          <p>
            Tổng Công ty Dịch vụ Viễn thông
          </p>
          <p>
            Trụ sở chính: Tòa nhà VNPT, Số 57 phố Huỳnh Thúc Kháng, Phường
            Láng Hạ, Quận Đống Đa, Thành phố Hà Nội, Việt Nam.
          </p>
          <p>
            Mã số doanh nghiệp: 0106869738 do Sở Kế hoạch và Đầu tư TP. Hà
            Nội cấp lần đầu ngày 11/06/2015, cấp lần thứ 6 ngày
            07/01/2021.
          </p>
          <p>
            Giấy phép cung cấp dịch vụ viễn thông số 469/GP-BTTTT do Bộ
            Thông tin và Truyền thông cấp ngày 14/10/2016.
          </p>
          <p>
            Giấy phép cung cấp dịch vụ viễn thông số 18/GP-CVT do Bộ Thông
            tin và Truyền thông cấp ngày 18/01/2018.
          </p>
        </div>
      </section>

      <section className="footer-bottom-res grid__full-width">
        <img src={logo} alt="opps" />
        <p>WEBSITE MUA SẮM ONLINE CHÍNH THỨC CỦA VNPT VINAPHONE</p>
       </section >

      {/* //  <!-- Phần footer responsive --> */}
    </div >
  );
}
export default Footer;