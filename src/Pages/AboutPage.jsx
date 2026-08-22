import andrenaProfile from "../assets/andrena-profile.jpg";
import aboutLifeCar from "../assets/about-life-car.webp";
import aboutLifeHiking from "../assets/about-life-hiking.webp";
import aboutLifeDisney from "../assets/about-life-disney.webp";
import { site, skillGroups } from "../data";

export default function AboutPage() {
  const resumeUrl = `${import.meta.env.BASE_URL}files/andrena-yacoub-resume.pdf`;

  return (
    <section className="section container about-page">
      <div className="about-hero">
        <div className="about-hero-copy">
          <span className="eyebrow">About</span>
          <h2>I connect strategy, digital experiences, and content into one consistent story.</h2>
          <p>I’m a New Media Design &amp; Web Development graduate from BCIT with experience across UI/UX design, brand strategy, digital marketing, and social content creation.</p>
          <p className="about-philosophy">My approach: understand the real need, make the path easier to follow, then test that it actually works.</p>
        </div>
        <figure className="about-portrait">
          <img src={andrenaProfile} alt="Portrait of Andrena Yacoub" />
        </figure>
      </div>

      <section className="about-process" aria-labelledby="about-process-heading">
        <div className="section-head case-section-head">
          <div><span className="eyebrow">My process</span><h2 id="about-process-heading">From uncertainty to a clear, testable direction.</h2></div>
          <p>The exact methods change with the project, but the work follows one practical rhythm.</p>
        </div>
        <ol className="about-process-grid">
          <li><span>01</span><h3>Discover</h3><p>Frame the problem through context, research, and competitive review.</p></li>
          <li><span>02</span><h3>Define</h3><p>Synthesize findings into priorities, IA, and a clear success measure.</p></li>
          <li><span>03</span><h3>Design</h3><p>Explore flows, then build a high-fidelity system and prototype.</p></li>
          <li><span>04</span><h3>Validate</h3><p>Review usability, accessibility, and responsive behavior; flag what needs formal testing.</p></li>
        </ol>
      </section>

      <div className="about-layout about-story-layout">
        <article className="story-card about-story-card">
          <p className="case-label">My perspective</p>
          <h3 className="story-heading">
            I bring creative thinking and practical execution together.
          </h3>
          <p className="muted">
            My work moves between campaign strategy, visual identity, social
            content, and digital products. I enjoy shaping the idea, designing
            the experience, and thinking about how the final work will reach and
            connect with its audience.
          </p>
          <p className="muted">I care about clear hierarchy, accessible interactions, consistent brand systems, and measurable marketing decisions. I’m especially interested in roles where design and digital marketing strengthen each other.</p>
        </article>

        <aside className="about-story-card" aria-label="Beyond the screen">
          <span className="eyebrow">Beyond the screen</span>
          <h2>Coffee runs, trail walks, and fantasizing about cars.</h2>
          <p>Outside of work: coffee, hiking, cars, fashion, and probably a Netflix show. The same eye for detail and aesthetics shows up in how I design.</p>
          <div className="about-life-strip" aria-label="Andrena outside of work">
            <img src={aboutLifeCar} alt="Andrena beside her car at night" loading="lazy" />
            <img src={aboutLifeHiking} alt="Andrena hiking a forest trail" loading="lazy" />
            <img src={aboutLifeDisney} alt="Andrena at Disneyland at night" loading="lazy" />
          </div>
        </aside>
      </div>

      <section className="resume-highlights" aria-label="Education, experience, and contact">
        <article className="story-card">
          <p className="case-label">Education</p>
          <h3>New Media Design &amp; Web Development</h3>
          <p className="muted">British Columbia Institute of Technology</p>
          <p>2025 - July 2026</p>
        </article>
        <article className="story-card">
          <p className="case-label">Work experience</p>
          <h3>Server · Red Robin</h3>
          <p className="muted">2024 - Present</p>
          <p>Delivering thoughtful customer service in a fast-paced environment while building strong communication, teamwork, problem-solving, and prioritization skills.</p>
        </article>
        <article className="story-card">
          <p className="case-label">Contact</p>
          <h3>Let’s work together.</h3>
          <p><a href={`mailto:${site.email}`}>{site.email}</a></p>
          <p><a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}>{site.phone}</a></p>
        </article>
      </section>

      <section className="skills-section" aria-labelledby="skills-heading">
        <div className="section-head case-section-head">
          <div>
            <span className="eyebrow">Skills</span>
            <h2 id="skills-heading">I lead with strategy, then build it out with design and content.</h2>
          </div>
          <p>
            A practical toolkit spanning visual design, brand storytelling,
            content creation, and front-end development.
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
            I started with layout, typography, and storytelling—learning how visual choices change the way people feel.
          </p>
        </div>
        <div className="timeline-item">
          <h3>Present</h3>
          <p className="muted">
            I’m graduating from BCIT and building portfolio work that connects UI/UX, brand strategy, content, and marketing.
          </p>
        </div>
        <div className="timeline-item">
          <h3>Future</h3>
          <p className="muted">
            I want a collaborative team where marketing, brand, product, and content work together—not in silos.
          </p>
        </div>
      </div>

      <section className="about-personal-contact">
        <article className="resume-card" aria-label="Resume">
          <p className="case-label">Resume</p>
          <h3>View or download my resume.</h3>
          <p className="muted">
            A quick look at my education, experience, and multidisciplinary creative skills.
          </p>
          <div className="resume-actions">
            <a className="pill-btn resume-download-primary" href={resumeUrl} download>Download resume PDF ↓</a>
            <a className="project-link resume-view-link" href={resumeUrl} target="_blank" rel="noreferrer">View resume</a>
          </div>
        </article>
        <aside>
          <span className="eyebrow">Let’s connect</span>
          <h3>Open to opportunities and thoughtful collaborations.</h3>
          <a href={`mailto:${site.email}`}>{site.email} ↗</a>
          <a href={site.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </aside>
      </section>
    </section>
  );
}
