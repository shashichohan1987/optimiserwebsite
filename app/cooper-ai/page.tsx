import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GsapLenis from "@/components/GsapLenis";
import Animations from "./Animations";
import "./styles.css";

export const metadata = {
  title: "Cooper AI — Your AI Analyst for CRM Intelligence | Optimiser",
  description:
    "Cooper AI — Optimiser's AI analyst. Query your live CRM records and get structured analytics: lists, comparisons, trends and diagnostics, grounded only in real data.",
};

export default function CooperAiPage() {
  return (
    <>
      <GsapLenis />
      <Nav />
      <Animations />

      <div id="scrollbar"></div>
      <div className="grain"></div>
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>

      {/* ============ COOPER AI ============ */}
      <section className="sec coo-sec" id="cooper" style={{ paddingTop: "170px" }} data-screen-label="Cooper AI hero">
        <div className="wrap" style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
          <img
            className="coo-lockup rv"
            src="/assets/cooper-lockup.svg"
            alt="Cooper AI — AI Analyst for CRM Intelligence"
          />
          <h1
            className="rv"
            style={{
              fontFamily: "'Sora',sans-serif",
              fontWeight: 700,
              letterSpacing: "-.03em",
              fontSize: "clamp(36px,5.2vw,62px)",
              lineHeight: 1.06,
              margin: "0 auto 16px",
              maxWidth: "760px",
              color: "var(--navy)",
            }}
          >
            Not a chatbot. <span className="grad-txt">Your AI analyst.</span>
          </h1>
          <p className="rv" style={{ color: "var(--mut)", fontSize: "17px", maxWidth: "600px", margin: "0 auto" }}>
            Cooper queries your live CRM records and answers with structured analytics — lists, comparisons, trends
            and diagnostics — grounded only in real data.
          </p>
          <div className="rv" style={{ display: "flex", gap: "14px", flexWrap: "wrap", justifyContent: "center", marginTop: "28px" }}>
            <a className="btn btn-pri" href="/free-crm">
              Try Cooper free <span className="arr">→</span>
            </a>
            <a className="btn btn-gho" href="#capabilities">
              What Cooper can do
            </a>
          </div>

          <div className="coo-console rv" id="cooConsole">
            <div className="coo-head">
              <img src="/assets/cooper-mark.svg" alt="" />
              <b>Cooper</b>
              <span>CRM Intelligence</span>
              <span className="coo-live">
                <i></i>Live data
              </span>
            </div>
            <div className="coo-query">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.3-4.3" />
              </svg>
              <span className="coo-q" id="cooQ"></span>
            </div>
            <div className="coo-stage" id="cooStage">
              <div className="coo-pane">
                <div className="coo-grid">
                  <div className="coo-card">
                    <div className="coo-tag">
                      <i style={{ background: "var(--cyan)" }}></i>Pipeline trend · Q3
                    </div>
                    <div className="coo-metric">
                      <span className="v">£348k</span>
                      <span className="c">↑ 24% vs Q2</span>
                    </div>
                    <svg className="coo-chart" viewBox="0 0 320 84" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="c1g" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0" stopColor="rgba(0,161,223,.35)" />
                          <stop offset="1" stopColor="rgba(0,161,223,0)" />
                        </linearGradient>
                      </defs>
                      <path
                        className="coo-area"
                        d="M0,70 C40,62 60,48 95,52 C130,56 150,30 190,34 C230,38 250,16 320,10 L320,84 L0,84 Z"
                        fill="url(#c1g)"
                        opacity="0"
                      />
                      <path
                        className="coo-line"
                        d="M0,70 C40,62 60,48 95,52 C130,56 150,30 190,34 C230,38 250,16 320,10"
                        fill="none"
                        stroke="#00A1DF"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div className="coo-card">
                    <div className="coo-tag">
                      <i style={{ background: "var(--violet)" }}></i>Comparison
                    </div>
                    <div className="coo-cmp">
                      <div className="row">
                        <span className="nm">Olivia</span>
                        <div className="bars">
                          <i className="b1" style={{ width: "46%" }}></i>
                          <i className="b2" style={{ width: "78%" }}></i>
                        </div>
                      </div>
                      <div className="row">
                        <span className="nm">Jack</span>
                        <div className="bars">
                          <i className="b1" style={{ width: "58%" }}></i>
                          <i className="b2" style={{ width: "66%" }}></i>
                        </div>
                      </div>
                      <div className="row">
                        <span className="nm">Kevin</span>
                        <div className="bars">
                          <i className="b1" style={{ width: "38%" }}></i>
                          <i className="b2" style={{ width: "92%" }}></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="coo-card coo-list">
                    <div className="coo-tag">
                      <i style={{ background: "var(--blue)" }}></i>Top open deals
                    </div>
                    <div className="li">
                      <div>
                        Pinnacle Suites
                        <br />
                        <span>Olivia Smith · Demo booked</span>
                      </div>
                      <b>£64k</b>
                    </div>
                    <div className="li">
                      <div>
                        Room Mate Hotels
                        <br />
                        <span>Jack Carter · Proposal sent</span>
                      </div>
                      <b>£48k</b>
                    </div>
                    <div className="li">
                      <div>
                        Stellar Tech
                        <br />
                        <span>Kevin Harris · Negotiation</span>
                      </div>
                      <b>£37k</b>
                    </div>
                  </div>
                  <div className="coo-card coo-diag">
                    <div className="coo-tag">
                      <i style={{ background: "var(--amber)" }}></i>Diagnostics
                    </div>
                    <span className="coo-pill warn">⚠ 2 deals at risk — no activity in 14 days</span>
                    <span className="coo-pill good">✓ Forecast confidence 92%</span>
                  </div>
                </div>
              </div>
              <div className="coo-pane">
                <div className="coo-grid">
                  <div className="coo-card">
                    <div className="coo-tag">
                      <i style={{ background: "var(--cyan)" }}></i>Campaign revenue · June
                    </div>
                    <div className="coo-metric">
                      <span className="v">£126k</span>
                      <span className="c">↑ 18% MoM</span>
                    </div>
                    <svg className="coo-chart" viewBox="0 0 320 84" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="c2g" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0" stopColor="rgba(0,161,223,.35)" />
                          <stop offset="1" stopColor="rgba(0,161,223,0)" />
                        </linearGradient>
                      </defs>
                      <path
                        className="coo-area"
                        d="M0,70 C40,62 60,48 95,52 C130,56 150,30 190,34 C230,38 250,16 320,10 L320,84 L0,84 Z"
                        fill="url(#c2g)"
                        opacity="0"
                      />
                      <path
                        className="coo-line"
                        d="M0,70 C40,62 60,48 95,52 C130,56 150,30 190,34 C230,38 250,16 320,10"
                        fill="none"
                        stroke="#00A1DF"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div className="coo-card">
                    <div className="coo-tag">
                      <i style={{ background: "var(--violet)" }}></i>Comparison
                    </div>
                    <div className="coo-cmp">
                      <div className="row">
                        <span className="nm">Launch</span>
                        <div className="bars">
                          <i className="b1" style={{ width: "52%" }}></i>
                          <i className="b2" style={{ width: "88%" }}></i>
                        </div>
                      </div>
                      <div className="row">
                        <span className="nm">Webinar</span>
                        <div className="bars">
                          <i className="b1" style={{ width: "40%" }}></i>
                          <i className="b2" style={{ width: "64%" }}></i>
                        </div>
                      </div>
                      <div className="row">
                        <span className="nm">Newsletter</span>
                        <div className="bars">
                          <i className="b1" style={{ width: "34%" }}></i>
                          <i className="b2" style={{ width: "49%" }}></i>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="coo-card coo-list">
                    <div className="coo-tag">
                      <i style={{ background: "var(--blue)" }}></i>Top campaigns
                    </div>
                    <div className="li">
                      <div>
                        Summer Launch
                        <br />
                        <span>12.4k sent · 48% open</span>
                      </div>
                      <b>£58k</b>
                    </div>
                    <div className="li">
                      <div>
                        Product Webinar
                        <br />
                        <span>3.1k registered</span>
                      </div>
                      <b>£41k</b>
                    </div>
                    <div className="li">
                      <div>
                        June Newsletter
                        <br />
                        <span>9.8k sent · 12% CTR</span>
                      </div>
                      <b>£27k</b>
                    </div>
                  </div>
                  <div className="coo-card coo-diag">
                    <div className="coo-tag">
                      <i style={{ background: "var(--amber)" }}></i>Diagnostics
                    </div>
                    <span className="coo-pill warn">⚠ 1 campaign underperforming — low CTR</span>
                    <span className="coo-pill good">✓ Best segment: returning customers</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="coo-foot">✦ AI-generated. Verify critical figures.</div>
          </div>

          <div className="coo-chips rv">
            <span className="coo-chip">
              <i style={{ background: "var(--cyan)", boxShadow: "0 0 8px var(--cyan)" }}></i>Live record queries
            </span>
            <span className="coo-chip">
              <i style={{ background: "var(--violet)", boxShadow: "0 0 8px var(--violet)" }}></i>Trends &amp; comparisons
            </span>
            <span className="coo-chip">
              <i style={{ background: "var(--amber)", boxShadow: "0 0 8px var(--amber)" }}></i>Risk diagnostics
            </span>
            <span className="coo-chip">
              <i style={{ background: "var(--green)", boxShadow: "0 0 8px var(--green)" }}></i>Zero hallucinated data
            </span>
          </div>
        </div>
      </section>

      {/* ============ CAPABILITIES ============ */}
      <section className="sec" id="capabilities">
        <div className="wrap">
          <div className="sec-head rv">
            <span className="eyebrow">Capabilities</span>
            <h2>
              Ask in plain English, <span className="grad-txt">get real analytics</span>
            </h2>
            <p>
              Cooper reads your live CRM records — contacts, pipeline, campaigns, events — and answers with
              structured, verifiable output.
            </p>
          </div>
          <div className="ig-grid">
            <article className="ig-card rv">
              <span className="tile" style={{ background: "linear-gradient(135deg,#075DA8,#00A1DF)" }}>
                ⌕
              </span>
              <h3>Live record queries</h3>
              <p>
                &quot;Show my open deals over £30k&quot; — Cooper queries the live database, never a stale export.
                Every answer names the records behind it.
              </p>
              <span className="more">
                In every plan{" "}
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </article>
            <article className="ig-card rv">
              <span className="tile" style={{ background: "linear-gradient(135deg,#7B5CFA,#00A1DF)" }}>
                ↗
              </span>
              <h3>Trends &amp; comparisons</h3>
              <p>
                Quarter-on-quarter pipeline, rep-by-rep performance, campaign against campaign — charted and
                annotated automatically.
              </p>
              <span className="more">
                In every plan{" "}
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </article>
            <article className="ig-card rv">
              <span className="tile" style={{ background: "linear-gradient(135deg,#FFAA2B,#FF6F5B)" }}>
                !
              </span>
              <h3>Risk diagnostics</h3>
              <p>
                Cooper flags what needs attention before you ask: stalled deals, quiet accounts, underperforming
                campaigns and forecast confidence.
              </p>
              <span className="more">
                In every plan{" "}
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </article>
            <article className="ig-card rv">
              <span className="tile" style={{ background: "linear-gradient(135deg,#19BE77,#00A1DF)" }}>
                ✓
              </span>
              <h3>Zero hallucinated data</h3>
              <p>
                Answers are grounded only in your records. If the data isn&apos;t there, Cooper says so — and every
                figure links back to its source.
              </p>
              <span className="more">
                How it works{" "}
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
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
                Meet your AI analyst on <span className="grad-txt">one platform</span>
              </h2>
              <p>
                Start your 30-day free trial today. One powerful platform, simple to use, comprehensive — and no
                credit card required.
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
