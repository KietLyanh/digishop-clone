import { useEffect, useState } from 'react';
import Listsim from '~/api/listsim';
import { MobileSimIconSearch } from '~/components/icons';
import './MobileSimList.scss';
import Pagination from '~/components/Pagination/Pagination';
import Button from '~/components/Button';

function MobileSimList() {
    // console.log(pagination);
    const [simData,setSimData] = useState([]);
    const [pagination,setPagination] = useState({
        page: 1,
        totalPages:3,
        limit: 10,
        
    });
    const [filters,setFilters] = useState({
        page:1,
        totalPages:3,
        limit:10,
       
    });
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await Listsim.getByParams(filters);
                
                const {data, pagination} = response;
                const jsonString = JSON.stringify(data);
                const dataArray = JSON.parse(jsonString);
                // const dataArray = JSON.parse(jsonString);
                
                setSimData(dataArray);
                setPagination(pagination);
                // console.log(dataArray);
                
            } catch (error) {
                console.log(error);
            }
        };
        fetchData()
    },[filters]);


    const handleOnChangePage = (newpage) => {
        setFilters({
            ...filters,
            page:newpage
        })
    }
    const {page,totalPages,limit} = pagination;
    let startPageNumber = (page === 1) ? 1 : ((page-1)*limit + 1);
    let endPageNumber = (page === totalPages) ? (totalPages*limit) : (page)*limit;

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleButtonClick = () => {
        // Lưu giá trị vào state submittedValue khi nút được nhấn
        console.log(inputValue);
        setFilters({
            keyword:inputValue
        })
    };
    return (
        <div className="mbsim__list col-md-9">
            <div className="mbsim__list-search">
                <input type='text' className="mbsim__list-search-ip" placeholder='Nhập số thuê bao cần tìm...' onChange={handleInputChange} />
                <div onClick={handleButtonClick}>
                    <MobileSimIconSearch className="mbsim__list-search-ico" height="20px" width="20px"/>
                </div>
            </div>

            

            <div className="mbsim__list-table">

                <p>Hiển thị từ {startPageNumber}-{endPageNumber} của {totalPages*limit} kết quả. </p>

                <table>
                    <thead>
                        <tr>
                            <td>STT</td>
                            <td>Số Sim</td>
                            <td className='d-lg-table-cell d-none'>Loại thuê bao</td>
                            <td className='d-lg-table-cell d-none'>Cước cam kết</td>
                            <td className='d-lg-table-cell d-none'>Thời gian cam kết</td>
                            <td></td>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            simData?.map((item,index) => (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td className="blue-bold">{item.sim_number_name}</td>
                                    <td className='d-lg-table-cell d-none'>{item.sim_number_type}</td>
                                    <td className='d-lg-table-cell d-none'>{item.sim_number_fee} đ/tháng</td>
                                    <td className='d-lg-table-cell d-none'>{item.sim_number_time} tháng</td>
                                    <td><Button lv="lv0" text="MUA NGAY" border="none" color="#fff" backgroundColor="rgb(58, 164, 246)" height="30px" fontSize="1.3rem" fontWeight="600"/></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>

            <Pagination start={1} pagination={pagination} onChangeValue={handleOnChangePage} />
        </div>
    );
}
export default MobileSimList;