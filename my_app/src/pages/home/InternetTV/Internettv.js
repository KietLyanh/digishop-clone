import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import './Internettv.scss';
import internetIcon from "./images/1677836509938icon_truyenhinh.png"
import { listInternet } from "~/api/listInternetClone";
import InternetItem from "~/pages/InternetPage/InternetItem";
import Pagination from "~/components/Pagination/Pagination";
const list = listInternet;
function Internettv() {

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
      var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

      // In ra console để kiểm tra
      if (windowWidth <= 768) {
        // console.log(windowWidth);
        setCurrentItem(2);
      }
      if (windowWidth <= 600) {
        setCurrentItem(1);
      }
      else {
        setCurrentItem(3)
      }
    }

    // Gắn sự kiện resize vào cửa sổ
    window.addEventListener('resize', handleResize);

    // Gọi hàm handleResize khi trang được tải lần đầu
    return () => { window.removeEventListener('resize', handleResize) }
  }, [])

  const [currentIndex, setCurrentIndex] = useState(0);

  const pagination = {
    page: currentIndex,
    totalPages: listInternet.length - currentItem
  }

  return (
    <div className="internet-container">
      <div className="internet-title">
        <img
          src={internetIcon}
          alt="opps"
        />
        <h2>Internet - Truyền hình</h2>
        <NavLink>
          <p>Internet cáp quang</p>
        </NavLink>
        <NavLink>
          <p>Internet và Truyền hình</p>
        </NavLink>
        <NavLink>
          <p>Internet, Truyền hình và Di động</p>
        </NavLink>
        <NavLink>
          <p>Xem tất cả</p>
        </NavLink>
      </div>
      <div className="internet-row">
        <div className="internet-row-items"
          style={{
            transform: `translate3d(${-currentIndex * (100 / currentItem)}%, 0, 0)`
          }}>
          {list.map((info, index) => (
            <InternetItem
              title={info.title}
              detail={info.detail}
              price={info.price}
            />
          ))}
        </div>

        <Pagination
          start={0}
          isOpen={true}
          color="blue"
          setCurrentIndex={setCurrentIndex}
          pagination={pagination}
          timeoutRef={null}
        />
      </div>
    </div>
  );
}
export default Internettv;