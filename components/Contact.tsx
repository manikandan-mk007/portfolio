"use client";
import { useState, useEffect, useRef } from "react";

export default function Contact() {
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

  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const e: Record<string, string> = {};
    if (!formData.name.trim()) e.name = "Please enter your full name.";
    else if (formData.name.trim().length < 2) e.name = "Name must be at least 2 characters.";
    if (!formData.email.trim()) e.email = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = "Please enter a valid email address.";
    if (!formData.message.trim()) e.message = "Please enter a message.";
    else if (formData.message.trim().length < 10) e.message = "Message must be at least 10 characters.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setStatus("✓ Your message has been sent! I'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus(""), 5000);
    }, 1500);
  };

  return (
    <section ref={sectionRef} className="section contact" id="contact" aria-labelledby="contact-heading">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">05 / Contact</span>
          <h2 id="contact-heading" className="section-title">Let&apos;s Build Something Great</h2>
        </div>

        <div className="contact-wrap">
          {/* Left info */}
          <div className="contact-info reveal">
            <p className="contact-intro">
              I&apos;m currently available for freelance projects and full-time roles. Whether you
              have a project in mind or just want to chat about front-end, I&apos;d love to hear from you.
            </p>

            <ul className="contact-details">
              <li>
                <span className="contact-icon" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </span>
                <a href="mailto:thangamanikandan.it@gmail.com">thangamanikandan.it@gmail.com</a>
              </li>
              <li>
                <span className="contact-icon" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </span>
                <span>Nagercoil, Tamil Nadu (Remote OK)</span>
              </li>
            </ul>

            <div className="social-links">
              <a href="https://github.com/manikandan-mk007" className="social-link" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                </svg>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/thangamanikandan-i-560b20396/" className="social-link" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
                </svg>
                LinkedIn
              </a>
              <a href="https://leetcode.com/u/SxdrFzxYeB/" className="social-link" target="_blank" rel="noopener noreferrer" >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" >
                  <path d="M16.102 17.93L9.6 11.4l6.5-6.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M20 12H9.6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                LeetCode
              </a>
            </div>
          </div>

          {/* Right form */}
          <form className="contact-form reveal" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Full Name <span className="required">*</span>
              </label>
              <input
                type="text" id="name" name="name"
                className={`form-input ${errors.name ? "error" : ""} ${formData.name && !errors.name ? "success" : ""}`}
                placeholder="Tamil Selvi"
                value={formData.name} onChange={handleChange} required
              />
              {errors.name && <span className="form-error">{errors.name}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email Address <span className="required">*</span>
              </label>
              <input
                type="email" id="email" name="email"
                className={`form-input ${errors.email ? "error" : ""} ${formData.email && !errors.email ? "success" : ""}`}
                placeholder="manikandan@example.com"
                value={formData.email} onChange={handleChange} required
              />
              {errors.email && <span className="form-error">{errors.email}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input
                type="text" id="subject" name="subject"
                className="form-input"
                placeholder="Project inquiry..."
                value={formData.subject} onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message <span className="required">*</span>
              </label>
              <textarea
                id="message" name="message" rows={5}
                className={`form-input form-textarea ${errors.message ? "error" : ""} ${formData.message && !errors.message ? "success" : ""}`}
                placeholder="Tell me about your project..."
                value={formData.message} onChange={handleChange} required
              />
              {errors.message && <span className="form-error">{errors.message}</span>}
            </div>

            <button type="submit" className="btn btn-primary btn-full" disabled={isSubmitting}>
              <span className="btn-text">{isSubmitting ? "Sending…" : "Send Message"}</span>
              {!isSubmitting && (
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13"/>
                  <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                </svg>
              )}
            </button>

            {status && (
              <div className={`form-success ${status.includes("sent") ? "visible" : ""}`}>
                {status}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}