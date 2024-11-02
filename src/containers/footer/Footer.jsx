import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faAddressCard } from '@fortawesome/free-solid-svg-icons';
import documentFile from './cinco.pdf';

import cincoLogo from '../../assets/cinco_logo.jpeg';
import luotettavaLogo from '../../assets/luotettava.png';

const Footer = ({ translate }) => {
  const yearToday = new Date().getFullYear();
  return (
    <div className="gpt3__footer section__padding" id="footer">
      <div className="gpt3__footer-links">
        <div className="gpt3__footer-links_logo">
          <div className="logo_company">
            <img src={cincoLogo} alt="cinco_logo" className="logo-cinco-footer" />
            <h2 style={{ marginLeft: 10 }}>Cinco Care Oy</h2>
          </div>
          <p>Ruukuntekijäntie 13</p>
          <p>E 20, 01600 Vantaa</p>
          <a href={documentFile} target="_blank" rel="noreferrer" className="custom-link">{translate('plan')}</a>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>{translate('contacts')}</h4>
          <p><FontAwesomeIcon icon={faAddressCard} style={{ marginRight: 10 }} />{translate('business_number')}: 3258415-1</p>
          <p><FontAwesomeIcon icon={faPhone} style={{ marginRight: 10 }} /> 041 312 2708</p>
          <p><FontAwesomeIcon icon={faEnvelope} style={{ marginRight: 10 }} />info@cincocare.fi</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>{translate('social_media')}</h4>
          <p><FontAwesomeIcon icon={faFacebook} style={{ marginRight: 10, color: '#1877F2' }} /> <a href="https://www.facebook.com/profile.php?id=100081762541245" target="_blank" rel="noreferrer" style={{ color: '#3b5998' }}>Facebook</a></p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <img src={luotettavaLogo} alt="company you can trust logo" className="luotettava-footer" />
        <p>{yearToday} Cinco Care. {translate('rights_reserved')}</p>
      </div>
    </div>
  );
};

export default Footer;
