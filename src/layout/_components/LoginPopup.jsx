import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function LoginPopup({ isOpen, togglePopup }) {
  const navigate = useNavigate();
  const location = useLocation();

  const closePopup = () => {
    togglePopup();
    navigate(location.pathname.split('/login')[0]); // 현재 경로에서 '/login'을 제거하여 원래 경로로 돌아감
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg w-3/4 h-3/4 flex relative">
        <button
          onClick={closePopup}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          &#x2715; {/* Unicode character for X */}
        </button>
        <div className="w-1/2 bg-gray-100 p-8 flex flex-col items-center">
          좌측 내용 추가하기
        </div>
        <div className="w-1/2 p-8 flex flex-col justify-center h-full">
          <h2 className="text-2xl font-bold mb-4">Log in</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Email or Username</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Password</label>
              <input
                type="password"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">로그인 유지</span>
              </label>
            </div>
            <button
              type="button"
              className="w-full bg-black text-white py-2 rounded-lg"
            >
              Log in now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
