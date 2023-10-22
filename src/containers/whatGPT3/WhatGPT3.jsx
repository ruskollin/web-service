import React from 'react';
import Services from '../../components/services/Services';
import './whatGPT3.css';
import home1 from '../../assets/home-clean.jpg';
import home2 from '../../assets/home-cleaning.jpg';
import home3 from '../../assets/home-nurse.jpg';
import home4 from '../../assets/home-random.jpg';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <h3 style={{ fontFamily: 'var(--font-family)', fontWeight: 800, fontSize: '18px', lineHeight: '24px', letterSpacing: '-0.04em', color: 'white' }}>Tuotamme kotihoito-, kotisairaanhoito- sekä asumisen tukipalveluja ikäihmisille, vammaisille ja kehitysvammaisille. Palvelemme kunnissa Helsinki, Espoo, Vantaa ja Kirkkonummi.</h3>
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Palvelumme</h1>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Services imgUrl={home1} title="Kotipalvelut" text="Tarjoamme apua ja avustusta asiakkaiden päivittäisissä toiminnoissa (saattaja-apu, henkilökohtainen hygienia, ruokailu, ulkoilu, kauppapalvelut). Varmistamme, että asiakkailla on turvallinen kotiympäristö." />
      <Services imgUrl={home3} title="Kotisairaanhoito palvelut" text="Tarjoamme perussairaanhoitoa  (haavahoito, lääkehoito, pistokset, katetrointi, ompeleiden poisto). Huolehdimme siitä, että asiakkaat saavat laadukasta hoitoa kotona." />
      <Services imgUrl={home2} title="Kotisiivous palvelut" text="Tarjoamme asumisen  kotisiivousta ja pyykkihuoltoa. Kotisiivouksen tärkeä asia on kodin siisteys asiakkaiden mielekkään elämän edistämiseksi. " />
      <Services imgUrl={home4} title="Palvelusetelit" text="Hyväksymme myös Helsingin kaupungin kotihoidon- ja kotisiivouksen myöntämiä palveluseteleitä. Palveluseteli on maksusitoumus, jolla voit ostaa palveluja yksityisiltä palveluntarjoajilta. Helsingin kaupunki (insert link here, below) https://www.hel.fi/fi/sosiaali-ja-terveyspalvelut/asiakkaan-tiedot-ja-oikeudet/palveluseteli." />
    </div>
  </div>
);

export default WhatGPT3;
