import React, { useEffect } from 'react';
import { Footer, Blog, WhatGPT3 } from './containers';
import { Navbar } from './components';
import nurse from './assets/nurse-pink3.jpg';
import './containers/header/header.css';
import './App.css';

const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <div className="gpt3__header section__padding" id="home">
          <div className="img-thumbnail-1">
            <img src={nurse} alt="Hand on chest" className="fixed-image" />
          </div>
          <div className="img-content-1">
            <div className="gpt3__header-content">
              <h1 className="gradient__text">Me autamme, koska välitämme</h1>
              <p>Tarjoamme laadukasta palvelua kotona. Tavoitteenamme on tukea asiakkaita pärjäämään itsenäisesti ja turvallisesti kotona.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="gradient__bg__after_content">
        <div className="gradient__bg__after_content_white">
          <WhatGPT3 />
          {/* <Features /> */}
          <Blog />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
