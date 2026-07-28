import { Link } from "react-router-dom";
import { projects, site } from "../data";
import SlotText from "../SlotText";

export default function HomePage() {
  return (
    <>
      <section className="hero container" id="home">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="hero-kicker">Hii! It's Andrena</p>

            <h1 className="hero-title">
              <SlotText
                words={["UI/UX", "Marketing", "Brand", "Graphic"]}
                interval={3000}
              />
              <span>Designer</span>
            </h1>

            <p className="hero-description">{site.intro}</p>

            <div className="studio-meta" aria-label="Focus areas">
              <span>Digital design</span>
              <span>Visual systems</span>
              <span>Marketing</span>
            </div>

            <div className="intro-row" aria-label="Contact links">
              <a className="contact-link" href={`mailto:${site.email}`}>
                <span className="contact-link-icon" aria-hidden="true">@</span>
                <span>{site.email}</span>
              </a>
              <a
                className="contact-link"
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                <span className="contact-link-icon" aria-hidden="true">in</span>
                <span>{site.linkedinUsername}</span>
              </a>
            </div>

            <div className="cta-row">
              <Link to="/work" className="pill-btn">
                Discover My Work →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section container studio-strip" aria-label="Studio approach">
        <p>Research-led</p>
        <p>Detail-oriented</p>
        <p>Responsive</p>
        <p>Portfolio-ready</p>
      </section>

      <section className="section container home-work" aria-labelledby="home-work-heading">
        <div className="section-head home-work-head">
          <div>
            <span className="eyebrow">Portfolio</span>
            <h2 id="home-work-heading">Selected work, kept simple.</h2>
          </div>
          <Link className="project-link" to="/work">
            View all work
          </Link>
        </div>

        <div className="home-work-grid">
          {projects.slice(0, 3).map((project, index) => (
            <Link
              className="home-work-card"
              to={`/project/${project.slug}`}
              key={project.slug}
              style={{ "--card-delay": `${index * 90}ms` }}
            >
              <div className={`home-work-visual tone-${(index % 4) + 1}`}>
                {project.image ? (
                  <img src={project.image} alt={project.imageAlt || `${project.title} preview`} />
                ) : (
                  <div className="home-work-preview" aria-hidden="true">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <div className="preview-lines">
                      <i />
                      <i />
                      <i />
                    </div>
                  </div>
                )}
              </div>
              <div className="home-work-card-copy">
                <span className="home-work-index">{String(index + 1).padStart(2, "0")}</span>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <span className="home-work-type">{project.type}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
