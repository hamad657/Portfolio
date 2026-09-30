import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './styles/animations.css'; // Aapki custom animations file
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer'; 
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // AOS Animation Initialize
    AOS.init({
      duration: 1000, // Animation speed (1 second)
      once: true,     // Animation sirf aik baar scroll karne par chale
    });
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  return (
    <div className="app">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Home />
        <About />
        <Certificates />
        <Projects /> 
        <Skills /> 
        <Contact />
        <Footer /> 
      </main>
    </div>
  );
}

export default App;