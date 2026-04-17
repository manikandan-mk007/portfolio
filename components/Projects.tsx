"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "Clinic Management System",
    description: "A full-stack hospital management system with role-based access for Admin and Lab Technician. Includes lab report generation, abnormal result detection, and automated billing workflows using REST APIs.",
    tech: ["Python", "Django", "DRF", "React", "MySQL", "Axios", "REST APIs"],
    link: "https://cmsadminlab.vercel.app/",
    github: "https://github.com/manikandan-mk007/CMS_Admin_Lab.git",
    mockup: "dashboard",
    gradient: "...",
    image: "/assets/Images/cms.png",
  },
  {
    title: "Resume Matcher Pro",
    description: "An AI-powered resume screening system that uses NLP and transformer models to match resumes with job descriptions based on semantic similarity scoring.",
    tech: ["Python", "Pandas", "NumPy", "Streamlit"],
    link: "#",
    github: "https://github.com/manikandan-mk007/Resume_Matcher_Pro.git",
    mockup: "ai",
    gradient: "...",
    image: "/assets/Images/Resume_Matcher_Pro.png",
  },
  {
    title: "Expense Tracker",
    description: "A responsive personal finance tracking application with real-time expense management, category-wise tracking, and dynamic UI updates for better financial insights.",
    tech: ["React", "JavaScript", "TailwindCSS", "Vite"],
    link: "#",
    github: "https://github.com/manikandan-mk007/Expense-Tracker-React.git",
    mockup: "finance",
    gradient: "...",
    image: "/assets/Images/Expense_Tracker.png", 
  },
  {
    title: "Portfolio Website",
    description: "A modern developer portfolio built with React and TypeScript showcasing projects, skills, and experience with optimized performance and responsive UI design.",
    tech: ["React", "TypeScript", "Next.js", "PostCSS"],
    link: "https://portfolio-o5cw.onrender.com/#home",
    github: "https://github.com/manikandan-mk007/portfolio.git",
    mockup: "portfolio",
    gradient: "...",
    image: "/assets/Images/portfolio.png", 
  },
];

function ChartMockup() {
  return (
    <div className="fake-browser">
      <div className="fake-browser-bar">
        <span></span><span></span><span></span>
      </div>
      <div className="fake-browser-content">
        <div className="fb-chart"></div>
        <div className="fb-row">
          <div className="fb-block w75"></div>
        </div>
        <div className="fb-row">
          <div className="fb-block w50"></div>
        </div>
        <div className="fb-row">
          <div className="fb-card"></div>
          <div className="fb-card"></div>
        </div>
      </div>
    </div>
  );
}

function ShopMockup() {
  return (
    <div className="fake-browser">
      <div className="fake-browser-bar">
        <span></span><span></span><span></span>
      </div>
      <div className="fake-browser-content">
        <div className="fb-row">
          <div className="fb-card"></div>
          <div className="fb-card"></div>
          <div className="fb-card"></div>
        </div>
        <div className="fb-row">
          <div className="fb-block w90"></div>
        </div>
        <div className="fb-row">
          <div className="fb-block w60"></div>
        </div>
        <div className="fb-row">
          <div className="fb-block w40"></div>
        </div>
      </div>
    </div>
  );
}

function NotesMockup() {
  return (
    <div className="fake-browser">
      <div className="fake-browser-bar">
        <span></span><span></span><span></span>
      </div>
      <div className="fake-browser-content">
        <div className="fb-row">
          <div className="fb-sidebar"></div>
          <div className="fb-main">
            <div className="fb-block w90"></div>
            <div className="fb-block w75"></div>
            <div className="fb-block w60"></div>
            <div className="fb-block w80"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

const mockupMap: Record<string, React.ReactNode> = {
  chart: <ChartMockup />,
  shop: <ShopMockup />,
  notes: <NotesMockup />,
};

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    section.querySelectorAll<Element>(".reveal").forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section projects" id="projects" aria-labelledby="projects-heading">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">03 / Projects</span>
          <h2 id="projects-heading" className="section-title">Selected Work</h2>
        </div>

        <div className="projects-grid reveal">
          {projects.map((project) => (
            <div className="project-card" key={project.title}>
              {/* Image / mockup area */}
              <div className="project-image">
                <div className="project-img-inner" style={{ background: project.gradient }}>
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="project-img"
                    />
                  ) : (
                    mockupMap[project.mockup]
                  )}
                </div>
                <div className="project-overlay">
                  <span className="project-num">{project.num}</span>
                </div>
              </div>

              {/* Info area */}
              <div className="project-info">
                <div className="project-tags">
                  {project.tech.map((t) => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-links">
                  {project.link !== "#" ? (
                    <Link href={project.link} className="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer">
                      Live Demo
                    </Link>
                  ) : (
                    <button className="btn btn-primary btn-sm" disabled>Live Demo</button>
                  )}
                  {project.github !== "#" ? (
                    <Link href={project.github} className="btn btn-ghost btn-sm" target="_blank" rel="noopener noreferrer">
                      GitHub
                    </Link>
                  ) : (
                    <button className="btn btn-ghost btn-sm" disabled>GitHub</button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}