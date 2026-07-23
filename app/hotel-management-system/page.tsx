import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import GsapLenis from '@/components/GsapLenis';
import Animations from './Animations';
import './styles.css';

export const metadata = {
  title: 'Hotel Management System — Optimiser Hospitality Solution',
  description:
    'Capture booking enquiries, segment guests, track sales and revenue, and integrate Opera PMS — all on one platform built for hotels and hospitality teams.',
};

export default function HotelManagementSystem() {
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
              <span className="eyebrow rv">Solutions · Hospitality</span>
              <h1 className="rv">
                Run your whole hotel on <span className="grad-txt">one platform.</span>
              </h1>
              <p className="lede rv">
                Capture booking enquiries straight from email and web forms, route every prospect to
                the right person, and manage guests, sales and revenue together — the property
                management workflow that gives your front desk and your sales team one source of
                truth.
              </p>
              <div className="whero-cta rv">
                <a className="btn btn-pri" href="#trial">
                  Start free trial <span className="arr">→</span>
                </a>
                <a className="btn btn-gho" href="/contact-us">
                  Schedule a demo
                </a>
              </div>
              <div className="whero-note rv">
                <i></i>30-day free trial · <b>no credit card required.</b>
              </div>
            </div>

            <div className="hdash rv-r">
              <div className="hd-top">
                <div className="hd-card hd-occ">
                  <div className="hd-h">
                    <span className="lbl">Occupancy · Tonight</span>
                    <span className="live">
                      <i></i>Live
                    </span>
                  </div>
                  <div className="big" id="hdOcc">
                    86<span>%</span>
                  </div>
                  <div className="hd-bar">
                    <i id="hdBar"></i>
                  </div>
                  <div className="rooms">
                    <b className="taken"></b>
                    <b className="taken"></b>
                    <b className="taken"></b>
                    <b className="dirty"></b>
                    <b className="taken"></b>
                    <b></b>
                    <b className="taken"></b>
                    <b className="taken"></b>
                  </div>
                </div>
                <div className="hd-card hd-rev">
                  <span className="lbl">RevPAR · Today</span>
                  <div className="big">£148</div>
                  <span className="chg">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                    >
                      <path d="M7 17L17 7M17 7H9M17 7v8" />
                    </svg>{' '}
                    +12.4%
                  </span>
                </div>
              </div>
              <div className="hd-card hd-enq">
                <div className="erow">
                  <span
                    className="av"
                    style={{ background: 'linear-gradient(135deg,#075DA8,#00A1DF)' }}
                  >
                    JM
                  </span>
                  <span className="et">
                    <b>Jessica Moore</b>
                    <span>Weekend stay · 2 rooms · web form</span>
                  </span>
                  <span className="tag tag-lead">New lead</span>
                </div>
                <div className="erow">
                  <span
                    className="av"
                    style={{ background: 'linear-gradient(135deg,#7B5CFA,#A78BFA)' }}
                  >
                    TC
                  </span>
                  <span className="et">
                    <b>Travelco Group</b>
                    <span>Corporate rate enquiry · email</span>
                  </span>
                  <span className="tag tag-corp">Corporate</span>
                </div>
                <div className="erow">
                  <span
                    className="av"
                    style={{ background: 'linear-gradient(135deg,#19BE77,#5CD9A0)' }}
                  >
                    BK
                  </span>
                  <span className="et">
                    <b>Booking.com</b>
                    <span>14 nights · synced via Opera</span>
                  </span>
                  <span className="tag tag-ota">OTA</span>
                </div>
              </div>
              <div className="hd-float">
                <span className="fi">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                </span>
                <span>
                  <b>Enquiry assigned</b>
                  <span>routed to sales in 4s</span>
                </span>
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
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.9"
              >
                <path d="M3 21h18M5 21V7l8-4 8 4v14M9 9h2M9 13h2M9 17h2M15 9h0M15 13h0M15 17h0" />
              </svg>
            </span>
            <div>
              <h3>Built for hotels</h3>
              <p>
                Enquiries, guests, rate plans and revenue managed on the same record your front desk
                and sales team share.
              </p>
            </div>
          </div>
          <div className="pf rv">
            <span className="pic">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.9"
              >
                <path d="M9 18h6M10 22h4M12 2a7 7 0 0 0-4 12.7c.6.5 1 1.3 1 2.1h6c0-.8.4-1.6 1-2.1A7 7 0 0 0 12 2z" />
              </svg>
            </span>
            <div>
              <h3>Simple to use</h3>
              <p>
                Guided workflows your reception and reservations teams pick up in days — not months
                of training.
              </p>
            </div>
          </div>
          <div className="pf rv">
            <span className="pic">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.9"
              >
                <path d="M14 7h5a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-5M10 17H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5M8 12h8" />
              </svg>
            </span>
            <div>
              <h3>Integrates with Opera</h3>
              <p>
                Connect your existing Opera PMS so bookings, rates and guest data stay in sync in
                real time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CHALLENGES ============ */}
      <section className="sec chal" id="challenges">
        <div className="wrap">
          <div className="sec-head rv" style={{ maxWidth: '620px' }}>
            <span className="eyebrow">The hospitality challenge</span>
            <h2>
              What&apos;s <span className="grad-txt">holding hotels back</span>
            </h2>
            <p>
              A quarter of the average hotel software budget goes on property management systems —
              yet outdated, disconnected tools still leave teams fighting the same problems.
            </p>
          </div>
          <div className="cgrid">
            <div className="ccard rv">
              <span className="cx">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 3v18h18M7 13l3-3 4 4 4-6" />
                  <path d="M18 18l3 3M21 18l-3 3" />
                </svg>
              </span>
              <h3>Scattered rate management</h3>
              <p>
                Rates spread across spreadsheets and channels waste time, and manual entry is wide
                open to costly errors.
              </p>
            </div>
            <div className="ccard rv">
              <span className="cx">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="7" />
                  <path d="M21 21l-4-4M8 11h6" />
                </svg>
              </span>
              <h3>No view of your guests</h3>
              <p>
                Little insight into customer analysis and segmentation, so you can&apos;t tell which
                guests to nurture or how.
              </p>
            </div>
            <div className="ccard rv">
              <span className="cx">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M19 8v6M22 11h-6" />
                </svg>
              </span>
              <h3>Tracking team activity</h3>
              <p>
                Employee activity and productivity are hard to measure, so it&apos;s unclear what
                actually drives bookings.
              </p>
            </div>
            <div className="ccard rv">
              <span className="cx">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 2v4M12 18v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M2 12h4M18 12h4" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </span>
              <h3>Engaging the right prospects</h3>
              <p>
                Attracting and reaching the right guests at the right moment is guesswork without
                unified data.
              </p>
            </div>
            <div className="ccard rv">
              <span className="cx">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M17 21a4 4 0 0 0 4-4M3 7a4 4 0 0 1 4-4M8 3h8M16 21H8M3 7v10M21 7v0" />
                  <rect x="6" y="7" width="12" height="10" rx="2" />
                </svg>
              </span>
              <h3>Data trapped in silos</h3>
              <p>
                Departments can&apos;t share storage and records cleanly, so the same guest is
                logged five different ways.
              </p>
            </div>
            <div className="ccard rv">
              <span className="cx">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </span>
              <h3>Retaining guests</h3>
              <p>
                Holding on to guests and negotiating rates is tough when history and context live in
                another tool.
              </p>
            </div>
          </div>
          <div className="chal-foot rv">
            <p>Attract and engage your guests with the best platform for hospitality.</p>
            <a className="btn btn-pri" href="#trial">
              Sign up for free trial <span className="arr">→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ============ PILLARS — interactive showcase ============ */}
      <section className="sec show" id="pillars">
        <div className="wrap">
          <div className="sec-head rv">
            <span className="eyebrow">How Optimiser helps</span>
            <h2>
              A better guest journey, <span className="grad-txt">end to end</span>
            </h2>
            <p>
              From the first enquiry to a returning guest, every stage runs on connected data —
              improving sales, service and revenue along the way.
            </p>
          </div>
          <div className="show-grid">
            <div className="show-list" id="showList" role="tablist" aria-label="How Optimiser helps hospitality">
              <button className="show-item on" data-i="0" role="tab" aria-selected="true">
                <div className="si-head">
                  <span className="si-num">01</span>
                  <span className="si-t">Scattered data, one platform</span>
                  <span className="si-arr">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
                <p className="si-desc">
                  A simple onboarding brings large, scattered datasets from every channel onto a
                  single platform — then turns that data into a clear read on guest behaviour and
                  demographics.
                </p>
                <span className="si-prog"></span>
              </button>
              <button className="show-item" data-i="1" role="tab" aria-selected="false">
                <div className="si-head">
                  <span className="si-num">02</span>
                  <span className="si-t">Track sales activity &amp; ROI</span>
                  <span className="si-arr">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
                <p className="si-desc">
                  See which activities push deals to close and drive revenue. Measure sales-team cost
                  against revenue earned, and let an automated pipeline handle higher enquiry
                  volumes.
                </p>
                <span className="si-prog"></span>
              </button>
              <button className="show-item" data-i="2" role="tab" aria-selected="false">
                <div className="si-head">
                  <span className="si-num">03</span>
                  <span className="si-t">Team collaboration with account history</span>
                  <span className="si-arr">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
                <p className="si-desc">
                  One source of truth for account history and contact management. Use it to
                  personalise every guest experience and give staff role-based access to schedules
                  and appointments.
                </p>
                <span className="si-prog"></span>
              </button>
              <button className="show-item" data-i="3" role="tab" aria-selected="false">
                <div className="si-head">
                  <span className="si-num">04</span>
                  <span className="si-t">Identify &amp; engage prospects</span>
                  <span className="si-arr">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
                <p className="si-desc">
                  Easily segment prospects — travel agent or corporate — and deliver the right
                  message to each, using Workflow Automation and the Marketing Suite to engage them
                  the way they prefer.
                </p>
                <span className="si-prog"></span>
              </button>
              <button className="show-item" data-i="4" role="tab" aria-selected="false">
                <div className="si-head">
                  <span className="si-num">05</span>
                  <span className="si-t">Retain guests &amp; grow revenue</span>
                  <span className="si-arr">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
                <p className="si-desc">
                  Keep guests at the heart of the strategy from acquisition to retention, and use
                  Marketing Automation to share offers and discounts that bring them back — and lift
                  revenue.
                </p>
                <span className="si-prog"></span>
              </button>
              <button className="show-item" data-i="5" role="tab" aria-selected="false">
                <div className="si-head">
                  <span className="si-num">06</span>
                  <span className="si-t">Centralised rate management</span>
                  <span className="si-arr">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </div>
                <p className="si-desc">
                  Eliminate manual rate entry. Your sales team can build rate plans for any booking
                  source — OTA, direct, offline or corporate — and enter negotiated rates into one
                  central system.
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
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <ellipse cx="12" cy="5" rx="9" ry="3" />
                    <path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5M3 12c0 1.7 4 3 9 3s9-1.3 9-3" />
                  </svg>
                </span>
                <span className="p-tag">One platform</span>
                <h3>Every channel, one dataset</h3>
                <div className="p-list">
                  <div className="pl">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span>
                      Onboard <b>scattered data</b> from every channel in one go
                    </span>
                  </div>
                  <div className="pl">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span>
                      Understand guest <b>behaviour &amp; demographics</b>
                    </span>
                  </div>
                  <div className="pl">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span>
                      Share files securely on-platform with <b>Cloud Storage</b>
                    </span>
                  </div>
                </div>
              </div>

              {/* Panel 1 */}
              <div className="panel" data-i="1" role="tabpanel">
                <span className="p-ic">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <path d="M3 3v18h18" />
                    <path d="M7 14l3-3 3 3 5-6" />
                  </svg>
                </span>
                <span className="p-tag">Sales Suite</span>
                <h3>Track activity &amp; prove ROI</h3>
                <div className="p-list">
                  <div className="pl">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span>
                      Spot the activities that <b>close deals</b> and drive revenue
                    </span>
                  </div>
                  <div className="pl">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span>
                      Measure <b>cost vs. revenue</b> per property with Analytics
                    </span>
                  </div>
                  <div className="pl">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span>
                      Automated pipeline handles <b>higher enquiry volume</b>
                    </span>
                  </div>
                </div>
              </div>

              {/* Panel 2 */}
              <div className="panel" data-i="2" role="tabpanel">
                <span className="p-ic">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                </span>
                <span className="p-tag">CRM &amp; Shop Suite</span>
                <h3>Collaborate on full history</h3>
                <div className="p-list">
                  <div className="pl">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span>
                      A <b>single source of truth</b> for account &amp; contact history
                    </span>
                  </div>
                  <div className="pl">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span>Personalise the guest experience from context</span>
                  </div>
                  <div className="pl">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span>
                      <b>Role-based access</b> to schedules &amp; appointments
                    </span>
                  </div>
                </div>
              </div>

              {/* Panel 3 */}
              <div className="panel" data-i="3" role="tabpanel">
                <span className="p-ic">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.3-4.3M8 11h6M11 8v6" />
                  </svg>
                </span>
                <span className="p-tag">Marketing &amp; Automation</span>
                <h3>Engage the right prospects</h3>
                <div className="p-list">
                  <div className="pl">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span>
                      Segment <b>travel agents vs. corporates</b> with ease
                    </span>
                  </div>
                  <div className="pl">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span>
                      Deliver <b>relevant messages</b> by who they are
                    </span>
                  </div>
                  <div className="pl">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span>Find the best way to engage each type</span>
                  </div>
                </div>
              </div>

              {/* Panel 4 */}
              <div className="panel" data-i="4" role="tabpanel">
                <span className="p-ic">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <path d="M19 14c1.5-1.5 3-3.3 3-5.5A3.5 3.5 0 0 0 12 5 3.5 3.5 0 0 0 2 8.5c0 2.2 1.5 4 3 5.5l7 7z" />
                  </svg>
                </span>
                <span className="p-tag">Retention &amp; revenue</span>
                <h3>Bring guests back</h3>
                <div className="p-list">
                  <div className="pl">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span>
                      Keep guests central <b>from acquisition to retention</b>
                    </span>
                  </div>
                  <div className="pl">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span>
                      Email <b>offers &amp; discounts</b> with Marketing Automation
                    </span>
                  </div>
                  <div className="pl">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span>
                      Happier guests <b>lift overall profitability</b>
                    </span>
                  </div>
                </div>
              </div>

              {/* Panel 5 */}
              <div className="panel" data-i="5" role="tabpanel">
                <span className="p-ic">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <path d="M20.6 13.4l-7.2 7.2a2 2 0 0 1-2.8 0l-7-7A2 2 0 0 1 3 12V5a2 2 0 0 1 2-2h7a2 2 0 0 1 1.4.6l7.2 7.2a2 2 0 0 1 0 2.6z" />
                    <circle cx="7.5" cy="7.5" r="1.5" />
                  </svg>
                </span>
                <span className="p-tag">Rate management</span>
                <h3>One central rate plan</h3>
                <div className="p-list">
                  <div className="pl">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span>
                      End manual entry with the <b>Opera integration</b>
                    </span>
                  </div>
                  <div className="pl">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span>
                      Build plans for <b>OTA, direct, offline or corporate</b>
                    </span>
                  </div>
                  <div className="pl">
                    <svg
                      width="17"
                      height="17"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.4"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span>
                      Any rep can enter negotiated rates <b>in one place</b>
                    </span>
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

      {/* ============ OPERA INTEGRATION ============ */}
      <section className="sec opera" id="opera">
        <div className="aur"></div>
        <div className="grid-lines"></div>
        <div className="wrap">
          <div className="opera-grid">
            <div className="rv">
              <span className="eyebrow o-eyebrow">Better together</span>
              <h2>Integrate Opera PMS with Optimiser</h2>
              <p>
                Opera is the property management system trusted by large hotels for comprehensive
                operations. Connect it to Optimiser and your sales and marketing teams work from the
                same real-time data — no double entry, no lag.
              </p>
              <p>
                The result is a better guest experience and stronger performance, with the power of
                one platform simplifying how you manage the whole hotel.
              </p>
              <div className="opera-cta">
                <a className="btn btn-pri" href="#trial">
                  Talk to our team <span className="arr">→</span>
                </a>
              </div>
            </div>
            <div className="osync rv-r">
              <div className="onode opt">
                <span className="om">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                </span>
                <b>Optimiser</b>
              </div>
              <div className="olink">
                <span className="pkt"></span>
                <span className="pkt b"></span>
              </div>
              <div className="onode opr">
                <span className="om">PMS</span>
                <b>Opera</b>
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
                Ready to scale up your <span className="grad-txt">hospitality business?</span>
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
