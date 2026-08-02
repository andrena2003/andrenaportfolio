import hairByAthraaCaseStudy from "./assets/hair-by-athraa-case-study.png";
import tastebudsBrandingSystem from "./assets/tastebuds-branding-system.png";
import tastebudsSocialTemplate from "./assets/tastebuds-social-template.png";
import tastebudsInstagramTopPerformers from "./assets/tastebuds-instagram-top-performers.png";
import tastebudsTiktokTopPerformers from "./assets/tastebuds-tiktok-top-performers.png";
import tastebudsWebsiteOverview from "./assets/tastebuds-website-overview.png";
import tastebudsOpenGraphPreview from "./assets/tastebuds-open-graph-preview.png";
import meraCampaignHero from "./assets/mera-campaign-hero.png";
import fitarraySplash from "./assets/fitarray-splash.png";
import fitarrayLogin from "./assets/fitarray-login.png";
import fitarrayDashboard from "./assets/fitarray-dashboard.png";
import fitarrayExercises from "./assets/fitarray-exercises.png";
import fitarrayWorkoutDetail from "./assets/fitarray-workout-detail.png";
import fitarrayStats from "./assets/fitarray-stats.png";
import fitarrayProfile from "./assets/fitarray-profile.png";

export const site = {
  email: "ayacoub@gmail.com",
  location: "Burnaby, British Columbia",
  linkedin: "https://www.linkedin.com/in/andrena-yacoub-67b8a2211/",
  linkedinUsername: "andrena-yacoub-67b8a2211",
  intro: "Great design should be memorable. It should move and inspire people.",
};

export const projects = [
  {
    slug: "mera-sparkling-tea-launch",
    title: "MERA Sparkling Tea",
    type: "Integrated marketing campaign",
    summary:
      "A portfolio concept for launching a premium sparkling tea through a focused brand position, creator-led content, local sampling, and a measurable 90-day campaign.",
    tools: ["Campaign strategy", "Brand positioning", "Content marketing", "Paid social", "Analytics"],
    image: meraCampaignHero,
    imageAlt: "MERA sparkling tea cans styled with citrus and hibiscus in a plum and coral campaign setting.",
    imageCaption: "Hero art direction for MERA’s fictional launch campaign. Brand and campaign created as a portfolio concept.",
    brandIdentity: {
      name: "MERA",
      tagline: "Stay for the whole night.",
      description: "A tall editorial wordmark gives the brand a confident premium presence. Plum grounds the system, while coral and peach bring energy and make the product feel social, bright, and modern.",
      colors: [
        { name: "Night Plum", value: "#3B1026" },
        { name: "MERA Coral", value: "#E64D45" },
        { name: "Soft Peach", value: "#F3A184" },
        { name: "Tea Cream", value: "#F7E9D8" },
      ],
      typography: [
        {
          family: "Playfair Display",
          role: "Campaign headlines",
          sample: "A brighter way to stay present.",
          note: "Editorial contrast gives major campaign messages warmth, confidence, and a premium voice.",
        },
        {
          family: "Manrope",
          role: "Wordmark, body copy & labels",
          sample: "MERA · STAY FOR THE WHOLE NIGHT",
          note: "A clean geometric sans serif keeps product information, digital content, and calls to action direct and readable.",
        },
      ],
    },
    role: "Marketing strategist & creative lead",
    timeline: "90-day launch concept",
    context:
      "MERA is a fictional zero-proof sparkling tea made for socially active, wellness-minded adults who want an elevated alternative to alcohol and overly sweet soft drinks.",
    challenge:
      "Enter a crowded beverage category without competing on wellness claims alone, then turn a new name into something people can recognize, sample, and confidently bring to a social occasion.",
    objective:
      "Build awareness and trial in Metro Vancouver among adults aged 22–35, establish MERA as the drink for a clearer kind of socializing, and create a repeatable path from discovery to first purchase.",
    responsibilities: [
      "Defined the target audience, category opportunity, value proposition, campaign idea, voice, and channel roles.",
      "Planned a 90-day launch across paid social, organic content, creators, email, retail sampling, and community events.",
      "Created the measurement framework, test plan, content pillars, budget allocation, and visual campaign direction.",
    ],
    keyConcepts: [
      { title: "Audience", body: "Metro Vancouver adults aged 22–35 who care about taste and social ritual, but are increasingly choosing low- or no-alcohol options." },
      { title: "Positioning", body: "Not a drink for opting out—a bright, premium choice for staying present. MERA owns the space between functional wellness drinks and celebration beverages." },
      { title: "Big idea", body: "Stay for the whole night. The campaign reframes clarity as confidence, connection, and more of the moments people came for." },
      { title: "Offer", body: "A low-friction discovery bundle with three flavours, a first-order incentive, and a retail sampling calendar promoted by local creators." },
    ],
    research: [
      { title: "The occasion matters", body: "The strongest entry point is not a long ingredient story. It is a recognizable social moment: dinner, a picnic, an after-work gathering, or a night out." },
      { title: "Taste needs proof", body: "A new beverage earns trust through sensory language, reactions, serving rituals, and in-person trial—not polished packaging alone." },
      { title: "Local relevance builds credibility", body: "Neighbourhood venues, micro-creators, and community events can make a fictional launch strategy feel specific, useful, and culturally connected." },
    ],
    designProcess: [
      { phase: "01 · Diagnose", title: "Map the category", body: "Compared sparkling water, functional drinks, and zero-proof beverages to find an ownable role based on social confidence rather than restriction." },
      { phase: "02 · Position", title: "Choose one memorable promise", body: "Built the campaign around staying present for the whole night, supported by premium flavour, visual energy, and an optimistic voice." },
      { phase: "03 · Activate", title: "Connect content to trial", body: "Sequenced teaser content, creator seeding, launch-week sampling, paid retargeting, email capture, and a discovery bundle into one funnel." },
      { phase: "04 · Learn", title: "Test before scaling", body: "Designed weekly creative tests around hooks, occasions, creator formats, offers, and landing-page messages, with clear rules for reallocating spend." },
    ],
    metricsTitle: "Success measures for the 90-day launch.",
    metrics: [
      "Reach 250K qualified local impressions with a 1.5%+ paid-social click-through rate.",
      "Distribute 3,000 samples and convert at least 12% into email sign-ups or first purchases.",
      "Achieve 1,000 discovery-bundle orders at a customer-acquisition cost below $24.",
      "Build a creator asset library with 30 usable videos and identify three repeatable winning hooks.",
    ],
    approach: [
      "Phase 1 — Spark curiosity: short sensory teasers, flavour reveals, creator seeding, and a waitlist landing page.",
      "Phase 2 — Make it tangible: sampling pop-ups, partner venue placements, launch-night content, and a three-flavour discovery bundle.",
      "Phase 3 — Turn trial into habit: retargeting, serving-ritual content, customer reactions, email replenishment, and referral rewards.",
    ],
    uxDecisions: [
      { title: "Paid social · 35%", body: "Use short-form video and retargeting to scale winning creator hooks and drive the discovery bundle." },
      { title: "Sampling & events · 30%", body: "Prioritize direct taste experience at neighbourhood venues, markets, and wellness-adjacent community events." },
      { title: "Creators · 20%", body: "Partner with credible Vancouver micro-creators for occasion-led content, honest reactions, and reusable ad assets." },
      { title: "Owned content · 15%", body: "Support conversion and retention with landing-page storytelling, email, organic social, and customer education." },
    ],
    deliverables: [
      "Campaign brief, audience profile, and competitive positioning",
      "Brand message house, tagline, voice, and visual direction",
      "90-day launch calendar and channel strategy",
      "Six content pillars with sample hooks and calls to action",
      "Creator brief, sampling activation, and partnership plan",
      "Budget allocation, KPI dashboard, and A/B testing roadmap",
    ],
    outcome:
      "The finished concept connects strategy and execution in one launch system: a clear market position, a recognizable creative platform, a channel-specific content plan, and targets that make the work accountable. Because MERA is a portfolio concept, all results shown are campaign goals rather than claimed performance.",
    reflection:
      "This project strengthened my ability to connect brand thinking with measurable action. The most important choice was narrowing the idea: instead of listing product benefits, the campaign owns one social truth and lets every channel prove it differently. With a live product, I would validate taste language through interviews, test the discovery offer with a small paid pilot, and update the forecast using actual conversion and repeat-purchase data.",
    process: [
      "Found an ownable position in the zero-proof beverage category.",
      "Built a 90-day integrated launch plan around awareness, trial, and repeat purchase.",
      "Defined a transparent measurement and creative-testing framework.",
    ],
  },
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
    title: "FitArray Fitness App Prototype",
    type: "Interactive Figma prototype",
    summary:
      "A mobile fitness experience that helps users discover exercises, build workouts, follow active sessions, and understand their progress in one focused app.",
    tools: ["Figma", "Interactive prototyping", "Mobile UI", "User flows", "Usability testing"],
    figmaUrl: "https://www.figma.com/design/EJUoY1Vu8sDPIRqRgXewcI/fitness-app--Protype-?node-id=124-1037&t=38IHLCmxR2maeFit-1",
    figmaLabel: "Open interactive prototype",
    role: "UI/UX designer and prototyper",
    timeline: "Term project",
    context:
      "FitArray is a mobile fitness concept designed for people who want structure without the complexity of switching between exercise libraries, workout timers, and separate progress trackers.",
    challenge:
      "Fitness apps often present too many choices at once. The challenge was to organize workout discovery, exercise details, active-session controls, and performance data into a flow that feels motivating and easy to scan.",
    objective:
      "Design and prototype a consistent mobile journey from account setup to workout completion, with clear navigation, useful exercise guidance, and progress feedback that supports repeat use.",
    responsibilities: [
      "Mapped the main user journey and organized the app’s navigation and content hierarchy.",
      "Designed the dark-mode interface, reusable components, exercise library, workout builder, and progress views.",
      "Connected key screens into an interactive Figma prototype and refined the flow for clarity and consistency.",
    ],
    keyConceptsTitle: "The experience behind FitArray.",
    keyConcepts: [
      { title: "Discover", body: "Browse exercises and workout options through clear categories, search, and focused content cards." },
      { title: "Build", body: "Create a workout by selecting exercises and reviewing the plan before beginning a session." },
      { title: "Train", body: "Follow an active workout with visible timing, exercise context, and simple controls that reduce distraction." },
      { title: "Track", body: "Review workout history and progress data in a dashboard designed to make improvement understandable." },
    ],
    researchTitle: "What users need from a workout app.",
    research: [
      { title: "Fewer decisions", body: "Users need a clear next action and recognizable workout categories instead of an overwhelming wall of options." },
      { title: "Guidance in context", body: "Exercise information is most useful when it appears close to selection and active-workout moments." },
      { title: "Visible progress", body: "Simple summaries, history, and trends help users understand consistency without turning the experience into a dense analytics tool." },
    ],
    designProcessTitle: "From user flow to interactive prototype.",
    designProcess: [
      { phase: "01 · Define", title: "Set the core journey", body: "Focused the scope on onboarding, discovering an exercise, building a workout, completing a session, and checking progress." },
      { phase: "02 · Structure", title: "Organize the experience", body: "Mapped navigation and screen relationships so users could move between home, exercises, workouts, and progress without losing context." },
      { phase: "03 · Design", title: "Build the visual system", body: "Created a dark, high-contrast mobile interface with reusable cards, controls, navigation patterns, and clear action states." },
      { phase: "04 · Prototype", title: "Connect and refine", body: "Linked the primary task flows in Figma and adjusted hierarchy, labels, spacing, and feedback across the prototype." },
    ],
    deliverables: [
      "User journey and primary task flows",
      "Mobile information architecture",
      "Reusable dark-mode UI component system",
      "Onboarding, login, dashboard, and navigation screens",
      "Exercise library and workout-building flow",
      "Active-workout, history, and progress screens",
      "Interactive high-fidelity Figma prototype",
    ],
    galleryLabel: "Prototype screens",
    galleryTitle: "A complete journey from sign-in to progress.",
    galleryLayout: "screens",
    gallery: [
      { image: fitarraySplash, alt: "FitArray welcome screen with athlete photography and login and sign-up actions.", caption: "Welcome screen · A focused entry point into the FitArray experience." },
      { image: fitarrayLogin, alt: "FitArray login screen with email, password, and social sign-in options.", caption: "Login · Familiar fields and alternative sign-in options reduce friction." },
      { image: fitarrayDashboard, alt: "FitArray dashboard showing daily activity, a calorie goal, and scheduled workouts.", caption: "Dashboard · Daily progress and upcoming workouts are visible at a glance." },
      { image: fitarrayExercises, alt: "FitArray exercise library with search, filters, difficulty levels, duration, and calories.", caption: "Exercise library · Search and categories help users narrow a large content set." },
      { image: fitarrayWorkoutDetail, alt: "FitArray Yoga Flow workout screen with timer, set tracking, and completion action.", caption: "Active workout · Timing, sets, and completion controls stay in one focused flow." },
      { image: fitarrayStats, alt: "FitArray weekly statistics screen showing training load, duration, distance, and elevation.", caption: "Progress · Weekly activity is summarized through clear charts and metric cards." },
      { image: fitarrayProfile, alt: "FitArray profile screen showing workout, calorie, goal, and award summaries.", caption: "Profile · Personal settings and long-term achievements share one organized space." },
    ],
    outcome:
      "The final prototype brings the main fitness journey into one consistent system. Users can move from discovery to an active workout and then review progress through a cohesive interface with clear hierarchy and repeatable interaction patterns.",
    reflection:
      "This project strengthened my ability to design an end-to-end mobile product instead of isolated screens. The biggest lesson was that consistency is functional: repeated navigation, card, button, and status patterns make a feature-rich app feel easier. A next iteration would include task-based usability testing and accessibility validation with real users.",
    process: [
      "Defined the core fitness journey and information architecture.",
      "Built a reusable mobile UI system and high-fidelity screens.",
      "Connected and refined the main flows as an interactive prototype.",
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
    skills: ["Photoshop", "Illustrator", "Figma", "Brand Identity"],
  },
  {
    title: "Social Media",
    skills: ["Content Creation", "Brand Strategy", "Content Marketing", "Campaign Planning"],
  },
  {
    title: "Web",
    skills: ["HTML & CSS", "JavaScript", "React", "Responsive Design"],
  },
  {
    title: "Creative Process",
    skills: ["Research", "Wireframing", "Storytelling", "Prototyping"],
  },
];
