"use client";

import { useEffect } from "react";

export default function Animations() {
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* nav hide on scroll */
    const nav = document.getElementById("nav");
    if (nav) {
      let lastY = 0;
      const onScroll = () => {
        const y = window.scrollY;
        nav.classList.toggle("hide", y > lastY && y > 300);
        lastY = y;
      };
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    /* GSAP animations */
    if (typeof window !== "undefined" && (window as any).gsap) {
      const gsap = (window as any).gsap;
      const ScrollTrigger = (window as any).ScrollTrigger;

      if (ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);
      }

      /* scroll progress bar */
      if (ScrollTrigger) {
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
      }

      /* reveals */
      if (!reduced && ScrollTrigger) {
        gsap.utils.toArray(".rv").forEach((el: Element) => {
          const elem = el as HTMLElement;
          if (elem.matches("h1,h2")) {
            gsap.set(elem, { filter: "blur(10px)" });
            gsap.to(elem, {
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
              duration: 1.1,
              ease: "power3.out",
              scrollTrigger: { trigger: elem, start: "top 88%" },
            });
          } else {
            gsap.to(elem, {
              opacity: 1,
              y: 0,
              duration: 0.9,
              ease: "power3.out",
              scrollTrigger: { trigger: elem, start: "top 88%" },
            });
          }
        });

        gsap.utils.toArray(".rv-r").forEach((el: Element) => {
          gsap.to(el, {
            opacity: 1,
            x: 0,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 85%" },
          });
        });

        gsap.utils.toArray(".rv-l").forEach((el: Element) => {
          gsap.to(el, {
            opacity: 1,
            x: 0,
            duration: 1.1,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 85%" },
          });
        });

        /* pillar stagger */
        gsap.from(".pgrid .pcard", {
          opacity: 0,
          y: 34,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.07,
          scrollTrigger: { trigger: ".pgrid", start: "top 84%" },
        });

        /* hero stack stagger */
        gsap.from(".stack > *", {
          opacity: 0,
          y: 20,
          duration: 0.7,
          ease: "back.out(1.4)",
          stagger: 0.09,
          delay: 0.2,
        });
      } else if (reduced) {
        document.querySelectorAll<HTMLElement>(".rv,.rv-l,.rv-r").forEach((el) => {
          el.style.opacity = "1";
          el.style.transform = "none";
        });
      }
    } else {
      /* fallback: no GSAP */
      document.querySelectorAll<HTMLElement>(".rv,.rv-l,.rv-r").forEach((el) => {
        el.style.opacity = "1";
        el.style.transform = "none";
      });
    }
  }, []);

  return null;
}
