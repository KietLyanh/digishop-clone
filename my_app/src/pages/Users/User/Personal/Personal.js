import React, { useState } from 'react';
import './Personal.scss';
import { ToastContainer } from 'react-toastify';
import { MobilePageTitleIcon } from '~/components/icons';
import { NavLink } from 'react-router-dom';
import config from '~/config';
import { UserIcon } from '~/components/icons';
import { jwtDecode } from 'jwt-decode';
import profile from '~/api/profile';
function Personal() {
    const storeToken = jwtDecode(localStorage.getItem('accessToken'));
    const [dataForm, setDataForm] = useState({
        username: storeToken.username,
        firstname: null,
        lastname: null,
        address: null,
        birthday: null
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { username, firstname, lastname, address, birthday } = event.target.elements;
            const newDataForm = {
                username: username.value,
                firstname: firstname.value,
                lastname: lastname.value,
                address: address.value,
                birthday: birthday.value
            };
            const response = await profile.postProfile(newDataForm);
            if(response)
            {
                console.log("thanhf cong");
            }
            setDataForm(newDataForm);
        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <div className='profile__container'>
            <div className='profile__linkpage'>
                <NavLink to={config.routes.home} className="profile__linkpage-ftitle">
                    <h4>Trang chủ</h4>
                </NavLink>
                <MobilePageTitleIcon height="15px" width="15px" />
                <h4>Thông tin cá nhân</h4>
            </div>
            <div className='profile__title'>
                <UserIcon height="22px" width="22px" />
                <h2>Thông tin cá nhân</h2>
            </div>
            <form className="profile__form" onSubmit={handleSubmit}>
                <div className="profile__form-info card-md-6">
                    <input
                        type="text"
                        id="username"
                        value={storeToken.username}
                        disabled
                    />
                </div>
                <br />
                <div className="profile__form-info card-md-6">
                    <input
                        type="text"
                        id="email"
                        value={storeToken.email}
                        disabled
                    />
                </div>
                <br />
                <div className="profile__form-info card-md-6">
                    <input
                        type="date"
                        id="birthday"
                        name='birthday'
                        value={dataForm.birthday}
                        placeholder="Ngày sinh"
                    />
                </div>
                <br />
                <div className="profile__form-info card-md-6">
                    <input
                        type="text"
                        id="fistname"
                        name='firstname'
                        value={dataForm.firstname}
                        placeholder="Họ Tên đệm"
                    />
                </div>
                <br />
                <div className="profile__form-info card-md-6">
                    <input
                        type="text"
                        id="lastname"
                        name='lastname'
                        value={dataForm.lastname}
                        placeholder="Tên"
                    />
                </div>
                <br />
                <div className="profile__form-info card-md-6">
                    <input
                        type="text"
                        id="address"
                        name='address'
                        value={dataForm.address}
                        placeholder="Địa chỉ"
                    />
                </div>
                <button className="profile__btn" type="submit">Cập Nhật Thông Tin Cá Nhân</button>
            </form>
            <ToastContainer />
        </div>
    );
}

export default Personal;
