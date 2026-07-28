import { useParams } from "react-router-dom";
import { projects } from "../data";

export default function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <section className="section container">
        <h2>Project not found.</h2>
      </section>
    );
  }

  const detailItems = [
    project.role && ["Role", project.role],
    project.timeline && ["Timeline", project.timeline],
    project.type && ["Type", project.type],
  ].filter(Boolean);

  return (
    <section className="section container project-page">
      <div className="project-page-hero">
        <div>
          <span className="eyebrow">{project.type || "Project"}</span>
          <h2 className="display-heading">{project.title}</h2>
          <p className="project-lede">{project.summary}</p>
        </div>

        {detailItems.length > 0 && (
          <dl className="case-meta">
            {detailItems.map(([label, value]) => (
              <div key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        )}
      </div>

      {project.image && (
        <figure className="case-image">
          <img src={project.image} alt={project.imageAlt || `${project.title} project preview`} />
          <figcaption>{project.imageCaption || "Selected screens and planning from the case study."}</figcaption>
        </figure>
      )}

      {project.tools?.length > 0 && (
        <div className="project-tools project-tools-large" aria-label={`${project.title} tools`}>
          {project.tools.map((tool) => (
            <span key={tool}>{tool}</span>
          ))}
        </div>
      )}

      {project.keyConcepts?.length > 0 && (
        <div className="case-section">
          <div className="section-head case-section-head">
            <div>
              <span className="eyebrow">Key concepts</span>
              <h2>What shaped the campaign.</h2>
            </div>
          </div>
          <div className="concept-grid">
            {project.keyConcepts.map((concept) => (
              <article className="concept-card" key={concept.title}>
                <h3>{concept.title}</h3>
                <p>{concept.body}</p>
              </article>
            ))}
          </div>
        </div>
      )}

      {project.metrics?.length > 0 && (
        <div className="case-section">
          <div className="section-head case-section-head">
            <div>
              <span className="eyebrow">Impact</span>
              <h2>Signals from the social media launch.</h2>
            </div>
          </div>
          <div className="metric-grid">
            {project.metrics.map((metric, index) => (
              <article className="metric-card" key={metric}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{metric}</p>
              </article>
            ))}
          </div>
        </div>
      )}

      {(project.context || project.challenge || project.outcome) && (
        <div className="case-study-grid">
          {project.context && (
            <article>
              <p className="case-label">Context</p>
              <p>{project.context}</p>
            </article>
          )}
          {project.challenge && (
            <article>
              <p className="case-label">Challenge</p>
              <p>{project.challenge}</p>
            </article>
          )}
          {project.outcome && (
            <article>
              <p className="case-label">Outcome</p>
              <p>{project.outcome}</p>
            </article>
          )}
        </div>
      )}

      {project.gallery?.length > 0 && (
        <div className="case-section">
          <div className="section-head case-section-head">
            <div>
              <span className="eyebrow">Social media visuals</span>
              <h2>Templates, top posts, and campaign touchpoints.</h2>
            </div>
          </div>
          <div className="project-gallery">
            {project.gallery.map((item) => (
              <figure className="gallery-item" key={item.caption}>
                <img src={item.image} alt={item.alt} />
                <figcaption>{item.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      )}

      {project.approach?.length > 0 && (
        <div className="case-section">
          <div className="section-head case-section-head">
            <div>
              <span className="eyebrow">Approach</span>
              <h2>How the project came together.</h2>
            </div>
          </div>
          <div className="poster-notes">
            {project.approach.map((step, index) => (
              <div className="poster-note" key={index}>
                {step}
              </div>
            ))}
          </div>
        </div>
      )}

      {project.reflection && (
        <div className="case-section reflection-section">
          <div className="section-head case-section-head">
            <div>
              <span className="eyebrow">Reflection</span>
              <h2>What I learned.</h2>
            </div>
          </div>
          <p className="reflection-copy">{project.reflection}</p>
        </div>
      )}

      {(project.figmaUrl || project.pdfUrl) && (
        <div className="project-detail-actions">
          {project.figmaUrl && (
            <a
              className="pill-btn"
              href={project.figmaUrl}
              target="_blank"
              rel="noreferrer"
            >
              Open full Figma file
            </a>
          )}
          {project.pdfUrl && (
            <a
              className="pill-btn"
              href={project.pdfUrl}
              target="_blank"
              rel="noreferrer"
            >
              View presentation
            </a>
          )}
        </div>
      )}
    </section>
  );
}
