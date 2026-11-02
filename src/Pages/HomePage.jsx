import { Link } from "react-router-dom";
import { projects, site } from "../data";
import SlotText from "../SlotText";
import hairByAthraaLogo from "../assets/hair-by-athraa-logo.webp";
import tastebudsLogo from "../assets/tastebuds-logo.webp";
import mitsubishiHomeLogo from "../assets/mitsubishi-logo-home.png";

export default function HomePage() {
  const featuredProjects = [
    "mera-sparkling-tea-launch",
    "tastebuds",
    "hair-by-athraa",
    "mitsubishi-motors-website-redesign",
  ].map((slug) => projects.find((project) => project.slug === slug));

  return (
    <>
      <section className="hero container" id="home">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="hero-kicker">Hospitality marketing &amp; digital content</p>

            <h1 className="hero-title">
              <SlotText
                words={["Hospitality", "Social", "Content", "Brand"]}
                interval={3000}
              />
              <span>Marketing</span>
            </h1>

            <p className="hero-description">{site.intro}</p>

            <div className="studio-meta" aria-label="Focus areas">
              <span>Hotel &amp; F&amp;B marketing</span>
              <span>Social &amp; content</span>
              <span>Guest experience</span>
            </div>

            <div className="intro-row" aria-label="Contact links">
              <a className="contact-link" href={`mailto:${site.email}`}>
                <span className="contact-link-icon" aria-hidden="true">@</span>
                <span>{site.email}</span>
              </a>
              <a className="contact-link" href={site.linkedin} target="_blank" rel="noreferrer">
                <span className="contact-link-icon" aria-hidden="true">in</span>
                <span>{site.linkedinUsername}</span>
              </a>
            </div>

            <div className="cta-row">
              <Link to="/work" className="pill-btn">Discover My Work →</Link>
            </div>
          </div>

          <div className="project-widget-grid" aria-label="Featured projects">
            {featuredProjects.map((project, index) => (
              <Link className={`project-widget project-widget-${index + 1} project-widget-${project.slug}`} to={`/project/${project.slug}`} key={project.slug} aria-label={`${project.title} — ${project.disciplineLabel}`}>
                <span className="widget-project-discipline">{project.disciplineLabel}</span>
                <span className="widget-project-mark" aria-hidden="true">
                  {project.slug === "mera-sparkling-tea-launch" && <><strong>MERA</strong><small>sparkling tea</small></>}
                  {project.slug === "tastebuds" && <img className="widget-logo widget-logo-tastebuds" src={tastebudsLogo} alt="" />}
                  {project.slug === "hair-by-athraa" && <img className="widget-logo widget-logo-athraa" src={hairByAthraaLogo} alt="" />}
                  {project.slug === "mitsubishi-motors-website-redesign" && <img className="widget-logo widget-logo-mitsubishi" src={mitsubishiHomeLogo} alt="" />}
                </span>
                <span className="widget-project-label">View project ↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section container" aria-label="Hospitality marketing focus">
        <article className="story-card">
          <p className="case-label">Hospitality focus</p>
          <h2>Marketing that makes a stay, meal, or gathering feel worth choosing.</h2>
          <p className="muted">
            I’m currently completing a digital marketing practicum at Sheraton Vancouver Guildford Hotel, supporting social content, print and digital collateral, website updates, SEO, and campaign reporting for the hotel and MIXT Lobby Lounge.
          </p>
          <div className="studio-meta" aria-label="Hospitality marketing strengths">
            <span>Social content</span>
            <span>F&amp;B campaigns</span>
            <span>Brand standards</span>
            <span>Guest-first storytelling</span>
          </div>
        </article>
      </section>

      <section className="section container studio-strip" aria-label="Studio approach">
        <p>Guest-first</p><p>Detail-oriented</p><p>Brand-consistent</p><p>Performance-aware</p>
      </section>
    </>
  );
}
