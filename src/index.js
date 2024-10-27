import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import LanguageProvider from './components/language/LanguageProvider';

import App from './App';
import './index.css';

ReactDOM.render(<Provider store={store}><ParallaxProvider><LanguageProvider><App /></LanguageProvider></ParallaxProvider></Provider>, document.getElementById('root'));
