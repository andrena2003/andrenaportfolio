import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
const source = fs.readFileSync(path.join(dist, "index.html"), "utf8");
const baseUrl = "https://andrenayacoub.vercel.app";

const routes = [
  {
    path: "/",
    title: "Andrena Yacoub — Marketing, UI/UX & Content",
    description: "Portfolio of integrated marketing strategy, UI/UX design, and social content work by Andrena Yacoub in Vancouver.",
    image: "/social/andrena-portfolio.png",
    type: "website",
  },
  {
    path: "/about",
    title: "About Andrena Yacoub — Multidisciplinary Creative",
    description: "Meet Andrena Yacoub, a Vancouver creative connecting marketing strategy, UI/UX design, and content.",
    image: "/social/andrena-portfolio.png",
    type: "profile",
  },
  {
    path: "/work",
    title: "Selected Work — Andrena Yacoub",
    description: "Explore marketing and brand strategy, UI/UX case studies, and content campaigns by Andrena Yacoub.",
    image: "/social/andrena-portfolio.png",
    type: "website",
  },
  {
    path: "/contact",
    title: "Contact Andrena Yacoub",
    description: "Connect with Andrena Yacoub about marketing, brand, UI/UX, and content opportunities in Vancouver.",
    image: "/social/andrena-portfolio.png",
    type: "website",
  },
  {
    path: "/project/mera-sparkling-tea-launch",
    title: "MERA Sparkling Tea — Full-Funnel Marketing Case Study | Andrena Yacoub",
    description: "A 90-day launch concept connecting Google Search, Meta ads, SEO, local discovery, email, CRO, analytics, and ROI reporting.",
    image: "/social/mera-case-study.png",
    type: "article",
  },
  {
    path: "/project/tastebuds",
    title: "TasteBuds Vancouver — Content & Social Case Study | Andrena Yacoub",
    description: "A seven-week Instagram, TikTok, and web campaign with content planning, videography, platform strategy, and real engagement results.",
    image: "/social/tastebuds-case-study.png",
    type: "article",
  },
  {
    path: "/project/hair-by-athraa",
    title: "Hair By Athra'a — UI/UX Case Study | Andrena Yacoub",
    description: "A mobile salon-booking experience focused on clearer service discovery, confident decisions, and an elegant visual system.",
    image: "/social/hair-by-athraa-case-study.png",
    type: "article",
  },
  {
    path: "/project/group-fitness-app",
    title: "FitArray Fitness App — UI/UX Prototype | Andrena Yacoub",
    description: "An end-to-end mobile fitness prototype covering onboarding, exercise discovery, workout building, active sessions, and progress.",
    image: "/social/fitarray-case-study.png",
    type: "article",
  },
  {
    path: "/project/mitsubishi-motors-website-redesign",
    title: "Mitsubishi Motors Redesign — UX & Digital Marketing Case Study | Andrena Yacoub",
    description: "An 18-screen automotive website redesign and growth plan connecting SEO, paid acquisition, vehicle discovery, dealer leads, and conversion measurement.",
    image: "/social/mitsubishi-case-study.png",
    type: "article",
  },
];

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function socialMeta(meta) {
  const url = new URL(meta.path, baseUrl).href;
  const image = new URL(meta.image, baseUrl).href;
  const title = escapeHtml(meta.title);
  const description = escapeHtml(meta.description);
  return `<!-- social-meta:start -->
    <title>${title}</title>
    <meta name="description" content="${description}" />
    <meta property="og:type" content="${meta.type}" />
    <meta property="og:site_name" content="Andrena Yacoub Portfolio" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:url" content="${url}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${image}" />
    <link rel="canonical" href="${url}" />
    <!-- social-meta:end -->`;
}

for (const route of routes) {
  const html = source.replace(
    /<!-- social-meta:start -->[\s\S]*?<!-- social-meta:end -->/,
    socialMeta(route),
  );
  const output = route.path === "/"
    ? path.join(dist, "index.html")
    : path.join(dist, route.path.slice(1), "index.html");
  fs.mkdirSync(path.dirname(output), { recursive: true });
  fs.writeFileSync(output, html);
}
