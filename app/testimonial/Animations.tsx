'use client';

import { useEffect } from 'react';

export default function Animations() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* products mega menu */
    (function () {
      const trigger = document.getElementById('prodTrigger') as HTMLButtonElement | null;
      const mega = document.getElementById('prodMega') as HTMLElement | null;
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
    })();

    /* GSAP animations */
    const gsap = (window as any).gsap;
    const ScrollTrigger = (window as any).ScrollTrigger;

    if (gsap && ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);

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

      /* reveals */
      gsap.utils.toArray('.rv').forEach((el: Element) => {
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

      /* pillar stagger */
      gsap.from('.pgrid .pcard', {
        opacity: 0,
        y: 34,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.07,
        scrollTrigger: { trigger: '.pgrid', start: 'top 84%' },
      });
    } else {
      document.querySelectorAll('.rv,.rv-l,.rv-r').forEach((el) => {
        (el as HTMLElement).style.opacity = '1';
        (el as HTMLElement).style.transform = 'none';
      });
    }

    /* nav hide on scroll */
    const nav = document.getElementById('nav') as HTMLElement | null;
    let lastY = 0;
    const onScroll = () => {
      const y = window.scrollY;
      if (nav) nav.classList.toggle('hide', y > lastY && y > 300);
      lastY = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (ScrollTrigger) ScrollTrigger.getAll().forEach((t: any) => t.kill());
    };
  }, []);

  return null;
}
