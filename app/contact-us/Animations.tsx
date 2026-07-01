'use client';

import { useEffect } from 'react';

export default function ContactAnimations() {
  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ── GSAP + ScrollTrigger ── */
    const gsap = (window as any).gsap;
    const ScrollTrigger = (window as any).ScrollTrigger;

    if (gsap && ScrollTrigger) {
      gsap.registerPlugin(ScrollTrigger);

      /* Scroll progress bar */
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

      /* Reveal animations */
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
      document.querySelectorAll<HTMLElement>('.rv,.rv-l,.rv-r').forEach((el) => {
        el.style.opacity = '1';
        el.style.transform = 'none';
      });
    }

    /* ── Nav hide on scroll ── */
    const nav = document.getElementById('nav');
    let lastY = 0;
    const onScroll = () => {
      const y = window.scrollY;
      if (nav) nav.classList.toggle('hide', y > lastY && y > 300);
      lastY = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    /* ── Products mega menu ── */
    const trigger = document.getElementById('prodTrigger');
    const mega = document.getElementById('prodMega');
    let menuOpen = false;

    const setMenu = (v: boolean) => {
      menuOpen = v;
      mega?.classList.toggle('open', v);
      trigger?.classList.toggle('active', v);
      trigger?.setAttribute('aria-expanded', v ? 'true' : 'false');
    };

    const onTriggerClick = (e: MouseEvent) => {
      e.stopPropagation();
      setMenu(!menuOpen);
    };

    const onDocClick = (e: MouseEvent) => {
      if (menuOpen && mega && !mega.contains(e.target as Node) && e.target !== trigger) {
        setMenu(false);
      }
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && menuOpen) setMenu(false);
    };

    trigger?.addEventListener('click', onTriggerClick);
    document.addEventListener('click', onDocClick);
    document.addEventListener('keydown', onKeyDown);
    mega?.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));

    /* ── Contact form: validate + success ── */
    const form = document.getElementById('trialForm') as HTMLFormElement | null;
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function validField(f: HTMLElement): boolean {
      const inp = f.querySelector<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>(
        'input,select,textarea'
      );
      if (!inp || !(inp as HTMLInputElement).required) return true;
      let ok = inp.value.trim().length > 0;
      if (ok && (inp as HTMLInputElement).type === 'email') ok = emailRe.test(inp.value.trim());
      f.classList.toggle('err', !ok);
      return ok;
    }

    if (form) {
      form.querySelectorAll<HTMLElement>('.field input,.field select,.field textarea').forEach((inp) => {
        inp.addEventListener('input', () => {
          const field = inp.closest<HTMLElement>('.field');
          if (field?.classList.contains('err')) validField(field);
        });
        inp.addEventListener('blur', () => {
          const field = inp.closest<HTMLElement>('.field');
          if (field) validField(field);
        });
      });

      const onSubmit = (e: Event) => {
        e.preventDefault();
        let ok = true;
        let first: HTMLElement | null = null;
        form.querySelectorAll<HTMLElement>('.field').forEach((f) => {
          const v = validField(f);
          if (!v) { ok = false; if (!first) first = f; }
        });
        if (!ok) {
          (first as HTMLElement | null)?.querySelector<HTMLElement>('input,select,textarea')?.focus();
          return;
        }
        const fnInput = form.querySelector<HTMLInputElement>('#fn');
        const name = (fnInput?.value || '').trim();
        const sn = document.getElementById('successName');
        if (sn && name) sn.textContent = name;
        form.classList.add('done');
        const succ = document.getElementById('formSuccess');
        if (succ) succ.classList.add('on');
        if (ScrollTrigger) ScrollTrigger.refresh();
      };

      form.addEventListener('submit', onSubmit);

      return () => {
        window.removeEventListener('scroll', onScroll);
        trigger?.removeEventListener('click', onTriggerClick);
        document.removeEventListener('click', onDocClick);
        document.removeEventListener('keydown', onKeyDown);
        form.removeEventListener('submit', onSubmit);
      };
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      trigger?.removeEventListener('click', onTriggerClick);
      document.removeEventListener('click', onDocClick);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  return null;
}
