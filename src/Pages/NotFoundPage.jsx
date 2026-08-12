import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section className="section container contact-page">
      <div className="contact-hero">
        <div className="contact-primary">
          <span className="eyebrow">404</span>
          <h1>This page wandered off.</h1>
          <p className="contact-lede">
            The page you're looking for doesn't exist, or the link may be
            outdated. Let's get you back on track.
          </p>
          <div className="cta-row">
            <Link to="/" className="pill-btn">
              Back to home →
            </Link>
            <Link to="/work" className="text-cta">
              See my work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
