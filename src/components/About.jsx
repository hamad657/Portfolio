import { useState, useEffect } from 'react';
import '../styles/About.css';

const About = () => {
    const fullBioText = "Hello! I'm Hajra Amin, a dedicated web developer who loves building interactive and scalable applications. I focus on writing clean code and creating intuitive user experiences that leave a lasting impression.";
    const [displayedBio, setDisplayedBio] = useState('');
    const [isTypingDone, setIsTypingDone] = useState(false);

    useEffect(() => {
        let isCancelled = false;
        let charIndex = 0;
        setDisplayedBio('');
        setIsTypingDone(false);

        const typeWriter = () => {
            if (isCancelled) return;
            
            if (charIndex <= fullBioText.length) {
                setDisplayedBio(fullBioText.substring(0, charIndex));
                charIndex++;
                setTimeout(typeWriter, 30); // Typing speed
            } else {
                setIsTypingDone(true);
            }
        };

        const timer = setTimeout(typeWriter, 30);

        return () => {
            isCancelled = true;
            clearTimeout(timer);
        };
    }, []);

    return (
        <section className="about-section" id="about">
            {/* Divider line between Home and About */}
            <div className="section-divider"></div>

            <div className="container">
                <div className="about-header" data-aos="fade-up">
                    <span className="about-badge">GET TO KNOW</span>
                    <h2 className="section-title">About <span className="highlight">Me</span></h2>
                    <p className="section-subtitle">Transforming innovative ideas into seamless, high-performance web applications.</p>
                </div>
                
                {/* Modern Interactive Bento Grid */}
                <div className="about-grid">
                    
                    {/* Main Bio Card with Typing Animation */}
                    <div className="about-card bio-card" data-aos="fade-right">
                        <div className="card-glow"></div>
                        <div className="card-content">
                            <span className="card-tag">WHO I AM</span>
                            <h3>Passionate <span className="highlight-text">MERN Stack Developer</span></h3>
                            <p className="typing-bio-text">
                                {displayedBio}
                                <span className={`bio-cursor ${isTypingDone ? 'fade-cursor' : ''}`}>|</span>
                            </p>
                            <div className="quote-box">
                                <span>💡</span>
                                <p>“Simplicity is the soul of efficiency.”</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side Stack: Stats & Tech */}
                    <div className="about-right-stack">
                        
                        {/* Real Stats Card */}
                        <div className="about-card stats-card" data-aos="fade-left" data-aos-delay="100">
                            <div className="card-glow"></div>
                            <div className="stats-grid">
                                <div className="stat-item">
                                    <h4 className="stat-num">10+</h4>
                                    <p className="stat-lbl">Projects Built</p>
                                </div>
                                <div className="stat-vertical-line"></div>
                                <div className="stat-item">
                                    <h4 className="stat-num">2+</h4>
                                    <p className="stat-lbl">Years Experience</p>
                                </div>
                            </div>
                        </div>

                        {/* Core Skills / Focus Card */}
                        <div className="about-card focus-card" data-aos="fade-left" data-aos-delay="200">
                            <div className="card-glow"></div>
                            <span className="card-tag">EXPERTISE</span>
                            <h4>What I Bring to the Table</h4>
                            <div className="focus-pills">
                                <span className="pill">React.js</span>
                                <span className="pill">Node.js</span>
                                <span className="pill">Express</span>
                                <span className="pill">MongoDB</span>
                                <span className="pill">JavaScript</span>
                                <span className="pill">UI/UX Design</span>
                            </div>
                        </div>

                    </div>

                </div>

                {/* Bottom Approach Strip */}
                <div className="approach-strip" data-aos="fade-up">
                    <div className="approach-card-item">
                        <div className="approach-icon">⚡</div>
                        <div>
                            <h5>Fast & Optimized</h5>
                            <p>High performance web apps</p>
                        </div>
                    </div>
                    <div className="approach-card-item">
                        <div className="approach-icon">🎨</div>
                        <div>
                            <h5>Creative UI/UX</h5>
                            <p>Sleek and modern interfaces</p>
                        </div>
                    </div>
                    <div className="approach-card-item">
                        <div className="approach-icon">🛡️</div>
                        <div>
                            <h5>Secure Code</h5>
                            <p>Reliable backend architecture</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;