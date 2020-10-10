import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './styles.css';

import Banner from './Components/Banner';
import Header from './Components/Header';
import Content from './Components/Content';
import Adopt from './Components/Adopt';
import Footer from './Components/Footer';
const rootElement = document.getElementById('root');

ReactDOM.render(
  <React.StrictMode>
    <div className="auto-web">
      <Header />
      <Banner />
      <Content />
      <Adopt />
      <Footer />
    </div>
  </React.StrictMode>,
  rootElement
);
