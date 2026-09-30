import { useState, useEffect } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import '../styles/Navbar.css';

const Navbar = ({ darkMode, setDarkMode }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveSection(sectionId);
            setIsMenuOpen(false);
        }
    };

    return (
        <nav 
            className={`navbar ${scrolled ? 'scrolled' : ''} animate-navbar`} 
            data-aos="fade-down"
        >
            <div className="container nav-container">
                <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>
                    <div className="logo-badge">H</div>
                    <div className="logo-info">
                        <span className="logo-name">Hajra Amin</span>
                        <span className="logo-title">MERN STACK DEVELOPER</span>
                    </div>
                </a>

                <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    <a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
                    <a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About Me</a>
                    <a href="#certificates" className={activeSection === 'certificates' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('certificates'); }}>Certificates</a>
                    <a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</a>
                    <a href="#skills" className={activeSection === 'skills' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Skills</a>
                    <a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a>
                </div>

                <div className="nav-right-actions">
                    <button 
                        className="theme-toggle-btn" 
                        onClick={() => setDarkMode(!darkMode)}
                        title="Toggle Theme"
                    >
                        {darkMode ? <FaSun className="theme-icon sun" /> : <FaMoon className="theme-icon moon" />}
                    </button>

                    <a href="#contact" className="let-talk-btn" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>
                        Let's Talk
                    </a>

                    <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;