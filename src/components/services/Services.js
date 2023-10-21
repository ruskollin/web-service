import React from 'react';
import './services.css';

const Services = ({ title, text, imgUrl }) => (
  <div className="gpt3__features-container__feature">
    <img className="gpt3__features-container__feature-img" src={imgUrl} />
    <div className="gpt3__features-container__feature-title">
      <div />
      <h1>{title}</h1>
    </div>
    <div className="gpt3__features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Services;
