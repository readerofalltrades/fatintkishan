import './Projects.css'
import projects from '../data/projects'

function ProjectCard({ title, tagline, stack, slug, icon: Icon }) {
  return (
    <div className="project-card">
      <div className="project-card-header">
        <Icon size={22} strokeWidth={1.5} color="var(--yellow)" />
        <h3 className="project-title">{title}</h3>
      </div>
      <p className="project-tagline">{tagline} <a href={`/projects/${slug}`} className="project-link">View →</a></p>
      <div className="project-stack">
        {stack.map((tag) => (
          <span key={tag} className="stack-tag">{tag}</span>
        ))}
      </div>
    </div>
  )
}

function Projects() {
  const featured = projects.filter((p) => p.featured)
  return (
    <section className="projects-snapshot">
      <div className="projects-content">
        <h2 className="section-label">Featured Projects</h2>
        <div className="projects-grid">
          {featured.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
        <a href="/projects" className="about-link">See all projects →</a>
      </div>
    </section>
  )
}

export default Projects