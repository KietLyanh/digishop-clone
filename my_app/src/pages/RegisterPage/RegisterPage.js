import React, { useState } from 'react';
import './RegisterPage.scss';
import bcrypt from 'bcryptjs';
import register from '~/api/register';
import config from '~/config';
import logo from './imgs/logo_cas.png';
import { NavLink } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const RegisterPage = () => {
  const [username,setUserName] = useState('');
  const [email,setEmail] = useState('');

  const handleRegister = async (event) => {
    event.preventDefault();
     try {
      const password = event.target.elements.password.value;
      if(password === '' || username === '' || email === '')
      {
        toast.error('Thiếu thông tin đăng ký!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
     else {
      const hashedPassword = await bcrypt.hash(password, 10);
      //Gửi dữ liệu đăng ký qua API
      const response = await register.postRegister({
        username:username,
        password: hashedPassword,
        email: email,
      });
      if(response)
      {
        toast.success('Đăng ký thành công!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
      event.target.elements.password.value = '';
     }
    } catch (error) {
      console.error('Đã xảy ra lỗi:', error);
    }
  };

  return (
    <div className='register__container'>
    <div className="register__logo">
      <img src={logo} alt="opps"/>
    </div>
    <form className="register__form" onSubmit={handleRegister}>
        <input
          type="text"
          name='username'
          placeholder="Tên đăng nhập"
          onChange={(e) => setUserName(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="Mật khẩu"
          name="password" // Set the name attribute to "password"
        />
        <br />
        <input
          type="email"
          placeholder="Email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="register__btn" type="submit">Đăng Ký</button>
      </form>
      <div
      style={{
        marginTop:"30px"
      }}
      ><NavLink to={config.routes.login}>
        <button className="register__btn">TRỞ LẠI ĐĂNG NHẬP</button>
        </NavLink></div>

        <ToastContainer/>
      </div>
  );
};
export default RegisterPage;