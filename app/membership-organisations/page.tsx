import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GsapLenis from "@/components/GsapLenis";
import Animations from "./Animations";
import "./styles.css";

export const metadata = {
  title: "CRM for Membership Organisations | Optimiser",
  description:
    "Optimiser CRM for membership organisations — subscriptions, renewals, committees and member engagement managed end-to-end on one platform.",
};

export default function MembershipOrganisationsPage() {
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
              <span className="eyebrow rv">Solutions · Membership Organisations</span>
              <h1 className="rv">
                The complete platform for <span className="grad-txt">membership organisations.</span>
              </h1>
              <p className="lede rv">
                Associations, societies and professional bodies — manage subscriptions, renewals,
                committees and engagement from one platform.
              </p>
              <ul className="hero-points rv">
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Membership records, subscriptions and accounting in one place
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Automated renewal reminders that protect recurring revenue
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Committee module for roles, meetings, documents and logs
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Segmented communications by member type, tenure and interest
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
                  <span className="url">app.optimiser.com/members</span>
                </div>
                <div className="cb-mock">
                  <div className="cb-list">
                    <h5>
                      <span>Members</span>
                      <span>4,127</span>
                    </h5>
                    <div className="cb-row">
                      <span className="cb-av" style={{ background: "linear-gradient(135deg,#075DA8,#00A1DF)" }}>JW</span>
                      <span className="nm">
                        <i style={{ width: "62%" }}></i>
                        <i style={{ width: "40%" }}></i>
                      </span>
                      <span className="cb-pill" style={{ background: "rgba(25,190,119,.15)", color: "#0B7A4C" }}>Fellow</span>
                    </div>
                    <div className="cb-row">
                      <span className="cb-av" style={{ background: "linear-gradient(135deg,#7B5CFA,#00A1DF)" }}>AP</span>
                      <span className="nm">
                        <i style={{ width: "54%" }}></i>
                        <i style={{ width: "36%" }}></i>
                      </span>
                      <span className="cb-pill" style={{ background: "rgba(25,190,119,.15)", color: "#0B7A4C" }}>Fellow</span>
                    </div>
                    <div className="cb-row">
                      <span className="cb-av" style={{ background: "linear-gradient(135deg,#FF6F5B,#FFAA2B)" }}>MK</span>
                      <span className="nm">
                        <i style={{ width: "66%" }}></i>
                        <i style={{ width: "44%" }}></i>
                      </span>
                      <span className="cb-pill" style={{ background: "rgba(255,170,43,.16)", color: "#8A5B00" }}>Renewal due</span>
                    </div>
                    <div className="cb-row new">
                      <span className="cb-av" style={{ background: "linear-gradient(135deg,#19BE77,#00A1DF)" }}>SR</span>
                      <span className="nm">
                        <i style={{ width: "58%" }}></i>
                        <i style={{ width: "38%" }}></i>
                      </span>
                      <span className="cb-pill" style={{ background: "rgba(0,161,223,.14)", color: "#046A93" }}>New member</span>
                    </div>
                  </div>
                  <div className="cb-side">
                    <div className="cb-stat">
                      <span className="lb">Renewal rate</span>
                      <b>94%</b>
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
                      <span className="lb">Committees active</span>
                      <b>11</b>
                    </div>
                    <div className="cb-stat">
                      <span className="lb">Joined this month</span>
                      <b>68</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-chip hc1">
                <i style={{ background: "var(--green)" }}></i>Renewal paid · Sofia R.
              </div>
              <div className="hero-chip hc4">
                <i style={{ background: "var(--cyan)" }}></i>AGM invite · sent to 4,127
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ============ CHALLENGES (DARK BAND) ============ */}
      <section className="cb-dark" id="challenges">
        <div className="wrap">
          <div className="sec-head rv">
            <span className="eyebrow">The challenges of membership organisations</span>
            <h2>
              Members join for value. <span className="grad-txt">They stay for engagement.</span>
            </h2>
            <p>
              Associations and professional bodies juggle subscriptions, committees, events and
              accreditation — usually across disconnected systems.
            </p>
          </div>
          <div className="cb-ch2">
            <article className="cb-c2 rv">
              <span className="num">01</span>
              <h3>Silent lapses</h3>
              <p>Renewals missed because reminders relied on memory.</p>
            </article>
            <article className="cb-c2 rv">
              <span className="num">02</span>
              <h3>Fragmented member data</h3>
              <p>Subscriptions, CPD and event history in separate systems.</p>
            </article>
            <article className="cb-c2 rv">
              <span className="num">03</span>
              <h3>Falling engagement</h3>
              <p>Members who never hear from you between renewals.</p>
            </article>
            <article className="cb-c2 rv">
              <span className="num">04</span>
              <h3>Committee overhead</h3>
              <p>Minutes, roles and documents managed over email chains.</p>
            </article>
            <article className="cb-c2 rv">
              <span className="num">05</span>
              <h3>Proving member value</h3>
              <p>No data trail showing what membership actually delivers.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ============ HOW OPTIMISER HELPS (BENTO 2) ============ */}
      <section className="sec" id="help">
        <div className="wrap">
          <div className="sec-head rv">
            <span className="eyebrow">How Optimiser helps membership organisations</span>
            <h2>
              One platform, <span className="grad-txt">every member</span>
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
              <h3>Renewals on autopilot</h3>
              <p>
                Automated reminder journeys before every expiry — with subscription, accounting and
                payment history sorted per member, recurring revenue stops leaking.
              </p>
              <div className="growth">
                <span className="n">94%</span>
                <span>renewal rates when reminders and engagement are systematic</span>
              </div>
            </article>
            <article className="cb-h tint-a rv">
              <span className="ic" style={{ background: "rgba(7,93,168,.1)", color: "var(--blue)" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </span>
              <h3>One record per member</h3>
              <p>
                Subscriptions, preferences, communications, event attendance and committee roles —
                a complete timeline per member.
              </p>
            </article>
            <article className="cb-h tint-b rv">
              <span className="ic" style={{ background: "rgba(123,92,250,.12)", color: "var(--violet)" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                  <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                  <circle cx="7" cy="7" r="1.5" />
                </svg>
              </span>
              <h3>Committees, administered</h3>
              <p>
                Define roles, track meetings and store documents — the Committee module keeps
                community governance tidy.
              </p>
            </article>
            <article className="cb-h wide tint-c rv">
              <span className="ic" style={{ background: "rgba(255,111,91,.12)", color: "var(--coral)" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                  <rect x="3" y="4" width="18" height="17" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
              </span>
              <h3>Engagement between renewals</h3>
              <p>
                Segment members by type, tenure and interest — send newsletters, CPD invites and
                event campaigns that keep membership valuable year-round.
              </p>
            </article>
            <article className="cb-h tint-d rv">
              <span className="ic" style={{ background: "rgba(25,190,119,.12)", color: "var(--green)" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                  <path d="M12 21C7 17 2 13.5 2 8.8A4.8 4.8 0 0 1 6.8 4c2 0 3.9 1 5.2 2.9A6.2 6.2 0 0 1 17.2 4 4.8 4.8 0 0 1 22 8.8c0 4.7-5 8.2-10 12.2z" />
                </svg>
              </span>
              <h3>Events that grow membership</h3>
              <p>
                AGMs, conferences and networking evenings — invites, RSVPs and follow-ups from the
                Event module, with attendance feeding each member record.
              </p>
            </article>
            <article className="cb-h rv">
              <span className="ic" style={{ background: "rgba(0,161,223,.12)", color: "#046A93" }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                  <path d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-3.8-.9L3 21l1.9-5.7a8.5 8.5 0 1 1 16.1-3.8z" />
                </svg>
              </span>
              <h3>Prove member value</h3>
              <p>
                Dashboards show engagement, retention and growth — the evidence base for your board
                and your members.
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
              <span className="eyebrow">Why Optimiser for membership organisations</span>
              <h2>
                Membership, <span className="grad-txt">end to end</span>
              </h2>
              <p>
                <b>Join → engage → renew, one system.</b> From first enquiry to fellowship, every
                stage of the member lifecycle runs through one platform with definable attributes
                for the way your organisation works.
              </p>
              <p>
                <b>Grow memberships faster.</b> Nurture prospective members with personalised
                communication — and convert them into loyal, long-standing members with smart
                automation.
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
                    <b>Join</b>
                    <span className="num">01</span>
                  </div>
                  <p>
                    Web forms feed applications straight into the CRM — approval to welcome pack,
                    automated.
                  </p>
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
                    <b>Engage</b>
                    <span className="num">02</span>
                  </div>
                  <p>
                    Segmented newsletters, events and CPD keep membership valuable between
                    renewals.
                  </p>
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
                    <b>Renew</b>
                    <span className="num">03</span>
                  </div>
                  <p>
                    Automated reminders and easy payment — renewal becomes the default, not a
                    decision.
                  </p>
                </div>
              </article>
            </div>
          </div>

          <div className="sec-head rv" style={{ marginBottom: "28px" }}>
            <span className="eyebrow">Tools for membership organisations</span>
            <h2 style={{ fontSize: "clamp(24px,3vw,36px)" }}>
              Everything an organisation needs, <span className="grad-txt">built in</span>
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
                      Memberships
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
                      Committees
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
                      Renewals
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
                      Engagement Reports
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
                  <img id="orbKnotImg" src="/assets/optimiser-icon.svg" alt="Optimiser" />
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
                Grow your membership with <span className="grad-txt">one platform</span>
              </h2>
              <p>
                Subscriptions, committees, events and engagement in one place. Start your 30-day
                free trial — no credit card required.
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
