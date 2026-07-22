import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GsapLenis from "@/components/GsapLenis";
import Animations from "./Animations";
import "./styles.css";

export const metadata = {
  title: "CRM for Charities & Non-Profits | Optimiser",
  description:
    "Optimiser CRM for charities — manage donors, volunteers, fundraising campaigns and events from one platform, so more of every pound reaches the cause.",
};

export default function CharityPage() {
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
              <span className="eyebrow rv">Solutions · Charity</span>
              <h1 className="rv">
                More time for the cause, <span className="grad-txt">less on admin.</span>
              </h1>
              <p className="lede rv">
                Manage donors, volunteers, fundraising and events from one platform — with
                automation handling the admin so your team focuses on impact.
              </p>
              <ul className="hero-points rv">
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Donor and volunteer records centralised with full giving history
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Fundraising campaigns and appeals tracked from one pipeline
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Personalised thank-yous and updates, sent automatically
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Event management for galas, drives and volunteer days
                </li>
              </ul>
              <div className="whero-cta rv">
                <a className="btn btn-pri" href="/free-crm">
                  Try for free <span className="arr">→</span>
                </a>
                <a className="btn btn-gho" href="#help">
                  See how it helps
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
                  <span className="url">app.optimiser.com/donors</span>
                </div>
                <div className="cb-mock">
                  <div className="cb-list">
                    <h5>
                      <span>Donors</span>
                      <span>2,846</span>
                    </h5>
                    <div className="cb-row">
                      <span className="cb-av" style={{ background: "linear-gradient(135deg,#075DA8,#00A1DF)" }}>JW</span>
                      <span className="nm">
                        <i style={{ width: "62%" }}></i>
                        <i style={{ width: "40%" }}></i>
                      </span>
                      <span className="cb-pill" style={{ background: "rgba(25,190,119,.15)", color: "#0B7A4C" }}>Monthly giver</span>
                    </div>
                    <div className="cb-row">
                      <span className="cb-av" style={{ background: "linear-gradient(135deg,#7B5CFA,#00A1DF)" }}>AP</span>
                      <span className="nm">
                        <i style={{ width: "54%" }}></i>
                        <i style={{ width: "36%" }}></i>
                      </span>
                      <span className="cb-pill" style={{ background: "rgba(25,190,119,.15)", color: "#0B7A4C" }}>Monthly giver</span>
                    </div>
                    <div className="cb-row">
                      <span className="cb-av" style={{ background: "linear-gradient(135deg,#FF6F5B,#FFAA2B)" }}>MK</span>
                      <span className="nm">
                        <i style={{ width: "66%" }}></i>
                        <i style={{ width: "44%" }}></i>
                      </span>
                      <span className="cb-pill" style={{ background: "rgba(255,170,43,.16)", color: "#8A5B00" }}>Lapsed — re-engage</span>
                    </div>
                    <div className="cb-row new">
                      <span className="cb-av" style={{ background: "linear-gradient(135deg,#19BE77,#00A1DF)" }}>SR</span>
                      <span className="nm">
                        <i style={{ width: "58%" }}></i>
                        <i style={{ width: "38%" }}></i>
                      </span>
                      <span className="cb-pill" style={{ background: "rgba(0,161,223,.14)", color: "#046A93" }}>New donor</span>
                    </div>
                  </div>
                  <div className="cb-side">
                    <div className="cb-stat">
                      <span className="lb">Raised this quarter</span>
                      <b>£64k</b>
                      <div className="cb-spark">
                        <i style={{ height: "30%" }}></i>
                        <i style={{ height: "44%" }}></i>
                        <i style={{ height: "38%" }}></i>
                        <i style={{ height: "56%" }}></i>
                        <i style={{ height: "62%" }}></i>
                        <i style={{ height: "74%" }}></i>
                        <i style={{ height: "88%" }}></i>
                        <i style={{ height: "100%" }}></i>
                      </div>
                    </div>
                    <div className="cb-stat">
                      <span className="lb">Active volunteers</span>
                      <b>183</b>
                    </div>
                    <div className="cb-stat">
                      <span className="lb">Appeal progress</span>
                      <b>82%</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-chip hc1">
                <i style={{ background: "var(--green)" }}></i>New donation · £250
              </div>
              <div className="hero-chip hc4">
                <i style={{ background: "var(--cyan)" }}></i>Thank-you email · sent
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ============ CHALLENGES (DARK BAND) ============ */}
      <section className="cb-dark" id="challenges">
        <div className="wrap">
          <div className="sec-head rv">
            <span className="eyebrow">The challenges of charities</span>
            <h2>
              Every pound counts. <span className="grad-txt">So does every hour.</span>
            </h2>
            <p>
              Charities run on tight budgets, small teams and goodwill. Admin overhead and
              scattered donor data drain resources meant for the mission.
            </p>
          </div>
          <div className="cb-ch2">
            <article className="cb-c2 rv">
              <span className="num">01</span>
              <h3>Donor attrition</h3>
              <p>One-time givers never hearing from you again.</p>
            </article>
            <article className="cb-c2 rv">
              <span className="num">02</span>
              <h3>Scattered records</h3>
              <p>Donors, volunteers and beneficiaries across sheets and inboxes.</p>
            </article>
            <article className="cb-c2 rv">
              <span className="num">03</span>
              <h3>Volunteer coordination</h3>
              <p>Availability, roles and hours tracked by hand.</p>
            </article>
            <article className="cb-c2 rv">
              <span className="num">04</span>
              <h3>Fundraising visibility</h3>
              <p>No live view of appeal progress against target.</p>
            </article>
            <article className="cb-c2 rv">
              <span className="num">05</span>
              <h3>Reporting to trustees</h3>
              <p>Impact and outcome reports assembled manually every quarter.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ============ HOW OPTIMISER HELPS (BENTO 2) ============ */}
      <section className="sec" id="help">
        <div className="wrap">
          <div className="sec-head rv">
            <span className="eyebrow">How Optimiser helps charities do more with less</span>
            <h2>
              One platform, <span className="grad-txt">every supporter</span>
            </h2>
          </div>
          <div className="cb-help">
            <article className="cb-h tall rv">
              <span className="ic">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                  <path d="M3 3v18h18" />
                  <path d="M7 14l3-3 3 3 5-6" />
                </svg>
              </span>
              <h3>Grow lifetime giving</h3>
              <p>
                Full giving history, preferences and relationships in each donor profile — with
                automated journeys that welcome, thank and re-engage supporters at the right
                moments.
              </p>
              <div className="growth">
                <span className="n">+32%</span>
                <span>donor retention when follow-up is systematic, not ad hoc</span>
              </div>
            </article>
            <article className="cb-h tint-a rv">
              <span className="ic" style={{ background: "rgba(7,93,168,.1)", color: "var(--blue)" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </span>
              <h3>One record per supporter</h3>
              <p>
                Donors, volunteers, members and beneficiaries centralised — every interaction,
                donation and event attendance in one timeline.
              </p>
            </article>
            <article className="cb-h tint-b rv">
              <span className="ic" style={{ background: "rgba(123,92,250,.12)", color: "var(--violet)" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                  <circle cx="7" cy="7" r="1.5" />
                </svg>
              </span>
              <h3>Charity-friendly pricing</h3>
              <p>
                Pay only for the modules you use — cloud-based tools sized for small teams and
                tight budgets.
              </p>
            </article>
            <article className="cb-h wide tint-c rv">
              <span className="ic" style={{ background: "rgba(255,111,91,.12)", color: "var(--coral)" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                  <rect x="3" y="4" width="18" height="17" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
              </span>
              <h3>Fundraising with full visibility</h3>
              <p>
                Track every appeal and campaign against target in real time — segment supporters
                by giving level and history for tailored asks.
              </p>
            </article>
            <article className="cb-h tint-d rv">
              <span className="ic" style={{ background: "rgba(25,190,119,.12)", color: "var(--green)" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                  <path d="M12 21C7 17 2 13.5 2 8.8A4.8 4.8 0 0 1 6.8 4c2 0 3.9 1 5.2 2.9A6.2 6.2 0 0 1 17.2 4 4.8 4.8 0 0 1 22 8.8c0 4.7-5 8.2-10 12.2z" />
                </svg>
              </span>
              <h3>Events that run themselves</h3>
              <p>
                Galas, drives and volunteer days — invites, RSVPs, task lists and budgets managed
                from the Event module.
              </p>
            </article>
            <article className="cb-h rv">
              <span className="ic" style={{ background: "rgba(0,161,223,.12)", color: "#046A93" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                  <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.7a8.5 8.5 0 1 1 16.1-3.8z" />
                </svg>
              </span>
              <h3>Trustee-ready reporting</h3>
              <p>
                Impact dashboards and outcome reports generated in clicks — not assembled by hand
                each quarter.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ============ WHY + FEATURES ============ */}
      <section className="sec" id="why-clubs" style={{ paddingTop: "30px" }}>
        <div className="wrap">
          <div className="cb-split" style={{ marginBottom: "90px" }}>
            <div className="cb-split-left rv">
              <span className="eyebrow">Why Optimiser for charities</span>
              <h2>
                Built for <span className="grad-txt">good causes</span>
              </h2>
              <p>
                <b>Every supporter, one view.</b> Donations, volunteering, event attendance and
                communications in a single timeline — so every conversation starts informed.
              </p>
              <p>
                <b>Less admin, more mission.</b> Automated receipts, thank-yous and re-engagement
                journeys hand hours back to your team every week.
              </p>
            </div>
            <div className="cb-pillars rv">
              <article className="cb-pillar">
                <span className="ic" style={{ background: "rgba(7,93,168,.1)", color: "var(--blue)" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                    <rect x="3" y="4" width="18" height="16" rx="2" />
                    <path d="M3 9h18M8 4v16" />
                  </svg>
                </span>
                <div>
                  <div className="hd">
                    <b>Attract</b>
                    <span className="num">01</span>
                  </div>
                  <p>Capture new supporters from your website and campaigns straight into the CRM.</p>
                </div>
              </article>
              <article className="cb-pillar">
                <span className="ic" style={{ background: "rgba(123,92,250,.12)", color: "var(--violet)" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                  </svg>
                </span>
                <div>
                  <div className="hd">
                    <b>Steward</b>
                    <span className="num">02</span>
                  </div>
                  <p>Thank, update and involve donors automatically — retention through relationship.</p>
                </div>
              </article>
              <article className="cb-pillar">
                <span className="ic" style={{ background: "rgba(25,190,119,.12)", color: "#0B7A4C" }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                    <path d="M3 3v18h18" />
                    <path d="M7 14l3-3 3 3 5-6" />
                  </svg>
                </span>
                <div>
                  <div className="hd">
                    <b>Report</b>
                    <span className="num">03</span>
                  </div>
                  <p>Show trustees and funders exactly where money went and what it achieved.</p>
                </div>
              </article>
            </div>
          </div>

          <div className="sec-head rv" style={{ marginBottom: "28px" }}>
            <span className="eyebrow">Tools for charities</span>
            <h2 style={{ fontSize: "clamp(24px,3vw,36px)" }}>
              Everything a charity needs, <span className="grad-txt">built in</span>
            </h2>
          </div>
          <div className="orb-wrap rv">
            <div className="orb-stage">
              <div className="orb-ring" style={{ animationDuration: "44s" }}>
                <span className="orb-circle" style={{ width: "300px", height: "300px", top: "-150px", left: "-150px" }}></span>
                <span className="orb-sat" style={{ transform: "rotateZ(20deg) translateX(150px) rotateZ(-20deg)" }}>
                  <span className="orb-bill" style={{ animationDuration: "44s" }}>
                    <a className="orb-pill" href="/#products">
                      <span className="ic" style={{ background: "rgba(7,93,168,.12)", color: "#075DA8" }}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="3" />
                          <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
                        </svg>
                      </span>
                      CRM
                    </a>
                  </span>
                </span>
                <span className="orb-sat" style={{ transform: "rotateZ(200deg) translateX(150px) rotateZ(-200deg)" }}>
                  <span className="orb-bill" style={{ animationDuration: "44s" }}>
                    <a className="orb-pill" href="/#products">
                      <span className="ic" style={{ background: "rgba(0,161,223,.14)", color: "#046A93" }}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="4" width="18" height="17" rx="2" />
                          <path d="M16 2v4M8 2v4M3 10h18" />
                        </svg>
                      </span>
                      Calendar
                    </a>
                  </span>
                </span>
                <span className="orb-sat" style={{ transform: "rotateZ(110deg) translateX(150px) rotateZ(-110deg)" }}>
                  <span className="orb-dot"></span>
                </span>
                <span className="orb-sat" style={{ transform: "rotateZ(290deg) translateX(150px) rotateZ(-290deg)" }}>
                  <span className="orb-dot"></span>
                </span>
              </div>
              <div className="orb-ring" style={{ animationDuration: "60s" }}>
                <span className="orb-circle" style={{ width: "470px", height: "470px", top: "-235px", left: "-235px" }}></span>
                <span className="orb-sat" style={{ transform: "rotateZ(80deg) translateX(235px) rotateZ(-80deg)" }}>
                  <span className="orb-bill" style={{ animationDuration: "60s" }}>
                    <a className="orb-pill" href="/#products">
                      <span className="ic" style={{ background: "rgba(123,92,250,.14)", color: "#7B5CFA" }}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                        </svg>
                      </span>
                      Donor Management
                    </a>
                  </span>
                </span>
                <span className="orb-sat" style={{ transform: "rotateZ(260deg) translateX(235px) rotateZ(-260deg)" }}>
                  <span className="orb-bill" style={{ animationDuration: "60s" }}>
                    <a className="orb-pill" href="/#products">
                      <span className="ic" style={{ background: "rgba(255,170,43,.16)", color: "#8A5B00" }}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="18" cy="18" r="3" />
                          <circle cx="6" cy="6" r="3" />
                          <path d="M6 9v6a3 3 0 0 0 3 3h6" />
                          <path d="M15 6h3a3 3 0 0 1 3 3" />
                        </svg>
                      </span>
                      Volunteers
                    </a>
                  </span>
                </span>
                <span className="orb-sat" style={{ transform: "rotateZ(170deg) translateX(235px) rotateZ(-170deg)" }}>
                  <span className="orb-dot"></span>
                </span>
                <span className="orb-sat" style={{ transform: "rotateZ(350deg) translateX(235px) rotateZ(-350deg)" }}>
                  <span className="orb-dot"></span>
                </span>
              </div>
              <div className="orb-ring" style={{ animationDuration: "78s" }}>
                <span className="orb-circle" style={{ width: "640px", height: "640px", top: "-320px", left: "-320px" }}></span>
                <span className="orb-sat" style={{ transform: "rotateZ(140deg) translateX(320px) rotateZ(-140deg)" }}>
                  <span className="orb-bill" style={{ animationDuration: "78s" }}>
                    <a className="orb-pill" href="/marketing-suite">
                      <span className="ic" style={{ background: "rgba(255,111,91,.15)", color: "#FF6F5B" }}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="2" y="4" width="20" height="16" rx="2" />
                          <path d="M2 7l10 6 10-6" />
                        </svg>
                      </span>
                      Email Marketing
                    </a>
                  </span>
                </span>
                <span className="orb-sat" style={{ transform: "rotateZ(320deg) translateX(320px) rotateZ(-320deg)" }}>
                  <span className="orb-bill" style={{ animationDuration: "78s" }}>
                    <a className="orb-pill" href="/#products">
                      <span className="ic" style={{ background: "rgba(25,190,119,.15)", color: "#0B7A4C" }}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="4" width="18" height="18" rx="2" />
                          <path d="M16 2v4M8 2v4M3 10h18" />
                          <path d="M9 16l2 2 4-4" />
                        </svg>
                      </span>
                      Fundraising
                    </a>
                  </span>
                </span>
                <span className="orb-sat" style={{ transform: "rotateZ(50deg) translateX(320px) rotateZ(-50deg)" }}>
                  <span className="orb-dot"></span>
                </span>
                <span className="orb-sat" style={{ transform: "rotateZ(230deg) translateX(320px) rotateZ(-230deg)" }}>
                  <span className="orb-dot"></span>
                </span>
              </div>
              <div className="orb-ring" style={{ animationDuration: "100s" }}>
                <span className="orb-circle" style={{ width: "810px", height: "810px", top: "-405px", left: "-405px" }}></span>
                <span className="orb-sat" style={{ transform: "rotateZ(0deg) translateX(405px) rotateZ(0deg)" }}>
                  <span className="orb-bill" style={{ animationDuration: "100s" }}>
                    <a className="orb-pill" href="/#products">
                      <span className="ic" style={{ background: "rgba(7,93,168,.12)", color: "#075DA8" }}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="4" width="18" height="16" rx="2" />
                          <path d="M3 9h18M8 4v16" />
                        </svg>
                      </span>
                      Project Management
                    </a>
                  </span>
                </span>
                <span className="orb-sat" style={{ transform: "rotateZ(120deg) translateX(405px) rotateZ(-120deg)" }}>
                  <span className="orb-bill" style={{ animationDuration: "100s" }}>
                    <a className="orb-pill" href="/touchpoint-v2">
                      <span className="ic" style={{ background: "rgba(0,161,223,.14)", color: "#046A93" }}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="5" width="18" height="14" rx="2" />
                          <path d="M7 10h6M7 14h10" />
                        </svg>
                      </span>
                      Event Management
                    </a>
                  </span>
                </span>
                <span className="orb-sat" style={{ transform: "rotateZ(240deg) translateX(405px) rotateZ(-240deg)" }}>
                  <span className="orb-bill" style={{ animationDuration: "100s" }}>
                    <a className="orb-pill" href="/#products">
                      <span className="ic" style={{ background: "rgba(123,92,250,.14)", color: "#7B5CFA" }}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M14 7h5a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-5" />
                          <path d="M10 17H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5" />
                          <path d="M8 12h8" />
                        </svg>
                      </span>
                      Impact Reports
                    </a>
                  </span>
                </span>
                <span className="orb-sat" style={{ transform: "rotateZ(60deg) translateX(405px) rotateZ(-60deg)" }}>
                  <span className="orb-dot"></span>
                </span>
                <span className="orb-sat" style={{ transform: "rotateZ(180deg) translateX(405px) rotateZ(-180deg)" }}>
                  <span className="orb-dot"></span>
                </span>
                <span className="orb-sat" style={{ transform: "rotateZ(300deg) translateX(405px) rotateZ(-300deg)" }}>
                  <span className="orb-dot"></span>
                </span>
              </div>
              <div className="orb-core">
                <span className="halo"></span>
                <span className="knot">
                  <img src="/assets/optimiser-icon.svg" alt="Optimiser" />
                </span>
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
                Do more for your cause with <span className="grad-txt">one platform</span>
              </h2>
              <p>
                Manage donors, volunteers and fundraising in one place. Start your 30-day free
                trial — no credit card required.
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
