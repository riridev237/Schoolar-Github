import React from 'react';
import Welcome from './ADMIN/Welcome'; 
import '../Styles/Layout.css';
import { Outlet } from 'react-router-dom';
 
const Layout: React.FC = () => {
return (
    <div className="layout">
      <Welcome />
      <div className="page-content">
        <Outlet />
      </div>
    </div>
      
  );
};

export default Layout;