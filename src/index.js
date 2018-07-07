import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './app';

import initResize from './utils/resize';
import initMobile from './utils/mobile';
import initHover from './utils/hover';

initResize();
initMobile();
initHover();

ReactDOM.render(
  <App />, document.getElementById('root'),
);
