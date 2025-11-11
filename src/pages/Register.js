// src/pages/Register.js (Đã cập nhật)

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '@/pages/design/Auth.scss';

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // 🎯 THÊM HAI STATE MỚI
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        // 🎯 KIỂM TRA ĐẦY ĐỦ THÔNG TIN
        if (!name || !email || !password || !phone || !address) {
            setError('Vui lòng điền đầy đủ Họ tên, Email, Mật khẩu, Số điện thoại và Địa chỉ.');
            return;
        }

        try {
            // 🎯 CẬP NHẬT GỌI API VỚI DỮ LIỆU MỚI
            // Thay thế bằng endpoint API thực tế của bạn
            const response = await axios.post('YOUR_API_ENDPOINT/register', {
                name,
                email,
                password,
                phone, // GỬI DỮ LIỆU SĐT
                address, // GỬI DỮ LIỆU ĐỊA CHỈ
            });

            console.log('Đăng ký thành công:', response.data);

            alert('Đăng ký thành công! Vui lòng đăng nhập.');
            navigate('/login');
        } catch (err) {
            console.error('Lỗi đăng ký:', err);
            setError('Đã có lỗi xảy ra. Vui lòng kiểm tra lại thông tin hoặc thử lại sau.');
        }
    };

    return (
        <div className="auth-form-container">
            <h2>Đăng Ký Tài Khoản Mới</h2>

            {error && <p className="error-message">{error}</p>}

            <form className="register-form" onSubmit={handleSubmit}>
                {/* Trường Tên */}
                <label htmlFor="name">Họ và Tên</label>
                <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    id="name"
                    name="name"
                    required
                />

                {/* Trường Email */}
                <label htmlFor="email">Email</label>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    id="email"
                    name="email"
                    required
                />

                {/* Trường Mật khẩu */}
                <label htmlFor="password">Mật khẩu</label>
                <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    id="password"
                    name="password"
                    required
                />

                {/* 🎯 TRƯỜNG SỐ ĐIỆN THOẠI MỚI */}
                <label htmlFor="phone">Số điện thoại</label>
                <input
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                />

                {/* 🎯 TRƯỜNG ĐỊA CHỈ MỚI */}
                <label htmlFor="address">Địa chỉ</label>
                <input
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    type="text"
                    id="address"
                    name="address"
                    required
                />

                <button type="submit" className="submit-button">
                    Đăng Ký
                </button>
            </form>

            <p className="switch-auth">
                Đã có tài khoản? <Link to="/login">Đăng nhập</Link>
            </p>
        </div>
    );
}

export default Register;
