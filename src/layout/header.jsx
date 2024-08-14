import React, { useEffect, useState } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo.png';
import { GoPerson } from 'react-icons/go';
import LoginPopup from './_components/loginPopup';
import { routes } from '../constants/routes';

export default function Header() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isTrainingRoomHover, setIsTrainingRoomHover] = useState(false);
  const [isCommunityHover, setIsCommunityHover] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const togglePopup = () => {
    if (isLoggedIn) {
      // 로그아웃 로직
      setIsLoggedIn(false);
      navigate(location.pathname);  // 현재 페이지를 그대로 유지
    } else {
      // 로그인 팝업 열기/닫기 로직
      setIsPopupOpen(!isPopupOpen);
      if (!isPopupOpen) {
        navigate('/login');
      } else {
        navigate(location.pathname.split('/login')[0]);
      }
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
      <header className="bg-white text-black shadow-md fixed w-full h-[60px] z-50">
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
              <div className="relative group text-black px-6 py-1 rounded-t-2xl hover:bg-black hover:text-white transition-all duration-200 ease-in-out"
                onMouseEnter={() => setIsTrainingRoomHover(true)}
                onMouseLeave={() => setIsTrainingRoomHover(false)}
              >
                트레이닝룸
                {isTrainingRoomHover && (
                  <div className="absolute top-full left-0 bg-black text-white rounded-b-2xl border-t border-t-1 border-white shadow-lg p-4 w-[117px] text-center">
                    <Link to={routes.vocalTraining} className="text-sm block hover:text-gray-400 py-1">
                      보컬 트레이닝
                    </Link>
                    <Link to={routes.danceTraining} className="text-sm block hover:text-gray-400 py-1">
                      댄스 트레이닝
                    </Link>
                  </div>
                )}
              </div>
              <Link
                to={routes.recruit}
                className="relative group text-black px-6 py-1 rounded-full hover:bg-black hover:text-white transition-all duration-200 ease-in-out"
              >
                모집공고
              </Link>
              <div className="relative group text-black px-6 py-1 rounded-t-2xl hover:bg-black hover:text-white transition-all duration-200 ease-in-out"
                onMouseEnter={() => setIsCommunityHover(true)}
                onMouseLeave={() => setIsCommunityHover(false)}
              >
                커뮤니티
                {isCommunityHover && (
                  <div className="absolute top-full left-0 bg-black text-white rounded-b-2xl border-t border-t-1 border-white shadow-lg p-4 w-[103.5px] text-center">
                    <Link to={routes.freeBoard} className="text-sm block hover:text-gray-400 py-1">
                      자유게시판
                    </Link>
                    <Link to={routes.teamRecruit} className="text-sm block hover:text-gray-400 py-1">
                      팀 모집
                    </Link>
                  </div>
                )}
              </div>
            </nav>
          </div>
          <div className="flex items-center space-x-4 relative">
            {isLoggedIn && <GoPerson className="text-2xl cursor-pointer" />}
            <button onClick={togglePopup} className="hover:text-gray-700">
              {isLoggedIn ? '로그아웃' : '로그인'}
            </button>
          </div>
        </div>
        <LoginPopup isOpen={isPopupOpen} togglePopup={togglePopup} setIsLoggedIn={setIsLoggedIn} />
      </header>
      <div className="pt-[60px]"></div>
    </>
  );
}
