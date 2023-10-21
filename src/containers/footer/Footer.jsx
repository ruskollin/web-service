import React from 'react';
import './footer.css';

const Footer = () => {
  const yearToday = new Date().getFullYear();
  return (
    <div className="gpt3__footer section__padding" id="footer">
      {/* <div className="gpt3__footer-heading">
        <h1 className="gradient__text">Do you want to step in to the future before others</h1>
      </div>

      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div> */}

      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <h1 style={{ color: 'white' }}>Cinco Care Logo</h1>
          <p>Ruukuntekijäntie 13</p>
          <p>E 20, 01600 Vantaa</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Cinco Care Oy</h4>
          <p>Y-tunnus: 3258415-1</p>
          <p>041 312 2708</p>
          <p>info@cincocare.fi</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Social Media</h4>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Youtube</p>
        </div>
      </div>

      <div className="gpt3__footer-copyright">
        <p>{yearToday} Cinco Care. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
