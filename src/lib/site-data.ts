import chewanLineup from "@/assets/chewan-lineup.webp.asset.json";
import chewanDog from "@/assets/chewan-dog.webp.asset.json";
import chewanPackaging from "@/assets/chewan-packaging.webp.asset.json";
import legacyCampaign from "@/assets/legacy-campaign.webp.asset.json";
import legacyBillboard from "@/assets/legacy-billboard.webp.asset.json";
import legacyWebsite from "@/assets/legacy-website.webp.asset.json";
import legacyWorkspace from "@/assets/legacy-workspace.webp.asset.json";
import spiritInstagram from "@/assets/spirit-instagram.webp.asset.json";
import spiritBanner from "@/assets/spirit-banner.webp.asset.json";
import spiritPoster from "@/assets/spirit-poster.webp.asset.json";
import lunoraProducts from "@/assets/lunora-products.webp.asset.json";
import lunoraInHand from "@/assets/lunora-in-hand.webp.asset.json";
import lunoraRange from "@/assets/lunora-range.webp.asset.json";
import seaatCards from "@/assets/seaat-cards.webp.asset.json";
import levelupBars from "@/assets/levelup-bars.webp.asset.json";
import blackVisionaries from "@/assets/black-visionaries.webp.asset.json";
import blackVisionariesEvent from "@/assets/black-visionaries-event.webp.asset.json";
import bvGroup from "@/assets/bv-group.webp.asset.json";
import ecsuFlyer from "@/assets/ecsu-flyer.webp.asset.json";
import pkgCards from "@/assets/pkg-cards.webp.asset.json";
import portdiscoverFlyer from "@/assets/portdiscover-flyer.webp.asset.json";
import ttWorkspace from "@/assets/tt-workspace.webp.asset.json";
import ttTickets from "@/assets/tt-tickets.webp.asset.json";
import tykiraClipboard from "@/assets/tykira-clipboard.webp.asset.json";
import tykiraDesk from "@/assets/tykira-desk.webp.asset.json";
import tykiraHeadshot from "@/assets/tykira-headshot.webp.asset.json";
import tykiraPortrait from "@/assets/tykira-portrait.webp.asset.json";
import validatekBrochure from "@/assets/validatek-brochure.webp.asset.json";
import shanynPortrait from "@/assets/shanyn-testimonial.webp.asset.json";
import annemariePortrait from "@/assets/annemarie-testimonial.webp.asset.json";
import cydneyPortrait from "@/assets/cydney-testimonial.webp.asset.json";

export const bookingUrl = "https://calendly.com/beasleybrands/30min";

export const navLinks = [
  { label: "Work", to: "/work" },
  { label: "Services", to: "/services-logo-packages" },
  { label: "About", to: "/about" },
  { label: "Journal", to: "/blog" },
  { label: "Contact", to: "/contact" },
] as const;

export const workGallery = [
  {
    client: "Chewan",
    items: [
      { src: chewanLineup.url, alt: "Three bags of Chewan Super Premium Dog Food in blue, green, and pink packaging on a kitchen countertop." },
      { src: chewanDog.url, alt: "A happy dog wearing a colorful fluffy wig, holding a bag of Chewan Super Premium Dog Food in a home kitchen." },
      { src: chewanPackaging.url, alt: "A bag of Chewan Super Premium Dog Food, vegetarian recipe, with a bowl of colorful dry dog food and a dog toy." },
    ],
  },
  {
    client: "Legacy Scholars",
    items: [
      { src: legacyCampaign.url, alt: "Promotional flyer layout for Legacy Scholars Collective with images of diverse young adults and text about scholarships and resume coaching." },
      { src: legacyBillboard.url, alt: "Billboard promoting Legacy Scholars Collective featuring a smiling woman with glasses and a graduate holding a diploma." },
      { src: legacyWebsite.url, alt: "Close-up of a red laptop on a white surface displaying a Legacy Scholars website with a group of diverse women talking." },
    ],
  },
  {
    client: "Spirit Airlines",
    items: [
      { src: spiritInstagram.url, alt: "A smartphone displaying the Spirit Airlines Instagram profile, mounted on a black stand against a purple background." },
      { src: spiritBanner.url, alt: "Travel banners with a yellow airplane, suitcase, backpack, and headphones displaying Catch the Spirit against a purple sky." },
      { src: spiritPoster.url, alt: "Airport advertisement featuring a yellow Spirit Airlines airplane flying through a pink and orange sunset sky." },
    ],
  },
  {
    client: "Lunora",
    items: [
      { src: lunoraProducts.url, alt: "Skincare and aromatherapy products including a body lotion, exfoliating body scrub, and cherry blossom essential oil." },
      { src: lunoraInHand.url, alt: "Person holding a jar labeled LUNORA with iridescent, metallic-painted hands and arms." },
      { src: lunoraRange.url, alt: "A collection of Lunora skincare products on a display with a colorful artistic face illustration in the background." },
    ],
  },
  {
    client: "SEAAT",
    items: [
      { src: seaatCards.url, alt: "Business cards for SEAAT Business Development Group arranged on a table, featuring Shannon Lloyd Gibson, senior consultant." },
    ],
  },
  {
    client: "Level 1UP",
    items: [
      { src: levelupBars.url, alt: "Three Leve1UP protein bars in chocolate chip, peanut butter, and strawberry lying on a yellow textured surface." },
    ],
  },
  {
    client: "Black Visionaries",
    items: [
      { src: blackVisionaries.url, alt: "Graphic displaying the Black Visionaries Executive Board with photos and names of three members on a purple geometric background." },
      { src: blackVisionariesEvent.url, alt: "Group of people on stage during a Black Visionaries event with a quote about the Board of Directors." },
    ],
  },
  {
    client: "ECSU Mini-Grants",
    items: [
      { src: ecsuFlyer.url, alt: "Brochures from Elizabeth City State University about funding opportunity resources and a mini-grant program." },
    ],
  },
];

export const homepageProjects = [
  {
    name: "Chewan",
    discipline: "Packaging · Art direction",
    description: "A little more personality on the pet food aisle.",
    image: chewanLineup.url,
    alt: "Three Chewan premium dog food bags in bright blue, green, and pink packaging",
    className: "project-wide project-chewan",
    number: "01",
  },
  {
    name: "Legacy Scholars",
    discipline: "Campaign · Print · Digital",
    description: "A scholarship story made impossible to miss.",
    image: legacyBillboard.url,
    alt: "Legacy Scholars Collective billboard campaign overlooking the landscape",
    className: "project-portrait project-legacy",
    number: "02",
  },
  {
    name: "Spirit Airlines",
    discipline: "Social · Campaign",
    description: "Bringing the Spirit of travel into every scroll.",
    image: spiritInstagram.url,
    alt: "Spirit Airlines Instagram brand campaign displayed on a smartphone",
    className: "project-portrait project-spirit",
    number: "03",
  },
  {
    name: "Lunora",
    discipline: "Visual identity · Packaging",
    description: "A sensorial skincare world, from label to shelf.",
    image: lunoraProducts.url,
    alt: "Lunora skincare and aromatherapy products in coordinated packaging",
    className: "project-wide project-lunora",
    number: "04",
  },
  {
    name: "SEAAT",
    discipline: "Identity · Collateral",
    description: "A confident identity for big-picture thinkers.",
    image: seaatCards.url,
    alt: "SEAAT Business Development Group identity across business cards",
    className: "project-wide project-seaat",
    number: "05",
  },
  {
    name: "Level 1UP",
    discipline: "Packaging · Brand design",
    description: "An energetic take on a protein-bar favorite.",
    image: levelupBars.url,
    alt: "Level 1UP protein bars in three flavors on a bold yellow background",
    className: "project-portrait project-levelup",
    number: "06",
  },
  {
    name: "Black Visionaries",
    discipline: "Campaign · Editorial",
    description: "Putting influential voices front and center.",
    image: blackVisionaries.url,
    alt: "Black Visionaries executive board editorial campaign graphic",
    className: "project-portrait project-visionaries",
    number: "07",
  },
  {
    name: "ECSU Mini-Grants",
    discipline: "Print · Campaign",
    description: "Making new opportunities feel within reach.",
    image: legacyCampaign.url,
    alt: "Legacy Scholars promotional campaign materials and social graphics",
    className: "project-wide project-ecsu",
    number: "08",
  },
];

export const homepageServices = [
  {
    number: "01",
    name: "Logo & identity",
    detail: "A strategic visual foundation built for recognition, consistency, and long-term growth.",
    to: "/services-logo-packages",
  },
  {
    number: "02",
    name: "Graphic design",
    detail: "Polished print and digital materials that keep your marketing clear and unmistakably on-brand.",
    to: "/services-graphic-design",
  },
  {
    number: "03",
    name: "Packaging",
    detail: "Structure, labels, and shelf presence designed to earn attention at the point of sale.",
  },
  {
    number: "04",
    name: "Digital design",
    detail: "Social campaigns, decks, and web assets that scale across every channel.",
  },
];

export const matchFit = [
  {
    number: "01",
    title: "You want a creative partner.",
    text: "You value collaboration and want a designer who welcomes your ideas while helping you explore what best represents your business.",
  },
  {
    number: "02",
    title: "You’re thinking ten steps ahead.",
    text: "You want a solid visual foundation that makes your marketing easier to create, manage, and keep consistent as your business grows.",
  },
  {
    number: "03",
    title: "You’re ready to hand it over.",
    text: "You’ve taken DIY or AI design as far as you can and want a professional designer to bring more intention, polish, and consistency to your business.",
  },
];

export const testimonials = [
  {
    name: "Shanyn Gibson",
    detail: "2 Referrals · Brand Identity Client",
    quote:
      "From the very beginning, the process was clearly outlined and incredibly seamless, which made the entire experience easy and enjoyable. With just a few minor edits, we were able to land exactly where we needed to be and I was so impressed that I extended the engagement for additional services. Since then, I’ve referred Beasley Brands to several clients and continue to work with Tykira to this day.",
    image: shanynPortrait.url,
    alt: "Shanyn Gibson",
  },
  {
    name: "Annemarie Delgado",
    detail: "8 Graphic Design Projects",
    quote:
      "Her ability to align creative materials with the goals of our department has strengthened both our communication efforts and internal operations. Tykira is a creative intuitive force who is both conscientious and timely. She is responsive to our needs and has produced many materials for us on very short notice. Our constituents continually comment on the impressive materials we have shared with them thanks to Beasley Brands.",
    image: annemariePortrait.url,
    alt: "Annemarie Delgado",
  },
  {
    name: "Cydney Walton",
    detail: "3 Referrals · 4 Graphic Design Projects",
    quote:
      "Tykira has a creative eye that far surpasses her years of professional experience. She has consistently elevated our marketing visuals into polished, brand-aligned assets, improving the consistency and effectiveness of our marketing efforts. I would highly recommend her to any team looking for a dependable and talented design partner.",
    image: cydneyPortrait.url,
    alt: "Cydney Walton",
  },
];

export const logoPackages = [
  {
    name: "Logo Essentials",
    number: "Package 01",
    image: pkgCards.url,
    alt: "Logo package presentation cards arranged on a surface",
    intro:
      "For small businesses and startups ready to make a strong first impression, we create logos that reflect your vision and help customers recognize your business. It’s a focused starting point for business owners who want to introduce themselves with confidence and establish a professional presence.",
    includes: [
      "3 logo concepts – 1 finalized logo",
      "Full Logo Suite (Primary mark, secondary marks, and submarks in full color, black, and white across print & web file formats)",
      "3 Core brand colors",
      "Custom image mood board",
      "Visual Direction Sheet (A quick-start guide to using your logo and colors consistently)",
    ],
    weeks: "2–3 weeks",
  },
  {
    name: "Logo & Visual Identity",
    number: "Package 02",
    image: legacyWorkspace.url,
    alt: "Legacy Scholars celebration branding materials arranged on a workspace",
    intro:
      "For business owners ready to bring their whole brand together, we create a cohesive visual identity that expresses what makes your business distinct. Every design decision supports a consistent presence, helping customers recognize you wherever they encounter your brand and giving you clear direction as your business grows.",
    includes: [
      "3 logo concepts – 1 finalized logo",
      "Full Logo Suite (primary mark, secondary marks, and logo mark in full color and white across print & web file formats)",
      "Expanded Brand Color Palette (5+ colors)",
      "Typography System (Primary & secondary font pairings)",
      "Photography & Imagery Guide",
      "Comprehensive Visual Identity Manual",
      "3 Launch-ready marketing assets of your choice (with print vendor coordination included)",
    ],
    weeks: "4–6 weeks",
  },
];

export const faqLogoPackages = [
  {
    question: "How do I know which logo package is right for my business?",
    answer:
      "The right package depends on your goals, budget, and what you need to launch or grow your business. During your consultation, we’ll talk through your vision and whether you’re starting from scratch or updating an existing brand, so I can recommend the best fit. You don’t need to choose a package before we talk.",
  },
  {
    question: "What is your design style, and can you design for my industry?",
    answer:
      "My work emphasizes clarity, thoughtful details, and a polished presentation, but the visual direction is shaped around your business and audience. Explore my portfolio to get a feel for my approach, and we’ll use your consultation to determine whether we’re a good fit.",
  },
  {
    question: "How long does a logo design project take?",
    answer:
      "Plan for approximately 2–3 weeks for Logo Essentials and 4–6 weeks for Logo + Visual Identity, beginning on your scheduled project start date. Your timeline is confirmed before booking and depends on timely feedback and the agreed scope.",
  },
  {
    question: "Can you refresh my existing logo, or do I need to start from scratch?",
    answer:
      "You don’t have to start over if your current logo has elements worth keeping. During your consultation, we’ll discuss what’s working, what needs improvement, and whether a refresh or a new direction would better support your business.",
  },
  {
    question: "How do you use AI in your design process, and can I share AI-generated inspiration?",
    answer:
      "Yes—you’re welcome to share AI-generated images to help communicate your ideas. AI may support early brainstorming or exploration, while your final logo is developed and refined by me as vector artwork for practical use across your business.",
  },
  {
    question: "What happens if I don’t love the initial logo concepts?",
    answer:
      "Your feedback helps identify what needs to change and why, so we can refine the direction together. Logo Essentials includes two revision rounds, and Logo + Visual Identity includes four; additional concepts or a substantial change to the agreed direction may require a separate quote.",
  },
  {
    question: "Will I own my final logo and have What happens if I need to pause or cancel my project?",
    answer:
      "Please reach out as soon as your plans change so we can discuss next steps. Payments for completed work are nonrefundable, and any remaining balance or refund is determined by your agreement and the work completed; paused projects resume based on availability.",
  },
];

export const graphicDesignServices = [
  {
    eyebrow: "One-off graphic design",
    name: "Print & Digital Design",
    image: chewanLineup.url,
    alt: "Three colorful bags of Chewan dog food on a kitchen countertop featuring grain-free beef, vegetarian recipe, and chicken & rice formulas.",
    text: "Get custom designs that complement your brand and are ready to use online or in print. Your project includes the agreed-upon deliverables, one revision round, and final files sized and prepared for their intended use. I can also coordinate printing for you, with production and shipping quoted separately. Your deliverables, timeline, and total cost are confirmed before booking.",
    cta: "Start your project",
  },
  {
    eyebrow: "Fast turnaround projects",
    name: "Weekend Design Sprints",
    image: bvGroup.url,
    alt: "Group of diverse people at a conference event, smiling and engaging, with a purple background and Black Visionaries Executive Board text.",
    text: "Reserve a focused weekend of design time to complete an agreed-upon set of priority materials. We’ll finalize your priorities and collect your content on Thursday, design Friday through Saturday, and incorporate one consolidated round of feedback before delivering your final files on Sunday. Scope and pricing are confirmed before booking, and you’ll need to be available for Saturday feedback. Printing and shipping are separate.",
    cta: "Get a custom quote",
  },
];

export const graphicDesignWork = [
  { src: legacyCampaign.url, alt: "Social flyers for Legacy Scholars Collective featuring images of diverse young adults and information about scholarships and resume coaching sessions." },
  { src: validatekBrochure.url, alt: "Brochure for Validatek featuring company overview, solutions, and major missions." },
  { src: portdiscoverFlyer.url, alt: "Flyer for Port Discover featuring a smiling young girl with natural hair, green leaves, a white vase, and a black camera." },
];

export const faqGraphicDesign = [
  {
    question: "What types of print and digital materials can you design?",
    answer:
      "I design materials such as flyers, brochures, business cards, signage, social media graphics, presentations, and digital banners. Whether you need one piece or a coordinated set, we’ll confirm the right scope during your consultation.",
  },
  {
    question: "What is the difference between a regular design project and a Weekend Design Sprint?",
    answer:
      "A regular project follows a schedule built around a defined set of deliverables. A Weekend Design Sprint reserves focused design time Friday through Sunday for an agreed priority list, with a Thursday kickoff, Saturday feedback, and Sunday delivery; it does not include unlimited requests.",
  },
  {
    question: "Can you match my existing brand’s style?",
    answer:
      "Yes—I can work within your existing logo, colors, fonts, and brand guidelines to create materials that feel consistent with your business. The goal is to help each new piece fit naturally with the brand you’ve already built.",
  },
  {
    question: "Can I book graphic design services if I don’t have a full brand identity?",
    answer:
      "Yes—you don’t need a complete brand identity to commission a flyer, presentation, or other individual piece. We can establish a visual direction for that project, and I’ll let you know if developing your brand foundation first would be a better investment.",
  },
  {
    question: "What is your typical turnaround time?",
    answer:
      "Most individual design projects take approximately 5–10 business days from the scheduled start date, while larger or multi-piece projects require more time. Weekend Design Sprints run Friday through Sunday following Thursday’s kickoff; printing and shipping require additional time.",
  },
  {
    question: "Do you handle printing, or will I need to arrange that myself?",
    answer:
      "I can coordinate printing for your project, including helping you select suitable sizes, materials, and finishes. Printing and shipping are quoted separately from design unless your proposal states otherwise, and you’re also welcome to use your own printer.",
  },
  {
    question: "What happens if I need to pause or cancel my project?",
    answer:
      "Please contact me promptly if your plans change; payments for completed work are nonrefundable, and other charges or refunds follow your agreement. Because Weekend Design Sprints reserve dedicated time, rescheduling depends on availability, and missing the agreed content or feedback deadlines may affect delivery.",
  },
];

export { ttWorkspace, ttTickets, tykiraClipboard, tykiraDesk, tykiraHeadshot, tykiraPortrait, pkgCards };
