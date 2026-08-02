import { Link } from "react-router-dom";
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
          <h1>Let’s build something people understand—and remember.</h1>
          <p className="contact-lede">
            For roles, collaborations, or thoughtful project conversations,
            email is the best place to start.
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
              <dd className="contact-focus-list">
                <span>Marketing & brand strategy</span>
                <span>UI/UX design</span>
                <span>Content & social</span>
              </dd>
            </div>
          </dl>
          <a className="contact-social" href={site.linkedin} target="_blank" rel="noreferrer">
            <span>LinkedIn</span>
            <strong>Connect with me</strong>
            <i aria-hidden="true">↗</i>
          </a>
        </aside>
      </div>

      <div className="contact-footer-callout">
        <p>Want to see how I connect strategy, design, and content?</p>
        <Link to="/work">View selected work →</Link>
      </div>
    </section>
  );
}
