import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './sections/Header';
import reportWebVitals from './reportWebVitals';
import ExchangeRates from './sections/ExchangeRates';
import Benefits from './sections/Benefits';
import Plans from './sections/Plans';
import Foater from './sections/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <ExchangeRates/>
    <Benefits/>
    <Plans/>
    <Foater/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
