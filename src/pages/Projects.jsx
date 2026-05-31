import PageLayout from "../components/PageLayout";
import allProjects from "../data/allProjects";

function ProjectEntry({
  title,
  date,
  category,
  tools,
  description,
  icon: Icon,
  github,
}) {
  return (
    <div className="project-entry">
      <div className="project-entry-header">
        <Icon size={16} strokeWidth={1.5} color="var(--yellow)" />
        <h3>{title}</h3>
        <span className="page-meta">{category}</span>
      </div>
      <p className="page-meta">
        {date}
        {tools.length > 0 ? ` — ${tools.join(", ")}` : ""}
      </p>
      <p>{description}</p>
      {github && (
        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          className="section-link"
        >
          Visit Repository
        </a>
      )}
    </div>
  );
}

function ProjectsPage() {
  return (
    <PageLayout>
      <h1>Projects</h1>
      <p className="page-meta">
        A chronological record of things built — latest first.
      </p>
      <hr />
      {allProjects.map((project) => (
        <ProjectEntry key={project.title + project.date} {...project} />
      ))}
    </PageLayout>
  );
}

export default ProjectsPage;
