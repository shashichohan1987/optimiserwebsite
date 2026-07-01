'use client';

import { useEffect } from 'react';

export default function Animations() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* products mega menu */
    (function () {
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
      trigger.addEventListener('click', (e) => { e.stopPropagation(); set(!open); });
      document.addEventListener('click', (e) => {
        if (open && !mega.contains(e.target as Node) && e.target !== trigger) set(false);
      });
      document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && open) set(false); });
      mega.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => set(false)));
    })();

    /* GSAP */
    const gsap = (window as any).gsap;
    const ScrollTrigger = (window as any).ScrollTrigger;
    if (gsap && ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);

      /* Lenis smooth scroll */
      try {
        const LenisClass = (window as any).Lenis || ((window as any).lenis && (window as any).lenis.Lenis);
        if (LenisClass && !reduced) {
          const lenis = new LenisClass({ duration: 1.15, smoothWheel: true });
          lenis.on('scroll', ScrollTrigger.update);
          gsap.ticker.add((t: number) => lenis.raf(t * 1000));
          gsap.ticker.lagSmoothing(0);
          document.querySelectorAll('a[href^="#"]').forEach((a) => {
            a.addEventListener('click', (e) => {
              const id = a.getAttribute('href');
              if (id && id.length > 1 && document.querySelector(id)) {
                e.preventDefault();
                lenis.scrollTo(id, { offset: -90 });
              }
            });
          });
        }
      } catch (_) {}

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
        gsap.to(el, { opacity: 1, x: 0, duration: 1.1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 85%' } });
      });
      gsap.utils.toArray('.rv-l').forEach((el: Element) => {
        gsap.to(el, { opacity: 1, x: 0, duration: 1.1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 85%' } });
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

      /* hero stack stagger */
      gsap.from('.stack > *', {
        opacity: 0,
        y: 20,
        duration: 0.7,
        ease: 'back.out(1.4)',
        stagger: 0.09,
        delay: 0.2,
      });
    } else {
      document.querySelectorAll('.rv,.rv-l,.rv-r').forEach((el: Element) => {
        (el as HTMLElement).style.opacity = '1';
        (el as HTMLElement).style.transform = 'none';
      });
    }

    /* interactive showcase */
    (function () {
      const list = document.getElementById('showList');
      const stage = document.getElementById('showStage');
      if (!list || !stage) return;
      const items = [...list.querySelectorAll<HTMLElement>('.show-item')];
      const panels = [...stage.querySelectorAll<HTMLElement>('.panel')];
      const cur = document.getElementById('showCur');
      let idx = 0;
      let timer: ReturnType<typeof setInterval> | null = null;
      const DUR = 6000;

      function show(n: number) {
        idx = (n + items.length) % items.length;
        items.forEach((it, k) => {
          it.classList.toggle('on', k === idx);
          it.setAttribute('aria-selected', k === idx ? 'true' : 'false');
        });
        panels.forEach((p, k) => p.classList.toggle('on', k === idx));
        if (cur) cur.textContent = String(idx + 1).padStart(2, '0');
      }

      function next() { show(idx + 1); }
      function start() { stop(); timer = setInterval(next, DUR); }
      function stop() { if (timer) { clearInterval(timer); timer = null; } }

      items.forEach((it, k) => {
        it.addEventListener('click', () => { show(k); start(); });
        it.addEventListener('mouseenter', () => { show(k); stop(); });
      });
      stage.addEventListener('mouseenter', stop);
      list.addEventListener('mouseleave', start);
      stage.addEventListener('mouseleave', start);

      if ('IntersectionObserver' in window) {
        const pillarsEl = document.getElementById('pillars');
        if (pillarsEl) {
          const io = new IntersectionObserver(
            (es) => { es.forEach((e) => { e.isIntersecting ? start() : stop(); }); },
            { threshold: 0.3 }
          );
          io.observe(pillarsEl);
        }
      } else {
        start();
      }
    })();

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
    };
  }, []);

  return null;
}
