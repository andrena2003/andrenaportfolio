import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../data";
import meraInstagramGoldenHour from "../assets/mera-instagram-golden-hour.png";
import meraInstagramDinnerPairing from "../assets/mera-instagram-dinner-pairing.png";
import meraInstagramNightBright from "../assets/mera-instagram-night-bright.png";

export default function ProjectPage() {
  const { slug } = useParams();
  const [activeSection, setActiveSection] = useState("overview");
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    const sections = [...document.querySelectorAll("[data-case-section]")];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0, 0.15, 0.35, 0.6] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [slug]);

  if (!project) {
    return (
      <section className="section container">
        <h2>Project not found.</h2>
      </section>
    );
  }

  const detailItems = [
    project.role && ["Role", project.role],
    project.team && ["Team / context", project.team],
    project.timeline && ["Timeline", project.timeline],
    project.tools?.length > 0 && ["Tools", project.tools.join(" · ")],
    project.deliverables?.length > 0 && ["Core deliverable", project.deliverables[0]],
    project.type && ["Project context", project.type],
  ].filter(Boolean);
  const marketing = project.marketingExecution;
  const growth = project.marketingStrategy;
  const projectIndex = projects.findIndex((item) => item.slug === project.slug);
  const previousProject = projects[(projectIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(projectIndex + 1) % projects.length];
  const audience = project.keyConcepts?.find((item) => item.title.toLowerCase().includes("audience"));
  const sectionLinks = [
    { id: "overview", label: "Overview" },
    (project.context || project.challenge || project.outcome) && { id: "context", label: "Context" },
    { id: "strategy", label: "Strategy" },
    { id: "execution", label: project.discipline === "design" ? "Design process" : "Execution" },
    project.metrics?.length > 0 && { id: "results", label: "Results" },
    project.gallery?.length > 0 && { id: "visuals", label: "Visuals" },
    { id: "reflection", label: "Reflection" },
  ].filter(Boolean);

  return (
    <section className={`section container project-page project-page-${project.slug} ${project.brandIdentity ? "project-page-brand" : ""} ${project.brandShowcase ? "project-page-editorial" : ""}`}>
      <nav className="case-scroll-nav" aria-label={`${project.title} case study sections`}>
        {sectionLinks.map((link) => (
          <a className={activeSection === link.id ? "is-active" : ""} href={`#${link.id}`} aria-current={activeSection === link.id ? "location" : undefined} key={link.id}>
            {link.label}
          </a>
        ))}
      </nav>

      <div className="project-page-hero" id="overview" data-case-section>
        <div>
          <span className="eyebrow">Case study · {project.type || "Project"}</span>
          <h2 className="display-heading">{project.title}</h2>
          <p className="project-lede">{project.summary}</p>
          {project.projectIntro && <p className="project-intro">{project.projectIntro}</p>}
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

      {project.projectNote && (
        <aside className="project-note" aria-label="Project disclaimer">
          <strong>Fictional portfolio concept</strong>
          <p>{project.projectNote}</p>
        </aside>
      )}

      {project.image && (
        <figure className="case-image">
          <img src={project.image} alt={project.imageAlt || `${project.title} project preview`} />
          <figcaption>{project.imageCaption || "Selected screens and planning from the case study."}</figcaption>
        </figure>
      )}

      {project.brandShowcase && (
        <div className="editorial-process brand-showcase-process">
          <article className="editorial-row">
            <div className="editorial-copy">
              <span className="eyebrow">Brand identity</span>
              <h2>{project.brandShowcase.title}</h2>
              <p>{project.brandShowcase.description}</p>
              <div className="editorial-swatches" aria-label={`${project.title} brand colours`}>
                {project.brandShowcase.colors.map((color) => <span key={color.value}><i style={{ backgroundColor: color.value }} />{color.name}</span>)}
              </div>
            </div>
            <figure className="brand-showcase-visual">
              <img src={project.brandShowcase.image} alt={project.brandShowcase.imageAlt} />
              <figcaption>{project.brandShowcase.caption}</figcaption>
            </figure>
          </article>

          <article className="editorial-row brand-voice-row">
            <div className="editorial-copy">
              <span className="eyebrow">Voice & content system</span>
              <h2>{project.brandShowcase.voiceTitle}</h2>
              <p>{project.brandShowcase.voiceDescription}</p>
            </div>
            <div className="brand-principles">
              {project.brandShowcase.principles.map((item, index) => (
                <article key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.body}</p></article>
              ))}
            </div>
          </article>
        </div>
      )}

      {project.brandIdentity && (
        <div className="editorial-process">
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

        </div>
      )}

      {project.brandIdentity && marketing && (
        <section className="case-section paid-preview-section" id="execution" data-case-section>
          <div className="section-head case-section-head">
            <div><span className="eyebrow">Paid campaign</span><h2>Search and social ads.</h2></div>
            <p>Two ad concepts introduce the same offer in different ways.</p>
          </div>
          <div className="paid-preview-grid">
            <div className="paid-preview-search">
              <article className="google-search-ad" aria-label="MERA Google search ad concept">
                <div className="google-ad-kicker"><strong>{marketing.googleAds.searchAd.label}</strong><span> · {marketing.googleAds.searchAd.url}</span><b>⋮</b></div>
                <h3>{marketing.googleAds.searchAd.headline}</h3><h4>{marketing.googleAds.searchAd.secondaryHeadline}</h4><p>{marketing.googleAds.searchAd.description}</p>
              </article>
              <div className="paid-preview-seo">
                <span className="eyebrow">SEO keywords</span>
                <ul className="seo-keywords" aria-label="Priority MERA keywords">{marketing.seo.priorityKeywords.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            </div>
            <figure className="meta-ad-mockup paid-preview-meta">
              <div className="meta-ad-header"><span className="meta-avatar">M</span><span><strong>MERA Sparkling Tea</strong><small>Sponsored · Instagram</small></span><b>•••</b></div>
              <div className="meta-ad-art"><img src={marketing.meta.creative} alt="MERA sparkling tea social advertisement" /><div className="meta-ad-copy"><span>ZERO-PROOF · FULL NIGHT</span><h3>Stay for the whole night.</h3></div></div>
            </figure>
          </div>
          <div className="mera-instagram-creative">
            <div className="mera-instagram-creative-head"><span className="eyebrow">More Instagram creative</span><p>Three feed concepts extend the same premium, zero-proof campaign across different social occasions.</p></div>
            <div className="mera-instagram-grid">
              {[
                [meraInstagramGoldenHour, "MERA golden-hour Instagram post with two sparkling tea cans, grapefruit, flowers, and a Vancouver sunset."],
                [meraInstagramDinnerPairing, "MERA dinner-pairing Instagram post showing sparkling tea poured beside a plated meal."],
                [meraInstagramNightBright, "MERA late-night Instagram post showing three friends raising sparkling tea cans over a city rooftop."],
              ].map(([image, alt]) => (
                <figure className="mera-instagram-post" key={alt}>
                  <div className="meta-ad-header"><span className="meta-avatar">M</span><span><strong>MERA Sparkling Tea</strong><small>Sponsored · Instagram</small></span><b>•••</b></div>
                  <img src={image} alt={alt} />
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      {project.keyConcepts?.length > 0 && (
        <div className="case-section" id="strategy" data-case-section>
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
        <div className="case-section" id="results" data-case-section>
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
        <div className="case-study-grid" id="context" data-case-section>
          {project.context && (
            <article>
              <p className="case-label">Context</p>
              <p>{project.context}</p>
            </article>
          )}
          {project.challenge && (
            <article>
              <p className="case-label">Core problem</p>
              <p>{project.challenge}</p>
            </article>
          )}
          {audience && (
            <article>
              <p className="case-label">Target audience</p>
              <p>{audience.body}</p>
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

      {!project.brandIdentity && (project.objective || project.responsibilities?.length > 0) && (
        <div className="case-section case-brief">
          <div><span className="eyebrow">Project brief</span><h2>What I was responsible for.</h2></div>
          <div>{project.objective && <p className="reflection-copy">{project.objective}</p>}
            {project.responsibilities?.length > 0 && <ul className="case-list">{project.responsibilities.map((item) => <li key={item}>{item}</li>)}</ul>}
          </div>
        </div>
      )}

      {!project.brandIdentity && project.research?.length > 0 && (
        <div className="case-section research-discovery-section">
          <div className="section-head case-section-head"><div><span className="eyebrow">Research &amp; discovery</span><h2>{project.researchTitle || "Evidence that shaped the direction."}</h2></div><p>Documented project insights are separated from assumptions; case studies without formal user testing identify that limitation.</p></div>
          <div className="research-grid">{project.research.map((item) => <article className="concept-card" key={item.title}><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
        </div>
      )}

      {!project.brandIdentity && project.designProcess?.length > 0 && (
        <div className="case-section design-process-section" id="execution" data-case-section>
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
        <div className="case-section channel-mix-section">
          <div className="section-head case-section-head"><div><span className="eyebrow">Channel mix</span><h2>Where the launch budget works hardest.</h2></div>{project.brandIdentity && <p>This financial budget is an AI-assisted planning estimate created for the fictional campaign, not recorded client spend.</p>}</div>
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
            <div className="competitor-lens"><span className="eyebrow">Real competitors</span><div>{marketing.seo.competitorFindings.map((item) => <article key={item.title}><a href={item.url} target="_blank" rel="noreferrer"><img src={item.image} alt={item.imageAlt} /></a><h3>{item.title}</h3><p>{item.body}</p></article>)}</div></div>
          </section>

          <section className="case-section marketing-channel-section">
            <div className="section-head case-section-head">
              <div><span className="eyebrow">Landing page</span><h2>Turn interest into a purchase.</h2></div>
              <p>One focused offer makes the next step clear.</p>
            </div>
            <div className="landing-cro-layout">
              <article className="mera-landing-preview">
                <img src={project.image} alt="MERA discovery pack landing page hero" />
                <div className="landing-preview-copy"><span>{marketing.landingPage.eyebrow}</span><h3>{marketing.landingPage.title}</h3><p>{marketing.landingPage.copy}</p><b>{marketing.landingPage.cta} →</b></div>
                <div className="landing-proof">{marketing.landingPage.proof.map((item) => <span key={item}>✓ {item}</span>)}</div>
              </article>
            </div>
          </section>

          <section className="case-section marketing-channel-section mera-email-section">
            <div className="section-head case-section-head mera-email-heading">
              <div><span className="eyebrow">Email marketing</span><h2>From interest to reorder.</h2></div>
              <p>{marketing.email.goal}</p>
            </div>
            <div className="email-flow">{marketing.email.flow.map((item) => <article key={item.step}><span>{item.step}</span><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
          </section>

          <section className="case-section marketing-channel-section measurement-section">
            <div className="section-head case-section-head">
              <div><span className="eyebrow">Measurement</span><h2>Track what matters.</h2></div>
              <p>A simple measurement plan for a future pilot.</p>
            </div>
            <div className="measurement-plan-grid">
              <div className="measurement-table" role="table" aria-label="MERA measurement plan">
                <div className="measurement-table-head" role="row"><span role="columnheader">Journey stage</span><span role="columnheader">Measures reviewed</span></div>
                {marketing.measurement.reporting.map((item) => <div role="row" key={item.label}><strong role="cell">{item.label}</strong><span role="cell">{item.value}</span></div>)}
              </div>
            </div>
          </section>
        </div>
      )}

      {!project.brandIdentity && project.deliverables?.length > 0 && (
        <div className="case-section deliverables-section"><div><span className="eyebrow">Deliverables</span><h2>What I produced.</h2></div><ul className="case-list">{project.deliverables.map((item) => <li key={item}>{item}</li>)}</ul></div>
      )}

      {project.gallery?.length > 0 && (
        <div className="case-section" id="visuals" data-case-section>
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

      {!project.brandIdentity && project.approach?.length > 0 && (
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
        <div className="case-section reflection-section" id="reflection" data-case-section>
          <div className="section-head case-section-head">
            <div>
              <span className="eyebrow">Reflection</span>
              <h2>What I learned.</h2>
            </div>
          </div>
          <p className="reflection-copy">{project.reflection}</p>
          {project.nextStep && <p className="reflection-next-step"><strong>Next step:</strong> {project.nextStep}</p>}
        </div>
      )}

      {(project.figmaUrl || project.pdfUrl) && (
        <section className="case-section prototype-section" aria-labelledby={`${project.slug}-prototype-heading`}>
          <div className="section-head case-section-head"><div><span className="eyebrow">Interactive demo</span><h2 id={`${project.slug}-prototype-heading`}>Explore the final deliverable.</h2></div><p>Open the working prototype or supporting presentation to review the complete flow and interaction details.</p></div>
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
        </section>
      )}

      <nav className="project-pagination" aria-label="Continue exploring case studies">
        <Link className="project-pagination-link project-pagination-previous" to={`/project/${previousProject.slug}`}>
          <small>← Previous project</small><strong>{previousProject.title}</strong><span>{previousProject.disciplineLabel}</span>
        </Link>
        <Link className="project-pagination-link project-pagination-next" to={`/project/${nextProject.slug}`}>
          <small>Next project →</small><strong>{nextProject.title}</strong><span>{nextProject.disciplineLabel}</span>
        </Link>
      </nav>
    </section>
  );
}
