"use client";
import { useEffect, useRef } from "react";

const skills = [
  { name: "Python Full Stack", percent: 90 },
  { name: "Django & REST API", percent: 88 },
  { name: "React & JavaScript", percent: 85 },
  { name: "HTML, CSS & Bootstrap", percent: 90 },
  { name: "MySQL & Oracle", percent: 80 },
  { name: "Data Science & AI Tools", percent: 82 },
];

const techStack = [
  { name: "Python", icon: "🐍" },
  { name: "Django", icon: "🌐" },
  { name: "React", icon: "⚛️" },
  { name: "REST API", icon: "🔗" },
  { name: "MySQL", icon: "🗄️" },
  { name: "Oracle", icon: "🏛️" },
  { name: "AI Tools", icon: "🤖" },
  { name: "Data Science", icon: "📊" },
  { name: "FastAPI", icon: "⚡" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Git", icon: "🔧" },
  { name: "Docker", icon: "🐳" },
];

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");

            entry.target
              .querySelectorAll<HTMLElement>(".progress-fill[data-width]")
              .forEach((bar) => {
                bar.style.width = (bar.dataset.width ?? "0") + "%";
              });

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    section.querySelectorAll<Element>(".reveal").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section skills" id="skills" aria-labelledby="skills-heading">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">02 / Skills</span>
          <h2 id="skills-heading" className="section-title">What I Work With</h2>
        </div>

        <div className="skills-grid reveal">
          {/* Left — progress bars */}
          <div className="skills-bars">
            <h3 className="skills-subtitle">Core Proficiency</h3>
            {skills.map((skill) => (
              <div className="skill-item" key={skill.name}>
                <div className="skill-meta">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percent">{skill.percent}%</span>
                </div>
                <div
                  className="progress-track"
                  role="progressbar"
                  aria-valuenow={skill.percent}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  aria-label={`${skill.name} proficiency ${skill.percent}%`}
                >
                  <div className="progress-fill" data-width={skill.percent}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Right — tech cards */}
          <div className="tech-stack-wrap">
            <h3 className="skills-subtitle">Tech Stack</h3>
            <div className="tech-grid">
              {techStack.map((tech) => (
                <div className="tech-card" key={tech.name}>
                  <span className="tech-icon">{tech.icon}</span>
                  <span>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}