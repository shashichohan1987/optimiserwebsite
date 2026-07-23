import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GsapLenis from "@/components/GsapLenis";
import Animations from "./Animations";
import "./styles.css";

export const metadata = {
  title: "Cloud Computing — CRM Integrated Platform | Optimiser",
  description:
    "Optimiser Cloud Computing — centralise teams and data on one secure platform. Access from anywhere, share files with two-factor verification, analytics from every department.",
};

export default function CloudComputingPage() {
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
              <span className="eyebrow rv">Cloud Computing</span>
              <h1 className="rv">
                Centralise teams and data with <span className="grad-txt">powerful cloud computing.</span>
              </h1>
              <p className="lede rv">
                One secure, single-source-of-truth platform — your company&apos;s most recent data, from any
                device, anywhere in the world.
              </p>
              <ul className="hero-points rv">
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Access the most recent company data from any device, anywhere
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Two-factor verification for sharing files securely with third parties
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Analytics using data from every department
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  3GB free cloud Drive storage per user account
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
                  <span className="url">app.optimiser.com/drive</span>
                </div>
                <div className="cc-mock">
                  <div className="cc-drive">
                    <h5>
                      <span>Drive · Shared with sales</span>
                      <span>128 files</span>
                    </h5>
                    <div className="cc-file">
                      <span className="fi" style={{ background: "rgba(7,93,168,.12)", color: "#075DA8" }}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <path d="M14 2v6h6" />
                        </svg>
                      </span>
                      <span className="nm">
                        <i></i>
                        <i></i>
                      </span>
                      <span className="st">Synced ✓</span>
                    </div>
                    <div className="cc-file">
                      <span className="fi" style={{ background: "rgba(123,92,250,.14)", color: "#7B5CFA" }}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                          <path d="M3 9h18M3 15h18M9 3v18" />
                        </svg>
                      </span>
                      <span className="nm">
                        <i></i>
                        <i></i>
                      </span>
                      <span className="st">Synced ✓</span>
                    </div>
                    <div className="cc-file up">
                      <span className="fi" style={{ background: "rgba(0,161,223,.14)", color: "#046A93" }}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <rect x="3" y="3" width="18" height="18" rx="2" />
                          <circle cx="8.5" cy="8.5" r="1.5" />
                          <path d="M21 15l-5-5L5 21" />
                        </svg>
                      </span>
                      <span className="nm">
                        <i></i>
                        <i></i>
                        <span className="prog">
                          <i></i>
                        </span>
                      </span>
                      <span className="st"></span>
                    </div>
                    <div className="cc-file">
                      <span className="fi" style={{ background: "rgba(25,190,119,.15)", color: "#0B7A4C" }}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                          <path d="M14 2v6h6" />
                        </svg>
                      </span>
                      <span className="nm">
                        <i></i>
                        <i></i>
                      </span>
                      <span className="st">Synced ✓</span>
                    </div>
                  </div>
                  <div className="cc-side">
                    <div className="pm-card cc-store">
                      <span className="lb">Storage used</span>
                      <b>1.9 / 3 GB</b>
                      <div className="pm-bar">
                        <i></i>
                      </div>
                    </div>
                    <div className="pm-card">
                      <span className="lb">Secure share · 2FA</span>
                      <div className="cc-2fa">
                        <span className="code">4 8 2 9</span>
                        <span style={{ fontSize: "11.5px", color: "var(--mut)" }}>sent to third party</span>
                      </div>
                    </div>
                    <div className="pm-card">
                      <span className="lb">Live on 3 devices</span>
                      <b>All in sync</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-chip hc1">
                <i style={{ background: "var(--green)" }}></i>File synced · proposal.pdf
              </div>
              <div className="hero-chip hc4">
                <i style={{ background: "var(--violet)" }}></i>Secure link · 2FA verified
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
                <ellipse cx="12" cy="5" rx="9" ry="3" />
                <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
                <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
              </svg>
            </span>
            <div>
              <h3>Single source of truth</h3>
              <p>Live data feeds between departments — one accessible point for everything.</p>
            </div>
          </div>
          <div className="pf rv">
            <span className="pic">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </span>
            <div>
              <h3>Total security</h3>
              <p>Automatic server updates and two-factor file sharing keep data protected.</p>
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
              <h3>Business intelligence</h3>
              <p>In-depth reports and clear graphs from your full business scope.</p>
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
                <div className="f-num">01 / CENTRALISE</div>
                <h2>Centralise your content and data</h2>
                <p className="f-lead">
                  A single source of truth platform for your company data — shared securely, on-platform.
                </p>
                <ul className="feat-list">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Feed live data between departments
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Share files securely on-platform with third parties
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Performance insights from the entire business scope
                  </li>
                </ul>
              </div>
              <div className="f-vis rv-r">
                <div className="f-glow"></div>
                <div className="plat-bar">
                  <i className="d r"></i>
                  <i className="d y"></i>
                  <i className="d g"></i>
                  <span className="url">app.optimiser.com/drive</span>
                </div>
                <img
                  src="https://www.optimiser.com/image/cloud-computing-02.svg"
                  alt="Centralised data in Optimiser Cloud"
                  loading="lazy"
                  decoding="async"
                  style={{ background: "#fff", padding: "22px" }}
                />
              </div>
            </div>

            <div className="frow">
              <div className="rv">
                <div className="f-num">02 / CRM INSIDE</div>
                <h2>Strong, integrated CRM for all your business needs</h2>
                <p className="f-lead">
                  Manage your data and processes from a single source of truth cloud platform.
                </p>
                <ul className="feat-list">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Increase efficiency and reduce resources at the same time
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Keep brand presence consistent across platforms
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Custom reports on data from your full business scope
                  </li>
                </ul>
              </div>
              <div className="f-vis rv-r">
                <div className="f-glow"></div>
                <div className="plat-bar">
                  <i className="d r"></i>
                  <i className="d y"></i>
                  <i className="d g"></i>
                  <span className="url">app.optimiser.com/reports</span>
                </div>
                <img
                  src="https://www.optimiser.com/image/cloud-computing-03.svg"
                  alt="Integrated CRM reporting in Optimiser"
                  loading="lazy"
                  decoding="async"
                  style={{ background: "#fff", padding: "22px" }}
                />
              </div>
            </div>

            <div className="frow">
              <div className="rv">
                <div className="f-num">03 / COLLABORATE</div>
                <h2>Company-wide collaboration, unified progression</h2>
                <p className="f-lead">
                  Securely hosted on the cloud — your business data from any device, anywhere in the world.
                </p>
                <ul className="feat-list">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    3GB free storage per user on the cloud Drive feature
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Flexible subscriptions — upgrade any time as you grow
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Cooperative working with secure document share and collaborative pipeline
                  </li>
                </ul>
              </div>
              <div className="f-vis rv-r">
                <div className="f-glow"></div>
                <div className="plat-bar">
                  <i className="d r"></i>
                  <i className="d y"></i>
                  <i className="d g"></i>
                  <span className="url">app.optimiser.com/drive/shared</span>
                </div>
                <img src="/assets/list-view.webp" alt="Collaboration in Optimiser" loading="lazy" decoding="async" />
              </div>
            </div>

            <div className="frow">
              <div className="rv">
                <div className="f-num">04 / SECURITY</div>
                <h2>Total security and peace of mind</h2>
                <p className="f-lead">
                  Collect and store large amounts of sensitive data with total peace of mind.
                </p>
                <ul className="feat-list">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Automatic updates — always protected by the latest security
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Customise access to your personal drive folders
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Two-factor verification for files sent to third parties
                  </li>
                </ul>
              </div>
              <div className="f-vis rv-r">
                <div className="f-glow"></div>
                <div className="plat-bar">
                  <i className="d r"></i>
                  <i className="d y"></i>
                  <i className="d g"></i>
                  <span className="url">app.optimiser.com/drive/security</span>
                </div>
                <img
                  src="https://www.optimiser.com/image/cloud-computing-04.svg"
                  alt="Cloud security in Optimiser"
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
              <p>Everything you&apos;re wondering before you move to the cloud.</p>
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
                  How does cloud computing work?
                  <span className="pl">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="fa-body">
                  Cloud computing is any computer process that takes place using SaaS, or &quot;software on
                  demand&quot; services. It benefits users through security installation, automatic updates, and
                  by eliminating IT hardware maintenance.
                </p>
              </details>
              <details className="faq-item">
                <summary>
                  What problems does cloud computing solve?
                  <span className="pl">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="fa-body">
                  Cloud computing applications allow you to run your business from a single platform, enabling
                  more accurate analytics, synchronised KPI targeting, and easier departmental cohesion.
                </p>
              </details>
              <details className="faq-item">
                <summary>
                  Can cloud computing provide reporting?
                  <span className="pl">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="fa-body">
                  Yes — it cleans and stores data from across your full business scope, and generates in-depth
                  reports about key metrics. Increase business intelligence at a glance with clear, simple graphs
                  and charts.
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
                Centralise your business on <span className="grad-txt">one platform</span>
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
