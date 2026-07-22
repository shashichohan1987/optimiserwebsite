import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GsapLenis from "@/components/GsapLenis";
import Animations from "./Animations";
import "./styles.css";

export const metadata = {
  title: "Lead Management Software | Optimiser",
  description:
    "Optimiser Lead Management — track leads to increase conversions with a holistic pipeline, predictive scoring, automated nurturing and integrated analytics.",
};

export default function LeadManagementPage() {
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
        <div className="whero-grid-bg"></div>
        <div className="wrap">
          <div className="whero-grid">
            <div>
              <span className="eyebrow rv">Lead Management</span>
              <h1 className="rv">
                Track leads. <span className="grad-txt">Increase conversions.</span>
              </h1>
              <p className="lede rv">
                From marketing to sales, take a holistic approach to lead management — boosting sales and productivity
                from one pipeline.
              </p>
              <ul className="hero-points rv">
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Prioritise the strongest leads with analytics
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  One streamlined process for high-volume lead management
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Automate parts of the sales funnel to save nurturing time
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Predictive scoring targets every lead&apos;s buying intent
                </li>
              </ul>
              <div className="whero-cta rv">
                <a className="btn btn-pri" href="/free-crm">
                  Try for free <span className="arr">→</span>
                </a>
                <a className="btn btn-gho" href="#how">
                  See how it works
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
                  <span className="url">app.optimiser.com/leads/inbox</span>
                </div>
                <div className="lm-mock">
                  <div className="lm-inbox">
                    <h5>
                      <span>New leads · today</span>
                      <span>23</span>
                    </h5>
                    <div className="lm-lead hot">
                      <div className="top">
                        <span className="who" style={{ background: "linear-gradient(135deg,#FF6F5B,#FFAA2B)" }}>EW</span>
                        <span className="nm">
                          <i></i>
                          <i></i>
                        </span>
                        <span className="tag" style={{ background: "rgba(255,111,91,.15)", color: "#B03A28" }}>Hot · 92</span>
                      </div>
                      <div className="lm-score">
                        <span className="lbl">Score</span>
                        <span className="track">
                          <i></i>
                        </span>
                      </div>
                      <div className="lm-route">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        Routed to <span className="who" style={{ background: "linear-gradient(135deg,#075DA8,#00A1DF)" }}>JW</span> James · Sales
                      </div>
                    </div>
                    <div className="lm-lead">
                      <div className="top">
                        <span className="who" style={{ background: "linear-gradient(135deg,#7B5CFA,#00A1DF)" }}>TP</span>
                        <span className="nm">
                          <i style={{ width: "62%" }}></i>
                          <i></i>
                        </span>
                        <span className="tag" style={{ background: "rgba(255,170,43,.16)", color: "#8A5B00" }}>Warm · 64</span>
                      </div>
                      <div className="lm-score">
                        <span className="lbl">Score</span>
                        <span className="track">
                          <i style={{ background: "linear-gradient(90deg,var(--cyan),var(--amber,#FFAA2B))", transform: "scaleX(.64)" }}></i>
                        </span>
                      </div>
                    </div>
                    <div className="lm-lead">
                      <div className="top">
                        <span className="who" style={{ background: "linear-gradient(135deg,#19BE77,#00A1DF)" }}>RD</span>
                        <span className="nm">
                          <i style={{ width: "50%" }}></i>
                          <i></i>
                        </span>
                        <span className="tag" style={{ background: "rgba(0,161,223,.14)", color: "#046A93" }}>New · 38</span>
                      </div>
                      <div className="lm-score">
                        <span className="lbl">Score</span>
                        <span className="track">
                          <i style={{ background: "linear-gradient(90deg,var(--blue),var(--cyan))", transform: "scaleX(.38)" }}></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="cc-side">
                    <div className="pm-card">
                      <span className="lb">Conversion rate</span>
                      <b>+24%</b>
                    </div>
                    <div className="pm-card">
                      <span className="lb">Nurture sequences live</span>
                      <b>7</b>
                    </div>
                    <div className="pm-card">
                      <span className="lb">Avg. response time</span>
                      <b>4 min</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-chip hc1">
                <i style={{ background: "var(--coral)" }}></i>Lead scored · 92 hot
              </div>
              <div className="hero-chip hc4">
                <i style={{ background: "var(--green)" }}></i>Auto-routed · James, Sales
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
                <path d="M22 12l-4-2-4 2-4-2-4 2-4-2" />
                <path d="M12 2v8M9 6l3-3 3 3" />
                <path d="M2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6" />
              </svg>
            </span>
            <div>
              <h3>High-volume pipeline</h3>
              <p>Manage multiple prospects at once with an organised team workflow.</p>
            </div>
          </div>
          <div className="pf rv">
            <span className="pic">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </span>
            <div>
              <h3>Automated nurturing</h3>
              <p>Productivity-enhancing automations maximise time and resources.</p>
            </div>
          </div>
          <div className="pf rv">
            <span className="pic">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                <path d="M3 3v18h18" />
                <path d="M7 14l3-3 3 3 5-6" />
              </svg>
            </span>
            <div>
              <h3>Integrated analytics</h3>
              <p>Track key metrics from acquisition to closure and patch funnel leaks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FEATURE ROWS ============ */}
      <section className="sec" id="how">
        <div className="wrap">
          <div className="crm-stack">

            <div className="frow">
              <div className="rv">
                <div className="f-num">01 / TRACK</div>
                <h2>Fully integrated lead tracking for increased conversions</h2>
                <p className="f-lead">
                  Turn strong leads into devoted customers — all the tools to manage multiple prospects at once.
                </p>
                <ul className="feat-list">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Organise the workflow of a large team and a high-volume pipeline
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Automations increase work speeds and maximise time resources
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Allocate resources effectively across your funnel
                  </li>
                </ul>
              </div>
              <div className="f-vis rv-r">
                <div className="f-glow"></div>
                <div className="plat-bar">
                  <i className="d r"></i>
                  <i className="d y"></i>
                  <i className="d g"></i>
                  <span className="url">app.optimiser.com/leads</span>
                </div>
                <img
                  src="https://www.optimiser.com/image/lead-management-software-02.svg"
                  alt="Lead tracking in Optimiser"
                  loading="lazy"
                  decoding="async"
                  style={{ background: "#fff", padding: "22px" }}
                />
              </div>
            </div>

            <div className="frow">
              <div className="rv">
                <div className="f-num">02 / ORGANISE</div>
                <h2>One solution for your whole lead system</h2>
                <p className="f-lead">
                  A powerful pipeline tool with integrated accounts and contacts to build strong customer relationships.
                </p>
                <ul className="feat-list">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Segment consumers by their place in the sales funnel
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Identify customer churn and patch leaks
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    View the entire team&apos;s sales activity at a glance
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
                <img src="/assets/kanban-view.webp" alt="Pipeline in Optimiser" loading="lazy" decoding="async" />
              </div>
            </div>

            <div className="frow">
              <div className="rv">
                <div className="f-num">03 / NURTURE</div>
                <h2>Lead nurturing with customised campaigns</h2>
                <p className="f-lead">
                  Prioritise leads with higher intent and shorten your sales cycle — B2C and B2B alike.
                </p>
                <ul className="feat-list">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Email templates and automated nurturing for ongoing leads
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Target multiple customer segments at once
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Pipeline and website analytics reveal your main funnels
                  </li>
                </ul>
              </div>
              <div className="f-vis rv-r">
                <div className="f-glow"></div>
                <div className="plat-bar">
                  <i className="d r"></i>
                  <i className="d y"></i>
                  <i className="d g"></i>
                  <span className="url">app.optimiser.com/campaigns</span>
                </div>
                <img
                  src="https://www.optimiser.com/image/lead-management-software-04.svg"
                  alt="Lead nurturing campaigns in Optimiser"
                  loading="lazy"
                  decoding="async"
                  style={{ background: "#fff", padding: "22px" }}
                />
              </div>
            </div>

            <div className="frow">
              <div className="rv">
                <div className="f-num">04 / DECIDE</div>
                <h2>Make sound decisions with integrated analytics</h2>
                <p className="f-lead">
                  Visual feedback on recent data — gauge the user experience from acquisition to closure.
                </p>
                <ul className="feat-list">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Track how each lead engages with your business
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Unify sales and marketing under one source of truth
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Custom reports review performance over time
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
                  src="https://www.optimiser.com/image/lead-management-software-05.svg"
                  alt="Lead analytics in Optimiser"
                  loading="lazy"
                  decoding="async"
                  style={{ background: "#fff", padding: "22px" }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="sec" id="faq" style={{ paddingTop: "40px" }}>
        <div className="wrap">
          <div className="faq-grid">
            <div className="sec-head rv" style={{ marginBottom: 0 }}>
              <span className="eyebrow">FAQ</span>
              <h2>
                Frequently asked <span className="grad-txt">questions</span>
              </h2>
              <p>Everything you&apos;re wondering before you convert.</p>
              <a
                className="btn btn-gho"
                href="https://www.optimiser.com/faq"
                target="_blank"
                rel="noopener"
                style={{ marginTop: "22px" }}
              >
                View all FAQs <span className="arr">→</span>
              </a>
            </div>
            <div className="rv">
              <details className="faq-item" open>
                <summary>
                  What is lead management software?
                  <span className="pl">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="fa-body">
                  It helps businesses optimise their customer cycle — providing customer relationship tools to build
                  strong relationships with valuable sales leads, from acquisition to nurturing.
                </p>
              </details>
              <details className="faq-item">
                <summary>
                  How do I track leads?
                  <span className="pl">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="fa-body">
                  With automations and predictive lead forecasting, sales teams dedicate time to the most promising
                  leads and save time on repetitive nurturing. Assign tasks to every lead and let reps collaborate on a
                  stronger pipeline.
                </p>
              </details>
              <details className="faq-item">
                <summary>
                  How do I manage sales leads?
                  <span className="pl">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="fa-body">
                  Using integrated CRM tools, sales reps guide leads through an optimised, customer-centric funnel. A
                  powerful pipeline with analytics and automations improves the prospect cycle — achieving more with
                  less.
                </p>
              </details>
            </div>
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
                Turn strong leads into devoted customers with <span className="grad-txt">one platform</span>
              </h2>
              <p>
                Start your 30-day free trial today. One powerful platform, simple to use, comprehensive — and no credit
                card required.
              </p>
              <div className="cta-btns">
                <a className="btn btn-pri" href="#">
                  Try for free <span className="arr">→</span>
                </a>
                <a className="btn btn-gho on-dark" href="#">
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
