import React from 'react';
import Header from './header';
import Footer from './footer';
import { Outlet, useLocation } from 'react-router-dom';

export default function Layout() {
  const location = useLocation();

  const isPortfolioPage = location.pathname === '/portfolio';

  return (
    <div className="flex flex-col min-h-screen">
      {/* PortfolioPage에서는 Header를 숨기기 */}
      {!isPortfolioPage && <Header />}
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
