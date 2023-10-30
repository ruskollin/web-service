import React from 'react';
import './value.css';

const Value = ({ text, image }) => (
  <div className="gpt3__features-container__featureV">
    <div className="gpt3__features-container__feature-titleV">
      <img src={image} alt="Values Description" className="values-image" />
    </div>
    <div className="gpt3__features-container__feature-textV">
      <p>{text}</p>
    </div>
  </div>
);

export default Value;
