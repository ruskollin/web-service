import React from 'react';
import Value from '../../components/value/Value';
import './features.css';

const featuresData = [
  {
    title: 'Ihmisarvo',
    text: 'Ihmisarvo on jokaisen syntymässä saama arvo. Ihmisarvo on yhdenvertaisuutta.',
  },
  {
    title: 'Itsemääräämisoikeus',
    text: 'Itsemääräämisoikeus on vapautta valita ja elää omilla ehdoilla. Luottamus on luottamista toisen apuun, sovittuihin aikoihin. Yksikön toimintaperiaatteet ovat asiakaskeskeisyys, luotettavuus, kokonaisvaltaisuus, jatkuvuus, sitoutuminen, turvallisuus ja vuorovaikutus.',
  },
  {
    title: 'Luottamus',
    text: 'Kotiin tarjottavia palveluja tuotetaan luottamuksellisesti ja luontevasti. Kunnioitetaan asiakkaan itsemääräämisoikeutta ja hänen tapojaan toimia.',
  },
  {
    title: '',
    text: 'Asiakas ohjataan itsenäiseen toimintaan kunnioittavasti. Työssä käytetään kuntouttavaa työotetta ja rohkaistaan asiakasta omatoimisuuteen. Palveluissa noudatetaan aina kaupungin sääntökirjaa palvelusetelipalveluiden tuottamisesta.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding animatedbounceInRight">
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">Ihmisarvo, Itsemääräämisoikeus ja luottamus</h1>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item, index) => (
          <Value title={item.title} text={item.text} key={item.title + index} className="animated bounceInRight" />
        ))}
      </div>
    </div>
  </div>
);

export default Features;
