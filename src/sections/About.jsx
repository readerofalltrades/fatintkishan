import './About.css'

function About() {
  return (
    <section className="about-snapshot">
      <div className="about-content">
        <h2 className="section-label">About</h2>
        <p className="about-body">
          I'm Fatin Tazwar Kishan — a CSE student at BRAC University. On a journey of seeking knowledge and solving problems — picking up whatever tools I need along the way: web dev, Linux, game dev, hardware, 3D. Not to collect skills, but to never have to wait on anyone else to build what's in my head.
        </p>
        <a href="/about" className="about-link">Read more →</a>
      </div>
    </section>
  )
}

export default About