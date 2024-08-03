import React, { useEffect, useState } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/images/header/logo.png';
import { GoPerson } from 'react-icons/go';
import LoginPopup from './_components/loginPopup';
import { routes } from '../constants/routes';

export default function Header() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isQuickcastingHover, setIsQuickcastingHover] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
    if (!isPopupOpen) {
      navigate('/login');
    } else {
      navigate(location.pathname.split('/login')[0]);
    }
  };

  useEffect(() => {
    if (location.pathname.includes('/login')) {
      setIsPopupOpen(true);
    } else {
      setIsPopupOpen(false);
    }
  }, [location]);

  return (
    <>
      <header className="bg-white text-black shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <Link to={routes.home}>
              <img src={logo} alt="Logo" className="w-12 mr-8" />
            </Link>
            <nav className="flex space-x-1">
              <Link
                to={routes.home}
                className="relative group text-black px-6 py-1 rounded-full hover:bg-black hover:text-white transition-all duration-200 ease-in-out"
              >
                HOME
              </Link>
              <Link
                to={routes.trainingRoom}
                className="relative group text-black px-6 py-1 rounded-full hover:bg-black hover:text-white transition-all duration-200 ease-in-out"
              >
                트레이닝룸
              </Link>
              <Link
                to={routes.recruit}
                className="relative group text-black px-6 py-1 rounded-full hover:bg-black hover:text-white transition-all duration-200 ease-in-out"
              >
                모집공고
              </Link>
              <div className="relative group text-black px-6 py-1 rounded-t-2xl hover:bg-black hover:text-white transition-all duration-200 ease-in-out"
                onMouseEnter={() => setIsQuickcastingHover(true)}
                onMouseLeave={() => setIsQuickcastingHover(false)}
              >
                퀵 캐스팅
                {isQuickcastingHover && (
                  <div className="absolute top-full left-0 bg-black text-white rounded-b-2xl border-t border-t-1 border-white shadow-lg p-4">
                    <Link to={routes.profilePick} className="text-xs block hover:text-gray-400 py-1">
                      PROFILE PICK
                    </Link>
                    <Link to={routes.videoPick} className="text-xs block hover:text-gray-400 py-1">
                      VIDEO PICK
                    </Link>
                  </div>
                )}
              </div>
              <Link
                to={routes.community}
                className="relative group text-black px-6 py-1 rounded-full hover:bg-black hover:text-white transition-all duration-200 ease-in-out"
              >
                커뮤니티
              </Link>
            </nav>
          </div>
          <div className="flex items-center space-x-4 relative">
            {isLoggedIn && <GoPerson className="text-2xl cursor-pointer" />}
            <button onClick={togglePopup} className="hover:text-gray-700">
              {isLoggedIn ? '로그아웃' : '로그인'}
            </button>
          </div>
        </div>
        <LoginPopup isOpen={isPopupOpen} togglePopup={togglePopup} />
      </header>
      <Outlet />
    </>
  );
}
