import { useEffect, useRef } from 'react';
import './Experience.css';

const experiences = [
  {
    title: 'Software Engineer',
    company: 'Professional Experience',
    period: '2023 – Present',
    type: 'Full-time',
    description: [
      'Built and maintained enterprise-scale web applications using Angular and React, delivering responsive and performant user interfaces.',
      'Designed and implemented CI/CD pipelines using Jenkins and Docker for automating the build, test, and deployment of desktop applications.',
      'Collaborated with cross-functional teams to deliver features from design to production, following Agile methodologies.',
      'Optimized application performance, reducing initial load times and improving user experience across devices.',
    ],
    tags: ['Angular', 'React', 'TypeScript', 'Jenkins', 'Docker', 'CI/CD', 'Agile'],
  },
  {
    title: 'DevOps Engineering',
    company: 'CI/CD & Deployment',
    period: 'Ongoing',
    type: 'Specialization',
    description: [
      'Architected deployment pipelines for building and distributing desktop applications across multiple platforms.',
      'Containerized build environments using Docker, ensuring consistency across development and production.',
      'Automated testing and quality gates within Jenkins pipelines, improving release reliability.',
      'Managed build artifacts and release workflows for efficient software delivery.',
    ],
    tags: ['Jenkins', 'Docker', 'Pipeline Automation', 'Desktop Apps', 'Build Systems'],
  },
];

export default function Experience() {
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

  return (
    <section className="experience section" id="experience" ref={sectionRef}>
      <div className="container">
        <div className="animate-in">
          <p className="experience__label">// experience</p>
          <h2 className="section-title">
            Where I've <span className="gradient-text">Worked</span>
          </h2>
          <p className="section-subtitle">
            My professional journey in software engineering and DevOps.
          </p>
        </div>

        <div className="experience__timeline">
          {experiences.map((exp, index) => (
            <div
              className="experience__card glass-card animate-in"
              key={index}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="experience__card-header">
                <div className="experience__card-dot"></div>
                <div className="experience__card-meta">
                  <span className="experience__period">{exp.period}</span>
                  <span className="experience__type">{exp.type}</span>
                </div>
              </div>

              <h3 className="experience__title">{exp.title}</h3>
              <p className="experience__company">{exp.company}</p>

              <ul className="experience__list">
                {exp.description.map((item, i) => (
                  <li key={i} className="experience__list-item">
                    <span className="experience__list-arrow">→</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="experience__tags">
                {exp.tags.map((tag, i) => (
                  <span className="experience__tag" key={i}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
