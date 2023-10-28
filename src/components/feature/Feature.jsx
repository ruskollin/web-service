import React from 'react';
import './feature.css';

const Feature = ({ title, text }) => (
  <div className="gpt3__features-container__feature">
    <div className={title && 'gpt3__features-container__feature-title'}>
      <h1 style={{ color: 'black' }}>{title}</h1>
    </div>
    <div className="gpt3__features-container_feature-text">
      <p>{text}</p>
    </div>
  </div>
);

export default Feature;
