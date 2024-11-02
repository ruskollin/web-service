import React, { useEffect, useRef, useContext } from 'react';
import { Features, Operations, Footer, Feedback, Survey, Form } from './containers';
import { LanguageContext } from './components/language/LanguageContext';
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
  const { translate } = useContext(LanguageContext);
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
                  <h1 className="gradient__text" style={{ color: 'teal' }}>{translate('slogan')}</h1>
                  <p>{translate('slogan_description')}</p>
                </div>
              </div>
            </FadeInSection>
          </div>
        </div>
      </div>
      <div className="gradient__bg__after_content">
        <div className="gradient__bg__after_content_white">
          <FadeInSection>
            <Operations translate={translate} />
          </FadeInSection>
          <FadeInSection>
            <Features translate={translate} />
          </FadeInSection>
          <FadeInSection>
            <Feedback translate={translate} />
          </FadeInSection>
          <FadeInSection>
            <Survey translate={translate} />
          </FadeInSection>
          <FadeInSection>
            <Form translate={translate} />
          </FadeInSection>
        </div>
      </div>
      <Footer translate={translate} />
    </div>
  );
};

export default App;
