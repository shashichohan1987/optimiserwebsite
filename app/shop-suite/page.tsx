import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GsapLenis from "@/components/GsapLenis";
import Animations from "./Animations";
import "./styles.css";

export const metadata = {
  title: "Shop Suite — Shop Management Software | Optimiser",
  description:
    "Optimiser Shop Suite — a fully customisable appointment booking system with integrated CRM, multi-outlet management, online payments and built-in marketing.",
};

export default function ShopSuitePage() {
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
              <span className="eyebrow rv">Shop Suite · Retail CRM</span>
              <h1 className="rv">
                One platform to manage and <span className="grad-txt">grow all your shops.</span>
              </h1>
              <p className="lede rv">
                A fully customisable appointment booking system with integrated CRM and Marketing
                Suite — built to fill your schedule and cut out no-shows.
              </p>
              <ul className="hero-points rv">
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Fully customisable appointment booking system
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Manage multiple outlets, assign staff and services
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Cut out no-shows with online payments
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Seamless onboarding with trained Optimiser experts
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
                  <span className="url">app.optimiser.com/shops/bookings</span>
                </div>
                <div className="sh-mock">
                  <div className="sh-day">
                    <h5>
                      <span>Today · Covent Garden</span>
                      <span>9 bookings</span>
                    </h5>
                    <div className="sh-slot">
                      <span className="tm">09:00</span>
                      <div className="sh-bk">
                        <span className="nm">
                          <i></i>
                          <i></i>
                        </span>
                        <span className="st" style={{ background: "rgba(25,190,119,.15)", color: "#0B7A4C" }}>Paid</span>
                      </div>
                    </div>
                    <div className="sh-slot">
                      <span className="tm">10:30</span>
                      <div className="sh-bk" style={{ borderLeftColor: "var(--violet)" }}>
                        <span className="nm">
                          <i style={{ width: "62%" }}></i>
                          <i></i>
                        </span>
                        <span className="st" style={{ background: "rgba(25,190,119,.15)", color: "#0B7A4C" }}>Paid</span>
                      </div>
                    </div>
                    <div className="sh-slot">
                      <span className="tm">12:00</span>
                      <div className="sh-bk empty">
                        <span className="dash">Open slot</span>
                        <span className="fill">
                          <span className="nm">
                            <i style={{ width: "58%" }}></i>
                            <i style={{ width: "36%" }}></i>
                          </span>
                          <span className="st" style={{ background: "rgba(25,190,119,.15)", color: "#0B7A4C" }}>Paid online</span>
                        </span>
                      </div>
                    </div>
                    <div className="sh-slot">
                      <span className="tm">14:00</span>
                      <div className="sh-bk" style={{ borderLeftColor: "var(--amber,#FFAA2B)" }}>
                        <span className="nm">
                          <i style={{ width: "52%" }}></i>
                          <i></i>
                        </span>
                        <span className="st" style={{ background: "rgba(255,170,43,.16)", color: "#8A5B00" }}>Reminder sent</span>
                      </div>
                    </div>
                  </div>
                  <div className="sh-side">
                    <div className="pm-card">
                      <span className="lb">No-shows this month</span>
                      <b>−64%</b>
                    </div>
                    <div className="pm-card">
                      <span className="lb">Outlets</span>
                      <div className="pm-team">
                        <span className="who" style={{ background: "linear-gradient(135deg,#075DA8,#00A1DF)" }}>CG</span>
                        <span className="who" style={{ background: "linear-gradient(135deg,#7B5CFA,#00A1DF)" }}>SO</span>
                        <span className="who" style={{ background: "linear-gradient(135deg,#FF6F5B,#FFAA2B)" }}>KX</span>
                        <span className="more">+2</span>
                      </div>
                    </div>
                    <div className="pm-card">
                      <span className="lb">Online payments today</span>
                      <b>£1,240</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-chip hc1">
                <i style={{ background: "var(--green)" }}></i>New booking · paid online
              </div>
              <div className="hero-chip hc4">
                <i style={{ background: "var(--cyan)" }}></i>Assigned to · Soho outlet
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
                <rect x="3" y="4" width="18" height="17" rx="2" />
                <path d="M16 2v4M8 2v4M3 10h18" />
                <path d="M9 16l2 2 4-4" />
              </svg>
            </span>
            <div>
              <h3>Online bookings</h3>
              <p>An intelligent scheduling system, embedded right on your website.</p>
            </div>
          </div>
          <div className="pf rv">
            <span className="pic">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                <path d="M3 21h18M6 21V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14M10 9h1M13 9h1M10 12h1M13 12h1M10 15h1M13 15h1" />
              </svg>
            </span>
            <div>
              <h3>Multi-outlet control</h3>
              <p>Assign staff and services to their outlets — rostering, commissions, payouts.</p>
            </div>
          </div>
          <div className="pf rv">
            <span className="pic">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                <path d="M3 11l18-5v12L3 14v-3z" />
                <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
              </svg>
            </span>
            <div>
              <h3>Built-in marketing</h3>
              <p>Segmented campaigns from contacts and pipeline data to boost bookings.</p>
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
                <div className="f-num">01 / BOOKINGS</div>
                <h2>Step up online bookings with Optimiser Shops</h2>
                <p className="f-lead">
                  Stop taking appointments only on the phone — your whole booking schedule in one
                  view.
                </p>
                <ul className="feat-list">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Assign bookings to staff at different locations with a click
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Confirm via email and send reminders so clients show up
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Cut out no-shows and secure bookings with online payments
                  </li>
                </ul>
              </div>
              <div className="f-vis rv-r">
                <div className="f-glow"></div>
                <div className="plat-bar">
                  <i className="d r"></i>
                  <i className="d y"></i>
                  <i className="d g"></i>
                  <span className="url">app.optimiser.com/shops/schedule</span>
                </div>
                <img
                  src="https://www.optimiser.com/image/optimiser-shop-suite-02.svg"
                  alt="Online booking schedule in Optimiser Shop Suite"
                  loading="lazy"
                  decoding="async"
                  style={{ background: "#fff", padding: "22px" }}
                />
              </div>
            </div>

            <div className="frow">
              <div className="rv">
                <div className="f-num">02 / CONTROL</div>
                <h2>The power of control with management tools</h2>
                <p className="f-lead">
                  Manage multiple outlets from one platform — with advanced permissions protecting
                  sensitive information.
                </p>
                <ul className="feat-list">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Convenient rostering based on staff availability per outlet
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Calculate commission and tips by role; reporting for final payouts
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    In-built analytics across performance, stock, finances and campaigns
                  </li>
                </ul>
              </div>
              <div className="f-vis rv-r">
                <div className="f-glow"></div>
                <div className="plat-bar">
                  <i className="d r"></i>
                  <i className="d y"></i>
                  <i className="d g"></i>
                  <span className="url">app.optimiser.com/shops/outlets</span>
                </div>
                <img
                  src="https://www.optimiser.com/image/optimiser-shop-suite-03.svg"
                  alt="Outlet management tools in Optimiser"
                  loading="lazy"
                  decoding="async"
                  style={{ background: "#fff", padding: "22px" }}
                />
              </div>
            </div>

            <div className="frow">
              <div className="rv">
                <div className="f-num">03 / GROW</div>
                <h2>Customer acquisition and retention, built in</h2>
                <p className="f-lead">
                  Create customised marketing campaigns with the in-built Marketing Suite —
                  branded with your logo and colours.
                </p>
                <ul className="feat-list">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Drag-and-drop templates; personalised with appointment details
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Highly segmented customer targeting from contacts and pipeline
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Schedule campaigns ahead and measure each with intelligent reports
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
                  src="https://www.optimiser.com/image/optimiser-shop-suite-04.svg"
                  alt="Shop marketing campaigns in Optimiser"
                  loading="lazy"
                  decoding="async"
                  style={{ background: "#fff", padding: "22px" }}
                />
              </div>
            </div>

            <div className="frow">
              <div className="rv">
                <div className="f-num">04 / ONE PLATFORM</div>
                <h2>Fully customisable to meet your business needs</h2>
                <p className="f-lead">
                  Optimiser is your single source of truth — contacts, staff, services and stock,
                  transferred seamlessly at onboarding.
                </p>
                <ul className="feat-list">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Fully branded booking widget on your website
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    CRM plus project, lead, marketing, HR, events, calendar and cloud storage
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Gmail and Outlook integration — appointments update without leaving email
                  </li>
                </ul>
              </div>
              <div className="f-vis rv-r">
                <div className="f-glow"></div>
                <div className="plat-bar">
                  <i className="d r"></i>
                  <i className="d y"></i>
                  <i className="d g"></i>
                  <span className="url">app.optimiser.com/settings/branding</span>
                </div>
                <img
                  src="https://www.optimiser.com/image/optimiser-shop-suite-05.svg"
                  alt="Customisable platform in Optimiser"
                  loading="lazy"
                  decoding="async"
                  style={{ background: "#fff", padding: "22px" }}
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
                Manage and grow all your shops with <span className="grad-txt">one platform</span>
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
