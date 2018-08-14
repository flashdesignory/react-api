import React from 'react';
import './Preloader.scss';

const Preloader = () => (
  <div className="preloader">
    <div className="spinner">
      <div className="bounce1" />
      <div className="bounce2" />
      <div className="bounce3" />
    </div>
  </div>
);

export default Preloader;
