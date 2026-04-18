"use client";

import { useEffect, useRef } from "react";
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
    <section
      ref={sectionRef}
      className="section about"
      id="about"
      aria-labelledby="about-heading"
    >
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">01 / About</span>
          <h2 id="about-heading" className="section-title">
            My Technical Background
          </h2>
        </div>

        <div className="about-grid">
          {/* LEFT IMAGE */}
          <div className="about-image-wrap reveal">
            <div className="about-image-frame">
              <div
                className="about-image-placeholder"
                role="img"
                aria-label="Photo of Thangamanikandan"
              >
                {/* Anime Image (Default) */}
                <Image
                  src="/assets/Images/me_anime.webp"
                  alt="Anime Avatar"
                  className="about-image anime-img"
                  width={300}
                  height={420}
                />

                {/* Real Image (Hover) */}
                <Image
                  src="/assets/Images/file_000000004ad072099ef823ff84f8361c.png"
                  alt="Manikandan - Full Stack Developer"
                  className="about-image real-img"
                  width={300}
                  height={420}
                />
              </div>

              <div className="about-badge">Open to Work 🟢</div>
            </div>
          </div>

          {/* RIGHT TEXT */}
          <div className="about-text reveal">
            <p className="about-intro">
              I&apos;m an aspiring <strong>Full Stack Developer</strong> with strong
              foundations in Python, Django, REST APIs, MySQL, and modern web technologies.
            </p>

            <p>
              I build scalable web applications, backend APIs, and database-driven systems,
              with additional knowledge in C, C++, and data science.
            </p>

            <p>
              I&apos;m passionate about writing clean, efficient code and continuously improving
              my skills in software development and problem solving.
            </p>

            {/* STATS */}
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

            {/* BUTTONS */}
            <div style={{ display: "flex", gap: "10px" }}>
              <a
                href="/cv/Thangamanikandan_CV.pdf"
                download
                className="btn btn-primary"
              >
                Download CV
              </a>

              <a
                href="/cv/Thangamanikandan_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                View CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}