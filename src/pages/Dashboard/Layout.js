import React from 'react';
import { Outlet } from 'react-router-dom';
import StepIndicator from './StepIndicator'; // Adjust the path as needed
import { Box } from '@mui/material';

const Layout = ({ activeStep, setActiveStep }) => {
  return (
    <div className="layout">
      <Box sx={{ width: '100%' }}>
        <StepIndicator activeStep={activeStep} setActiveStep={setActiveStep} />
      </Box>
      <Outlet />
    </div>
  );
};

export default Layout;
