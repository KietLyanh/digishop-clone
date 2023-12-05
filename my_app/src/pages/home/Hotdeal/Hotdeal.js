import React from "react";
import './Hotdeal.scss';
import picture1 from "./image/1695260064441VD90_500X500-compressed.jpg";
import pictureTitle from "./image/set.svg"
function Hotdeal()
{
    return(
        <div className="hotdeal-container">
          <div className="hotdeal-title">
            <img src={pictureTitle} alt="opps" />
            <h2>Hot deal</h2>
          </div>
          <div className="hotdeal-row">
            <div className="hotdeal-row-box hotdeal-col_4 hotdeal-col_6">
              <div className="hotdeal-row-box-content">
                <h3>VD90</h3>
                <div className="hotdeal-row-box-content-img">
                  <img
                    src={picture1}
                    alt=""
                  />
                </div>
              </div>
              <div className="hotdeal-row-box-sold">
                <div className="hotdeal-row-box-sold-btn">
                  <button>
                    <span>Chi tiết</span>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="arrow-right"
                      className="svg-inline--fa fa-arrow-right fa-w-14"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      color="#3AA4F6"
                    >
                      <path
                        fill="currentColor"
                        d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
                      ></path>
                    </svg>
                  </button>
                  <button>Đăng ký</button>
                </div>
                <div className="hotdeal-row-box-soldout">
                  <div className="hotdeal-row-box-sell">
                    <span>Đã bán 6104</span>
                    <div className="hotdeal-row-box-sell-progress">
                      <div className="value"></div>
                    </div>
                  </div>
                  <div className="hotdeal-row-box-countdown">
                    <span>01</span>
                    <span>01</span>
                    <span>01</span>
                  </div>
                </div>
              </div>
              <span className="hotdeal-row-box-hot">HOT</span>
            </div>
            <div className="hotdeal-row-box hotdeal-col_4 hotdeal-col_6">
              <div className="hotdeal-row-box-content">
                <h3>D159V</h3>
                <div className="hotdeal-row-box-content-text">
                  <p>
                    <strong>1. Ưu đãi gói cước</strong>
                    <br />
                    -&nbsp;
                    <strong>6 GB data/ngày</strong>
                    " (hết dung lượng dừng truy cập)"
                    <br />
                    -&nbsp;
                    <strong>1500</strong>
                    " phút gọi di động nội mạng Vinaphone còn nhiều hơn thế nữa
                    cơ"
                  </p>
                </div>
                <div className="hotdeal-row-box-content-text-price">
                  <h4>159,000</h4>
                  <p>đ/lượt</p>
                </div>
              </div>
              <div className="hotdeal-row-box-sold">
                <div className="hotdeal-row-box-sold-btn">
                  <button>
                    <span>Chi tiết</span>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="arrow-right"
                      className="svg-inline--fa fa-arrow-right fa-w-14"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      color="#3AA4F6"
                    >
                      <path
                        fill="currentColor"
                        d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
                      ></path>
                    </svg>
                  </button>
                  <button>Đăng ký</button>
                </div>
                <div className="hotdeal-row-box-soldout">
                  <div className="hotdeal-row-box-sell">
                    <span>Đã bán 6104</span>
                    <div className="hotdeal-row-box-sell-progress">
                      <div className="value"></div>
                    </div>
                  </div>
                  <div className="hotdeal-row-box-countdown">
                    <span>01</span>
                    <span>01</span>
                    <span>01</span>
                  </div>
                </div>
              </div>
              <span className="hotdeal-row-box-hot">HOT</span>
            </div>
            <div className="hotdeal-row-box hotdeal-col_4 hotdeal-col_6">
              <div className="hotdeal-row-box-content">
                <h3>vocuc</h3>
                <div className="hotdeal-row-box-content-text">
                  <p>
                    <strong>1. Ưu đãi gói cước</strong>
                    <br />
                    -&nbsp;
                    <strong>5 GB data/ngày</strong>
                    " (hết dung lượng dừng truy cập)"
                    <br />
                    -&nbsp; Miễn phí cước cuộc gọi di động nội mạng VinaPhone
                    dưới
                    <strong>20</strong>
                    phút (tối đa
                    <strong>1440</strong>
                    phút)
                  </p>
                </div>
                <div className="hotdeal-row-box-content-text-price">
                  <h4>10,000</h4>
                  <p>đ/lượt</p>
                </div>
              </div>
              <div className="hotdeal-row-box-sold">
                <div className="hotdeal-row-box-sold-btn">
                  <button>
                    <span>Chi tiết</span>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="arrow-right"
                      className="svg-inline--fa fa-arrow-right fa-w-14"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      color="#3AA4F6"
                    >
                      <path
                        fill="currentColor"
                        d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
                      ></path>
                    </svg>
                  </button>
                  <button>Đăng ký</button>
                </div>
                <div className="hotdeal-row-box-soldout">
                  <div className="hotdeal-row-box-sell">
                    <span>Đã bán 6104</span>
                    <div className="hotdeal-row-box-sell-progress">
                      <div className="value"></div>
                    </div>
                  </div>
                  <div className="hotdeal-row-box-countdown">
                    <span>01</span>
                    <span>01</span>
                    <span>01</span>
                  </div>
                </div>
              </div>
              <span className="hotdeal-row-box-hot">HOT</span>
            </div>
            <div className="hotdeal-row-box hotdeal-col_4">
              <div className="hotdeal-row-box-content">
                <h3>home mesh 1 +</h3>
                <div className="hotdeal-row-box-content-text">
                  <p>
                    <strong>1. Ưu đãi gói cước</strong>
                    <br />
                    - Đường truyền Internet tốc độ
                    <strong>100Mbps</strong>
                    (hết dung lượng dừng truy cập)
                    <br />
                    -&nbsp;
                    <strong>180 </strong>
                    kênh truyền hình MyTV
                    <br />
                    &nbsp; Trang bị 01 Wifi
                  </p>
                </div>
                <div className="hotdeal-row-box-content-text-price">
                  <h4>1,230,000</h4>
                  <p>đ/lượt</p>
                </div>
              </div>
              <div className="hotdeal-row-box-sold">
                <div className="hotdeal-row-box-sold-btn">
                  <button>
                    <span>Chi tiết</span>
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="arrow-right"
                      className="svg-inline--fa fa-arrow-right fa-w-14"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                      color="#3AA4F6"
                    >
                      <path
                        fill="currentColor"
                        d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"
                      ></path>
                    </svg>
                  </button>
                  <button>Đăng ký</button>
                </div>
                <div className="hotdeal-row-box-soldout">
                  <div className="hotdeal-row-box-sell">
                    <span>Đã bán 6104</span>
                    <div className="hotdeal-row-box-sell-progress">
                      <div className="value"></div>
                    </div>
                  </div>
                  <div className="hotdeal-row-box-countdown">
                    <span>01</span>
                    <span>01</span>
                    <span>01</span>
                  </div>
                </div>
              </div>
              <span className="hotdeal-row-box-hot">HOT</span>
            </div>
          </div>
        </div>
    );
}
export default Hotdeal; 