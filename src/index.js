import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import './index.scss';
import App from './App';

import initResize from './utils/resize';
import initMobile from './utils/mobile';
import initHover from './utils/hover';

initResize();
initMobile();
initHover();

ReactDOM.render(
  <MemoryRouter>
    <App />
  </MemoryRouter>,
  document.getElementById('root'),
);
