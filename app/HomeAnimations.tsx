"use client";

import { useEffect } from "react";

// Module-level refs survive mount/unmount cycles so cleanup always has access,
// even if the component unmounts before the async imports resolve.
let _gsap: Awaited<typeof import("gsap")>["gsap"] | null = null;
let _ST: Awaited<typeof import("gsap/ScrollTrigger")>["ScrollTrigger"] | null = null;

export default function HomeAnimations() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      _gsap = gsap;
      _ST = ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      /* ---- Three.js particle wave ---- */
      (async () => {
        const canvas = document.getElementById("bg3d") as HTMLCanvasElement | null;
        const hero = document.querySelector(".hero") as HTMLElement | null;
        if (!canvas || !hero) return;
        try {
          const THREE = await import("three");
          let renderer: InstanceType<typeof THREE.WebGLRenderer>;
          try {
            renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
          } catch {
            return;
          }
          renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
          renderer.setClearColor(0x000000, 0);
          const scene = new THREE.Scene();
          const camera = new THREE.PerspectiveCamera(62, 1, 0.1, 200);
          camera.position.set(0, 4.5, 17);
          camera.lookAt(0, 0, 0);

          const COLS = 160, ROWS = 90, SP = 0.42;
          const count = COLS * ROWS;
          const pos = new Float32Array(count * 3);
          const col = new Float32Array(count * 3);
          const cBlue = new THREE.Color(0x075da8);
          const cCyan = new THREE.Color(0x00a1df);
          const cNavy = new THREE.Color(0x02122b);
          let idx = 0;
          for (let x = 0; x < COLS; x++) {
            for (let z = 0; z < ROWS; z++) {
              pos[idx * 3] = (x - COLS / 2) * SP;
              pos[idx * 3 + 1] = 0;
              pos[idx * 3 + 2] = (z - ROWS / 2) * SP;
              const c = cBlue.clone().lerp(cCyan, x / COLS).lerp(cNavy, (z / ROWS) * 0.25).lerp(new THREE.Color(0xffffff), 0.42);
              col[idx * 3] = c.r; col[idx * 3 + 1] = c.g; col[idx * 3 + 2] = c.b;
              idx++;
            }
          }
          const geo = new THREE.BufferGeometry();
          geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
          geo.setAttribute("color", new THREE.BufferAttribute(col, 3));
          const mat = new THREE.PointsMaterial({ size: 0.052, vertexColors: true, transparent: true, opacity: 0.38, depthWrite: false, sizeAttenuation: true });
          const points = new THREE.Points(geo, mat);
          points.rotation.x = -0.62;
          points.position.y = -1.2;
          scene.add(points);

          let mx = 0, my = 0;
          const onPointer = (e: PointerEvent) => { mx = e.clientX / innerWidth - 0.5; my = e.clientY / innerHeight - 0.5; };
          window.addEventListener("pointermove", onPointer, { passive: true });

          const resize = () => {
            const w = hero.clientWidth || innerWidth;
            const h = hero.clientHeight || innerHeight;
            renderer.setSize(w, h, false);
            camera.aspect = w / h;
            camera.updateProjectionMatrix();
          };
          resize();
          window.addEventListener("resize", resize);
          if (window.ResizeObserver) new ResizeObserver(resize).observe(hero);

          const clock = new THREE.Clock();
          let running = true;
          new IntersectionObserver((es) => { running = es[0].isIntersecting; }, { threshold: 0 }).observe(hero);

          const speed = reduced ? 0 : 1;
          const loop = () => {
            requestAnimationFrame(loop);
            if (!running) return;
            const t = clock.getElapsedTime() * speed;
            const p = geo.attributes.position.array as Float32Array;
            let k = 0;
            for (let x = 0; x < COLS; x++) {
              for (let z = 0; z < ROWS; z++) {
                const px = (x - COLS / 2) * SP, pz = (z - ROWS / 2) * SP;
                p[k * 3 + 1] = Math.sin(px * 0.5 + t * 0.6) * Math.cos(pz * 0.4 + t * 0.4) * 0.75
                  + Math.sin((px + pz) * 0.22 + t * 0.28) * 0.45;
                k++;
              }
            }
            geo.attributes.position.needsUpdate = true;
            points.rotation.z = mx * 0.03;
            camera.position.x += (mx * 1.4 - camera.position.x) * 0.04;
            camera.position.y += (4.5 - my * 0.8 - camera.position.y) * 0.04;
            camera.lookAt(0, -0.5, 0);
            renderer.render(scene, camera);
          };
          loop();
          gsap.from(canvas, { opacity: 0, duration: 1.8, ease: "power2.out", delay: 0.2 });
        } catch { /* WebGL unavailable */ }
      })();

      /* ---- hero intro timeline ---- */
      (() => {
        const h1 = document.getElementById("heroTitle");
        if (!h1) return;
        const tl = gsap.timeline({ delay: reduced ? 0 : 0.15, defaults: { ease: "power4.out" } });
        tl.to(".hero-badge", { x: 0, opacity: 1, duration: 0.8 })
          .to("#heroTitle .w > span", { y: 0, duration: 1.1, stagger: 0.07 }, "-=.5")
          .to(".hero-rot", { opacity: 1, duration: 0.8 }, "-=.6")
          .to(".hero p.lede", { opacity: 1, y: 0, duration: 0.9 }, "-=.7")
          .to(".hero-ctas", { opacity: 1, y: 0, duration: 0.9 }, "-=.7")
          .to(".hero-note", { opacity: 1, duration: 0.8 }, "-=.6")
          .to(".hero-shot", { opacity: 1, duration: 0.9 }, "-=.7")
          .fromTo("#heroShotFrame", { y: 90, rotateX: 16 }, { y: 0, rotateX: 0, duration: 1.4, ease: "power3.out" }, "<");
      })();

      /* ---- word rotator ---- */
      (() => {
        const list = document.getElementById("rotList");
        if (!list || reduced) return;
        const total = list.children.length;
        const tl = gsap.timeline({ repeat: -1, onRepeat: () => gsap.set(list, { yPercent: 0 }) });
        for (let i = 1; i < total; i++) {
          tl.to(list, { yPercent: -100 * i / total, duration: 0.65, ease: "power3.inOut" }, "+=1.7");
        }
      })();

      /* ---- workspace builder ---- */
      (() => {
        const grid = document.getElementById("pickGrid");
        if (!grid) return;
        const wsGrid = document.getElementById("wsGrid")!;
        const wsEmpty = document.getElementById("wsEmpty")!;
        const counter = document.getElementById("pickCount")!;
        const wsCount = document.getElementById("wsCount")!;

        const I = (p: string) => `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${p}</svg>`;
        const MI = (p: string) => `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${p}</svg>`;

        const DATA: { n: string; m: string; p: string; on: boolean; modEl?: HTMLElement | null }[] = [
          { n: "Sales pipeline", m: "Sales", p: '<path d="M3 17l5-6 4 4 6-8 3 4"/>', on: true },
          { n: "Marketing campaigns", m: "Marketing", p: '<path d="M3 11l16-7-4 16-5-5z"/>', on: true },
          { n: "Events & ticketing", m: "Events", p: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>', on: false },
          { n: "Memberships", m: "Members", p: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-3.5 2.9-6 6.5-6s6.5 2.5 6.5 6"/><path d="M16 4a3.5 3.5 0 010 8"/>', on: false },
          { n: "Projects & teams", m: "Projects", p: '<rect x="3" y="4" width="7" height="7" rx="1.5"/><rect x="14" y="4" width="7" height="7" rx="1.5"/><rect x="3" y="15" width="7" height="6" rx="1.5"/><rect x="14" y="15" width="7" height="6" rx="1.5"/>', on: false },
          { n: "Guest relationships", m: "Guest CRM", p: '<path d="M4 19h16M6 19V9.5L12 5l6 4.5V19"/><path d="M10 19v-4h4v4"/>', on: false },
          { n: "Fundraising", m: "Fundraising", p: '<path d="M12 21s-7.5-4.6-9.5-9A5.4 5.4 0 0112 6.2 5.4 5.4 0 0121.5 12c-2 4.4-9.5 9-9.5 9z"/>', on: false },
          { n: "Online shop", m: "Shop", p: '<path d="M6 7h12l1.5 13.5a1 1 0 01-1 1.1H5.5a1 1 0 01-1-1.1z"/><path d="M9 10V6a3 3 0 016 0v4"/>', on: false },
          { n: "Workflows", m: "Automation", p: '<path d="M12 2v4M12 18v4M2 12h4M18 12h4"/><circle cx="12" cy="12" r="3.5"/>', on: false },
          { n: "My website", m: "Touchpoint", p: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 4 5.6 4 9s-1.5 6.4-4 9c-2.5-2.6-4-5.6-4-9s1.5-6.4 4-9z"/>', on: false },
        ];

        const refresh = () => {
          const n = DATA.filter((d) => d.on).length;
          counter.textContent = String(n);
          wsCount.textContent = n + (n === 1 ? " module active" : " modules active");
          wsEmpty.style.display = n ? "none" : "flex";
        };

        const addModule = (d: typeof DATA[0], animate = true) => {
          const el = document.createElement("div");
          el.className = "ws-mod";
          el.dataset.m = d.m;
          el.innerHTML = `<span class="ws-ic">${MI(d.p)}</span>${d.m}`;
          wsGrid.appendChild(el);
          d.modEl = el;
          if (animate) gsap.from(el, { scale: 0.4, opacity: 0, duration: 0.6, ease: "back.out(1.9)" });
        };
        const removeModule = (d: typeof DATA[0]) => {
          const el = d.modEl; d.modEl = null;
          if (!el) return;
          gsap.to(el, { scale: 0.4, opacity: 0, duration: 0.3, ease: "power2.in", onComplete: () => el.remove() });
        };

        DATA.forEach((d) => {
          const c = document.createElement("div");
          c.className = "pick" + (d.on ? " sel" : "");
          c.innerHTML = I(d.p) + d.n;
          c.tabIndex = 0;
          c.setAttribute("role", "button");
          c.setAttribute("aria-pressed", d.on ? "true" : "false");
          grid.appendChild(c);
          if (d.on) addModule(d, false);
          const toggle = () => {
            d.on = !d.on;
            c.classList.toggle("sel", d.on);
            c.setAttribute("aria-pressed", d.on ? "true" : "false");
            gsap.fromTo(c, { scale: 0.93 }, { scale: 1, duration: 0.45, ease: "elastic.out(1,.5)" });
            d.on ? addModule(d) : removeModule(d);
            refresh();
          };
          c.addEventListener("click", toggle);
          c.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); } });
        });
        refresh();

        gsap.from(grid.children, {
          opacity: 0, y: 22, scale: 0.94, duration: 0.65, ease: "back.out(1.5)", stagger: 0.045,
          scrollTrigger: { trigger: grid, start: "top 85%" },
        });
        gsap.from(wsGrid.querySelectorAll(".ws-mod"), {
          scale: 0.4, opacity: 0, duration: 0.7, ease: "back.out(1.8)", stagger: 0.12,
          scrollTrigger: { trigger: "#ws", start: "top 80%" },
        });
      })();

      /* ---- context convergence ---- */
      (() => {
        const track = document.getElementById("ctxTrack");
        if (!track) return;
        const wrap = document.getElementById("ctxWrapper")!;
        const core = document.getElementById("ctxCore")!;
        const coreColor = document.getElementById("ctxCoreColor")!;
        const coreGlow = document.getElementById("ctxCoreGlow")!;
        const finalMsg = document.getElementById("ctxFinal")!;
        const beamsSvg = document.getElementById("ctxBeams")!;
        const shocks = [document.getElementById("ctxShock1")!, document.getElementById("ctxShock2")!];
        const rings = (gsap.utils.toArray(wrap.querySelectorAll(".ctx-ring")) as HTMLElement[]);

        let tl: gsap.core.Timeline | null = null;

        const visiblePanels = () =>
          (gsap.utils.toArray(wrap.querySelectorAll(".ctx-panel")) as HTMLElement[])
            .filter((el) => getComputedStyle(el).display !== "none");

        const build = () => {
          const panels = visiblePanels();
          const W = wrap.offsetWidth, H = wrap.offsetHeight;
          const cx = W / 2, cy = H / 2;

          if (reduced) {
            gsap.set([core, ...panels], { opacity: 1, scale: 1, x: 0, y: 0 });
            gsap.set(finalMsg, { opacity: 0 });
            return;
          }

          beamsSvg.setAttribute("viewBox", `0 0 ${W} ${H}`);
          beamsSvg.innerHTML = "";
          const NS = "http://www.w3.org/2000/svg";
          const items = panels.map((p) => {
            const r = p.getBoundingClientRect();
            const wr = wrap.getBoundingClientRect();
            const px = r.left - wr.left + r.width / 2;
            const py = r.top - wr.top + r.height / 2;

            const line = document.createElementNS(NS, "line");
            line.setAttribute("x1", String(px)); line.setAttribute("y1", String(py));
            line.setAttribute("x2", String(cx)); line.setAttribute("y2", String(cy));
            beamsSvg.appendChild(line);
            const len = Math.hypot(cx - px, cy - py);
            gsap.set(line, { strokeDasharray: len, strokeDashoffset: len });

            const dot = document.createElementNS(NS, "circle");
            dot.setAttribute("r", "3.5");
            dot.setAttribute("cx", String(px)); dot.setAttribute("cy", String(py));
            beamsSvg.appendChild(dot);

            const ux = (px - cx) / len, uy = (py - cy) / len;
            return { el: p, line, dot, px, py, inX: ux * 240, inY: uy * 200, toX: cx - px, toY: cy - py };
          });

          gsap.set(core, { scale: 0.45, opacity: 0 });
          gsap.set(coreColor, { opacity: 0 });
          gsap.set(coreGlow, { opacity: 0.4, scale: 1 });
          gsap.set(finalMsg, { opacity: 0, y: 26 });
          gsap.set(shocks, { opacity: 0, scale: 1 });
          gsap.set(rings, { opacity: 1, scale: 1 });
          items.forEach((it) => gsap.set(it.el, { x: it.inX, y: it.inY, scale: 0.6, opacity: 0 }));

          tl = gsap.timeline({
            defaults: { ease: "power3.out" },
            scrollTrigger: {
              trigger: track,
              start: "top top",
              end: "bottom bottom",
              scrub: 1.2,
              invalidateOnRefresh: false,
            },
          });

          tl.to(core, { scale: 1, opacity: 1, duration: 0.45, ease: "back.out(1.7)" }, 0);
          items.forEach((it, i) => {
            tl!.to(it.el, { x: 0, y: 0, scale: 1, opacity: 1, duration: 0.5 }, 0.12 + i * 0.07);
          });

          items.forEach((it, i) => {
            tl!.to(it.line, { strokeDashoffset: 0, duration: 0.45, ease: "power2.inOut" }, 0.75 + i * 0.05);
            tl!.fromTo(it.dot,
              { attr: { cx: it.px, cy: it.py }, opacity: 1 },
              { attr: { cx: cx, cy: cy }, opacity: 0.25, duration: 0.34, ease: "power1.in", repeat: 1 },
              1.0 + i * 0.06);
          });
          tl.to(core, { scale: 1.07, duration: 0.3, yoyo: true, repeat: 1, ease: "sine.inOut" }, 1.35);
          tl.to(coreGlow, { opacity: 0.7, duration: 0.5 }, 1.3);

          items.forEach((it, i) => {
            const at = 2.0 + i * 0.16;
            tl!.to(it.el, { x: it.toX, y: it.toY, scale: 0.07, opacity: 0, duration: 0.42, ease: "power2.in" }, at);
            tl!.to(it.line, { opacity: 0, duration: 0.25 }, at + 0.2);
            tl!.set(it.dot, { opacity: 0 }, at);
            tl!.to(core, { scale: 1 + (i + 1) * 0.035, duration: 0.16, ease: "back.out(3)" }, at + 0.38);
          });

          const B = 3.35;
          tl.to(coreColor, { opacity: 1, duration: 0.35, ease: "power2.in" }, B);
          tl.to(core, { scale: 1.45, duration: 0.4, ease: "back.out(2.2)" }, B);
          tl.to(core, { y: -46, scale: 1.3, duration: 0.5, ease: "power2.inOut" }, B + 0.45);
          tl.to(coreGlow, { opacity: 1, scale: 1.35, duration: 0.5 }, B);
          shocks.forEach((s, i) => {
            tl!.fromTo(s, { opacity: 0.85, scale: 1 },
              { opacity: 0, scale: 4.2 + i * 1.6, duration: 0.8, ease: "power2.out" }, B + 0.05 + i * 0.18);
          });
          tl.to(rings, { scale: 1.5, opacity: 0, duration: 0.7, stagger: 0.06, ease: "power2.out" }, B);
          tl.to(finalMsg, { opacity: 1, y: 0, duration: 0.55, ease: "power3.out" }, B + 0.5);
          tl.to(core, { scale: 1.24, duration: 0.4, ease: "sine.inOut" }, B + 0.95);
        };

        const teardown = () => {
          if (tl) { if (tl.scrollTrigger) tl.scrollTrigger.kill(); tl.kill(); tl = null; }
          gsap.set(wrap.querySelectorAll(".ctx-panel"), { clearProps: "all" });
          gsap.set([core, coreColor, coreGlow, finalMsg, ...rings, ...shocks], { clearProps: "all" });
        };

        build();

        let rw = innerWidth, rt: ReturnType<typeof setTimeout> | null = null;
        window.addEventListener("resize", () => {
          if (Math.abs(innerWidth - rw) < 60) return;
          if (rt) clearTimeout(rt);
          rt = setTimeout(() => { rw = innerWidth; teardown(); build(); ScrollTrigger.refresh(); }, 250);
        });
      })();

      /* ---- platform showcase ---- */
      (() => {
        const stage = document.getElementById("platStage");
        if (!stage) return;
        const tabs = (gsap.utils.toArray(document.querySelectorAll(".plat-tab")) as HTMLElement[]);
        const screens = (gsap.utils.toArray(stage.querySelectorAll(".plat-screen")) as HTMLElement[]);
        const frame = document.getElementById("platFrame");
        const cap = document.getElementById("platCap");
        const caps = [
          "Drag contacts and deals through every stage — your whole pipeline, visualised.",
          "Every record, filter and owner in one sortable view. 4,000+ contacts, zero tabs.",
          "Sort, freeze, add or remove columns on the fly — shape the data around your team.",
        ];
        let current = 0;
        let timer: ReturnType<typeof setInterval> | null = null;

        const show = (i: number, fromUser: boolean) => {
          if (i === current) return;
          tabs[current].classList.remove("is-on"); tabs[current].setAttribute("aria-selected", "false");
          screens[current].classList.remove("is-on");
          current = i;
          tabs[current].classList.add("is-on"); tabs[current].setAttribute("aria-selected", "true");
          screens[current].classList.add("is-on");
          if (cap) {
            cap.style.opacity = "0";
            setTimeout(() => { cap.textContent = caps[i]; cap.style.opacity = "1"; }, 220);
          }
          if (fromUser && timer) { clearInterval(timer); timer = null; }
        };
        tabs.forEach((t) => t.addEventListener("click", () => show(+(t as HTMLElement).dataset.i!, true)));

        const startAuto = () => {
          if (timer || reduced) return;
          timer = setInterval(() => show((current + 1) % screens.length, false), 5000);
        };
        ScrollTrigger.create({
          trigger: stage, start: "top 80%", end: "bottom 10%",
          onEnter: startAuto, onEnterBack: startAuto,
          onLeave: () => { if (timer) { clearInterval(timer); timer = null; } },
          onLeaveBack: () => { if (timer) { clearInterval(timer); timer = null; } },
        });

        if (!reduced && frame) {
          gsap.fromTo(frame, { rotateX: 14, y: 90, opacity: 0 },
            { rotateX: 0, y: 0, opacity: 1, duration: 1.3, ease: "power3.out",
              scrollTrigger: { trigger: stage, start: "top 82%" } });
        }
      })();

      /* ---- about: word-by-word reveal ---- */
      (() => {
        const sec = document.getElementById("about");
        const txt = document.getElementById("aboutText");
        if (!sec || !sec.parentElement || !txt) return;
        const words = txt.querySelectorAll(".aw");
        if (reduced) { gsap.set(words, { opacity: 1 }); return; }
        gsap.to(words, {
          opacity: 1, stagger: 0.6, ease: "none", duration: 1,
          scrollTrigger: { trigger: sec.parentElement, start: "top top", end: "bottom bottom", scrub: 0.6 },
        });
      })();

      /* ---- stacking cards ---- */
      (() => {
        const cards = (gsap.utils.toArray("#prodStack .stack-card") as HTMLElement[]);
        if (!cards.length || reduced) return;
        cards.forEach((card, i) => {
          if (i === cards.length - 1) return;
          gsap.to(card, {
            scale: 0.93, ease: "none", transformOrigin: "center top",
            scrollTrigger: { trigger: cards[i + 1], start: "top bottom-=140", end: "top top+=180", scrub: true },
          });
        });
      })();

      /* ---- Cooper AI demo loop ---- */
      (() => {
        const stage = document.getElementById("cooStage");
        if (!stage) return;
        const qEl = document.getElementById("cooQ")!;
        const panes = (gsap.utils.toArray(stage.querySelectorAll(".coo-pane")) as HTMLElement[]);
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
          const line = p.querySelector(".coo-line") as SVGPathElement | null;
          if (!line) return;
          const len = line.getTotalLength();
          gsap.set(line, { strokeDasharray: len, strokeDashoffset: len });
        });

        const tl = gsap.timeline({ repeat: -1, paused: true });
        panes.forEach((p, i) => {
          const cards = p.querySelectorAll(".coo-card");
          const line = p.querySelector(".coo-line") as SVGPathElement | null;
          const area = p.querySelector(".coo-area");
          const bars = p.querySelectorAll(".coo-cmp .bars i");
          const lis = p.querySelectorAll(".coo-list .li");
          const pills = p.querySelectorAll(".coo-pill");
          const txt = queries[i];
          const proxy = { n: 0 };

          tl.set(qEl, { textContent: "" });
          tl.to(proxy, {
            n: txt.length, duration: txt.length * 0.035, ease: "none",
            onUpdate: () => { qEl.textContent = txt.slice(0, Math.round(proxy.n)); },
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

        ScrollTrigger.create({
          trigger: "#cooConsole", start: "top 75%", end: "bottom 10%",
          onEnter: () => tl.play(), onEnterBack: () => tl.play(),
          onLeave: () => tl.pause(), onLeaveBack: () => tl.pause(),
        });
      })();

      /* ---- product grid stagger ---- */
      (() => {
        const cards = (gsap.utils.toArray("#pgGrid .pg-card") as HTMLElement[]);
        if (!cards.length) return;
        gsap.from(cards, {
          opacity: 0, y: 36, duration: 0.8, ease: "power3.out",
          stagger: { each: 0.06, grid: "auto" as const, from: "start" },
          scrollTrigger: { trigger: "#pgGrid", start: "top 85%" },
        });
      })();

      /* ---- mock animations (bars, funnel, cal) ---- */
      (gsap.utils.toArray('[data-anim="bars"] i') as HTMLElement[]).forEach((bar, i) => {
        gsap.from(bar, { scaleY: 0, duration: 1, delay: i * 0.07, ease: "power3.out", scrollTrigger: { trigger: bar.parentElement, start: "top 80%" } });
      });
      (gsap.utils.toArray('[data-anim="funnel"] i') as HTMLElement[]).forEach((f, i) => {
        gsap.from(f, { scaleX: 0, transformOrigin: "center", duration: 0.9, delay: i * 0.12, ease: "power3.out", scrollTrigger: { trigger: f.parentElement, start: "top 80%" } });
      });
      (gsap.utils.toArray('[data-anim="cal"] i.on') as HTMLElement[]).forEach((c, i) => {
        gsap.from(c, { scale: 0, duration: 0.5, delay: 0.2 + i * 0.08, ease: "back.out(2)", scrollTrigger: { trigger: c.parentElement, start: "top 80%" } });
      });

      /* ---- marquees ---- */
      const marquee = (trackId: string, speed: number) => {
        const track = document.getElementById(trackId);
        if (!track) return;
        const count = track.children.length;
        // Clone existing children and append — avoids destroying React-tracked nodes
        Array.from(track.children).forEach(child => track.appendChild(child.cloneNode(true)));
        let tw: gsap.core.Tween | null = null;
        const start = () => {
          const shift = (track.children[count] as HTMLElement).offsetLeft - (track.children[0] as HTMLElement).offsetLeft;
          if (shift <= 0) return;
          if (tw) tw.kill();
          gsap.set(track, { x: 0 });
          tw = gsap.to(track, { x: -shift, duration: shift / speed, ease: "none", repeat: -1 });
        };
        if (document.fonts?.ready) document.fonts.ready.then(start); else start();
        window.addEventListener("load", start, { once: true });
        let rt: ReturnType<typeof setTimeout>;
        window.addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(start, 250); });
        const box = track.parentElement!;
        box.addEventListener("mouseenter", () => tw && gsap.to(tw, { timeScale: 0.12, duration: 0.6, overwrite: true }));
        box.addEventListener("mouseleave", () => tw && gsap.to(tw, { timeScale: 1, duration: 0.6, overwrite: true }));
      };
      if (!reduced) { marquee("logoTrack", 45); marquee("tTrack", 38); }

      /* ---- count-up stats ---- */
      (gsap.utils.toArray(".count") as HTMLElement[]).forEach((el) => {
        const to = +(el.dataset.to || 0);
        gsap.fromTo(el, { innerText: 0 }, {
          innerText: to, duration: 1.8, ease: "power2.out",
          snap: { innerText: 1 },
          scrollTrigger: { trigger: el, start: "top 85%" },
        });
      });

      /* ---- card spotlight (cursor follow) ---- */
      document.querySelectorAll<HTMLElement>(".card").forEach((c) => {
        c.addEventListener("pointermove", (e) => {
          const r = c.getBoundingClientRect();
          c.style.setProperty("--mx", (e.clientX - r.left) + "px");
          c.style.setProperty("--my", (e.clientY - r.top) + "px");
        });
      });

      /* ---- journey steps autoplay ---- */
      (() => {
        const sec = document.getElementById("journey");
        const steps = [...document.querySelectorAll<HTMLElement>(".j-step")];
        const arts = [...document.querySelectorAll<HTMLElement>(".j-art")];
        const progs = [...document.querySelectorAll<HTMLElement>(".j-prog")];
        if (!sec || !steps.length) return;
        const HOLD = 4;
        let current = 0;
        let runner: gsap.core.Tween | null = null;
        let inView = false;

        const activate = (i: number) => {
          current = i;
          steps.forEach((s) => s.classList.toggle("active", +(s.dataset.i || 0) === i));
          arts.forEach((a) => {
            const on = +(a.dataset.i || 0) === i;
            gsap.to(a, { opacity: on ? 1 : 0, scale: on ? 1 : 0.92, duration: 0.7, ease: "power3.out" });
          });
          if (runner) runner.kill();
          gsap.set(progs, { scaleX: 0 });
          if (reduced) return;
          runner = gsap.fromTo(progs[i], { scaleX: 0 }, {
            scaleX: 1, duration: HOLD, ease: "none", paused: !inView,
            onComplete: () => activate((current + 1) % steps.length),
          });
        };

        steps.forEach((s) => s.addEventListener("click", () => activate(+(s.dataset.i || 0))));

        const io = new IntersectionObserver((entries) => {
          inView = entries[0].isIntersecting;
          if (runner) { inView ? runner.play() : runner.pause(); }
        }, { threshold: 0.25 });
        io.observe(sec);

        activate(0);
      })();

      /* ---- FAQ accordion ---- */
      document.querySelectorAll<HTMLElement>(".faq-item").forEach((item) => {
        const q = item.querySelector<HTMLElement>(".faq-q");
        const a = item.querySelector<HTMLElement>(".faq-a");
        if (!q || !a) return;
        if (item.classList.contains("open")) a.style.maxHeight = a.scrollHeight + "px";
        q.addEventListener("click", () => {
          const open = item.classList.contains("open");
          document.querySelectorAll<HTMLElement>(".faq-item.open").forEach((o) => {
            o.classList.remove("open");
            const oa = o.querySelector<HTMLElement>(".faq-a");
            if (oa) oa.style.maxHeight = "0";
          });
          if (!open) { item.classList.add("open"); a.style.maxHeight = a.scrollHeight + "px"; }
        });
      });

      /* ---- product visual parallax ---- */
      (gsap.utils.toArray(".prod-vis") as HTMLElement[]).forEach((v) => {
        gsap.fromTo(v, { yPercent: 6 }, {
          yPercent: -6, ease: "none",
          scrollTrigger: { trigger: v, start: "top bottom", end: "bottom top", scrub: 1.2 },
        });
      });

      /* ---- 3D tilt on cards ---- */
      if (!reduced && window.matchMedia("(pointer:fine)").matches) {
        document.querySelectorAll<HTMLElement>(".card,.ind-card").forEach((el) => {
          el.addEventListener("pointerenter", () => gsap.to(el, { y: -6, duration: 0.4, ease: "power2.out" }));
          el.addEventListener("pointermove", (e) => {
            const r = el.getBoundingClientRect();
            const rx = ((e.clientY - r.top) / r.height - 0.5) * -5;
            const ry = ((e.clientX - r.left) / r.width - 0.5) * 5;
            gsap.to(el, { rotateX: rx, rotateY: ry, transformPerspective: 900, duration: 0.5, ease: "power2.out" });
          });
          el.addEventListener("pointerleave", () => gsap.to(el, { rotateX: 0, rotateY: 0, y: 0, duration: 0.7, ease: "power3.out" }));
        });
      }
    })();

    return () => {
      // kill(true) reverts pinned elements to their original DOM position before React unmounts
      _ST?.getAll().forEach((t) => t.kill(true));
      _gsap?.killTweensOf("*");
    };
  }, []);

  return null;
}
