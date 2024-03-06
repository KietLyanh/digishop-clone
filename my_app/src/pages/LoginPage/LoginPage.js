import React, { useEffect, useState } from "react";
import './LoginPage.scss';
import login from "~/api/login";
import {bcrypt} from "bcryptjs/dist/bcrypt";
import {jwtDecode}  from "jwt-decode";
import logo from './imgs/logo_cas.png';
import { NavLink } from "react-router-dom";
import config from "~/config";
function LoginPage() {
  const [username, setUsername] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [error, setError] = useState(null);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Mã hóa mật khẩu trước khi gửi đến API
      const password = event.target.elements.password.value; // Lấy mật khẩu từ form
      // const hashedPassword = await bcrypt.hash(password, 10);

      // Gửi yêu cầu API đăng nhập với mật khẩu đã được mã hóa
      const response = await login.getLogin({
        username: username,
        password: password
      });

      console.log(response);

      // Xử lý kết quả từ API và cập nhật state loggedInUser
      const decoded = jwtDecode(response);
      console.log(decoded);
      localStorage.setItem('accessToken', response);

      setLoggedInUser(decoded);

      // Reset username sau khi đăng nhập thành công
      setUsername('');
    } catch (error) {
      // Xử lý lỗi nếu có
      setError(error.response ? error.response.data.message : error.message);
    }
  };
  useEffect(() => {
    const storedToken = localStorage.getItem('accessToken');
    if (storedToken) {
      const decoded = jwtDecode(storedToken);

      // Kiểm tra xem token có còn hạn không
      if (decoded.exp * 1000 < Date.now()) {
        // Token hết hạn, yêu cầu đăng nhập lại
        localStorage.removeItem('accessToken');
        setLoggedInUser(null);
        setError('Token expired, please log in again.');
      } else {
        // Token còn hạn, cập nhật trạng thái đăng nhập
        setLoggedInUser(decoded);
      }
    }
  }, [])
    return (
        <div className='login__container'>
          <div className="login__logo">
            <img src={logo} alt="opps"/>
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
                <button type="submit">Đăng Nhập</button>
                
            </form>
            <div><NavLink to={config.routes.register}>Trang đang ký</NavLink></div>
        </div>
    );
}
export default LoginPage;