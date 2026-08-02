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
                <div className="campaign-plan-topline"><span>Sales campaign</span><strong>{marketing.meta.budget}</strong></div>
                <article><h3>Audience structure</h3><ul>{marketing.meta.audiences.map((item) => <li key={item}>{item}</li>)}</ul></article>
                <article><h3>Placements</h3><div className="marketing-tags">{marketing.meta.placements.map((item) => <span key={item}>{item}</span>)}</div></article>
                <article><h3>Creative tests</h3><ul>{marketing.meta.tests.map((item) => <li key={item}>{item}</li>)}</ul></article>
                <div className="target-strip">{marketing.meta.targets.map((item) => <span key={item}>{item}</span>)}</div>
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
              <div><span className="eyebrow">Measurement & reporting</span><h2>One view from impression to revenue.</h2></div>
              <p>Targets are clearly labelled as projections because MERA is a portfolio concept—not a live client campaign.</p>
            </div>
            <div className="measurement-tools">{marketing.measurement.tools.map((item) => <span key={item}>{item}</span>)}</div>
            <div className="measurement-layout">
              <div className="report-dashboard">
                <div className="report-dashboard-head"><span>Monthly performance report</span><strong>Concept dashboard</strong></div>
                <div className="report-metrics">{marketing.monthlyReport.snapshot.map((item) => <article key={item.label}><strong>{item.value}</strong><span>{item.label}</span></article>)}</div>
                <div className="report-funnel">{marketing.measurement.reporting.map((item) => <article key={item.label}><strong>{item.label}</strong><span>{item.value}</span></article>)}</div>
              </div>
              <article className="report-actions"><span className="eyebrow">Monthly optimization</span><h3>What I would recommend to ownership.</h3><ul className="case-list">{marketing.monthlyReport.actions.map((item) => <li key={item}>{item}</li>)}</ul><div className="event-map"><strong>GA4 events</strong>{marketing.measurement.events.map((item) => <code key={item}>{item}</code>)}</div></article>
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
