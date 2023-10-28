import React from 'react';
import './value.css';

const Value = ({ title, text }) => (
  <div className="gpt3__features-container__featureV">
    <div className={title && 'gpt3__features-container__feature-titleV'}>
      <h1 style={{ color: 'black' }}>{title}</h1>
    </div>
    <div className="gpt3__features-container_feature-textV">
      <p>{text}</p>
    </div>
  </div>
);

export default Value;
