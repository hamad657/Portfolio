import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-divider"></div>
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-copyright">
                        <p>&copy; {currentYear} Hajra Amin. All rights reserved.</p>
                    </div>
                    <div className="footer-social">
                        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                            GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/hajra-ameen-95674633a/" target="_blank" rel="noopener noreferrer" className="social-link">
                            LinkedIn
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=61593065492809" target="_blank" rel="noopener noreferrer" className="social-link">
                            Facebook
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;