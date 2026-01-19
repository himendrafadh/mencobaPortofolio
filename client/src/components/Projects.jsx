import './Projects.css';

const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "E-Commerce Dashboard",
            description: "soon ya",
            tags: ["React", "Node.js", "Chart.js"],
            link: "#"
        },
        {
            id: 2,
            title: "Task Management App",
            description: "soon ya",
            tags: ["React", "Express", "Socket.io"],
            link: "#"
        },
        {
            id: 3,
            title: "Weather Forecast",
            description: "soon ya",
            tags: ["React", "OpenWeatherAPI", "CSS"],
            link: "#"
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <div className="projects-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="card-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="tags">
                                    {project.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                                </div>
                                <div className="card-links">
                                    <a href={project.link} className="card-btn">View Project</a>
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
