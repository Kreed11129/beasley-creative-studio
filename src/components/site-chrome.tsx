import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { bookingUrl, navLinks } from "@/lib/site-data";

export function SiteChrome({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pointerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

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
    const updateMotion = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        if (progressRef.current) {
          progressRef.current.style.width = `${scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0}%`;
        }
      });
    };
    const onPointerMove = (event: MouseEvent) => {
      if (pointerRef.current && window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
        pointerRef.current.style.setProperty("--pointer-x", `${event.clientX - 18}px`);
        pointerRef.current.style.setProperty("--pointer-y", `${event.clientY - 18}px`);
      }
    };
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
  }, [location.pathname]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="page-grain flex min-h-screen flex-col overflow-hidden bg-background text-foreground">
      <div ref={progressRef} aria-hidden="true" className="fixed left-0 top-0 z-[60] h-[3px] bg-accent transition-[width] duration-150" style={{ width: "0%" }} />
      <div ref={pointerRef} aria-hidden="true" className="cursor-orbit pointer-events-none fixed left-0 top-0 z-[70] hidden h-9 w-9 items-center justify-center rounded-full bg-accent text-foreground shadow-soft md:flex">
        <ArrowUpRight className="h-4 w-4" />
      </div>

      <header className="relative z-50 border-b border-border/70 bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex min-h-[74px] max-w-[1440px] items-center justify-between px-5 md:px-10 xl:px-16">
          <Link to="/" aria-label="Beasley Brands home" className="flex items-center gap-2.5 font-semibold">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">B.</span>
            <span className="leading-tight">BEASLEY<br className="hidden sm:block" /> BRANDS<span className="hidden sm:inline">®</span></span>
          </Link>
          <nav aria-label="Main navigation" className="hidden items-center gap-8 text-sm md:flex">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} className="nav-link" activeProps={{ className: "nav-link text-primary" }}>
                {link.label}
              </Link>
            ))}
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
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} onClick={closeMenu} className="block border-b border-border py-3 text-lg">
                {link.label}
              </Link>
            ))}
            <Button asChild className="mt-5 rounded-full px-5">
              <a onClick={closeMenu} href={bookingUrl} target="_blank" rel="noreferrer">Let’s talk <ArrowUpRight /></a>
            </Button>
          </nav>
        )}
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-border/70 bg-background px-5 py-7 md:px-10 xl:px-16">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-4 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <Link to="/" className="flex items-center gap-2 font-semibold text-foreground">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-[10px] text-primary-foreground">B.</span> BEASLEY BRANDS®
          </Link>
          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-2">
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} className="link-underline">{link.label}</Link>
            ))}
          </nav>
          <span className="hidden lg:block">Independent studio · Northeastern North Carolina</span>
          <a href={bookingUrl} target="_blank" rel="noreferrer" className="link-underline inline-flex items-center gap-1 font-semibold text-foreground">
            Book a call <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </footer>
    </div>
  );
}
