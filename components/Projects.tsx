"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";

const projects = [
  {
    title: "Luminary Dashboard",
    description:
      "A real-time analytics dashboard with dynamic charts, filterable tables, and role-based UI states — built entirely with vanilla JS and CSS custom properties.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "#",
    github: "#",
    mockup: "chart",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    num: "01",
  },
  {
    title: "ShopFlow E-Commerce",
    description:
      "Full-featured storefront UI with cart management, product filtering, localStorage persistence, and a checkout flow with form validation.",
    tech: ["HTML", "CSS Grid", "JS", "SQL"],
    link: "#",
    github: "#",
    mockup: "shop",
    gradient: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
    num: "02",
  },
  {
    title: "DevNotes App",
    description:
      "A markdown-supported note-taking app with tagging, search, dark mode, and drag-to-reorder — all in the browser using the Web APIs.",
    tech: ["HTML", "CSS", "JavaScript", "Git"],
    link: "#",
    github: "#",
    mockup: "notes",
    gradient: "linear-gradient(135deg, #1a0533 0%, #2d1b69 50%, #11998e 100%)",
    num: "03",
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
                  {mockupMap[project.mockup]}
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