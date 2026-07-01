import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GsapLenis from "@/components/GsapLenis";
import Animations from "./Animations";
import "./styles.css";

export const metadata: Metadata = {
  title: "Start Your Free 30-Day Trial — Optimiser CRM | No Credit Card Required",
  description:
    "Get started with Optimiser's free 30-day trial. Unite sales, marketing, operations and analytics on one platform. No credit card required, full access, cancel anytime.",
};

export default function FreeCrmPage() {
  return (
    <>
      <GsapLenis />
      <Animations />

      <div id="scrollbar"></div>
      <div className="grain"></div>
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>

      <Nav />

      {/* ============ HERO + FORM ============ */}
      <header className="trial-hero">
        <div className="aur aur-1"></div>
        <div className="whero-grid-bg"></div>
        <div className="wrap">
          <div className="trial-grid">
            <div className="trial-left">
              <span className="eyebrow rv">Free 30-day trial</span>
              <h1 className="rv">
                Run your whole business on{" "}
                <span className="grad-txt">one free platform.</span>
              </h1>
              <div className="trial-pills rv">
                <span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Simple
                </span>
                <span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Fully customisable
                </span>
                <span>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Comprehensive
                </span>
              </div>
              <p className="lede rv">
                Unite sales, marketing, operations, e-commerce and analytics on a single platform. Start your 30-day
                free trial today — full access, every module included.
              </p>
              <div className="trust-row rv">
                <div className="t">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  No credit card required
                </div>
                <div className="t">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Full access for 30 days
                </div>
                <div className="t">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Cancel anytime
                </div>
              </div>
            </div>

            <form className="form-card rv-r" id="trialForm" noValidate>
              <div className="fc-head">
                <span className="badge">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 3l14 9-14 9V3z" />
                  </svg>
                </span>
                <h2>Start your free trial</h2>
              </div>
              <p className="fc-sub">
                One powerful platform for all your business needs — set up in minutes.
              </p>
              <div className="form-grid">
                <div className="field">
                  <label htmlFor="fn">
                    First Name <span className="req">*</span>
                  </label>
                  <input
                    id="fn"
                    name="firstName"
                    type="text"
                    placeholder="Jane"
                    autoComplete="given-name"
                    required
                  />
                  <span className="msg">Please enter your first name</span>
                </div>
                <div className="field">
                  <label htmlFor="ln">
                    Last Name <span className="req">*</span>
                  </label>
                  <input
                    id="ln"
                    name="lastName"
                    type="text"
                    placeholder="Doe"
                    autoComplete="family-name"
                    required
                  />
                  <span className="msg">Please enter your last name</span>
                </div>
                <div className="field full">
                  <label htmlFor="em">
                    Work Email <span className="req">*</span>
                  </label>
                  <input
                    id="em"
                    name="email"
                    type="email"
                    placeholder="jane@company.com"
                    autoComplete="email"
                    required
                  />
                  <span className="msg">Enter a valid work email</span>
                </div>
                <div className="field full">
                  <label htmlFor="ph">
                    Phone <span className="req">*</span>
                  </label>
                  <input
                    id="ph"
                    name="phone"
                    type="tel"
                    placeholder="+44 20 1234 5678"
                    autoComplete="tel"
                    required
                  />
                  <span className="msg">Please enter your phone number</span>
                </div>
                <div className="field">
                  <label htmlFor="co">
                    Company Name <span className="req">*</span>
                  </label>
                  <input
                    id="co"
                    name="company"
                    type="text"
                    placeholder="Acme Ltd"
                    autoComplete="organization"
                    required
                  />
                  <span className="msg">Please enter your company</span>
                </div>
                <div className="field">
                  <label htmlFor="sz">Company Size</label>
                  <select id="sz" name="size" defaultValue="">
                    <option value="">Select&hellip;</option>
                    <option>1–10</option>
                    <option>11–50</option>
                    <option>51–200</option>
                    <option>201–1000</option>
                    <option>1000+</option>
                  </select>
                  <span className="msg"></span>
                </div>
                <div className="field full">
                  <label htmlFor="jt">Job Title</label>
                  <input
                    id="jt"
                    name="jobTitle"
                    type="text"
                    placeholder="e.g. Sales Director"
                    autoComplete="organization-title"
                  />
                  <span className="msg"></span>
                </div>
              </div>
              <button type="submit" className="btn btn-pri submit">
                Start my free trial <span className="arr">→</span>
              </button>
              <p className="fine">
                By starting a trial you agree to our{" "}
                <a href="#">Terms</a> and <a href="#">Privacy Policy</a>.
              </p>

              <div className="form-success" id="formSuccess">
                <span className="tick">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                <h2>
                  You&apos;re all set, <span id="successName">there</span>!
                </h2>
                <p>
                  Your 30-day trial is ready. Check your inbox for a link to activate your Optimiser workspace.
                </p>
                <a className="btn btn-pri" href="#">
                  Open my workspace <span className="arr">→</span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </header>

      {/* ============ WHAT'S INCLUDED ============ */}
      <section className="sec incl">
        <div className="wrap">
          <div className="sec-head rv">
            <span className="eyebrow">What&apos;s included</span>
            <h2>
              Every module, <span className="grad-txt">free for 30 days</span>
            </h2>
            <p>
              No locked features, no upsell walls. Your trial opens the entire platform — explore everything and keep
              what works.
            </p>
          </div>
          <div className="incl-grid">
            <article className="incl-card rv">
              <div className="ic-head">
                <span className="ic-ic">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  </svg>
                </span>
                <h3>CRM</h3>
              </div>
              <ul>
                <li>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Calendar
                </li>
                <li>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Contacts
                </li>
                <li>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Accounts
                </li>
                <li>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Pipeline
                </li>
                <li>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Analytics
                </li>
              </ul>
            </article>

            <article className="incl-card rv">
              <div className="ic-head">
                <span className="ic-ic">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                    <path d="M3 3v18h18" />
                    <path d="M7 15l4-4 3 3 5-6" />
                  </svg>
                </span>
                <h3>Sales Suite</h3>
              </div>
              <ul>
                <li>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Invoicing
                </li>
                <li>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Document signing
                </li>
                <li>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Proposal generation
                </li>
              </ul>
            </article>

            <article className="incl-card rv">
              <div className="ic-head">
                <span className="ic-ic">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                    <path d="M3 11l16-7-4 16-5-5z" />
                  </svg>
                </span>
                <h3>Marketing Suite</h3>
              </div>
              <ul>
                <li>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Email marketing
                </li>
                <li>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Survey tool
                </li>
              </ul>
            </article>

            <article className="incl-card rv">
              <div className="ic-head">
                <span className="ic-ic">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                    <rect x="3" y="4" width="18" height="16" rx="2" />
                    <path d="M3 9h18M8 4v16" />
                  </svg>
                </span>
                <h3>Project Management</h3>
              </div>
              <ul>
                <li>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Task management
                </li>
              </ul>
            </article>

            <article className="incl-card rv">
              <div className="ic-head">
                <span className="ic-ic">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                </span>
                <h3>Event Management</h3>
              </div>
              <ul>
                <li>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Events
                </li>
              </ul>
            </article>

            <article className="incl-card rv">
              <div className="ic-head">
                <span className="ic-ic">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                    <path d="M17.5 19a4.5 4.5 0 0 0 .5-8.97A6 6 0 0 0 6.34 9.5 4 4 0 0 0 7 17.46" />
                    <path d="M8 19h9.5" />
                  </svg>
                </span>
                <h3>Cloud Computing</h3>
              </div>
              <ul>
                <li>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Cloud storage
                </li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* ============ ASSISTANCE ============ */}
      <section className="sec assist" style={{ paddingTop: "40px" }}>
        <div className="wrap">
          <div className="cta rv">
            <div className="grid-lines"></div>
            <div className="inner">
              <span className="eyebrow" style={{ justifyContent: "center" }}>
                Need immediate assistance?
              </span>
              <h2>
                Talk to our team <span className="grad-txt">before you start</span>
              </h2>
              <p>Prefer a hand getting set up? Our team is on call to walk you through the platform.</p>
              <div className="assist-contacts">
                <a className="acard" href="tel:+442039721702">
                  <span className="ac-ic">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  </span>
                  <span className="ac-tx">
                    <span className="lab">Call us</span>
                    <span className="val">+44 203 972 1702</span>
                    <span className="note">8:30am – 5:30pm BST (Mon–Fri)</span>
                  </span>
                </a>
                <a className="acard" href="mailto:sales@optimiser.com">
                  <span className="ac-ic">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M2 7l10 6 10-6" />
                    </svg>
                  </span>
                  <span className="ac-tx">
                    <span className="lab">Email us</span>
                    <span className="val">sales@optimiser.com</span>
                    <span className="note">We reply within one business day</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
