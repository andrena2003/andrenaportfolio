import { site } from "../data";

export default function ContactPage() {
  return (
    <section className="section container">
      <div className="contact-panel">
        <div className="contact-logo">AY</div>
        <div>
          <span className="eyebrow">Contact</span>
          <h2 className="display-heading">Let’s Connect.</h2>
          <div className="contact-field">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={site.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <span className="muted">{site.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}