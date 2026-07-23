import './styles.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import GsapLenis from '@/components/GsapLenis';
import Animations from './Animations';

export const metadata = {
  title: 'Why Optimiser — One Platform. One Subscription. Every Tool.',
  description:
    'One integrated platform replaces the scattered tools you pay for today. See why teams choose Optimiser to cut cost, save time and run everything in one place.',
};

export default function WhyOptimiserPage() {
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
      <header className="whero">
        <div className="aur aur-1"></div>
        <div className="whero-grid-bg"></div>
        <div className="wrap">
          <div className="whero-grid">
            <div>
              <span className="eyebrow rv">Why Optimiser</span>
              <h1 className="rv">
                One platform. <span className="grad-txt">One subscription.</span> Every tool you need.
              </h1>
              <p className="lede rv">
                Stop stitching together a dozen apps that don&apos;t talk to each other. Optimiser brings sales,
                marketing, events, projects and customer data onto a single platform — so your team moves faster
                and you pay for one thing, not ten.
              </p>
              <div className="whero-cta rv">
                <a className="btn btn-pri" href="#trial">
                  Start free trial <span className="arr">→</span>
                </a>
                <a className="btn btn-gho" href="#trial">
                  Book a demo
                </a>
              </div>
              <div className="whero-note rv">
                <i></i>From charities and SMEs to global enterprises —{' '}
                <b>tailored to fit, priced to scale.</b>
              </div>
            </div>

            <div className="stack rv-r">
              <div className="stack-card">
                <span className="si" style={{ background: 'var(--blue)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 17l5-6 4 4 6-8 3 4" />
                  </svg>
                </span>
                <span>
                  <span className="st">Sales CRM</span>
                  <br />
                  <span className="sp">Separate seat &amp; bill</span>
                </span>
                <span className="cost">£39/mo</span>
              </div>

              <div className="stack-card">
                <span className="si" style={{ background: 'var(--violet)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 11l16-7-4 16-5-5z" />
                  </svg>
                </span>
                <span>
                  <span className="st">Marketing tool</span>
                  <br />
                  <span className="sp">Separate seat &amp; bill</span>
                </span>
                <span className="cost">£49/mo</span>
              </div>

              <div className="stack-card">
                <span className="si" style={{ background: 'var(--amber)' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="5" width="18" height="16" rx="2" />
                    <path d="M3 10h18M8 3v4M16 3v4" />
                  </svg>
                </span>
                <span>
                  <span className="st">Events &amp; projects</span>
                  <br />
                  <span className="sp">Separate seat &amp; bill</span>
                </span>
                <span className="cost">£35/mo</span>
              </div>

              <div className="stack-merge">replace with one</div>

              <div className="stack-one">
                <div className="so-row">
                  <span className="so-mark">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.1">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 2" />
                    </svg>
                  </span>
                  <span>
                    <span className="so-t">Optimiser</span>
                    <br />
                    <span className="so-s">Every module · one login · shared data</span>
                  </span>
                  <span className="so-price">
                    <b>1 bill</b>
                    <span>all-in-one</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ============ PROOF STRIP ============ */}
      <section className="proof">
        <div className="wrap">
          <div className="pf rv">
            <span className="pic">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                <circle cx="12" cy="12" r="9" />
                <path d="M8 12l2.5 2.5L16 9" />
              </svg>
            </span>
            <div>
              <h3>One powerful platform</h3>
              <p>Every tool lives on the same data, so nothing falls through the cracks between apps.</p>
            </div>
          </div>

          <div className="pf rv">
            <span className="pic">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.1h6c0-.8.4-1.6 1-2.1A7 7 0 0 0 12 2z" />
              </svg>
            </span>
            <div>
              <h3>Simple to use</h3>
              <p>Clean, guided workflows your team picks up in days — not months of training.</p>
            </div>
          </div>

          <div className="pf rv">
            <span className="pic">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                <rect x="3" y="4" width="7" height="7" rx="1.5" />
                <rect x="14" y="4" width="7" height="7" rx="1.5" />
                <rect x="3" y="15" width="7" height="5" rx="1.5" />
                <rect x="14" y="15" width="7" height="5" rx="1.5" />
              </svg>
            </span>
            <div>
              <h3>Comprehensive</h3>
              <p>From first lead to repeat customer, the whole journey runs in one connected place.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PILLARS — interactive showcase ============ */}
      <section className="sec show" id="pillars">
        <div className="wrap">
          <div className="sec-head rv">
            <span className="eyebrow">Built for the way you work</span>
            <h2>
              Six reasons teams <span className="grad-txt">switch to one platform</span>
            </h2>
            <p>
              Fewer logins, fewer invoices, fewer things that break. Explore what changes the day you move to
              Optimiser.
            </p>
          </div>

          <div className="show-grid">
            <div className="show-list" id="showList" role="tablist" aria-label="Reasons to switch">
              <button className="show-item on" data-i="0" role="tab" aria-selected="true">
                <div className="si-head">
                  <span className="si-num">01</span>
                  <span className="si-t">The Power of One</span>
                  <span className="si-arr">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
                <p className="si-desc">
                  No exports, no duplicate records, no copy-paste between tools. Sales, marketing, events and
                  support all read from one source of truth.
                </p>
                <span className="si-prog"></span>
              </button>

              <button className="show-item" data-i="1" role="tab" aria-selected="false">
                <div className="si-head">
                  <span className="si-num">02</span>
                  <span className="si-t">AI working around the clock</span>
                  <span className="si-arr">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
                <p className="si-desc">
                  Cooper AI reads your live data 24/7 — surfacing risks, spotting opportunities and turning raw
                  activity into decisions you can act on right now.
                </p>
                <span className="si-prog"></span>
              </button>

              <button className="show-item" data-i="2" role="tab" aria-selected="false">
                <div className="si-head">
                  <span className="si-num">03</span>
                  <span className="si-t">Reporting you&apos;ll actually read</span>
                  <span className="si-arr">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
                <p className="si-desc">
                  Clear dashboards turn scattered numbers into a story. See what&apos;s working, catch what isn&apos;t,
                  and prove ROI without wrestling another spreadsheet.
                </p>
                <span className="si-prog"></span>
              </button>

              <button className="show-item" data-i="3" role="tab" aria-selected="false">
                <div className="si-head">
                  <span className="si-num">04</span>
                  <span className="si-t">One simple price</span>
                  <span className="si-arr">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
                <p className="si-desc">
                  One platform, one monthly rate — no tangle of per-tool fees. Scalable plans mean you only pay
                  for the features and seats your team actually uses.
                </p>
                <span className="si-prog"></span>
              </button>

              <button className="show-item" data-i="4" role="tab" aria-selected="false">
                <div className="si-head">
                  <span className="si-num">05</span>
                  <span className="si-t">Onboarding done with you</span>
                  <span className="si-arr">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
                <p className="si-desc">
                  Our team migrates your data, configures your setup and trains your people — backed by tutorials
                  and live support at every step of the way.
                </p>
                <span className="si-prog"></span>
              </button>

              <button className="show-item" data-i="5" role="tab" aria-selected="false">
                <div className="si-head">
                  <span className="si-num">06</span>
                  <span className="si-t">Shaped entirely around you</span>
                  <span className="si-arr">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
                <p className="si-desc">
                  Custom modules, fields and workflows built to match how your business actually runs — scaling
                  cleanly from a small team to a global operation.
                </p>
                <span className="si-prog"></span>
              </button>
            </div>

            <div className="show-stage rv-r" id="showStage">
              <div className="st-grid"></div>
              <div className="st-orb"></div>

              {/* Panel 0 */}
              <div className="panel on" data-i="0" role="tabpanel">
                <span className="p-ic">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                    <circle cx="12" cy="12" r="3" />
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
                  </svg>
                </span>
                <span className="p-tag">One platform</span>
                <h3>All your data, in one place</h3>
                <div className="p-metric">
                  <div className="pm">
                    <b>1</b>
                    <span>source of truth</span>
                  </div>
                  <div className="pm">
                    <b>12+</b>
                    <span>modules connected</span>
                  </div>
                </div>
              </div>

              {/* Panel 1 */}
              <div className="panel" data-i="1" role="tabpanel">
                <span className="p-ic">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                    <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
                    <circle cx="12" cy="12" r="4" />
                    <path d="M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
                  </svg>
                </span>
                <span className="p-tag">Always on</span>
                <h3>Insights while you sleep</h3>
                <div className="p-metric">
                  <div className="pm">
                    <b>24/7</b>
                    <span>always watching</span>
                  </div>
                  <div className="pm">
                    <b>0</b>
                    <span>missed signals</span>
                  </div>
                </div>
              </div>

              {/* Panel 2 */}
              <div className="panel" data-i="2" role="tabpanel">
                <span className="p-ic">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                    <path d="M3 3v18h18" />
                    <path d="M7 14l3-3 3 3 5-6" />
                  </svg>
                </span>
                <span className="p-tag">Real-time insight</span>
                <h3>Numbers that tell a story</h3>
                <div className="p-metric">
                  <div className="pm">
                    <b>Live</b>
                    <span>dashboards</span>
                  </div>
                  <div className="pm">
                    <b>1-click</b>
                    <span>ROI reports</span>
                  </div>
                </div>
              </div>

              {/* Panel 3 */}
              <div className="panel" data-i="3" role="tabpanel">
                <span className="p-ic">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                    <path d="M20.6 13.4l-7.2 7.2a2 2 0 0 1-2.8 0l-7-7A2 2 0 0 1 3 12V5a2 2 0 0 1 2-2h7a2 2 0 0 1 1.4.6l7.2 7.2a2 2 0 0 1 0 2.6z" />
                    <circle cx="7.5" cy="7.5" r="1.5" />
                  </svg>
                </span>
                <span className="p-tag">Transparent pricing</span>
                <h3>One platform, one bill</h3>
                <div className="p-metric">
                  <div className="pm">
                    <b>1</b>
                    <span>monthly bill</span>
                  </div>
                  <div className="pm">
                    <b>0</b>
                    <span>hidden fees</span>
                  </div>
                </div>
              </div>

              {/* Panel 4 */}
              <div className="panel" data-i="4" role="tabpanel">
                <span className="p-ic">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                    <path d="M12 3v12M8 11l4 4 4-4" />
                    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
                  </svg>
                </span>
                <span className="p-tag">Hands-on setup</span>
                <h3>Up and running, fast</h3>
                <div className="p-metric">
                  <div className="pm">
                    <b>Done</b>
                    <span>with you</span>
                  </div>
                  <div className="pm">
                    <b>Live</b>
                    <span>support</span>
                  </div>
                </div>
              </div>

              {/* Panel 5 */}
              <div className="panel" data-i="5" role="tabpanel">
                <span className="p-ic">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
                    <rect x="3" y="4" width="18" height="14" rx="2" />
                    <path d="M8 21h8M12 18v3M7 9h6M7 13h10" />
                  </svg>
                </span>
                <span className="p-tag">Yours, end to end</span>
                <h3>Built around your business</h3>
                <div className="p-metric">
                  <div className="pm">
                    <b>&#8734;</b>
                    <span>custom workflows</span>
                  </div>
                  <div className="pm">
                    <b>1&#8594;&#8734;</b>
                    <span>scales with you</span>
                  </div>
                </div>
              </div>

              <div className="show-count">
                <b id="showCur">01</b> / 06
              </div>
            </div>
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
                Ready to run your whole business on <span className="grad-txt">one platform?</span>
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
