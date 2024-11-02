import React from 'react';
import Value from '../../components/value/Value';
import './features.css';
import value0 from '../../assets/val0.png';
import value1 from '../../assets/val1.png';
import value2 from '../../assets/val2.png';
import value3 from '../../assets/val3.png';

const featuresData = [
  {
    title: 'Dignity',
    text: 'dignity',
    image: value0,
  },
  {
    title: 'Self-determination',
    text: 'self_determination',
    image: value1,
  },
  {
    title: 'Trust',
    text: 'trust',
    image: value2,
  },
  {
    title: 'Independence',
    text: 'independence',
    image: value3,
  },
];

const Features = ({ translate }) => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Arvomme</h1>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Value image={item.image} title={item.title} text={translate(item.text)} key={item.title + index} className="animated bounceInRight" />
      ))}
    </div>
  </div>
);

export default Features;
