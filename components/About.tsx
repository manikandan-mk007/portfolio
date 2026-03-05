// components/About.tsx
"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function About() {
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
    <section ref={sectionRef} className="section about" id="about" aria-labelledby="about-heading">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">01 / About</span>
          <h2 id="about-heading" className="section-title">My Technical Background</h2>
        </div>
        <div className="about-grid">
          <div className="about-image-wrap reveal">
            <div className="about-image-frame">
              <div className="about-image-placeholder" role="img" aria-label="Photo of Thangamanikandan">
                <Image
                  src="/assets/Images/file_000000004ad072099ef823ff84f8361c.png"
                  alt="Manikandan - Full Stack Developer"
                  className="about-image"
                  width={300}
                  height={420}
                />
              </div>
              <div className="about-badge">Open to Work 🟢</div>
            </div>
          </div>
          <div className="about-text reveal">
            <p className="about-intro">
              I&apos;m an aspiring <strong>Full Stack Developer</strong> with strong foundations in
              Python, Django, REST APIs, MySQL, and modern web technologies.
            </p>
            <p>
              I build scalable web applications, backend APIs, and database-driven systems, with
              additional knowledge in C, C++, and data science.
            </p>
            <p>
              I&apos;m passionate about writing clean, efficient code and continuously improving my
              skills in software development and problem solving.
            </p>
            <div className="about-stats">
              <div className="stat">
                <span className="stat-num">3+</span>
                <span className="stat-label">Projects Built</span>
              </div>
              <div className="stat">
                <span className="stat-num">7+</span>
                <span className="stat-label">Technologies</span>
              </div>
              <div className="stat">
                <span className="stat-num">2</span>
                <span className="stat-label">Years Exp.</span>
              </div>
            </div>
            <Link href="#contact" className="btn btn-primary">Download CV</Link>
          </div>
        </div>
      </div>
    </section>
  );
}