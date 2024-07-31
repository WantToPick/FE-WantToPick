import React, { useState } from 'react';
import logo from '../assets/images/header/logo.png';
import { FaUserCircle } from 'react-icons/fa';
import LoginPopup from './_components/LoginPopup';

export default function Header() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <header className="bg-white text-black shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/">
            <img src={logo} alt="Logo" className="w-12 mr-8" />
          </a>
          <nav className="flex space-x-4">
            <a href="/" className="hover:text-gray-700">
              HOME
            </a>
            <a href="/guickcasting" className="hover:text-gray-700">
              퀵캐스팅
            </a>
            <a href="/recruit" className="hover:text-gray-700">
              모집공고
            </a>
            <a href="/community" className="hover:text-gray-700">
              커뮤니티
            </a>
          </nav>
        </div>
        <div className="flex items-center space-x-4 relative">
          <FaUserCircle className="text-2xl cursor-pointer" />
          <button onClick={togglePopup} className="hover:text-gray-700">
            {isLoggedIn ? '로그아웃' : '로그인'}
          </button>
        </div>
      </div>
      <LoginPopup isOpen={isPopupOpen} togglePopup={togglePopup} />
    </header>
  );
}
