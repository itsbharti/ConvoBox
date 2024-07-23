import React from 'react';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';

const Footer = ({setActiveStep}) => {
  
  const navigate = useNavigate();

  const handleSelectAudience = () => {
    setActiveStep(1);
    navigate('/map-template-variable');
  }
  return (
    <div className="d-flex justify-content-end mt-4">
       <div className='mt-4'>
       <button className="btn  footer-btn">Cancel</button>
        <button onClick={handleSelectAudience} className="btn  ml-4 footer-btn">Select Audience</button>
      </div>
    </div>
  );
};

export default Footer;