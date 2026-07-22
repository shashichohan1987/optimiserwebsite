import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GsapLenis from "@/components/GsapLenis";
import Animations from "./Animations";
import "./styles.css";

export const metadata = {
  title: "Project Management Software | Optimiser",
  description:
    "Optimiser Project Management — streamlined workflow to manage teams, allocate budget resources and control multiple ongoing projects with integrated CRM.",
};

export default function ProjectManagementPage() {
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
              <span className="eyebrow rv">Project Management</span>
              <h1 className="rv">
                Seamless project management, <span className="grad-txt">with CRM built in.</span>
              </h1>
              <p className="lede rv">
                Create a streamlined workflow to manage your teams, allocate budget resources and control multiple
                ongoing projects.
              </p>
              <ul className="hero-points rv">
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Track all project data from one clean, comprehensive pipeline
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Integrate tasks, emails and CRM data for context-based management
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  AI analytics create clear progress reports for key stakeholders
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Scalable and flexible for any business
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
                  <span className="url">app.optimiser.com/projects/spring-launch</span>
                </div>
                <div className="pm-mock">
                  <div className="pm-tasks">
                    <h5>
                      <span>Spring launch · tasks</span>
                      <span>12</span>
                    </h5>
                    <div className="pm-task anim">
                      <span className="box">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </span>
                      <span className="tx">
                        <i style={{ width: "66%" }}></i>
                        <i style={{ width: "40%" }}></i>
                      </span>
                      <span className="who" style={{ background: "linear-gradient(135deg,#075DA8,#00A1DF)" }}>JW</span>
                    </div>
                    <div className="pm-task anim t2">
                      <span className="box">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </span>
                      <span className="tx">
                        <i style={{ width: "58%" }}></i>
                        <i style={{ width: "34%" }}></i>
                      </span>
                      <span className="who" style={{ background: "linear-gradient(135deg,#7B5CFA,#00A1DF)" }}>AP</span>
                    </div>
                    <div className="pm-task anim t3">
                      <span className="box">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </span>
                      <span className="tx">
                        <i style={{ width: "70%" }}></i>
                        <i style={{ width: "44%" }}></i>
                      </span>
                      <span className="who" style={{ background: "linear-gradient(135deg,#FF6F5B,#FFAA2B)" }}>MK</span>
                    </div>
                    <div className="pm-task ">
                      <span className="box">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </span>
                      <span className="tx">
                        <i style={{ width: "62%" }}></i>
                        <i style={{ width: "38%" }}></i>
                      </span>
                      <span className="who" style={{ background: "linear-gradient(135deg,#19BE77,#00A1DF)" }}>SR</span>
                    </div>
                  </div>
                  <div className="pm-side">
                    <div className="pm-card">
                      <span className="lb">Project progress</span>
                      <b>On track</b>
                      <div className="pm-bar">
                        <i></i>
                      </div>
                    </div>
                    <div className="pm-card">
                      <span className="lb">Team</span>
                      <div className="pm-team">
                        <span className="who" style={{ background: "linear-gradient(135deg,#075DA8,#00A1DF)" }}>JW</span>
                        <span className="who" style={{ background: "linear-gradient(135deg,#7B5CFA,#00A1DF)" }}>AP</span>
                        <span className="who" style={{ background: "linear-gradient(135deg,#FF6F5B,#FFAA2B)" }}>MK</span>
                        <span className="who" style={{ background: "linear-gradient(135deg,#19BE77,#00A1DF)" }}>SR</span>
                        <span className="more">+3</span>
                      </div>
                    </div>
                    <div className="pm-card">
                      <span className="lb">Next deadline</span>
                      <b>Fri · 3 tasks</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-chip hc1">
                <i style={{ background: "var(--green)" }}></i>Task completed · Design review
              </div>
              <div className="hero-chip hc4">
                <i style={{ background: "var(--violet)" }}></i>Budget · 82% allocated
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
                <rect x="3" y="4" width="18" height="16" rx="2" />
                <path d="M3 9h18M8 4v16" />
              </svg>
            </span>
            <div>
              <h3>One suite</h3>
              <p>Every module for thorough business supervision, in a single subscription.</p>
            </div>
          </div>
          <div className="pf rv">
            <span className="pic">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </span>
            <div>
              <h3>Unified teams</h3>
              <p>Pipeline, group calendar and shared tasks keep everyone coordinated.</p>
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
              <h3>Smart analytics</h3>
              <p>Easy-to-read, customisable graphs map progress and keep you on target.</p>
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
                <div className="f-num">01 / ONE SUITE</div>
                <h2>Project management under a single suite</h2>
                <p className="f-lead">
                  Manage multiple projects successfully with powerful, CRM-integrated tools — scalable and flexible for
                  any business.
                </p>
                <ul className="feat-list">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Streamlined workflow to manage teams and budget resources
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Clear performance reports that map progress
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Stay on target across every ongoing project
                  </li>
                </ul>
              </div>
              <div className="f-vis rv-r">
                <div className="f-glow"></div>
                <div className="plat-bar">
                  <i className="d r"></i>
                  <i className="d y"></i>
                  <i className="d g"></i>
                  <span className="url">app.optimiser.com/projects</span>
                </div>
                <img
                  src="https://www.optimiser.com/image/project-management-02.svg"
                  alt="Project suite in Optimiser"
                  loading="lazy"
                  decoding="async"
                  style={{ background: "#fff", padding: "22px" }}
                />
              </div>
            </div>

            <div className="frow">
              <div className="rv">
                <div className="f-num">02 / TEAMS</div>
                <h2>A streamlined process that unifies your teams</h2>
                <p className="f-lead">
                  Arrange all your teams&apos; activities from one place — and let them work collaboratively on tasks.
                </p>
                <ul className="feat-list">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Group calendar tracks availability and coordination
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Assign tasks, priorities and deadlines for instant updates
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Time saving and higher project turnover
                  </li>
                </ul>
              </div>
              <div className="f-vis rv-r">
                <div className="f-glow"></div>
                <div className="plat-bar">
                  <i className="d r"></i>
                  <i className="d y"></i>
                  <i className="d g"></i>
                  <span className="url">app.optimiser.com/projects/tasks</span>
                </div>
                <img
                  src="https://www.optimiser.com/image/project-management-03.svg"
                  alt="Team tasks in Optimiser"
                  loading="lazy"
                  decoding="async"
                  style={{ background: "#fff", padding: "22px" }}
                />
              </div>
            </div>

            <div className="frow">
              <div className="rv">
                <div className="f-num">03 / SCALE</div>
                <h2>Execute multiple projects simultaneously</h2>
                <p className="f-lead">
                  Run every aspect of your business in unison — and track conflicting priorities with confidence.
                </p>
                <ul className="feat-list">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Share data between departments without attachments or third-party hosts
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    All supervision modules in a single subscription
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Track and control multiple conflicting priorities
                  </li>
                </ul>
              </div>
              <div className="f-vis rv-r">
                <div className="f-glow"></div>
                <div className="plat-bar">
                  <i className="d r"></i>
                  <i className="d y"></i>
                  <i className="d g"></i>
                  <span className="url">app.optimiser.com/projects/portfolio</span>
                </div>
                <img
                  src="https://www.optimiser.com/image/project-management-04.svg"
                  alt="Multiple projects in Optimiser"
                  loading="lazy"
                  decoding="async"
                  style={{ background: "#fff", padding: "22px" }}
                />
              </div>
            </div>

            <div className="frow">
              <div className="f-num" style={{ display: "none" }}></div>
              <div className="rv">
                <div className="f-num">04 / INSIGHT</div>
                <h2>Make insightful decisions with smart analytics</h2>
                <p className="f-lead">
                  CRM analytics provide insights into account and project activity across the full scope of your
                  business.
                </p>
                <ul className="feat-list">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Easy-to-read, customisable graphs from project tracking tools
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Allocate resources based on customer and employee trends
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Integrated CRM features increase business intelligence
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
                  src="https://www.optimiser.com/image/project-management-05.svg"
                  alt="Project analytics in Optimiser"
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
              <p>Everything you&apos;re wondering before you plan.</p>
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
                  Is project management software effective?
                  <span className="pl">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="fa-body">
                  It allows businesses to handle more projects at once. From juggling multiple pressing tasks to
                  stakeholder satisfaction and budget — you can do it all from a single platform.
                </p>
              </details>
              <details className="faq-item">
                <summary>
                  Why use project management software?
                  <span className="pl">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="fa-body">
                  Evolve beyond multiple third-party resources. Save time and financial resources by handling all your
                  projects from a single source-of-truth platform with live updates and data analytics.
                </p>
              </details>
              <details className="faq-item">
                <summary>
                  Who uses project management software?
                  <span className="pl">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="fa-body">
                  Any business that runs on a project-by-project basis, with deadline-oriented product or service
                  provision. Any department in the project cycle benefits from the streamlined workflow it promotes.
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
                Run every project from <span className="grad-txt">one platform</span>
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
