"use client";

import { useEffect } from "react";

/* Page-specific behaviors ported from optimiser-site/motion.js.
   Lenis smooth scroll, #scrollbar progress, .rv/.rv-l/.rv-r reveals,
   magnetic .btn-pri buttons and anchor smooth-scroll are handled globally
   by components/GsapLenis.tsx. Nav hide-on-scroll and mega menus are
   handled by components/Nav.tsx. */

const TILT = ".vcard,.t2-b,.cb-h,.cb-c2,.ind,.t2-stat,.cb-pillar,.pcard,.fcard";

export default function Animations() {
  useEffect(() => {
    let cancelled = false;
    const cleanups: (() => void)[] = [];
    const scrollTriggerInstances: { kill: () => void }[] = [];
    const rafIds = new Set<number>();

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    /* ---------- spring tilt on cards ---------- */
    document.querySelectorAll<HTMLElement>(TILT).forEach((card) => {
      let rx = 0, ry = 0, crx = 0, cry = 0, base = "";
      let raf: number | null = null;
      const run = () => {
        crx = lerp(crx, rx, 0.12);
        cry = lerp(cry, ry, 0.12);
        card.style.transform =
          (base ? base + " " : "") +
          "perspective(1200px) rotateX(" + crx.toFixed(2) + "deg) rotateY(" + cry.toFixed(2) + "deg)";
        if (Math.abs(crx - rx) > 0.02 || Math.abs(cry - ry) > 0.02) {
          raf = requestAnimationFrame(run);
          rafIds.add(raf);
        } else {
          raf = null;
          if (!rx && !ry) {
            card.style.transform = base;
            crx = cry = 0;
          }
        }
      };
      const onEnter = () => {
        base = card.style.transform || "";
        if (base.indexOf("perspective(") > -1) base = "";
      };
      const onMove = (e: MouseEvent) => {
        const r = card.getBoundingClientRect();
        rx = -((e.clientY - r.top) / r.height - 0.5) * 2;
        ry = ((e.clientX - r.left) / r.width - 0.5) * 2;
        if (!raf) run();
      };
      const onLeave = () => {
        rx = 0;
        ry = 0;
        if (!raf) run();
      };
      card.addEventListener("mouseenter", onEnter);
      card.addEventListener("mousemove", onMove);
      card.addEventListener("mouseleave", onLeave);
      cleanups.push(() => {
        card.removeEventListener("mouseenter", onEnter);
        card.removeEventListener("mousemove", onMove);
        card.removeEventListener("mouseleave", onLeave);
        if (raf !== null) cancelAnimationFrame(raf);
        card.style.transform = base;
      });
    });

    /* ---------- eased stat counters ---------- */
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
            const t0 = performance.now();
            const D = 1400;
            const fmt = (v: number) => {
              let s = v.toFixed(dec);
              if (hasComma) s = Number(s).toLocaleString("en-GB");
              return raw.replace(m[1], s);
            };
            const step = (t: number) => {
              if (cancelled) return;
              const p = Math.min(1, (t - t0) / D);
              const e = 1 - Math.pow(1 - p, 4); /* expo-out */
              el.textContent = fmt(num * e);
              if (p < 1) rafIds.add(requestAnimationFrame(step));
              else el.textContent = raw;
            };
            rafIds.add(requestAnimationFrame(step));
          });
        },
        { threshold: 0.6 }
      );
      nums.forEach((n) => io.observe(n));
      cleanups.push(() => io.disconnect());
    }

    /* ---------- scroll parallax on product shots ---------- */
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (cancelled) return;
      gsap.registerPlugin(ScrollTrigger);

      gsap.utils.toArray<HTMLElement>(".f-vis,.hero-shot").forEach((el) => {
        const tween = gsap.fromTo(
          el,
          { y: 34 },
          { y: -34, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 0.5 } }
        );
        if (tween.scrollTrigger) scrollTriggerInstances.push(tween.scrollTrigger);
      });
      /* floating hero chips drift slightly faster for depth */
      gsap.utils.toArray<HTMLElement>(".hero-chip").forEach((el) => {
        const tween = gsap.fromTo(
          el,
          { y: 18 },
          { y: -46, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 0.4 } }
        );
        if (tween.scrollTrigger) scrollTriggerInstances.push(tween.scrollTrigger);
      });
    })();

    return () => {
      cancelled = true;
      cleanups.forEach((fn) => fn());
      rafIds.forEach((id) => cancelAnimationFrame(id));
      scrollTriggerInstances.forEach((st) => st.kill());
    };
  }, []);

  return null;
}
