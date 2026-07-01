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

export default function LoginPage() {
  // Form state
  const [emailError, setEmailError] = useState(false);
  const [passError, setPassError] = useState(false);
  const [formShake, setFormShake] = useState(false);
  const [submitLabel, setSubmitLabel] = useState<string | null>(null);
  const [submitDisabled, setSubmitDisabled] = useState(false);

  // Password visibility
  const [showPassword, setShowPassword] = useState(false);

  // Remember me checkbox
  const [remember, setRemember] = useState(true);

  // Carousel state
  const [slideIndex, setSlideIndex] = useState(0);
  const [frontImg, setFrontImg] = useState(0); // which img slot is "front"
  const [imgAShow, setImgAShow] = useState(true);
  const [imgBShow, setImgBShow] = useState(false);
  const [imgASrc, setImgASrc] = useState('/assets/kanban-view.webp');
  const [imgBSrc, setImgBSrc] = useState<string | undefined>(undefined);
  const [textFadeOut, setTextFadeOut] = useState(false);
  const [displayedSlide, setDisplayedSlide] = useState(slides[0]);

  // Refs
  const cardRef = useRef<HTMLFormElement>(null);
  const waveSvgRef = useRef<SVGGElement>(null);
  const imgARef = useRef<HTMLImageElement>(null);
  const imgBRef = useRef<HTMLImageElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const busyRef = useRef(false);
  const frontRef = useRef(0); // 0 = imgA is front, 1 = imgB is front
  const slideIndexRef = useRef(0);
  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // Reveal card on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;
    requestAnimationFrame(() => {
      if (cardRef.current) {
        cardRef.current.classList.add('in');
      }
    });
  }, []);

  // Build wave SVG paths
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const g = waveSvgRef.current;
    if (!g) return;

    const W = 600;
    const H = 920;
    const STEP = 11;
    const LINES = 60;
    const GAP = H / (LINES - 8);
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
        accent
          ? 'rgba(150,236,255,.42)'
          : `rgba(255,255,255,${(0.04 + depth * 0.05).toFixed(3)})`
      );
      p.setAttribute('stroke-width', accent ? '1.6' : '1');
      if (accent) {
        p.setAttribute('class', 'accent');
        p.style.animationDelay = i * 0.3 + 's';
      }

      g.appendChild(p);
    }

    return () => {
      // Clean up appended paths on unmount
      while (g.firstChild) {
        g.removeChild(g.firstChild);
      }
    };
  }, []);

  // Carousel logic
  const renderSlide = (n: number) => {
    if (busyRef.current) return;
    busyRef.current = true;

    const newIndex = ((n % slides.length) + slides.length) % slides.length;
    slideIndexRef.current = newIndex;
    setSlideIndex(newIndex);

    const s = slides[newIndex];

    // Crossfade images
    if (frontRef.current === 0) {
      // imgA is front, load new image into imgB
      setImgBSrc(s.img);
      // Give the browser a tick to load, then swap
      setTimeout(() => {
        setImgBShow(true);
        setImgAShow(false);
        frontRef.current = 1;
        setTimeout(() => { busyRef.current = false; }, 300);
      }, 50);
    } else {
      // imgB is front, load new image into imgA
      setImgASrc(s.img);
      setTimeout(() => {
        setImgAShow(true);
        setImgBShow(false);
        frontRef.current = 0;
        setTimeout(() => { busyRef.current = false; }, 300);
      }, 50);
    }

    // Text fade out then swap
    setTextFadeOut(true);
    setTimeout(() => {
      setDisplayedSlide(s);
      setTextFadeOut(false);
    }, 320);
  };

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      renderSlide(slideIndexRef.current + 1);
    }, 6500);
  };

  const goToSlide = (n: number) => {
    renderSlide(n);
    resetTimer();
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Form validation helpers
  const checkField = (type: 'email' | 'pass'): boolean => {
    const ref = type === 'email' ? emailRef : passRef;
    const ok = (ref.current?.value.trim().length ?? 0) > 0;
    if (type === 'email') setEmailError(!ok);
    else setPassError(!ok);
    return ok;
  };

  const handleEmailChange = () => {
    if (emailError) checkField('email');
  };

  const handlePassChange = () => {
    if (passError) checkField('pass');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const okE = checkField('email');
    const okP = checkField('pass');
    if (!okE || !okP) {
      setFormShake(true);
      setTimeout(() => setFormShake(false), 420);
      return;
    }
    setSubmitLabel('Signing in…');
    setSubmitDisabled(true);
    setTimeout(() => {
      setSubmitLabel('Welcome back ✓');
    }, 1200);
  };

  // SSO button handler
  const handleSso = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    const name = btn.getAttribute('data-sso');
    const orig = btn.innerHTML;
    btn.style.opacity = '0.6';
    btn.innerHTML = 'Connecting to ' + name + '…';
    setTimeout(() => {
      btn.innerHTML = orig;
      btn.style.opacity = '';
    }, 1400);
  };

  // Password peek icons
  const eyeIcon = (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );

  const eyeOffIcon = (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-6.5 0-10-7-10-7a18.5 18.5 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c6.5 0 10 7 10 7a18.5 18.5 0 0 1-2.16 3.19M1 1l22 22" />
      <path d="M9.5 9.5a3 3 0 0 0 4.24 4.24" />
    </svg>
  );

  return (
    <div className="auth">

      {/* ============ LEFT — BRAND ============ */}
      <aside className="brand">
        <div className="waves">
          <svg id="waveSvg" viewBox="0 0 600 920" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <g className="wgroup" ref={waveSvgRef} id="waveGroup"></g>
          </svg>
        </div>

        <a href="/" className="logo" aria-label="Optimiser home">
          <img className="logo-img" src="/assets/logo-drak-bg.svg" alt="Optimiser" />
        </a>

        <div className="upd">
          <div className="upd-frame">
            <div className="upd-bar">
              <i style={{ background: '#FF6058' }}></i>
              <i style={{ background: '#FFBD2E' }}></i>
              <i style={{ background: '#28C840' }}></i>
              <span className="url"></span>
            </div>
            <div className="upd-shot">
              <img
                ref={imgARef}
                id="updImgA"
                className={imgAShow ? 'show' : ''}
                src={imgASrc}
                alt="Optimiser update"
              />
              {imgBSrc && (
                <img
                  ref={imgBRef}
                  id="updImgB"
                  className={imgBShow ? 'show' : ''}
                  src={imgBSrc}
                  alt=""
                />
              )}
            </div>
          </div>

          <div className="upd-body">
            <span className={`upd-eyebrow upd-fade${textFadeOut ? ' out' : ''}`}>
              {displayedSlide.eyebrow}
            </span>
            <h2 className={`upd-title upd-fade${textFadeOut ? ' out' : ''}`}>
              {displayedSlide.title}
            </h2>
            <p className={`upd-text upd-fade${textFadeOut ? ' out' : ''}`}>
              {displayedSlide.text}
            </p>
            <a
              className={`upd-btn upd-fade${textFadeOut ? ' out' : ''}`}
              href={displayedSlide.link}
            >
              Learn more <span className="arr">→</span>
            </a>
          </div>
        </div>

        <div className="upd-nav">
          <div className="dots" id="updDots">
            {slides.map((_, k) => (
              <i
                key={k}
                className={k === slideIndex ? 'on' : ''}
                onClick={() => goToSlide(k)}
              />
            ))}
          </div>
          <div className="arrows">
            <button
              id="updPrev"
              aria-label="Previous update"
              onClick={() => goToSlide(slideIndexRef.current - 1)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M19 12H5M11 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              id="updNext"
              aria-label="Next update"
              onClick={() => goToSlide(slideIndexRef.current + 1)}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          </div>
        </div>
      </aside>

      {/* ============ RIGHT — FORM ============ */}
      <main className="panel">
        <div className="panel-top">
          <a href="/" className="logo panel-mobile-logo" aria-label="Optimiser home">
            <img src="/assets/optimiser-logo.svg" alt="Optimiser" style={{ height: '30px' }} />
          </a>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <span>Not a customer?</span>
            <a className="tlink" href="/free-crm">Try for free</a>
          </div>
        </div>

        <div className="form-wrap">
          <form
            ref={(el) => {
              // assign to both cardRef (for .rv reveal) and formRef (for shake)
              (cardRef as React.MutableRefObject<HTMLFormElement | null>).current = el;
              (formRef as React.MutableRefObject<HTMLFormElement | null>).current = el;
            }}
            className={`card rv${formShake ? ' shake' : ''}`}
            id="loginForm"
            noValidate
            onSubmit={handleSubmit}
          >
            <span className="eyebrow">Welcome back</span>
            <h1>Log in to your account</h1>
            <p className="sub">One secure login for your entire Optimiser workspace.</p>

            <div className={`field${emailError ? ' err' : ''}`} id="f-email">
              <label htmlFor="email">Email or username</label>
              <div className="field-wrap">
                <span className="lead">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M2 7l10 6 10-6" />
                  </svg>
                </span>
                <input
                  ref={emailRef}
                  id="email"
                  name="email"
                  type="text"
                  placeholder="you@company.com"
                  autoComplete="username"
                  required
                  onChange={handleEmailChange}
                />
              </div>
              <span className="msg">Please enter your email or username</span>
            </div>

            <div className={`field${passError ? ' err' : ''}`} id="f-pass">
              <label htmlFor="password">Password</label>
              <div className="field-wrap">
                <span className="lead">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <rect x="3" y="11" width="18" height="11" rx="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </span>
                <input
                  ref={passRef}
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  autoComplete="current-password"
                  required
                  onChange={handlePassChange}
                />
                <button
                  type="button"
                  className="peek"
                  id="peek"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                  onClick={() => setShowPassword((v) => !v)}
                >
                  {showPassword ? eyeOffIcon : eyeIcon}
                </button>
              </div>
              <span className="msg">Please enter your password</span>
            </div>

            <div className="opt-row">
              <label className="check">
                <input
                  type="checkbox"
                  id="remember"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                <span className="box">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                Keep me signed in
              </label>
              <div className="forgot-links">
                <a href="#">Forgot password?</a>
                <a href="#">Forgot username?</a>
              </div>
            </div>

            <button
              type="submit"
              className="btn btn-pri submit"
              id="submitBtn"
              disabled={submitDisabled}
              style={submitDisabled ? { opacity: 0.7 } : undefined}
            >
              {submitLabel ?? <>Log in <span className="arr">→</span></>}
            </button>

            <p className="fine">
              Protected by reCAPTCHA and subject to the Optimiser{' '}
              <a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a>.
            </p>
            <p className="login-agree">
              By logging in, you confirm that you agree to the{' '}
              <a href="/Optimiser-Master-Subscription-Agreement.pdf" target="_blank" rel="noopener noreferrer">Master Subscription Agreement</a>{' '}
              and{' '}
              <a href="https://docs.optimiser.com/projects/policies/privacy-policy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
            </p>
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
