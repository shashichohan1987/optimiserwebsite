import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import GsapLenis from '@/components/GsapLenis';
import Animations from './Animations';
import './styles.css';

export const metadata = {
  title: 'Yotel Group Case Study — Optimiser CRM',
  description:
    'How Yotel Group enhanced growth and guest insight with Optimiser CRM — unifying sales, guests and revenue across a global hotel portfolio.',
};

export default function YotelCaseStudyPage() {
  return (
    <>
      <GsapLenis />
      <Animations />

      <div id="scrollbar" />
      <div className="grain" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />

      <Nav />

      {/* ============ DETAIL HERO ============ */}
      <header className="dhero">
        <div className="aur" />
        <div className="wrap">
          <nav className="crumbs">
            <a href="/">Home</a>
            <span className="sep">/</span>
            <a href="/case-studies">Case studies</a>
            <span className="sep">/</span>
            <span>Yotel Group</span>
          </nav>
          <div className="cs-chips">
            <span className="cs-chip">Enterprise / Group</span>
            <span className="cs-chip">Hospitality</span>
            <span className="cs-chip">Global</span>
            <span className="cs-chip">Optimiser CRM</span>
          </div>
          <h1>Yotel Group: enhancing growth and insight with Optimiser CRM</h1>
          <div className="dhero-cover">
            <div className="fg" />
            <span className="ini">YOTEL</span>
            <span className="nm">Global hotel group · Optimiser CRM</span>
          </div>
        </div>
      </header>

      {/* ============ DETAIL BODY ============ */}
      <section className="sec" style={{ paddingTop: '56px' }}>
        <div className="wrap">
          <div className="detail-grid">
            {/* Prose */}
            <div className="prose rv">
              <h2>Overview</h2>
              <p>
                Yotel is a fast-growing, technology-led hotel group with properties in city centres, airports and prime
                destinations worldwide. As the portfolio expanded, the commercial team needed a single place to manage
                relationships across corporate clients, travel partners and direct guests — without the data silos that
                come from juggling separate tools per property.
              </p>
              <p>
                They turned to Optimiser CRM to bring sales, guest data and revenue insight onto one connected platform
                that scales across every location.
              </p>

              <h2>The challenge</h2>
              <p>
                Growth had outpaced the group&apos;s tooling. Enquiries arrived through dozens of channels, customer
                records lived in different systems, and leadership lacked a consistent, real-time view of performance
                across the estate.
              </p>
              <ul>
                <li>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span>
                    Guest and account data <b>fragmented</b> across properties and spreadsheets
                  </span>
                </li>
                <li>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span>
                    No <b>single source of truth</b> for the commercial team to work from
                  </span>
                </li>
                <li>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span>
                    Limited visibility into <b>activity and revenue</b> at group level
                  </span>
                </li>
                <li>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span>
                    Manual handovers slowing down <b>response times</b> on high-value enquiries
                  </span>
                </li>
              </ul>

              <h2>The solution</h2>
              <p>
                Optimiser consolidated the group&apos;s commercial operation onto one platform. Enquiries are captured
                and routed automatically, every account carries its full history, and dashboards give leadership a live
                read across all properties.
              </p>
              <ul>
                <li>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span>
                    <b>Unified CRM</b> for corporate, travel-trade and direct relationships
                  </span>
                </li>
                <li>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span>
                    <b>Automated pipelines</b> that assign and progress enquiries in seconds
                  </span>
                </li>
                <li>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span>
                    <b>Group-wide analytics</b> measuring activity against revenue
                  </span>
                </li>
                <li>
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span>
                    Role-based access so each property sees <b>exactly what it needs</b>
                  </span>
                </li>
              </ul>

              <div className="pull">
                <div className="pq">
                  &ldquo;Optimiser gave us one connected view of every relationship and a real-time picture of
                  performance across the group — so the whole team works from the same source of truth.&rdquo;
                </div>
                <div className="pa">— Commercial team, Yotel Group</div>
              </div>

              <h2>The results</h2>
              <p>
                With one platform in place, Yotel&apos;s teams move faster, leadership sees the full picture, and the
                commercial engine scales cleanly as new properties open.
              </p>
              <div className="results-band">
                <div className="rstat">
                  <b>360°</b>
                  <span>view of guests, accounts &amp; revenue</span>
                </div>
                <div className="rstat">
                  <b>1</b>
                  <span>platform across every property</span>
                </div>
                <div className="rstat">
                  <b>Faster</b>
                  <span>response on high-value enquiries</span>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="side rv">
              <div className="side-card">
                <h4>At a glance</h4>
                <div className="fact">
                  <span className="k">Industry</span>
                  <span className="v">Hospitality</span>
                </div>
                <div className="fact">
                  <span className="k">Type</span>
                  <span className="v">Enterprise / Group</span>
                </div>
                <div className="fact">
                  <span className="k">Region</span>
                  <span className="v">Global</span>
                </div>
                <div className="fact">
                  <span className="k">Product</span>
                  <span className="v">Optimiser CRM</span>
                </div>
              </div>
              <div className="side-card">
                <h4>Products used</h4>
                <div className="pchips">
                  <span className="pchip">
                    <i />
                    CRM
                  </span>
                  <span className="pchip">
                    <i />
                    Sales Suite
                  </span>
                  <span className="pchip">
                    <i />
                    Analytics
                  </span>
                  <span className="pchip">
                    <i />
                    Workflow Automation
                  </span>
                </div>
              </div>
              <div className="side-cta">
                <h4>Run your group on one platform</h4>
                <p>See what Optimiser can do for your portfolio — start a 30-day free trial, no card required.</p>
                <a className="btn btn-pri" href="/free-crm">
                  Start free trial <span className="arr">→</span>
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ============ NEXT STORIES ============ */}
      <section className="sec" style={{ paddingTop: '20px' }}>
        <div className="wrap">
          <div className="sec-head rv" style={{ marginBottom: '36px' }}>
            <span className="eyebrow">Keep reading</span>
            <h2>
              More <span className="grad-txt">success stories</span>
            </h2>
          </div>
          <div className="bgrid" style={{ gridTemplateColumns: 'repeat(2,1fr)' }}>
            {/* ITM card */}
            <a className="bcard rv" href="#">
              <div className="bphoto ut-com" style={{ aspectRatio: '16/9' }}>
                <span className="cat">Membership</span>
                <span className="cs-logo">
                  <span className="ini">ITM</span>
                  <span className="nm">United Kingdom</span>
                </span>
              </div>
              <div className="bc-body">
                <div className="cs-chips" style={{ marginBottom: '14px' }}>
                  <span className="cs-chip">Membership Org</span>
                  <span className="cs-chip">CRM + Touchpoint</span>
                </div>
                <h3>Transforming membership, communication &amp; event management for ITM</h3>
                <p>
                  One platform for member records, communications and events — replacing disconnected tools with a
                  single source of truth.
                </p>
                <span className="cs-read">
                  Read the story{' '}
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </div>
            </a>

            {/* Blue Orchid card */}
            <a className="bcard rv" href="/testimonial">
              <div className="bphoto ut-hos" style={{ aspectRatio: '16/9' }}>
                <span className="cat">Hospitality</span>
                <span className="cs-logo">
                  <span className="ini">BOH</span>
                  <span className="nm">United Kingdom</span>
                </span>
              </div>
              <div className="bc-body">
                <div className="cs-chips" style={{ marginBottom: '14px' }}>
                  <span className="cs-chip">Hospitality</span>
                  <span className="cs-chip">Optimiser CRM</span>
                </div>
                <h3>Transforming hospitality &amp; event management for Blue Orchid</h3>
                <p>How a UK hospitality group brought communication and events together on Optimiser.</p>
                <span className="cs-read">
                  Read the story{' '}
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
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
            <div className="grid-lines" />
            <div className="inner">
              <span className="eyebrow" style={{ justifyContent: 'center' }}>
                Get started
              </span>
              <h2>
                Ready to write <span className="grad-txt">your story?</span>
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
