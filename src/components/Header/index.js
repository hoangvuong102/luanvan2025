import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

import logoImage from '@/assets/Image/logo2.png';

function Header() {
    return (
        <header className="complex-header">
            <div className="top-bar">
                <div className="container">
                    <div className="top-links">
                        <Link to="/login">
                            <i className="fa fa-user"></i> Đăng nhập
                        </Link>
                        <Link to="/register">
                            <i className="fa fa-pencil-square-o"></i> Đăng ký
                        </Link>
                    </div>
                </div>
            </div>

            <div className="main-bar">
                <div className="container main-bar-content">
                    <button className="search-button">
                        <i className="fa fa-search"></i>
                    </button>

                    <div className="logo-section">
                        <Link to="/">
                            <img src={logoImage} alt="HT Exotic Zone Logo" className="site-logo" />
                        </Link>
                    </div>
                    <div className="right-info">
                        <div className="cart-icon">
                            <span className="cart-count">0</span>
                            <i className="fa fa-shopping-basket"></i>
                        </div>

                        {/* Hotline */}
                        <div className="hotline">HOTLINE: 0779 130 793</div>
                    </div>
                </div>
            </div>
            <nav className="nav-bar">
                <div className="container nav-links">
                    <Link to="/">TRANG CHỦ</Link>
                    <Link to="/about">ABOUT US</Link>
                    <Link to="/products">SẢN PHẨM</Link>
                    <Link to="/gifts">GIỮ "BẠN"</Link>
                    <Link to="/promotions">KHUYẾN MÃI</Link>
                    <Link to="/policy">CHÍNH SÁCH BẢO HÀNH</Link>
                    <Link to="/contact">LIÊN HỆ</Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;
