import { useEffect, useRef, useState } from 'react';
import './Education.css';

const BASE = import.meta.env.BASE_URL;

const educationData = [
  {
    degree: 'B.Tech in Computer Science & Engineering',
    institution: 'KIIT University, Bhubaneswar',
    period: '2019 – 2023',
    image: `${BASE}kiitsce.png`,
    highlights: ['Computer Science & Engineering', 'Strong foundation in DSA, OOP, and DBMS'],
  },
  {
    degree: 'Senior Secondary (12th)',
    institution: 'Adwaita Mission, Banka',
    period: '2017 – 2019',
    image: `${BASE}12 schoool.jpg`,
    highlights: ['Science Stream', 'PCM focused curriculum'],
  },
  {
    degree: 'Secondary (10th)',
    institution: 'DAV, Mathurapur',
    period: '2015 – 2017',
    image: `${BASE}dav.jpg`,
    highlights: ['Foundation education', 'Strong academic performance'],
  },
];

export default function Education() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

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
    <section className="education section" id="education" ref={sectionRef}>
      <div className="container">
        <div className="animate-in">
          <p className="education__label">// education</p>
          <h2 className="section-title">
            Academic <span className="gradient-text">Journey</span>
          </h2>
          <p className="section-subtitle">
            My educational background that built the foundation.
          </p>
        </div>

        <div className="education__layout animate-in" style={{ transitionDelay: '0.2s' }}>
          <div className="education__tabs">
            {educationData.map((edu, index) => (
              <button
                key={index}
                className={`education__tab ${activeIndex === index ? 'education__tab--active' : ''}`}
                onClick={() => setActiveIndex(index)}
                id={`edu-tab-${index}`}
              >
                <div className="education__tab-indicator"></div>
                <div className="education__tab-content">
                  <span className="education__tab-degree">{edu.degree}</span>
                  <span className="education__tab-period">{edu.period}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="education__detail glass-card">
            <div className="education__detail-image-wrapper">
              <img
                src={educationData[activeIndex].image}
                alt={educationData[activeIndex].institution}
                className="education__detail-image"
              />
            </div>
            <div className="education__detail-info">
              <h3 className="education__detail-degree">{educationData[activeIndex].degree}</h3>
              <p className="education__detail-institution">{educationData[activeIndex].institution}</p>
              <p className="education__detail-period">{educationData[activeIndex].period}</p>
              <ul className="education__detail-highlights">
                {educationData[activeIndex].highlights.map((h, i) => (
                  <li key={i}>
                    <span className="education__highlight-icon">✦</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
