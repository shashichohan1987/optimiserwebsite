import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GsapLenis from "@/components/GsapLenis";
import Animations from "./Animations";
import "./styles.css";

export const metadata = {
  title: "Pipeline Management — CRM Features | Optimiser",
  description:
    "Optimiser Pipeline — a visual, collaborative deal pipeline with forecasting, priorities and automation.",
};

export default function FeaturePipelinePage() {
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
              <span className="eyebrow rv">Features · Pipeline</span>
              <h1 className="rv">
                See every deal <span className="grad-txt">move.</span>
              </h1>
              <p className="lede rv">
                A visual, collaborative pipeline — drag deals between stages, forecast
                revenue and let automation nudge the next step.
              </p>
              <ul className="hero-points rv">
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Cloud-based pipeline for the whole team
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Track deals from first enquiry to closed won
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Predict revenue with forecasting
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  7 active pipelines, customisable stages
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
                <img
                  src="/assets/kanban-view.webp"
                  alt="Pipeline in Optimiser"
                  decoding="async"
                  style={{ display: "block", width: "100%" }}
                />
              </div>
              <div className="hero-chip hc1">
                <i style={{ background: "var(--green)" }}></i>Deal moved · Negotiation
              </div>
              <div className="hero-chip hc4">
                <i style={{ background: "var(--violet)" }}></i>Forecast · £186k Q3
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ============ FEATURE ROWS ============ */}
      <section className="sec" id="how">
        <div className="wrap">
          <div className="crm-stack">

            <div className="frow">
              <div className="rv">
                <div className="f-num">01 / KANBAN</div>
                <h2>Deals as cards, stages as columns</h2>
                <p className="f-lead">
                  The whole funnel on one board — drag a deal and its record updates itself.
                </p>
                <ul className="feat-list">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Drag-and-drop stage movement
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Custom stages per pipeline
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Colour-coded priorities and values
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
                  alt="Deals as cards, stages as columns — Optimiser"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            <div className="frow">
              <div className="rv">
                <div className="f-num">02 / FORECAST</div>
                <h2>Revenue you can plan around</h2>
                <p className="f-lead">
                  Weighted forecasts from stage probability and deal value — updated live.
                </p>
                <ul className="feat-list">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Weighted and best-case forecasts
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Win-rate trends per rep and stage
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Slippage flagged before quarter end
                  </li>
                </ul>
              </div>
              <div className="f-vis rv-r">
                <div className="f-glow"></div>
                <div className="plat-bar">
                  <i className="d r"></i>
                  <i className="d y"></i>
                  <i className="d g"></i>
                  <span className="url">app.optimiser.com/pipeline/forecast</span>
                </div>
                <img
                  src="/assets/list-columns.webp"
                  alt="Revenue you can plan around — Optimiser"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            <div className="frow">
              <div className="rv">
                <div className="f-num">03 / TEAM</div>
                <h2>One pipeline, whole-team visibility</h2>
                <p className="f-lead">
                  Everyone sees the same board — no duplicate calls, no dropped handovers.
                </p>
                <ul className="feat-list">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    View the entire team&apos;s sales activity at a glance
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Assign deals and next activities
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Systematic follow-up so nothing slips
                  </li>
                </ul>
              </div>
              <div className="f-vis rv-r">
                <div className="f-glow"></div>
                <div className="plat-bar">
                  <i className="d r"></i>
                  <i className="d y"></i>
                  <i className="d g"></i>
                  <span className="url">app.optimiser.com/pipeline/team</span>
                </div>
                <img
                  src="/assets/list-view.webp"
                  alt="One pipeline, whole-team visibility — Optimiser"
                  loading="lazy"
                  decoding="async"
                />
              </div>
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
                Close more deals with <span className="grad-txt">one platform</span>
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
