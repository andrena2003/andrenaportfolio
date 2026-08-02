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
    <section className={`section container project-page ${project.brandIdentity ? "project-page-brand" : ""}`}>
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

      {project.brandIdentity && (
        <div className="editorial-process">
          <article className="editorial-row">
            <div className="editorial-copy">
              <span className="eyebrow">Moodboard</span>
              <h2>Social energy, without the noise.</h2>
              <p>The visual direction combines warm hospitality, evening richness, botanical ingredients, and confident colour. The goal was to make a zero-proof drink feel celebratory rather than restrictive.</p>
            </div>
            <div className="mera-moodboard" aria-label="MERA campaign moodboard">
              <img src={project.image} alt="MERA campaign colour and product direction" />
              <div className="moodboard-word">MERA</div>
              <div className="moodboard-quote">Stay for the whole night.</div>
              {project.brandIdentity.colors.map((color) => <span key={color.value} style={{ backgroundColor: color.value }} title={`${color.name} ${color.value}`} />)}
            </div>
          </article>

          <article className="editorial-row">
            <div className="editorial-copy">
              <span className="eyebrow">Logo development</span>
              <h2>Finding a mark with clarity and character.</h2>
              <p>Three digital directions tested how MERA could feel premium without becoming formal. The selected wordmark is the clearest at packaging size and leaves room for the campaign photography to carry the personality.</p>
            </div>
            <div className="logo-directions" aria-label="Three MERA logo directions">
              <article><small>Direction 01 · Editorial</small><span className="logo-direction-editorial">MERA</span><p>Expressive, but too close to beauty branding.</p></article>
              <article><small>Direction 02 · Monogram</small><span className="logo-direction-monogram">M</span><p>Useful as a supporting mark, but less recognizable alone.</p></article>
              <article className="logo-direction-selected"><small>Selected · Clear & modern</small><span className="logo-direction-modern">MERA</span><p>Confident, legible, and flexible across cans, social posts, and events.</p></article>
            </div>
          </article>

          <article className="editorial-row">
            <div className="editorial-copy">
              <span className="eyebrow">Final identity</span>
              <h2>A simple wordmark with an optimistic voice.</h2>
              <p>{project.brandIdentity.description}</p>
              <div className="editorial-swatches" aria-label="MERA brand colours">
                {project.brandIdentity.colors.map((color) => <span key={color.value}><i style={{ backgroundColor: color.value }} />{color.name}</span>)}
              </div>
            </div>
            <div className="brand-mark-panel" aria-label={`${project.brandIdentity.name} logo`}>
              <span className="brand-wordmark">{project.brandIdentity.name}</span>
              <span className="brand-tagline">{project.brandIdentity.tagline}</span>
            </div>
          </article>

          <article className="editorial-row">
            <div className="editorial-copy">
              <span className="eyebrow">Typography</span>
              <h2>Editorial warmth meets modern clarity.</h2>
              <p>Playfair Display gives campaign headlines an expressive, premium tone. Manrope supports the wordmark, labels, body copy, and calls to action with clean readability.</p>
            </div>
            <div className="editorial-type" aria-label="MERA typography system">
              {project.brandIdentity.typography.map((type) => (
                <div className={type.family === "Playfair Display" ? "type-display" : "type-body"} key={type.family}>
                  <small>{type.family} · {type.role}</small>
                  <p>{type.sample}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
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
              <h2>{project.keyConceptsTitle || "What shaped the campaign."}</h2>
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
              <h2>{project.metricsTitle || "Signals from the social media launch."}</h2>
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

      {project.brandIdentity && (project.objective || project.responsibilities?.length > 0 || project.deliverables?.length > 0) && (
        <div className="brief-deliverables-grid">
          <article className="brief-deliverable-card">
            <div><span className="eyebrow">Project brief</span><h2>What I was responsible for.</h2></div>
            {project.objective && <p className="reflection-copy">{project.objective}</p>}
            {project.responsibilities?.length > 0 && <ul className="case-list">{project.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul>}
          </article>
          <article className="brief-deliverable-card">
            <div><span className="eyebrow">Deliverables</span><h2>What I produced.</h2></div>
            {project.deliverables?.length > 0 && <ul className="case-list">{project.deliverables.map((item) => <li key={item}>{item}</li>)}</ul>}
          </article>
        </div>
      )}

      {!project.brandIdentity && (project.objective || project.responsibilities?.length > 0) && (
        <div className="case-section case-brief">
          <div><span className="eyebrow">Project brief</span><h2>What I was responsible for.</h2></div>
          <div>{project.objective && <p className="reflection-copy">{project.objective}</p>}
            {project.responsibilities?.length > 0 && <ul className="case-list">{project.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul>}
          </div>
        </div>
      )}

      {project.research?.length > 0 && (
        <div className="case-section">
          <div className="section-head case-section-head"><div><span className="eyebrow">Research</span><h2>{project.researchTitle || "What the campaign needed to solve."}</h2></div></div>
          <div className="research-grid">{project.research.map((item) => <article className="concept-card" key={item.title}><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
        </div>
      )}

      {project.designProcess?.length > 0 && (
        <div className="case-section design-process-section">
          <div className="section-head case-section-head"><div><span className="eyebrow">Design process</span><h2>{project.designProcessTitle || "From category insight to launch system."}</h2></div></div>
          <div className={project.brandIdentity ? "process-editorial" : "process-timeline"}>{project.designProcess.map((item) => <article className="process-step" key={item.phase}><span>{item.phase}</span><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
        </div>
      )}

      {project.uxDecisions?.length > 0 && (
        <div className="case-section">
          <div className="section-head case-section-head"><div><span className="eyebrow">Channel mix</span><h2>Where the launch budget works hardest.</h2></div></div>
          <div className="decision-grid">{project.uxDecisions.map((item) => <article className="decision-card" key={item.title}><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
        </div>
      )}

      {!project.brandIdentity && project.deliverables?.length > 0 && (
        <div className="case-section deliverables-section"><div><span className="eyebrow">Deliverables</span><h2>What I produced.</h2></div><ul className="case-list">{project.deliverables.map((item) => <li key={item}>{item}</li>)}</ul></div>
      )}

      {project.gallery?.length > 0 && (
        <div className="case-section">
          <div className="section-head case-section-head">
            <div>
              <span className="eyebrow">{project.galleryLabel || "Social media visuals"}</span>
              <h2>{project.galleryTitle || "Templates, top posts, and campaign touchpoints."}</h2>
            </div>
          </div>
          <div className={`project-gallery ${project.galleryLayout === "screens" ? "project-gallery-screens" : ""}`}>
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
              {project.figmaLabel || "Open full Figma file"}
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
