import { Link } from "react-router-dom";
import { site } from "../data";

export default function ContactPage() {
  return (
    <section className="section container">
      <div className="contact-panel">
        <div className="contact-logo">AY</div>
        <div className="contact-copy">
          <span className="eyebrow">Contact</span>
          <h2 className="display-heading">Let’s make the next idea clearer.</h2>
          <p className="contact-intro">
            I’m open to opportunities across marketing and brand strategy,
            UI/UX design, and content. Tell me what you’re working on and where
            you need support.
          </p>
          <div className="contact-field">
            <a className="pill-btn" href={`mailto:${site.email}`}>Email me</a>
            <a className="project-link" href={site.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <Link className="project-link project-link-secondary" to="/work">View selected work</Link>
          </div>
          <p className="contact-location">{site.email} · {site.location}</p>
        </div>
      </div>
    </section>
  );
}
