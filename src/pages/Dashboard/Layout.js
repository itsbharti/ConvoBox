import React from 'react';
import { Outlet } from 'react-router-dom';
import StepIndicator from './StepIndicator';
import './Layout.css'; 

const Layout = () => {
  return (
    <div className="layout">
      <StepIndicator />
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
