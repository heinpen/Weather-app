// eslint-disable-next-line no-use-before-define
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WeatherBox from './Weather/Weather';

ReactDOM.render(
  <React.StrictMode>
    <WeatherBox />
  </React.StrictMode>,

  document.getElementById('root'),
);
