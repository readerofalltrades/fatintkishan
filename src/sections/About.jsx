import "./About.css";

function About() {
  return (
    <section className="about-snapshot">
      <div className="about-wrapper">
        <div className="about-image-placeholder" aria-hidden="true" />
        <div className="about-content">
          <h2 className="section-label">About</h2>
          <p className="about-body">
            I’m Fatin Tazwar Kishan, a Computer Science and Engineering student
            at BRAC University. I learn by building, usually starting from
            problems I want to solve, then picking up whatever tools are
            necessary to figure them out. I prefer understanding things well
            enough to build them myself rather than waiting on the idea to take
            shape elsewhere.
          </p>
          <div className="about-actions">
            <a href="/about" className="btn btn-primary">
              Read more
            </a>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
            >
              View Résumé
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
