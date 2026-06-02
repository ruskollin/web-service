import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
// import Lottie from 'lottie-react';
import cincoLogo from '../../assets/cinco_logo.jpeg';
// import xmas from '../../assets/xmas.json';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <div className="logo-container">
            <img src={cincoLogo} alt="cinco_logo" className="logo-cinco" />
            <h1 className="logo-title">Cinco Care</h1>
            {/* <div className="lottie-container">
              <Lottie animationData={xmas} />
            </div> */}
          </div>
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Etusivu</a></p>
          <p><a href="#services">Palvelustamme</a></p>
          <p><a href="#footer">Yhteystiedot</a></p>
        </div>
      </div>
      <div className="gpt3__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="gpt3__navbar-menu_container scale-up-center">
            <div className="gpt3__navbar-menu_container-links">
              <p><a href="#home">Etusivu</a></p>
              <p><a href="#services">Palvelustamme</a></p>
              <p><a href="#footer">Yhteystiedot</a></p>
              {/* <p><a href="sdf">Kieli</a></p> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
