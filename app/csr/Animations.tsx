'use client';

import { useEffect } from 'react';

export default function Animations() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Dynamically import gsap + ScrollTrigger (already loaded via GsapLenis)
    const gsap = (window as any).gsap;
    const ScrollTrigger = (window as any).ScrollTrigger;

    if (!gsap) {
      // Fallback: make all reveal elements visible immediately
      document.querySelectorAll<HTMLElement>('.rv,.rv-l,.rv-r').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
      return;
    }

    if (ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);
    }

    /* scroll progress bar */
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

    /* reveals — .rv */
    (gsap.utils.toArray('.rv') as HTMLElement[]).forEach(el => {
      if ((el.matches('h1,h2')) && !reduced) {
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

    /* reveals — .rv-r */
    (gsap.utils.toArray('.rv-r') as HTMLElement[]).forEach(el => {
      gsap.to(el, {
        opacity: 1,
        x: 0,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 85%' },
      });
    });

    /* reveals — .rv-l */
    (gsap.utils.toArray('.rv-l') as HTMLElement[]).forEach(el => {
      gsap.to(el, {
        opacity: 1,
        x: 0,
        duration: 1.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 85%' },
      });
    });

    /* pillar stagger */
    gsap.from('.pgrid .pcard', {
      opacity: 0,
      y: 34,
      duration: 0.8,
      ease: 'power3.out',
      stagger: 0.07,
      scrollTrigger: { trigger: '.pgrid', start: 'top 84%' },
    });

    /* nav hide on scroll */
    const nav = document.getElementById('nav');
    if (nav) {
      let lastY = 0;
      const onScroll = () => {
        const y = window.scrollY;
        nav.classList.toggle('hide', y > lastY && y > 300);
        lastY = y;
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
    }
  }, []);

  return null;
}
