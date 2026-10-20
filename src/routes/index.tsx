import { useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import chewanLineup from "@/assets/chewan-lineup.webp.asset.json";
import chewanDog from "@/assets/chewan-dog.webp.asset.json";
import legacyCampaign from "@/assets/legacy-campaign.webp.asset.json";
import legacyBillboard from "@/assets/legacy-billboard.webp.asset.json";
import legacyWebsite from "@/assets/legacy-website.webp.asset.json";
import spiritInstagram from "@/assets/spirit-instagram.webp.asset.json";
import spiritBanner from "@/assets/spirit-banner.webp.asset.json";
import lunoraProducts from "@/assets/lunora-products.webp.asset.json";
import lunoraInHand from "@/assets/lunora-in-hand.webp.asset.json";
import seaatCards from "@/assets/seaat-cards.webp.asset.json";
import levelupBars from "@/assets/levelup-bars.webp.asset.json";
import blackVisionaries from "@/assets/black-visionaries.webp.asset.json";
import ecsuFlyer from "@/assets/ecsu-flyer.webp.asset.json";
import tykiraHeadshot from "@/assets/tykira-headshot.webp.asset.json";
import shanynPortrait from "@/assets/shanyn-testimonial.webp.asset.json";
import annemariePortrait from "@/assets/annemarie-testimonial.webp.asset.json";
import cydneyPortrait from "@/assets/cydney-testimonial.webp.asset.json";
import journalBrand from "@/assets/journal-brand.webp.asset.json";
import journalIdentity from "@/assets/journal-identity.webp.asset.json";

const bookingUrl = "https://calendly.com/beasleybrands/30min";

const projects = [
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

const reviews = [
  {
    name: "Shanyn Gibson",
    detail: "Brand identity client · 2 referrals",
    quote:
      "From the very beginning, the process was clearly outlined and incredibly seamless, which made the entire experience easy and enjoyable. With just a few minor edits, we landed exactly where we needed to be.",
    image: shanynPortrait.url,
    alt: "Shanyn Gibson",
  },
  {
    name: "Annemarie Delgado",
    detail: "8 graphic design projects",
    quote:
      "Her ability to align creative materials with the goals of our department has strengthened both our communication efforts and internal operations. Tykira is a creative intuitive force who is conscientious and timely.",
    image: annemariePortrait.url,
    alt: "Annemarie Delgado",
  },
  {
    name: "Cydney Walton",
    detail: "3 referrals · 4 graphic design projects",
    quote:
      "Tykira has a creative eye that far surpasses her years of professional experience. She has consistently elevated our marketing visuals into polished, brand-aligned assets.",
    image: cydneyPortrait.url,
    alt: "Cydney Walton",
  },
];

const services = [
  { number: "01", name: "Logo & identity", detail: "A strategic visual foundation built for recognition, consistency, and long-term growth." },
  { number: "02", name: "Graphic design", detail: "Polished print and digital materials that keep your marketing clear and unmistakably on-brand." },
  { number: "03", name: "Packaging", detail: "Structure, labels, and shelf presence designed to earn attention at the point of sale." },
  { number: "04", name: "Digital design", detail: "Social campaigns, decks, and web assets that scale across every channel." },
];

const articles = [
  {
    category: "Brand strategy",
    time: "6 min read",
    title: "5 signs your small business has outgrown its brand identity",
    image: journalBrand.url,
    alt: "Tykira discussing brand identity in a studio interview",
    url: "https://www.beasleybrands.com/blog/Blog%20Post%20Title%20One-3zaa9-zlxng-xbkmm-l67dj",
  },
  {
    category: "Design basics",
    time: "7 min read",
    title: "Logo design vs. brand identity: what do you actually need?",
    image: journalIdentity.url,
    alt: "Studio portrait accompanying an article about logos and brand identity",
    url: "https://www.beasleybrands.com/blog/blog-post-title-two-t5my5-k4xmd-47fwc-t6a9n",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Beasley Brands — Strategic Brand & Graphic Design" },
      {
        name: "description",
        content:
          "Independent graphic design studio in northeastern North Carolina creating strategic brand identities, packaging, and graphic design for ambitious businesses.",
      },
      { property: "og:title", content: "Beasley Brands — Strategic Brand & Graphic Design" },
      {
        property: "og:description",
        content: "Strategic visual identities and graphic design for businesses ready to look as remarkable as the work they do.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const heroImageRef = useRef<HTMLImageElement>(null);
  const pointerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealNodes = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -36px 0px" },
    );
    revealNodes.forEach((node) => observer.observe(node));

    let frame = 0;
    const updateMotion = (event?: MouseEvent) => {
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        if (progressRef.current) {
          progressRef.current.style.width = `${scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0}%`;
        }
        if (!reducedMotion && heroImageRef.current) {
          heroImageRef.current.style.setProperty("--hero-parallax", `${Math.min(window.scrollY * 0.1, 75)}px`);
        }
        if (event && pointerRef.current && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
          pointerRef.current.style.setProperty("--pointer-x", `${event.clientX - 18}px`);
          pointerRef.current.style.setProperty("--pointer-y", `${event.clientY - 18}px`);
        }
      });
    };
    const onPointerMove = (event: MouseEvent) => updateMotion(event);
    window.addEventListener("scroll", updateMotion, { passive: true });
    window.addEventListener("resize", updateMotion, { passive: true });
    window.addEventListener("mousemove", onPointerMove, { passive: true });
    updateMotion();

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateMotion);
      window.removeEventListener("resize", updateMotion);
      window.removeEventListener("mousemove", onPointerMove);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="page-grain overflow-hidden bg-background text-foreground">
      <div ref={progressRef} aria-hidden="true" className="fixed left-0 top-0 z-[60] h-[3px] bg-accent transition-[width] duration-150" style={{ width: "0%" }} />
      <div ref={pointerRef} aria-hidden="true" className="cursor-orbit pointer-events-none fixed left-0 top-0 z-[70] hidden h-9 w-9 items-center justify-center rounded-full bg-accent text-foreground shadow-soft md:flex">
        <ArrowUpRight className="h-4 w-4" />
      </div>

      <header className="relative z-50 border-b border-border/70 bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex min-h-[74px] max-w-[1440px] items-center justify-between px-5 md:px-10 xl:px-16">
          <a href="#top" aria-label="Beasley Brands home" className="flex items-center gap-2.5 font-semibold">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">B.</span>
            <span className="leading-tight">BEASLEY<br className="hidden sm:block" /> BRANDS<span className="hidden sm:inline">®</span></span>
          </a>
          <nav aria-label="Main navigation" className="hidden items-center gap-8 text-sm md:flex">
            <a className="nav-link" href="#work">Work</a>
            <a className="nav-link" href="#services">Services</a>
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href="#journal">Journal</a>
          </nav>
          <div className="hidden md:block">
            <Button asChild variant="default" className="rounded-full px-5">
              <a href={bookingUrl} target="_blank" rel="noreferrer">Let’s talk <ArrowUpRight /></a>
            </Button>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {menuOpen && (
          <nav aria-label="Mobile navigation" className="absolute inset-x-0 top-full border-b border-border bg-background px-5 py-5 shadow-soft md:hidden">
            {[["Work", "#work"], ["Services", "#services"], ["About", "#about"], ["Journal", "#journal"]].map(([label, href]) => (
              <a key={href} onClick={closeMenu} href={href} className="block border-b border-border py-3 text-lg">{label}</a>
            ))}
            <Button asChild className="mt-5 rounded-full px-5">
              <a onClick={closeMenu} href={bookingUrl} target="_blank" rel="noreferrer">Let’s talk <ArrowUpRight /></a>
            </Button>
          </nav>
        )}
      </header>

      <section id="top" className="relative mx-auto grid min-h-[700px] max-w-[1440px] items-center gap-10 px-5 pb-16 pt-14 md:min-h-[790px] md:grid-cols-[1.05fr_.95fr] md:px-10 md:pb-24 md:pt-16 xl:px-16">
        <div className="relative z-10 order-2 md:order-1">
          <p className="reveal eyebrow mb-7 flex items-center gap-3 text-primary"><span className="h-px w-8 bg-primary" />Independent design studio · Northeastern NC</p>
          <h1 className="reveal reveal-delay-1 display-face max-w-[820px] text-[clamp(4rem,8.5vw,8.5rem)] leading-[.88] tracking-normal">
            Easy on the eyes.<br /><span className="text-primary">Hard to forget.</span>
          </h1>
          <p className="reveal reveal-delay-2 mt-8 max-w-[510px] text-lg leading-relaxed text-muted-foreground md:text-xl">
            Strategic visual identities and graphic design for businesses ready to look as remarkable as the work they do.
          </p>
          <div className="reveal reveal-delay-3 mt-9 flex flex-wrap items-center gap-4">
            <Button asChild size="lg" className="rounded-full px-6">
              <a href="#work">Explore work <ArrowDown /></a>
            </Button>
            <a href={bookingUrl} target="_blank" rel="noreferrer" className="link-underline inline-flex items-center gap-2 px-2 py-3 text-sm font-semibold">Start a project <ArrowUpRight className="h-4 w-4" /></a>
          </div>
          <div className="reveal reveal-delay-3 mt-16 flex items-center gap-4 text-xs font-semibold uppercase tracking-[.14em] text-muted-foreground">
            <span className="h-px w-10 bg-border" /> Strategy <span className="text-primary">·</span> Identity <span className="text-primary">·</span> Design <span className="text-primary">·</span> Since 2021
          </div>
        </div>

        <div className="relative order-1 mx-auto w-full max-w-[590px] md:order-2 md:justify-self-end">
          <div className="absolute -right-3 top-[12%] z-10 flex h-24 w-24 rotate-12 flex-col items-center justify-center rounded-full bg-accent text-center text-[10px] font-bold uppercase leading-tight text-accent-foreground shadow-soft md:-right-6 md:h-28 md:w-28">
            <span className="text-lg">✳</span> Your design<br />partner
          </div>
          <div className="relative ml-5 aspect-[.94] max-h-[570px] overflow-hidden rounded-t-[46%] rounded-b-[3px] bg-secondary md:ml-0">
            <img ref={heroImageRef} src={tykiraHeadshot.url} alt="Tykira Beasley, founder and designer at Beasley Brands" className="hero-photo h-full w-full object-cover object-top" fetchPriority="high" />
            <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-foreground/25 to-transparent" />
          </div>
          <div className="absolute -bottom-5 left-0 flex items-center gap-2 rounded-full border border-border bg-background px-4 py-3 text-xs font-semibold shadow-soft md:-left-8">
            <span className="h-2 w-2 rounded-full bg-studio-green" /> Independent & owner-operated
          </div>
          <span aria-hidden="true" className="display-face absolute -left-4 top-[29%] -z-10 rotate-[-12deg] text-7xl text-primary/15 md:-left-16 md:text-9xl">✳</span>
        </div>
        <a href="#work" aria-label="Scroll to selected work" className="absolute bottom-7 right-8 hidden items-center gap-3 text-xs font-semibold uppercase tracking-[.14em] text-muted-foreground lg:flex">
          Scroll to explore <span className="flex h-9 w-9 items-center justify-center rounded-full border border-border"><ArrowDown className="h-4 w-4" /></span>
        </a>
      </section>

      <div aria-label="Selected clients and projects" className="ticker overflow-hidden border-y border-border bg-secondary py-4 md:py-5">
        <div className="ticker-track flex w-max items-center gap-7 whitespace-nowrap">
          {[0, 1].map((copy) => (
            <div key={copy} aria-hidden={copy === 1} className="flex items-center gap-7">
              {["Chewan", "Legacy Scholars", "Lunora", "Spirit Airlines", "SEAAT", "Level 1UP", "Black Visionaries", "ECSU"].map((name) => (
                <span key={name} className="flex items-center gap-7 text-sm font-semibold md:text-base">{name}<span className="text-primary">✳</span></span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <section id="work" className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32 xl:px-16">
        <div className="reveal mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-4 text-primary">Selected work · 2021—2026</p>
            <h2 className="display-face text-5xl leading-tight md:text-7xl">Made to be <span className="text-primary">remembered.</span></h2>
          </div>
          <p className="max-w-[320px] text-base leading-relaxed text-muted-foreground">From a first impression to the whole picture, every piece works together to make your business stand out.</p>
        </div>

        <div className="grid grid-cols-1 gap-x-5 gap-y-12 sm:grid-cols-2 md:gap-x-8 md:gap-y-16">
          {projects.map((project, index) => (
            <a key={project.name} href={bookingUrl} target="_blank" rel="noreferrer" className={`work-card reveal group block ${project.className}`} style={{ transitionDelay: `${(index % 3) * 90}ms` }}>
              <div className="relative overflow-hidden rounded-[3px] bg-secondary">
                <div className={`aspect-[1.13] ${project.className.includes("portrait") ? "sm:aspect-[.9]" : ""}`}>
                  <img src={project.image} alt={project.alt} loading="lazy" className="work-image h-full w-full object-cover" />
                </div>
                <div className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-background/90 text-xs font-bold text-foreground backdrop-blur-sm">{project.number}</div>
                <div className="absolute bottom-4 right-4 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-accent text-accent-foreground opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
              </div>
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="display-face text-2xl md:text-3xl">{project.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{project.description}</p>
                </div>
                <span className="mt-2 hidden whitespace-nowrap text-[10px] font-semibold uppercase tracking-[.1em] text-muted-foreground sm:block">{project.discipline}</span>
              </div>
              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[.1em] text-muted-foreground sm:hidden">{project.discipline}</p>
            </a>
          ))}
        </div>
      </section>

      <section id="services" className="purple-section relative overflow-hidden py-24 md:py-32">
        <div aria-hidden="true" className="pointer-events-none absolute -right-12 top-10 display-face text-[300px] leading-none text-primary-foreground/[.06]">✳</div>
        <div className="relative mx-auto max-w-[1440px] px-5 md:px-10 xl:px-16">
          <div className="reveal mb-14 grid gap-8 md:grid-cols-[1fr_.65fr] md:items-end">
            <div>
              <p className="eyebrow mb-4 text-accent">A thoughtful design partner</p>
              <h2 className="display-face max-w-[760px] text-5xl leading-[1.02] md:text-7xl">Everything your brand needs to look like <em className="font-normal text-accent">itself.</em></h2>
            </div>
            <p className="max-w-[390px] leading-relaxed text-primary-foreground/75">A clearer visual foundation makes the next marketing decision feel a little less like guesswork.</p>
          </div>
          <div className="border-t border-primary-foreground/25">
            {services.map((service) => (
              <div key={service.number} className="reveal grid gap-3 border-b border-primary-foreground/25 py-6 md:grid-cols-[70px_1fr_1fr_40px] md:items-center md:gap-6 md:py-8">
                <span className="eyebrow text-accent">/{service.number}</span>
                <h3 className="display-face text-3xl md:text-4xl">{service.name}</h3>
                <p className="max-w-[440px] text-sm leading-relaxed text-primary-foreground/70 md:text-base">{service.detail}</p>
                <ArrowUpRight className="hidden h-5 w-5 text-accent md:block" />
              </div>
            ))}
          </div>
          <div className="reveal mt-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <p className="text-sm text-primary-foreground/70">From strategy and visual identity to printed and digital design.</p>
            <Button asChild variant="secondary" className="w-fit rounded-full px-6">
              <a href={bookingUrl} target="_blank" rel="noreferrer">Find your fit <ArrowUpRight /></a>
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-[1440px] gap-12 px-5 py-24 md:grid-cols-[.84fr_1.16fr] md:items-center md:gap-20 md:px-10 md:py-32 xl:px-16">
        <div className="reveal relative mx-auto w-full max-w-[490px]">
          <div className="aspect-[.83] overflow-hidden rounded-[3px] bg-secondary">
            <img src={tykiraHeadshot.url} alt="Tykira Beasley, independent graphic designer and founder of Beasley Brands" loading="lazy" className="h-full w-full object-cover object-top" />
          </div>
          <div className="absolute -bottom-5 -right-3 rotate-[-5deg] bg-accent px-5 py-4 text-sm font-semibold shadow-soft md:-right-8">
            <span className="display-face block text-2xl">Hello, I’m Beasley.</span>
            <span className="text-xs">The heart behind the studio.</span>
          </div>
          <span aria-hidden="true" className="absolute -left-3 -top-6 display-face text-7xl text-primary md:-left-7 md:text-8xl">✳</span>
        </div>
        <div>
          <p className="reveal eyebrow mb-5 text-primary">A little about the studio</p>
          <h2 className="reveal reveal-delay-1 display-face max-w-[680px] text-5xl leading-[1.03] md:text-7xl">Design with intention. <span className="text-primary">Built around you.</span></h2>
          <div className="reveal reveal-delay-2 mt-7 max-w-[650px] space-y-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            <p>Beasley Brands is an independently owned graphic design studio founded by Tykira Beasley in northeastern North Carolina.</p>
            <p>With a B.S. in Graphic Design from Elizabeth City State University and five years of professional experience across government contracting, nonprofits, and academic institutions, Tykira brings strategy and a careful eye to every detail.</p>
            <p>Because her name is on the business, she cares about the details—and the people trusting her with them.</p>
          </div>
          <div className="reveal reveal-delay-3 mt-8 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-border pt-6">
            <div><span className="display-face text-3xl text-primary">5+</span><p className="mt-1 text-xs text-muted-foreground">Years in professional design</p></div>
            <div><span className="display-face text-3xl text-primary">Independent</span><p className="mt-1 text-xs text-muted-foreground">Owner-operated, start to finish</p></div>
            <a href="https://www.beasleybrands.com/about" target="_blank" rel="noreferrer" className="link-underline inline-flex items-center gap-2 text-sm font-semibold">More about Beasley <ArrowUpRight className="h-4 w-4" /></a>
          </div>
        </div>
      </section>

      <section aria-label="A clear process, bold outcome" className="bg-secondary py-20 md:py-24">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 xl:px-16">
          <div className="reveal mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div><p className="eyebrow mb-4 text-primary">How we work</p><h2 className="display-face text-4xl md:text-6xl">A clear process. <span className="text-primary">Bold outcome.</span></h2></div>
            <p className="max-w-[380px] text-sm leading-relaxed text-muted-foreground md:text-base">No mystery and no endless back-and-forth. Just structured collaboration from the first conversation to the final files.</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["01", "Discover", "A focused consultation to understand your goals, audience, and what your brand needs next."],
              ["02", "Define", "We agree on the creative direction, scope, and timeline before a single pixel is designed."],
              ["03", "Design", "Concepts are explored, refined with your feedback, and developed into a cohesive system."],
              ["04", "Deliver", "Final files, practical guidance, and vendor-ready assets so you can use the work with confidence."],
            ].map(([number, title, description], index) => (
              <div key={number} className={`reveal reveal-delay-${index % 3 + 1} border-t border-border pt-5`}>
                <span className="eyebrow text-primary">/{number}</span>
                <h3 className="display-face mt-5 text-3xl">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
          <p className="reveal mt-12 border-t border-border pt-6 text-sm font-medium">Typical project window <span className="display-face text-2xl text-primary">2–6 weeks</span></p>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-5 py-24 md:px-10 md:py-32 xl:px-16">
        <div className="reveal mb-12 flex items-end justify-between gap-5">
          <div><p className="eyebrow mb-4 text-primary">Client notes</p><h2 className="display-face text-5xl md:text-7xl">Good people.<br className="sm:hidden" /> <span className="text-primary">Good work.</span></h2></div>
          <span aria-hidden="true" className="display-face hidden text-8xl text-accent md:block">“</span>
        </div>
        <div className="grid gap-8 md:grid-cols-3 md:gap-10">
          {reviews.map((review, index) => (
            <figure key={review.name} className={`reveal reveal-delay-${index + 1} flex flex-col border-t border-border pt-6`}>
              <blockquote className="display-face flex-1 text-[1.35rem] leading-[1.42]">“{review.quote}”</blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <img src={review.image} alt={review.alt} loading="lazy" className="h-12 w-12 rounded-full object-cover" />
                <span><span className="block text-sm font-semibold">{review.name}</span><span className="mt-1 block text-xs text-muted-foreground">{review.detail}</span></span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="journal" className="bg-secondary py-24 md:py-28">
        <div className="mx-auto max-w-[1440px] px-5 md:px-10 xl:px-16">
          <div className="reveal mb-12 flex items-end justify-between gap-5">
            <div><p className="eyebrow mb-4 text-primary">From the journal</p><h2 className="display-face text-5xl md:text-7xl">Notes on <span className="text-primary">building a brand.</span></h2></div>
            <a href="https://www.beasleybrands.com/blog" target="_blank" rel="noreferrer" className="link-underline hidden items-center gap-2 text-sm font-semibold sm:flex">All articles <ArrowUpRight className="h-4 w-4" /></a>
          </div>
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            {articles.map((article, index) => (
              <a key={article.title} href={article.url} target="_blank" rel="noreferrer" className={`reveal reveal-delay-${index + 1} group grid overflow-hidden bg-background sm:grid-cols-[.95fr_1.05fr]`}>
                <div className="aspect-[1.35] overflow-hidden bg-muted sm:aspect-auto">
                  <img src={article.image} alt={article.alt} loading="lazy" className="work-image h-full w-full object-cover" />
                </div>
                <div className="flex flex-col justify-center p-6 md:p-8">
                  <span className="eyebrow text-primary">{article.category} · {article.time}</span>
                  <h3 className="display-face mt-5 text-2xl leading-snug md:text-3xl">{article.title}</h3>
                  <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold">Read more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="purple-section relative overflow-hidden px-5 py-24 md:px-10 md:py-36 xl:px-16">
        <div aria-hidden="true" className="absolute -bottom-28 -right-12 display-face text-[340px] leading-none text-primary-foreground/[.06]">✳</div>
        <div className="relative mx-auto max-w-[1280px]">
          <p className="reveal eyebrow mb-5 text-accent">Ready when you are</p>
          <h2 className="reveal reveal-delay-1 display-face max-w-[1050px] text-6xl leading-[.95] md:text-8xl">Let’s make<br /><span className="text-accent">it matter.</span></h2>
          <div className="reveal reveal-delay-2 mt-8 flex flex-col items-start justify-between gap-8 border-t border-primary-foreground/25 pt-8 md:flex-row md:items-end">
            <p className="max-w-[430px] text-base leading-relaxed text-primary-foreground/75 md:text-lg">Tell us where your business is heading. We’ll build the visual foundation that gets you there.</p>
            <Button asChild size="lg" variant="secondary" className="rounded-full px-7">
              <a href={bookingUrl} target="_blank" rel="noreferrer">Start a project <ArrowUpRight /></a>
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-background px-5 py-7 md:px-10 xl:px-16">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-4 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <a href="#top" className="flex items-center gap-2 font-semibold text-foreground"><span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">B.</span> BEASLEY BRANDS®</a>
          <span>Independent studio · Northeastern North Carolina</span>
          <a href={bookingUrl} target="_blank" rel="noreferrer" className="link-underline inline-flex items-center gap-1 font-semibold text-foreground">Book a call <ArrowUpRight className="h-3.5 w-3.5" /></a>
        </div>
      </footer>
    </main>
  );
}