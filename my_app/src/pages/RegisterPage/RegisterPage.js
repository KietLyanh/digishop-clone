import React, { useState } from 'react';
import bcrypt from 'bcryptjs';
import register from '~/api/register';
const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
  });
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
     try {
      const hashedPassword = await bcrypt.hash(password, 10);
        console.log(formData.username,hashedPassword,formData.email);
      //Gửi dữ liệu đăng ký qua API
      const response = await register.postRegister({
        username:formData.username,
        password: hashedPassword,
        email: formData.email,
        rolename: 'ADMIN'
      });
      if (response.ok) {
        const data = await response.json();
        alert('Đăng ký thành công!\n' + JSON.stringify(data));
      } else {
        alert('Đăng ký thất bại. Vui lòng thử lại sau.');
      }
    } catch (error) {
      console.error('Đã xảy ra lỗi:', error);
    }
  };

  return (
    <div>
      <h2>Đăng ký người dùng</h2>
      <label>
        Tên người dùng:
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Mật khẩu:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button onClick={handleRegister}>Đăng ký</button>
    </div>
  );
};
export default RegisterPage;