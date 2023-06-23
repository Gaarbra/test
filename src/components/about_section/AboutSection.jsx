import React from 'react'
import './about_section.css';

import logo from './logo512.png';

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-content">
        <div className="about-info">
          <h2>About BrewSoul</h2>
          <p>
            Welcome to BrewSoul, a place where coffee lovers unite. Our mission
            is to provide you with the finest coffee beans and the most
            delightful coffee experience. BrewSoul offers a wide selection of
            coffee blends, carefully curated by our expert baristas. Join us on
            this journey to savor the perfect cup of coffee!
          </p>
          <p>Created by: Gaarbra</p>
        </div>
        <div className="about-image">
          <img src={logo} alt="About"/>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
