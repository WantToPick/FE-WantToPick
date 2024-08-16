import React from 'react';
import Sidebar from './_components/sideBar';
import ProfileHeader from './_components/profileHeader';
import { Outlet } from 'react-router-dom';

export default function PortfolioPage() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <ProfileHeader />
        <div className="flex-grow p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
