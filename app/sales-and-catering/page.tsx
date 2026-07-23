import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GsapLenis from "@/components/GsapLenis";
import Animations from "./Animations";
import "./styles.css";

export const metadata = {
  title: "Sales and Catering — Hotel Sales & Catering Software | Optimiser",
  description:
    "Optimiser Sales & Catering — standardise hotel sales and catering workflows from enquiry to invoice, with automated function sheets, contracts and multi-venue management.",
};

export default function SalesAndCateringPage() {
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
              <span className="eyebrow rv">Sales &amp; Catering · Hospitality</span>
              <h1 className="rv">
                Hotel sales and catering,{" "}
                <span className="grad-txt">from enquiry to invoice.</span>
              </h1>
              <p className="lede rv">
                The all-in-one solution to revolutionise how hotels manage sales, catering
                workflows and event venues.
              </p>
              <ul className="hero-points rv">
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Standardise processes from initial enquiry to final invoice
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Generate automated function sheets and contracts with ease
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Manage venue bookings and enquiries for multiple properties
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Fully customisable, seamlessly integrated in one CRM platform
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
                  <span className="url">app.optimiser.com/venues/diary</span>
                </div>
                <div className="sc-mock">
                  <div className="sc-diary">
                    <h5>
                      <span>Venue diary · Grand Ballroom</span>
                      <span>Fri 12 Jun</span>
                    </h5>
                    <div className="sc-slot">
                      <span className="tm">09:00</span>
                      <div className="sc-bk">
                        <span className="nm">
                          <i></i>
                          <i></i>
                        </span>
                        <span className="st" style={{ background: "rgba(25,190,119,.15)", color: "#0B7A4C" }}>Contract signed</span>
                      </div>
                    </div>
                    <div className="sc-slot">
                      <span className="tm">13:00</span>
                      <div className="sc-bk sc-fs" style={{ borderLeftColor: "var(--violet)" }}>
                        <span className="nm">
                          <i style={{ width: "54%" }}></i>
                          <i></i>
                        </span>
                        <span className="gen"></span>
                      </div>
                    </div>
                    <div className="sc-slot">
                      <span className="tm">18:30</span>
                      <div className="sc-bk" style={{ borderLeftColor: "var(--coral)" }}>
                        <span className="nm">
                          <i style={{ width: "64%" }}></i>
                          <i></i>
                        </span>
                        <span className="st" style={{ background: "rgba(255,170,43,.16)", color: "#8A5B00" }}>Enquiry</span>
                      </div>
                    </div>
                  </div>
                  <div className="cc-side">
                    <div className="pm-card">
                      <span className="lb">Properties</span>
                      <b>4 venues</b>
                    </div>
                    <div className="pm-card">
                      <span className="lb">Enquiry → invoice</span>
                      <b>Standardised</b>
                    </div>
                    <div className="pm-card">
                      <span className="lb">This month&apos;s events</span>
                      <b>26</b>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-chip hc1">
                <i style={{ background: "var(--green)" }}></i>Function sheet · auto-generated
              </div>
              <div className="hero-chip hc4">
                <i style={{ background: "var(--cyan)" }}></i>Contract sent · Grand Ballroom
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
                <path d="M3 21h18M6 21V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14M10 9h1M13 9h1M10 12h1M13 12h1M10 15h1M13 15h1" />
              </svg>
            </span>
            <div>
              <h3>Multi-venue control</h3>
              <p>Venues, menus, pricing, resources and enquiries — one integrated platform.</p>
            </div>
          </div>
          <div className="pf rv">
            <span className="pic">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <path d="M14 2v6h6M9 15l2 2 4-4" />
              </svg>
            </span>
            <div>
              <h3>Automated paperwork</h3>
              <p>Function sheets and professional contracts generated straight from the system.</p>
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
              <h3>Dynamic reporting</h3>
              <p>Insights across sales, catering and events through integrated dashboards.</p>
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
                <div className="f-num">01 / VENUES</div>
                <h2>Effortless management of multiple event venues</h2>
                <p className="f-lead">
                  Conferences, business meetings and gatherings — every event running smoothly,
                  all in one place.
                </p>
                <ul className="feat-list">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Venues, event menus, pricing, resources and booking enquiries together
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Dynamic reporting and integrated dashboards
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Valuable insights across sales, catering and event operations
                  </li>
                </ul>
              </div>
              <div className="f-vis rv-r">
                <div className="f-glow"></div>
                <div className="plat-bar">
                  <i className="d r"></i>
                  <i className="d y"></i>
                  <i className="d g"></i>
                  <span className="url">app.optimiser.com/venues</span>
                </div>
                <img
                  src="https://www.optimiser.com/image/sales-and-catering-02.svg"
                  alt="Multi-venue management in Optimiser"
                  loading="lazy"
                  decoding="async"
                  style={{ background: "#fff", padding: "22px" }}
                />
              </div>
            </div>

            <div className="frow">
              <div className="rv">
                <div className="f-num">02 / STANDARDISE</div>
                <h2>Standardise processes across every venue</h2>
                <p className="f-lead">
                  A unified brand experience with consistent practices at all properties.
                </p>
                <ul className="feat-list">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Real-time visibility into your team&apos;s activities
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Integrated diary module linked to bookings and pipelines
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Efficient scheduling and resource allocation
                  </li>
                </ul>
              </div>
              <div className="f-vis rv-r">
                <div className="f-glow"></div>
                <div className="plat-bar">
                  <i className="d r"></i>
                  <i className="d y"></i>
                  <i className="d g"></i>
                  <span className="url">app.optimiser.com/venues/diary</span>
                </div>
                <img
                  src="https://www.optimiser.com/image/sales-and-catering-03.svg"
                  alt="Standardised venue processes in Optimiser"
                  loading="lazy"
                  decoding="async"
                  style={{ background: "#fff", padding: "22px" }}
                />
              </div>
            </div>

            <div className="frow">
              <div className="rv">
                <div className="f-num">03 / AUTOMATE</div>
                <h2>Automated function sheets &amp; contract generation</h2>
                <p className="f-lead">
                  Say goodbye to manual drafting — every aspect accounted for, saving time and
                  ensuring accuracy.
                </p>
                <ul className="feat-list">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Room setup, catering preferences, packages and promotions managed effortlessly
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Professional, customised contracts with event specifics, terms and pricing
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    A streamlined contract management process
                  </li>
                </ul>
              </div>
              <div className="f-vis rv-r">
                <div className="f-glow"></div>
                <div className="plat-bar">
                  <i className="d r"></i>
                  <i className="d y"></i>
                  <i className="d g"></i>
                  <span className="url">app.optimiser.com/venues/function-sheets</span>
                </div>
                <img
                  src="https://www.optimiser.com/image/sales-and-catering-04.svg"
                  alt="Automated function sheets in Optimiser"
                  loading="lazy"
                  decoding="async"
                  style={{ background: "#fff", padding: "22px" }}
                />
              </div>
            </div>

            <div className="frow">
              <div className="rv">
                <div className="f-num">04 / COLLABORATE</div>
                <h2>A collaborative diary module for seamless teamwork</h2>
                <p className="f-lead">
                  When multiple team members work one event, everyone accesses and contributes to
                  the same details.
                </p>
                <ul className="feat-list">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Shared access to event details, venue information and reports
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    All stakeholders on the same page
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Efficient teamwork and streamlined communication
                  </li>
                </ul>
              </div>
              <div className="f-vis rv-r">
                <div className="f-glow"></div>
                <div className="plat-bar">
                  <i className="d r"></i>
                  <i className="d y"></i>
                  <i className="d g"></i>
                  <span className="url">app.optimiser.com/venues/team</span>
                </div>
                <img
                  src="https://www.optimiser.com/image/sales-and-catering-05.svg"
                  alt="Collaborative diary module in Optimiser"
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
                Revolutionise sales &amp; catering with <span className="grad-txt">one platform</span>
              </h2>
              <p>
                Start your 30-day free trial today. One powerful platform, simple to use,
                comprehensive — and no credit card required.
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
