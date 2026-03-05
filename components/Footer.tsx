export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <span className="nav-logo">TM<span className="dot">.</span></span>
            <p>Building scalable applications with passion.</p>
          </div>
          <nav className="footer-nav" aria-label="Footer navigation">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </nav>
          <p className="footer-copy">
            © {new Date().getFullYear()} Thangamanikandan. Built with ❤️ using Next.js.
          </p>
        </div>
      </div>
    </footer>
  );
}