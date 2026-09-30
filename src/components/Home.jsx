import { useState, useEffect } from "react";
import { FaGithub, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import "../styles/Home.css";

const Home = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    "MERN Stack Developer",
    "Full Stack Engineer",
    "Backend & Frontend Expert",
  ];

  useEffect(() => {
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const pauseTime = 1500;

    let timer;
    const fullText = texts[textIndex];

    if (!isDeleting) {
      if (currentText.length < fullText.length) {
        timer = setTimeout(() => {
          setCurrentText(fullText.substring(0, currentText.length + 1));
        }, typingSpeed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      }
    } else {
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, textIndex, texts]);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Hajra-Amin.pdf"; 
    link.download = "Hajra_Amin_Resume.pdf"; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="home-section" id="home">
      <div className="container">
        <div className="home-content">
          <div className="home-text animate-left" data-aos="fade-right">
            <span className="welcome-tag">WELCOME TO MY PORTFOLIO</span>
            <h1 className="greeting">
              Hi, I'm <span className="highlight">Hajra Amin</span>
            </h1>
            
            <div className="typing-text">
              <span className="code-tag">&lt;</span>
              <span className="text-change">{currentText}</span>
              <span className="code-tag">/&gt;</span>
              <span className="cursor">|</span>
            </div>

            <p className="description">
              I build scalable, high-performance full-stack web applications, 
              expertly handling both robust backend architecture and responsive user interfaces.
            </p>

            <div className="home-buttons">
              <a href="#projects" className="btn primary-btn">
                Explore My Work →
              </a>
              <button className="btn secondary-btn" onClick={handleDownloadCV}>
                Open CV
              </button>
            </div>

            <div className="social-links-wrapper">
              <span className="find-me">FIND ME ON</span>
              <div className="social-icons">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" title="GitHub"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/hajra-ameen-95674633a" target="_blank" rel="noopener noreferrer" title="LinkedIn"><FaLinkedinIn /></a>
                <a href="https://instagram.com/hcoders_dev?igsh=MWJsMGlnNWR5c3ZmaQ==" target="_blank" rel="noopener noreferrer" title="Instagram"><FaInstagram /></a>
                <a href="https://youtube.com/@hcodersdev?si=MscxA7VBz960q27u" target="_blank" rel="noopener noreferrer" title="YouTube"><FaYoutube /></a>
              </div>
            </div>
          </div>
          
          <div className="home-image animate-right" data-aos="fade-left">
            <div className="image-wrapper">
              {/* Rotating Gradient Aura */}
              <div className="image-glow-ring"></div>

              {/* 5 Stack Badges evenly distributed in circular positions */}
              <div className="floating-badge badge-1">React</div>
              <div className="floating-badge badge-2">Node.js</div>
              <div className="floating-badge badge-3">MongoDB</div>
              <div className="floating-badge badge-4">Express</div>
              <div className="floating-badge badge-5">JavaScript</div>
              
              <div className="profile-frame">
                <img
                  src="/images/hajra.png"
                  alt="Hajra Amin"
                  className="profile-img"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/400x500/6366f1/ffffff?text=Hajra+Amin";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;