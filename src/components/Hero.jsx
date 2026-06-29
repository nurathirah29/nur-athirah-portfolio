import './Hero.css';

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-bg2" aria-hidden="true" />

      <div className="hero-content">
        <div className="hero-tag fade-up">Open to Backend Developer opportunities</div>

        <h1 className="hero-heading fade-up delay-1">
          Hi, I'm<br />
          <em>Nur Athirah</em>
        </h1>

        <p className="hero-sub fade-up delay-2">
          Junior Full-Stack Developer with 1 year 8 months of experience building and maintaining internal business systems using Flask, MySQL, and Bootstrap — 
          from multi-role workflows and business data management to self-hosted deployment and operations.
        </p>

        <div className="hero-actions fade-up delay-3">
          <button className="btn-primary" onClick={() => scrollTo('projects')}>
            View Projects
          </button>

          <a href="/resume/Nur Athirah Mohd Subri-Resume.pdf" target="_blank" rel="noreferrer" className="btn-ghost">
            Resume ↗
          </a>
        </div>
      </div>
      <div className="scroll-hint fade-up delay-4">
        <div className="scroll-line" />
        Scroll to explore
      </div>
    </section>
  );
}