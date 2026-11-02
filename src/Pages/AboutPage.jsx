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
          <h2>I build guest-first marketing stories for hotels, restaurants, and service brands.</h2>
          <p>I’m a BCIT New Media Design &amp; Web Development graduate and current Digital Marketing Intern at Sheraton Vancouver Guildford Hotel. My work sits at the intersection of hospitality marketing, social content, brand systems, and digital experience.</p>
          <p className="about-philosophy">I translate the feeling of a place into clear content, consistent collateral, and useful digital journeys.</p>
        </div>
        <figure className="about-portrait">
          <img src={andrenaProfile} alt="Portrait of Andrena Yacoub" />
        </figure>
      </div>

      <section className="about-process" aria-labelledby="about-process-heading">
        <div className="section-head case-section-head">
          <div><span className="eyebrow">My process</span><h2 id="about-process-heading">From a hospitality brief to a clear, useful campaign.</h2></div>
          <p>The exact methods change with the channel, but the work follows one practical rhythm.</p>
        </div>
        <ol className="about-process-grid">
          <li><span>01</span><h3>Discover</h3><p>Understand the guest, occasion, offer, and channel.</p></li>
          <li><span>02</span><h3>Define</h3><p>Turn the brief into a clear message, calendar, and success measure.</p></li>
          <li><span>03</span><h3>Create</h3><p>Produce brand-consistent social, print, web, photo, and video assets.</p></li>
          <li><span>04</span><h3>Learn</h3><p>Review engagement, campaign results, and guest response; improve the next iteration.</p></li>
        </ol>
      </section>

      <div className="about-layout about-story-layout">
        <article className="story-card about-story-card">
          <p className="case-label">My perspective</p>
          <h3 className="story-heading">
            I connect hospitality context with practical creative execution.
          </h3>
          <p className="muted">
            In my Sheraton practicum, I support hotel and F&amp;B marketing across social content, print and digital collateral, website updates, SEO, campaign reporting, and event coverage. I enjoy shaping the idea, producing the assets, and thinking about how the final work helps a guest choose a stay, meal, or gathering.
          </p>
          <p className="muted">I care about clear hierarchy, Marriott brand standards, consistent guest-facing touchpoints, and measurable marketing decisions. My service experience also keeps me close to the real moments that shape a guest’s impression.</p>
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

      <section className="resume-highlights" aria-label="Education, experience, and contact">
        <article className="story-card">
          <p className="case-label">Education</p>
          <h3>New Media Design &amp; Web Development</h3>
          <p className="muted">British Columbia Institute of Technology</p>
          <p>2025 - July 2026</p>
        </article>
        <article className="story-card">
          <p className="case-label">Work experience</p>
          <h3>Digital Marketing Intern · Sheraton Vancouver Guildford</h3>
          <p className="muted">2026 - Present</p>
          <p>Supporting social, print, web, SEO, event content, and campaign reporting for the hotel and MIXT Lobby Lounge.</p>
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
            <h2 id="skills-heading">A hospitality-ready toolkit for content, campaigns, and guest experience.</h2>
          </div>
          <p>
            A practical toolkit spanning hotel and F&amp;B storytelling, brand communications, social content, visual design, and digital production.
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
