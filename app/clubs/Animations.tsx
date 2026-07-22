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

      /* ---- interactive showcase rotator (page inline script) ---- */
      (() => {
        const list = document.getElementById("showList");
        const stage = document.getElementById("showStage");
        if (!list || !stage) return;
        const items = [...list.querySelectorAll<HTMLElement>(".show-item")];
        const panels = [...stage.querySelectorAll<HTMLElement>(".panel")];
        const cur = document.getElementById("showCur");
        let i = 0;
        let timer: ReturnType<typeof setInterval> | null = null;
        const DUR = 6000;
        function show(n: number) {
          i = (n + items.length) % items.length;
          items.forEach((it, k) => {
            it.classList.toggle("on", k === i);
            it.setAttribute("aria-selected", k === i ? "true" : "false");
          });
          panels.forEach((p, k) => p.classList.toggle("on", k === i));
          if (cur) cur.textContent = String(i + 1).padStart(2, "0");
        }
        function next() {
          show(i + 1);
        }
        function stop() {
          if (timer) {
            clearInterval(timer);
            timer = null;
          }
        }
        function start() {
          stop();
          timer = setInterval(next, DUR);
        }
        items.forEach((it, k) => {
          it.addEventListener("click", () => {
            show(k);
            start();
          });
          it.addEventListener("mouseenter", () => {
            show(k);
            stop();
          });
        });
        stage.addEventListener("mouseenter", stop);
        list.addEventListener("mouseleave", start);
        stage.addEventListener("mouseleave", start);
        const pillars = document.getElementById("pillars");
        let io: IntersectionObserver | null = null;
        if ("IntersectionObserver" in window && pillars) {
          io = new IntersectionObserver(
            (es) => {
              es.forEach((e) => {
                if (e.isIntersecting) start();
                else stop();
              });
            },
            { threshold: 0.3 }
          );
          io.observe(pillars);
        } else {
          start();
        }
        cleanups.push(() => {
          stop();
          if (io) io.disconnect();
        });
      })();

      /* ---- sub-nav scroll-spy (page inline script) ---- */
      (() => {
        const links = [...document.querySelectorAll<HTMLAnchorElement>(".subnav a")];
        if (!links.length) return;
        const map = links
          .map((a) => ({ a, sec: document.querySelector<HTMLElement>(a.getAttribute("href") || "") }))
          .filter((x) => x.sec);
        function spy() {
          const y = window.scrollY + 160;
          let cur = map[0];
          for (const m of map) {
            if (m.sec && m.sec.offsetTop <= y) cur = m;
          }
          links.forEach((a) => a.classList.toggle("on", a === cur?.a));
        }
        window.addEventListener("scroll", spy, { passive: true });
        spy();
        cleanups.push(() => window.removeEventListener("scroll", spy));
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
        /* floating hero chips drift slightly faster for depth */
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
