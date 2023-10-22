import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';

ReactDOM.render(<ParallaxProvider><App /></ParallaxProvider>, document.getElementById('root'));
