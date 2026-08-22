import { Link, useParams } from "react-router-dom";
import { useRef, useState } from "react";
import { projects } from "../data";
import meraInstagramGoldenHour from "../assets/mera-instagram-golden-hour.png";
import meraInstagramDinnerPairing from "../assets/mera-instagram-dinner-pairing.png";
import meraInstagramNightBright from "../assets/mera-instagram-night-bright.png";
import mitsubishiJourneyMap from "../assets/mitsubishi-customer-journey-map.png";
import mitsubishiPersona from "../assets/mitsubishi-user-persona.png";
import mitsubishiUserFlow from "../assets/mitsubishi-user-flow-chart.png";
import mitsubishiCurrentHomepage from "../assets/mitsubishi-current-homepage.png";
import mitsubishiRedesignHomepage from "../assets/mitsubishi-redesign-homepage.png";
import mitsubishiCurrentInventory from "../assets/mitsubishi-current-inventory.png";
import mitsubishiCurrentMatch from "../assets/mitsubishi-current-model-match.png";
import mitsubishiCurrentOffers from "../assets/mitsubishi-current-offers.png";
import hairUserPersona from "../assets/hair-user-persona.jpg";
import hairEmpathyMap from "../assets/hair-empathy-map.jpg";
import hairUserScenario from "../assets/hair-user-scenario.jpg";
import hairJourneyMap from "../assets/hair-journey-map.jpg";
import hairUserFlow from "../assets/hair-user-flow.jpg";

function MeraInstagramCarousel() {
  const slides = [
    [meraInstagramNightBright, "MERA late-night Instagram post showing three friends raising sparkling tea cans over a city rooftop."],
    [meraInstagramGoldenHour, "MERA golden-hour Instagram post with two sparkling tea cans, grapefruit, flowers, and a Vancouver sunset."],
    [meraInstagramDinnerPairing, "MERA dinner-pairing Instagram post showing sparkling tea poured beside a plated meal."],
  ];
  const [activeSlide, setActiveSlide] = useState(0);
  const touchStart = useRef(null);
  const showSlide = (index) => setActiveSlide((index + slides.length) % slides.length);
  const handleTouchEnd = (event) => {
    if (touchStart.current === null) return;
    const distance = event.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(distance) > 45) showSlide(activeSlide + (distance < 0 ? 1 : -1));
    touchStart.current = null;
  };

  return (
    <div className="mera-instagram-carousel" aria-label="MERA Instagram campaign carousel">
      <figure className="mera-instagram-carousel-post">
        <div className="meta-ad-header"><span className="meta-avatar">M</span><span><strong>MERA Sparkling Tea</strong><small>Sponsored · Instagram</small></span><b>•••</b></div>
        <div className="mera-carousel-image" onTouchStart={(event) => { touchStart.current = event.touches[0].clientX; }} onTouchEnd={handleTouchEnd}>
          <img src={slides[activeSlide][0]} alt={slides[activeSlide][1]} />
          <button className="mera-carousel-arrow mera-carousel-previous" type="button" onClick={() => showSlide(activeSlide - 1)} aria-label="Previous Instagram post">‹</button>
          <button className="mera-carousel-arrow mera-carousel-next" type="button" onClick={() => showSlide(activeSlide + 1)} aria-label="Next Instagram post">›</button>
          <span className="mera-carousel-count">{activeSlide + 1}/{slides.length}</span>
        </div>
        <figcaption className="mera-carousel-dots" aria-label="Choose an Instagram post">
          {slides.map(([, alt], index) => <button type="button" className={index === activeSlide ? "is-active" : ""} onClick={() => showSlide(index)} aria-label={`Show post ${index + 1}`} aria-current={index === activeSlide ? "true" : undefined} key={alt} />)}
        </figcaption>
      </figure>
    </div>
  );
}

function TastebudsInstagramCarousel({ image, alt }) {
  const slides = [
    { position: "0% center", label: "Halloween carousel cover" },
    { position: "33% center", label: "Halloween carousel story" },
    { position: "66% center", label: "TasteBuds follow card" },
    { position: "100% center", label: "Halloween Instagram Story" },
  ];
  const [activeSlide, setActiveSlide] = useState(0);
  const touchStart = useRef(null);
  const showSlide = (index) => setActiveSlide((index + slides.length) % slides.length);
  const handleTouchEnd = (event) => {
    if (touchStart.current === null) return;
    const distance = event.changedTouches[0].clientX - touchStart.current;
    if (Math.abs(distance) > 45) showSlide(activeSlide + (distance < 0 ? 1 : -1));
    touchStart.current = null;
  };

  return (
    <div className="tastebuds-instagram-carousel" aria-label="TasteBuds Instagram content carousel">
      <figure className="mera-instagram-carousel-post tastebuds-instagram-carousel-post">
        <div className="meta-ad-header">
          <span className="meta-avatar tastebuds-instagram-avatar">T</span>
          <span><strong>TasteBuds Vancouver</strong><small>@tastebudsvan · Instagram</small></span>
          <b>•••</b>
        </div>
        <div
          className="mera-carousel-image tastebuds-carousel-image"
          onTouchStart={(event) => { touchStart.current = event.touches[0].clientX; }}
          onTouchEnd={handleTouchEnd}
          role="img"
          aria-label={`${alt} — ${slides[activeSlide].label}`}
          style={{ backgroundImage: `url(${image})`, backgroundPosition: slides[activeSlide].position }}
        >
          <button className="mera-carousel-arrow mera-carousel-previous" type="button" onClick={() => showSlide(activeSlide - 1)} aria-label="Previous TasteBuds post">‹</button>
          <button className="mera-carousel-arrow mera-carousel-next" type="button" onClick={() => showSlide(activeSlide + 1)} aria-label="Next TasteBuds post">›</button>
          <span className="mera-carousel-count">{activeSlide + 1}/{slides.length}</span>
        </div>
        <figcaption className="mera-carousel-dots" aria-label="Choose a TasteBuds Instagram post">
          {slides.map((slide, index) => <button type="button" className={index === activeSlide ? "is-active" : ""} onClick={() => showSlide(index)} aria-label={`Show ${slide.label}`} aria-current={index === activeSlide ? "true" : undefined} key={slide.label} />)}
        </figcaption>
      </figure>
    </div>
  );
}

function MeraChannelMixChart({ decisions, colors }) {
  const palette = colors?.length > 0 ? colors.map((color) => color.value) : ["#3B1026", "#E64D45", "#F3A184", "#F7E9D8"];
  const segments = decisions.map((item, index) => {
    const match = item.title.match(/^(.*?)\s*·\s*(\d+)%$/);
    return {
      label: match ? match[1].trim() : item.title,
      percent: match ? Number(match[2]) : Math.round(100 / decisions.length),
      color: palette[index % palette.length],
    };
  });

  return (
    <div className="channel-mix-chart" aria-label="MERA budget split by channel">
      <div className="channel-mix-bar" role="img" aria-label={segments.map((s) => `${s.label} ${s.percent}%`).join(", ")}>
        {segments.map((segment) => (
          <span key={segment.label} style={{ width: `${segment.percent}%`, backgroundColor: segment.color }} />
        ))}
      </div>
      <ul className="channel-mix-legend">
        {segments.map((segment) => (
          <li key={segment.label}>
            <i style={{ backgroundColor: segment.color }} />
            {segment.label}
            <b>{segment.percent}%</b>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MitsubishiUxBrowser() {
  const [activeArtifact, setActiveArtifact] = useState("persona");
  const artifacts = {
    persona: { label: "User persona", image: mitsubishiPersona, alt: "Proto-persona for Alex Morgan, a Vancouver family PHEV shopper, showing background, goals, pain points, and technology preferences." },
    scenario: { label: "User scenario" },
    journey: { label: "Journey map", image: mitsubishiJourneyMap, alt: "Customer journey map for a family PHEV shopper across Discover, Compare, Configure, and Connect stages." },
    flow: { label: "User flow", image: mitsubishiUserFlow, alt: "User-flow chart for the family PHEV purchase journey from campaign or organic search to test-drive confirmation, including alternative paths." },
  };
  const active = artifacts[activeArtifact];

  return (
    <div className="mitsubishi-safari-window">
      <div className="mitsubishi-safari-chrome" aria-hidden="true"><span className="safari-dot safari-dot-red" /><span className="safari-dot safari-dot-yellow" /><span className="safari-dot safari-dot-green" /><div className="safari-address">mitsubishi-motors.ca/ux-research</div></div>
      <div className="mitsubishi-artifact-tabs" role="tablist" aria-label="Mitsubishi UX artifacts">
        {Object.entries(artifacts).map(([key, artifact]) => <button id={`artifact-tab-${key}`} type="button" role="tab" aria-selected={activeArtifact === key} aria-controls="mitsubishi-artifact-panel" className={activeArtifact === key ? "is-active" : ""} onClick={() => setActiveArtifact(key)} key={key}>{artifact.label}</button>)}
      </div>
      <div id="mitsubishi-artifact-panel" className="mitsubishi-artifact-panel" role="tabpanel" aria-labelledby={`artifact-tab-${activeArtifact}`}>
        {active.image ? <a href={active.image} target="_blank" rel="noreferrer"><img src={active.image} alt={active.alt} /></a> : (
          <article className="mitsubishi-scenario mitsubishi-scenario-tab">
            <header className="scenario-header">
              <p className="case-label">User scenario</p>
              <h3>Alex needs a practical family SUV without committing before the numbers are clear.</h3>
              <p>Alex and their partner are replacing an older vehicle. They are interested in the Outlander PHEV, but need to confirm that its range, seating, trim, and final price fit their household before visiting a dealership.</p>
            </header>
            <div className="scenario-details">
              <div><span>Situation</span><p>Research begins on a phone after work and continues later on a laptop with Alex’s partner.</p></div>
              <div><span>Needs</span><p>Compare trims, understand the estimated total, and check whether the chosen vehicle is available nearby.</p></div>
              <div><span>Constraint</span><p>Alex has limited time and does not want to repeat the same vehicle and contact details on a dealer website.</p></div>
              <div><span>Success</span><p>A saved configuration carries into local inventory and a confirmed test-drive booking.</p></div>
            </div>
            <ol className="scenario-steps" aria-label="Alex's primary task sequence">
              <li><span>01</span><strong>Review the model</strong></li>
              <li><span>02</span><strong>Compare trims</strong></li>
              <li><span>03</span><strong>Build and price</strong></li>
              <li><span>04</span><strong>Find local inventory</strong></li>
              <li><span>05</span><strong>Book a test drive</strong></li>
            </ol>
          </article>
        )}
      </div>
      <p className="mitsubishi-artifact-caption">{active.label} · Select another tab to explore the complete UX planning set.{active.image ? " Click the graphic to open it full size." : ""}</p>
    </div>
  );
}

function HairUxBrowser() {
  const artifacts = [
    { label: "User persona", image: hairUserPersona, alt: "User persona for Aisha Toma, a busy BCIT student seeking transparent salon pricing, visual examples, and convenient online booking." },
    { label: "Empathy map", image: hairEmpathyMap, alt: "Empathy map showing what Aisha says, does, feels, and thinks while searching for and booking a salon." },
    { label: "User scenario", image: hairUserScenario, alt: "User scenario describing Aisha's difficulty comparing salon pricing, styles, and booking confirmation before an upcoming wedding." },
    { label: "Journey map", image: hairJourneyMap, alt: "Salon booking journey map across awareness, research, decision-making, booking, confirmation, and reminders." },
    { label: "User flow", image: hairUserFlow, alt: "Hair by Athraa user-flow chart from opening the website through stylist matching, consultation, booking, and confirmation." },
  ];
  const [activeArtifact, setActiveArtifact] = useState(0);
  const active = artifacts[activeArtifact];
  return (
    <div className="mitsubishi-safari-window hair-safari-window">
      <div className="mitsubishi-safari-chrome" aria-hidden="true"><span className="safari-dot safari-dot-red" /><span className="safari-dot safari-dot-yellow" /><span className="safari-dot safari-dot-green" /><div className="safari-address">hair-by-athraa.com/ux-research</div></div>
      <div className="mitsubishi-artifact-tabs hair-artifact-tabs" role="tablist" aria-label="Hair by Athraa UX artifacts">
        {artifacts.map((artifact, index) => <button id={`hair-artifact-tab-${index}`} type="button" role="tab" aria-selected={activeArtifact === index} aria-controls="hair-artifact-panel" className={activeArtifact === index ? "is-active" : ""} onClick={() => setActiveArtifact(index)} key={artifact.label}>{artifact.label}</button>)}
      </div>
      <div id="hair-artifact-panel" className="mitsubishi-artifact-panel hair-artifact-panel" role="tabpanel" aria-labelledby={`hair-artifact-tab-${activeArtifact}`}>
        <a href={active.image} target="_blank" rel="noreferrer"><img src={active.image} alt={active.alt} /></a>
      </div>
      <p className="mitsubishi-artifact-caption">{active.label} · Select another tab to explore the research set. Click the graphic to open it full size.</p>
    </div>
  );
}

function MitsubishiComparison({ project }) {
  const [comparisonIndex, setComparisonIndex] = useState(0);
  const comparisons = [
    { title: "Homepage", current: mitsubishiCurrentHomepage, redesign: mitsubishiRedesignHomepage, currentAlt: "Current Mitsubishi Motors Canada homepage with a warranty campaign carousel and persistent shopping action bar.", redesignAlt: "Redesigned Mitsubishi Motors homepage with streamlined navigation, Outlander PHEV hero content, and aligned vehicle cards." },
    { title: "Model guidance", current: mitsubishiCurrentMatch, redesign: project.gallery[1].image, currentAlt: "Current Mitsubishi Meet Your Match questionnaire landing screen.", redesignAlt: project.gallery[1].alt },
    { title: "Offers & configuration", current: mitsubishiCurrentOffers, redesign: project.gallery[2].image, currentAlt: "Current Mitsubishi offer page for the 2026 Outlander PHEV with price and features.", redesignAlt: project.gallery[2].alt },
    { title: "Inventory & discovery", current: mitsubishiCurrentInventory, redesign: project.gallery[0].image, currentAlt: "Current Mitsubishi ClickShop inventory page with filters and four vehicle cards.", redesignAlt: project.gallery[0].alt },
  ];
  const comparison = comparisons[comparisonIndex];
  const changeComparison = (direction) => setComparisonIndex((comparisonIndex + direction + comparisons.length) % comparisons.length);
  return <section className="mitsubishi-comparison-section" aria-labelledby="mitsubishi-comparison-heading"><div className="section-head case-section-head"><div><span className="eyebrow">Current vs redesign</span><h2 id="mitsubishi-comparison-heading">Compare the experience screen by screen.</h2></div></div><div className="comparison-carousel-toolbar"><div>{comparisons.map((item,index)=><button type="button" className={comparisonIndex===index?"is-active":""} onClick={()=>setComparisonIndex(index)} key={item.title}>{item.title}</button>)}</div><span>{String(comparisonIndex+1).padStart(2,"0")} / {String(comparisons.length).padStart(2,"0")}</span></div><div className="mitsubishi-comparison-carousel"><button type="button" className="comparison-arrow comparison-arrow-left" onClick={()=>changeComparison(-1)} aria-label="Previous website comparison">‹</button><div className="mitsubishi-comparison-grid"><article><p className="case-label">Current website · {comparison.title}</p><a className="comparison-screen" href={comparison.current} target="_blank" rel="noreferrer"><img src={comparison.current} alt={comparison.currentAlt}/></a></article><article><p className="case-label">Redesign · {comparison.title}</p><a className="comparison-screen comparison-screen-redesign" href={comparison.redesign} target="_blank" rel="noreferrer"><img src={comparison.redesign} alt={comparison.redesignAlt}/></a></article></div><button type="button" className="comparison-arrow comparison-arrow-right" onClick={()=>changeComparison(1)} aria-label="Next website comparison">›</button></div></section>;
}

const ICON_PATHS = {
  user: <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></>,
  users: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>,
  clock: <><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></>,
  sliders: <><line x1="4" y1="21" x2="4" y2="14" /><line x1="4" y1="10" x2="4" y2="3" /><line x1="12" y1="21" x2="12" y2="12" /><line x1="12" y1="8" x2="12" y2="3" /><line x1="20" y1="21" x2="20" y2="16" /><line x1="20" y1="12" x2="20" y2="3" /><line x1="1" y1="14" x2="7" y2="14" /><line x1="9" y1="8" x2="15" y2="8" /><line x1="17" y1="16" x2="23" y2="16" /></>,
  package: <><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></>,
  layers: <><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></>,
  "map-pin": <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></>,
  "alert-circle": <><circle cx="12" cy="12" r="10" /><line x1="12" y1="8" x2="12" y2="12" /><line x1="12" y1="16" x2="12.01" y2="16" /></>,
  target: <><circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" /></>,
  check: <polyline points="20 6 9 17 4 12" />,
  calendar: <><rect x="3" y="4" width="18" height="17" rx="2" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></>,
  camera: <><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" /><circle cx="12" cy="13" r="4" /></>,
  trending: <><polyline points="3 17 9 11 13 15 21 7" /><polyline points="15 7 21 7 21 13" /></>,
  play: <><circle cx="12" cy="12" r="10" /><polygon points="10 8 16 12 10 16 10 8" /></>,
  barChart: <><line x1="4" y1="20" x2="4" y2="10" /><line x1="10" y1="20" x2="10" y2="4" /><line x1="16" y1="20" x2="16" y2="13" /><line x1="22" y1="20" x2="2" y2="20" /></>,
};

function Icon({ name, className }) {
  const path = ICON_PATHS[name];
  if (!path) return null;
  return (
    <svg className={`case-icon ${className || ""}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {path}
    </svg>
  );
}

const META_ICONS = { "Role": "user", "Team": "users", "Team / context": "users", "Timeline": "clock", "Tools": "sliders", "Core deliverable": "package", "Project context": "layers", "Type": "layers" };
const GRID_ICONS = { "Context": "map-pin", "Core problem": "alert-circle", "Challenge": "alert-circle", "Target audience": "target", "Outcome": "check" };

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
    project.team && project.slug !== "tastebuds" && ["Team / context", project.team],
    project.timeline && ["Timeline", project.timeline],
    project.tools?.length > 0 && ["Tools", project.tools.join(" · ")],
    project.deliverables?.length > 0 && project.slug !== "tastebuds" && ["Core deliverable", project.deliverables[0]],
    project.type && ["Project context", project.type],
  ].filter(Boolean);
  const marketing = project.marketingExecution;
  const growth = project.marketingStrategy;
  const projectIndex = projects.findIndex((item) => item.slug === project.slug);
  const previousProject = projects[(projectIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(projectIndex + 1) % projects.length];
  const audience = project.keyConcepts?.find((item) => item.title.toLowerCase().includes("audience"));
  return (
    <section className={`section container project-page project-page-${project.slug} ${project.brandIdentity ? "project-page-brand" : ""} ${project.brandShowcase ? "project-page-editorial" : ""}`}>
      <div className="project-page-hero" id="overview" data-case-section>
        <div>
          <span className="eyebrow">Case study · {project.type || "Project"}</span>
          <h2 className="display-heading">{project.title}</h2>
          {!project.hideCaseStudySummary && <p className="project-lede">{project.summary}</p>}
          {project.projectIntro && <p className="project-intro">{project.projectIntro}</p>}
        </div>

        {detailItems.length > 0 && (
          <dl className="case-meta">
            {detailItems.map(([label, value]) => (
              <div className={label === "Core deliverable" ? "case-meta-deliverable" : undefined} key={label}>
                <dt><Icon name={META_ICONS[label]} />{label}</dt>
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
          {project.imageCaption && <figcaption>{project.imageCaption}</figcaption>}
        </figure>
      )}

      {project.skillsDemonstrated?.length > 0 && ["mitsubishi-motors-website-redesign", "hair-by-athraa"].includes(project.slug) && (
        <section className="project-capabilities mitsubishi-design-skills" aria-labelledby={`${project.slug}-skills-heading`}>
          <div>
            <span className="eyebrow">Design capabilities</span>
            <h2 id={`${project.slug}-skills-heading`}>{project.skillsTitle || "Skills demonstrated."}</h2>
          </div>
          <ul className="mitsubishi-capabilities-list">
            {project.skillsDemonstrated.map((skill) => <li key={skill}>{skill}</li>)}
          </ul>
        </section>
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
              {project.brandShowcase.images?.length > 0 ? (
                <div className="brand-showcase-logo-grid">
                  {project.brandShowcase.images.map((item) => (
                    <div key={item.label}>
                      <img src={item.image} alt={item.alt} />
                      <span>{item.label}</span>
                    </div>
                  ))}
                </div>
              ) : <img src={project.brandShowcase.image} alt={project.brandShowcase.imageAlt} />}
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
              <h2>Logo Design Process.</h2>
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
              <h2>Logo</h2>
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
            <MeraInstagramCarousel />
          </div>
        </section>
      )}

      {project.patternInterruptAd && (
        <section className="case-section pattern-interrupt-section" aria-labelledby="pattern-interrupt-title">
          <div className="section-head case-section-head pattern-interrupt-heading">
            <div>
              <span className="eyebrow">{project.patternInterruptAd.eyebrow}</span>
              <h2 id="pattern-interrupt-title">{project.patternInterruptAd.title}</h2>
            </div>
            <p>{project.patternInterruptAd.description}</p>
          </div>
          <div className="pattern-interrupt-layout">
            <figure className="pattern-interrupt-video-frame">
              <video autoPlay loop muted playsInline controls preload="metadata" poster={project.patternInterruptAd.poster} aria-label="MERA Ditch the 3 PM Coffee Crash vertical advertisement">
                <source src={project.patternInterruptAd.video} type="video/mp4" />
                Your browser does not support embedded video.
              </video>
              <figcaption>Vertical social ad · 9:16 · 10 seconds</figcaption>
            </figure>
            <div className="pattern-interrupt-storyboard">
              <ol>
                {project.patternInterruptAd.phases.map((phase, index) => (
                  <li key={phase.time}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div><small>{phase.time}</small><h3>{phase.title}</h3><p>{phase.body}</p></div>
                  </li>
                ))}
              </ol>
              <aside className="pattern-interrupt-note">
                <span className="eyebrow">Strategy note</span>
                <p>{project.patternInterruptAd.strategyNote}</p>
              </aside>
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
              <p className="case-label"><Icon name={GRID_ICONS.Context} />Context</p>
              <p>{project.context}</p>
            </article>
          )}
          {project.challenge && (
            <article>
              <p className="case-label"><Icon name={GRID_ICONS["Core problem"]} />Core problem</p>
              <p>{project.challenge}</p>
            </article>
          )}
          {audience && (
            <article>
              <p className="case-label"><Icon name={GRID_ICONS["Target audience"]} />Target audience</p>
              <p>{audience.body}</p>
            </article>
          )}
          {project.outcome && (
            <article>
              <p className="case-label"><Icon name={GRID_ICONS.Outcome} />Outcome</p>
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
          <div className="section-head case-section-head"><div><span className="eyebrow">Research &amp; discovery</span><h2>{project.researchTitle || "Evidence that shaped the direction."}</h2></div></div>
          <div className="research-grid">{project.research.map((item) => <article className="concept-card" key={item.title}><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
          {project.slug === "mitsubishi-motors-website-redesign" && (
            <div className="research-artifacts-subsection">
              <p className="case-label">Persona, scenario, journey &amp; user flow</p>
              <MitsubishiUxBrowser />
            </div>
          )}
          {project.slug === "hair-by-athraa" && (
            <div className="research-artifacts-subsection hair-ux-artifacts">
              <p className="case-label">Persona, empathy, scenario, journey &amp; user flow</p>
              <HairUxBrowser />
            </div>
          )}
        </div>
      )}

      {!project.brandIdentity && project.designProcess?.length > 0 && (
        <div className="case-section design-process-section" id="execution" data-case-section>
          <div className="section-head case-section-head"><div><span className="eyebrow">{project.designProcessLabel || "Design process"}</span><h2>{project.designProcessTitle || "From category insight to launch system."}</h2></div></div>
          <div className={project.brandIdentity ? "process-editorial" : "process-timeline"}>{project.designProcess.map((item) => <article className="process-step" key={item.phase}><span>{item.phase}</span><h3>{item.title}</h3><p>{item.body}</p></article>)}</div>
        </div>
      )}

      {project.contentOperations && (
        <section className="case-section tastebuds-content-operations" aria-labelledby="tastebuds-content-heading">
          <div className="section-head case-section-head">
            <div><span className="eyebrow">Content planning</span><h2 id="tastebuds-content-heading">{project.contentOperations.title}</h2></div>
            <p>{project.contentOperations.intro}</p>
          </div>

          <div className="tastebuds-operations-grid">
            <article>
              <span className="case-label tastebuds-icon-label"><Icon name="calendar" />Weekly rhythm</span>
              {project.contentOperations.planning.map((item) => <div className="tastebuds-operation-row" key={item.label}><strong>{item.label}</strong><p>{item.value}</p></div>)}
            </article>
            <article>
              <span className="case-label tastebuds-icon-label"><Icon name="camera" />Content sourcing</span>
              <ul>{project.contentOperations.sourcing.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
            <article>
              <span className="case-label tastebuds-icon-label"><Icon name="clock" />Scheduling</span>
              {project.contentOperations.scheduling.map((item) => <div className="tastebuds-operation-row" key={item.label}><strong>{item.label}</strong><p>{item.value}</p></div>)}
              <div className="tastebuds-posting-tools">{project.contentOperations.tools.map((item) => <span key={item}>{item}</span>)}</div>
            </article>
          </div>

          <div className="tastebuds-performance-strip">
            <div className="tastebuds-insights">
              <span className="case-label tastebuds-icon-label"><Icon name="trending" />Behaviour insights</span>
              {project.contentOperations.insights.map((item) => <div key={item.label}><strong>{item.label}</strong><p>{item.value}</p></div>)}
            </div>
            {project.contentOperations.performance.map((item) => {
              const isInstagram = item.platform === "Instagram";
              return <article className="tastebuds-platform-card" key={item.platform}>
                <span className="tastebuds-icon-label"><Icon name={isInstagram ? "barChart" : "play"} />{item.platform}</span>
                <strong>{item.views}</strong><p>views</p>
                <div className="tastebuds-mini-chart" aria-label={`${item.platform}: ${item.views} views and ${item.visits} profile visits`}>
                  <div><span>Views</span><i style={{ "--bar-width": isInstagram ? "63.5%" : "100%" }} /></div>
                  <div><span>Profile visits</span><i style={{ "--bar-width": isInstagram ? "100%" : "58%" }} /></div>
                </div>
                <b>{item.visits} profile visits</b>
              </article>;
            })}
          </div>

          <div className="tastebuds-evidence-grid">
            <div className="tastebuds-carousel-evidence"><TastebudsInstagramCarousel image={project.contentOperations.templateImage} alt={project.contentOperations.templateAlt} /><p>Instagram template system · Blog-style local food content adapted into a branded carousel.</p></div>
            <figure className="tastebuds-milestone"><img src={project.contentOperations.milestoneImage} alt={project.contentOperations.milestoneAlt} /><figcaption>Campaign milestone · Border Burrito sent an unsolicited collaboration invitation.</figcaption></figure>
          </div>
        </section>
      )}

      {project.slug === "mitsubishi-motors-website-redesign" && <MitsubishiComparison project={project} />}

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
          <div className="section-head case-section-head"><div><span className="eyebrow">Channel mix</span><h2>Financial Budget</h2></div>{project.brandIdentity && <p>This financial budget is an AI-assisted planning estimate created for the fictional campaign.</p>}</div>
          {project.brandIdentity && <MeraChannelMixChart decisions={project.uxDecisions} colors={project.brandIdentity.colors} />}
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

          <section className="case-section marketing-channel-section mera-landing-section">
            <div className="section-head case-section-head">
              <div><span className="eyebrow">Landing page</span></div>
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

        </div>
      )}

      {!project.brandIdentity && project.deliverables?.length > 0 && (
        <div className="case-section deliverables-section"><div><span className="eyebrow">Deliverables</span><h2>What I produced.</h2></div><ul className="case-list">{project.deliverables.map((item) => <li key={item}>{item}</li>)}</ul></div>
      )}

      {project.gallery?.length > 0 && project.slug !== "mitsubishi-motors-website-redesign" && project.slug !== "tastebuds" && (
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
          {(project.figmaUrl || project.pdfUrl) && (
            <div className="project-detail-actions">
              {project.figmaUrl && (
                <a className="pill-btn" href={project.figmaUrl} target="_blank" rel="noreferrer">
                  {project.figmaLabel || "Open full Figma file"}
                </a>
              )}
              {project.pdfUrl && (
                <a className="pill-btn" href={project.pdfUrl} target="_blank" rel="noreferrer">
                  View presentation
                </a>
              )}
            </div>
          )}
        </div>
      )}

      {!project.reflection && (project.figmaUrl || project.pdfUrl) && (
        <div className="project-detail-actions">
          {project.figmaUrl && (
            <a className="pill-btn" href={project.figmaUrl} target="_blank" rel="noreferrer">
              {project.figmaLabel || "Open full Figma file"}
            </a>
          )}
          {project.pdfUrl && (
            <a className="pill-btn" href={project.pdfUrl} target="_blank" rel="noreferrer">
              View presentation
            </a>
          )}
        </div>
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
