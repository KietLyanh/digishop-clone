import { MobileSimIconSearch } from '~/components/icons';
import './MobileSimList.scss';

function MobileSimList({listmobilesim}) {
    return (
        <div className="mbsim__list col-md-9">
            <div className="mbsim__list-search">
                <input type='text' className="mbsim__list-search-ip" placeholder='Nhập số thuê bao cần tìm...'/>
                <MobileSimIconSearch className="mbsim__list-search-ico" height="20px" width="20px"/>
            </div>

            <div className="mbsim__list-table">
                <table>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Số Sim</th>
                            <th>Loại thuê bao</th>
                            <th>Cước cam kết</th>
                            <th>Thời gian cam kết</th>
                            <th></th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            listmobilesim?.map((item,index) => (
                                <tr key={index}>
                                    <td>{item.sim_number_id}</td>
                                    <td>{item.sim_number_name}</td>
                                    <td>{item.sim_number_type}</td>
                                    <td>{item.sim_number_fee}đ/tháng</td>
                                    <td>{item.sim_number_time}tháng</td>
                                    <td></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default MobileSimList;