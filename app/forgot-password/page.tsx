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
    img: '/assets/list-view.webp',
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

export default function ForgotPasswordPage() {
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

  // Form state
  const [recError, setRecError] = useState(false);
  const [formShake, setFormShake] = useState(false);
  const [submitLabel, setSubmitLabel] = useState<string | null>(null);
  const [submitDisabled, setSubmitDisabled] = useState(false);
  const [submitOpacity, setSubmitOpacity] = useState<string | undefined>(undefined);
  const [subText, setSubText] = useState('To reset your password, enter your registered Optimiser username.');

  // Refs
  const waveSvgRef = useRef<SVGGElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const busyRef = useRef(false);
  const frontRef = useRef(0);
  const slideIndexRef = useRef(0);
  const recRef = useRef<HTMLInputElement>(null);

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

  // Recovery form
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const ok = (recRef.current?.value.trim().length ?? 0) > 0;
    setRecError(!ok);
    if (!ok) {
      setFormShake(true);
      setTimeout(() => setFormShake(false), 420);
      return;
    }
    setSubmitLabel('Sending reset link…');
    setSubmitOpacity('.7');
    setSubmitDisabled(true);
    setTimeout(() => {
      setSubmitLabel('Reset link sent ✓');
      setSubmitOpacity('1');
      setSubText('If that username exists, a reset link is on its way to the email on file. Check your inbox.');
    }, 1400);
  };

  const handleRecInput = () => {
    if (recError && recRef.current?.value.trim()) setRecError(false);
  };

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
              <img id="updImgA" className={imgAShow ? 'show' : ''} src={imgASrc} alt="Optimiser update" />
              <img id="updImgB" className={imgBShow ? 'show' : ''} src={imgBSrc} alt="" />
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
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <span>Not a customer?</span>
            <a className="tlink" href="/free-crm">Try for free</a>
          </div>
        </div>

        <div className="form-wrap">
          <form className={`card rv${cardIn ? ' in' : ''}${formShake ? ' shake' : ''}`} id="recForm" noValidate onSubmit={handleSubmit}>
            <span className="eyebrow">Account recovery</span>
            <h1>Forgot your password?</h1>
            <p className="sub">{subText}</p>

            <div className={`field${recError ? ' err' : ''}`} id="f-rec">
              <label htmlFor="rec">Username</label>
              <div className="field-wrap">
                <span className="lead"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /></svg></span>
                <input
                  ref={recRef}
                  id="rec"
                  name="rec"
                  type="text"
                  placeholder="your.username"
                  autoComplete="username"
                  required
                  aria-invalid={recError ? 'true' : 'false'}
                  onChange={handleRecInput}
                />
              </div>
              <span className="msg" role="alert">Please enter your username</span>
            </div>

            <p className="fine" style={{ textAlign: 'left', margin: '2px 0 18px' }}>This site is protected by reCAPTCHA and the Google <a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a> apply.</p>

            <button
              type="submit"
              className="btn btn-pri submit"
              id="submitBtn"
              disabled={submitDisabled}
              style={submitOpacity !== undefined ? { opacity: submitOpacity } : undefined}
            >
              {submitLabel ?? <>Reset password <span className="arr">→</span></>}
            </button>

            <div className="help-row">
              <span>Need help with login?</span>
              <a className="help-btn" href="/contact-us">Contact us</a>
            </div>
            <p className="alt-row"><a href="/login">← Back to log in</a></p>
          </form>
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
