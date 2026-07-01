'use client';

import { useEffect } from 'react';

export default function Animations() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* changelog filters */
    (function () {
      const bar = document.getElementById('wnFilters');
      const tl = document.getElementById('timeline');
      if (!bar || !tl) return;
      const pills = [...bar.querySelectorAll<HTMLElement>('.fpill')];
      const items = [...tl.querySelectorAll<HTMLElement>('.tl-item')];
      const years = [...tl.querySelectorAll<HTMLElement>('.tl-year')];
      const empty = document.getElementById('tlEmpty');

      function apply(cat: string) {
        let shown = 0;
        items.forEach((it) => {
          const ok = cat === 'all' || (it as HTMLElement).dataset.cat === cat;
          it.style.display = ok ? '' : 'none';
          if (ok) shown++;
        });
        years.forEach((y) => {
          let n = y.nextElementSibling as HTMLElement | null;
          let any = false;
          while (n && !n.classList.contains('tl-year')) {
            if (n.classList.contains('tl-item') && n.style.display !== 'none') {
              any = true;
              break;
            }
            n = n.nextElementSibling as HTMLElement | null;
          }
          y.style.display = any ? '' : 'none';
        });
        if (empty) empty.style.display = shown ? 'none' : 'block';
        const vis = items.filter((it) => it.style.display !== 'none');
        items.forEach((it) => it.classList.remove('tl-last'));
        if (vis.length) vis[vis.length - 1].classList.add('tl-last');
      }

      pills.forEach((p) =>
        p.addEventListener('click', () => {
          pills.forEach((x) => x.classList.toggle('on', x === p));
          apply((p as HTMLElement).dataset.cat || 'all');
        })
      );
    })();

    /* GSAP scroll animations */
    if (typeof window !== 'undefined' && (window as any).gsap) {
      const gsap = (window as any).gsap;
      const ScrollTrigger = (window as any).ScrollTrigger;
      if (ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

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
        if ((el as HTMLElement).matches('h1,h2') && !reduced) {
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
    } else {
      /* fallback: show all reveals immediately */
      document.querySelectorAll<HTMLElement>('.rv,.rv-l,.rv-r').forEach((el) => {
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
    }
  }, []);

  return null;
}
