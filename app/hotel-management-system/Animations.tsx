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
      const onTriggerClick = (e: MouseEvent) => { e.stopPropagation(); set(!open); };
      const onDocClick = (e: MouseEvent) => {
        if (open && !mega.contains(e.target as Node) && e.target !== trigger) set(false);
      };
      const onKeydown = (e: KeyboardEvent) => { if (e.key === 'Escape' && open) set(false); };
      trigger.addEventListener('click', onTriggerClick);
      document.addEventListener('click', onDocClick);
      document.addEventListener('keydown', onKeydown);
      mega.querySelectorAll('a').forEach(a => a.addEventListener('click', () => set(false)));
    })();

    /* GSAP animations */
    const gsap = (window as unknown as Record<string, unknown>).gsap as {
      registerPlugin: (...args: unknown[]) => void;
      to: (targets: unknown, vars: Record<string, unknown>) => void;
      from: (targets: unknown, vars: Record<string, unknown>) => void;
      set: (targets: unknown, vars: Record<string, unknown>) => void;
      utils: { toArray: (selector: string) => Element[] };
      ticker: { add: (fn: (t: number) => void) => void; lagSmoothing: (v: number) => void };
    } | undefined;

    const ScrollTrigger = (window as unknown as Record<string, unknown>).ScrollTrigger as unknown;

    if (gsap) {
      gsap.registerPlugin(ScrollTrigger);

      /* Lenis smooth scroll (handled by GsapLenis component — skip here) */

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
      gsap.utils.toArray('.rv').forEach((el) => {
        if ((el as Element).matches('h1,h2') && !reduced) {
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

      gsap.utils.toArray('.rv-r').forEach((el) => {
        gsap.to(el, {
          opacity: 1,
          x: 0,
          duration: 1.1,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 85%' },
        });
      });

      gsap.utils.toArray('.rv-l').forEach((el) => {
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
      document.querySelectorAll('.rv,.rv-l,.rv-r').forEach((el) => {
        (el as HTMLElement).style.opacity = '1';
        (el as HTMLElement).style.transform = 'none';
      });
    }

    /* interactive showcase */
    (function () {
      const list = document.getElementById('showList');
      const stage = document.getElementById('showStage');
      if (!list || !stage) return;
      const items = [...list.querySelectorAll('.show-item')];
      const panels = [...stage.querySelectorAll('.panel')];
      const cur = document.getElementById('showCur');
      let i = 0;
      let timer: ReturnType<typeof setInterval> | null = null;
      const DUR = 6000;

      function show(n: number) {
        i = (n + items.length) % items.length;
        items.forEach((it, k) => {
          it.classList.toggle('on', k === i);
          it.setAttribute('aria-selected', k === i ? 'true' : 'false');
        });
        panels.forEach((p, k) => p.classList.toggle('on', k === i));
        if (cur) cur.textContent = String(i + 1).padStart(2, '0');
      }

      function next() { show(i + 1); }
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
        const io = new IntersectionObserver(
          (es) => { es.forEach((e) => { e.isIntersecting ? start() : stop(); }); },
          { threshold: 0.3 }
        );
        const pillars = document.getElementById('pillars');
        if (pillars) io.observe(pillars);
      } else {
        start();
      }
    })();

    /* hero occupancy bar fill */
    (function () {
      const bar = document.getElementById('hdBar');
      if (!bar) return;
      const fill = () => { bar.style.width = '86%'; };
      if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver(
          (es) => { es.forEach((e) => { if (e.isIntersecting) { fill(); io.disconnect(); } }); },
          { threshold: 0.4 }
        );
        io.observe(bar);
      } else {
        setTimeout(fill, 300);
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
