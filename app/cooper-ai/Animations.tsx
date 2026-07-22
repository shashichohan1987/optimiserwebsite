"use client";

import { useEffect } from "react";

export default function Animations() {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let ctx: any = null;
    const cleanups: (() => void)[] = [];
    let cancelled = false;

    async function init() {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);
      if (cancelled) return;

      const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

      /* ---- Cooper AI analyst console demo loop (page inline script) ---- */
      (() => {
        const stage = document.getElementById("cooStage");
        if (!stage) return;
        const qEl = document.getElementById("cooQ");
        if (!qEl) return;
        const panes = [...stage.querySelectorAll<HTMLElement>(".coo-pane")];
        const queries = [
          "Compare Q3 pipeline by owner against last quarter",
          "Which campaigns drove the most revenue this month?",
        ];

        if (reduced) {
          qEl.textContent = queries[0];
          const p0 = panes[0];
          if (p0) {
            gsap.set(p0, { opacity: 1, visibility: "visible" });
            gsap.set(p0.querySelectorAll(".coo-card,.coo-list .li,.coo-pill,.coo-area"), { opacity: 1 });
          }
          return;
        }

        panes.forEach((p) => {
          const line = p.querySelector<SVGPathElement>(".coo-line");
          if (!line) return;
          const len = line.getTotalLength();
          gsap.set(line, { strokeDasharray: len, strokeDashoffset: len });
        });

        const tl = gsap.timeline({ repeat: -1, paused: true });
        panes.forEach((p, i) => {
          const cards = p.querySelectorAll(".coo-card");
          const line = p.querySelector<SVGPathElement>(".coo-line");
          const area = p.querySelector(".coo-area");
          const bars = p.querySelectorAll(".coo-cmp .bars i");
          const lis = p.querySelectorAll(".coo-list .li");
          const pills = p.querySelectorAll(".coo-pill");
          const txt = queries[i];
          const proxy = { n: 0 };

          tl.set(qEl, { textContent: "" });
          tl.to(proxy, {
            n: txt.length,
            duration: txt.length * 0.035,
            ease: "none",
            onUpdate: () => {
              qEl.textContent = txt.slice(0, Math.round(proxy.n));
            },
          });
          tl.to({}, { duration: 0.35 });
          tl.set(p, { visibility: "visible" });
          tl.to(p, { opacity: 1, duration: 0.3 });
          tl.fromTo(cards, { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.12, ease: "power3.out" });
          if (line) {
            tl.to(line, { strokeDashoffset: 0, duration: 0.9, ease: "power2.inOut" }, "-=.5");
          }
          if (area) tl.to(area, { opacity: 1, duration: 0.5 }, "-=.4");
          tl.fromTo(bars, { scaleX: 0 }, { scaleX: 1, duration: 0.55, stagger: 0.06, ease: "power3.out" }, "-=.8");
          tl.fromTo(lis, { x: 14, opacity: 0 }, { x: 0, opacity: 1, duration: 0.4, stagger: 0.1 }, "-=.6");
          tl.fromTo(pills, { scale: 0.85, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.4, stagger: 0.15, ease: "back.out(2)" }, "-=.4");
          tl.to({}, { duration: 3.4 });
          tl.to(p, { opacity: 0, duration: 0.45 });
          tl.set(p, { visibility: "hidden" });
          if (line) tl.set(line, { strokeDashoffset: () => line.getTotalLength() });
          tl.set([area, ...Array.from(cards), ...Array.from(lis), ...Array.from(pills)].filter(Boolean), { opacity: 0 });
          tl.set(proxy, { n: 0 });
        });

        const st = ScrollTrigger.create({
          trigger: "#cooConsole",
          start: "top 75%",
          end: "bottom 10%",
          onEnter: () => tl.play(),
          onEnterBack: () => tl.play(),
          onLeave: () => tl.pause(),
          onLeaveBack: () => tl.pause(),
        });
        cleanups.push(() => {
          tl.kill();
          st.kill();
        });
      })();

      if (reduced) return;

      /* ---- motion.js: spring tilt on cards ---- */
      const TILT = ".vcard,.t2-b,.cb-h,.cb-c2,.ind,.t2-stat,.cb-pillar,.pcard,.fcard";
      document.querySelectorAll<HTMLElement>(TILT).forEach((card) => {
        let rx = 0,
          ry = 0,
          crx = 0,
          cry = 0,
          raf: number | null = null,
          base = "";
        const onEnter = () => {
          base = card.style.transform || "";
          if (base.indexOf("perspective(") > -1) base = "";
        };
        const run = () => {
          crx = lerp(crx, rx, 0.12);
          cry = lerp(cry, ry, 0.12);
          card.style.transform =
            (base ? base + " " : "") +
            "perspective(1200px) rotateX(" +
            crx.toFixed(2) +
            "deg) rotateY(" +
            cry.toFixed(2) +
            "deg)";
          if (Math.abs(crx - rx) > 0.02 || Math.abs(cry - ry) > 0.02) {
            raf = requestAnimationFrame(run);
          } else {
            raf = null;
            if (!rx && !ry) {
              card.style.transform = base;
              crx = cry = 0;
            }
          }
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
          if (raf) cancelAnimationFrame(raf);
        });
      });

      /* ---- motion.js: eased stat counters ---- */
      const nums = document.querySelectorAll<HTMLElement>(
        ".t2-stat b,.cb-stat b,.ms-stat .lb b,[data-count]"
      );
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
              const t0 = performance.now(),
                D = 1400;
              const fmt = (v: number) => {
                let s = v.toFixed(dec);
                if (hasComma) s = Number(s).toLocaleString("en-GB");
                return raw.replace(m[1], s);
              };
              const step = (t: number) => {
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

      /* ---- motion.js: scroll parallax on product shots ---- */
      ctx = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>(".f-vis,.hero-shot").forEach((el) => {
          gsap.fromTo(
            el,
            { y: 34 },
            {
              y: -34,
              ease: "none",
              scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 0.5 },
            }
          );
        });
        gsap.utils.toArray<HTMLElement>(".hero-chip").forEach((el) => {
          gsap.fromTo(
            el,
            { y: 18 },
            {
              y: -46,
              ease: "none",
              scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 0.4 },
            }
          );
        });
      });
    }

    init();

    return () => {
      cancelled = true;
      if (ctx) ctx.revert();
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return null;
}
