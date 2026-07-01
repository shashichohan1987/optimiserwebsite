"use client";

import { useEffect, useRef, useState } from "react";

export default function LoginV2Animations() {
  const formRef = useRef<HTMLFormElement>(null);
  const emailRef = useRef<HTMLDivElement>(null);
  const passRef = useRef<HTMLDivElement>(null);
  const submitRef = useRef<HTMLButtonElement>(null);
  const peekRef = useRef<HTMLButtonElement>(null);
  const passInputRef = useRef<HTMLInputElement>(null);
  const cardRef = useRef<HTMLFormElement>(null);
  const [peekVisible, setPeekVisible] = useState(false);
  const [submitLabel, setSubmitLabel] = useState<string>("Log in →");

  useEffect(() => {
    requestAnimationFrame(() => {
      cardRef.current?.classList.add("in");
    });
  }, []);

  const togglePeek = () => {
    if (!passInputRef.current) return;
    const show = passInputRef.current.type === "password";
    passInputRef.current.type = show ? "text" : "password";
    setPeekVisible(show);
    peekRef.current?.setAttribute("aria-label", show ? "Hide password" : "Show password");
  };

  const handleSso = (e: React.MouseEvent<HTMLButtonElement>) => {
    const btn = e.currentTarget;
    const name = btn.dataset.sso || "SSO";
    const orig = btn.innerHTML;
    btn.style.opacity = "0.6";
    btn.innerHTML = `Connecting to ${name}…`;
    setTimeout(() => { btn.innerHTML = orig; btn.style.opacity = ""; }, 1400);
  };

  const checkField = (fieldEl: HTMLDivElement | null) => {
    if (!fieldEl) return true;
    const inp = fieldEl.querySelector("input");
    const ok = (inp?.value.trim().length || 0) > 0;
    fieldEl.classList.toggle("err", !ok);
    return ok;
  };

  const handleInput = (fieldRef: React.RefObject<HTMLDivElement | null>) => () => {
    const f = fieldRef.current;
    if (f?.classList.contains("err")) checkField(f);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const okE = checkField(emailRef.current);
    const okP = checkField(passRef.current);
    if (!okE || !okP) {
      formRef.current?.classList.add("shake");
      setTimeout(() => formRef.current?.classList.remove("shake"), 420);
      return;
    }
    if (submitRef.current) {
      submitRef.current.innerHTML = "Signing in…";
      submitRef.current.style.opacity = "0.7";
      submitRef.current.disabled = true;
      setTimeout(() => { if (submitRef.current) submitRef.current.innerHTML = "Welcome back ✓"; }, 1200);
    }
  };

  return (
    <form className="lv2-card lv2-rv" id="loginForm" ref={cardRef} onSubmit={handleSubmit} noValidate>
      <span className="eyebrow">Welcome back</span>
      <h1>Log in to your account</h1>
      <p className="sub">One secure login for your entire Optimiser workspace.</p>

      <div className="sso">
        <button type="button" className="sso-btn primary-sso" data-sso="SSO" onClick={handleSso}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
            <rect x="3" y="11" width="18" height="11" rx="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          Single sign-on (SSO)
          <span className="sso-tag">SAML</span>
        </button>
      </div>

      <div className="divider">or with email</div>

      <div className="field" id="f-email" ref={emailRef}>
        <label htmlFor="lv2-email">Email or username</label>
        <div className="field-wrap">
          <span className="lead">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 7l10 6 10-6" />
            </svg>
          </span>
          <input id="lv2-email" name="email" type="text" placeholder="you@company.com" autoComplete="username" required onChange={handleInput(emailRef)} />
        </div>
        <span className="msg">Please enter your email or username</span>
      </div>

      <div className="field" id="f-pass" ref={passRef}>
        <div className="lbl-row">
          <label htmlFor="lv2-password">Password</label>
          <a href="#" tabIndex={-1}>Forgot password?</a>
        </div>
        <div className="field-wrap">
          <span className="lead">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
          </span>
          <input id="lv2-password" name="password" type="password" placeholder="••••••••" autoComplete="current-password" required ref={passInputRef} onChange={handleInput(passRef)} />
          <button type="button" className="peek" ref={peekRef} aria-label="Show password" onClick={togglePeek}>
            {peekVisible ? (
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-6.5 0-10-7-10-7a18.5 18.5 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c6.5 0 10 7 10 7a18.5 18.5 0 0 1-2.16 3.19M1 1l22 22" />
                <path d="M9.5 9.5a3 3 0 0 0 4.24 4.24" />
              </svg>
            ) : (
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" />
              </svg>
            )}
          </button>
        </div>
        <span className="msg">Please enter your password</span>
      </div>

      <div className="opt-row">
        <label className="lv2-check">
          <input type="checkbox" id="remember" defaultChecked />
          <span className="box">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </span>
          Keep me signed in
        </label>
        <a href="#" style={{ fontSize: "12.5px", color: "var(--blue)", fontWeight: 500 }}>Forgot username?</a>
      </div>

      <button type="submit" className="btn btn-pri submit" ref={submitRef}>
        {submitLabel}
      </button>

      <p className="fine">Protected by reCAPTCHA and subject to the Optimiser <a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a>.</p>
      <p className="alt-row">New to Optimiser? <a href="/free-crm">Start a free trial →</a></p>
    </form>
  );
}
