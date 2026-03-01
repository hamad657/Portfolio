import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <section className="contact-section" id="contact">
            <div className="container">
                <div className="contact-content">
                    <h2 className="contact-title">Get In Touch</h2>
                    <p className="contact-subtitle">
                        Feel free to reach out for collaborations or just a friendly hello!
                    </p>
                    
                    <div className="email-container">
                        <a href="mailto:ayeshaamin328@gmail.com" className="email-link">
                            <span className="email-icon">📧</span>
                            <span className="email-text">ha1692874@gmail.com</span>
                        </a>
                    </div>

                    <div className="social-icons">
                        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <img 
                                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
                                alt="GitHub" 
                                className="social-icon-img"
                            />
                        </a>
                        <a href="https://www.linkedin.com/in/hajra-ameen-95674633a/" target="_blank" rel="noopener noreferrer" className="social-icon">
                          <img
  src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg"
  alt="LinkedIn"
  className="social-icon-img"
  style={{ filter: "invert(29%) sepia(98%) saturate(747%) hue-rotate(176deg)" }}
/>
                        </a>
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="social-icon">
                            <img 
                                src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/facebook.svg" 
                                alt="Facebook" 
                                className="social-icon-img facebook-img"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;