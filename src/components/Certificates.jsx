// import "../styles/Certificates.css";

// const Certificates = () => {
//   const certificatesData = [
//     {
//       id: 1,
//       title: "Saylani Mass Training - Web Designing",
//       image: "/images/certificates/certificate-saylani.png",
//       alt: "Saylani Certificate",
//     },
//     {
//       id: 2,
//       title: "Nova Academy - App Development",
//       image: "/images/certificates/certificate-nova.png",
//       alt: "Nova Certificate",
//     },
//     {
//       id: 3,
//       title: "Stanford University - Code in Place",
//       image: "/images/certificates/certificate-word1.png", // Word se convert karke yahan naam yehi rakhein
//       alt: "Stanford Certificate",
//     },
//     {
//       id: 4,
//       title: "Code Alpha - Full Stack Internship",
//       image: "/images/certificates/certificate-word2.png", // Word se convert karke yahan naam yehi rakhein
//       alt: "Code Alpha Certificate",
//     },
//   ];

//   return (
//     <section className="certificates-section" id="certificates">
//       <div className="container">
//         <h2 className="section-title">
//           My <span className="highlight">Certificates</span>
//         </h2>
        
//         <div className="certificates-grid">
//           {certificatesData.map((cert) => (
//             <div key={cert.id} className="certificate-card">
//               <div className="frame-wrapper">
//                 <img
//                   src={cert.image}
//                   alt={cert.alt}
//                   className="certificate-image"
//                   onError={(e) => {
//                     e.target.style.display = 'none';
//                     e.target.parentElement.innerHTML += '<div class="path-error">Image Not Found</div>';
//                   }}
//                 />
//                 {/* Decorative Corners for Frame Look */}
//                 <div className="corner top-right"></div>
//                 <div className="corner bottom-left"></div>
//               </div>
//               <div className="cert-info">
//                 <h3>{cert.title}</h3>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Certificates;








import "../styles/Certificates.css";

const Certificates = () => {
  const certificatesData = [
    {
      id: 1,
      title: "Saylani Mass Training - Web Designing",
      image: "/images/certificates/certificate-saylani.png",
      alt: "Saylani Certificate",
    },
    {
      id: 2,
      title: "Nova Academy - App Development",
      image: "/images/certificates/certificate-nova.png",
      alt: "Nova Certificate",
    },
    {
      id: 3,
      title: "Stanford University - Code in Place",
      image: "/images/certificates/certificate-word1.png",
      alt: "Stanford Certificate",
    },
    {
      id: 4,
      title: "Code Alpha - Full Stack Internship",
      image: "/images/certificates/certificate-word2.png",
      alt: "Code Alpha Certificate",
    },
  ];

  return (
    <section className="cert-main-section" id="certificates">
      <div className="cert-container">
        <h2 className="cert-section-title">
          My <span className="cert-highlight">Certificates</span>
        </h2>
        
        <div className="cert-grid-layout">
          {certificatesData.map((cert) => (
            <div key={cert.id} className="cert-item-card">
              <div className="cert-frame-box">
                <img
                  src={cert.image}
                  alt={cert.alt}
                  className="cert-img-fluid"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML += '<div class="cert-path-error">Image Not Found</div>';
                  }}
                />
                <div className="cert-corner cert-top-right"></div>
                <div className="cert-corner cert-bottom-left"></div>
              </div>
              <div className="cert-text-info">
                <h3>{cert.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;