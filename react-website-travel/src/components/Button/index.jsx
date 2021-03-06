import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

const STYLES = ['btn--primary','btn--outline']
const SIZES = ['btn--medium', 'btn--large']

function Button({children, type, onClick, buttonStyle, buttonSize}) {

  const checkButtonStyles = STYLES.includes(buttonStyle) 
    ? buttonStyle 
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize)
    ? buttonSize
    : STYLES[0];

  return (
    <Link to="/sign-up" className="btn-mobile">
      <button
        className={`btn ${checkButtonStyles} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
}

export default Button;