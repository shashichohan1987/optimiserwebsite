import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GsapLenis from "@/components/GsapLenis";
import HomeAnimations from "./HomeAnimations";
import "./page.css";

export const metadata: Metadata = {
  title: "Optimiser — The Power of One CRM Platform",
  description:
    "Optimiser brings sales, marketing, events, projects and more into one powerful CRM platform. Eliminate the hassle of using multiple softwares.",
};

export default function HomePage() {
  return (
    <>
      {/* ===== Hidden SVG Symbols ===== */}
      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }} aria-hidden="true">
        <symbol id="optimiser-logo" viewBox="0 0 120 40">
          <text x="0" y="30" fontFamily="Sora,sans-serif" fontWeight="700" fontSize="28" fill="currentColor">Optimiser</text>
        </symbol>
        <symbol id="optimiser-mark" viewBox="0 0 200 250">
          <path d="M100 10 C140 10 170 40 170 80 C170 120 140 150 100 150 C60 150 30 120 30 80 C30 40 60 10 100 10 Z M100 30 C70 30 50 52 50 80 C50 108 70 130 100 130 C130 130 150 108 150 80 C150 52 130 30 100 30 Z" fill="currentColor" opacity="0.6"/>
          <path d="M70 160 L130 160 L150 240 L100 220 L50 240 Z" fill="currentColor" opacity="0.4"/>
        </symbol>
      </svg>

      {/* ===== Ambient layer ===== */}
      <div id="scrollbar" />
      <div className="grain" aria-hidden="true" />
      <div className="orb orb-1" aria-hidden="true" />
      <div className="orb orb-2" aria-hidden="true" />

      <GsapLenis />
      <HomeAnimations />
      <Nav />

      {/* ============ HERO ============ */}
      <header className="hero" id="top">
        <div className="aur aur-1" aria-hidden="true" />
        <div className="aur aur-2" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />
        <canvas id="bg3d" />
        <div className="wrap">
          <div className="hero-center">
            <div className="hero-badge rv-l">
              <span className="dot" />
              One platform. Every tool your business needs.
            </div>
            <h1 id="heroTitle">The power of one CRM platform</h1>
            <div className="hero-rot">
              One login for{" "}
              <span className="rot-box">
                <span className="rot-list" id="rotList">
                  <span>sales teams</span>
                  <span>marketing teams</span>
                  <span>event planners</span>
                  <span>membership clubs</span>
                  <span>hoteliers</span>
                  <span>charities</span>
                  <span>sales teams</span>
                </span>
              </span>
            </div>
            <p className="lede">
              Eliminate the hassle of juggling multiple softwares. Optimiser unifies sales, marketing, events, projects and customer data in a single, beautifully simple workspace.
            </p>
            <div className="hero-ctas">
              <a className="btn btn-pri" href="/free-crm">
                Start free trial <span className="arr">→</span>
              </a>
              <a className="btn btn-gho" href="#products">
                Explore the platform
              </a>
            </div>
            <div className="hero-note">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              30-day free trial · No credit card required
            </div>
          </div>

          <div className="hero-shot" id="heroShot">
            <div className="hero-shot-glow" />
            <div className="hero-shot-frame" id="heroShotFrame">
              <div className="plat-bar">
                <i className="d r" /><i className="d y" /><i className="d g" />
                <span className="url">app.optimiser.com</span>
              </div>
              <img
                src="/assets/kanban-view.webp"
                alt="Optimiser CRM workspace — kanban contact board"
                decoding="async"
                fetchPriority="high"
              />
            </div>
            <div className="hero-chip hc1">
              <i style={{ background: "var(--green)" }} />
              Sales pipeline · live
            </div>
            <div className="hero-chip hc2">
              <i style={{ background: "var(--violet)" }} />
              Marketing on autopilot
            </div>
            <div className="hero-chip hc3">
              <i style={{ background: "var(--amber)" }} />
              Events &amp; projects
            </div>
            <div className="hero-chip hc4">
              <i style={{ background: "var(--cyan)" }} />
              One login. One price.
            </div>
          </div>
        </div>
        <div className="scroll-cue" aria-hidden="true">
          <div className="wheel" />
          SCROLL
        </div>
      </header>

      {/* ============ TRUST MARQUEE ============ */}
      <section className="trust">
        <p className="trust-label">Trusted by leading businesses worldwide</p>
        <div className="marquee">
          <div className="marquee-track" id="logoTrack">
            <span className="m-logo">FOX HARB&apos;R <em>RESORT</em></span>
            <span className="m-logo">YOTEL</span>
            <span className="m-logo">Room Mate <em>HOTELS</em></span>
            <span className="m-logo">Swiss Quality <em>HOTELS</em></span>
            <span className="m-logo">The Zetter <em>GROUP</em></span>
            <span className="m-logo">St Andrew&apos;s <em>CLUB</em></span>
            <span className="m-logo">Central London <em>ALLIANCE</em></span>
            <span className="m-logo">Blue Orchid <em>HOTELS</em></span>
          </div>
        </div>
      </section>

      {/* ============ WHY ============ */}
      <section className="sec" id="why">
        <svg className="deco-mark" viewBox="0 0 20 20" style={{ top: "-70px", right: "-90px" }}>
          <use href="#optimiser-mark" />
        </svg>
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Why Optimiser</span>
            <h2 className="rv">Everything you need to <span className="grad-txt">grow</span>, nothing you don&apos;t</h2>
            <p className="rv">All the tools to run your business — comprehensive, simple, and fully customisable to the way you work.</p>
          </div>
          <div className="why-grid cards">
            <div className="card rv">
              <div className="ic">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                </svg>
              </div>
              <h3>Affordable</h3>
              <p>A power-packed starter subscription from <span className="price-tag">£35</span>. Pay only for the tools you need and upgrade as you grow.</p>
            </div>
            <div className="card rv">
              <div className="ic">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="12" cy="12" r="9" /><path d="M8 12.5l2.5 2.5L16 9.5" />
                </svg>
              </div>
              <h3>Simple to use</h3>
              <p>A clean grid view puts the metrics that matter most front and centre — everything you need for the day, at a glance.</p>
            </div>
            <div className="card rv">
              <div className="ic">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 3l1.9 5.8H20l-5 3.7 1.9 5.8-4.9-3.6-4.9 3.6L9 12.5 4 8.8h6.1z" />
                </svg>
              </div>
              <h3>Fully customisable</h3>
              <p>Your CRM, shaped to your business. Custom modules, fields and workflows matched to your unique requirements.</p>
            </div>
            <div className="card rv">
              <div className="ic">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z" /><path d="M9 12l2 2 4-4" />
                </svg>
              </div>
              <h3>Advanced security</h3>
              <p>Responsible data practices and privacy tools that put you in control — your data is respected and protected.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ WORKSPACE BUILDER ============ */}
      <section className="sec picker" id="picker">
        <div className="wrap">
          <div className="picker-stage">
            <div className="pick-col">
              <span className="eyebrow">One platform, any use case</span>
              <h2 className="rv" style={{ fontSize: "clamp(28px,3.8vw,46px)", margin: "16px 0 14px" }}>
                Build <span className="grad-txt">your platform</span> in seconds
              </h2>
              <p className="rv" style={{ color: "var(--mut)", maxWidth: "480px", marginBottom: "30px" }}>
                Tap what you want to manage — and watch your Optimiser workspace assemble itself. Every module lives on the same platform, sharing the same data.
              </p>
              <div className="pick-grid" id="pickGrid" />
              <div className="pick-cta">
                <a className="btn btn-pri" href="/free-crm">
                  Build my platform <span className="arr">→</span>
                </a>
                <span className="pick-hint">
                  <b id="pickCount">2</b> modules — one platform, one login, one price
                </span>
              </div>
            </div>

            <div className="ws rv-r" id="ws">
              <div className="ws-bar"><i /><i /><i /><span>app.optimiser.com/your-workspace</span></div>
              <div className="ws-head">
                <svg className="ws-mark"><use href="#optimiser-mark" /></svg>
                <div><b>Your Optimiser</b><small id="wsCount">2 modules active</small></div>
                <span className="ws-live"><i />LIVE</span>
              </div>
              <div className="ws-grid" id="wsGrid">
                <div className="ws-empty" id="wsEmpty" style={{ display: "none" }}>
                  Select use cases on the left to add modules to your workspace…
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CONTEXT CONVERGENCE ============ */}
      <section className="sec ctx-sec" id="connected" style={{ paddingBottom: 0 }}>
        <div className="wrap" style={{ textAlign: "center" }}>
          <span className="eyebrow rv" style={{ justifyContent: "center" }}>The Power of One</span>
          <h2 className="rv" style={{ fontSize: "clamp(32px,4.8vw,56px)", margin: "14px auto 16px", maxWidth: "680px", color: "#fff" }}>
            Many modules. <span className="grad-txt">One core.</span>
          </h2>
          <p className="rv" style={{ color: "rgba(255,255,255,.62)", fontSize: "17px", maxWidth: "540px", margin: "0 auto 72px" }}>
            Keep scrolling — watch sales, marketing, events and automations converge into a single, connected workspace.
          </p>
        </div>
        <div className="ctx-track" id="ctxTrack" style={{ height: "1600px" }}>
          <div className="ctx-wrapper" id="ctxWrapper" style={{ position: "sticky", top: 0, height: "100vh" }}>
            <div className="ctx-grid" />
            <div className="ctx-dots" />
            <svg className="ctx-beams" id="ctxBeams" aria-hidden="true" />
            <div className="ctx-ring ctx-ring-1" />
            <div className="ctx-ring ctx-ring-2" />
            <div className="ctx-ring ctx-ring-3" />
            <div className="ctx-shock" id="ctxShock1" />
            <div className="ctx-shock" id="ctxShock2" />
            <div className="ctx-core" id="ctxCore">
              <div className="ctx-core-glow" id="ctxCoreGlow" />
              <div className="ctx-core-color" id="ctxCoreColor" />
              <span>O</span>
            </div>
            <div className="ctx-final" id="ctxFinal">
              <h3>One platform. <span className="grad-txt">Full context.</span></h3>
              <p>Sales · Marketing · Events · Automation · Analytics — <b>connected</b></p>
            </div>

            <div className="ctx-panel ctx-p1" id="ctxP1">
              <div className="ctx-label"><i />Sales Suite</div>
              <div className="ctx-ptitle">Pipeline · Q3</div>
              <div className="ctx-metric"><span className="v">£184k</span><span className="c">↑ 32%</span></div>
              <div className="ctx-bars">
                <i style={{ height: "30%" }} /><i style={{ height: "52%" }} /><i style={{ height: "40%" }} />
                <i style={{ height: "70%" }} /><i style={{ height: "88%" }} /><i style={{ height: "100%" }} />
              </div>
            </div>

            <div className="ctx-panel ctx-p2" id="ctxP2">
              <div className="ctx-label"><i />CRM</div>
              <div className="ctx-ptitle">Contact profile</div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
                <div className="ctx-avatar">JD</div>
                <div>
                  <div style={{ fontSize: "12px", fontWeight: 600 }}>James Donovan</div>
                  <div style={{ fontSize: "10px", color: "rgba(255,255,255,.5)" }}>CEO · Tier 1 lead</div>
                </div>
              </div>
              <div className="ctx-pills">
                <span className="ctx-pill">7 interactions</span>
                <span className="ctx-pill">Demo booked</span>
                <span className="ctx-pill">Hot lead</span>
              </div>
            </div>

            <div className="ctx-panel ctx-p3" id="ctxP3">
              <div className="ctx-label"><i />Events</div>
              <div className="ctx-ptitle">June schedule</div>
              <div className="ctx-cal">
                <i /><i /><i className="on" /><i /><i /><i className="on" /><i />
                <i className="on" /><i /><i /><i className="on" /><i /><i /><i />
                <i /><i className="on" /><i /><i /><i className="on" /><i /><i className="on" />
              </div>
              <div className="ctx-smtext">8 events · 340 registrations</div>
            </div>

            <div className="ctx-panel ctx-p4" id="ctxP4">
              <div className="ctx-label"><i />Marketing Suite</div>
              <div className="ctx-ptitle">Summer campaign</div>
              <div className="ctx-metric"><span className="v">12.4k</span><span className="c">sent</span></div>
              <div className="ctx-pills" style={{ marginTop: "8px" }}>
                <span className="ctx-pill">48% open rate</span>
                <span className="ctx-pill">12% CTR</span>
              </div>
            </div>

            <div className="ctx-panel ctx-p5" id="ctxP5">
              <div className="ctx-label"><i />Automation</div>
              <div className="ctx-ptitle">Lead → Nurture</div>
              <div className="ctx-flow">
                <div className="nd">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" />
                  </svg>
                </div>
                <div className="wr" />
                <div className="nd">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M13 2L3 14h7l-1 8 10-12h-7z" />
                  </svg>
                </div>
                <div className="wr" />
                <div className="nd">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 6h16v12H4z" /><path d="M4 7l8 6 8-6" />
                  </svg>
                </div>
              </div>
              <div className="ctx-smtext">3 triggers active · 0 errors</div>
            </div>

            <div className="ctx-panel ctx-p6" id="ctxP6">
              <div className="ctx-label"><i />Analytics</div>
              <div className="ctx-ptitle">Revenue trend</div>
              <div className="ctx-bars">
                <i style={{ height: "38%" }} /><i style={{ height: "58%" }} /><i style={{ height: "48%" }} />
                <i style={{ height: "78%" }} /><i style={{ height: "68%" }} /><i style={{ height: "100%" }} />
              </div>
              <div className="ctx-smtext">This month vs last · +24%</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PLATFORM SHOWCASE ============ */}
      <section className="sec plat" id="platform">
        <div className="plat-blob b1" /><div className="plat-blob b2" /><div className="plat-blob b3" />
        <div className="wrap" style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
          <span className="eyebrow rv" style={{ justifyContent: "center" }}>Inside the platform</span>
          <h2 className="rv" style={{ fontSize: "clamp(32px,4.8vw,56px)", margin: "14px auto 16px", maxWidth: "680px" }}>
            Every team. <span className="grad-txt">One source of truth.</span>
          </h2>
          <p className="rv" style={{ color: "var(--mut)", fontSize: "17px", maxWidth: "560px", margin: "0 auto" }}>
            All your data, modules and automations live on a single platform — so every action happens with full context, every time.
          </p>

          <div className="plat-tabs rv" role="tablist" aria-label="Platform views">
            <button className="plat-tab is-on" role="tab" aria-selected={true} data-i="0" style={{ "--tc": "var(--violet)" } as React.CSSProperties}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="13" rx="1.5" /><rect x="14" y="3" width="7" height="9" rx="1.5" />
              </svg>
              Kanban board
            </button>
            <button className="plat-tab" role="tab" aria-selected={false} data-i="1" style={{ "--tc": "var(--blue)" } as React.CSSProperties}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" />
              </svg>
              List view
            </button>
            <button className="plat-tab" role="tab" aria-selected={false} data-i="2" style={{ "--tc": "var(--coral)" } as React.CSSProperties}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 3v18M15 3v18" />
              </svg>
              Smart columns
            </button>
          </div>

          <div className="plat-stage rv" id="platStage">
            <div className="plat-frame" id="platFrame">
              <div className="plat-bar">
                <i className="d r" /><i className="d y" /><i className="d g" />
                <span className="url">app.optimiser.com/contacts</span>
              </div>
              <div className="plat-screens">
                <img className="plat-screen is-on" src="/assets/kanban-view.webp" alt="Optimiser CRM kanban board" loading="lazy" decoding="async" />
                <img className="plat-screen" src="/assets/list-view.webp" alt="Optimiser CRM list view" loading="lazy" decoding="async" />
                <img className="plat-screen" src="/assets/list-columns.webp" alt="Optimiser CRM smart columns" loading="lazy" decoding="async" />
              </div>
            </div>
            <div className="plat-badge pb1"><i />4,287 contacts · live sync</div>
            <div className="plat-badge pb2"><i />Filters &amp; tags, your way</div>
            <div className="plat-badge pb3"><i />Bulk email in one click</div>
          </div>
          <p className="plat-cap" id="platCap">Drag contacts and deals through every stage — your whole pipeline, visualised.</p>
        </div>
      </section>

      {/* ============ COOPER AI ============ */}
      <section className="sec coo-sec" id="cooper">
        <div className="wrap" style={{ textAlign: "center", position: "relative", zIndex: 2 }}>
          <img className="coo-lockup rv" src="/assets/cooper-lockup.svg" alt="Cooper AI — AI Analyst for CRM Intelligence" />
          <h2 className="rv" style={{ fontSize: "clamp(32px,4.8vw,56px)", margin: "0 auto 16px", maxWidth: "760px" }}>
            Not a chatbot. <span className="grad-txt">Your AI analyst.</span>
          </h2>
          <p className="rv" style={{ color: "var(--mut)", fontSize: "17px", maxWidth: "600px", margin: "0 auto" }}>
            Cooper queries your live CRM records and answers with structured analytics — lists, comparisons, trends and diagnostics — grounded only in real data.
          </p>

          <div className="coo-console rv" id="cooConsole">
            <div className="coo-head">
              <img src="/assets/cooper-mark.svg" alt="" width="26" height="26" />
              <b>Cooper</b><span>CRM Intelligence</span>
              <span className="coo-live"><i />Live data</span>
            </div>
            <div className="coo-query">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" /><path d="M21 21l-4.3-4.3" />
              </svg>
              <span className="coo-q" id="cooQ" />
            </div>
            <div className="coo-stage" id="cooStage">
              <div className="coo-pane">
                <div className="coo-grid">
                  <div className="coo-card">
                    <div className="coo-tag"><i style={{ background: "var(--cyan)" }} />Pipeline trend · Q3</div>
                    <div className="coo-metric"><span className="v">£348k</span><span className="c">↑ 24% vs Q2</span></div>
                    <svg className="coo-chart" viewBox="0 0 320 84" preserveAspectRatio="none">
                      <defs><linearGradient id="c1g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="rgba(0,161,223,.35)" /><stop offset="1" stopColor="rgba(0,161,223,0)" /></linearGradient></defs>
                      <path className="coo-area" d="M0,70 C40,62 60,48 95,52 C130,56 150,30 190,34 C230,38 250,16 320,10 L320,84 L0,84 Z" fill="url(#c1g)" opacity="0" />
                      <path className="coo-line" d="M0,70 C40,62 60,48 95,52 C130,56 150,30 190,34 C230,38 250,16 320,10" fill="none" stroke="#00A1DF" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="coo-card">
                    <div className="coo-tag"><i style={{ background: "var(--violet)" }} />Comparison</div>
                    <div className="coo-cmp">
                      <div className="row"><span className="nm">Olivia</span><div className="bars"><i className="b1" style={{ width: "46%" }} /><i className="b2" style={{ width: "78%" }} /></div></div>
                      <div className="row"><span className="nm">Jack</span><div className="bars"><i className="b1" style={{ width: "58%" }} /><i className="b2" style={{ width: "66%" }} /></div></div>
                      <div className="row"><span className="nm">Kevin</span><div className="bars"><i className="b1" style={{ width: "38%" }} /><i className="b2" style={{ width: "92%" }} /></div></div>
                    </div>
                  </div>
                  <div className="coo-card coo-list">
                    <div className="coo-tag"><i style={{ background: "var(--blue)" }} />Top open deals</div>
                    <div className="li"><div>Pinnacle Suites<br /><span>Olivia Smith · Demo booked</span></div><b>£64k</b></div>
                    <div className="li"><div>Room Mate Hotels<br /><span>Jack Carter · Proposal sent</span></div><b>£48k</b></div>
                    <div className="li"><div>Stellar Tech<br /><span>Kevin Harris · Negotiation</span></div><b>£37k</b></div>
                  </div>
                  <div className="coo-card coo-diag">
                    <div className="coo-tag"><i style={{ background: "var(--amber)" }} />Diagnostics</div>
                    <span className="coo-pill warn">⚠ 2 deals at risk — no activity in 14 days</span>
                    <span className="coo-pill good">✓ Forecast confidence 92%</span>
                  </div>
                </div>
              </div>
              <div className="coo-pane">
                <div className="coo-grid">
                  <div className="coo-card">
                    <div className="coo-tag"><i style={{ background: "var(--cyan)" }} />Campaign revenue · June</div>
                    <div className="coo-metric"><span className="v">£126k</span><span className="c">↑ 18% MoM</span></div>
                    <svg className="coo-chart" viewBox="0 0 320 84" preserveAspectRatio="none">
                      <defs><linearGradient id="c2g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="rgba(0,161,223,.35)" /><stop offset="1" stopColor="rgba(0,161,223,0)" /></linearGradient></defs>
                      <path className="coo-area" d="M0,70 C40,62 60,48 95,52 C130,56 150,30 190,34 C230,38 250,16 320,10 L320,84 L0,84 Z" fill="url(#c2g)" opacity="0" />
                      <path className="coo-line" d="M0,70 C40,62 60,48 95,52 C130,56 150,30 190,34 C230,38 250,16 320,10" fill="none" stroke="#00A1DF" strokeWidth="2.5" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div className="coo-card">
                    <div className="coo-tag"><i style={{ background: "var(--violet)" }} />Comparison</div>
                    <div className="coo-cmp">
                      <div className="row"><span className="nm">Launch</span><div className="bars"><i className="b1" style={{ width: "52%" }} /><i className="b2" style={{ width: "88%" }} /></div></div>
                      <div className="row"><span className="nm">Webinar</span><div className="bars"><i className="b1" style={{ width: "40%" }} /><i className="b2" style={{ width: "64%" }} /></div></div>
                      <div className="row"><span className="nm">Newsletter</span><div className="bars"><i className="b1" style={{ width: "34%" }} /><i className="b2" style={{ width: "49%" }} /></div></div>
                    </div>
                  </div>
                  <div className="coo-card coo-list">
                    <div className="coo-tag"><i style={{ background: "var(--blue)" }} />Top campaigns</div>
                    <div className="li"><div>Summer Launch<br /><span>12.4k sent · 48% open</span></div><b>£58k</b></div>
                    <div className="li"><div>Product Webinar<br /><span>3.1k registered</span></div><b>£41k</b></div>
                    <div className="li"><div>June Newsletter<br /><span>9.8k sent · 12% CTR</span></div><b>£27k</b></div>
                  </div>
                  <div className="coo-card coo-diag">
                    <div className="coo-tag"><i style={{ background: "var(--amber)" }} />Diagnostics</div>
                    <span className="coo-pill warn">⚠ 1 campaign underperforming — low CTR</span>
                    <span className="coo-pill good">✓ Best segment: returning customers</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="coo-foot">✦ AI-generated. Verify critical figures.</div>
          </div>

          <div className="coo-chips rv">
            <span className="coo-chip"><i style={{ background: "var(--cyan)", boxShadow: "0 0 8px var(--cyan)" }} />Live record queries</span>
            <span className="coo-chip"><i style={{ background: "var(--violet)", boxShadow: "0 0 8px var(--violet)" }} />Trends &amp; comparisons</span>
            <span className="coo-chip"><i style={{ background: "var(--amber)", boxShadow: "0 0 8px var(--amber)" }} />Risk diagnostics</span>
            <span className="coo-chip"><i style={{ background: "var(--green)", boxShadow: "0 0 8px var(--green)" }} />Zero hallucinated data</span>
          </div>
        </div>
      </section>

      {/* ============ PRODUCTS (STACKING CARDS) ============ */}
      <section className="sec" id="products" style={{ paddingTop: "60px" }}>
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">The platform</span>
            <h2 className="rv">One suite. <span className="grad-txt">Every product.</span></h2>
            <p className="rv">Every feature you need to attain growth, integrated on a single platform — for companies of any size.</p>
          </div>

          <div className="stack" id="prodStack">
            <div className="prod-row stack-card">
              <div className="prod-txt">
                <div className="prod-num">01 / CRM &amp; SALES SUITE</div>
                <h3>Win more deals with a pipeline that thinks ahead</h3>
                <p>Collect all your customer information in one place, build valuable user profiles, and optimise your pipeline with intelligent segmentation and automation.</p>
                <ul className="feat-list">
                  <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20 6L9 17l-5-5" /></svg>360° contact &amp; lead management</li>
                  <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20 6L9 17l-5-5" /></svg>Visual pipeline &amp; customer segmentation</li>
                  <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20 6L9 17l-5-5" /></svg>Accurate forecasting &amp; CRM reports</li>
                </ul>
                <a className="link-more" href="/free-crm">Try the Sales Suite <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a>
              </div>
              <div className="prod-vis">
                <div className="glowblob" style={{ background: "var(--cyan)", top: "-20%", right: "-15%" }} />
                <div className="mock">
                  <div className="mock-bar"><i /><i /><i /></div>
                  <div className="mock-pill"><b>Pipeline</b> · Q3 forecast <span className="up">↑ 32%</span></div>
                  <div className="mock-chart" data-anim="bars">
                    <i style={{ height: "30%" }} /><i style={{ height: "55%" }} /><i style={{ height: "42%" }} />
                    <i style={{ height: "70%" }} /><i style={{ height: "58%" }} /><i style={{ height: "88%" }} />
                    <i style={{ height: "76%" }} /><i style={{ height: "100%" }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="prod-row stack-card">
              <div className="prod-txt">
                <div className="prod-num">02 / MARKETING SUITE</div>
                <h3>Campaigns that reach further and convert better</h3>
                <p>Gain the insights to supercharge your strategies — reach more prospects, grow traffic, and turn engagement into revenue with personalised, automated campaigns.</p>
                <ul className="feat-list">
                  <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20 6L9 17l-5-5" /></svg>Email workflows &amp; personalised journeys</li>
                  <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20 6L9 17l-5-5" /></svg>Audience segments that build themselves</li>
                  <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20 6L9 17l-5-5" /></svg>Campaign analytics in real time</li>
                </ul>
                <a className="link-more" href="/free-crm">Try the Marketing Suite <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a>
              </div>
              <div className="prod-vis">
                <div className="glowblob" style={{ background: "var(--blue)", bottom: "-25%", left: "-15%" }} />
                <div className="mock">
                  <div className="mock-bar"><i /><i /><i /></div>
                  <div className="mock-pill"><b>Campaign</b> · Summer launch <span className="up">12,480 sent</span></div>
                  <div className="mock-funnel" data-anim="funnel">
                    <i style={{ width: "100%" }} /><i style={{ width: "74%" }} />
                    <i style={{ width: "52%" }} /><i style={{ width: "30%" }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="prod-row stack-card">
              <div className="prod-txt">
                <div className="prod-num">03 / WORKFLOW AUTOMATION</div>
                <h3>Put repetitive work on autopilot</h3>
                <p>Create workflow rules that move data, assign leads and trigger follow-ups automatically — so your team spends time on what actually grows the business.</p>
                <ul className="feat-list">
                  <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20 6L9 17l-5-5" /></svg>No-code triggers &amp; smart rules</li>
                  <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20 6L9 17l-5-5" /></svg>Automatic lead routing &amp; follow-up</li>
                  <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20 6L9 17l-5-5" /></svg>Third-party integrations out of the box</li>
                </ul>
                <a className="link-more" href="/free-crm">Try Workflow Automation <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a>
              </div>
              <div className="prod-vis">
                <div className="glowblob" style={{ background: "var(--cyan)", top: "-15%", left: "-10%" }} />
                <div className="mock">
                  <div className="mock-bar"><i /><i /><i /></div>
                  <div className="mock-pill"><b>Workflow</b> · New lead → Assign → Nurture</div>
                  <div className="mock-flow">
                    <div className="node"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="8" r="4" /><path d="M4 21c0-4 3.6-7 8-7s8 3 8 7" /></svg></div>
                    <div className="wire" />
                    <div className="node"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M13 2L3 14h7l-1 8 10-12h-7z" /></svg></div>
                    <div className="wire" />
                    <div className="node"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 6h16v12H4z" /><path d="M4 7l8 6 8-6" /></svg></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="prod-row stack-card">
              <div className="prod-txt">
                <div className="prod-num">04 / EVENTS, PROJECTS &amp; MORE</div>
                <h3>From webinars to fundraisers, plan it all in one place</h3>
                <p>Manage events, ticketing and attendees; streamline projects, teams and budgets; run your shop, your memberships, your cloud storage — all on the same platform.</p>
                <ul className="feat-list">
                  <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20 6L9 17l-5-5" /></svg>Event management with ticketing &amp; agendas</li>
                  <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20 6L9 17l-5-5" /></svg>Project management &amp; resource budgeting</li>
                  <li><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M20 6L9 17l-5-5" /></svg>Shop Suite, Touchpoint websites &amp; cloud</li>
                </ul>
                <a className="link-more" href="/free-crm">See all 12+ products <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M13 6l6 6-6 6" /></svg></a>
              </div>
              <div className="prod-vis">
                <div className="glowblob" style={{ background: "var(--blue)", top: "-20%", right: "-15%" }} />
                <div className="mock">
                  <div className="mock-bar"><i /><i /><i /></div>
                  <div className="mock-pill"><b>Events</b> · June schedule <span className="up">8 upcoming</span></div>
                  <div className="mock-cal" data-anim="cal">
                    <i /><i /><i className="on" /><i /><i /><i className="on" /><i />
                    <i className="on" /><i /><i /><i className="on" /><i /><i /><i />
                    <i /><i className="on" /><i /><i /><i className="on" /><i /><i className="on" />
                    <i /><i /><i className="on" /><i /><i /><i /><i />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Full suite grid */}
          <div className="suite">
            <div className="suite-head">
              <div>
                <span className="eyebrow">All products</span>
                <h2 className="rv">Explore the <span className="grad-txt">full suite</span></h2>
              </div>
              <a className="link-more rv" href="/free-crm" style={{ marginBottom: "8px" }}>
                View all products <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
              </a>
            </div>
            <div className="pg-grid" id="pgGrid">
              {([
                ["CRM", "Optimise and manage every customer relationship from one platform.", <><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-3.5 2.9-6 6.5-6s6.5 2.5 6.5 6"/><path d="M16 4a3.5 3.5 0 010 8M18.5 14.5c2 .9 3 2.6 3 5.5"/></>],
                ["Touchpoint", "Develop, manage and grow your business website online.", <><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 4 5.6 4 9s-1.5 6.4-4 9c-2.5-2.6-4-5.6-4-9s1.5-6.4 4-9z"/></>],
                ["Sales Suite", "Win more sales with pipeline optimisation and customer segmentation.", <><path d="M3 17l5-6 4 4 6-8 3 4"/><path d="M3 21h18"/></>],
                ["Marketing Suite", "Automation to supercharge your strategies and grow your business.", <><path d="M3 11l16-7-4 16-5-5z"/><path d="M10 15l-1 5"/></>],
                ["Workflow Automation", "Start automating your business workflow today.", <><path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.8 2.8M16.2 16.2L19 19M19 5l-2.8 2.8M7.8 16.2L5 19"/><circle cx="12" cy="12" r="3.5"/></>],
                ["Project Management", "Streamline workflow to manage teams and allocate budget resources.", <><rect x="3" y="4" width="7" height="7" rx="1.5"/><rect x="14" y="4" width="7" height="7" rx="1.5"/><rect x="3" y="15" width="7" height="6" rx="1.5"/><rect x="14" y="15" width="7" height="6" rx="1.5"/></>],
                ["Shop Suite", "Complete shop management with a comprehensive set of tools.", <><path d="M6 7h12l1.5 13.5a1 1 0 01-1 1.1H5.5a1 1 0 01-1-1.1z"/><path d="M9 10V6a3 3 0 016 0v4"/></>],
                ["Cloud Computing", "Centralise your team's data and content in a secure platform.", <path d="M7 18a4.5 4.5 0 01-.6-8.97A6 6 0 0118 8.5 4 4 0 0117.5 18z"/>],
                ["Lead Management", "Track leads through every stage to increase conversions.", <><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1"/></>],
                ["Event Management", "Plan and organise every event from one platform.", <><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></>],
                ["Integrations", "Connect one powerful platform with your everyday software.", <><path d="M9 12a3 3 0 013-3h6a3 3 0 010 6h-2"/><path d="M15 12a3 3 0 01-3 3H6a3 3 0 010-6h2"/></>],
                ["Sales & Catering", "The all-in-one solution for how hospitality manages sales.", <><path d="M4 19h16M6 19V9.5L12 5l6 4.5V19"/><path d="M10 19v-4h4v4"/></>],
              ] as [string, string, React.ReactNode][]).map(([h, p, icon]) => (
                <div key={h} className="pg-card">
                  <div className="pg-top">
                    <div className="pg-ic"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">{icon}</svg></div>
                    <svg className="pg-arr" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M9 7h8v8" /></svg>
                  </div>
                  <h3>{h}</h3><p>{p}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ INDUSTRIES ============ */}
      <section className="sec" id="industries">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Solutions by industry</span>
            <h2 className="rv">Tailored to <span className="grad-txt">your industry</span></h2>
            <p className="rv">From boutique hotels to national charities — Optimiser adapts to the way your sector really works.</p>
          </div>
          <div className="ind-grid">
            <div className="ind-card lead rv">
              <div className="ind-deco" />
              <div className="ind-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 21h18M5 21V8a2 2 0 012-2h10a2 2 0 012 2v13" /><path d="M9 9h2M13 9h2M9 13h2M13 13h2M10 21v-4h4v4" /></svg></div>
              <h3>Hospitality</h3>
              <p>Initiate and maintain guest relationships to deliver exceptional service — from enquiry to check-out. Includes Sales &amp; Catering, built to revolutionise how hotels and venues manage sales.</p>
              <span className="ind-link">Explore hospitality CRM <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
            </div>
            {([
              ["Membership organisations", "A unified cloud-based solution to build value for existing and prospective members.", <><circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c0-3.5 2.9-6 6.5-6s6.5 2.5 6.5 6"/><path d="M16 4a3.5 3.5 0 010 8M18.5 14.5c2 .9 3 2.6 3 5.5"/></>],
              ["Clubs", "Management built to benefit members — joining, renewals, bookings and communications in one place.", <path d="M12 3l1.9 5.8H20l-5 3.7 1.9 5.8-4.9-3.6-4.9 3.6L9 12.5 4 8.8h6.1z"/>],
              ["Charity", "Run effective fundraising campaigns with more targeted, personalised communications.", <path d="M12 21s-7.5-4.6-9.5-9A5.4 5.4 0 0112 6.2 5.4 5.4 0 0121.5 12c-2 4.4-9.5 9-9.5 9z"/>],
              ["Small business", "Unify your processes, right from sales to marketing to data management — without the enterprise price tag.", <><path d="M3 9l9-6 9 6v11a1 1 0 01-1 1H4a1 1 0 01-1-1z"/><path d="M9 21V12h6v9"/></>],
              ["Enterprise", "Manage large volumes of data and coordinate complex business processes at scale.", <><path d="M3 21h18M6 21V5a2 2 0 012-2h8a2 2 0 012 2v16"/><path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2"/></>],
              ["Retail", "Complete retail management with a comprehensive set of tools to help you sell smarter.", <><path d="M6 7h12l1.5 13.5a1 1 0 01-1 1.1H5.5a1 1 0 01-1-1.1z"/><path d="M9 10V6a3 3 0 016 0v4"/></>],
            ] as [string, string, React.ReactNode][]).map(([h, p, icon]) => (
              <div key={h} className="ind-card rv">
                <div className="ind-deco" />
                <div className="ind-ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">{icon}</svg></div>
                <h3>{h}</h3><p>{p}</p>
                <span className="ind-link">Explore <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M5 12h14M13 6l6 6-6 6" /></svg></span>
              </div>
            ))}
          </div>

          <div className="sec-band rv">
            <div className="lhs">
              <div className="shield"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6z" /><path d="M9 12l2 2 4-4" /></svg></div>
              <div><h4>Enterprise-grade security in every industry</h4><p>Responsible data practices and privacy tools that put you in control.</p></div>
            </div>
            <div className="sec-badges">
              <span>GDPR COMPLIANT</span><span>DATA ENCRYPTION</span><span>ROLE-BASED ACCESS</span><span>UK HOSTED</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ JOURNEY ============ */}
      <section className="sec" id="journey">
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">How it works</span>
            <h2 className="rv">With you through the <span className="grad-txt">whole journey</span></h2>
            <p className="rv">From first discovery call to scaled growth, our team is engaged with your business at every step of the cycle.</p>
          </div>
          <div className="j-stage">
            <div className="j-steps" id="jSteps">
              {([
                [0, "01", "Discovery", "We take an in-depth look at your business, define the scope of work, and identify what's holding back growth — then propose a solution shaped to your needs."],
                [1, "02", "Onboard", "Our onboarding team migrates your databases and contacts into Optimiser's intelligent system, bridging sales and support so you can focus on your KPIs."],
                [2, "03", "Grow", "Enhance lead nurturing, build valuable customer segments, and launch personalised email workflows that shorten your sales cycle."],
                [3, "04", "Retain", "Full transparency on every customer interaction, optimised pipelines, and automated communications fine-tuned by detailed reporting."],
                [4, "05", "Organise", "Smart automation frees your workforce from everyday tasks while collaborative systems and project management keep everything moving."],
              ] as [number, string, string, string][]).map(([i, n, t, p]) => (
                <div key={i} className={`j-step${i === 0 ? " active" : ""}`} data-i={i}>
                  <h3><span className="n">{n}</span> {t}</h3>
                  <p>{p}</p>
                  <i className="j-prog" />
                </div>
              ))}
            </div>

            <div className="j-vis" id="jVis">
              <div className="j-art" data-i="0">
                <span className="num">01</span><span className="tag">Discovery</span>
                <svg viewBox="0 0 200 160" fill="none">
                  <circle cx="100" cy="80" r="28" stroke="rgba(255,255,255,.25)" />
                  <circle cx="100" cy="80" r="52" stroke="rgba(255,255,255,.16)" />
                  <circle cx="100" cy="80" r="74" stroke="rgba(255,255,255,.09)" />
                  <g className="ja-sweep"><path d="M100 80 L100 6 A74 74 0 0 1 154 28 Z" fill="rgba(0,161,223,.22)" /><line x1="100" y1="80" x2="100" y2="6" stroke="#00A1DF" strokeWidth="2.5" strokeLinecap="round" /></g>
                  <circle className="ja-blip" cx="66" cy="56" r="4.5" fill="#00A1DF" />
                  <circle className="ja-blip d2" cx="136" cy="102" r="4.5" fill="#7B5CFA" />
                  <circle cx="100" cy="80" r="5" fill="#fff" />
                </svg>
              </div>
              <div className="j-art" data-i="1">
                <span className="num">02</span><span className="tag">Onboard</span>
                <svg viewBox="0 0 200 160" fill="none">
                  <g className="ja-rocket">
                    <path d="M100 18 C113 33 118 56 113 88 L87 88 C82 56 87 33 100 18 Z" fill="rgba(255,255,255,.1)" stroke="#00A1DF" strokeWidth="2.5" />
                    <circle cx="100" cy="50" r="9" stroke="#00A1DF" strokeWidth="2.5" fill="rgba(0,161,223,.2)" />
                    <path d="M87 70 L70 92 L87 88 Z" fill="#075DA8" /><path d="M113 70 L130 92 L113 88 Z" fill="#075DA8" />
                    <path className="ja-flame" d="M92 90 C94 104 106 104 108 90 L100 116 Z" fill="#FFAA2B" />
                  </g>
                  <line className="ja-line" x1="62" y1="118" x2="62" y2="148" stroke="rgba(255,255,255,.3)" strokeWidth="2.5" strokeLinecap="round" />
                  <line className="ja-line" x1="100" y1="126" x2="100" y2="156" stroke="rgba(0,161,223,.55)" strokeWidth="2.5" strokeLinecap="round" />
                  <line className="ja-line" x1="138" y1="118" x2="138" y2="148" stroke="rgba(255,255,255,.3)" strokeWidth="2.5" strokeLinecap="round" />
                </svg>
              </div>
              <div className="j-art" data-i="2">
                <span className="num">03</span><span className="tag">Grow</span>
                <svg viewBox="0 0 200 160" fill="none">
                  <line x1="30" y1="134" x2="174" y2="134" stroke="rgba(255,255,255,.2)" strokeWidth="2" />
                  <rect className="ja-bar" x="40" y="96" width="20" height="38" rx="4" fill="rgba(0,161,223,.35)" />
                  <rect className="ja-bar d1" x="72" y="78" width="20" height="56" rx="4" fill="rgba(0,161,223,.55)" />
                  <rect className="ja-bar d2" x="104" y="58" width="20" height="76" rx="4" fill="rgba(0,161,223,.75)" />
                  <rect className="ja-bar d3" x="136" y="36" width="20" height="98" rx="4" fill="#00A1DF" />
                  <path d="M40 92 L80 72 L112 80 L160 30" stroke="#7B5CFA" strokeWidth="3" strokeLinecap="round" />
                  <path d="M148 28 L162 28 L160 42" stroke="#7B5CFA" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
              </div>
              <div className="j-art" data-i="3">
                <span className="num">04</span><span className="tag">Retain</span>
                <svg viewBox="0 0 200 160" fill="none">
                  <g className="ja-orbit">
                    <path d="M100 20 A60 60 0 0 1 158 92" stroke="#00A1DF" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M152 84 L160 95 L147 97" stroke="#00A1DF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M100 140 A60 60 0 0 1 42 68" stroke="rgba(255,255,255,.35)" strokeWidth="2.5" strokeLinecap="round" />
                    <path d="M48 76 L40 65 L53 63" stroke="rgba(255,255,255,.35)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </g>
                  <path className="ja-heart" d="M100 102 C84 88 76 76 82 65 C87 56 98 57 100 66 C102 57 113 56 118 65 C124 76 116 88 100 102 Z" fill="#FF6F5B" />
                </svg>
              </div>
              <div className="j-art" data-i="4">
                <span className="num">05</span><span className="tag">Organise</span>
                <svg viewBox="0 0 200 160" fill="none">
                  <rect x="22" y="24" width="44" height="112" rx="8" stroke="rgba(255,255,255,.25)" />
                  <rect x="78" y="24" width="44" height="112" rx="8" stroke="rgba(255,255,255,.25)" />
                  <rect x="134" y="24" width="44" height="112" rx="8" stroke="rgba(255,255,255,.25)" />
                  <rect x="29" y="32" width="30" height="18" rx="4" fill="rgba(0,161,223,.4)" />
                  <rect x="29" y="56" width="30" height="18" rx="4" fill="rgba(123,92,250,.4)" />
                  <rect x="85" y="32" width="30" height="18" rx="4" fill="rgba(255,170,43,.45)" />
                  <rect x="141" y="32" width="30" height="18" rx="4" fill="rgba(25,190,119,.45)" />
                  <rect x="141" y="56" width="30" height="18" rx="4" fill="rgba(0,161,223,.4)" />
                  <rect className="ja-kcard" x="85" y="62" width="30" height="18" rx="4" fill="#00A1DF" />
                  <path d="M147 92 L152 97 L163 86" stroke="#19BE77" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="sec" style={{ paddingBottom: "60px" }}>
        <div className="wrap">
          <div className="impact rv">
            <div className="impact-lines" aria-hidden="true" />
            <div className="stats">
              <div className="stat rv"><div className="num"><span className="count" data-to="12">0</span><span>+</span></div><div className="lab">Integrated products on one platform</div></div>
              <div className="stat rv"><div className="num"><span className="count" data-to="5">0</span><span>.0</span></div><div className="lab">Overall rating on Capterra</div></div>
              <div className="stat rv"><div className="num"><span className="count" data-to="30">0</span><span> days</span></div><div className="lab">Free trial — no credit card required</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="sec" id="testimonials" style={{ paddingTop: "60px" }}>
        <svg className="deco-mark" viewBox="0 0 20 20" style={{ bottom: "-80px", left: "-100px", animationDirection: "reverse" }}>
          <use href="#optimiser-mark" />
        </svg>
        <div className="wrap">
          <div className="sec-head">
            <span className="eyebrow">Wall of love</span>
            <h2 className="rv">Clients absolutely <span className="grad-txt">love</span> what we do</h2>
          </div>
        </div>
        <div className="t-marquee">
          <div className="t-track" id="tTrack">
            <div className="t-card">
              <div className="t-stars">★★★★★</div>
              <p className="quote">&ldquo;CRM made easy and affordable. After researching plenty of tools, this one offers by far the most at its price point — and the support team is amazing and highly responsive.&rdquo;</p>
              <div className="who"><div className="av">P</div><div><b>Pearleen M.</b><span>Sales Director, Fox Harb&apos;r Resort</span></div></div>
            </div>
            <div className="t-card">
              <div className="t-stars">★★★★★</div>
              <p className="quote">&ldquo;A very easy and clear system that does exactly what we need. It&apos;s simple to teach to new team members, and the reports are clear and straightforward.&rdquo;</p>
              <div className="who"><div className="av">M</div><div><b>Michaël T.</b><span>Commercial Director, Room Mate Hotels</span></div></div>
            </div>
            <div className="t-card">
              <div className="t-stars">★★★★★</div>
              <p className="quote">&ldquo;I&apos;m really impressed with the functionality — so much of my business now runs on a single platform. Fully customisable, with great customer support.&rdquo;</p>
              <div className="who"><div className="av">S</div><div><b>Sophie S.</b><span>Westminster Business Council</span></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ ABOUT ============ */}
      <div style={{ height: "900px" }}>
      <section className="about-sec" id="about" style={{ position: "sticky", top: 0 }}>
        <div className="wrap">
          <span className="about-pill">About Optimiser</span>
          <p className="about-text" id="aboutText">
            Optimiser is crafted to elevate how modern businesses work — uniting sales, marketing, events and customer data on one beautifully simple platform. With clean design and powerful automation, it helps teams engage, convert and grow.
          </p>
        </div>
      </section>
      </div>

      {/* ============ FAQ ============ */}
      <section className="sec" id="faq" style={{ paddingTop: "60px" }}>
        <div className="wrap">
          <div className="faq-grid">
            <div className="sec-head" style={{ marginBottom: 0 }}>
              <span className="eyebrow">FAQ</span>
              <h2 className="rv">Frequently asked questions</h2>
              <p className="rv">Still have a question? Call us on <b style={{ color: "var(--navy)" }}>+44 203 972 1702</b> (9am–5:30pm GMT, Mon–Fri) — we&apos;ll be happy to help.</p>
            </div>
            <div>
              <div className="faq-item open rv">
                <button className="faq-q">How does the pricing work?<span className="pm">+</span></button>
                <div className="faq-a"><p>The unified platform starts from £15 per user per month (billed annually), with one-off implementation or customisation costs typically between £200 and £2,000 depending on your needs.</p></div>
              </div>
              <div className="faq-item rv">
                <button className="faq-q">Can I integrate Optimiser with my existing tools?<span className="pm">+</span></button>
                <div className="faq-a"><p>Yes — Optimiser integrates with the everyday software you already use, including email providers, calendars and survey systems, so you can run your whole workflow from one application.</p></div>
              </div>
              <div className="faq-item rv">
                <button className="faq-q">What options for customisation are there?<span className="pm">+</span></button>
                <div className="faq-a"><p>That depends entirely on your business. Beyond the core CRM, Optimiser offers products for sales, marketing, events, projects, retail and more — and each can be tailored with custom modules, fields and workflows.</p></div>
              </div>
              <div className="faq-item rv">
                <button className="faq-q">Is my data secure with Optimiser?<span className="pm">+</span></button>
                <div className="faq-a"><p>Yes. We follow responsible data practices and give you privacy tools that put you in control of your information at all times.</p></div>
              </div>
              <div className="faq-item rv">
                <button className="faq-q">How does the free trial work?<span className="pm">+</span></button>
                <div className="faq-a"><p>You get full access for 30 days with no credit card required. Explore the platform, import your data, and decide if it&apos;s the right fit — no strings attached.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="sec" id="cta" style={{ paddingTop: "40px" }}>
        <div className="wrap">
          <div className="cta rv">
            <div className="cta-grid-lines" />
            <span className="eyebrow" style={{ justifyContent: "center" }}>Get started</span>
            <h2>Ready to run your whole business on <span className="grad-txt">one platform?</span></h2>
            <p>Start your 30-day free trial today. One powerful platform, simple to use, comprehensive — and no credit card required.</p>
            <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
              <a className="btn btn-pri" href="/free-crm">Try for free <span className="arr">→</span></a>
              <a className="btn btn-gho on-dark" href="/contact-us">Schedule a demo</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
