import andrenaProfile from "../assets/andrena-profile.jpg";
import { skillGroups } from "../data";

export default function AboutPage() {
  const resumeUrl = `${import.meta.env.BASE_URL}files/andrena-yacoub-resume.pdf`;

  return (
    <section className="section container about-page">
      <div className="about-hero">
        <div className="about-hero-copy">
          <span className="eyebrow">About</span>
          <h2>I connect strategy, design, and content.</h2>
          <p>
            I look at a campaign as one connected experience: the position that
            makes it distinct, the interface that helps people take action, and
            the content that earns their attention. That perspective lets me move
            between marketing, UI/UX, and social without losing the larger goal.
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
            I turn ideas into clear, useful experiences people can understand and act on.
          </h3>
          <p className="muted">
            A campaign message, a landing-page hierarchy, and a social post are
            different parts of the same journey. I use research, visual systems,
            prototyping, and performance thinking to make that journey feel
            consistent from first impression to conversion.
          </p>
          <p className="muted">
            I’m growing across marketing strategy, UI/UX, and content so I can
            create work that feels thoughtful, organized, and personal.
          </p>
        </article>

        <aside className="resume-card" aria-label="Resume">
          <p className="case-label">Resume</p>
          <h3>View or download my resume.</h3>
          <p className="muted">
            A quick look at my education, experience, and multidisciplinary creative skills.
          </p>
          <div className="resume-actions">
            <a className="pill-btn" href={resumeUrl} target="_blank" rel="noreferrer">
              View resume
            </a>
            <a className="project-link" href={resumeUrl} download>
              Download PDF
            </a>
          </div>
        </aside>
      </div>

      <section className="skills-section" aria-labelledby="skills-heading">
        <div className="section-head case-section-head">
          <div>
            <span className="eyebrow">Skills</span>
            <h2 id="skills-heading">Strategy first. Design and content in support.</h2>
          </div>
          <p>
            My strongest work connects a clear market position with an intuitive
            experience, useful content, and measurable next steps.
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
            I’m building campaign strategies, Figma prototypes, and content systems that show how creative decisions support real goals.
          </p>
        </div>
        <div className="timeline-item">
          <h3>Future</h3>
          <p className="muted">
            I want to grow with a collaborative team where marketing, brand, product, and content work together instead of in separate silos.
          </p>
        </div>
      </div>
    </section>
  );
}
