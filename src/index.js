import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import ReactDOM from 'react-dom';
import { LanguageProvider } from './components/language/LanguageProvider';

import App from './App';
import './index.css';

ReactDOM.render(<ParallaxProvider><LanguageProvider><App /></LanguageProvider></ParallaxProvider>, document.getElementById('root'));
