"use client";
import { useEffect, useRef } from "react";
import {
  SiPython,
  SiDjango,
  SiReact,
  SiMysql,
  SiPostgresql,
  SiFastapi,
  SiDocker,
  SiGit,
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { AiOutlineRobot } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";

const skills = [
  { name: "Python Full Stack", percent: 90 },
  { name: "Django & REST API", percent: 88 },
  { name: "React & JavaScript", percent: 85 },
  { name: "HTML, CSS & Bootstrap", percent: 90 },
  { name: "MySQL & Oracle", percent: 80 },
  { name: "Data Science & AI Tools", percent: 82 },
];

const techStack = [
  {
    name: "Python",
    icon: <SiPython color="#3776AB" />,
    link: "https://www.python.org/",
  },
  {
    name: "Django",
    icon: <SiDjango color="#092E20" />,
    link: "https://www.djangoproject.com/",
  },
  {
    name: "React",
    icon: <SiReact color="#61DAFB" />,
    link: "https://react.dev/",
  },
  {
    name: "REST API",
    icon: <TbApi color="#F59E0B" />,
    link: "https://restfulapi.net/",
  },
  {
    name: "MySQL",
    icon: <SiMysql color="#4479A1" />,
    link: "https://www.mysql.com/",
  },
  {
    name: "Oracle",
    icon: <FaDatabase color="#EF4444" />,
    link: "https://www.oracle.com/",
  },
  {
    name: "AI Tools",
    icon: <AiOutlineRobot color="#8B5CF6" />,
    link: "https://openai.com/",
  },
  {
    name: "Data Science",
    icon: <BsGraphUp color="#10B981" />,
    link: "https://www.datasciencecentral.com/",
  },
  {
    name: "FastAPI",
    icon: <SiFastapi color="#009688" />,
    link: "https://fastapi.tiangolo.com/",
  },
  {
    name: "PostgreSQL",
    icon: <SiPostgresql color="#336791" />,
    link: "https://www.postgresql.org/",
  },
  {
    name: "Git",
    icon: <SiGit color="#F05032" />,
    link: "https://git-scm.com/",
  },
  {
    name: "Docker",
    icon: <SiDocker color="#2496ED" />,
    link: "https://www.docker.com/",
  },
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
                bar.style.width = `${bar.dataset.width ?? "0"}%`;
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
    <section
      ref={sectionRef}
      className="section skills"
      id="skills"
      aria-labelledby="skills-heading"
    >
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">02 / Skills</span>
          <h2 id="skills-heading" className="section-title">
            What I Work With
          </h2>
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
                <a
                  key={tech.name}
                  href={tech.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tech-card"
                  aria-label={`Open ${tech.name} official website`}
                  title={tech.name}
                >
                  <span className="tech-icon">{tech.icon}</span>
                  <span>{tech.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}