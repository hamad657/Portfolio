import React, { useState } from "react";
import "../styles/Projects.css";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Land Interior Design",
      category: "Full Stack",
      description: "Modern interior platform with 50-day delivery guarantee and online consultation booking.",
      images: [
        { src: "/images/project1-1.png" },
        { src: "/images/project1-2.png" }
      ],
      technologies: ["React", "Node.js", "Bootstrap"]
    },
    {
      id: 2,
      title: "About Me Portfolio",
      category: "Frontend",
      description: "Professional portfolio website showcasing creative design skills and services.",
      images: [
        { src: "/images/project2-1.png" },
        { src: "/images/project2-2.png" }
      ],
      technologies: ["HTML5", "CSS3", "JavaScript"]
    },
    {
      id: 3,
      title: "Task Management App",
      category: "Web Apps",
      description: "Collaborative task manager application equipped with real-time updates.",
      images: [
        { src: "/images/project3-1.png" },
        { src: "/images/project3-2.png" }
      ],
      technologies: ["React", "Firebase", "CSS"]
    },
    {
      id: 4,
      title: "Portfolio Website Template",
      category: "Frontend",
      description: "Clean and highly responsive portfolio template featuring dynamic project showcase.",
      images: [
        { src: "/images/project4-1.png" },
        { src: "/images/project4-2.png" }
      ],
      technologies: ["Tailwind", "JavaScript", "HTML5"]
    },
    {
      id: 5,
      title: "My Story Portfolio",
      category: "Frontend",
      description: "One-page narrative portfolio layout customized for personal branding.",
      images: [
        { src: "/images/project5-1.png" },
        { src: "/images/project5-2.png" }
      ],
      technologies: ["Bootstrap", "JavaScript", "CSS3"]
    },
    {
      id: 6,
      title: "DevOps Dashboard",
      category: "Full Stack",
      description: "Technical analytics dashboard outlining modern DevOps lifecycles and web metrics.",
      images: [
        { src: "/images/project6-1.PNG" }
      ],
      technologies: ["React", "MongoDB", "Node.js"]
    }
  ];

  const categories = ["All", "Full Stack", "Frontend", "Web Apps"];

  const filteredProjects = activeTab === "All" 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <section className="filter-proj-section" id="projects">
      <div className="filter-container">
        
        <div className="filter-header" data-aos="fade-up">
          <span className="filter-badge">PORTFOLIO</span>
          <h2 className="filter-title">
            Featured <span className="filter-highlight">Projects</span>
          </h2>
          <p className="filter-subtitle">
            Explore my creations category-wise with an interactive interface.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="filter-tabs" data-aos="fade-up" data-aos-delay="100">
          {categories.map((cat, index) => (
            <button
              key={index}
              className={`filter-tab-btn ${activeTab === cat ? "active" : ""}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Zig-Zag Timeline Grid */}
        <div className="zigzag-timeline">
          <div className="timeline-line"></div>
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id} 
              className={`zigzag-item ${index % 2 === 0 ? "left-item" : "right-item"}`}
              data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            >
              <div className="timeline-dot"><span>🚀</span></div>
              
              <div className="filter-card">
                <div className="filter-img-container">
                  {project.images.map((img, idx) => (
                    <div key={idx} className="filter-thumb">
                      <img 
                        src={img.src} 
                        alt={`${project.title} view ${idx + 1}`}
                        onError={(e) => {
                          e.target.src = `https://via.placeholder.com/300x180/112240/64ffda?text=${project.title}`;
                        }}
                      />
                    </div>
                  ))}
                </div>

                <div className="filter-content">
                  <span className="filter-card-cat">{project.category}</span>
                  <h3 className="filter-card-title">{project.title}</h3>
                  <p className="filter-card-desc">{project.description}</p>
                  
                  <div className="filter-tech-list">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="filter-tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;