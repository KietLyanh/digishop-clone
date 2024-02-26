import React, { useEffect, useState } from 'react';
import './MobilePage.scss';
import { NavLink } from 'react-router-dom';
import { MobilePageTitleIcon } from '~/components/icons/icons';
import iconTitle from '~/pages/home/PhoneData/images/1677836500566ico_didong.png'
import config from '~/config';
import MobileItems from './MobileItems';
import Pagination from '~/components/Pagination/Pagination';
import Listmobilestandard from '~/api/listmobilestandard';
import MobileBySearch from './MobileBySearch';
function MobilePage() {

    // xu ly bien lay du lieu
    const [mobileData, setMobileData] = useState([]);
    const [pagination, setPagination] = useState({
        page: 1,
        totalPages: 2,
        limit: 8
    });
    const [filters, setFilters] = useState({
        page: 1,
        limit: 8,
        orderby: "ORDER BY Standard_price ASC",
        keyword: null

    })

    // const [filter]
    // xử lý dropdownlist
    const list = [
        {
            title: "Tìm kiếm gói cước theo",
            sql: null
        },
        {
            title: "Giá từ thấp - cao",
            sql: "ORDER BY Standard_price ASC"
        },
        {
            title: "Giá từ cao - thấp",
            sql: "ORDER BY Standard_price DESC"
        }];
    // const [value, setValue] = useState(list[0].title);
    // console.log(list[0].title);


    // xu ly tim kiem
    const [isToggle, setToggle] = useState(false);
    const [selectedValue, setSelectedValue] = useState(list[0].title);
    const toggleOpen = () => {
        setToggle(!isToggle);
    }

    // xu ly lay du lieu
    useEffect(() => {
        // xu ly lay data
        const fetchData = async () => {
            try {
                const response = await Listmobilestandard.getByparam(filters);
                const { data, pagination } = response;
                // console.log(pagination);
                const jsonString = JSON.stringify(data);// thanh chuoi
                const dataArray = JSON.parse(jsonString);// thanh mang
                setMobileData(dataArray);
                setPagination(pagination);
                // console.log(dataArray);
            }
            catch (error) {
                console.log(error);
            }
        }
        fetchData();
        // console.log('data[0].child_name');
    }, [filters])

    // xu ly phan trang
    const handleOnChange = (newpage) => {
        setFilters({
            ...filters,
            page: newpage
        })
        // console.log(filters);
    }

    // xu ly sort
    const handleChangeValueSort = (value) => {
        setSelectedValue(value)
        const list_child = list.find(items => items.title === value) // tìm items có title giống với value trong select
        console.log(list_child.sql);
        setFilters({
            ...filters,
            orderby: list_child.sql
        })
    }

    // xu ly search
    // const [isSearched,setValueSearched] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const [submittedValue, setSubmittedValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleButtonClick = () => {
        // Lưu giá trị vào state submittedValue khi nút được nhấn
        setSubmittedValue(inputValue);
    };
    return (
        <div className="mobile-container">
            <div className='mobile-linkpage'>
                <NavLink to={config.routes.home} className="mobile-linkpage-ftitle">
                    <h4>Trang chủ</h4>
                </NavLink>
                <MobilePageTitleIcon height="15px" width="15px" />
                <h4>Di động</h4>
            </div>
            <div className='mobile-title'>
                <img src={iconTitle} alt="opps" />
                <h2>Di động</h2>
            </div>
            <div className='mobile-features'>
                {/* xử lý phần header */}
                <div className='mobile-features-header'>
                    <div className='mobile-features-header-link'>
                        <h4>Gói trả trước</h4>
                        <h4>Gói DATA</h4>
                    </div>
                    <div className='mobile-features-header-btn'>
                        <button onClick={toggleOpen}>
                            <p>{selectedValue}</p>
                            <div className='mobile-features-header-link-icon'><MobilePageTitleIcon height="15px" width="15px" /></div>
                        </button>
                        {isToggle ?
                            <ul className={`mobile-features-header-dropdown ${isToggle ? 'open' : ''}`}>
                                {list.map((cp, index) => (
                                    <li key={index} onClick={() => handleChangeValueSort(cp.title)}>{cp.title}</li>
                                ))}
                            </ul>

                            : <></>}

                    </div>
                </div>


                {/* xử lý phần tìm kiếm */}

                <div className='mobile-features-search'>
                    <h3>Tìm kiếm gói cước theo tên gói cước và số thuê bao</h3>
                    <input type='text' placeholder='Nhập vào tên gói cước hoặc số thuê bao' value={inputValue} onChange={handleInputChange} ></input>
                    <button type="submit" onClick={handleButtonClick}>XÁC NHẬN</button>
                </div>

            </div>

            {submittedValue === '' ?
                <div className='mobile-items'>
                    <div className='mobile-display'>
                        {/* items */}
                        {mobileData.map((info, index) => (
                            <MobileItems
                                key={index}
                                isOpen={false}
                                id = {info.standard_id}
                                name={info.standard_name}
                                price={info.standard_price}
                                detail={info.detail_treatment}
                            />
                        ))}
                        {/* phan trang */}
                    </div>
                    <Pagination
                        start={1}
                        pagination={pagination}
                        onChangeValue={handleOnChange}
                    />
                </div> : <MobileBySearch
                    valueBySearch={submittedValue} />}
        </div>
    );
}
export default MobilePage;