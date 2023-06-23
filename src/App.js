import React from 'react';
import './app.css';

import {Header, Hero, AboutSection, ContactSection, Footer} from './components';

const App = () => {
  return (
    <div>
        <Header />
        <Hero />
        <AboutSection />
        <ContactSection />
        <Footer />
    </div>
  )
  };


export default App