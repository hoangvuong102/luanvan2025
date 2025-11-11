import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

import '@/pages/design/Auth.scss';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const API_LOGIN_ENDPOINT = 'http://localhost:8080/api/auth/login';

    const handleSubmit = async (e) => {
        e.preventDefault(); // Ngăn trình duyệt reload trang
        setError(''); // Xóa lỗi cũ

        if (!email || !password) {
            setError('Vui lòng nhập đầy đủ Email và Mật khẩu.');
            return;
        }

        try {
            const response = await axios.post(API_LOGIN_ENDPOINT, {
                email,
                password,
            });

            console.log('Đăng nhập thành công:', response.data);

            // Xử lý thành công
            localStorage.setItem('userToken', response.data.token);
            navigate('/');
        } catch (err) {
            console.error('Lỗi đăng nhập:', err);

            // Xử lý lỗi chi tiết từ server
            if (err.response) {
                // Ví dụ: Lỗi 401 (Sai thông tin đăng nhập)
                if (err.response.status === 401) {
                    setError('Email hoặc Mật khẩu không chính xác.');
                }
                // Sử dụng thông báo lỗi cụ thể từ server nếu có
                else {
                    setError(err.response.data.message || 'Lỗi đăng nhập không xác định. Vui lòng thử lại.');
                }
            } else {
                setError('Không thể kết nối đến máy chủ. Vui lòng kiểm tra kết nối Internet.');
            }
        } finally {
            setIsLoading(false); // Kết thúc loading
        }
    };

    return (
        <div className="auth-form-container">
            <h2>Đăng Nhập</h2>

            {/* Hiển thị lỗi nếu có */}
            {error && <p className="error-message">{error}</p>}

            <form className="login-form" onSubmit={handleSubmit}>
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

                <button type="submit" className="submit-button">
                    Đăng Nhập
                </button>
            </form>

            <p className="switch-auth">
                Chưa có tài khoản? <Link to="/register">Đăng ký ngay</Link>
            </p>
        </div>
    );
}

export default Login;
