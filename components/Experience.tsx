"use client";
import { useEffect, useRef } from "react";

const workExperience = [
  {
    date: "Jan 2023 – Present",
    role: "Front-End Developer",
    company: "TechCraft Studio · Full-time",
    desc: "Lead UI development for SaaS products, improving core web vitals by 40% and implementing an accessible component library used across 3 products.",
    bullets: [
      "Built responsive dashboards with CSS Grid & Flexbox",
      "Automated accessibility audits in CI pipeline",
      "Mentored 2 junior developers",
    ],
  },
  {
    date: "Jun 2021 – Dec 2022",
    role: "Junior Web Developer",
    company: "Pixel & Co. · Full-time",
    desc: "Developed and maintained client websites, collaborated with designers to translate Figma mockups to pixel-perfect HTML/CSS, and managed content via CMS platforms.",
    bullets: [],
  },
  {
    date: "Jan 2021 – May 2021",
    role: "Front-End Intern",
    company: "BrightWeb Agency · Internship",
    desc: "Assisted in building landing pages, fixed cross-browser compatibility issues, and learned best practices in semantic HTML and CSS architecture.",
    bullets: [],
  },
];

const education = [
  {
    date: "2017 – 2021",
    role: "B.Sc. Computer Science",
    company: "State University · GPA: 3.8 / 4.0",
    desc: "Specialized in Human-Computer Interaction and Web Technologies. Graduated with Distinction. Final project: an accessible, offline-first progressive web app.",
    bullets: [],
  },
  {
    date: "2023",
    role: "Google UX Design Certificate",
    company: "Coursera / Google",
    desc: "Completed 7-course program covering UX research, wireframing, prototyping, and usability testing.",
    bullets: [],
  },
  {
    date: "2022",
    role: "Web Accessibility Specialist (WAS)",
    company: "IAAP Certification",
    desc: "Certified in WCAG 2.1 standards, ARIA authoring practices, and assistive technology testing.",
    bullets: [],
  },
];

export default function Experience() {
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
    <section ref={sectionRef} className="section experience" id="experience" aria-labelledby="experience-heading">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">04 / Experience &amp; Education</span>
          <h2 id="experience-heading" className="section-title">The Journey So Far</h2>
        </div>

        <div className="timeline-wrap reveal">
          {/* Work Experience */}
          <div className="timeline-col">
            <h3 className="timeline-col-title">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
              </svg>
              Work Experience
            </h3>
            {workExperience.map((item, i) => (
              <div className="timeline-item" key={i}>
                <div className="timeline-dot" aria-hidden="true"></div>
                <div className="timeline-content">
                  <span className="timeline-date">{item.date}</span>
                  <h4 className="timeline-role">{item.role}</h4>
                  <span className="timeline-company">{item.company}</span>
                  <p className="timeline-desc">{item.desc}</p>
                  {item.bullets.length > 0 && (
                    <ul className="timeline-list">
                      {item.bullets.map((b, j) => (
                        <li key={j}>{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="timeline-col">
            <h3 className="timeline-col-title">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
              Education
            </h3>
            {education.map((item, i) => (
              <div className="timeline-item" key={i}>
                <div className="timeline-dot" aria-hidden="true"></div>
                <div className="timeline-content">
                  <span className="timeline-date">{item.date}</span>
                  <h4 className="timeline-role">{item.role}</h4>
                  <span className="timeline-company">{item.company}</span>
                  <p className="timeline-desc">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}