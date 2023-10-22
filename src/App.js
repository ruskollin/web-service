import React from 'react';
import { Footer, Blog, Features, WhatGPT3, Header } from './containers';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <div className="gradient__bg__after">
      <WhatGPT3 />
      <Features />
      <Blog />
    </div>
    <Footer />
  </div>
);

export default App;
