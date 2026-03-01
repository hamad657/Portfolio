import '../styles/Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-copyright">
                        <p>&copy; {currentYear} Hajra Amin. All rights reserved.</p>
                    </div>
                    <div className="footer-social">
                        <a href="https://github.com/Ayeshaamin75" target="_blank" rel="noopener noreferrer" className="social-link">
                            GitHub
                        </a>
                        <a href="https://www.linkedin.com/in/ayesha-amin-674735339?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="social-link">
                            LinkedIn
                        </a>
                        <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="social-link">
                            Facebook
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;