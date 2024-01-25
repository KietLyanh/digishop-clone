import React, { useEffect, useState } from 'react';
import './Sims.scss';
import iconSite from './images/1677836489077ico_sim.png';
import iconItems from './images/icon-pack-sim.png';
import { SimsTransfomIcon } from '~/components/icons';
import Listsim from '~/api/listsim';
import listmobiledata from '~/api/listmobiledata';
const list = [0,3,6]
function Sims() {
    const [simData, setSimData] = useState([]);
    const [mobileData, setMobileData] = useState([]);
    const [detailData, setDetailData] = useState({});
    const [displaySim, setDisplaySim] = useState('none');
    const [numberTrans,setNumberTrans] = useState(0);
    const [nextDisabled, setNextDisabled] = useState(false);
    const [preDisabled, setPreDisabled] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Listsim.getAll();
                const jsonString = JSON.stringify(response);
                const dataArray = JSON.parse(jsonString);
                setSimData(dataArray);

                // console.log(dataArray);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await listmobiledata.getAll();
                const jsonString = JSON.stringify(response);
                const dataArray = JSON.parse(jsonString);
                setMobileData(dataArray);
                // console.log(dataArray);
                setDetailData(dataArray[0]);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);
    const dataLenght = Math.floor(mobileData?.length/3);
    // console.log(dataLenght);

    const preSimcomponent = () => {
        setNextDisabled(false);
        setNumberTrans(numberTrans-1)
        if(numberTrans === 1)
        {
            setPreDisabled(true);
            
        }
            
        
        console.log(numberTrans);
    }

    const nextSimcomponent = () => {
        setPreDisabled(false);
        setNumberTrans(numberTrans+1)
        if(numberTrans >= dataLenght-2)
        {
            setNextDisabled(true);
        }
        // console.log(numberTrans+1);
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
                        <button className={`sim-row-items-transfomicon ${nextDisabled ? "" : "active"}`} onClick={nextSimcomponent}  disabled={nextDisabled} >
                            <SimsTransfomIcon height="15px" width="15px" />
                        </button>
                        <button className={`sim-row-items-transfomicon2 ${preDisabled ? "" : "active"}`} onClick={preSimcomponent} disabled={preDisabled}>
                            <SimsTransfomIcon height="15px" width="15px" />
                        </button>
                    </div>
                    <div className="sim-row-items-tranform"
                    >
                        {
                            Array.from({length:dataLenght},(_,index) => mobileData.slice(index*dataLenght,index*dataLenght+dataLenght)
                            ).map((arr,index) => (
                                <div className="sim-row-items-tranform-item"
                                key={index}
                                style={{transform: `translate3d(0, ${-numberTrans*100}%, 0)`}}
                                >
                                    {arr.map((info, index) => (
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

                        </div>
                            ))
                        }
                    </div>
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
                                                    <label>Chọn số</label>
                                                    <input type='radio' name="sim"  ></input>
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
