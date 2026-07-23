import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import GsapLenis from '@/components/GsapLenis';
import Animations from './Animations';
import SubscribeForm from './SubscribeForm';
import './styles.css';

export const metadata = {
  title: "What's New — Optimiser Product Updates & Releases",
  description:
    'The latest updates, integrations and improvements to the Optimiser platform. Stay up to date with every new release.',
};

export default function WhatsNewPage() {
  return (
    <>
      <GsapLenis />
      <Animations />

      <div id="scrollbar"></div>
      <div className="grain"></div>
      <div className="orb orb-1"></div>
      <div className="orb orb-2"></div>

      <Nav />

      {/* ============ HERO ============ */}
      <header className="wn-hero">
        <div className="aur"></div>
        <div className="whero-grid-bg"></div>
        <div className="wrap">
          <span className="eyebrow rv">Resources · Product updates</span>
          <h1 className="rv">
            What&apos;s new at <span className="grad-txt">Optimiser</span>
          </h1>
          <p className="lede rv">
            We&apos;re always improving efficiency and the everyday experience. Here&apos;s every
            new integration, release and milestone — in one place, newest first.
          </p>
          <div className="wn-stat rv">
            <div className="ws">
              <b>12+</b>
              <span>products evolving</span>
            </div>
            <div className="wd"></div>
            <div className="ws">
              <b>4</b>
              <span>recent releases</span>
            </div>
            <div className="wd"></div>
            <div className="ws">
              <b>Always</b>
              <span>shipping</span>
            </div>
          </div>
        </div>
      </header>

      {/* ============ FEATURED RELEASE ============ */}
      <section className="sec feat-wrap" style={{ paddingTop: '24px', paddingBottom: '60px' }}>
        <div className="wrap">
          <div className="feat rv">
            <div className="feat-body">
              <span className="feat-badge">
                <i></i>Latest release
              </span>
              <div className="feat-meta">
                <span className="tl-tag tg-int">
                  <i></i>Integration
                </span>
                <span className="feat-date">06 Aug 2024</span>
              </div>
              <h2>Optimiser CRM now integrates with Zoom &amp; Teams</h2>
              <p>
                A highly anticipated update is here: schedule, launch and log Zoom and Microsoft
                Teams video calls straight from any record — no app-switching, and every meeting
                captured on the customer timeline automatically.
              </p>
              <a className="btn btn-pri" href="#">
                Read the announcement <span className="arr">→</span>
              </a>
            </div>
            <div className="feat-stage">
              <div className="fg"></div>
              <div className="vc">
                <div className="vc-call">
                  <div className="vc-bar">
                    <i style={{ background: '#FF6058' }}></i>
                    <i style={{ background: '#FFBD2E' }}></i>
                    <i style={{ background: '#28C840' }}></i>
                    <span className="vt">Discovery call · Live</span>
                  </div>
                  <div className="vc-tiles">
                    <div
                      className="vc-tile"
                      style={{ background: 'linear-gradient(135deg,#0B3A6B,#0C72C6)' }}
                    >
                      <span
                        className="av"
                        style={{ background: 'linear-gradient(135deg,#075DA8,#00A1DF)' }}
                      >
                        AR
                      </span>
                      <span>Alex R.</span>
                    </div>
                    <div
                      className="vc-tile"
                      style={{ background: 'linear-gradient(135deg,#223344,#3a4d63)' }}
                    >
                      <span
                        className="av"
                        style={{ background: 'linear-gradient(135deg,#7B5CFA,#A78BFA)' }}
                      >
                        JM
                      </span>
                      <span>Jessica M.</span>
                    </div>
                  </div>
                  <div className="vc-foot">
                    <span className="vbtn">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M23 7l-7 5 7 5V7z" />
                        <rect x="1" y="5" width="15" height="14" rx="2" />
                      </svg>
                    </span>
                    <span className="vbtn">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
                        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                      </svg>
                    </span>
                    <span className="vbtn live">
                      <i></i>REC
                    </span>
                  </div>
                </div>
                <div className="vc-link">
                  <span className="vi">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </span>
                  <span>
                    <b>Logged to CRM</b>
                    <span>contact &amp; deal updated</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CHANGELOG ============ */}
      <section className="sec" id="updates" style={{ paddingTop: '20px' }}>
        <div className="wrap">
          <div className="wn-bar rv">
            <h2>All updates</h2>
            <div className="wn-filters" id="wnFilters" role="tablist" aria-label="Filter updates">
              <button className="fpill on" data-cat="all">
                All
              </button>
              <button className="fpill" data-cat="int">
                <span className="fc" style={{ color: 'var(--blue)' }}></span>Integrations
              </button>
              <button className="fpill" data-cat="hos">
                <span className="fc" style={{ color: '#0089BE' }}></span>Hospitality
              </button>
              <button className="fpill" data-cat="com">
                <span className="fc" style={{ color: 'var(--violet)' }}></span>Community
              </button>
            </div>
          </div>

          <div className="tl" id="timeline">
            <div className="tl-year rv" data-year="2024">
              <b>2024</b>
              <span className="yl"></span>
            </div>

            {/* Integration: Zoom & Teams */}
            <article className="tl-item" data-cat="int">
              <div className="tl-meta">
                <span className="d">06</span>
                <span className="m">Aug 2024</span>
              </div>
              <div className="tl-spine">
                <span className="tl-node"></span>
              </div>
              <a className="tl-card" href="#">
                <div className="up-thumb ut-int">
                  <div className="ug"></div>
                  <div className="stack-mid">
                    <span className="glyph">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <path d="M23 7l-7 5 7 5V7z" />
                        <rect x="1" y="5" width="15" height="14" rx="2" />
                      </svg>
                    </span>
                    <div className="chips">
                      <span>Zoom</span>
                      <span>Microsoft Teams</span>
                    </div>
                  </div>
                </div>
                <div className="tl-body">
                  <span className="tl-tag tg-int">
                    <i></i>Integration
                  </span>
                  <h3>Optimiser CRM integration with Zoom and Teams</h3>
                  <p>
                    Schedule, launch and log video calls from any record. Every Zoom or Teams
                    meeting is captured on the customer timeline — no app-switching, no manual
                    notes.
                  </p>
                  <span className="tl-more">
                    Know more{' '}
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
              </a>
            </article>

            {/* Hospitality: Opera Cloud */}
            <article className="tl-item" data-cat="hos">
              <div className="tl-meta">
                <span className="d">02</span>
                <span className="m">Jul 2024</span>
              </div>
              <div className="tl-spine">
                <span className="tl-node"></span>
              </div>
              <a className="tl-card" href="#">
                <div className="up-thumb ut-hos">
                  <div className="ug"></div>
                  <div className="stack-mid">
                    <span className="glyph">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <path d="M3 21h18M5 21V7l8-4 8 4v14M9 9h2M9 13h2M9 17h2M15 9h0M15 13h0M15 17h0" />
                      </svg>
                    </span>
                    <div className="chips">
                      <span>Opera Cloud</span>
                      <span>OHIP</span>
                    </div>
                  </div>
                </div>
                <div className="tl-body">
                  <span className="tl-tag tg-hos">
                    <i></i>Hospitality
                  </span>
                  <h3>The powerful integration of Optimiser CRM with Opera Cloud</h3>
                  <p>
                    Optimiser CRM is now available on the Oracle Hospitality Integration Platform
                    (OHIP), syncing bookings, rates and guest data in real time — already delivering
                    immense benefits to our hospitality clients.
                  </p>
                  <span className="tl-more">
                    Know more{' '}
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
              </a>
            </article>

            <div className="tl-year rv" data-year="2022">
              <b>2022</b>
              <span className="yl"></span>
            </div>

            {/* Community: Westminster */}
            <article className="tl-item" data-cat="com">
              <div className="tl-meta">
                <span className="d">10</span>
                <span className="m">Oct 2022</span>
              </div>
              <div className="tl-spine">
                <span className="tl-node"></span>
              </div>
              <a className="tl-card" href="#">
                <div className="up-thumb ut-com">
                  <div className="ug"></div>
                  <div className="stack-mid">
                    <span className="glyph">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <circle cx="12" cy="8" r="6" />
                        <path d="M8.5 13.5L7 22l5-3 5 3-1.5-8.5" />
                      </svg>
                    </span>
                    <div className="chips">
                      <span>Westminster 100 Club</span>
                    </div>
                  </div>
                </div>
                <div className="tl-body">
                  <span className="tl-tag tg-com">
                    <i></i>Community
                  </span>
                  <h3>Optimiser joins St. Andrew&apos;s Westminster 100 Club 2022–2023</h3>
                  <p>
                    We&apos;re proud to become a member of St Andrew&apos;s Westminster 100 Club,
                    recognised for our commitment to the local community by raising valuable funds
                    to support club members.
                  </p>
                  <span className="tl-more">
                    Know more{' '}
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
              </a>
            </article>

            {/* Shop: Shopify */}
            <article className="tl-item" data-cat="shop">
              <div className="tl-meta">
                <span className="d">08</span>
                <span className="m">Jul 2022</span>
              </div>
              <div className="tl-spine">
                <span className="tl-node"></span>
              </div>
              <a className="tl-card" href="#">
                <div className="up-thumb ut-shop">
                  <div className="ug"></div>
                  <div className="stack-mid">
                    <span className="glyph">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                        <path d="M3 6h18M16 10a4 4 0 0 1-8 0" />
                      </svg>
                    </span>
                    <div className="chips">
                      <span>Shopify</span>
                    </div>
                  </div>
                </div>
                <div className="tl-body">
                  <span className="tl-tag tg-shop">
                    <i></i>Integration
                  </span>
                  <h3>Empower your Shopify store with the Optimiser platform</h3>
                  <p>
                    Connect ecommerce data from Shopify to Optimiser: synchronise accounts and
                    contacts into one place, with advanced permission controls to secure data at
                    every level.
                  </p>
                  <span className="tl-more">
                    Know more{' '}
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
              </a>
            </article>

            <p
              id="tlEmpty"
              style={{
                display: 'none',
                textAlign: 'center',
                color: 'var(--mut)',
                padding: '40px 0',
                fontSize: '15px',
              }}
            >
              No updates in this category yet.
            </p>
          </div>
        </div>
      </section>

      {/* ============ SUBSCRIBE ============ */}
      <section className="sec" id="subscribe" style={{ paddingTop: '20px', paddingBottom: '70px' }}>
        <div className="wrap">
          <div className="subscribe rv">
            <div className="sb-aur"></div>
            <div>
              <span className="eyebrow" style={{ marginBottom: '14px' }}>
                Stay in the loop
              </span>
              <h2>Never miss a release</h2>
              <p>
                Get product updates, new integrations and improvements delivered to your inbox — no
                spam, just what&apos;s new.
              </p>
            </div>
            <div>
              <SubscribeForm />
              <p className="sb-note">Join teams who run their whole business on Optimiser.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FURTHER RESOURCES ============ */}
      <section className="sec" id="resources" style={{ paddingTop: '20px' }}>
        <div className="wrap">
          <div className="sec-head rv" style={{ marginBottom: '48px' }}>
            <span className="eyebrow">Further resources</span>
            <h2>
              More to <span className="grad-txt">explore</span>
            </h2>
          </div>
          <div className="res-grid">
            <a className="rcard rv" href="#">
              <div className="rt up-thumb ut-hos">
                <div className="ug"></div>
                <span className="glyph">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
                  </svg>
                </span>
              </div>
              <div className="rb">
                <span className="rk">Blog · Hospitality</span>
                <h3>Before AI delivers value, hospitality needs clarity</h3>
                <span className="tl-more">
                  Learn more{' '}
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </div>
            </a>
            <a className="rcard rv" href="#">
              <div className="rt up-thumb ut-int">
                <div className="ug"></div>
                <span className="glyph">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M3 3v18h18" />
                    <path d="M7 14l3-3 3 3 5-6" />
                  </svg>
                </span>
              </div>
              <div className="rb">
                <span className="rk">Blog · Strategy</span>
                <h3>2026 — the year your CRM strategy changes</h3>
                <span className="tl-more">
                  Learn more{' '}
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </div>
            </a>
            <a className="rcard rv" href="#">
              <div className="rt up-thumb ut-com">
                <div className="ug"></div>
                <span className="glyph">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  </svg>
                </span>
              </div>
              <div className="rb">
                <span className="rk">Blog · Experience</span>
                <h3>Enhancing digital transformation: how customer experience leads the way</h3>
                <span className="tl-more">
                  Learn more{' '}
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                  >
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="sec" id="trial" style={{ paddingTop: '40px' }}>
        <div className="wrap">
          <div className="cta rv">
            <div className="grid-lines"></div>
            <div className="inner">
              <span className="eyebrow" style={{ justifyContent: 'center' }}>
                Get started
              </span>
              <h2>
                Want all of this <span className="grad-txt">working for you?</span>
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
