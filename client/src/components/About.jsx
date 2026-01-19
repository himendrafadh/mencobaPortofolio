import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            Himendra Fadhil, a passionate Full Stack Developer with a knack for building beautiful, responsive, and functional web applications.
                            My journey in web development started with a curiosity for how things work on the internet, and has evolved into a career
                            where I get to create impactful digital experiences. (aminnn)
                        </p>
                        <p>
                            I specialize in the JavaScript ecosystem, particularly <strong>Node.js</strong> for backend services and <strong>React</strong> for building dynamic user interfaces.
                            I believe in writing clean, maintainable code and keeping up with the latest industry trends. (aminnn)
                        </p>

                        <div className="skills-container">
                            <h3>My Tech Stack</h3>
                            <div className="skills-grid">
                                <span className="skill-tag">JavaScript (ES6+)</span>
                                <span className="skill-tag">React.js</span>
                                <span className="skill-tag">Node.js</span>
                                <span className="skill-tag">Express</span>
                                <span className="skill-tag">HTML5 & CSS3</span>
                                <span className="skill-tag">Git & GitHub</span>
                                <span className="skill-tag">MongoDB</span>
                                <span className="skill-tag">REST APIs</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
