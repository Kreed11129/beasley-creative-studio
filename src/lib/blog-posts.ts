import journalBrand from "@/assets/journal-brand.webp.asset.json";
import journalIdentity from "@/assets/journal-identity.webp.asset.json";
import { ttWorkspace, ttTickets } from "@/lib/site-data";

export type BlogBlock =
  | { kind: "p"; text: string }
  | { kind: "h3"; text: string }
  | { kind: "ul"; items: string[] }
  | { kind: "ol"; items: string[] }
  | { kind: "image"; src: string; alt: string }
  | { kind: "cta"; heading: string; label: string };

export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  author: string;
  category: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  readTime: string;
  blocks: BlogBlock[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "5-signs-your-small-business-has-outgrown-its-brand-identity",
    title: "5 Signs Your Small Business Has Outgrown Its Brand Identity (And How to Fix It)",
    date: "May 28",
    author: "Tykira",
    category: "Brand strategy",
    excerpt: "Your business has grown. Discover what’s holding your brand back—and where to go next.",
    image: journalBrand.url,
    imageAlt: "Article cover for a piece on outgrowing your brand identity",
    readTime: "6 min read",
    blocks: [
      {
        kind: "p",
        text: "Every successful business reaches a critical turning point. What began as a lean, agile operation with foundational visuals has likely grown into an established enterprise with refined services, proven results, and higher-value offerings.",
      },
      {
        kind: "p",
        text: "However, as a company matures, its visual identity often remains frozen in its early stages.",
      },
      {
        kind: "p",
        text: "When your visual presentation no longer mirrors the true caliber of your work, it creates friction for prospective clients. Upgrading your visual strategy isn't about discarding your history—it's about honoring how far your business has come and aligning your brand presence with where you are going next.",
      },
      { kind: "h3", text: "1. Your Visuals Reflect Where You Started, Not Where You Are" },
      {
        kind: "p",
        text: "In the early stages of a business, visual assets are often created quickly to support a initial launch. Whether using temporary logo designs, standard stock templates, or entry-level creative work, the goal was simple: get to market.",
      },
      {
        kind: "p",
        text: "As your business scales, those early assets can begin to limit your reach. Leaving outdated visual markers in place can accidentally misrepresent your scale and professionalism.",
      },
      { kind: "p", text: "_What this looks like in practice:_" },
      {
        kind: "ul",
        items: [
          "**Generic visual elements:** Stock icons or templates that resemble numerous other brands in your industry.",
          "**Technical limitations:** Low-resolution files that blur or distort when scaled up for print banners, packaging, or high-definition screens.",
          "**Legibility challenges:** Color choices or font combinations that lack sufficient contrast on modern mobile devices.",
        ],
      },
      {
        kind: "p",
        text: "**Strategic Solution:** Transition to a tailored, comprehensive visual identity system. Custom branding designed specifically around your business goals builds immediate market authority and provides responsive, high-resolution vector files built for every medium.",
      },
      { kind: "h3", text: "2. Your Brand Presence Lacks Consistency Across Channels" },
      {
        kind: "p",
        text: "Modern clients interact with your business across multiple touchpoints—from your social channels and website to email newsletters, proposal decks, and physical print collateral.",
      },
      {
        kind: "p",
        text: "When your visual identity varies across these touchpoints, it creates a subtle sense of disconnect. Visual consistency is a key component of market credibility; uniform presentation signals reliability and attention to detail.",
      },
      { kind: "p", text: "_What this looks like in practice:_" },
      {
        kind: "ul",
        items: [
          "**Mismatched color palettes** (your Instagram posts use neon pink, but your website is pastel blue).",
          "**Competing typography** where your headings change fonts on every page.",
          "**Scattered marketing materials** that lack a unified template system, making every flyer or PDF look like an isolated project.",
        ],
      },
      {
        kind: "p",
        text: "**Strategic Solution:** Implement a centralized **Brand Style Guide**. Establishing clear guidelines for typography, color standards (HEX, RGB, CMYK), image usage, and reusable layouts ensures that every client touchpoint reinforces a cohesive brand identity.",
      },
      { kind: "image", src: ttWorkspace.url, alt: "Timeless Treasure designer workspace with branded materials in warm tones" },
      { kind: "h3", text: "3. Your Brand Visuals No Longer Align with Your Target Audience" },
      {
        kind: "p",
        text: "As your business grows, your ideal client profile often evolves. You may offer higher-tier services, target larger organizational clients, or operate at a higher price point than when you launched.",
      },
      {
        kind: "p",
        text: "If your visual identity still reflects an earlier business model, it may fail to connect with the more sophisticated audience you are aiming to reach today.",
      },
      { kind: "p", text: "_What this looks like in practice:_" },
      {
        kind: "ul",
        items: [
          "**Audience mismatch:** Your visuals appeal primarily to budget-focused inquiries rather than clients seeking high-value expertise.",
          "**Positioning gaps:** A noticeable difference between the premium quality of your work and the impression given by your online channels.",
          "**Inquiries lacking fit:** Prospects reaching out often misunderstand your scope of work or market positioning.",
        ],
      },
      {
        kind: "p",
        text: "**Strategic Solution:** Realign your visual identity with your current strategic goals. A targeted brand refresh updates your visual language to reflect your market position and communicate value to your ideal clientele.",
      },
      { kind: "h3", text: "4. Your Core Value Proposition Isn't Immediately Clear" },
      {
        kind: "p",
        text: "When a prospective client lands on your website or reviews your capabilities deck, they should understand what you do and the value you deliver within seconds.",
      },
      {
        kind: "p",
        text: "If your brand identity or layout is overly complex, outdated, or cluttered, visitors have to work harder to understand your key offerings. In competitive markets, unclear positioning often leads prospects to seek alternatives.",
      },
      { kind: "p", text: "_What this looks like in practice:_" },
      {
        kind: "ul",
        items: [
          "**High site bounce rates:** Visitors leave key landing pages without engaging further or reaching out.",
          "**Consultation confusion:** Prospective clients frequently ask basic questions about your core offerings during initial discovery calls.",
          "**Dense layout structure:** Walls of text paired with unstructured imagery that fail to highlight your key differentiators.",
        ],
      },
      {
        kind: "p",
        text: "**Strategic Solution:** Streamline your visual hierarchy. Thoughtful graphic design paired with clear structural layouts guides the reader's attention to key messages, portfolio proof, and call-to-action points naturally.",
      },
      { kind: "h3", text: "5. You Lack Confidence in Your Branded Assets" },
      {
        kind: "p",
        text: "Your brand identity should be a strong strategic asset that supports your sales process.",
      },
      {
        kind: "p",
        text: "If you feel hesitant to direct key prospects to your website, delay sending out media kits, or feel that your marketing materials don't capture the full capability of your team, your visual identity is working against your growth goals rather than supporting them.",
      },
      { kind: "image", src: ttTickets.url, alt: "Timeless Treasure tickets in a warm workspace setting" },
      { kind: "h3", text: "What to Do If Your Brand Is Outdated" },
      {
        kind: "p",
        text: "If these warning signs sound a little too familiar, it’s likely time for a brand refresh or a complete rebrand. A proper rebrand isn't just slapping a new coat of paint on a logo; it means looking inward at your small business's core values, and looking outward at the real, unmet needs of the people you serve.",
      },
      {
        kind: "p",
        text: "Before you reach out to a designer, take some time to think through these **3 high-level questions** to prepare for the process:",
      },
      {
        kind: "ol",
        items: [
          "Who is my ideal customer _today_ vs. when I first started?",
          "What is the single biggest pain point my business solves for them?",
          "What three words do I want people to use when describing my brand’s look and feel?",
        ],
      },
      { kind: "h3", text: "Transform Your Brand Identity to Reflect Your True Value" },
      {
        kind: "p",
        text: "At **Beasley Brands**, we help growing businesses align their visual identity with their true market value. Whether you need custom print collateral, refined digital assets, a distinctive logo, or a complete brand transformation, we bring a strategic, goal-oriented approach to every creative project.",
      },
      {
        kind: "p",
        text: "You don't have to navigate a visual transformation alone or guess which strategies will resonate with your audience.",
      },
      {
        kind: "p",
        text: "**Ready to align your visual identity with your business growth?**",
      },
      { kind: "cta", heading: "Ready to align your visual identity with your business growth?", label: "Book a free discovery consultation" },
    ],
  },
  {
    slug: "logo-design-vs-brand-identity",
    title: "Logo Design vs. Brand Identity: What Does Your Business Actually Need?",
    date: "May 28",
    author: "Tykira",
    category: "Design basics",
    excerpt: "Know what you’re investing in before you hire a designer—and choose the right foundation for your business.",
    image: journalIdentity.url,
    imageAlt: "Article cover for a piece on choosing between a logo and a brand identity",
    readTime: "7 min read",
    blocks: [
      { kind: "h3", text: "What Is a Logo?" },
      {
        kind: "p",
        text: "Think of your logo as the point of recognition for your business—the singular visual marker that anchors your presence across your website, social channels, product packaging, and marketing collateral.",
      },
      {
        kind: "p",
        text: "While essential for building immediate brand recall, a logo is ultimately just one piece of a larger puzzle. On its own, it cannot dictate the broader creative direction: the supporting color palettes, typographic hierarchy, imagery style, or design principles that dictate how your brand comes to life across different media.",
      },
      { kind: "h3", text: "What Is a Brand Identity?" },
      {
        kind: "p",
        text: "If a logo serves as the face of your company, your brand identity is its core personality and visual ecosystem. It establishes the holistic aesthetic and tonal direction that governs how your business looks, communicates, and resonates with target audiences.",
      },
      {
        kind: "p",
        text: "While definitions of \"brand identity\" and \"visual identity\" can vary depending on designer jargon, our focus centers on the tangible design systems—from cohesive visual assets to usage guidelines—that ensure your company shows up with clarity, authority, and consistency everywhere it appears.",
      },
      { kind: "h3", text: "What Can a Brand Identity Include?" },
      {
        kind: "p",
        text: "A comprehensive brand identity isn’t a rigid template; it’s a tailored ecosystem designed around your company’s specific touchpoints and growth goals. Depending on your scope, a complete visual identity system typically includes the elements below. Together, these elements form a scalable toolkit that ensures your business presents a cohesive, memorable impression across every channel.",
      },
      {
        kind: "ul",
        items: [
          "**Logo Suite:** A primary mark alongside secondary layouts, sub-marks, and favicons optimized for various spatial constraints.",
          "**Color Palette & Typographic System:** Strategic primary and accent color pairings alongside a clear typographic hierarchy for digital and print execution.",
          "**Art Direction & Imagery:** Clear guidance on photography styles, illustration treatments, and custom iconography to maintain tonal harmony.",
          "**Supporting Graphic Assets:** Proprietary patterns, textures, layout grids, and visual motifs that enrich your brand’s aesthetic.",
          "**Brand Voice & Messaging Framework:** Core personality traits, value propositions, and messaging pillars that align your written tone with your visual identity.",
          "**Comprehensive Brand Guidelines:** A centralized usage rulebook detailing exact specs, clear-space rules, and application examples to maintain brand integrity.",
        ],
      },
      { kind: "h3", text: "The ROI of a Strategic Brand Identity" },
      {
        kind: "p",
        text: "Inconsistent or outdated visuals do more than look unpolished—they actively undermine trust, create friction in the buying process, and make marketing efforts feel disjointed. A strategically executed visual identity aligns your aesthetic with your actual business value, giving Beasley Brands the foundation to craft a presence that resonates directly with your ideal market.",
      },
      {
        kind: "ul",
        items: [
          "**Aligns Visuals with Market Position:** As your offerings mature and specialize, an upgraded visual framework ensures your public perception reflects the premium quality of your work.",
          "**Cultivates Sustained Brand Recall:** Consistent application of signatures, colors, and typography reinforces visual repetition, keeping your business top-of-mind when prospect intent is high.",
          "**Establishes Immediate Quality Expectations:** Strategic aesthetics act as an implicit promise of customer experience, setting accurate baseline expectations before the first conversation even happens.",
          "**Streamlines Design & Content Production:** A defined visual language removes creative guesswork, allowing your team to produce new campaigns, collateral, and digital assets efficiently without reinventing the wheel.",
        ],
      },
      { kind: "h3", text: "Before You Hire a Brand Designer" },
      {
        kind: "p",
        text: "You don’t need a complete brand strategy before your first conversation. Come ready to talk about your business, then use these points to find out whether the designer’s process and services fit your needs.",
      },
      {
        kind: "ol",
        items: [
          "**Define your business and goals** — Be ready to explain what you sell, what has changed as your business has grown, and what you want your identity to help you do. Ask the designer how they learn about a business before they begin designing.",
          "**Understand your customers and what sets you apart** — Think about who you want to reach, what matters to them, and why they might choose your business over another. Ask how the designer uses your audience and what makes your business different to guide their design choices.",
          "**Identify the impression you want to make** — Choose a few traits you want customers to connect with your business, such as warm, expert, or modern. Share any impressions you want to change, and ask the designer how they’ll explain the ideas behind their design direction.",
          "**Identify where you’ll use the identity** — List the places your design needs to work, such as your website, social media, signs, or packaging. Ask which logo versions and file types you’ll receive, and how the design will work across those uses.",
          "**The project scope and process** — Decide whether you need a logo or a fuller visual identity, then ask what each option includes. Confirm the timeline, price, guidelines, revision process, and final files before you begin.",
        ],
      },
      {
        kind: "p",
        text: "You don’t need perfect answers to every point. Your information helps the designer understand your business, and their answers help you decide whether you’ve found the right fit.",
      },
      { kind: "h3", text: "Start Your Brand Identity with Beasley Brands" },
      {
        kind: "p",
        text: "Beasley Brands helps small businesses create logos and visual identities that reflect who they are and what they offer. If you’re ready to talk about your brand identity, book a free consultation with Beasley Brands.",
      },
      { kind: "cta", heading: "Start your project", label: "Book a free consultation" },
    ],
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
