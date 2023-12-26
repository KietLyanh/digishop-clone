import React, { useEffect, useState } from 'react';
import './Sims.scss';
import iconSite from './images/1677836489077ico_sim.png';
import iconItems from './images/icon-pack-sim.png';
import { SimsTransfomIcon } from '~/components/icons';
function Sims() {
    const [simData, setSimData] = useState([]);
    const [mobileData, setMobileData] = useState([]);
    const [detailData, setDetailData] = useState({});
    const [displaySim, setDisplaySim] = useState('none');
    const [dataTransfom,setDataTransfom] = useState([]);
    const [itemNumber,setItemNumber] = useState(3);
    const [nextDisabled,setNextDisabled] = useState(false);
    const [preDisabled,setPreDisabled] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:9999/backend-forReact/listsimname');
                if (!response.ok) {
                    throw new Error('network response was not ok');
                }
                const result = await response.json();
                const jsonString = JSON.stringify(result);
                const dataArray = JSON.parse(jsonString);
                setSimData(dataArray);
             
                console.log(dataArray);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:9999/backend-forReact/listmobiledata');
                if (!response.ok) {
                    throw new Error('network response was not ok');
                }
                const result = await response.json();
                const jsonString = JSON.stringify(result);
                const dataArray = JSON.parse(jsonString);
                setMobileData(dataArray);
                let data = [];
                for(let i = 0; i < 3; i++)
                {
                  data.push(dataArray[i]);
                }
                setDataTransfom(data);
                setDetailData(dataArray[0]);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);
    const preSimcomponent = () => {
      const data = [];
      if(itemNumber > 3)
      {
        setPreDisabled(false);
        for(let j = itemNumber - 6; j < itemNumber-3; j++)
        {
          data.push(mobileData[j]);
        }
        setDataTransfom(data);
        let number = itemNumber - 3;
        if(number === 3) // kiểm tra nếu bằng 3 thì mở khóa nút next luôn
        {
          setPreDisabled(true);
          setNextDisabled(false);
        }
        setItemNumber(number);
      }
    }
    const nextSimcomponent = () => {
      const data = [];
      if(itemNumber <= mobileData.length-3)
      {
        for(let j = itemNumber; j < itemNumber + 3; j++)
        {
          data.push(mobileData[j]);
        }
        setDataTransfom(data);
        let number = itemNumber + 3;
        setItemNumber(number);
      }
      else{
        setNextDisabled(true);
      }
    }
    
    return (
        <div className="sim-container">
            <div className="sim-title">
                <img src={iconSite} alt="opps" />
                <h2>Sim kèm gói di động</h2>
            </div>
            <div className="sim-row-noresponsive">
                <section className="sim-row-items col-3-sim">
                    <div className='sim-row-items-icon'>
                        <button className="sim-row-items-transfomicon" onClick={nextSimcomponent} disabled={nextDisabled}>
                            <SimsTransfomIcon height="15px" width="15px" />
                        </button>
                        <button className="sim-row-items-transfomicon2" onClick={preSimcomponent}>
                            <SimsTransfomIcon height="15px" width="15px" />
                        </button>
                    </div>
                    {dataTransfom.map((info, index) => (
                        <div
                            className="sim-row-item col-3-simMobile"
                            key={index}
                            onClick={() => {
                                setDetailData(info);
                            }}
                        >
                            <img src={iconItems} alt="opps" />
                            <div className="sim-row-item-desc">
                                <h3>{info.standard_name}</h3>
                                <p>{info.detail_treatment}</p>
                            </div>
                        </div>
                    ))}
                </section>
                <section className="sim-row-desc col-3-sim">
                    <div className="sim-row-desc-container">
                        <h3>{detailData.standard_name}</h3>
                        <p>
                            <strong>1. Ưu đãi gói cước</strong>
                            <br />
                            {detailData.detail_treatment}
                        </p>
                    </div>
                    <hr />
                    <p className="sim-row-desc-p">
                        {detailData.standard_price}
                        <sup>đ</sup>
                    </p>
                    <br />
                    <p className="sim-row-desc-m">tháng</p>
                </section>
                <section className="sim-row-phonenumber col-6-sim">
                    <div className="sim-phonenumber-container">
                        <div className="sim-phonenumber-table">
                            <table>
                                <tbody>
                                    {simData.map((info, index) => (
                                        <tr key={index}>
                                            <td>{info.sim_number_name}</td>
                                            <td>
                                                <div className="sim-phonenumber-td">
                                                    <span>Chọn số</span>
                                                    <span></span>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <div className="sim-phonenumber-btn">
                            <button>chọn số tự động</button>
                            <button>đăng ký ngay</button>
                        </div>
                    </div>
                </section>
            </div>
            {/* <!-- Phần dùng để responsive --> */}

            <div className="sim-row-responsive">
                {mobileData.map((info, index) => (
                    <>
                        <div
                            className="sim-row-item sim-item-1"
                            key={index}
                            onClick={() => {
                                setDisplaySim('block');
                            }}
                        >
                            <img src={iconItems} alt="opps" />
                            <div className="sim-row-item-desc">
                                <h3>{info.standard_name}</h3>
                                <p>{info.detail_treatment}</p>
                            </div>
                        </div>
                        <section
                            className="sim-row-desc"
                            style={{
                                display: { displaySim },
                            }}
                        >
                            <div className="sim-row-desc-container">
                                <h3>{info.standard_name}</h3>
                                <p>
                                    <strong>1. Ưu đãi gói cước</strong>
                                    <br />
                                    {info.detail_treatment}
                                </p>
                            </div>
                            <hr />
                            <p className="sim-row-desc-p">
                                {info.standard_price}
                                <sup>đ</sup>
                            </p>
                            <br />
                            <p className="sim-row-desc-m">tháng</p>
                        </section>
                    </>
                ))}
            </div>

            {/* <!-- Phần dùng để responsive --> */}
        </div>
    );
}
export default Sims;
