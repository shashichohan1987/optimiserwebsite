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
      trigger.addEventListener('click', (e) => { e.stopPropagation(); set(!open); });
      document.addEventListener('click', (e) => {
        if (open && !mega.contains(e.target as Node) && e.target !== trigger) set(false);
      });
      document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && open) set(false); });
      mega.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => set(false)));
    })();

    /* GSAP animations */
    const gsapAny = (window as any).gsap;
    const ScrollTriggerAny = (window as any).ScrollTrigger;
    if (gsapAny && ScrollTriggerAny) {
      gsapAny.registerPlugin(ScrollTriggerAny);

      /* scroll progress bar */
      gsapAny.to('#scrollbar', {
        scaleX: 1,
        ease: 'none',
        scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 0.3 },
      });

      /* reveals */
      gsapAny.utils.toArray('.rv').forEach((el: Element) => {
        if ((el as HTMLElement).matches('h1,h2') && !reduced) {
          gsapAny.set(el, { filter: 'blur(10px)' });
          gsapAny.to(el, {
            opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.1, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%' },
          });
        } else {
          gsapAny.to(el, {
            opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
            scrollTrigger: { trigger: el, start: 'top 88%' },
          });
        }
      });
      gsapAny.utils.toArray('.rv-r').forEach((el: Element) => {
        gsapAny.to(el, { opacity: 1, x: 0, duration: 1.1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 85%' } });
      });
      gsapAny.utils.toArray('.rv-l').forEach((el: Element) => {
        gsapAny.to(el, { opacity: 1, x: 0, duration: 1.1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 85%' } });
      });
    } else {
      document.querySelectorAll('.rv,.rv-l,.rv-r').forEach((el) => {
        (el as HTMLElement).style.opacity = '1';
        (el as HTMLElement).style.transform = 'none';
      });
    }

    /* nav hide on scroll */
    const nav = document.getElementById('nav');
    let lastY = 0;
    const onScroll = () => {
      const y = window.scrollY;
      if (nav) nav.classList.toggle('hide', y > lastY && y > 300);
      lastY = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (ScrollTriggerAny) ScrollTriggerAny.getAll().forEach((t: any) => t.kill());
    };
  }, []);

  return null;
}
