import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GsapLenis from "@/components/GsapLenis";
import Animations from "./Animations";
import "./styles.css";

export const metadata = {
  title: "CRM Software — Manage Every Customer Relationship in One Platform | Optimiser",
  description:
    "Optimiser CRM brings contacts, accounts, pipeline and analytics onto a single platform — so your team sells faster, sees clearer, and pays for one thing, not ten.",
};

export default function CrmPage() {
  return (
    <>
      <GsapLenis />
      <Nav />
      <Animations />

      <div id="scrollbar"></div>
      <div className="grain"></div>
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>

      {/* ============ HERO ============ */}
      <header className="whero">
        <div className="aur aur-1"></div>
        <div className="whero-grid-bg"></div>
        <div className="wrap">
          <div className="whero-grid">
            <div>
              <span className="eyebrow rv">CRM · Customer Relationship Management</span>
              <h1 className="rv">
                Every customer relationship,{" "}
                <span className="grad-txt">on one platform.</span>
              </h1>
              <p className="lede rv">
                Manage contacts, accounts and your pipeline from a single CRM — with
                data-driven automation that converts more leads using fewer resources, and
                analytics that keep every team on the same page.
              </p>
              <ul className="hero-points rv">
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  One CRM for sales, contacts and pipeline success
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  All your company data in one place for clear analytics
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Automations that convert more leads with less effort
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Integrated with every module to share data instantly
                </li>
              </ul>
              <div className="whero-cta rv">
                <a className="btn btn-pri" href="#trial">
                  Try for free <span className="arr">→</span>
                </a>
                <a className="btn btn-gho" href="#trial">
                  Book a demo
                </a>
              </div>
              <div className="whero-note rv">
                <i></i>30-day free trial — <b>no credit card required.</b>
              </div>
            </div>
            <div className="hero-shot rv-r">
              <div className="hero-shot-glow"></div>
              <div className="hero-shot-frame">
                <div className="plat-bar">
                  <i className="d r"></i>
                  <i className="d y"></i>
                  <i className="d g"></i>
                  <span className="url">app.optimiser.com/contacts</span>
                </div>
                <img
                  src="/assets/kanban-view.webp"
                  alt="Optimiser CRM kanban board grouping contacts by pipeline stage"
                  decoding="async"
                  fetchPriority="high"
                />
              </div>
              <div className="hero-chip hc1">
                <i style={{ background: "var(--green)" }}></i>Pipeline · live
              </div>
              <div className="hero-chip hc4">
                <i style={{ background: "var(--cyan)" }}></i>1,204 contacts synced
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ============ PROOF STRIP ============ */}
      <section className="proof" id="overview">
        <div className="wrap">
          <div className="pf rv">
            <span className="pic">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                <circle cx="12" cy="12" r="9" />
                <path d="M8 12l2.5 2.5L16 9" />
              </svg>
            </span>
            <div>
              <h3>One powerful platform</h3>
              <p>
                Contacts, accounts, pipeline and analytics on the same data — nothing falls
                through the cracks.
              </p>
            </div>
          </div>
          <div className="pf rv">
            <span className="pic">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.1h6c0-.8.4-1.6 1-2.1A7 7 0 0 0 12 2z" />
              </svg>
            </span>
            <div>
              <h3>Simple to use</h3>
              <p>
                Clean, guided workflows your team picks up in days — not months of training.
              </p>
            </div>
          </div>
          <div className="pf rv">
            <span className="pic">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                <rect x="3" y="4" width="7" height="7" rx="1.5" />
                <rect x="14" y="4" width="7" height="7" rx="1.5" />
                <rect x="3" y="15" width="7" height="5" rx="1.5" />
                <rect x="14" y="15" width="7" height="5" rx="1.5" />
              </svg>
            </span>
            <div>
              <h3>Comprehensive</h3>
              <p>
                From first lead to repeat customer, the whole journey runs in one connected
                place.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FEATURE ROWS ============ */}
      <section className="sec">
        <div className="wrap">
          <div className="crm-stack">

            {/* Row 1 — Platform */}
            <div className="frow" id="platform">
              <div className="rv">
                <div className="f-num">01 / GROW</div>
                <h2>One platform to grow small businesses and enterprises</h2>
                <p className="f-lead">
                  Built to support every part of the customer relationship — so you can build
                  lasting relationships everywhere prospects meet your business.
                </p>
                <ul className="feat-list">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Supports each component of the customer relationship role
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Build lasting relationships across your whole sales funnel
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Complete communication transparency for every lead
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Data-driven automations help you make smarter decisions
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Manage contacts, accounts and pipeline from one place
                  </li>
                </ul>
              </div>
              <div className="f-vis rv-r">
                <div className="f-glow"></div>
                <div className="plat-bar">
                  <i className="d r"></i>
                  <i className="d y"></i>
                  <i className="d g"></i>
                  <span className="url">app.optimiser.com/contacts</span>
                </div>
                <img
                  src="/assets/list-view.webp"
                  alt="Optimiser CRM contact list with sortable records"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            {/* Row 2 — Sales Cycle */}
            <div className="frow" id="sales-cycle">
              <div className="rv">
                <div className="f-num">02 / SELL</div>
                <h2>A faster, more productive sales cycle with less</h2>
                <p className="f-lead">
                  Manage every ongoing lead collaboratively, and use full contact history to
                  deliver a personalised experience at every touchpoint.
                </p>
                <ul className="feat-list">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Manage multiple ongoing leads collaboratively with your team
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Use contact history for a personalised customer experience
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Track the journey with omnichannel connectivity
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Allocate resources to areas of high demand
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Predictive lead scoring saves time and money
                  </li>
                </ul>
              </div>
              <div className="f-vis rv-r">
                <div className="f-glow"></div>
                <div className="plat-bar">
                  <i className="d r"></i>
                  <i className="d y"></i>
                  <i className="d g"></i>
                  <span className="url">app.optimiser.com/pipeline</span>
                </div>
                <img
                  src="/assets/kanban-view.webp"
                  alt="Optimiser CRM kanban pipeline grouping deals by stage"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            {/* Row 3 — Analytics */}
            <div className="frow" id="analytics">
              <div className="rv">
                <div className="f-num">03 / DECIDE</div>
                <h2>Analytics for sound business planning</h2>
                <p className="f-lead">
                  Dive deep into your data, run unlimited reports, and see your most important
                  metrics at a glance — then share them live with teams and partners.
                </p>
                <ul className="feat-list">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Dive deep into your data within the CRM platform
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Run unlimited reports on the metrics that matter
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Support the sales funnel and set ambitious KPIs
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Share and export reports for live, precise updates
                  </li>
                </ul>
              </div>
              <div className="f-vis rv-r">
                <div className="f-glow"></div>
                <div className="plat-bar">
                  <i className="d r"></i>
                  <i className="d y"></i>
                  <i className="d g"></i>
                  <span className="url">app.optimiser.com/analytics</span>
                </div>
                <img
                  src="/assets/list-columns.webp"
                  alt="Optimiser CRM analytics with customisable columns and reporting"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============ CORE FEATURES GRID ============ */}
      <section className="sec" id="features" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head rv">
            <span className="eyebrow">Core CRM features</span>
            <h2>
              Everything your team needs,{" "}
              <span className="grad-txt">in one CRM</span>
            </h2>
            <p>
              Shorten the pipeline, retain more clients, and generate more value — with the
              tools that work better because they share the same data.
            </p>
          </div>
          <div className="fgrid">
            <article className="fcard rv">
              <span className="fc-ic">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="3" width="8" height="8" rx="1.5" />
                  <rect x="13" y="3" width="8" height="5" rx="1.5" />
                  <rect x="13" y="10" width="8" height="11" rx="1.5" />
                  <rect x="3" y="13" width="8" height="8" rx="1.5" />
                </svg>
              </span>
              <h3>Dashboard</h3>
              <p>Every key metric at a glance the moment you sign in.</p>
            </article>
            <article className="fcard rv">
              <span className="fc-ic">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="4" width="18" height="17" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
              </span>
              <h3>Calendar</h3>
              <p>Schedule, sync and never miss a follow-up or meeting.</p>
            </article>
            <article className="fcard rv">
              <span className="fc-ic">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                </svg>
              </span>
              <h3>Contacts</h3>
              <p>360° profiles with full history and interaction tracking.</p>
            </article>
            <article className="fcard rv">
              <span className="fc-ic">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-3" />
                </svg>
              </span>
              <h3>Accounts</h3>
              <p>Group contacts under companies and manage them together.</p>
            </article>
            <article className="fcard rv">
              <span className="fc-ic">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="3" y="4" width="4" height="16" rx="1" />
                  <rect x="10" y="4" width="4" height="11" rx="1" />
                  <rect x="17" y="4" width="4" height="7" rx="1" />
                </svg>
              </span>
              <h3>Pipeline</h3>
              <p>Visual stages and segmentation that move deals forward.</p>
            </article>
            <article className="fcard rv">
              <span className="fc-ic">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M3 3v18h18" />
                  <path d="M7 14l3-3 3 3 5-6" />
                </svg>
              </span>
              <h3>Analytics</h3>
              <p>Unlimited reports on the data metrics that matter most.</p>
            </article>
            <article className="fcard rv">
              <span className="fc-ic">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 3l2.5 5 5.5.8-4 3.9.9 5.5L12 21l-4.9-2.8.9-5.5-4-3.9L9.5 8z" />
                </svg>
              </span>
              <h3>Customisable</h3>
              <p>Tailor fields, modules and workflows to fit your business.</p>
            </article>
            <article className="fcard rv">
              <span className="fc-ic">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M9 11l3 3L22 4" />
                  <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
              </span>
              <h3>Tasks</h3>
              <p>Assign, track and complete work without leaving the CRM.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ============ WHY OPTIMISER CRM ============ */}
      <section className="sec why" id="why-crm">
        <div className="wrap">
          <div className="sec-head rv">
            <span className="eyebrow">Why Optimiser</span>
            <h2>
              The best CRM is the one{" "}
              <span className="grad-txt">built around you</span>
            </h2>
            <p>
              A powerful, integrated and customisable CRM at a unified cost — solutions for
              every type of business, from SMEs to global enterprises.
            </p>
          </div>
          <div className="vgrid">
            <article className="vcard rv">
              <h3>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                  <path d="M5 3l14 9-14 9V3z" />
                </svg>
                Free for 30 days
              </h3>
              <p>
                Try the full enterprise licence free — no credit card required. See how much
                your business can grow in a single month with a CRM-integrated suite.
              </p>
            </article>
            <article className="vcard rv">
              <h3>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                  <path d="M3 21h18M6 21V9l6-4 6 4v12M10 21v-5h4v5" />
                </svg>
                SME to enterprise
              </h3>
              <p>
                CRM software for businesses of every size. Whether you want rapid expansion or
                to manage a company across territories, there is a tailored solution.
              </p>
            </article>
            <article className="vcard rv">
              <h3>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-2.82 1.17V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 8 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 14H4.5a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 6 8.6a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 11 4.6h.09A2 2 0 0 1 15 4.5v.09A1.65 1.65 0 0 0 16 6" />
                </svg>
                Fully customisable
              </h3>
              <p>
                Include exactly the software suites your business needs. Our onboarding team
                defines your scope and the areas where development can help most.
              </p>
            </article>
            <article className="vcard rv">
              <h3>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                  <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
                One unified price
              </h3>
              <p>
                Condense your software costs under a single platform. Pay only for the tools
                essential to your focus areas — maximum value for every business size.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="sec" id="trial" style={{ paddingTop: "40px" }}>
        <div className="wrap">
          <div className="cta rv">
            <div className="grid-lines"></div>
            <div className="inner">
              <span className="eyebrow" style={{ justifyContent: "center" }}>
                Get started
              </span>
              <h2>
                Ready to run your whole business on{" "}
                <span className="grad-txt">one platform?</span>
              </h2>
              <p>
                Start your 30-day free trial today. One powerful platform, simple to use,
                comprehensive — and no credit card required.
              </p>
              <div className="cta-btns">
                <a className="btn btn-pri" href="/free-crm">
                  Try for free <span className="arr">→</span>
                </a>
                <a className="btn btn-gho on-dark" href="/contact-us">
                  Schedule a demo
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
