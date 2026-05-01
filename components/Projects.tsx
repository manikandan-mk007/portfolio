"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "Clinic Management System",
    description:
      "A production-ready hospital workflow platform built with a multi-role architecture (Admin, Doctor, Lab Technician, Receptionist). Features include lab prescription management, automated abnormal result detection, real-time report generation, and dynamic billing workflows integrated via REST APIs.",
    tech: ["Python", "Django", "DRF", "React", "MySQL", "Axios", "REST APIs"],
    link: "https://cmsadminlab.vercel.app/",
    github: "https://github.com/manikandan-mk007/CMS_Admin_Lab.git",
    mockup: "dashboard",
    gradient: "from-blue-600 via-indigo-600 to-purple-600",
    image: "/assets/Images/cms.png",
  },

  {
    title: "AI Job Assistant (Browser Extension + Backend)",
    description:
      "An AI-powered job analysis platform that evaluates job descriptions against user profiles using NLP and semantic similarity models. Provides match scoring, skill gap analysis, keyword suggestions, and job tracking with analytics dashboard. Works across LinkedIn, Indeed, Naukri, and Glassdoor.",
    tech: [
      "FastAPI",
      "Python",
      "NLP",
      "JavaScript",
      "Chrome Extension",
      "React",
      "SQLite/PostgreSQL"
    ],
    link: "https://addons.mozilla.org/en-US/firefox/addon/ai-job-assistant/",
    github: "https://github.com/manikandan-mk007/Job-Assistant-AI",
    mockup: "ai",
    gradient: "from-cyan-500 via-blue-600 to-indigo-700",
    image: "/assets/Images/ai_job_assistant.png",
  },

  {
    title: "Copy History Manager (Browser Extension)",
    description:
      "A productivity-focused browser extension that automatically captures and manages clipboard history. Features include instant paste modal, search functionality, pinning important copies, and optional cloud sync using a FastAPI backend. Designed with a modern UI and seamless background processing.",
    tech: [
      "JavaScript",
      "Chrome Extension (MV3)",
      "FastAPI",
      "REST APIs",
      "Chrome Storage API"
    ],
    link: "https://microsoftedge.microsoft.com/addons/detail/dkkkaogcgdnpnfcijpjldnadjbjjopme", 
    github: "https://github.com/manikandan-mk007/Copy-History-Manager", 
    mockup: "tool",
    gradient: "from-purple-500 via-indigo-500 to-blue-500",
    image: "/assets/Images/copy_history_manager.png",
  },

  {
    title: "Resume Matcher Pro",
    description:
      "An intelligent resume screening system that leverages NLP and transformer-based embeddings to match resumes with job descriptions using semantic similarity scoring, improving hiring efficiency and candidate evaluation.",
    tech: ["Python", "Pandas", "NumPy", "Streamlit", "Scikit-learn"],
    link: "#",
    github: "https://github.com/manikandan-mk007/Resume_Matcher_Pro.git",
    mockup: "ai",
    gradient: "from-purple-500 via-pink-500 to-red-500",
    image: "/assets/Images/Resume_Matcher_Pro.png",
  },

  {
    title: "Expense Tracker",
    description:
      "A modern personal finance management app with real-time expense tracking, category-based insights, and interactive UI. Designed with a responsive layout and optimized state management for smooth user experience.",
    tech: ["React", "JavaScript", "TailwindCSS", "Vite"],
    link: "#",
    github: "https://github.com/manikandan-mk007/Expense-Tracker-React.git",
    mockup: "finance",
    gradient: "from-green-400 via-emerald-500 to-teal-600",
    image: "/assets/Images/Expense_Tracker.png",
  },

  {
    title: "Portfolio Website",
    description:
      "A high-performance developer portfolio built with modern frontend technologies, showcasing projects, skills, and experience with a clean SaaS-inspired UI, smooth animations, and responsive design.",
    tech: ["React", "TypeScript", "Next.js", "TailwindCSS"],
    link: "https://portfolio-o5cw.onrender.com/#home",
    github: "https://github.com/manikandan-mk007/portfolio.git",
    mockup: "portfolio",
    gradient: "from-gray-800 via-gray-900 to-black",
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
          {projects.map((project, index) => (
            <div className="project-card" key={project.title}>
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
                  <span className="project-num">
                    {String(index + 1).padStart(2, "0")}
                  </span>
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