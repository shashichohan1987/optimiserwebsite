"use client";

import { useEffect } from "react";

export default function Animations() {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let ctx: any = null;
    let scrollTriggerInstances: { kill: () => void }[] = [];

    async function init() {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        /* scroll progress bar */
        const scrollbarEl = document.getElementById("scrollbar");
        if (scrollbarEl) {
          const st = ScrollTrigger.create({
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.3,
            onUpdate: (self) => {
              gsap.set(scrollbarEl, { scaleX: self.progress });
            },
          });
          scrollTriggerInstances.push(st);
        }

        /* reveals */
        (gsap.utils.toArray(".rv") as HTMLElement[]).forEach((el) => {
          if ((el.matches("h1,h2")) && !reduced) {
            gsap.set(el, { filter: "blur(10px)" });
            const st = ScrollTrigger.create({
              trigger: el,
              start: "top 88%",
              onEnter: () => {
                gsap.to(el, {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                  duration: 1.1,
                  ease: "power3.out",
                });
              },
            });
            scrollTriggerInstances.push(st);
          } else {
            const st = ScrollTrigger.create({
              trigger: el,
              start: "top 88%",
              onEnter: () => {
                gsap.to(el, {
                  opacity: 1,
                  y: 0,
                  duration: 0.9,
                  ease: "power3.out",
                });
              },
            });
            scrollTriggerInstances.push(st);
          }
        });

        (gsap.utils.toArray(".rv-r") as HTMLElement[]).forEach((el) => {
          const st = ScrollTrigger.create({
            trigger: el,
            start: "top 85%",
            onEnter: () => {
              gsap.to(el, {
                opacity: 1,
                x: 0,
                duration: 1.1,
                ease: "power3.out",
              });
            },
          });
          scrollTriggerInstances.push(st);
        });

        (gsap.utils.toArray(".rv-l") as HTMLElement[]).forEach((el) => {
          const st = ScrollTrigger.create({
            trigger: el,
            start: "top 85%",
            onEnter: () => {
              gsap.to(el, {
                opacity: 1,
                x: 0,
                duration: 1.1,
                ease: "power3.out",
              });
            },
          });
          scrollTriggerInstances.push(st);
        });

        if (reduced) {
          document.querySelectorAll<HTMLElement>(".rv,.rv-l,.rv-r").forEach((el) => {
            el.style.opacity = "1";
            el.style.transform = "none";
          });
        }
      });

      /* sub-nav scroll-spy */
      const subnavLinks = [...document.querySelectorAll<HTMLAnchorElement>(".subnav a")];
      if (subnavLinks.length) {
        const map = subnavLinks
          .map((a) => ({ a, sec: document.querySelector<HTMLElement>(a.getAttribute("href") || "") }))
          .filter((x) => x.sec);

        function spy() {
          const y = window.scrollY + 160;
          let cur = map[0];
          for (const m of map) {
            if (m.sec && m.sec.offsetTop <= y) cur = m;
          }
          subnavLinks.forEach((a) => a.classList.toggle("on", a === cur?.a));
        }

        window.addEventListener("scroll", spy, { passive: true });
        spy();

        return () => {
          window.removeEventListener("scroll", spy);
        };
      }
    }

    let cleanupSpy: (() => void) | undefined;

    init().then((cleanup) => {
      cleanupSpy = cleanup as (() => void) | undefined;
    });

    return () => {
      if (ctx) ctx.revert();
      scrollTriggerInstances.forEach((st) => st.kill());
      if (cleanupSpy) cleanupSpy();
    };
  }, []);

  return null;
}
