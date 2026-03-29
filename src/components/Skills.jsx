import { useEffect, useRef } from 'react';
import './Skills.css';

const skillCategories = [
  {
    title: 'Frontend',
    icon: '🎨',
    skills: [
      { name: 'React', level: 90 },
      { name: 'Angular', level: 88 },
      { name: 'TypeScript', level: 85 },
      { name: 'JavaScript', level: 92 },
      { name: 'HTML/CSS', level: 95 },
    ],
  },
  {
    title: 'DevOps & Tools',
    icon: '⚙️',
    skills: [
      { name: 'Jenkins', level: 85 },
      { name: 'Docker', level: 82 },
      { name: 'CI/CD Pipelines', level: 88 },
      { name: 'Git', level: 90 },
      { name: 'Linux', level: 78 },
    ],
  },
  {
    title: 'Backend & Others',
    icon: '🔧',
    skills: [
      { name: 'Node.js', level: 75 },
      { name: 'Python', level: 80 },
      { name: 'REST APIs', level: 85 },
      { name: 'SQL', level: 78 },
      { name: 'C/C++', level: 75 },
    ],
  },
];

export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Animate skill bars
            const bars = entry.target.querySelectorAll('.skills__bar-fill');
            bars.forEach((bar) => {
              bar.style.width = bar.dataset.level + '%';
            });
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
    <section className="skills section" id="skills" ref={sectionRef}>
      <div className="container">
        <div className="animate-in">
          <p className="skills__label">// skills & expertise</p>
          <h2 className="section-title">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="section-subtitle">
            Technologies and tools I work with on a daily basis.
          </p>
        </div>

        <div className="skills__grid">
          {skillCategories.map((category, catIndex) => (
            <div
              className="skills__category glass-card animate-in"
              key={catIndex}
              style={{ transitionDelay: `${catIndex * 0.15}s` }}
            >
              <div className="skills__category-header">
                <span className="skills__category-icon">{category.icon}</span>
                <h3 className="skills__category-title">{category.title}</h3>
              </div>

              <div className="skills__items">
                {category.skills.map((skill, skillIndex) => (
                  <div className="skills__item" key={skillIndex}>
                    <div className="skills__item-header">
                      <span className="skills__item-name">{skill.name}</span>
                      <span className="skills__item-level">{skill.level}%</span>
                    </div>
                    <div className="skills__bar">
                      <div
                        className="skills__bar-fill"
                        data-level={skill.level}
                        style={{ width: 0 }}
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
}
