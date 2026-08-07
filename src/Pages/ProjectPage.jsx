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
  const marketing = project.marketingExecution;
  const growth = project.marketingStrategy;

  return (
    <section className={`section container project-page project-page-${project.slug} ${project.brandIdentity ? "project-page-brand" : ""}`}>
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
              <span className="eyebrow">Visual direction board</span>
              <h2>Social energy, without the noise.</h2>
              <p>This board brings together the actual product art direction, evening campaign treatment, and early identity exploration. Warm hospitality, botanical ingredients, and confident colour make the zero-proof drink feel celebratory rather than restrictive.</p>
            </div>
            <div className="mera-moodboard" aria-label="MERA visual direction board">
              {project.brandMoodboard?.map((item, index) => (
                <figure className={`moodboard-tile moodboard-tile-${index + 1}`} key={item.caption}>
                  <img src={item.image} alt={item.alt} />
                  <figcaption>{item.caption}</figcaption>
                </figure>
              ))}
              <div className="moodboard-palette" aria-label="MERA colour palette">
                {project.brandIdentity.colors.map((color) => <span key={color.value}><i style={{ backgroundColor: color.value }} />{color.name}</span>)}
              </div>
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

      {project.iteration && (
        <section className="case-section iteration-section" aria-labelledby={`${project.slug}-iteration-heading`}>
          <div className="iteration-heading">
            <span className="eyebrow">{project.iteration.label}</span>
            <h2 id={`${project.slug}-iteration-heading`}>{project.iteration.title}</h2>
          </div>
          <div className="iteration-compare">
            <article>
              <p className="case-label">{project.iteration.beforeLabel}</p>
              <p>{project.iteration.before}</p>
            </article>
            <article>
              <p className="case-label">{project.iteration.afterLabel}</p>
              <p>{project.iteration.after}</p>
            </article>
          </div>
          <p className="iteration-takeaway"><strong>Why it matters:</strong> {project.iteration.takeaway}</p>
        </section>
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

      {growth && (
        <section className="case-section growth-strategy-section">
          <div className="section-head case-section-head">
            <div><span className="eyebrow">Digital marketing strategy</span><h2>{growth.title}</h2></div>
            <p>{growth.intro}</p>
          </div>

          <div className="growth-funnel" aria-label="Marketing funnel">
            {growth.funnel.map((item) => (
              <article key={item.step}>
                <span>{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>

          <div className="growth-channel-grid">
            {growth.channels.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>

          <div className="growth-measurement">
            <article>
              <span className="eyebrow">Measurement plan</span>
              <h3>Connect marketing activity to dealer outcomes.</h3>
              <div className="measurement-tools">{growth.measurement.tools.map((item) => <span key={item}>{item}</span>)}</div>
              <div className="growth-event-map"><strong>Priority events</strong>{growth.measurement.events.map((item) => <code key={item}>{item}</code>)}</div>
            </article>
            <div className="growth-kpis">
              {growth.measurement.kpis.map((item) => <article key={item.label}><span>{item.label}</span><p>{item.value}</p></article>)}
            </div>
          </div>
        </section>
      )}

      {project.uxDecisions?.length > 0 && (
        <div className="case-section">
          <div className="section-head case-section-head"><div><span className="eyebrow">Channel mix</span><h2>Where the launch budget works hardest.</h2></div></div>
          <div className="decision-grid">{project.uxDecisions.map((item) => <article className="decision-card" key={item.title}><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
        </div>
      )}

      {marketing && (
        <div className="marketing-execution">
          <section className="case-section marketing-channel-section">
            <div className="section-head case-section-head">
              <div><span className="eyebrow">Google Ads</span><h2>Capture demand at the moment of intent.</h2></div>
              <p>{marketing.googleAds.objective}</p>
            </div>
            <div className="google-campaign-layout">
              <article className="google-search-ad" aria-label="MERA responsive Google search ad concept">
                <div className="google-ad-kicker"><strong>{marketing.googleAds.searchAd.label}</strong><span> · {marketing.googleAds.searchAd.url}</span><b>⋮</b></div>
                <h3>{marketing.googleAds.searchAd.headline}</h3>
                <h4>{marketing.googleAds.searchAd.secondaryHeadline}</h4>
                <p>{marketing.googleAds.searchAd.description}</p>
                <div className="google-sitelinks">{marketing.googleAds.searchAd.sitelinks.map((item) => <span key={item}>{item}</span>)}</div>
              </article>
              <div className="campaign-plan-panel">
                <div className="campaign-plan-topline"><span>Search campaign</span><strong>{marketing.googleAds.budget}</strong></div>
                <div className="keyword-groups">
                  {marketing.googleAds.keywordGroups.map((item) => (
                    <article key={item.group}><h3>{item.group}</h3>{item.terms.map((term) => <span key={term}>“{term}”</span>)}</article>
                  ))}
                </div>
                <ul className="case-list compact-list">{marketing.googleAds.optimization.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            </div>
          </section>

          <section className="case-section marketing-channel-section">
            <div className="section-head case-section-head">
              <div><span className="eyebrow">Meta advertising</span><h2>A campaign system built to test and learn.</h2></div>
              <p>{marketing.meta.objective}</p>
            </div>
            <div className="meta-campaign-layout">
              <figure className="meta-ad-mockup">
                <div className="meta-ad-header"><span className="meta-avatar">M</span><span><strong>MERA Sparkling Tea</strong><small>Sponsored · Instagram</small></span><b>•••</b></div>
                <div className="meta-ad-art">
                  <img src={marketing.meta.creative} alt="MERA sparkling tea Meta advertisement showing three cans at a Vancouver rooftop gathering" />
                  <div className="meta-ad-copy"><span>ZERO-PROOF · FULL NIGHT</span><h3>Stay for the whole night.</h3></div>
                </div>
                <figcaption><span><strong>mera.ca</strong><small>Meet your new dinner drink.</small></span><b>Shop now</b></figcaption>
              </figure>
              <div className="meta-plan-panel">
                <div className="campaign-plan-topline"><span>30-day media test plan</span><strong>Planning assumption</strong></div>
                <dl className="media-plan-table">
                  <div><dt>Proposed spend</dt><dd>{marketing.meta.budget}</dd></div>
                  <div><dt>Audience</dt><dd>{marketing.meta.audiences.join(" · ")}</dd></div>
                  <div><dt>Placements</dt><dd>{marketing.meta.placements.join(", ")}</dd></div>
                  <div><dt>Creative tests</dt><dd>{marketing.meta.tests.join(" · ")}</dd></div>
                  <div><dt>Decision criteria</dt><dd>{marketing.meta.targets.join(" · ")}</dd></div>
                </dl>
                <p className="planning-note">This is a proposed testing framework for a portfolio concept, not historical client spend or reported performance.</p>
              </div>
            </div>
          </section>

          <section className="case-section marketing-channel-section">
            <div className="section-head case-section-head">
              <div><span className="eyebrow">SEO & local discovery</span><h2>Build visibility that compounds beyond paid media.</h2></div>
              <p>Keyword and competitor research guide the site structure, content priorities, and local-search actions.</p>
            </div>
            <div className="seo-keywords" aria-label="Priority MERA keywords">{marketing.seo.priorityKeywords.map((item) => <span key={item}>{item}</span>)}</div>
            <div className="competitor-lens"><span className="eyebrow">Competitor lens</span><div>{marketing.seo.competitorFindings.map((item) => <article key={item.title}><h3>{item.title}</h3><p>{item.body}</p></article>)}</div></div>
            <div className="seo-action-grid">{marketing.seo.actions.map((item) => <article key={item.title}><span>↗</span><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
            <div className="local-seo-layout">
              <div className="business-profile-card" aria-label="Google Business Profile optimization concept">
                <div className="business-profile-cover"><span>MERA</span><small>SPARKLING TEA</small></div>
                <div><span className="profile-label">Google Business Profile · concept</span><h3>MERA Sparkling Tea</h3><p>Beverage company · Vancouver, BC</p><div className="profile-actions"><span>Website</span><span>Directions</span><span>Order</span></div></div>
              </div>
              <article className="local-action-panel"><span className="eyebrow">Local SEO</span><h3>Make every profile visit measurable.</h3><ul className="case-list">{marketing.seo.localActions.map((item) => <li key={item}>{item}</li>)}</ul></article>
            </div>
          </section>

          <section className="case-section marketing-channel-section">
            <div className="section-head case-section-head">
              <div><span className="eyebrow">Landing page & CRO</span><h2>Turn campaign attention into action.</h2></div>
              <p>The paid-media promise continues directly into one focused offer, supported by taste, occasion, and trust.</p>
            </div>
            <div className="landing-cro-layout">
              <article className="mera-landing-preview">
                <img src={project.image} alt="MERA discovery pack landing page hero" />
                <div className="landing-preview-copy"><span>{marketing.landingPage.eyebrow}</span><h3>{marketing.landingPage.title}</h3><p>{marketing.landingPage.copy}</p><b>{marketing.landingPage.cta} →</b></div>
                <div className="landing-proof">{marketing.landingPage.proof.map((item) => <span key={item}>✓ {item}</span>)}</div>
              </article>
              <article className="cro-plan"><span className="eyebrow">Conversion plan</span><h3>What gets tested.</h3><ol>{marketing.landingPage.decisions.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></li>)}</ol></article>
            </div>
          </section>

          <section className="case-section marketing-channel-section">
            <div className="section-head case-section-head">
              <div><span className="eyebrow">Email marketing</span><h2>A five-message path from interest to reorder.</h2></div>
              <p>{marketing.email.goal}</p>
            </div>
            <div className="email-flow">{marketing.email.flow.map((item) => <article key={item.step}><span>{item.step}</span><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
          </section>

          <section className="case-section marketing-channel-section measurement-section">
            <div className="section-head case-section-head">
              <div><span className="eyebrow">Measurement framework</span><h2>What would be tracked, and why.</h2></div>
              <p>A practical measurement plan for a future pilot. No simulated results are presented as campaign performance.</p>
            </div>
            <div className="measurement-tools">{marketing.measurement.tools.map((item) => <span key={item}>{item}</span>)}</div>
            <div className="measurement-plan-grid">
              <div className="measurement-table" role="table" aria-label="MERA measurement plan">
                <div className="measurement-table-head" role="row"><span role="columnheader">Journey stage</span><span role="columnheader">Measures reviewed</span></div>
                {marketing.measurement.reporting.map((item) => <div role="row" key={item.label}><strong role="cell">{item.label}</strong><span role="cell">{item.value}</span></div>)}
              </div>
              <article className="measurement-actions"><span className="eyebrow">Review cadence</span><h3>How decisions would be made.</h3><ul className="case-list">{marketing.monthlyReport.actions.map((item) => <li key={item}>{item}</li>)}</ul><div className="event-map"><strong>GA4 events</strong>{marketing.measurement.events.map((item) => <code key={item}>{item}</code>)}</div></article>
            </div>
          </section>
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
          <div className={`project-gallery ${project.galleryLayout === "screens" ? "project-gallery-screens" : ""} ${project.galleryLayout === "mixed" ? "project-gallery-mixed" : ""}`}>
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
