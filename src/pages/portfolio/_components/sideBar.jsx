import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';

// React Icons 임포트
import { FaHome, FaFileAlt, FaRegImage } from 'react-icons/fa';
import { MdVideoLibrary } from 'react-icons/md';

export default function Sidebar() {
  return (
    <div className="w-64 h-full bg-white px-8 py-3">
      <div className="mb-10">
        <img src={logo} alt="Logo" className="w-12 mb-10" />
        <h1 className="text-2xl font-bold">MY PORTFOLIO</h1>
        <p className="text-gray-500 text-sm">나를 보여주는 포트폴리오를 만들어볼까?</p>
      </div>

      <ul className="space-y-4">
        <li className="border-b border-gray-300">
          <NavLink to="/home" className="flex items-center space-x-2 text-black hover:font-bold">
            <FaHome className="w-5 h-5 text-gray-400" />
            <span>메인 화면으로 돌아가기</span>
          </NavLink>
        </li>
        <li className="border-b border-gray-300">
          <NavLink to="/profile" className="flex items-center space-x-2 text-black hover:font-bold">
            <FaFileAlt className="w-5 h-5 text-gray-400" />
            <span>자기소개서</span>
          </NavLink>
        </li>
        <li className="border-b border-gray-300">
          <div className="flex items-center space-x-2 text-black mt-4">
            <MdVideoLibrary className="w-5 h-5 text-gray-400" />
            <p>비디오 포트폴리오</p>
          </div>
          <ul className="ml-7 space-y-2 my-2">
            <li>
              <NavLink to="/portfolio/video/vocal" activeClassName="font-bold" className="text-black hover:font-bold">보컬</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio/video/dance" activeClassName="font-bold" className="text-black hover:font-bold">댄스</NavLink>
            </li>
            <li>
              <NavLink to="/portfolio/video/rap" activeClassName="font-bold" className="text-black hover:font-bold">랩</NavLink>
            </li>
          </ul>
        </li>
        <li className="border-b border-gray-300">
          <NavLink to="/portfolio/image" className="flex items-center space-x-2 text-black hover:font-bold">
            <FaRegImage className="w-5 h-5 text-gray-400" />
            <span>이미지 포트폴리오</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
