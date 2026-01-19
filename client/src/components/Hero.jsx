import { useEffect, useState } from 'react';
import './Hero.css';

const Hero = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section id="hero" className="hero-section">
            <div className="hero-background">
                <div className="glow-orb orb-1"></div>
                <div className="glow-orb orb-2"></div>
            </div>

            <div className={`hero-content ${mounted ? 'fade-in' : ''}`}>
                <h2 className="greeting">Hello, I'm Himendra</h2>
                <h1 className="headline">
                    Building <span className="gradient-text">Future-Ready</span><br />
                    Web Experiences.
                </h1>
                <p className="subheadline">
                    Full Stack Developer specializing in modern web technologies including Node.js and React.
                </p>
                <div className="cta-group">
                    <a href="#projects" className="btn btn-primary">View My Work</a>
                    <a href="#contact" className="btn btn-secondary">Contact Me</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
