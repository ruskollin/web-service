import React from 'react';
import Services from '../../components/services/Services';
import './Operations.css';
import home1 from '../../assets/home-clean.jpg';
import home2 from '../../assets/home-cleaning.jpg';
import home3 from '../../assets/home-nurse.jpg';
import home4 from '../../assets/home-random.jpg';

const Operations = ({ translate }) => (
  <div className="gpt3__whatgpt3 section__margin" id="services">
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">{translate('services')}</h1>
    </div>
    <div className="gpt3__whatgpt3-feature">
      <div className="text-container">
        <h3 style={{ fontFamily: 'Dosis', fontWeight: 800, fontSize: '18px', lineHeight: '24px', letterSpacing: '0.1em', color: 'black', textAlign: 'left' }}>{translate('services_description')}</h3>
      </div>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Services imgUrl={home1} title={translate('home_service')} text={translate('home_service_description')} />
      <Services imgUrl={home3} title={translate('home_nursing_care')} text={translate('home_nursing_care_description')} />
      <Services imgUrl={home2} title={translate('home_cleaning')} text={translate('home_cleaning_description')} />
      <Services imgUrl={home4} title={translate('voucher')} text={translate('voucher_description')} />
    </div>
  </div>
);

export default Operations;
