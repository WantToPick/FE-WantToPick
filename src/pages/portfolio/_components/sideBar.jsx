import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="w-64 h-full bg-gray-200">
      <ul>
        <li>
          <NavLink to="/portfolio/video" activeClassName="font-bold">비디오 포트폴리오</NavLink>
        </li>
        <li>
          <NavLink to="/portfolio/image" activeClassName="font-bold">이미지 포트폴리오</NavLink>
        </li>
      </ul>
    </div>
  );
}
