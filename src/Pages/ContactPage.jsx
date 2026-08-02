import { site } from "../data";

export default function ContactPage() {
  return (
    <section className="section container contact-page">
      <div className="contact-hero">
        <div className="contact-primary">
          <div className="contact-kicker-row">
            <span className="eyebrow">Contact</span>
            <span className="contact-availability"><i /> Open to opportunities</span>
          </div>
          <h1>Let’s work together.</h1>
          <p className="contact-lede">
            I’m open to roles and projects across marketing, UI/UX, and content.
            Email is the best place to reach me.
          </p>
          <a className="contact-email" href={`mailto:${site.email}`}>
            <span>Email me</span>
            <strong>{site.email}</strong>
            <i aria-hidden="true">↗</i>
          </a>
        </div>

        <aside className="contact-details" aria-label="Contact details">
          <dl>
            <div className="contact-detail">
              <dt>Based in</dt>
              <dd>Vancouver, BC</dd>
            </div>
            <div className="contact-detail">
              <dt>Focus</dt>
              <dd>Marketing / UI/UX / Content</dd>
            </div>
          </dl>
          <a className="contact-social" href={site.linkedin} target="_blank" rel="noreferrer">
            <span>LinkedIn</span>
            <strong>Connect with me</strong>
            <i aria-hidden="true">↗</i>
          </a>
        </aside>
      </div>
    </section>
  );
}
