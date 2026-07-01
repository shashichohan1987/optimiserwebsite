'use client';

import { useEffect } from 'react';

export default function Animations() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Dynamically import GSAP from window (loaded by GsapLenis)
    const initAnimations = () => {
      const gsap = (window as any).gsap;
      const ScrollTrigger = (window as any).ScrollTrigger;

      if (!gsap) return;

      if (ScrollTrigger) {
        gsap.registerPlugin(ScrollTrigger);
      }

      // scroll progress bar
      if (ScrollTrigger) {
        gsap.to('#scrollbar', {
          scaleX: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: document.body,
            start: 'top top',
            end: 'bottom bottom',
            scrub: 0.3,
          },
        });
      }

      // reveals
      gsap.utils.toArray('.rv').forEach((el: Element) => {
        const htmlEl = el as HTMLElement;
        if ((htmlEl.matches('h1,h2')) && !reduced) {
          gsap.set(el, { filter: 'blur(10px)' });
          gsap.to(el, {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%' },
          });
        } else {
          gsap.to(el, {
            opacity: 1,
            y: 0,
            duration: 0.9,
            ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%' },
          });
        }
      });

      gsap.utils.toArray('.rv-r').forEach((el: Element) => {
        gsap.to(el, {
          opacity: 1,
          x: 0,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%' },
        });
      });

      gsap.utils.toArray('.rv-l').forEach((el: Element) => {
        gsap.to(el, {
          opacity: 1,
          x: 0,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%' },
        });
      });
    };

    // Products mega menu
    const initMegaMenu = () => {
      const trigger = document.getElementById('prodTrigger');
      const mega = document.getElementById('prodMega');
      if (!trigger || !mega) return;
      let open = false;
      const set = (v: boolean) => {
        open = v;
        mega.classList.toggle('open', v);
        trigger.classList.toggle('active', v);
        trigger.setAttribute('aria-expanded', v ? 'true' : 'false');
      };
      trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        set(!open);
      });
      document.addEventListener('click', (e) => {
        if (open && !mega.contains(e.target as Node) && e.target !== trigger) set(false);
      });
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && open) set(false);
      });
      mega.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => set(false)));
    };

    // Nav hide on scroll
    const initNavHide = () => {
      const nav = document.getElementById('nav');
      if (!nav) return;
      let lastY = 0;
      window.addEventListener(
        'scroll',
        () => {
          const y = window.scrollY;
          nav.classList.toggle('hide', y > lastY && y > 300);
          lastY = y;
        },
        { passive: true }
      );
    };

    // Fallback for reveals if no GSAP
    const revealFallback = () => {
      document.querySelectorAll('.rv,.rv-l,.rv-r').forEach((el) => {
        (el as HTMLElement).style.opacity = '1';
        (el as HTMLElement).style.transform = 'none';
      });
    };

    initMegaMenu();
    initNavHide();

    // Wait for GSAP to be available (GsapLenis loads it)
    if ((window as any).gsap) {
      initAnimations();
    } else {
      const onLoad = () => {
        if ((window as any).gsap) {
          initAnimations();
        } else {
          revealFallback();
        }
      };
      window.addEventListener('load', onLoad, { once: true });
      // Also try after a short delay as GsapLenis may load after this component
      const t = setTimeout(() => {
        if ((window as any).gsap) {
          initAnimations();
        } else {
          revealFallback();
        }
      }, 500);
      return () => clearTimeout(t);
    }
  }, []);

  return null;
}
