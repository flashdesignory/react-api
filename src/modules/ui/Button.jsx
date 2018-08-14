import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ label, onClick }) => (
  <button className="button" type="button" onClick={onClick}>
    <span className="label">
      {label}
    </span>
  </button>
);

Button.defaultProps = {
  label: 'button',
  onClick: () => {},
};

Button.propTypes = {
  label: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
