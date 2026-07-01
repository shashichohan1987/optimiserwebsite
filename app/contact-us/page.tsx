import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import GsapLenis from '@/components/GsapLenis';
import ContactAnimations from './Animations';
import './styles.css';

export const metadata = {
  title: 'Contact Us — Optimiser | Talk to Sales & Support',
  description:
    'Get started with Optimiser\'s free 30-day trial. Unite sales, marketing, operations and analytics on one platform. No credit card required, full access, cancel anytime.',
};

export default function ContactUsPage() {
  return (
    <>
      <GsapLenis />
      <ContactAnimations />

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
              <span className="eyebrow rv">Contact us</span>
              <h1 className="rv">
                Let&apos;s start a <span className="grad-txt">conversation.</span>
              </h1>
              <p className="lede rv">
                Whether you&apos;re exploring the platform or already onboard, our team is here to
                help. Tell us what you&apos;re hoping to achieve — we&apos;ll show you the fastest
                path there.
              </p>
              <div className="trust-row rv">
                <div className="t">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Reply within one business day
                </div>
                <div className="t">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Real humans, no bots
                </div>
                <div className="t">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  UK-based team
                </div>
              </div>
            </div>

            {/* ── Contact Form ── */}
            <form className="form-card rv-r" id="trialForm" noValidate>
              <div className="fc-head">
                <span className="badge">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </span>
                <h2>Send us a message</h2>
              </div>
              <p className="fc-sub">Fill in the form and the right team will get back to you shortly.</p>
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
                <div className="field full">
                  <label htmlFor="rs">
                    I&apos;d like to talk about <span className="req">*</span>
                  </label>
                  <select id="rs" name="reason" defaultValue="" required>
                    <option value="">Select a topic…</option>
                    <option>Sales &amp; pricing</option>
                    <option>Product support</option>
                    <option>Booking a demo</option>
                    <option>Partnerships</option>
                    <option>Something else</option>
                  </select>
                  <span className="msg">Please choose a topic</span>
                </div>
                <div className="field full">
                  <label htmlFor="ms">
                    How can our team help you? <span className="req">*</span>
                  </label>
                  <textarea
                    id="ms"
                    name="message"
                    placeholder="Tell us a little about what you're looking for…"
                    required
                  ></textarea>
                  <span className="msg">Please add a short message</span>
                </div>
              </div>
              <button type="submit" className="btn btn-pri submit">
                Send message <span className="arr">→</span>
              </button>
              <p className="fine">
                By submitting you agree to our <a href="#">Terms</a> and{' '}
                <a href="#">Privacy Policy</a>.
              </p>

              <div className="form-success" id="formSuccess">
                <span className="tick">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                </span>
                <h2>
                  Thanks, <span id="successName">there</span>!
                </h2>
                <p>Your message is on its way to our team. We&apos;ll be in touch within one business day.</p>
                <a className="btn btn-pri" href="/">
                  Back to home <span className="arr">→</span>
                </a>
              </div>
            </form>
          </div>
        </div>
      </header>

      {/* ============ CONTACT CHANNELS ============ */}
      <section className="sec" id="channels" style={{ paddingTop: '8px' }}>
        <div className="wrap">
          <div className="sec-head rv" style={{ maxWidth: '560px', marginBottom: '44px' }}>
            <span className="eyebrow">Ways to reach us</span>
            <h2>
              Pick the team that <span className="grad-txt">fits your need</span>
            </h2>
          </div>
          <div className="chan-grid">
            {/* Sales */}
            <div className="chan rv">
              <span className="chan-tag">Pre-sales</span>
              <span className="chan-ic">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M3 11l18-5v12L3 14v-3z" />
                  <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
                </svg>
              </span>
              <h3>Talk to Sales</h3>
              <p>Find out how Optimiser can help you trailblaze a path to success.</p>
              <div className="chan-lines">
                <a className="cl" href="tel:+442039721702">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  +44 203 972 1702
                </a>
                <a className="cl" href="mailto:sales@optimiser.com">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M2 7l10 6 10-6" />
                  </svg>
                  sales@optimiser.com
                </a>
              </div>
              <div className="chan-hours">
                <span className="dotpulse"></span>Mon–Fri · 9:00–17:30 BST
              </div>
            </div>

            {/* Support */}
            <div className="chan rv">
              <span className="chan-tag">Customers</span>
              <span className="chan-ic">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M18.5 19a4.5 4.5 0 0 0 .5-8.97A6 6 0 0 0 7.34 9.5 4 4 0 0 0 8 17.46" />
                  <path d="M12 12v6M9 15l3 3 3-3" />
                </svg>
              </span>
              <h3>Get Support</h3>
              <p>Need help troubleshooting? Get fast answers from our specialist team.</p>
              <div className="chan-lines">
                <a className="cl" href="tel:+442039721701">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  +44 203 972 1701
                </a>
                <a className="cl" href="mailto:support@optimiser.com">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M2 7l10 6 10-6" />
                  </svg>
                  support@optimiser.com
                </a>
              </div>
              <div className="chan-hours">
                <span className="dotpulse"></span>Mon–Fri · 9:00–18:00 BST
              </div>
            </div>

            {/* Demo */}
            <div className="chan rv">
              <span className="chan-tag">See it live</span>
              <span className="chan-ic">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="M8 21h8M12 17v4" />
                  <path d="M10 8l4 2.5L10 13z" fill="currentColor" stroke="none" />
                </svg>
              </span>
              <h3>Book a Demo</h3>
              <p>Prefer a walkthrough? See the whole platform in a personalised session.</p>
              <div className="chan-lines">
                <a className="cl" href="#">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>
                  Schedule a session
                </a>
              </div>
              <div className="chan-hours">
                <span className="dotpulse"></span>30 mins · remote · free
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ HOURS + SOCIAL ============ */}
      <section className="sec" id="hours" style={{ paddingTop: '24px' }}>
        <div className="wrap">
          <div className="cband rv">
            <div className="cband-l">
              <h3>Opening hours</h3>
              <p className="sub">All times shown in GMT / BST. We reply to messages within one business day.</p>
              <div className="hours-row">
                <span className="d">Monday – Thursday</span>
                <span className="h">9:00 — 18:00</span>
              </div>
              <div className="hours-row">
                <span className="d">Friday</span>
                <span className="h">9:00 — 17:30</span>
              </div>
              <div className="hours-row">
                <span className="d">Saturday – Sunday</span>
                <span className="h closed">Closed</span>
              </div>
            </div>
            <div className="cband-r">
              <div className="gl"></div>
              <h3>Find us online</h3>
              <p>Follow along for product news, tips and stories from the Optimiser community.</p>
              <div className="socials">
                <a
                  href="https://www.facebook.com/optimisersaas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com/optimisersaas"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.24 2H21.5l-7.13 8.15L22.75 22h-6.57l-5.14-6.72L5.16 22H1.9l7.62-8.72L1.25 2h6.74l4.64 6.14zm-1.15 18h1.81L7.01 3.88H5.06z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/optimiser-saas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5zM3 9h4v12H3zM9 9h3.8v1.71h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.54 4.78 5.85V21h-4v-5.34c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.81V21H9z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/optimisersaas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="20" rx="5.5" />
                    <circle cx="12" cy="12" r="4.2" />
                    <circle cx="17.4" cy="6.6" r="1.2" fill="currentColor" stroke="none" />
                  </svg>
                </a>
              </div>
              <div className="glco">Optimiser is part of Glotelligence Limited.</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
