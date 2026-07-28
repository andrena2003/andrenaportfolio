import hairByAthraaCaseStudy from "./assets/hair-by-athraa-case-study.png";
import tastebudsBrandingSystem from "./assets/tastebuds-branding-system.png";
import tastebudsSocialTemplate from "./assets/tastebuds-social-template.png";
import tastebudsInstagramTopPerformers from "./assets/tastebuds-instagram-top-performers.png";
import tastebudsTiktokTopPerformers from "./assets/tastebuds-tiktok-top-performers.png";
import tastebudsWebsiteOverview from "./assets/tastebuds-website-overview.png";
import tastebudsOpenGraphPreview from "./assets/tastebuds-open-graph-preview.png";

export const site = {
  email: "ayacoub@gmail.com",
  location: "Burnaby, British Columbia",
  linkedin: "https://www.linkedin.com/in/andrena-yacoub-67b8a2211/",
  linkedinUsername: "andrena-yacoub-67b8a2211",
  intro: "Great design should be memorable. It should move and inspire people.",
};

export const projects = [
  {
    slug: "tastebuds",
    title: "TasteBuds Vancouver",
    type: "Social media networking project",
    summary:
      "A seven-week local foodie campaign created for Instagram, TikTok, and the web. I led content planning and management, and contributed to content creation and videography.",
    tools: ["Content planning", "Branding", "Social media", "Videography", "Analytics"],
    figmaUrl: "https://www.figma.com/design/U8rc8P7KkgRX33MPUxoQ7T/Social-media-net-work-Group-work?node-id=0-1&t=EugayvlaFyPthzNz-1",
    pdfUrl: "/files/tastebuds-final-presentation.pdf",
    role: "Content manager, content planner, content creator, videographer",
    timeline: "7-week term project",
    context:
      "An authentic Vancouver food brand for local residents and food lovers aged 18-35.",
    challenge:
      "Build a recognizable identity and reach local viewers beyond our existing followers.",
    approach: [
      "Planned four weekly posts: two short videos and two blog-style stories.",
      "Captured restaurant visits on mobile and turned them into Reels, TikToks, and web stories.",
      "Scheduled Instagram in Meta Business Suite and posted TikToks at tested peak times.",
    ],
    outcome:
      "The campaign reached thousands of local viewers and led to a collaboration invitation from Border Burrito.",
    keyConcepts: [
      {
        title: "Audience",
        body: "Vancouver students, young professionals, and food enthusiasts aged 18-35.",
      },
      {
        title: "Content Plan",
        body: "Two short videos and two blog-style posts each week for seven weeks.",
      },
      {
        title: "Platform Strategy",
        body: "TikTok drove discovery; Instagram supported branding, shares, and community.",
      },
      {
        title: "Publishing",
        body: "Lunch and after-work posting windows produced the strongest response.",
      },
    ],
    metrics: [
      "16.5K Instagram views and 7.8K accounts reached.",
      "1.1K Instagram interactions across 28 posts.",
      "26K TikTok views, 22K reach, and 944 likes.",
      "Collaboration invitation from Border Burrito.",
    ],
    gallery: [
      {
        image: tastebudsBrandingSystem,
        alt: "TasteBuds Vancouver branding system showing the logo, wordmark, logomark, and color palette.",
        caption: "Team identity system: logo, wordmark, Rubik typography, and color palette.",
      },
      {
        image: tastebudsSocialTemplate,
        alt: "Tastebuds Instagram carousel and story social media template slide.",
        caption: "Carousel and Story templates for educational food content.",
      },
      {
        image: tastebudsInstagramTopPerformers,
        alt: "Tastebuds Instagram top performers slide showing food meme and local food tour reels.",
        caption: "Top Instagram posts: the hotpot meme and hidden diner Reel.",
      },
      {
        image: tastebudsTiktokTopPerformers,
        alt: "Tastebuds TikTok top performers slide showing local discovery content.",
        caption: "A cozy Japanese cafe TikTok became a top performer.",
      },
      {
        image: tastebudsWebsiteOverview,
        alt: "Tastebuds website overview slide with desktop and mobile previews.",
        caption: "Blog-style stories extended the campaign to the website.",
      },
      {
        image: tastebudsOpenGraphPreview,
        alt: "Tastebuds open graph preview set for shared content.",
        caption: "Branded previews kept shared links visually consistent.",
      },
    ],
    reflection:
      "Short videos with local, emotional hooks performed best. Next time, I would post more consistently, visit more neighborhoods, and add more personal storytelling.",
    process: [
      "Built the campaign direction with the team.",
      "Planned content across Instagram, TikTok, and web.",
      "Presented a complete brand, content, and performance strategy.",
    ],
  },
  {
    slug: "hair-by-athraa",
    title: "Hair By Athra'a",
    type: "UI/UX Strategy case study",
    summary:
      "A salon booking experience focused on clarity, confidence, and elegant mobile UI.",
    tools: ["Figma", "Mobile UI", "Service design", "User flows"],
    figmaUrl: "https://www.figma.com/design/QN3SMXzMllgkNYZtsZbN52/UI---UX-Strategy-1---Term-Project--Done-?node-id=0-1&t=kuYJzHssiU0DArAq-1",
    image: hairByAthraaCaseStudy,
    imageAlt: "Mobile mockup for the Hair By Athra'a salon booking case study.",
    role: "UI/UX designer",
    timeline: "Term project",
    context:
      "Hair By Athra'a is a salon booking concept designed for a beauty service experience that should feel elegant, clear, and easy to navigate on mobile.",
    challenge:
      "The main challenge was organizing service discovery, booking confidence, and visual polish into a flow that would not overwhelm new clients.",
    approach: [
      "Mapped the client journey from discovery to booking so the interface could support quick decisions.",
      "Created a soft editorial visual direction that feels personal, polished, and beauty-focused.",
      "Designed mobile-first screens with clear hierarchy for services, booking steps, and salon information.",
    ],
    outcome:
      "The final Figma case study presents a refined booking experience with stronger structure, more consistent UI patterns, and a clearer path from interest to appointment.",
    process: [
      "Restructured discovery and booking flow.",
      "Built a premium editorial-inspired interface.",
      "Designed key mobile-first booking screens.",
    ],
  },
  {
    slug: "interior-design-redesign",
    title: "Interior Design Website Redesign",
    type: "Figma redesign",
    summary:
      "A redesign focused on readability, layout, and stronger visual hierarchy.",
    tools: ["Figma", "Web UI", "Visual hierarchy"],
    figmaUrl: "",
    process: [
      "Improved typography and spacing.",
      "Refined alignment and content hierarchy.",
      "Created a cleaner and more polished browsing experience.",
    ],
  },
  {
    slug: "group-fitness-app",
    title: "Group Fitness App",
    type: "Figma app concept",
    summary:
      "A UI/UX group project designed from scratch around workout discovery and schedules.",
    tools: ["Figma", "App design", "User flows"],
    figmaUrl: "",
    process: [
      "Built the interface direction from zero.",
      "Designed app screens and component patterns.",
      "Focused on consistency and intuitive flow.",
    ],
  },
  {
    slug: "react-portfolio-system",
    title: "React Portfolio System",
    type: "Front-end build",
    summary:
      "A responsive portfolio site built to showcase case studies and internship-ready work.",
    tools: ["React", "Vite", "Responsive UI"],
    process: [
      "Built reusable page structure.",
      "Added routing and project pages.",
      "Created a warm editorial visual direction.",
    ],
  },
];
export const skillGroups = [
  {
    title: "Design",
    skills: ["Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Figma", "Wireframing", "Branding", "Typography"],
  },
  {
    title: "Social Media Content Creation",
    skills: ["Brand Strategy", "Content Marketing", "Visual Identity Design"],
  },
  {
    title: "Web",
    skills: ["HTML", "CSS", "JavaScript", "React", "Responsive design"],
  },
  {
    title: "Creative process",
    skills: ["Research", "Storytelling", "Brand thinking", "Figma", "Presentation design"],
  },
];
