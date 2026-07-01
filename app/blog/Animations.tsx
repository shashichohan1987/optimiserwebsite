'use client';

import { useEffect } from 'react';

export default function Animations() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ── scroll progress bar ── */
    function updateScrollbar() {
      const bar = document.getElementById('scrollbar');
      if (!bar) return;
      const total = document.body.scrollHeight - window.innerHeight;
      const progress = total > 0 ? window.scrollY / total : 0;
      bar.style.transform = `scaleX(${progress})`;
    }
    window.addEventListener('scroll', updateScrollbar, { passive: true });

    /* ── nav hide on scroll ── */
    const nav = document.getElementById('nav');
    let lastY = 0;
    function handleNavScroll() {
      const y = window.scrollY;
      if (nav) nav.classList.toggle('hide', y > lastY && y > 300);
      lastY = y;
    }
    window.addEventListener('scroll', handleNavScroll, { passive: true });

    /* ── blog: filter + search + load more ── */
    (function () {
      const grid = document.getElementById('blogGrid');
      const bar = document.getElementById('blogFilters');
      const search = document.getElementById('blogSearch') as HTMLInputElement | null;
      const empty = document.getElementById('blogEmpty');
      const loadBtn = document.getElementById('loadMore');
      if (!grid || !bar) return;

      const cards = [...grid.querySelectorAll<HTMLElement>('.bcard')];
      const STEP = 6;
      let cat = 'all';
      let q = '';
      let shown = STEP;

      function matched() {
        return cards.filter((c) => {
          const okCat = cat === 'all' || c.dataset.cat === cat;
          const okQ = !q || (c.dataset.title || '').toLowerCase().includes(q);
          return okCat && okQ;
        });
      }

      function render() {
        const m = matched();
        cards.forEach((c) => c.classList.add('hide'));
        m.slice(0, shown).forEach((c) => c.classList.remove('hide'));
        if (empty) empty.style.display = m.length ? 'none' : 'block';
        if (loadBtn && loadBtn.parentElement) {
          loadBtn.parentElement.style.display = m.length > shown ? 'flex' : 'none';
        }
      }

      bar.querySelectorAll<HTMLButtonElement>('.fpill').forEach((p) => {
        p.addEventListener('click', () => {
          bar.querySelectorAll('.fpill').forEach((x) => x.classList.toggle('on', x === p));
          cat = p.dataset.cat || 'all';
          shown = STEP;
          render();
        });
      });

      if (search) {
        search.addEventListener('input', () => {
          q = search.value.trim().toLowerCase();
          shown = STEP;
          render();
        });
      }

      if (loadBtn) {
        loadBtn.addEventListener('click', () => {
          shown += STEP;
          render();
        });
      }

      render();
    })();

    /* ── GSAP animations ── */
    const gsap = (window as any).gsap;
    const ScrollTrigger = (window as any).ScrollTrigger;

    if (gsap && ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);

      /* scroll progress bar via GSAP (replaces manual listener) */
      window.removeEventListener('scroll', updateScrollbar);
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
      (gsap.utils.toArray('.rv') as HTMLElement[]).forEach((el) => {
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

      (gsap.utils.toArray('.rv-r') as HTMLElement[]).forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          x: 0,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%' },
        });
      });

      (gsap.utils.toArray('.rv-l') as HTMLElement[]).forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          x: 0,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%' },
        });
      });
    } else {
      /* fallback if GSAP not loaded */
      document.querySelectorAll<HTMLElement>('.rv,.rv-l,.rv-r').forEach((el) => {
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
    }

    return () => {
      window.removeEventListener('scroll', updateScrollbar);
      window.removeEventListener('scroll', handleNavScroll);
    };
  }, []);

  return null;
}
