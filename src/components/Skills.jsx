import React from 'react';
import '../styles/Skills.css';

const Skills = () => {
    const skillCategories = [
        {
            title: "Frontend Development",
            skills: [
                { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", level: 95, color: "linear-gradient(90deg, #ff5722, #ff9800)" },
                { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", level: 90, color: "linear-gradient(90deg, #2196f3, #00bcd4)" },
                { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", level: 85, color: "linear-gradient(90deg, #ffeb3b, #ff9800)" },
                { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", level: 88, color: "linear-gradient(90deg, #00bcd4, #64ffda)" },
                { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", level: 90, color: "linear-gradient(90deg, #673ab7, #9c27b0)" }
            ]
        },
        {
            title: "Backend & Database",
            skills: [
                { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", level: 75, color: "linear-gradient(90deg, #4caf50, #8bc34a)" },
                { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", level: 75, color: "linear-gradient(90deg, #9e9e9e, #607d8b)", lightBg: true },
                { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", level: 80, color: "linear-gradient(90deg, #4caf50, #009688)" },
                { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", level: 70, color: "linear-gradient(90deg, #ff9800, #ff5722)" },
                { name: "REST APIs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", level: 82, color: "linear-gradient(90deg, #009688, #4caf50)" }
            ]
        },
        {
            title: "Tools & Productivity",
            skills: [
                { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", level: 85, color: "linear-gradient(90deg, #e91e63, #9c27b0)", lightBg: true },
                { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", level: 85, color: "linear-gradient(90deg, #f05032, #ff5722)" },
                { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", level: 92, color: "linear-gradient(90deg, #007acc, #00bcd4)" },
                { name: "MS Word", icon: "https://sc.filehippo.net/images/t_app-icon-l/p/b20c5e90-96bf-11e6-9781-00163ed833e7/4112465458/microsoft-word-logo.png", level: 90, color: "linear-gradient(90deg, #1976d2, #2196f3)" },
                { name: "MS Excel", icon: "https://images.dwncdn.net/images/t_app-icon-l/p/0cc9dbb4-9b2f-11e6-9d3f-00163ec9f5fa/2165996588/microsoft-excel-2016-logo.png", level: 85, color: "linear-gradient(90deg, #388e3c, #4caf50)" }
            ]
        }
    ];

    return (
        <section className="neon-skills-section" id="skills">
            <div className="neon-skills-container">
                
                <div className="neon-header" data-aos="fade-up">
                    <span className="neon-badge">EXPERTISE & CAPABILITIES</span>
                    <h2 className="neon-title">
                        My Tech <span className="neon-highlight">Universe</span>
                    </h2>
                    <p className="neon-subtitle">
                        Interactive showcase of technologies and tools I wield to build exceptional digital experiences.
                    </p>
                </div>

                <div className="neon-categories-wrapper">
                    {skillCategories.map((cat, idx) => (
                        <div 
                            key={idx} 
                            className="neon-category-card"
                            data-aos="fade-up"
                            data-aos-delay={idx * 150}
                        >
                            <div className="neon-card-header">
                                <div className="neon-dot"></div>
                                <h3>{cat.title}</h3>
                            </div>
                            
                            <div className="neon-skills-grid">
                                {cat.skills.map((skill, index) => (
                                    <div key={index} className="neon-skill-wrapper">
                                        <div className="neon-skill-item">
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                                <div 
                                                    className="neon-icon-glow" 
                                                    style={skill.lightBg ? { backgroundColor: '#ffffff', padding: '2px', borderRadius: '4px' } : {}}
                                                >
                                                    <img 
                                                        src={skill.icon} 
                                                        alt={skill.name} 
                                                        width="22"
                                                        height="22"
                                                        onError={(e) => {
                                                            e.target.src = `https://via.placeholder.com/22/112240/64ffda?text=${skill.name.charAt(0)}`;
                                                        }}
                                                    />
                                                </div>
                                                <span className="neon-skill-name">{skill.name}</span>
                                            </div>
                                            <span className="neon-skill-percentage">{skill.level}%</span>
                                        </div>
                                        
                                        {/* Colorful Progress Bar */}
                                        <div className="progress-bar-bg">
                                            <div 
                                                className="progress-bar-fill" 
                                                style={{ 
                                                    width: `${skill.level}%`, 
                                                    background: skill.color 
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Skills;