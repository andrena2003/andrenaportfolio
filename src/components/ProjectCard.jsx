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
        {project.role && <p className="project-card-role"><strong>Role</strong> · {project.role}</p>}
        <p className="project-card-teaser">{project.summary}</p>
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
