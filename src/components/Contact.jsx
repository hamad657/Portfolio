import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <section className="about-section" id="contact">
            <div className="section-divider"></div>

            <div className="about-header" data-aos="fade-up">
                <span className="about-badge">Contact Me</span>
                <h2 className="section-title">Let's Build Something <span className="highlight">Together</span></h2>
                <p className="section-subtitle">Have a project in mind or want to discuss an opportunity? Drop a message below.</p>
            </div>

            <div className="contact-unique-container">
                <div className="contact-unique-wrapper">
                    
                    {/* Left Info Cards */}
                    <div className="unique-info-column" data-aos="fade-right">
                        <div className="about-card unique-card-item">
                            <div className="card-glow"></div>
                            <div className="unique-icon-box">📧</div>
                            <div>
                                <span className="item-label">Direct Email</span>
                                <a href="mailto:ha1692874@gmail.com" className="item-value">ha1692874@gmail.com</a>
                            </div>
                        </div>

                        <div className="about-card unique-card-item">
                            <div className="card-glow"></div>
                            <div className="unique-icon-box">📍</div>
                            <div>
                                <span className="item-label">Location</span>
                                <span className="item-value">Faisalabad, Pakistan</span>
                            </div>
                        </div>

                        <div className="about-card unique-card-item">
                            <div className="card-glow"></div>
                            <div className="unique-icon-box">🌐</div>
                            <div>
                                <span className="item-label">Social Profiles</span>
                                <div className="unique-socials">
                                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="u-soc-link" title="GitHub">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" width="18" height="18" style={{ backgroundColor: '#fff', borderRadius: '50%', padding: '2px' }} />
                                    </a>
                                    <a href="https://www.linkedin.com/in/hajra-ameen-95674633a/" target="_blank" rel="noopener noreferrer" className="u-soc-link" title="LinkedIn">
                                        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/linkedin.svg" alt="LinkedIn" width="16" height="16" className="soc-svg" />
                                    </a>
                                    <a href="https://www.facebook.com/profile.php?id=61593065492809" target="_blank" rel="noopener noreferrer" className="u-soc-link" title="Facebook">
                                        <img src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/facebook.svg" alt="Facebook" width="16" height="16" className="soc-svg" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Form Card */}
                    <div className="about-card unique-form-column" data-aos="fade-left">
                        <div className="card-glow"></div>
                        {submitted ? (
                            <div className="unique-success">
                                <h3>Message Sent! 🚀</h3>
                                <p>Thank you for reaching out. I'll get back to you shortly.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="unique-form">
                                <div className="u-input-group">
                                    <label className="form-lbl">Your Name</label>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        placeholder="Enter your name" 
                                        value={formData.name} 
                                        onChange={handleChange} 
                                        required 
                                    />
                                </div>
                                <div className="u-input-group">
                                    <label className="form-lbl">Your Email</label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        placeholder="Enter your email" 
                                        value={formData.email} 
                                        onChange={handleChange} 
                                        required 
                                    />
                                </div>
                                <div className="u-input-group">
                                    <label className="form-lbl">Your Message</label>
                                    <textarea 
                                        name="message" 
                                        rows="4" 
                                        placeholder="Type your message here..." 
                                        value={formData.message} 
                                        onChange={handleChange} 
                                        required 
                                    ></textarea>
                                </div>
                                <button type="submit" className="unique-submit-btn">Send Message</button>
                            </form>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;