import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GsapLenis from "@/components/GsapLenis";
import Animations from "./Animations";
import "./styles.css";

export const metadata = {
  title: "Sales Suite — CRM for Sales Management | Optimiser",
  description:
    "Sell more with less using Optimiser Sales Suite — automated pipeline, AI insights, customer segmentation and custom sales reports on one CRM platform.",
};

export default function SalesSuitePage() {
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
              <span className="eyebrow rv">Sales Suite · CRM for Sales</span>
              <h1 className="rv">
                Sell more with less, <span className="grad-txt">using CRM for sales.</span>
              </h1>
              <p className="lede rv">
                Master automations, AI insights and a high-capacity pipeline — with the customer
                at the heart of your sales strategy from acquisition to retention.
              </p>
              <ul className="hero-points rv">
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Optimise the funnel with automations for lead qualifying and nurturing
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Use Marketing Suite data on lead origins for a unified customer journey
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Sales and CRM analytics build customer profiles for personalisation and upselling
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Predictive forecasts to optimise the customer cycle and sales budget
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
                  <span className="url">app.optimiser.com/pipeline</span>
                </div>
                <div className="ss-kb">
                  <div className="ss-col">
                    <h5>
                      <span>New leads</span>
                      <span>12</span>
                    </h5>
                    <div className="ss-card">
                      <i style={{ width: "72%" }}></i>
                      <i style={{ width: "48%" }}></i>
                      <div className="ss-meta">
                        <span className="ss-amt">£1,450</span>
                        <span className="ss-tag warm">Warm · 64</span>
                      </div>
                    </div>
                    <div className="ss-card">
                      <i style={{ width: "60%" }}></i>
                      <i style={{ width: "40%" }}></i>
                      <div className="ss-meta">
                        <span className="ss-amt">£880</span>
                        <span className="ss-tag warm">Warm · 58</span>
                      </div>
                    </div>
                    <div className="ss-card">
                      <i style={{ width: "66%" }}></i>
                      <i style={{ width: "52%" }}></i>
                      <div className="ss-meta">
                        <span className="ss-amt">£2,100</span>
                        <span className="ss-tag hot">Hot · 81</span>
                      </div>
                    </div>
                  </div>
                  <div className="ss-col">
                    <h5>
                      <span>Qualified</span>
                      <span>7</span>
                    </h5>
                    <div className="ss-card">
                      <i style={{ width: "68%" }}></i>
                      <i style={{ width: "44%" }}></i>
                      <div className="ss-meta">
                        <span className="ss-amt">£3,250</span>
                        <span className="ss-tag hot">Hot · 86</span>
                      </div>
                    </div>
                    <div className="ss-card">
                      <i style={{ width: "58%" }}></i>
                      <i style={{ width: "38%" }}></i>
                      <div className="ss-meta">
                        <span className="ss-amt">£1,720</span>
                        <span className="ss-tag warm">Warm · 61</span>
                      </div>
                    </div>
                  </div>
                  <div className="ss-col">
                    <h5>
                      <span>Won</span>
                      <span>4</span>
                    </h5>
                    <div className="ss-card">
                      <i style={{ width: "64%" }}></i>
                      <i style={{ width: "46%" }}></i>
                      <div className="ss-meta">
                        <span className="ss-amt">£5,900</span>
                        <span className="ss-tag won">Won</span>
                      </div>
                    </div>
                    <div className="ss-slot" aria-hidden="true">
                      <span className="hint"></span>
                      <span className="landed">
                        <i style={{ width: "68%" }}></i>
                        <i style={{ width: "44%" }}></i>
                        <span className="ss-meta">
                          <span className="ss-amt">£2,887</span>
                          <span className="ss-tag won">Won</span>
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="ss-fly" aria-hidden="true">
                    <i style={{ width: "68%" }}></i>
                    <i style={{ width: "44%" }}></i>
                    <span className="ss-meta">
                      <span className="ss-amt">£2,887</span>
                      <span className="ss-tag hot">Hot · 92</span>
                    </span>
                  </div>
                </div>
              </div>
              <div className="hero-chip hc1">
                <i style={{ background: "var(--green)" }}></i>Deal won · £2,887
              </div>
              <div className="hero-chip hc4">
                <i style={{ background: "var(--cyan)" }}></i>Lead scored · 92 hot
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
                <circle cx="18" cy="18" r="3" />
                <circle cx="6" cy="6" r="3" />
                <path d="M6 9v6a3 3 0 0 0 3 3h6" />
                <path d="M15 6h3a3 3 0 0 1 3 3" />
              </svg>
            </span>
            <div>
              <h3>Automated pipeline</h3>
              <p>Qualify, score and nurture high-volume prospects without lifting a finger.</p>
            </div>
          </div>
          <div className="pf rv">
            <span className="pic">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                <path d="M12 3l2.5 5 5.5.8-4 3.9.9 5.5L12 21l-4.9-2.8.9-5.5-4-3.9L9.5 8z" />
              </svg>
            </span>
            <div>
              <h3>AI insights</h3>
              <p>Predictive warmth scoring and forecasts keep your team on the strongest deals.</p>
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
              <h3>Custom reports</h3>
              <p>Pipeline status, deal closures and KPIs — clear insights across the full sales scope.</p>
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
                <div className="f-num">01 / TEAMS</div>
                <h2>Manage high-performing sales teams</h2>
                <p className="f-lead">
                  Sell bigger with Optimiser&apos;s sales management system — built for B2C and
                  B2B sales success.
                </p>
                <ul className="feat-list">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Master automations, AI insights and a high-capacity pipeline
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Keep the customer at the heart of your strategy, acquisition to retention
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Data-driven insights and predictive sales forecasts
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Optimise the customer cycle and sales budget
                  </li>
                </ul>
              </div>
              <div className="f-vis rv-r">
                <div className="f-glow"></div>
                <div className="plat-bar">
                  <i className="d r"></i>
                  <i className="d y"></i>
                  <i className="d g"></i>
                  <span className="url">app.optimiser.com/sales</span>
                </div>
                <img
                  src="https://www.optimiser.com/image/salesuite-02-Copy.svg"
                  alt="Managing sales teams in Optimiser Sales Suite"
                  loading="lazy"
                  decoding="async"
                  style={{ background: "#fff", padding: "22px" }}
                />
              </div>
            </div>

            <div className="frow">
              <div className="rv">
                <div className="f-num">02 / PIPELINE</div>
                <h2>Optimise your pipeline and win more sales</h2>
                <p className="f-lead">
                  An automated pipeline tool to enhance conversion strategies and manage a higher
                  enquiry volume.
                </p>
                <ul className="feat-list">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Track and manage high-volume prospects simultaneously
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Predictive warmth scoring to automated nurturing
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Monitor team progress on KPIs and tasks
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
                  alt="Automated pipeline in Optimiser"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            <div className="frow">
              <div className="rv">
                <div className="f-num">03 / SEGMENTATION</div>
                <h2>Successful sales cycles with customer segmentation</h2>
                <p className="f-lead">
                  Turn three-dimensional contact and account profiles into a valuable data mine.
                </p>
                <ul className="feat-list">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Unite departments under a single CRM toolkit for sales and marketing
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Customer experience insights inform personalised onboarding
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Creative, effective communications from real behaviour
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
                  alt="Customer segmentation in Optimiser"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            <div className="frow">
              <div className="rv">
                <div className="f-num">04 / REPORTS</div>
                <h2>Create custom reports to track sales</h2>
                <p className="f-lead">
                  Evaluate departmental progress and allocate sales resources with quick, clear
                  insights into key data.
                </p>
                <ul className="feat-list">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Full sales scope — pipeline status to deal closures and KPI achievements
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Gather company sales data from global sales activity
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    The best CRM option for large-scale enterprise sales teams
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
                  src="https://www.optimiser.com/image/salesuite-05-Copy.svg"
                  alt="Custom sales reports in Optimiser"
                  loading="lazy"
                  decoding="async"
                  style={{ background: "#fff", padding: "22px" }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============ TOOLKIT ============ */}
      <section className="sec why" id="toolkit">
        <div className="wrap">
          <div className="sec-head rv">
            <span className="eyebrow">A comprehensive sales toolkit</span>
            <h2>
              Fortify your <span className="grad-txt">sales strategy</span>
            </h2>
            <p>
              Switch easily between modules within the CRM-integrated Sales Suite to run a
              seamless pipeline that prioritises excellent customer experiences.
            </p>
          </div>
          <div className="vgrid">
            <article className="vcard rv">
              <h3>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
                Quick growth
              </h3>
              <p>Focus onboarding efforts on the strongest prospects to generate quick growth.</p>
            </article>
            <article className="vcard rv">
              <h3>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                  <path d="M12 21C7 17 2 13.5 2 8.8A4.8 4.8 0 0 1 6.8 4c2 0 3.9 1 5.2 2.9A6.2 6.2 0 0 1 17.2 4 4.8 4.8 0 0 1 22 8.8c0 4.7-5 8.2-10 12.2z" />
                </svg>
                Loyal relationships
              </h3>
              <p>
                Nurture existing customer accounts into meaningful relationships that promote
                steady business expansion.
              </p>
            </article>
            <article className="vcard rv">
              <h3>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                  <path d="M14 7h5a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-5" />
                  <path d="M10 17H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5" />
                  <path d="M8 12h8" />
                </svg>
                Seamless modules
              </h3>
              <p>
                Switch easily between modules within the CRM-integrated suite — one login, one
                pipeline.
              </p>
            </article>
            <article className="vcard rv">
              <h3>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                  <path d="M3 3v18h18" />
                  <path d="M7 14l3-3 3 3 5-6" />
                </svg>
                Any scale
              </h3>
              <p>
                Ideal for fast and steady growth alike — from small businesses to global
                enterprise sales teams.
              </p>
            </article>
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
              <p>Everything you&apos;re wondering before you sell.</p>
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
                  What is sales management software for?
                  <span className="pl">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="fa-body">
                  Digital sales toolkits are web-based systems designed to improve the way
                  businesses capture and convert leads. With automations, CRM-integrated features
                  and organisational tools, sales managers can streamline their workflow, reduce
                  outgoing costs and increase sales within a single platform.
                </p>
              </details>
              <details className="faq-item">
                <summary>
                  What are the key CRM parameters for sales automation?
                  <span className="pl">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="fa-body">
                  Customer relationship automations can be implemented at touchpoints across your
                  full business scope. Analytics and lead distribution streamline the
                  marketing–sales divide, pipeline and proposal generation optimise onboarding,
                  and invoicing speeds up deal closure.
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
                Win more sales with <span className="grad-txt">one platform</span>
              </h2>
              <p>
                Start your 30-day free trial today. One powerful platform, simple to use,
                comprehensive — and no credit card required.
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
