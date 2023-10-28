import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faAddressCard } from '@fortawesome/free-solid-svg-icons';

import cincoLogo from '../../assets/cinco_logo.jpeg';

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
          <img src={cincoLogo} alt="cinco_logo" className="logo-cinco-footer" />
          <h4>Cinco Care Oy</h4>
          <p>Ruukuntekijäntie 13</p>
          <p>E 20, 01600 Vantaa</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Contact Info</h4>
          <p><FontAwesomeIcon icon={faAddressCard} style={{ marginRight: 10 }} />Y-tunnus: 3258415-1</p>
          <p><FontAwesomeIcon icon={faPhone} style={{ marginRight: 10 }} /> 041 312 2708</p>
          <p><FontAwesomeIcon icon={faEnvelope} style={{ marginRight: 10 }} />info@cincocare.fi</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Social Media</h4>
          <p><FontAwesomeIcon icon={faFacebook} style={{ marginRight: 10 }} /> Facebook</p>
          <p><FontAwesomeIcon icon={faInstagram} style={{ marginRight: 10 }} /> Instagram </p>
          <p><FontAwesomeIcon icon={faYoutube} style={{ marginRight: 10 }} /> Youtube </p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>{yearToday} Cinco Care. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
