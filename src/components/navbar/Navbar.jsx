import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
// import logo from '../../logo.svg';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <h1>Cinco Care</h1>
          {/* <img src={logo} /> */}
        </div>
        <div className="gpt3__navbar-links_container">
          <p><a href="#home">Etusivu</a></p>
          <p><a href="#wgpt3">Palvelustamme</a></p>
          <p><a href="#footer">Yhteystiedot</a></p>
          <p><a href="#features">Hinnastomme</a></p>
          <p><a href="sfd">Kieli</a></p>
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
              <p><a href="#wgpt3">Palvelustamme</a></p>
              <p><a href="#footer">Yhteystiedot</a></p>
              <p><a href="#features">Hinnastomme</a></p>
              <p><a href="sdf">Kieli</a></p>
            </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
