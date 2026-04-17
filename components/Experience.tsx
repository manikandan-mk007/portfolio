"use client";
import { useEffect, useRef } from "react";

const workExperience = [
  {
    date: "Dec 2025 – Present",
    role: "Python Full Stack Developer Intern",
    company: "Faith Infotech, Technopark · Internship",
    desc: "Developed scalable full-stack applications using Django REST Framework and React, focusing on backend optimization and API performance.",
    bullets: [
      "Optimized database queries improving performance by 70%",
      "Built REST APIs and integrated frontend using Axios",
      "Automated development workflows reducing setup time by 5+ hours weekly",
    ],
  },
  {
    date: "Jul 2024 – Aug 2024",
    role: "Cyber Security Intern",
    company: "Techbyheart · Internship",
    desc: "Worked on system security fundamentals, vulnerability analysis, and secure coding practices.",
    bullets: [
      "Analyzed security vulnerabilities in web applications",
      "Learned network security concepts and threat detection",
    ],
  },
  {
    date: "Jan 2023 – Feb 2023",
    role: "Java Developer Intern",
    company: "Nyeste Venture Technologies · Internship",
    desc: "Built basic backend applications using Java and strengthened object-oriented programming concepts.",
    bullets: [
      "Developed Java-based backend modules",
      "Improved understanding of OOP and application logic",
    ],
  },
];

const education = [
  {
    date: "2021 – 2025",
    role: "B.Tech Information Technology",
    company: "Marthandam College of Engineering and Technology",
    desc: "Focused on software development, data structures, database management, and web technologies.",
    bullets: [
      "Relevant Subjects: Data Structures, DBMS, Operating Systems, Computer Networks",
    ],
  },
  {
    date: "2023",
    role: "C/C++ Programming Certification",
    company: "Indian Computer Education Society",
    desc: "Completed certification in programming fundamentals, problem solving, and structured programming.",
    bullets: [],
  },
  {
    date: "2024",
    role: "UI/UX Designing Course",
    company: "Sharon Software Training Institute",
    desc: "Learned UI/UX principles including wireframing, user experience design, and interface prototyping.",
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