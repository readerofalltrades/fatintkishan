import "./About.css";

function About() {
  return (
    <section className="about-snapshot">
      <div className="about-wrapper">
        <div className="about-image-placeholder" aria-hidden="true" />
        <div className="about-content">
          <h2 className="section-label">About</h2>
          <p className="about-body">
            I'm Fatin Tazwar Kishan — a CSE student at BRAC University. On a
            journey of seeking knowledge and solving problems — picking up
            whatever tools I need along the way: web dev, Linux, game dev,
            hardware, 3D. Not to collect skills, but to never have to wait on
            anyone else to build what's in my head.
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
