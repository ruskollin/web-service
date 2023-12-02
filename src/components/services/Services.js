import React from 'react';
import './services.css';

const Services = ({ title, text, imgUrl }) => (
  <div className="gpt3__features-container__feature">
    <img className="gpt3__features-container__feature-img" src={imgUrl} />
    <div className="gpt3__features-container__feature-title-text">
      <div className="gpt3__features-container__feature-title">
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </div>
  </div>
);

export default Services;
