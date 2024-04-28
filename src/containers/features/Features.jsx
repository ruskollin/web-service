import React from 'react';
import Value from '../../components/value/Value';
import './features.css';
import value0 from '../../assets/val0.png';
import value1 from '../../assets/val1.png';
import value2 from '../../assets/val2.png';
import value3 from '../../assets/val3.png';

const featuresData = [
  {
    title: 'Ihmisarvo',
    text: 'Ihmisarvo on jokaisen syntymässä saama arvo. Ihmisarvo on yhdenvertaisuutta.',
    image: value0,
  },
  {
    title: 'Itsemääräämisoikeus',
    text: 'Itsemääräämisoikeus on vapautta valita ja elää omilla ehdoilla. Luottamus on luottamista toisen apuun, sovittuihin aikoihin. Yksikön toimintaperiaatteet ovat asiakaskeskeisyys, luotettavuus, kokonaisvaltaisuus, jatkuvuus, sitoutuminen, turvallisuus ja vuorovaikutus.',
    image: value1,
  },
  {
    title: 'Luottamus',
    text: 'Kotiin tarjottavia palveluja tuotetaan luottamuksellisesti ja luontevasti. Kunnioitetaan asiakkaan itsemääräämisoikeutta ja hänen tapojaan toimia.',
    image: value2,
  },
  {
    title: '',
    text: 'Asiakas ohjataan itsenäiseen toimintaan kunnioittavasti. Työssä käytetään kuntouttavaa työotetta ja rohkaistaan asiakasta omatoimisuuteen. Palveluissa noudatetaan aina kaupungin sääntökirjaa palvelusetelipalveluiden tuottamisesta.',
    image: value3,
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Arvomme</h1>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Value image={item.image} title={item.title} text={item.text} key={item.title + index} className="animated bounceInRight" />
      ))}
    </div>
  </div>
);

export default Features;
