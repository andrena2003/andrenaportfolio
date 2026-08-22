import hairByAthraaFigmaOverview from "./assets/hair-by-athraa-figma-overview.png";
import tastebudsBrandingSystem from "./assets/tastebuds-branding-system.png";
import tastebudsLogoYellow from "./assets/tastebuds-logo-yellow.png";
import tastebudsLogoBlack from "./assets/tastebuds-logo-black.png";
import tastebudsWordmarkYellow from "./assets/tastebuds-wordmark-yellow.png";
import tastebudsWordmarkBlack from "./assets/tastebuds-wordmark-black.png";
import tastebudsSocialTemplate from "./assets/tastebuds-social-template.png";
import tastebudsInstagramTopPerformers from "./assets/tastebuds-instagram-top-performers.png";
import tastebudsTiktokTopPerformers from "./assets/tastebuds-tiktok-top-performers.png";
import tastebudsWebsiteOverview from "./assets/tastebuds-website-overview.png";
import tastebudsOpenGraphPreview from "./assets/tastebuds-open-graph-preview.png";
import tastebudsInstagramTemplates from "./assets/tastebuds-instagram-templates.png";
import tastebudsBorderBurritoMilestone from "./assets/tastebuds-border-burrito-milestone.png";
import competitorTost from "./assets/competitor-tost.png";
import competitorSaicho from "./assets/competitor-saicho.jpg";
import competitorWildfolk from "./assets/competitor-wildfolk.jpg";
import meraCampaignHero from "./assets/mera-campaign-hero.png";
import meraMetaAdArt from "./assets/mera-meta-ad-art.png";
import meraLogoSketches from "./assets/mera-logo-sketches.png";
import fitarraySplash from "./assets/fitarray-splash.png";
import fitarrayLogin from "./assets/fitarray-login.png";
import fitarrayDashboard from "./assets/fitarray-dashboard.png";
import fitarrayExercises from "./assets/fitarray-exercises.png";
import fitarrayWorkoutDetail from "./assets/fitarray-workout-detail.png";
import fitarrayStats from "./assets/fitarray-stats.png";
import fitarrayProfile from "./assets/fitarray-profile.png";
import mitsubishiVehicleGallery from "./assets/mitsubishi-vehicle-gallery.png";
import mitsubishiModelDetail from "./assets/mitsubishi-model-detail.png";
import mitsubishiBuildPrice from "./assets/mitsubishi-build-price.png";
import mitsubishiMobileConfigurator from "./assets/mitsubishi-mobile-configurator.png";
import mitsubishiProjectCard from "./assets/mitsubishi-project-card-v2.png";
import mitsubishiCaseHero from "./assets/mitsubishi-case-hero-editorial-v4.png";
import tastebudsProjectCard from "./assets/tastebuds-project-card-v2.png";
import hairByAthraaProjectCard from "./assets/hair-by-athraa-project-card-v2.png";
import fitarrayProjectCard from "./assets/fitarray-project-card-v2.png";

export const site = {
  email: "andrena.yacoub@gmail.com",
  phone: "(236) 591-3951",
  website: "https://www.andrenayacoub.com",
  location: "Burnaby, British Columbia",
  linkedin: "https://www.linkedin.com/in/andrena-yacoub-67b8a2211/",
  linkedinUsername: "andrena-yacoub-67b8a2211",
  intro: "I connect campaign strategy, digital experiences, and social content so every touchpoint tells the same story.",
};

const allProjects = [
  {
    slug: "mera-sparkling-tea-launch",
    title: "MERA Sparkling Tea",
    discipline: "marketing",
    disciplineLabel: "Marketing / Brand Strategy",
    type: "Integrated marketing campaign",
    summary:
      "A 90-day launch campaign for a premium zero-proof sparkling tea.",
    hideCaseStudySummary: true,
    projectNote:
      "MERA is a fictional brand created for this portfolio. Budgets and targets are planning estimates, not real results.",
    projectIntro:
      "This concept connects brand strategy, advertising, SEO, email, and measurement in one launch plan.",
    tools: ["Google Ads", "Meta Ads Manager", "Google Analytics 4", "Google Search Console", "Looker Studio", "Google Business Profile"],
    skillsDemonstrated: ["Paid media strategy", "SEO & local search", "Landing-page CRO", "Email marketing", "Brand positioning", "Campaign measurement & reporting"],
    image: meraCampaignHero,
    imageAlt: "MERA sparkling tea cans styled with citrus and hibiscus in a plum and coral campaign setting.",
    brandMoodboard: [
      { image: meraCampaignHero, alt: "MERA product photography direction with warm plum, coral, citrus, and botanical styling.", caption: "Product and colour direction" },
      { image: meraMetaAdArt, alt: "MERA social campaign artwork showing the product in an evening setting.", caption: "Evening social campaign direction" },
      { image: meraLogoSketches, alt: "Early MERA logo and packaging direction sketches.", caption: "Early identity exploration" },
    ],
    brandIdentity: {
      name: "MERA",
      tagline: "Stay for the whole night.",
      description: "An editorial wordmark feels premium, while plum, coral, and peach keep the brand warm and social.",
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
    timeline: "90-day campaign plan",
    context:
      "MERA is a fictional zero-proof sparkling tea for adults seeking a premium alternative to alcohol.",
    challenge:
      "Stand out in a crowded category and make MERA a recognizable choice for social occasions.",
    objective:
      "Build awareness and trial among Metro Vancouver adults aged 22–35, then guide them toward a first purchase.",
    responsibilities: [
      "Planned the Google Search and Meta campaigns.",
      "Created the SEO, landing-page, and email strategy.",
      "Defined the campaign budget, goals, and measurement plan.",
    ],
    keyConcepts: [
      { title: "Audience", body: "Metro Vancouver adults aged 22–35 who want flavourful low- or no-alcohol options." },
      { title: "Positioning", body: "A premium social drink for staying present—not opting out." },
      { title: "Big idea", body: "Stay for the whole night. Clarity becomes confidence and connection." },
      { title: "Offer", body: "A three-flavour discovery pack supported by local creators and tastings." },
    ],
    research: [
      { title: "The occasion matters", body: "The strongest entry point is not a long ingredient story. It is a recognizable social moment: dinner, a picnic, an after-work gathering, or a night out." },
      { title: "Taste needs proof", body: "A new beverage earns trust through sensory language, reactions, serving rituals, and in-person trial—not polished packaging alone." },
      { title: "Local relevance builds credibility", body: "Neighbourhood venues, micro-creators, and community events can make a fictional launch strategy feel specific, useful, and culturally connected." },
    ],
    iteration: {
      label: "Rejected direction",
      title: "From wellness to connection.",
      beforeLabel: "Early direction · Wellness first",
      before:
        "The first concept focused on health benefits, making MERA feel clinical and similar to other wellness drinks.",
      afterLabel: "Selected direction · Social occasion",
      after:
        "“Stay for the whole night” shifted the focus to staying present and connected.",
      takeaway:
        "The new direction shaped the visual identity, social creative, and sampling-led launch.",
    },
    designProcess: [
      { phase: "01 · Diagnose", title: "Map the category", body: "Compared sparkling water, functional drinks, and zero-proof beverages to find an ownable role based on social confidence rather than restriction." },
      { phase: "02 · Position", title: "Choose one memorable promise", body: "Built the campaign around staying present for the whole night, supported by premium flavour, visual energy, and an optimistic voice." },
      { phase: "03 · Activate", title: "Connect content to trial", body: "Sequenced teaser content, creator seeding, launch-week sampling, paid retargeting, email capture, and a discovery bundle into one funnel." },
      { phase: "04 · Learn", title: "Test before scaling", body: "Designed weekly creative tests around hooks, occasions, creator formats, offers, and landing-page messages, with clear rules for reallocating spend." },
    ],
    metricsTitle: "Success measures for the 90-day launch.",
    metrics: [
      "Reach 250K local impressions and a 1.5%+ social click-through rate.",
      "Distribute 3,000 samples and convert 12% into sign-ups or purchases.",
      "Sell 1,000 discovery packs at an acquisition cost below $24.",
      "Create 30 reusable videos and identify three winning messages.",
    ],
    approach: [
      "Phase 1 — Spark curiosity: short sensory teasers, flavour reveals, creator seeding, and a waitlist landing page.",
      "Phase 2 — Make it tangible: sampling pop-ups, partner venue placements, launch-night content, and a three-flavour discovery bundle.",
      "Phase 3 — Turn trial into habit: retargeting, serving-ritual content, customer reactions, email replenishment, and referral rewards.",
    ],
    uxDecisions: [
      { title: "Google Search · 25%", body: "Reach local people actively searching for zero-proof drinks." },
      { title: "Meta ads · 35%", body: "Test lifestyle, flavour, and occasion-based creative." },
      { title: "Creators & sampling · 25%", body: "Use local tastings and creator reactions to build trust." },
      { title: "SEO, email & CRO · 15%", body: "Grow discovery and improve conversion over time." },
    ],
    marketingExecution: {
      googleAds: {
        objective: "Capture active demand and convert high-intent local searches into discovery-pack orders.",
        budget: "$1,500 concept budget · 30 days",
        searchAd: {
          label: "Sponsored",
          url: "mera.ca/discovery-pack",
          headline: "MERA Sparkling Tea | Zero-Proof Drinks",
          secondaryHeadline: "A brighter way to stay present",
          description: "Discover three botanical flavours made for dinner, celebrations, and everything after. Shop the MERA discovery pack.",
          sitelinks: ["Shop Flavours", "Discovery Pack", "Find MERA", "Our Story"],
        },
        keywordGroups: [
          { group: "High intent", terms: ["sparkling tea canada", "buy sparkling tea", "zero proof drinks"] },
          { group: "Local discovery", terms: ["non alcoholic drinks vancouver", "alcohol alternatives vancouver", "zero proof shop near me"] },
          { group: "Occasion", terms: ["non alcoholic party drinks", "sober curious drinks", "drinks for dinner party"] },
        ],
        optimization: [
          "Use exact and phrase match first; review search terms twice weekly.",
          "Add recipe, homemade, jobs, and free as negative keywords.",
          "Shift budget toward keywords producing qualified add-to-cart actions, not clicks alone.",
        ],
      },
      meta: {
        objective: "Drive discovery-pack purchases while building a reusable pool of engaged local prospects.",
        budget: "$2,100 concept budget · $70/day",
        creative: meraMetaAdArt,
        audiences: [
          "Prospecting · Metro Vancouver, ages 22–35, broad with Advantage+ expansion",
          "Interest test · zero-proof, specialty tea, wellness, dining, and local events",
          "Retargeting · 30-day site visitors, video viewers, social engagers, and cart abandoners",
        ],
        placements: ["Instagram Reels", "Instagram Stories", "Instagram Feed", "Facebook Feed"],
        tests: [
          "Hook: ‘Stay for the whole night’ vs. ‘Meet your new dinner drink’",
          "Format: lifestyle still vs. creator reaction vs. flavour close-up",
          "Offer: 10% first order vs. free local delivery threshold",
        ],
        targets: ["CTR ≥ 1.5%", "Landing-page CVR ≥ 4%", "CPA ≤ $24", "ROAS ≥ 2.5×"],
      },
      seo: {
        priorityKeywords: [
          "sparkling tea Canada",
          "zero-proof drinks Vancouver",
          "non-alcoholic drinks Vancouver",
          "botanical sparkling tea",
          "alcohol alternative drinks",
          "premium non-alcoholic beverages",
        ],
        competitorFindings: [
          { title: "TÖST", body: "A polished sparkling white tea positioned as an alcohol-free celebration drink. MERA can feel younger, more colourful, and more locally focused.", image: competitorTost, imageAlt: "Bottle of TÖST non-alcoholic sparkling white tea.", url: "https://tostbeverages.com/products/tost-750ml" },
          { title: "Saicho", body: "A premium single-origin sparkling tea built around dining and craftsmanship. MERA can offer a more casual, social option in a portable can.", image: competitorSaicho, imageAlt: "Saicho sparkling tea bottles served at a dinner table.", url: "https://www.saichodrinks.com/" },
          { title: "Wild Folk", body: "A Canadian botanical zero-proof cocktail brand with strong flavour storytelling. MERA can stand apart through tea, Vancouver occasions, and lighter refreshment.", image: competitorWildfolk, imageAlt: "Wild Folk non-alcoholic cocktail can beside a filled coupe glass.", url: "https://drinkwildfolk.com/" },
        ],
        actions: [
          { title: "Technical SEO", body: "Improve mobile speed, indexing, alt text, structured data, and broken links." },
          { title: "On-page SEO", body: "Give each page one keyword focus, clearer titles, and stronger internal links." },
          { title: "Content", body: "Publish useful guides about pairings, hosting, ingredients, and Vancouver options." },
          { title: "Authority", body: "Earn local links and mentions through partners, creators, and publications." },
        ],
        localActions: [
          "Complete the profile with accurate business details and order links.",
          "Post weekly product updates, events, and local photography.",
          "Request and respond to customer reviews.",
          "Use tracked links to measure visits, calls, directions, and orders.",
        ],
      },
      landingPage: {
        eyebrow: "Three flavours · one clear night",
        title: "Stay for the whole night.",
        copy: "A botanical sparkling tea for celebrations, dinners, and the moments you want to remember.",
        cta: "Shop the discovery pack",
        proof: ["Zero-proof", "Three botanical flavours", "Made for social occasions"],
        decisions: [
          "Keep one primary offer and call to action above the fold.",
          "Follow the hero with flavour proof, serving occasions, reviews, and a short FAQ.",
          "Use a sticky mobile CTA and reduce checkout distractions.",
          "A/B test headline, offer, product image, CTA wording, and review placement.",
        ],
      },
      measurement: {
        tools: ["Google Analytics 4", "Google Search Console", "Meta Business Suite", "Google Ads", "Looker Studio"],
        events: ["view_item", "select_offer", "add_to_cart", "begin_checkout", "purchase", "generate_lead"],
        reporting: [
          { label: "Awareness", value: "Reach, impressions, video completion, branded search" },
          { label: "Acquisition", value: "CTR, CPC, engaged sessions, new users" },
          { label: "Conversion", value: "CVR, CPA, revenue, ROAS, email sign-ups" },
          { label: "Retention", value: "Repeat purchase, email revenue, unsubscribe rate" },
        ],
      },
      email: {
        goal: "Turn interest into a first purchase, then encourage a reorder.",
        flow: [
          { step: "01", title: "Welcome", body: "Deliver the first-order offer and introduce MERA’s zero-proof positioning." },
          { step: "02", title: "Find your flavour", body: "Match each flavour to a mood, meal, and serving ritual." },
          { step: "03", title: "Social proof", body: "Share creator reactions, customer quotes, and local stockists." },
          { step: "04", title: "Convert", body: "Use a time-bound reminder for the discovery pack or free-delivery threshold." },
          { step: "05", title: "Replenish", body: "Trigger a post-purchase check-in, review request, and reorder message." },
        ],
      },
      monthlyReport: {
        snapshot: [
          { value: "250K", label: "Target local impressions" },
          { value: "1.5%+", label: "Paid-media CTR target" },
          { value: "4%+", label: "Landing-page CVR target" },
          { value: "≤ $24", label: "Customer acquisition target" },
        ],
        actions: [
          "Increase spend on the best audience and creative by 15–20% at a time.",
          "Pause keywords and ads that do not produce meaningful actions.",
          "Turn strong search queries into web and email content.",
          "Share a short monthly report with results and next actions.",
        ],
      },
    },
    deliverables: [
      "Google Search and Meta campaign concepts",
      "SEO keyword and competitor research",
      "Landing-page and email concepts",
      "Budget, goals, and measurement framework",
    ],
    outcome:
      "The final concept combines clear positioning, campaign creative, channel plans, and measurable goals. All results are targets, not actual performance.",
    reflection:
      "This project strengthened my ability to connect brand strategy with measurable action. Focusing on one social promise gave every channel a clearer role.",
    nextStep:
      "Run a $500 Meta and Google Search pilot, then refine the campaign using real customer and conversion data.",
    process: [
      "Found an ownable position in the zero-proof beverage category.",
      "Built a 90-day integrated launch plan around awareness, trial, and repeat purchase.",
      "Defined a transparent measurement and creative-testing framework.",
    ],
  },
  {
    slug: "mitsubishi-motors-website-redesign",
    title: "Mitsubishi Motors Website Redesign",
    discipline: "design",
    disciplines: ["design", "marketing", "web"],
    disciplineLabel: "UI/UX + Digital Marketing",
    type: "Website redesign & growth strategy",
    summary:
      "An automotive website redesign and growth plan connecting vehicle discovery, configuration, dealer leads, and measurable acquisition.",
    tools: ["Figma", "UX strategy", "SEO", "Paid acquisition", "CRO", "GA4 measurement"],
    skillsDemonstrated: ["Information architecture", "Responsive UI design", "Interaction design", "Design systems", "User flows", "Wireframing & prototyping", "Accessibility-aware hierarchy", "Conversion-focused UX"],
    skillsTitle: "Visual and interaction design skills.",
    figmaUrl: "https://www.figma.com/design/FpBadHeu1QwzbAqgL0npOg/Mitsubishi-Motors-%E2%80%94-Website-Redesign-UX-Case-Study?node-id=17-2&t=8T44F1nmuyvRtfIn-1",
    figmaLabel: "Open full Figma case study",
    image: mitsubishiCaseHero,
    cardImage: mitsubishiProjectCard,
    cardImageAlt: "Mitsubishi Motors website redesign presented on desktop and mobile device mockups.",
    imageAlt: "Mitsubishi Motors website redesign displayed on a desktop monitor and smartphone in a dark studio setting.",
    role: "UX/UI designer",
    timeline: "2 weeks · Independent redesign concept",
    context:
      "An independent redesign of the Mitsubishi Motors Canada journey, from model discovery to service booking.",
    challenge:
      "Product, pricing, financing, and inventory information felt dense and disconnected across key tasks.",
    iteration: {
      label: "Structural shift",
      title: "From separate pages to one connected journey.",
      beforeLabel: "Early direction · Page-first",
      before:
        "The first structure treated model pages, financing, inventory, dealers, and service as separate destinations. Each page worked alone, but the transitions between researching, pricing, and taking action felt fragmented.",
      afterLabel: "Selected direction · Journey-first",
      after:
        "The final system keeps a clear next step in every major screen: compare a trim, continue to financing, find local inventory, reserve a vehicle, book a test drive, or manage ownership tasks.",
      takeaway:
        "Organizing the redesign around decisions—not departments—created a more continuous experience and gave the interface a consistent hierarchy across 18 screens.",
    },
    researchTitle: "UX priorities identified through a heuristic review.",
    research: [
      { title: "Comparison needs context", body: "Price, range, seating, drivetrain, warranty, and trim differences need to remain close together so users can evaluate options without remembering details across pages." },
      { title: "The total should stay visible", body: "Configuration choices feel more trustworthy when the selected options and estimated price update in the same view." },
      { title: "Local action is part of the journey", body: "Dealer distance, available inventory, test-drive booking, and service access should feel connected to product research rather than like separate websites." },
    ],
    designProcessTitle: "Design process: from complex sitemap to responsive product system.",
    designProcess: [
      { phase: "01 · Audit", title: "Identify the high-friction decisions", body: "Reviewed the major tasks in an automotive journey and prioritized the information needed to discover, compare, configure, finance, and locate a vehicle." },
      { phase: "02 · Structure", title: "Map one connected flow", body: "Organized the site around vehicles, shopping tools, dealers, service, and ownership while defining a clear next action for each screen." },
      { phase: "03 · Systemize", title: "Create reusable interface patterns", body: "Built consistent headers, vehicle cards, comparison modules, pricing panels, forms, filters, and action states with a restrained red, black, and white system." },
      { phase: "04 · Adapt", title: "Carry the decisions to mobile", body: "Condensed the configurator into a focused mobile flow while preserving option visibility, estimated price, and progress through the build." },
    ],
    marketingStrategy: {
      title: "Turn vehicle research into measurable local demand.",
      intro:
        "A simple acquisition plan connecting vehicle research to qualified local leads.",
      funnel: [
        { step: "01", title: "Reach", body: "Introduce relevant models and local offers." },
        { step: "02", title: "Consider", body: "Guide visitors to useful model and comparison pages." },
        { step: "03", title: "Convert", body: "Drive build, inventory, dealer, and test-drive actions." },
        { step: "04", title: "Retain", body: "Support owners with service and warranty content." },
      ],
      channels: [
        { title: "SEO & content", body: "Improve visibility for model pricing, comparisons, and local inventory." },
        { title: "Search & retargeting", body: "Match high-intent searches to the right page, and reconnect visitors who leave a build unfinished." },
        { title: "Local dealer growth", body: "Link dealer pages to inventory, directions, calls, and test drives." },
      ],
      measurement: {
        tools: ["Google Analytics 4", "Search Console", "Google Ads", "Meta Business Suite", "Dealer CRM"],
        events: ["view_vehicle", "compare_vehicle", "start_build", "complete_build", "find_dealer", "submit_test_drive", "book_service"],
        kpis: [
          { label: "Discovery", value: "Organic non-brand clicks and qualified model-page engagement" },
          { label: "Intent", value: "Comparison, configurator, finance, and inventory-start rates" },
          { label: "Leads", value: "Test-drive and dealer-lead conversion rate, CPL, and lead quality" },
          { label: "Business", value: "Lead-to-appointment rate, dealer follow-up, and attributed outcomes" },
        ],
      },
    },
    deliverables: [
      "Customer journey and revised information architecture",
      "Homepage, vehicle gallery, model-detail, and trim-comparison screens",
      "Build-and-price configurator and financing calculator",
      "Inventory, dealer, test-drive, service, and account flows",
      "Responsive mobile configurator and high-fidelity Figma prototype",
    ],
    galleryLabel: "Selected product screens",
    galleryTitle: "A connected path from discovery to ownership.",
    galleryLayout: "mixed",
    gallery: [
      { image: mitsubishiVehicleGallery, alt: "Mitsubishi vehicle gallery with filters and three model cards.", caption: "Vehicle discovery · Filters, starting prices, key benefits, and comparison actions make the range easier to scan." },
      { image: mitsubishiModelDetail, alt: "Outlander PHEV model detail page with key specifications and calls to action.", caption: "Model detail · Range, seating, drivetrain, warranty, and next steps stay close to the vehicle story." },
      { image: mitsubishiBuildPrice, alt: "Mitsubishi Outlander PHEV build and price configurator.", caption: "Build & price · Selected options and the estimated total remain visible in one configuration view." },
      { image: mitsubishiMobileConfigurator, alt: "Mobile Mitsubishi Outlander PHEV configurator.", caption: "Responsive configurator · The same decisions are condensed into a focused mobile experience." },
    ],
    outcome:
      "An 18-screen concept with clearer hierarchy and connected flows, ready for usability testing and validation.",
    reflection:
      "This project strengthened my ability to design a large product ecosystem instead of a single page—connecting discovery, configuration, dealer, and ownership tasks into one consistent system.",
    nextStep:
      "Run task-based usability tests with vehicle shoppers and owners, then refine the flows using what I learn.",
    process: [
      "Mapped the automotive journey from model discovery to ownership support.",
      "Designed a reusable responsive system across 18 screens.",
      "Connected product, pricing, dealer, and service actions into one flow.",
    ],
  },
  {
    slug: "tastebuds",
    title: "TasteBuds Vancouver",
    cardImage: tastebudsProjectCard,
    cardImageAlt: "TasteBuds Vancouver branding and social campaign presented across two phone mockups.",
    image: tastebudsProjectCard,
    imageAlt: "TasteBuds Vancouver branding and social campaign presented across two phone mockups.",
    discipline: "social",
    disciplines: ["social", "marketing", "web"],
    disciplineLabel: "Content / Social",
    type: "Social media brand launch — Instagram, TikTok & website",
    summary:
      "A Vancouver foodie brand built from zero across Instagram, TikTok, and a custom website through authentic local content and performance-led iteration.",
    tools: ["Meta Business Suite", "CapCut", "Final Cut Pro", "Custom website"],
    skillsDemonstrated: ["Content strategy", "Social analytics", "Brand voice", "Short-form video", "Team coordination", "SEO & Open Graph"],
    brandShowcase: {
      title: "A bright, friendly identity made for local discovery.",
      description: "The smiling wordmark and high-energy yellow palette gave TasteBuds an approachable presence across social posts and the website. Black added clarity and contrast, while cream softened the system so recommendations felt personal rather than promotional.",
      image: tastebudsBrandingSystem,
      imageAlt: "TasteBuds Vancouver identity system showing the smiling wordmark, logo mark, typography, and yellow, black, and cream palette.",
      images: [
        { image: tastebudsLogoYellow, alt: "Black TasteBuds smiling logo on a bright yellow background.", label: "Primary logo · Yellow" },
        { image: tastebudsLogoBlack, alt: "Yellow TasteBuds smiling logo on a black background.", label: "Primary logo · Black" },
        { image: tastebudsWordmarkYellow, alt: "Black TasteBuds smiling wordmark on a bright yellow background.", label: "Wordmark · Yellow" },
        { image: tastebudsWordmarkBlack, alt: "Yellow TasteBuds smiling wordmark on a black background.", label: "Wordmark · Black" },
      ],
      caption: "TasteBuds identity marks · Primary logo and wordmark in both brand colourways.",
      colors: [
        { name: "TasteBuds Yellow", value: "#E6E93A" },
        { name: "Foodie Black", value: "#111111" },
        { name: "Warm Cream", value: "#F5F0E5" },
      ],
      voiceTitle: "More like a friend’s recommendation than an ad.",
      voiceDescription: "A consistent identity paired with direct, useful, and locally grounded content.",
      principles: [
        { title: "Local first", body: "Real Vancouver visits, neighbourhoods, and location tags." },
        { title: "Useful hooks", body: "Hidden gems worth stopping, saving, and sharing." },
        { title: "One voice", body: "The same friendly tone across social, video, and web." },
      ],
    },
    figmaUrl: "https://www.figma.com/design/U8rc8P7KkgRX33MPUxoQ7T/Social-media-net-work-Group-work?node-id=0-1&t=EugayvlaFyPthzNz-1",
    pdfUrl: "/files/tastebuds-final-presentation.pdf",
    role: "Content Manager & Strategist",
    team: "Esme Chan · Andrena Yacoub · Bryan Vo · Taka Kondo",
    timeline: "7 weeks · Oct 13–Nov 30",
    context:
      "TasteBuds is a Vancouver foodie brand created from the ground up to explore neighbourhood restaurants and local food culture through firsthand visits, original content, and a connected website.",
    challenge:
      "Enter a crowded category dominated by established Vancouver foodie accounts with 100K+ audiences, then earn attention without paid reach, reposted material, or stock content.",
    objective:
      "Build a recognizable local voice that could compete through consistent execution, honest recommendations, and useful multi-platform content rather than aesthetic food photography alone.",
    responsibilities: [
      "Led the seven-week content calendar, publishing cadence, and platform strategy across Instagram, TikTok, and the website.",
      "Created and edited original restaurant content from on-site mobile photography and videography.",
      "Reviewed performance data, tested posting windows, and shifted the plan toward discovery-led formats that earned stronger reach and interaction.",
      "Coordinated a four-person team working across content, design, videography, and web development.",
    ],
    deliverables: [
      "Friendly yellow-and-black brand system and reusable social templates",
      "28 Instagram posts and 16 TikTok videos over seven weeks",
      "Categorized food website with comments, SEO, and Open Graph sharing",
      "Performance review connecting platform data to content decisions",
    ],
    approach: [
      "Published four posts each week: two short-form restaurant or food-meme videos and two blog-style food-news or fact posts.",
      "Tested publishing windows for three weeks, then prioritized approximately 7 PM on weekdays and 12 PM on weekends when the data showed stronger response.",
      "Used firsthand restaurant visits, location tags, collaboration invitations, and clear calls to action to strengthen local discovery and interaction.",
    ],
    iteration: {
      label: "Campaign pivot",
      title: "Performance changed the content plan.",
      beforeLabel: "Weeks 1–2 · Polished but familiar",
      before:
        "The first two weeks leaned on polished restaurant photography and straightforward recommendations. The posts were useful, but they blended into the wider Vancouver food-account category and gave people little reason to stop or share.",
      afterLabel: "The pivot · Humor and discovery",
      after:
        "The hotpot meme and hidden-diner Reel outperformed the safer posts, so the plan shifted toward humor, emotional hooks, and places that felt like a local secret. That direction carried into the top-performing cozy Japanese cafe TikTok.",
      takeaway:
        "The Border Burrito invitation was not treated as a lucky outcome; it followed a deliberate shift toward formats that made local discovery feel more personal and shareable.",
    },
    outcome:
      "TasteBuds generated 42.5K total platform views during the seven-week launch, reached the intended Gen Z and young-millennial audience, and prompted an unsolicited restaurant collaboration invitation.",
    keyConceptsTitle: "A local brand designed for discovery and trust.",
    keyConcepts: [
      {
        title: "Audience",
        body: "Vancouver food lovers aged 18–35 seeking honest places to try and share.",
      },
      {
        title: "Brand voice",
        body: "Bright, friendly, and conversational—not polished or promotional.",
      },
      {
        title: "Content system",
        body: "Four weekly posts connecting restaurant tours, humour, food facts, and local news.",
      },
      {
        title: "Authenticity",
        body: "Every visit, image, video, and story was created firsthand.",
      },
    ],
    researchTitle: "The competitive gap behind the strategy.",
    research: [
      { title: "A crowded category", body: "Established Vancouver food accounts already owned high-quality, high-frequency content and audiences above 100K, so visual polish alone would not create a reason to follow." },
      { title: "Authenticity was underused", body: "Competitor content often emphasized aesthetic curation. TasteBuds could differentiate through honest visits, accessible recommendations, and a voice that felt personal instead of promotional." },
      { title: "Multi-platform continuity", body: "Few competitors connected short-form discovery to a categorized website and blog. Linking TikTok, Instagram, and web content created a more complete local resource." },
    ],
    designProcessLabel: "Content strategy",
    designProcessTitle: "One idea, adapted for every channel.",
    designProcess: [
      { phase: "01 · Instagram", title: "Build recognition", body: "Saveable carousels, Reels, Stories, and local collaborations." },
      { phase: "02 · TikTok", title: "Reach new viewers", body: "Fast, hook-led videos featuring hidden local spots." },
      { phase: "03 · Website", title: "Make discovery useful", body: "Categorized restaurant stories designed for search and sharing." },
      { phase: "04 · Improve", title: "Follow the results", body: "Used reach, timing, and engagement to guide the next posts." },
    ],
    contentOperations: {
      title: "From weekly plan to measurable growth.",
      intro: "A repeatable publishing rhythm kept the content original, timely, and grounded in audience behaviour.",
      planning: [
        { label: "Weekly output", value: "4 original posts" },
        { label: "Short video", value: "Local tour + food meme · TikTok and Instagram" },
        { label: "Blog-style", value: "Food fact + local news · Instagram and website" },
      ],
      sourcing: [
        "Photos and video captured during restaurant visits",
        "Firsthand Vancouver food facts and culture stories",
        "Mobile production edited in CapCut and Final Cut Pro",
      ],
      scheduling: [
        { label: "Lunch scroll", value: "11:30 AM–1:30 PM" },
        { label: "After work", value: "6–8 PM" },
        { label: "Test and refine", value: "Weeks 1–3, then ~7 PM weekdays and ~12 PM weekends" },
      ],
      tools: ["Instagram · Meta Business Suite", "TikTok · Manual posting"],
      insights: [
        { label: "Peak engagement", value: "12–1 PM and 7–9 PM" },
        { label: "Core viewers", value: "87% Gen Z + young millennials" },
        { label: "Preferred content", value: "Local food tours and hidden gems" },
      ],
      performance: [
        { platform: "Instagram", views: "16.5K", visits: "455" },
        { platform: "TikTok", views: "26K", visits: "264" },
      ],
      templateImage: tastebudsInstagramTemplates,
      templateAlt: "TasteBuds Instagram carousel templates for a Halloween food-history story in the yellow-and-black brand system.",
      milestoneImage: tastebudsBorderBurritoMilestone,
      milestoneAlt: "Instagram message from Border Burrito inviting TasteBuds Vancouver to collaborate.",
    },
    metrics: [
      "Instagram grew from zero to 16.5K views, reaching 7.8K users—74% of them non-followers.",
      "Instagram produced 1.1K interactions and 455 profile visits across 28 posts.",
      "TikTok grew from zero to 26K views, 944 likes, and 264 profile visits across 16 posts.",
      "86% of TikTok viewers were new, with 78% of traffic coming from the For You page.",
      "83% of viewers matched the intended Gen Z and young-millennial audience.",
      "An unsolicited restaurant collaboration invitation created a real-world signal beyond vanity metrics.",
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
      "This project was as much a lesson in operational rigor as content strategy. Running two platforms and a website with daily interaction requirements taught me how to sequence a small team’s time against a demanding calendar, avoid burnout, and use platform-specific evidence to make real-time decisions. TikTok became the discovery engine, while Instagram built the more recognizable, save-worthy brand presence.",
    nextStep:
      "Build the restaurant-partnership pipeline that opened organically, formalize a recurring hidden-gem series around the strongest content pattern, and test paid boosting behind proven organic posts.",
    process: [
      "Built the campaign direction with the team.",
      "Planned content across Instagram, TikTok, and web.",
      "Presented a complete brand, content, and performance strategy.",
    ],
  },
  {
    slug: "hair-by-athraa",
    title: "Hair By Athra'a",
    discipline: "design",
    disciplineLabel: "UI/UX Case Study",
    type: "UI/UX Strategy case study",
    summary:
      "A clear, elegant mobile booking experience that helps salon clients choose services and schedule with confidence.",
    tools: ["Figma", "Mobile UI", "Service design", "User flows"],
    skillsDemonstrated: ["Information architecture", "Mobile UI design", "Interaction design", "User flows", "Wireframing & prototyping", "Service design", "Accessible hierarchy", "Booking UX"],
    skillsTitle: "Mobile product and interaction design skills.",
    figmaUrl: "https://www.figma.com/design/QN3SMXzMllgkNYZtsZbN52/UI---UX-Strategy-1---Term-Project--Done-?node-id=0-1&t=kuYJzHssiU0DArAq-1",
    image: hairByAthraaProjectCard,
    cardImage: hairByAthraaProjectCard,
    cardImageAlt: "Hair By Athra'a salon booking experience presented across three mobile screens.",
    imageAlt: "Mobile mockup for the Hair By Athra'a salon booking case study.",
    role: "UI/UX designer",
    timeline: "Term project",
    context:
      "Hair By Athra'a is a modern salon concept focused on making service discovery and booking simpler, clearer, and more personal. Clients can browse styles visually, speak with stylists, and book appointments with confidence.",
    challenge:
      "Unclear pricing, difficult booking systems, and trouble describing exact styling needs leave clients uncertain. The challenge was to connect visual inspiration, stylist communication, transparent service details, and booking in one calm mobile flow.",
    objective:
      "Create a mobile-first booking experience that guides a new client from welcome to service discovery, stylist selection, and confirmation with the information needed to make each decision confidently.",
    responsibilities: [
      "Defined the booking problem, project scope, information hierarchy, and primary mobile journey.",
      "Mapped the service-discovery, stylist-selection, scheduling, and confirmation flow.",
      "Created wireframes, high-fidelity screens, interface content, reusable patterns, and the final Figma prototype.",
    ],
    keyConceptsTitle: "A booking flow built around four clear moments.",
    keyConcepts: [
      {
        title: "Welcome",
        body: "Introduce the salon's tone and value quickly, then give first-time clients an obvious starting point instead of competing calls to action.",
      },
      {
        title: "Discover",
        body: "Organize services through scannable categories, imagery, and concise details so clients can compare options without reading a dense menu.",
      },
      {
        title: "Choose",
        body: "Bring stylist expertise, service fit, price, duration, and availability close to the selection moment to reduce uncertainty.",
      },
      {
        title: "Confirm",
        body: "Repeat the selected service, stylist, date, time, and location before submission so the final action feels deliberate and trustworthy.",
      },
    ],
    researchTitle: "What clients need before they commit.",
    research: [
      {
        title: "Services need context",
        body: "A service name alone is not enough. Clients need a short description, expected duration, starting price, and a clear sense of the result.",
      },
      {
        title: "Stylist fit builds confidence",
        body: "Specialties, work examples, and availability help clients choose a stylist without needing a separate phone call or direct-message conversation.",
      },
      {
        title: "Confirmation prevents doubt",
        body: "A clear summary and visible booking status reduce the uncertainty created when requests move between social messages, forms, and phone calls.",
      },
    ],
    designProcessTitle: "From a fragmented booking process to one guided flow.",
    designProcess: [
      {
        phase: "01 · Discover",
        title: "Define the booking breakdown",
        body: "Identified the information clients repeatedly need across discovery, service comparison, stylist choice, scheduling, and confirmation.",
      },
      {
        phase: "02 · Structure",
        title: "Map the decision sequence",
        body: "Organized the journey as welcome → discover → choose → confirm so each screen asks for one meaningful decision at a time.",
      },
      {
        phase: "03 · Design",
        title: "Create a premium mobile system",
        body: "Developed an editorial visual direction with reusable service cards, stylist profiles, booking controls, and clear primary actions.",
      },
      {
        phase: "04 · Refine",
        title: "Check continuity and clarity",
        body: "Reviewed labels, hierarchy, selected states, summaries, and transitions so information remains consistent from discovery through confirmation.",
      },
    ],
    deliverables: [
      "Client journey and mobile information architecture",
      "Service discovery and stylist-selection flows",
      "Scheduling and booking-confirmation screens",
      "Reusable mobile interface patterns",
      "High-fidelity Figma prototype",
    ],
    approach: [
      "Mapped the client journey from discovery to booking so the interface could support quick decisions.",
      "Created a soft editorial visual direction that feels personal, polished, and beauty-focused.",
      "Designed mobile-first screens with clear hierarchy for services, booking steps, and salon information.",
    ],
    outcome:
      "The current outcome is a complete high-fidelity booking prototype with a mapped path from service discovery to appointment. Because it has not yet been tested with real users, I treat its clarity as a design hypothesis—not a proven result.",
    iteration: {
      label: "Validation plan",
      title: "What still needs to be proven.",
      beforeLabel: "Current evidence · Design review",
      before:
        "The prototype improves hierarchy, service organization, and booking continuity, but a polished interface alone cannot prove that first-time users will complete the flow confidently.",
      afterLabel: "Next step · Five walkthroughs",
      after:
        "I would ask five first-time users to find a haircut and its price, book an appointment for a specific day, and locate the salon’s hours or address without prompts.",
      takeaway:
        "I would record unassisted completion, rough task time, and every hesitation or backtrack, then revise the service-selection and confirmation states before reporting any success rate.",
    },
    galleryLabel: "Selected design work",
    galleryTitle: "The identity and complete booking flow.",
    gallery: [
      {
        image: "/social/hair-by-athraa-case-study.png",
        alt: "Hair By Athra'a monogram and wordmark in black on a warm cream background.",
        caption: "Brand mark · An editorial monogram gives the salon a distinctive, premium signature.",
      },
      {
        image: hairByAthraaFigmaOverview,
        alt: "Figma overview showing the Hair By Athra'a welcome, service discovery, stylist selection, booking, and confirmation screens.",
        caption: "Flow overview · The full Figma workspace connects discovery, selection, scheduling, and confirmation states.",
      },
    ],
    reflection:
      "This project strengthened my ability to turn a service journey into a calm mobile flow. The biggest limitation is the lack of user evidence; the next iteration should be driven by observed booking behaviour rather than visual preference alone.",
    nextStep:
      "Run the five-person usability test outlined above, then revise the service-selection and confirmation screens based on where users hesitate or backtrack.",
    process: [
      "Restructured discovery and booking flow.",
      "Built a premium editorial-inspired interface.",
      "Designed key mobile-first booking screens.",
    ],
  },
  {
    slug: "group-fitness-app",
    title: "FitArray Fitness App Prototype",
    cardImage: fitarrayProjectCard,
    cardImageAlt: "FitArray fitness dashboard, exercise library, and statistics shown on three phone mockups.",
    discipline: "design",
    disciplineLabel: "UI/UX Case Study",
    type: "Interactive Figma prototype",
    summary:
      "A focused mobile fitness app for discovering exercises, building workouts, following sessions, and tracking progress.",
    tools: ["Figma", "Interactive prototyping", "Mobile UI", "User flows", "Information architecture"],
    figmaUrl: "https://www.figma.com/design/EJUoY1Vu8sDPIRqRgXewcI/fitness-app--Protype-?node-id=124-1037&t=38IHLCmxR2maeFit-1",
    figmaLabel: "Open interactive prototype",
    role: "UI/UX designer and prototyper",
    timeline: "Term project",
    context:
      "FitArray is a mobile fitness concept designed for people who want structure without the complexity of switching between exercise libraries, workout timers, and separate progress trackers.",
    challenge:
      "In many fitness apps, the next useful action is buried beneath exercise libraries, metrics, and competing recommendations. The challenge was to keep discovery flexible while making it obvious how to turn an exercise into a reviewed workout, begin a session, and understand what to do next.",
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
    iteration: {
      label: "Design pivot",
      title: "Separating discovery from workout commitment.",
      beforeLabel: "Early direction · Browse and add",
      before:
        "The early flow let users browse exercises and add them to a workout on the same screen. It was fast, but there was no clear review moment, so users could lose track of what they had selected, the workout order, or whether the plan was ready to begin.",
      afterLabel: "Revised direction · Discover → build → review",
      after:
        "I separated the experience into three deliberate stages: discover exercises, build the workout, and review the complete plan before starting. The extra checkpoint makes selections, sequence, and next actions visible without making the library itself feel heavier.",
      takeaway:
        "The pivot showed that reducing friction does not always mean removing steps. One well-placed review step can reduce uncertainty and make the transition into an active workout feel more intentional.",
    },
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
      "The most important decision was separating discovery, workout building, and review instead of forcing all three behaviours into one screen. That change made the next action clearer and gave the system a more understandable rhythm. A future iteration would test whether users can build and begin a workout without hesitation, then validate contrast, focus order, labels, and active-session controls for accessibility.",
    process: [
      "Defined the core fitness journey and information architecture.",
      "Built a reusable mobile UI system and high-fidelity screens.",
      "Connected and refined the main flows as an interactive prototype.",
    ],
  },
];

export const projects = allProjects.filter((project) => project.slug !== "group-fitness-app");
export const skillGroups = [
  {
    title: "Marketing & Branding",
    skills: ["Social Media Content Creation", "Brand Strategy", "Content Marketing", "Visual Identity Design"],
  },
  {
    title: "Design",
    skills: ["Figma", "Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign", "Canva"],
  },
  {
    title: "Web Development",
    skills: ["HTML5", "CSS3", "JavaScript", "WordPress"],
  },
  {
    title: "Languages",
    skills: ["English", "Aramaic", "Arabic"],
  },
];
