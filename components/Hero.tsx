"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const roles = [
  "Full Stack Developer",
  "Python Django Developer",
  "Backend API Developer",
  "Data Science Enthusiast",
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [roleText, setRoleText] = useState("");
  const roleIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const isDeletingRef = useRef(false);

  useEffect(() => {
    const tick = () => {
      const current = roles[roleIndexRef.current];
      const isDeleting = isDeletingRef.current;
      const charIndex = charIndexRef.current;
      const newCharIndex = isDeleting ? charIndex - 1 : charIndex + 1;
      charIndexRef.current = newCharIndex;
      setRoleText(current.substring(0, newCharIndex));
      let speed = isDeleting ? 50 : 90;
      if (!isDeleting && newCharIndex === current.length) {
        isDeletingRef.current = true;
        speed = 2000;
      } else if (isDeleting && newCharIndex === 0) {
        isDeletingRef.current = false;
        roleIndexRef.current = (roleIndexRef.current + 1) % roles.length;
        speed = 400;
      }
      timerRef.current = setTimeout(tick, speed);
    };
    timerRef.current = setTimeout(tick, 600);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, []);

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
      { threshold: 0.08 }
    );
    section.querySelectorAll<Element>(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="hero" id="hero" aria-label="Introduction">
      <div className="hero-bg-grid" aria-hidden="true"></div>
      <div className="hero-content">
        <p className="hero-eyebrow reveal">Hello, I&apos;m</p>
        <h1 className="hero-name reveal">
          Thanga<br />
          <span className="accent">Manikandan</span>
        </h1>
        <p className="hero-role reveal">
          <span className="role-text" id="roleText">{roleText}</span>
          <span className="cursor-blink" aria-hidden="true">|</span>
        </p>
        <p className="hero-intro reveal">
          Full Stack Developer skilled in Python, Django, REST APIs, MySQL, and modern web
          technologies, focused on building efficient and scalable applications.
        </p>
        <div className="hero-cta reveal">
          <Link href="#projects" className="btn btn-primary">View My Work</Link>
          <Link href="#contact" className="btn btn-ghost">Let&apos;s Talk</Link>
        </div>
        <div className="hero-scroll-hint reveal" aria-hidden="true">
          <span className="scroll-line"></span>
          <span className="scroll-label">scroll</span>
        </div>
      </div>

      {/* Code card — hidden on mobile via CSS */}
      <div className="hero-visual" aria-hidden="true">
        <div className="hero-card">
          <div className="code-block">
            <p><span className="kw">const</span> developer = {"{"}</p>
            <p className="indent"><span className="key">name</span>: <span className="str">&quot;Thangamanikandan&quot;</span>,</p>
            <p className="indent"><span className="key">role</span>: <span className="str">&quot;Full Stack Developer&quot;</span>,</p>
            <p className="indent"><span className="key">loves</span>: [<span className="str">&quot;Anime&quot;</span>, <span className="str">&quot;Manhwas&quot;</span>],</p>
            <p className="indent"><span className="key">available</span>: <span className="bool">true</span></p>
            <p>{"}"}</p>
          </div>
        </div>
      </div>
    </section>
  );
}