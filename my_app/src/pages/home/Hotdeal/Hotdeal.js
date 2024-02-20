import React, { useEffect, useState } from "react";
import './Hotdeal.scss';
import pictureTitle from "./image/set.svg"
import HotdealItems from "./HotdealItems";
import { HotdealIcon } from "~/components/icons/icons";
import listmobiledata from "~/api/listmobiledata";
import Pagination from "~/components/Pagination/Pagination";
function Hotdeal() {
  const [infomation, setInfomation] = useState([]);
  const data = []
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await listmobiledata.getAll();
        const jsonString = JSON.stringify(response);
        const dataArray = JSON.parse(jsonString);
        if (!data.length) { // kiem tra neu data rong thi moi cho push de han che so lan push
          for (let i = 0; i < 4; i++) {
            data.push(dataArray[i])
          }
          setInfomation(data);
        }
      }
      catch (error) {
        console.log(error);
      }
    }
    fetchData()
  }, []) // theo doi data
  let widthDefault = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  let itemIndex;
  if (widthDefault <= 600) {
    itemIndex = 1;
  }
  else if (widthDefault <= 768) {
    itemIndex = 2;
  }
  else if (widthDefault <= 992) {
    itemIndex = 3;
  }
  else {
    itemIndex = 4;
  }
  const [currentItem, setCurrentItem] = useState(itemIndex);
  useEffect(() => {
    function handleResize() {
      // Lấy độ rộng của cửa sổ trình duyệt
      var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

      // In ra console để kiểm tra
      if (windowWidth <= 600) {
        setCurrentItem(1);
      }
      else if (windowWidth <= 768) {
        setCurrentItem(2);
      }
      else if (windowWidth <= 992) {
        setCurrentItem(3);
      }
      else {
        setCurrentItem(4);
      }
    }

    // Gắn sự kiện resize vào cửa sổ
    window.addEventListener('resize', handleResize);

    // Gọi hàm handleResize khi trang được tải lần đầu
    return () => { window.removeEventListener('resize', handleResize) }
  }, [])
  const [currentIndex, setCurrentIndex] = useState(0);
  const rowItem = 4 - currentItem;
  const pagination = {
    page: currentIndex,
    totalPages: rowItem
  }

  return (
    <div className="hotdeal-container">
      <div className="hotdeal-title">
        <img src={pictureTitle} alt="opps" />
        <h2>Hot deal</h2>
      </div>
      <div className="hotdeal-row"
      style={{
        transform: `translate3d(${-currentIndex * (100 / currentItem)}%, 0, 0)`
      }}
      >
        {infomation.map((info, index) => (
          <HotdealItems
            key={index}
            icon={<HotdealIcon />}
            standard_name={info.standard_name}
            id={info.standard_id}
            detail_treatment={info.detail_treatment}
            standard_price={info.standard_price}
            displayImg="none"
            displayContent="block"
          />
        ))}
      </div>

      <Pagination
        start={0}
        pagination={pagination}
        setCurrentIndex={setCurrentIndex}
        timeoutRef={null}
        isOpen={true}

      />
    </div>
  );
}
export default Hotdeal; 