import React from 'react';
import './services.css';

const Services = ({ title, text, imgUrl }) => {
  const linkToHelsinki = 'https://www.hel.fi/fi/sosiaali-ja-terveyspalvelut/asiakkaan-tiedot-ja-oikeudet/palveluseteli';

  return (
    <div className="gpt3__features-container__feature">
      <img className="gpt3__features-container__feature-img" src={imgUrl} />
      <div className="gpt3__features-container__feature-title-text">
        <div className="gpt3__features-container__feature-title">
          <h1>{title}</h1>
          <p>{text}{title === 'Palvelusetelit' && <p>Lue lisää: <a style={{ color: 'blue', textDecoration: 'underline', marginLeft: 10 }} href={linkToHelsinki} target="_blank" rel="noopener noreferrer">Helsingin Kaupungin Palvelusetelit</a></p>}</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
