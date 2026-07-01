"use client";

import { useEffect } from "react";

// Module-level refs survive mount/unmount cycles so cleanup always has access,
// even if the component unmounts before the async imports resolve.
let _gsap: Awaited<typeof import("gsap")>["gsap"] | null = null;
let _ST: Awaited<typeof import("gsap/ScrollTrigger")>["ScrollTrigger"] | null = null;

export default function GsapLenis() {
  useEffect(() => {
    let _lenis: { destroy(): void } | null = null;
    let _tick: ((t: number) => void) | null = null;

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      const { default: Lenis } = await import("lenis");

      _gsap = gsap;
      _ST = ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      // Smooth scroll with Lenis
      if (!reduced) {
        const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
        _lenis = lenis;
        lenis.on("scroll", ScrollTrigger.update);
        const tick = (t: number) => lenis.raf(t * 1000);
        _tick = tick;
        gsap.ticker.add(tick);
        gsap.ticker.lagSmoothing(0);

        // Anchor links
        document.querySelectorAll('a[href^="#"]').forEach((a) => {
          a.addEventListener("click", (e) => {
            const id = (a as HTMLAnchorElement).getAttribute("href") || "";
            if (id.length > 1 && document.querySelector(id)) {
              e.preventDefault();
              lenis.scrollTo(id, { offset: -90 });
            }
          });
        });
      }

      // Scroll progress bar
      gsap.to("#scrollbar", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.body,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3,
        },
      });

      // Reveal animations
      gsap.utils.toArray<HTMLElement>(".rv").forEach((el) => {
        if (el.matches("h1,h2") && !reduced) {
          gsap.set(el, { filter: "blur(10px)" });
          gsap.to(el, {
            opacity: 1, y: 0, filter: "blur(0px)", duration: 1.15, ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%" },
          });
        } else {
          gsap.to(el, {
            opacity: 1, y: 0, duration: 1, ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%" },
          });
        }
      });
      gsap.utils.toArray<HTMLElement>(".rv-l").forEach((el) => {
        gsap.to(el, { opacity: 1, x: 0, duration: 1.1, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%" } });
      });
      gsap.utils.toArray<HTMLElement>(".rv-r").forEach((el) => {
        gsap.to(el, { opacity: 1, x: 0, duration: 1.1, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%" } });
      });

      // Magnetic buttons
      if (!reduced && window.matchMedia("(pointer:fine)").matches) {
        document.querySelectorAll<HTMLElement>(".btn-pri").forEach((b) => {
          b.addEventListener("pointermove", (e) => {
            const r = b.getBoundingClientRect();
            gsap.to(b, { x: (e.clientX - r.left - r.width / 2) * 0.18, y: (e.clientY - r.top - r.height / 2) * 0.3, duration: 0.4, ease: "power2.out" });
          });
          b.addEventListener("pointerleave", () => gsap.to(b, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1,.4)" }));
        });
      }
    })();

    return () => {
      if (_lenis) _lenis.destroy();
      if (_tick && _gsap) _gsap.ticker.remove(_tick);
      // kill(true) reverts pinned elements back to their original DOM parent before React unmounts
      _ST?.getAll().forEach((t) => t.kill(true));
      _gsap?.killTweensOf("*");
    };
  }, []);

  return null;
}
