import { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation } from "react-router-dom";
import logoDark from "../assets/logo-dark.webp";
import logoWhite from "../assets/logo-white.webp";
import { site } from "../data";
import PageMeta from "./PageMeta";

export default function Layout() {
  const { pathname } = useLocation();
  const [theme, setTheme] = useState(() => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const savedTheme = localStorage.getItem("theme");
    return savedTheme || (prefersDark ? "dark" : "light");
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
  };

  return (
    <>
      <PageMeta />
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <div className="container nav-wrap">
          <NavLink to="/" className="brand" aria-label="Andrena Yacoub home">
            <img
              className="brand-logo"
              src={theme === "dark" ? logoWhite : logoDark}
              alt="Andrena Yacoub"
            />
          </NavLink>

          <nav className="nav-links">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/work">My Work</NavLink>
          </nav>

          <div className="header-actions">
            <NavLink
              to="/contact"
              className="icon-btn header-contact-btn"
              aria-label="Contact Andrena"
              title="Contact"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 6.5h16v11H4z" />
                <path d="m5 7.5 7 5.5 7-5.5" />
              </svg>
            </NavLink>
            <button className="icon-btn" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === "dark" ? "☀︎" : "◐"}
            </button>
            <a
              className="social-logo-btn"
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="Open Andrena Yacoub on LinkedIn"
              title="LinkedIn"
            >
              in
            </a>
          </div>
        </div>
      </header>

      <main id="main">
        <Outlet />
      </main>

      <footer>
        <div className="container footer-bar">
          <p>Located in Vancouver, BC</p>
          <div className="footer-links">
            <NavLink to="/contact">Contact</NavLink>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={site.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
