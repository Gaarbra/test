import React from 'react';
import './header.css';

import logo from './logo512.png';

const Header = ({ toggleDarkMode, darkMode }) => {
  return (
    <section className="header">
      <div className="logo-title">
        <img src={logo} alt="Logo" className="logo" />
      </div>

      <div className="subheaders">
        <h1 className="subheader">Home</h1>
        <h1 className="subheader">Subheader 2</h1>
        <h1 className="subheader">Subheader 3</h1>
      </div>

      <div className="right-section">
        <div className="user-buttons">
          <button className="getstarted">Get Started</button>
        </div>

      </div>
    </section>
  );
};

export default Header;

