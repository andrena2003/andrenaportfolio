import { Link } from "react-router-dom";

export default function ProjectCard({ project, tone = "tone-1", index = 0 }) {
  return (
    <article className={`project-card ${tone}`}>
      <div className="project-card-topline">
        <span>{String(index + 1).padStart(2, "0")}</span>
        {project.disciplineLabel && <span className="project-discipline">{project.disciplineLabel}</span>}
      </div>

      <div className="project-copy">
        <h3>{project.title}</h3>
        {project.type && <p className="project-format">{project.type}</p>}
        <p>{project.summary}</p>
        {project.tools?.length > 0 && (
          <div className="project-tools" aria-label={`${project.title} tools`}>
            {project.tools.map((tool) => (
              <span key={tool}>{tool}</span>
            ))}
          </div>
        )}
        <div className="project-actions">
          <Link className="project-link" to={`/project/${project.slug}`}>
            View project
          </Link>
          {project.figmaUrl && (
            <a
              className="project-link project-link-secondary"
              href={project.figmaUrl}
              target="_blank"
              rel="noreferrer"
            >
              Open in Figma
            </a>
          )}
          {project.pdfUrl && (
            <a
              className="project-link project-link-secondary"
              href={project.pdfUrl}
              target="_blank"
              rel="noreferrer"
            >
              View presentation
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
