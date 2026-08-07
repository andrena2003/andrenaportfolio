import { Link } from "react-router-dom";

export default function ProjectCard({ project, tone = "tone-1", index = 0 }) {
  const previewImage = project.cardImage || project.image || project.gallery?.[0]?.image;
  const previewAlt = project.cardImageAlt || project.imageAlt || project.gallery?.[0]?.alt || `${project.title} project preview`;

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
        </div>
      </div>

      {previewImage && (
        <Link className="project-card-media" to={`/project/${project.slug}`} aria-label={`View ${project.title}`}>
          <img src={previewImage} alt={previewAlt} />
        </Link>
      )}
    </article>
  );
}
