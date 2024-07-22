import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <div className="d-flex justify-content-end mt-4">
       <div className='mt-4'>
       <button className="btn  footer-btn">Cancel</button>
        <button className="btn  ml-4 footer-btn">Select Audience</button>
      </div>
    </div>
  );
};

export default Footer;