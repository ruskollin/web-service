import React from 'react';
// import { ParallaxBanner } from 'react-scroll-parallax';
// import nurse from '../../assets/nurse-pink3.jpg';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    {/* <div className="img-thumbnail-1">
      <img src={nurse} alt="Hand on chest" className="fixed-image" /> */}
    {/* <ParallaxBanner style={{ height: '100vh' }} layers={[{ image: nurse, speed: 15 }]} className="aspect-[2/1]" /> */}
    {/* </div> */}
    <div className="img-content-1">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Me autamme, koska välitämme</h1>
        <p>Tarjoamme laadukasta palvelua kotona. Tavoitteenamme on tukea asiakkaita pärjäämään itsenäisesti ja turvallisesti kotona.</p>
      </div>
    </div>
  </div>
);

export default Header;
