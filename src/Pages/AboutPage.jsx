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
          <h2>I design brand-consistent creative for hotels, restaurants, and guest-facing brands.</h2>
          <p>I’m a BCIT New Media Design &amp; Web Development graduate and current Digital Marketing Intern at Sheraton Vancouver Guildford Hotel. My work sits at the intersection of graphic design, hospitality brand systems, print and digital production, and content.</p>
          <p className="about-philosophy">I translate a brief into clear, polished, production-ready creative that feels right wherever a guest sees it.</p>
        </div>
        <figure className="about-portrait">
          <img src={andrenaProfile} alt="Portrait of Andrena Yacoub" />
        </figure>
      </div>

      <section className="about-process" aria-labelledby="about-process-heading">
        <div className="section-head case-section-head">
          <div><span className="eyebrow">My process</span><h2 id="about-process-heading">From a brief to polished, production-ready creative.</h2></div>
          <p>The exact deliverable changes with the channel, but the work follows one practical rhythm.</p>
        </div>
        <ol className="about-process-grid">
          <li><span>01</span><h3>Understand</h3><p>Clarify the brief, audience, channel, environment, and required specifications.</p></li>
          <li><span>02</span><h3>Design</h3><p>Build a clear hierarchy using the right type, colour, imagery, and layout.</p></li>
          <li><span>03</span><h3>Produce</h3><p>Adapt the concept across print, digital, social, email, signage, and web formats.</p></li>
          <li><span>04</span><h3>Check</h3><p>Proofread, apply feedback, confirm technical details, and organize the final handoff.</p></li>
        </ol>
      </section>

      <div className="about-layout about-story-layout">
        <article className="story-card about-story-card">
          <p className="case-label">My perspective</p>
          <h3 className="story-heading">
            I connect hospitality context with practical graphic design execution.
          </h3>
          <p className="muted">
            In my Sheraton practicum, I design hotel and F&amp;B creative across social content, print and digital collateral, email, web, and event materials. I enjoy shaping the idea, adapting it to the right format, and thinking about how the final work makes a guest-facing brand feel clear and welcoming.
          </p>
          <p className="muted">I care about typography, visual hierarchy, Marriott brand standards, organized working files, and polished final details. My service experience also keeps me close to the real moments that shape a guest’s impression.</p>
        </article>

        <aside className="about-story-card" aria-label="Beyond the screen">
          <span className="eyebrow">Beyond the screen</span>
          <h2>Local food, thoughtful details, and the places people remember.</h2>
          <p>Outside of work: coffee, local restaurants, hiking, cars, fashion, and probably a Netflix show. I’m always noticing the details that make a place feel welcoming and worth sharing.</p>
          <div className="about-life-strip" aria-label="Andrena outside of work">
            <img src={aboutLifeCar} alt="Andrena beside her car at night" loading="lazy" />
            <img src={aboutLifeHiking} alt="Andrena hiking a forest trail" loading="lazy" />
            <img src={aboutLifeDisney} alt="Andrena at Disneyland at night" loading="lazy" />
          </div>
        </aside>
      </div>

      <section className="story-card sheraton-practicum-card" aria-labelledby="sheraton-practicum-heading">
        <p className="case-label">Current hospitality experience</p>
        <h3 id="sheraton-practicum-heading" className="story-heading">Sheraton Vancouver Guildford Hotel · Digital Marketing Intern</h3>
        <p className="muted">
          My practicum connects the hospitality experience I built in restaurants with the graphic design and production skills I developed at BCIT. I support the hotel and MIXT Lobby Lounge across social graphics, print flyers, email banners, event materials, web and email copy, photography, short-form video, brand standards, quality checks, and organized asset handoff.
        </p>
        <div className="studio-meta" aria-label="Sheraton practicum work completed">
          <span>Print + digital assets</span>
          <span>Photo, video + Reels</span>
          <span>Brand standards + QA</span>
          <span>Asset handoff</span>
        </div>
      </section>

      <section className="resume-highlights" aria-label="Education, experience, and contact">
        <article className="story-card">
          <p className="case-label">Education</p>
          <h3>New Media Design &amp; Web Development</h3>
          <p className="muted">British Columbia Institute of Technology</p>
          <p>2025 - July 2026</p>
        </article>
        <article className="story-card">
          <p className="case-label">Work experience</p>
          <h3>Hospitality foundation</h3>
          <p className="muted">Red Robin · Denny’s · White Spot</p>
          <p>Guest service, food safety, order accuracy, front- and back-of-house communication, and the fast-paced teamwork that shaped my design perspective.</p>
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
            <h2 id="skills-heading">A graphic-design toolkit for hospitality brands and guest experience.</h2>
          </div>
          <p>
            A practical toolkit spanning visual systems, print and digital production, hospitality storytelling, social content, and web.
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
            I started with layout, typography, and storytelling—learning how visual choices change the way people feel about a place and a brand.
          </p>
        </div>
        <div className="timeline-item">
          <h3>Present</h3>
          <p className="muted">
            I’m completing BCIT and building experience in hotel and F&amp;B marketing through my Sheraton practicum.
          </p>
        </div>
        <div className="timeline-item">
          <h3>Future</h3>
          <p className="muted">
            I want to grow in hospitality marketing with a collaborative team where brand, content, partnerships, and guest experience work together.
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
