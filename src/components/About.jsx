import { useEffect, useRef } from 'react';
import './About.css';

export default function About() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.animate-in');
    elements?.forEach((el) => observer.observe(el));
    return () => elements?.forEach((el) => observer.unobserve(el));
  }, []);

  const stats = [
    { value: '2.5+', label: 'Years Experience' },
    { value: '10+', label: 'Projects Delivered' },
    { value: '3+', label: 'Tech Stacks' },
    { value: '∞', label: 'Lines of Code' },
  ];

  return (
    <section className="about section" id="about" ref={sectionRef}>
      <div className="container">
        <div className="about__grid">
          <div className="about__content animate-in">
            <p className="about__label">// about me</p>
            <h2 className="section-title">
              Passionate <span className="gradient-text">Engineer</span> Who
              Loves Building Things
            </h2>
            <p className="about__text">
              I'm a Software Engineer with <strong>2.5+ years</strong> of professional experience, 
              specializing in building modern web applications and DevOps workflows. 
              I graduated with a <strong>B.Tech in Computer Science</strong> from KIIT University, 
              Bhubaneswar, and have since been working on impactful projects across 
              the full development lifecycle.
            </p>
            <p className="about__text">
              My journey spans from crafting pixel-perfect UIs with <strong>Angular</strong> and <strong>React</strong>,
              to setting up robust CI/CD pipelines using <strong>Jenkins</strong> and <strong>Docker</strong> for
              building and deploying desktop applications. I thrive at the intersection of 
              development and operations, ensuring seamless software delivery.
            </p>
            <p className="about__text about__text--muted">
              When I'm not coding, I enjoy exploring new technologies, contributing 
              to open-source, and continuous learning. I believe in writing clean, 
              maintainable code and building systems that scale.
            </p>
          </div>

          <div className="about__stats animate-in" style={{ transitionDelay: '0.2s' }}>
            {stats.map((stat, index) => (
              <div className="about__stat-card glass-card" key={index}>
                <span className="about__stat-value gradient-text">{stat.value}</span>
                <span className="about__stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
