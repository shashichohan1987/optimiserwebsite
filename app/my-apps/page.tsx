'use client';

import { useEffect, useRef, useState } from 'react';
import './styles.css';

const slides = [
  {
    img: '/assets/kanban-view.webp',
    eyebrow: 'New in Optimiser',
    title: 'Cooper AI is here',
    text: 'Let Cooper draft follow-ups, summarise calls and surface your next best action — built right into every module of your workspace.',
    link: '/#cooper',
  },
  {
    img: '/assets/contacts-list.jpg',
    eyebrow: 'Pipeline update',
    title: 'A faster way to work deals',
    text: 'Bulk-edit, filter and move records in seconds. Your whole pipeline, reorganised around the way your team actually sells.',
    link: '/crm',
  },
  {
    img: '/assets/list-columns.webp',
    eyebrow: 'Reporting',
    title: 'Insights you can act on',
    text: 'Customisable views and live counts across contacts, accounts and tasks — so nothing slips between the cracks.',
    link: '/why-optimiser',
  },
];

export default function MyAppsPage() {
  // Reveal
  const [cardIn, setCardIn] = useState(false);

  // Carousel state
  const [slideIndex, setSlideIndex] = useState(0);
  const [imgAShow, setImgAShow] = useState(true);
  const [imgBShow, setImgBShow] = useState(false);
  const [imgASrc, setImgASrc] = useState(slides[0].img);
  const [imgBSrc, setImgBSrc] = useState<string | undefined>(undefined);
  const [textFadeOut, setTextFadeOut] = useState(false);
  const [displayedSlide, setDisplayedSlide] = useState(slides[0]);

  // Refs
  const waveSvgRef = useRef<SVGGElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const busyRef = useRef(false);
  const frontRef = useRef(0);
  const slideIndexRef = useRef(0);

  // Reveal card on mount
  useEffect(() => {
    requestAnimationFrame(() => setCardIn(true));
  }, []);

  // Flowing wave-field pattern (dimmed for content accessibility)
  useEffect(() => {
    const g = waveSvgRef.current;
    if (!g) return;
    const W = 600, H = 920, STEP = 11, LINES = 60, GAP = H / (LINES - 8);
    const ns = 'http://www.w3.org/2000/svg';
    for (let i = 0; i < LINES; i++) {
      const base = -40 + i * GAP;
      const depth = i / LINES;
      const amp = 14 + depth * 46;
      const ph = i * 0.42;
      let d = '';
      for (let x = -20; x <= W + 20; x += STEP) {
        const y =
          base +
          amp * Math.sin(x / 150 + ph) +
          (8 + depth * 18) * Math.sin(x / 58 + ph * 1.7) +
          depth * depth * 30 * Math.sin(x / 240 - ph * 0.5);
        d += (x < 0 ? 'M' : 'L') + x.toFixed(1) + ',' + y.toFixed(1) + ' ';
      }
      const p = document.createElementNS(ns, 'path');
      p.setAttribute('d', d);
      p.setAttribute('fill', 'none');
      const accent = i % 7 === 0;
      p.setAttribute(
        'stroke',
        accent ? 'rgba(150,236,255,.42)' : 'rgba(255,255,255,' + (0.04 + depth * 0.05).toFixed(3) + ')'
      );
      p.setAttribute('stroke-width', accent ? '1.6' : '1');
      if (accent) {
        p.setAttribute('class', 'accent');
        p.style.animationDelay = i * 0.3 + 's';
      }
      g.appendChild(p);
    }
    return () => {
      while (g.firstChild) g.removeChild(g.firstChild);
    };
  }, []);

  // transient-load resilience: retry a failed image once after a short delay
  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    if (img.dataset.retried) return;
    img.dataset.retried = '1';
    const src = img.src;
    setTimeout(() => {
      img.src = src.split('?')[0] + '?r=' + Date.now();
    }, 800);
  };

  // What's-new carousel
  const renderSlide = (n: number) => {
    if (busyRef.current) return;
    busyRef.current = true;
    const newIndex = ((n % slides.length) + slides.length) % slides.length;
    slideIndexRef.current = newIndex;
    setSlideIndex(newIndex);
    const s = slides[newIndex];

    // crossfade image: load into back layer, then swap show class
    if (frontRef.current === 0) {
      setImgBSrc(s.img);
      setTimeout(() => {
        setImgBShow(true);
        setImgAShow(false);
        frontRef.current = 1;
      }, 50);
    } else {
      setImgASrc(s.img);
      setTimeout(() => {
        setImgAShow(true);
        setImgBShow(false);
        frontRef.current = 0;
      }, 50);
    }

    // text: fade+slide out, swap, fade in
    setTextFadeOut(true);
    setTimeout(() => {
      setDisplayedSlide(s);
      setTextFadeOut(false);
    }, 320);
    setTimeout(() => {
      busyRef.current = false;
    }, 650);
  };

  const pauseTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    timerRef.current = setInterval(() => renderSlide(slideIndexRef.current + 1), 6500);
  };

  const goToSlide = (n: number) => {
    renderSlide(n);
    resetTimer();
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="auth">

      {/* ============ LEFT — BRAND ============ */}
      <aside
        className="brand"
        onMouseEnter={pauseTimer}
        onMouseLeave={resetTimer}
        onFocus={pauseTimer}
        onBlur={resetTimer}
      >
        <div className="waves">
          <svg id="waveSvg" viewBox="0 0 600 920" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <g className="wgroup" id="waveGroup" ref={waveSvgRef}></g>
          </svg>
        </div>

        <a href="/" className="logo" aria-label="Optimiser home"><img className="logo-img" src="/assets/optimiser-logo-dark-bg.svg" alt="Optimiser" /></a>

        <div className="upd">
          <div className="upd-frame">
            <div className="upd-bar"><i style={{ background: '#FF6058' }}></i><i style={{ background: '#FFBD2E' }}></i><i style={{ background: '#28C840' }}></i><span className="url"></span></div>
            <div className="upd-shot">
              <img id="updImgA" className={imgAShow ? 'show' : ''} src={imgASrc} alt="Optimiser update" onError={handleImgError} />
              <img id="updImgB" className={imgBShow ? 'show' : ''} src={imgBSrc} alt="" onError={handleImgError} />
            </div>
          </div>
          <div className="upd-body">
            <span className={`upd-eyebrow upd-fade${textFadeOut ? ' out' : ''}`} id="updEyebrow">{displayedSlide.eyebrow}</span>
            <h2 className={`upd-title upd-fade${textFadeOut ? ' out' : ''}`} id="updTitle">{displayedSlide.title}</h2>
            <p className={`upd-text upd-fade${textFadeOut ? ' out' : ''}`} id="updText">{displayedSlide.text}</p>
            <a className={`upd-btn upd-fade${textFadeOut ? ' out' : ''}`} id="updBtn" href={displayedSlide.link}>Learn more <span className="arr">→</span></a>
          </div>
        </div>

        <div className="upd-nav">
          <div className="dots" id="updDots" role="tablist" aria-label="Product updates">
            {slides.map((_, k) => (
              <button
                key={k}
                type="button"
                className={k === slideIndex ? 'on' : ''}
                role="tab"
                aria-label={`Update ${k + 1}`}
                aria-selected={k === slideIndex}
                onClick={() => goToSlide(k)}
              ></button>
            ))}
          </div>
          <div className="arrows">
            <button id="updPrev" aria-label="Previous update" onClick={() => goToSlide(slideIndexRef.current - 1)}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M19 12H5M11 18l-6-6 6-6" /></svg></button>
            <button id="updNext" aria-label="Next update" onClick={() => goToSlide(slideIndexRef.current + 1)}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M13 6l6 6-6 6" /></svg></button>
          </div>
        </div>

      </aside>

      {/* ============ RIGHT — FORM ============ */}
      <main className="panel">
        <div className="panel-top">
          <a href="/" className="logo panel-mobile-logo" aria-label="Optimiser home"><img src="/assets/optimiser-logo.svg" alt="Optimiser" style={{ height: '30px' }} /></a>
          <div className="acct">
            <span className="av">J</span>
            <span className="who" style={{ paddingRight: '14px' }}><b>Jamesh</b><span>jamesh@optimiser.com</span></span>
          </div>
        </div>

        <div className="form-wrap">
          <div className={`card rv${cardIn ? ' in' : ''}`} id="appsCard">
            <span className="eyebrow">Single sign-on</span>
            <h1>Choose your workspace</h1>
            <p className="sub">One login for every Optimiser app — pick up right where you left off.</p>

            <div className="apps">

            <a className="app" href="#">
              <span className="app-ic" style={{ background: 'rgba(7,93,168,.10)', color: 'var(--blue)' }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /></svg></span>
              <span className="app-info"><b>Optimiser CRM</b><span className="app-st on"><i></i>Active session · 2h ago</span></span>
              <span className="app-act">Open <span className="arr">→</span></span>
            </a>

            <a className="app" href="#">
              <span className="app-ic" style={{ background: 'rgba(0,161,223,.12)', color: '#0787BE' }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M2 8h20M8 21h8M12 17v4" /></svg></span>
              <span className="app-info"><b>Touchpoint</b><span className="app-st on"><i></i>Active session · 20m ago</span></span>
              <span className="app-act">Open <span className="arr">→</span></span>
            </a>

            <a className="app" href="#">
              <span className="app-ic" style={{ background: 'rgba(123,92,250,.12)', color: 'var(--violet)' }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9"><path d="M3 11l18-5v12L3 14v-3z" /><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" /></svg></span>
              <span className="app-info"><b>Marketing Suite</b><span className="app-st on"><i></i>Active session · yesterday</span></span>
              <span className="app-act">Open <span className="arr">→</span></span>
            </a>

            <a className="app" href="#">
              <span className="app-ic" style={{ background: 'rgba(255,170,43,.14)', color: '#B97A0A' }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9"><rect x="3" y="4" width="18" height="17" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg></span>
              <span className="app-info"><b>Event Management</b><span className="app-st "><i></i>Not signed in</span></span>
              <span className="app-act">Sign in <span className="arr">→</span></span>
            </a>

            <a className="app" href="#">
              <span className="app-ic" style={{ background: 'rgba(255,111,91,.13)', color: 'var(--coral)' }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9"><circle cx="9" cy="21" r="1.5" /><circle cx="19" cy="21" r="1.5" /><path d="M2 3h3l2.7 12.4a2 2 0 0 0 2 1.6h8.9a2 2 0 0 0 2-1.6L22 7H6" /></svg></span>
              <span className="app-info"><b>Shop Suite</b><span className="app-st "><i></i>Not signed in</span></span>
              <span className="app-act">Sign in <span className="arr">→</span></span>
            </a>

            <a className="app" href="#">
              <span className="app-ic" style={{ background: 'rgba(25,190,119,.13)', color: '#0E8A57' }}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9"><path d="M18.5 19a4.5 4.5 0 0 0 .5-8.97A6 6 0 0 0 7.34 9.5 4 4 0 0 0 8 17.46" /><path d="M12 12v6M9 15l3 3 3-3" /></svg></span>
              <span className="app-info"><b>Cloud Drive</b><span className="app-st "><i></i>Not signed in</span></span>
              <span className="app-act">Sign in <span className="arr">→</span></span>
            </a>
            </div>

            <div className="allout"><a href="/login">Sign out of all apps</a></div>
          </div>
        </div>

        <div className="panel-foot">
          <span>© 2026 Optimiser. All rights reserved.</span>
          <div className="links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Status</a>
          </div>
        </div>
      </main>

    </div>
  );
}
