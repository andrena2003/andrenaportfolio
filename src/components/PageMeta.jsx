import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { projects } from "../data";

const baseUrl = "https://andrenayacoub.vercel.app";

const pageMeta = {
  "/": {
    title: "Andrena Yacoub — Marketing, UI/UX & Content",
    description: "Portfolio of integrated marketing strategy, UI/UX design, and social content work by Andrena Yacoub in Vancouver.",
    image: "/social/andrena-portfolio.png",
  },
  "/about": {
    title: "About Andrena Yacoub — Multidisciplinary Creative",
    description: "Meet Andrena Yacoub, a Vancouver creative connecting marketing strategy, UI/UX design, and content.",
    image: "/social/andrena-portfolio.png",
  },
  "/work": {
    title: "Selected Work — Andrena Yacoub",
    description: "Explore marketing and brand strategy, UI/UX case studies, and content campaigns by Andrena Yacoub.",
    image: "/social/andrena-portfolio.png",
  },
  "/contact": {
    title: "Contact Andrena Yacoub",
    description: "Connect with Andrena Yacoub about marketing, brand, UI/UX, and content opportunities in Vancouver.",
    image: "/social/andrena-portfolio.png",
  },
};

const socialImages = {
  "mera-sparkling-tea-launch": "/social/mera-case-study.png",
  tastebuds: "/social/tastebuds-case-study.png",
  "hair-by-athraa": "/social/hair-by-athraa-case-study.png",
  "mitsubishi-motors-website-redesign": "/social/mitsubishi-case-study.png",
};

function updateMeta(selector, attribute, content) {
  let tag = document.head.querySelector(selector);
  if (!tag) {
    tag = document.createElement("meta");
    const match = selector.match(/meta\[(name|property)="([^"]+)"\]/);
    if (match) tag.setAttribute(match[1], match[2]);
    document.head.appendChild(tag);
  }
  tag.setAttribute(attribute, content);
}

export default function PageMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const slug = pathname.startsWith("/project/") ? pathname.split("/")[2] : null;
    const project = slug ? projects.find((item) => item.slug === slug) : null;
    const meta = project
      ? {
          title: `${project.title} — ${project.disciplineLabel} | Andrena Yacoub`,
          description: project.summary,
          image: socialImages[project.slug] || "/social/mera-case-study.png",
        }
      : pageMeta[pathname] || pageMeta["/"];
    const image = new URL(meta.image, baseUrl).href;
    const canonicalUrl = new URL(pathname, baseUrl).href;

    document.title = meta.title;
    updateMeta('meta[name="description"]', "content", meta.description);
    updateMeta('meta[property="og:type"]', "content", "website");
    updateMeta('meta[property="og:title"]', "content", meta.title);
    updateMeta('meta[property="og:description"]', "content", meta.description);
    updateMeta('meta[property="og:image"]', "content", image);
    updateMeta('meta[property="og:url"]', "content", canonicalUrl);
    updateMeta('meta[name="twitter:card"]', "content", "summary_large_image");
    updateMeta('meta[name="twitter:title"]', "content", meta.title);
    updateMeta('meta[name="twitter:description"]', "content", meta.description);
    updateMeta('meta[name="twitter:image"]', "content", image);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", canonicalUrl);
  }, [pathname]);

  return null;
}
