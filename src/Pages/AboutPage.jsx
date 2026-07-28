import andrenaProfile from "../assets/andrena-profile.jpg";
import { skillGroups } from "../data";

export default function AboutPage() {
  return (
    <section className="section container about-page">
      <div className="about-hero">
        <div className="about-hero-copy">
          <span className="eyebrow">About</span>
          <h2>New media changed how I see the world.</h2>
          <p>
            Before learning design and web development, I looked at websites, apps,
            posters, and brands as finished things. Now I see the choices behind
            them: spacing, hierarchy, color, accessibility, emotion, and the way a
            person moves through information.
          </p>
        </div>
        <figure className="about-portrait">
          <img src={andrenaProfile} alt="Portrait of Andrena Yacoub" />
        </figure>
      </div>

      <div className="about-layout about-story-layout">
        <article className="story-card about-story-card">
          <p className="case-label">My perspective</p>
          <h3 className="story-heading">
            I use design and code to make ideas feel clearer, more useful, and more alive.
          </h3>
          <p className="muted">
            New media made me notice details I used to miss. A button is not just
            a button anymore. It is a decision about trust. A layout is not just
            decoration; it is a path someone follows. Web development changed my
            life because it showed me that creativity can become something real,
            interactive, and helpful for other people.
          </p>
          <p className="muted">
            I am building my skills across UI/UX, visual design,
            So I can create digital experiences that feel thoughtful,
            organized, and personal.
          </p>
        </article>

        <aside className="resume-card" aria-label="Resume">
          <p className="case-label">Resume</p>
          <h3>View or download my resume.</h3>
          <p className="muted">
            A quick look at my education, experience, and creative technology skills.
          </p>
          <div className="resume-actions">
            <a className="pill-btn" href="/files/andrena-yacoub-resume.pdf" target="_blank" rel="noreferrer">
              View resume
            </a>
            <a className="project-link" href="/files/andrena-yacoub-resume.pdf" download>
              Download PDF
            </a>
          </div>
        </aside>
      </div>

      <section className="skills-section" aria-labelledby="skills-heading">
        <div className="section-head case-section-head">
          <div>
            <span className="eyebrow">Skills</span>
            <h2 id="skills-heading">The tools and thinking I’m growing.</h2>
          </div>
          <p>
            I’m interested in the space where visuals, systems, and interaction
            meet: making work that looks polished and also makes sense to use.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <article className="skill-card" key={group.title}>
              <h3>{group.title}</h3>
              <div className="skill-cloud">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <div className="path-card about-path-card">
        <div className="timeline-item">
          <h3>Past</h3>
          <p className="muted">
            I started by learning layout, typography, storytelling, and how visual choices change the way people feel.
          </p>
        </div>
        <div className="timeline-item">
          <h3>Present</h3>
          <p className="muted">
            I’m building Figma case studies, React projects, and a portfolio that shows both design thinking and web development.
          </p>
        </div>
        <div className="timeline-item">
          <h3>Future</h3>
          <p className="muted">
            I want to keep growing in new media, contribute to thoughtful digital projects, and find an internship where I can learn from real creative teams.
          </p>
        </div>
      </div>
    </section>
  );
}
