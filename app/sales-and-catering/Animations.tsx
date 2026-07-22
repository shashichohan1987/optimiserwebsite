"use client";

import { useEffect } from "react";

/* Page-specific motion, modeled on app/crm/Animations.tsx.
   Lenis smooth scroll, #scrollbar progress, .rv reveals, magnetic .btn-pri and
   anchor scrolling are handled globally by components/GsapLenis.tsx.
   This ports the non-duplicated motion.js behaviours: eased stat counters,
   spring tilt on cards, and scrub parallax on product shots / hero chips. */

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

export default function Animations() {
  useEffect(() => {
    let killed = false;
    const cleanups: (() => void)[] = [];
    const scrollTriggerInstances: { kill: (revert?: boolean) => void }[] = [];

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    /* ---------- Spring tilt on cards (motion.js) ---------- */
    const TILT = ".vcard,.t2-b,.cb-h,.cb-c2,.ind,.t2-stat,.cb-pillar,.pcard,.fcard";
    document.querySelectorAll<HTMLElement>(TILT).forEach((card) => {
      let rx = 0, ry = 0, crx = 0, cry = 0, raf: number | null = null, base = "";
      const onEnter = () => {
        base = card.style.transform || "";
        if (base.indexOf("perspective(") > -1) base = "";
      };
      const run = () => {
        crx = lerp(crx, rx, 0.12);
        cry = lerp(cry, ry, 0.12);
        card.style.transform =
          (base ? base + " " : "") +
          "perspective(1200px) rotateX(" + crx.toFixed(2) + "deg) rotateY(" + cry.toFixed(2) + "deg)";
        if (Math.abs(crx - rx) > 0.02 || Math.abs(cry - ry) > 0.02) {
          raf = requestAnimationFrame(run);
        } else {
          raf = null;
          if (!rx && !ry) { card.style.transform = base; crx = cry = 0; }
        }
      };
      const onMove = (e: MouseEvent) => {
        const r = card.getBoundingClientRect();
        rx = -((e.clientY - r.top) / r.height - 0.5) * 2;
        ry = ((e.clientX - r.left) / r.width - 0.5) * 2;
        if (!raf) run();
      };
      const onLeave = () => { rx = 0; ry = 0; if (!raf) run(); };
      card.addEventListener("mouseenter", onEnter);
      card.addEventListener("mousemove", onMove);
      card.addEventListener("mouseleave", onLeave);
      cleanups.push(() => {
        card.removeEventListener("mouseenter", onEnter);
        card.removeEventListener("mousemove", onMove);
        card.removeEventListener("mouseleave", onLeave);
        if (raf) cancelAnimationFrame(raf);
      });
    });

    /* ---------- Eased stat counters (motion.js) ---------- */
    const nums = document.querySelectorAll<HTMLElement>(".t2-stat b,.cb-stat b,.ms-stat .lb b,[data-count]");
    if ("IntersectionObserver" in window && nums.length) {
      const io = new IntersectionObserver(
        (es) => {
          es.forEach((en) => {
            if (!en.isIntersecting) return;
            const el = en.target as HTMLElement;
            io.unobserve(el);
            const raw = (el.textContent || "").trim();
            const m = raw.match(/([\d,]+\.?\d*)/);
            if (!m) return;
            const num = parseFloat(m[1].replace(/,/g, ""));
            if (!isFinite(num) || num === 0) return;
            const dec = (m[1].split(".")[1] || "").length;
            const hasComma = m[1].indexOf(",") > -1;
            const t0 = performance.now(), D = 1400;
            const fmt = (v: number) => {
              let s = v.toFixed(dec);
              if (hasComma) s = Number(s).toLocaleString("en-GB");
              return raw.replace(m[1], s);
            };
            const step = (t: number) => {
              if (killed) return;
              const p = Math.min(1, (t - t0) / D);
              const e = 1 - Math.pow(1 - p, 4); /* expo-out */
              el.textContent = fmt(num * e);
              if (p < 1) requestAnimationFrame(step);
              else el.textContent = raw;
            };
            requestAnimationFrame(step);
          });
        },
        { threshold: 0.6 }
      );
      nums.forEach((n) => io.observe(n));
      cleanups.push(() => io.disconnect());
    }

    /* ---------- Scroll parallax on product shots (motion.js) ---------- */
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (killed) return;
      gsap.registerPlugin(ScrollTrigger);
      gsap.utils.toArray<HTMLElement>(".f-vis,.hero-shot").forEach((el) => {
        const tw = gsap.fromTo(
          el,
          { y: 34 },
          { y: -34, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 0.5 } }
        );
        if (tw.scrollTrigger) scrollTriggerInstances.push(tw.scrollTrigger);
      });
      /* floating hero chips drift slightly faster for depth */
      gsap.utils.toArray<HTMLElement>(".hero-chip").forEach((el) => {
        const tw = gsap.fromTo(
          el,
          { y: 18 },
          { y: -46, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 0.4 } }
        );
        if (tw.scrollTrigger) scrollTriggerInstances.push(tw.scrollTrigger);
      });
    })();

    return () => {
      killed = true;
      cleanups.forEach((fn) => fn());
      scrollTriggerInstances.forEach((st) => st.kill(true));
    };
  }, []);

  return null;
}
