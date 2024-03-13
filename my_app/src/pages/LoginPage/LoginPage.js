import React, { useEffect, useState } from "react";
import './LoginPage.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import login from "~/api/login";
import logo from './imgs/logo_cas.png';
import { NavLink, useNavigate } from "react-router-dom";
import config from "~/config";
import { jwtDecode } from "jwt-decode";
function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const password = event.target.elements.password.value; // Lấy mật khẩu từ form
      const response = await login.postLogin({
        username: username,
        password: password
      });
      if (response && response.token) {

        localStorage.setItem('accessToken', response.token);
        localStorage.setItem('username',jwtDecode(response.token).username)
        localStorage.setItem('role',jwtDecode(response.token).rolename)
        navigate('/');
      }
      else {
        toast.error('Đăng nhập không thành công!', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
      // Reset username sau khi đăng nhập thành công
      setUsername('');
      event.target.elements.password.value = '';
    } catch (error) {
      // Xử lý lỗi nếu có
      toast.error('Đăng nhập không thành công!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  };
  return (
    <div className='login__container'>
      <div className="login__logo">
        <img src={logo} alt="opps" />
      </div>
      <form className="login__form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={handleUsernameChange}
          placeholder="Tên đăng nhập"
        />
        <br />
        <input
          type="password"
          placeholder="Mật khẩu"
          name="password"

        />
        <br />
        <button className="login__btn" type="submit">Đăng Nhập</button>

      </form>
      <div
        style={{
          marginTop: "30px"
        }}
      ><NavLink to={config.routes.register}>
          <button className="login__btn">Đăng Ký</button>
        </NavLink></div>
      <ToastContainer />
    </div>
  );
}
export default LoginPage;