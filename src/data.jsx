import hairByAthraaCaseStudy from "./assets/hair-by-athraa-case-study.png";
import hairByAthraaFigmaOverview from "./assets/hair-by-athraa-figma-overview.png";
import tastebudsBrandingSystem from "./assets/tastebuds-branding-system.png";
import tastebudsSocialTemplate from "./assets/tastebuds-social-template.png";
import tastebudsInstagramTopPerformers from "./assets/tastebuds-instagram-top-performers.png";
import tastebudsTiktokTopPerformers from "./assets/tastebuds-tiktok-top-performers.png";
import tastebudsWebsiteOverview from "./assets/tastebuds-website-overview.png";
import tastebudsOpenGraphPreview from "./assets/tastebuds-open-graph-preview.png";
import meraCampaignHero from "./assets/mera-campaign-hero.png";
import meraMetaAdArt from "./assets/mera-meta-ad-art.png";
import fitarraySplash from "./assets/fitarray-splash.png";
import fitarrayLogin from "./assets/fitarray-login.png";
import fitarrayDashboard from "./assets/fitarray-dashboard.png";
import fitarrayExercises from "./assets/fitarray-exercises.png";
import fitarrayWorkoutDetail from "./assets/fitarray-workout-detail.png";
import fitarrayStats from "./assets/fitarray-stats.png";
import fitarrayProfile from "./assets/fitarray-profile.png";
import mitsubishiHomepage from "./assets/mitsubishi-homepage.png";
import mitsubishiVehicleGallery from "./assets/mitsubishi-vehicle-gallery.png";
import mitsubishiModelDetail from "./assets/mitsubishi-model-detail.png";
import mitsubishiBuildPrice from "./assets/mitsubishi-build-price.png";
import mitsubishiMobileConfigurator from "./assets/mitsubishi-mobile-configurator.png";

export const site = {
  email: "ayacoub@gmail.com",
  location: "Burnaby, British Columbia",
  linkedin: "https://www.linkedin.com/in/andrena-yacoub-67b8a2211/",
  linkedinUsername: "andrena-yacoub-67b8a2211",
  intro: "I connect campaign strategy, digital experiences, and social content so every touchpoint tells the same story.",
};

export const projects = [
  {
    slug: "mera-sparkling-tea-launch",
    title: "MERA Sparkling Tea",
    discipline: "marketing",
    disciplineLabel: "Marketing / Brand Strategy",
    type: "Integrated marketing campaign",
    summary:
      "A full-funnel digital marketing concept for launching a premium sparkling tea through Google Search, Meta advertising, SEO, local discovery, email, and conversion-focused measurement.",
    tools: ["Google Ads", "Meta Ads", "SEO & local", "Landing-page CRO", "Email marketing", "GA4 reporting"],
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
    timeline: "90-day campaign plan",
    context:
      "MERA is a fictional zero-proof sparkling tea made for socially active, wellness-minded adults who want an elevated alternative to alcohol and overly sweet soft drinks.",
    challenge:
      "Enter a crowded beverage category without competing on wellness claims alone, then turn a new name into something people can recognize, sample, and confidently bring to a social occasion.",
    objective:
      "Build awareness and trial in Metro Vancouver among adults aged 22–35, establish MERA as the drink for a clearer kind of socializing, and create a repeatable path from discovery to first purchase.",
    responsibilities: [
      "Planned Google Search and Meta campaigns across prospecting, retargeting, creative testing, and weekly optimization.",
      "Developed SEO, local-search, Google Business Profile, keyword, and competitor-research recommendations.",
      "Designed a conversion-focused landing page, email nurture flow, analytics event plan, and monthly ROI report.",
      "Connected campaign findings to practical recommendations for ownership and the next phase of business growth.",
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
    iteration: {
      label: "Rejected direction",
      title: "From functional wellness to a social promise.",
      beforeLabel: "Early direction · Wellness first",
      before:
        "The first concept led with functional benefits: no sugar crash, botanical ingredients, and a healthier night out. It was informative, but it flattened MERA into a category already crowded with kombucha and adaptogen drinks and made the voice feel clinical.",
      afterLabel: "Selected direction · Social occasion",
      after:
        "The shift to “Stay for the whole night” moved the promise from what is missing from the can to what the drink helps people do: stay sharp, stay present, and keep connecting.",
      takeaway:
        "That reframing gave the brand an ownable role and became the reason behind the coral-and-plum visual system, occasion-led creative, and sampling-first launch plan.",
    },
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
      { title: "Google Search · 25%", body: "Capture high-intent searches for sparkling tea, zero-proof drinks, and alcohol alternatives in Metro Vancouver." },
      { title: "Meta advertising · 35%", body: "Use Reels, Stories, Feed, and retargeting to test lifestyle, taste, and occasion-led creative." },
      { title: "Creators & sampling · 25%", body: "Turn local tastings and micro-creator reactions into credible content and reusable ad assets." },
      { title: "SEO, email & CRO · 15%", body: "Build long-term discovery and improve conversion through landing-page tests, local search, and nurture flows." },
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
          { title: "Premium zero-proof brands", body: "Strong storytelling and packaging, but often broad and non-local. MERA can win with Vancouver-specific discovery and occasion content." },
          { title: "Functional beverages", body: "Benefits are easy to understand, but the social ritual is weaker. MERA should lead with the occasion and support it with product proof." },
          { title: "Sparkling water", body: "High familiarity and distribution, but lower perceived celebration value. MERA can own a more elevated dinner-and-night-out position." },
        ],
        actions: [
          { title: "Technical foundation", body: "Improve Core Web Vitals, mobile speed, indexability, image alt text, structured data, sitemap coverage, and broken links." },
          { title: "On-page SEO", body: "Create one clear keyword target per page, rewrite titles and descriptions, strengthen internal links, and add product and FAQ schema." },
          { title: "Content growth", body: "Publish occasion-led content around dinner pairings, sober-curious hosting, botanical ingredients, and Vancouver zero-proof guides." },
          { title: "Authority building", body: "Earn relevant links and mentions through local restaurants, markets, wellness partners, creators, and beverage publications." },
        ],
        localActions: [
          "Complete the Google Business Profile with the correct category, service area, hours, products, and order link.",
          "Publish weekly product or event updates and upload consistent, high-quality local photography.",
          "Request reviews after purchase or sampling, respond to every review, and monitor common customer language.",
          "Add UTM-tagged website links so profile visits, calls, directions, and orders can be measured in GA4.",
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
        goal: "Turn first interest into trial, then turn trial into a repeat social ritual.",
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
          "Scale the highest-converting audience and creative combination by 15–20% at a time.",
          "Pause keywords and ads that spend without producing qualified actions.",
          "Turn winning search queries into SEO pages and email topics.",
          "Share a concise monthly report with ownership: results, insights, risks, and next actions.",
        ],
      },
    },
    deliverables: [
      "Google Search campaign structure, ad copy, keyword groups, negatives, budget, and optimization plan",
      "Meta campaign plan, audience structure, placements, creative concepts, retargeting, and A/B tests",
      "SEO audit priorities, keyword map, competitor research, content plan, and local-search roadmap",
      "Google Business Profile optimization and ongoing post, review, photo, and UTM-tracking plan",
      "High-converting landing-page concept, email nurture flow, and conversion-rate testing roadmap",
      "GA4 event map, Search Console and Meta reporting framework, ROI dashboard, and monthly recommendations",
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
    slug: "mitsubishi-motors-website-redesign",
    title: "Mitsubishi Motors Website Redesign",
    discipline: "design",
    disciplines: ["design", "marketing"],
    disciplineLabel: "UI/UX + Digital Marketing",
    type: "Website redesign & growth strategy",
    summary:
      "An end-to-end automotive website concept and digital growth plan that connects vehicle discovery, comparison, configuration, dealer leads, SEO, paid acquisition, and conversion measurement.",
    tools: ["Figma", "UX strategy", "SEO", "Paid acquisition", "CRO", "GA4 measurement"],
    figmaUrl: "https://www.figma.com/design/FpBadHeu1QwzbAqgL0npOg/Mitsubishi-Motors-%E2%80%94-Website-Redesign-UX-Case-Study?node-id=17-2&t=8T44F1nmuyvRtfIn-1",
    figmaLabel: "Open full Figma case study",
    image: mitsubishiHomepage,
    imageAlt: "Redesigned Mitsubishi Motors homepage featuring the 2026 Outlander PHEV and three vehicle cards.",
    imageCaption: "Homepage concept for a streamlined Mitsubishi Motors Canada journey. Independent portfolio redesign; not commissioned by Mitsubishi Motors.",
    role: "UX/UI designer",
    timeline: "Independent redesign concept",
    context:
      "This independent portfolio project reimagines the Mitsubishi Motors Canada website around the decisions people make before and after purchasing a vehicle—from finding a model to configuring it, locating a dealer, and booking service.",
    challenge:
      "Automotive websites carry a large amount of product, pricing, financing, inventory, and ownership information. The challenge was to make that depth easier to scan without separating the experience into disconnected tools.",
    objective:
      "Create one clear, responsive journey that helps shoppers compare models, understand costs, configure a vehicle, find local inventory, and move toward a measurable dealer or test-drive lead with less friction.",
    responsibilities: [
      "Mapped the customer journey across discovery, model research, comparison, configuration, financing, inventory, dealer, and ownership tasks.",
      "Reorganized the information architecture and established consistent navigation, card, form, pricing, and call-to-action patterns.",
      "Designed 18 high-fidelity screens, including a mobile configurator, and connected the major paths in Figma.",
      "Developed a proposed SEO, paid-media, local-discovery, conversion, and analytics plan around the redesigned customer journey.",
    ],
    keyConceptsTitle: "One system for the full vehicle journey.",
    keyConcepts: [
      { title: "Discover", body: "Lead with recognizable models, useful starting prices, and simple filters so shoppers can narrow the range quickly." },
      { title: "Compare", body: "Keep trim differences, key specifications, and pricing visible at the point where people are making trade-offs." },
      { title: "Configure", body: "Show selected colour, package, interior, accessories, and estimated price together instead of hiding the total across steps." },
      { title: "Continue", body: "Connect the purchase journey to financing, inventory, test drives, dealer support, service booking, and a customer account." },
    ],
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
    designProcessTitle: "From complex sitemap to responsive product system.",
    designProcess: [
      { phase: "01 · Audit", title: "Identify the high-friction decisions", body: "Reviewed the major tasks in an automotive journey and prioritized the information needed to discover, compare, configure, finance, and locate a vehicle." },
      { phase: "02 · Structure", title: "Map one connected flow", body: "Organized the site around vehicles, shopping tools, dealers, service, and ownership while defining a clear next action for each screen." },
      { phase: "03 · Systemize", title: "Create reusable interface patterns", body: "Built consistent headers, vehicle cards, comparison modules, pricing panels, forms, filters, and action states with a restrained red, black, and white system." },
      { phase: "04 · Adapt", title: "Carry the decisions to mobile", body: "Condensed the configurator into a focused mobile flow while preserving option visibility, estimated price, and progress through the build." },
    ],
    marketingStrategy: {
      title: "Turn vehicle research into measurable local demand.",
      intro:
        "The marketing layer treats the redesigned website as the centre of an acquisition and lead-generation system. These are proposed campaign and measurement recommendations—not live Mitsubishi results.",
      funnel: [
        { step: "01", title: "Reach", body: "Use model-led Search and Meta creative to introduce the right vehicle, offer, and local reason to click." },
        { step: "02", title: "Consider", body: "Match each campaign to a useful model, comparison, PHEV education, or ownership-cost landing experience." },
        { step: "03", title: "Convert", body: "Move qualified visitors into build-and-price, inventory, financing, dealer, and test-drive actions." },
        { step: "04", title: "Retain", body: "Use the customer account, service reminders, warranty content, and dealer communication to support ownership." },
      ],
      channels: [
        { title: "SEO & content", body: "Build search visibility around model pricing, trim comparisons, PHEV range and charging, incentives, ownership costs, and local inventory. Strengthen titles, internal links, vehicle schema, dealer schema, and Core Web Vitals." },
        { title: "Google Search", body: "Capture high-intent searches such as ‘Outlander PHEV price,’ ‘Mitsubishi SUV Vancouver,’ and ‘book Mitsubishi test drive,’ then send each query to its closest matching page and action." },
        { title: "Meta retargeting", body: "Retarget model viewers, comparison users, and incomplete configurations with the exact vehicle or feature they explored, while excluding completed test-drive and dealer leads." },
        { title: "Local dealer growth", body: "Connect optimized dealer pages and Google Business Profiles to live inventory, directions, calls, test drives, and service booking with consistent details and UTM-tagged links." },
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
      "Inventory search, dealer locator, and dealer-detail flows",
      "Test-drive, service-booking, and customer-account screens",
      "Responsive mobile configurator and high-fidelity Figma prototype",
      "SEO, paid-media, local dealer, conversion, and analytics growth recommendations",
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
      "The result is an 18-screen high-fidelity concept that connects the full customer journey through one consistent interface system. It demonstrates clearer hierarchy and continuity across key tasks, but it has not been validated with Mitsubishi customers or live conversion data.",
    reflection:
      "This project strengthened my ability to design a large product ecosystem instead of a single page. The next step would be task-based usability testing with shoppers and owners—especially around model comparison, price configuration, dealer inventory, and service booking—before treating the proposed improvements as proven outcomes.",
    process: [
      "Mapped the automotive journey from model discovery to ownership support.",
      "Designed a reusable responsive system across 18 screens.",
      "Connected product, pricing, dealer, and service actions into one flow.",
    ],
  },
  {
    slug: "tastebuds",
    title: "TasteBuds Vancouver",
    discipline: "social",
    disciplineLabel: "Content / Social",
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
    discipline: "design",
    disciplineLabel: "UI/UX Case Study",
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
      "Salon bookings are often scattered across phone calls, direct messages, and separate forms, leaving clients unsure about services, prices, stylists, and whether an appointment is confirmed. The challenge was to bring those decisions into one calm mobile flow without losing the salon's personal, premium feeling.",
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
    process: [
      "Restructured discovery and booking flow.",
      "Built a premium editorial-inspired interface.",
      "Designed key mobile-first booking screens.",
    ],
  },
  {
    slug: "group-fitness-app",
    title: "FitArray Fitness App Prototype",
    discipline: "design",
    disciplineLabel: "UI/UX Case Study",
    type: "Interactive Figma prototype",
    summary:
      "A mobile fitness experience that helps users discover exercises, build workouts, follow active sessions, and understand their progress in one focused app.",
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
export const skillGroups = [
  {
    title: "Marketing & Brand",
    skills: ["Campaign Strategy", "Brand Positioning", "Google & Meta Ads", "SEO & Local Search"],
  },
  {
    title: "UI/UX Design",
    skills: ["Figma", "User Flows", "Wireframing", "Interactive Prototyping"],
  },
  {
    title: "Content & Social",
    skills: ["Content Planning", "Social Strategy", "Copywriting", "Email Marketing"],
  },
  {
    title: "Tools & Measurement",
    skills: ["Adobe Creative Suite", "GA4", "Search Console", "HTML & CSS"],
  },
];
