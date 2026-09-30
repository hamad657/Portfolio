import React from "react";
import "../styles/Certificates.css";

const Certificates = () => {
  const certificatesData = [
    {
      id: 1,
      title: "Saylani - Web Designing Crash Course",
      issuer: "Saylani IT",
      date: "2024",
      image: "/images/certificates/certificate-saylani-design.png",
      alt: "Saylani Web Designing Certificate",
    },
    {
      id: 2,
      title: "Saylani - Web & Mobile App Dev",
      issuer: "Saylani IT",
      date: "2024",
      image: "/images/certificates/certificate-saylani.png",
      alt: "Saylani App Dev Certificate",
    },
    {
      id: 3,
      title: "Nova Academy - App Development",
      issuer: "Nova Academy",
      date: "2023",
      image: "/images/certificates/certificate-nova.png",
      alt: "Nova Certificate",
    },
    {
      id: 4,
      title: "Stanford University - Code in Place",
      issuer: "Stanford",
      date: "2023",
      image: "/images/certificates/certificate-word1.png",
      alt: "Stanford Certificate",
    },
    {
      id: 5,
      title: "Az-Zuha Institute - Freelancing",
      issuer: "Az-Zuha",
      date: "2023",
      image: "/images/certificates/certificate-word2.png",
      alt: "Freelancing Certificate",
    },
  ];

  return (
    <section className="cert-main-section" id="certificates">
      <div className="cert-container">
        
        <div className="cert-header">
          <span className="cert-badge">ACHIEVEMENTS</span>
          <h2 className="cert-section-title">
            My <span className="cert-highlight">Certificates</span>
          </h2>
          <p className="cert-section-subtitle">
            Explore my professional credentials and completed milestones in web development & tech.
          </p>
        </div>

        {/* Infinite Scrolling Carousel Track */}
        <div className="cert-carousel-container">
          <div className="cert-track">
            {[...certificatesData, ...certificatesData].map((cert, index) => (
              <div key={`${cert.id}-${index}`} className="cert-interactive-card">
                <div className="cert-card-inner-glow"></div>
                
                <div className="cert-img-container">
                  <img
                    src={cert.image}
                    alt={cert.alt}
                    className="cert-preview-img"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML += '<div class="cert-path-error">Image Not Found</div>';
                    }}
                  />
                  <span className="cert-issuer-badge">{cert.issuer}</span>
                </div>

                <div className="cert-details-box">
                  <div className="cert-text-area">
                    <h3>{cert.title}</h3>
                  </div>
                  <span className="cert-date-badge">{cert.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Certificates;