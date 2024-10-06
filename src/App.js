import React, { useEffect, useRef } from 'react';
import { Features, WhatGPT3, Footer, Feedback, Survey, Form } from './containers';
import { Navbar } from './components';
import nurse from './assets/nurse-pink3.jpg';
import './containers/header/header.css';
import './App.css';

function FadeInSection({ children }) {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = useRef();
  const lastRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
        if (entry.target === lastRef.current && entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      });
    });

    observer.observe(domRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className={`fade-in-section ${isVisible ? 'is-visible' : ''}`} ref={domRef}>
      {children}
      <div ref={lastRef} style={{ height: '20px' }} />
    </div>
  );
}

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
            <FadeInSection>
              <div className="gpt3__header-content">
                <div className="text-container">
                  <h1 className="gradient__text" style={{ color: 'teal' }}>Me autamme, koska välitämme</h1>
                  <p>Tarjoamme laadukasta palvelua kotona. Tavoitteenamme on tukea asiakkaita pärjäämään itsenäisesti ja turvallisesti kotona.</p>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>
      <div className="gradient__bg__after_content">
        <div className="gradient__bg__after_content_white">
          <FadeInSection>
            <WhatGPT3 />
          </FadeInSection>
          <FadeInSection>
            <Features />
          </FadeInSection>
          <FadeInSection>
            <Feedback />
          </FadeInSection>
          <FadeInSection>
            <Survey />
          </FadeInSection>
          <FadeInSection>
            <Form />
          </FadeInSection>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
