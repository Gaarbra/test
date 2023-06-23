import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import './footer.css';
import logo from './logo192.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="logo-container">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="social-icons">
          <FontAwesomeIcon icon={faEnvelope} beat style={{color: "#6a3f1c",}} />
        </div>
        <div className="subtitle">© BrewSoul. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
 