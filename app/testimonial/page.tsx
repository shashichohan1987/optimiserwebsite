import './styles.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import GsapLenis from '@/components/GsapLenis';
import Animations from './Animations';
import ClientImg from './ClientImg';

export const metadata = {
  title: 'Testimonials — What Optimiser Clients Say',
  description:
    'Hear from the membership organisations and hospitality teams who run their operations, events and communications on Optimiser.',
};

export default function TestimonialPage() {
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
      <header className="wn-hero" style={{ paddingBottom: '40px' }}>
        <div className="aur"></div>
        <div className="whero-grid-bg"></div>
        <div className="wrap">
          <span className="eyebrow rv">Resources · Testimonials</span>
          <h1 className="rv">
            Believe in what <span className="grad-txt">our clients say</span>
          </h1>
          <p className="lede rv">
            Membership organisations and hospitality teams share how Optimiser transformed the way
            they manage members, events and communication.
          </p>
        </div>
      </header>

      {/* ============ FEATURED TESTIMONIAL ============ */}
      <section className="sec feat-wrap" style={{ paddingTop: '24px', paddingBottom: '56px' }}>
        <div className="wrap">
          <a
            className="bfeat rv"
            href="https://www.optimiser.com/testimonial/blue-orchid-hospitality"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bphoto ut-hos" style={{ minHeight: '420px' }}>
              <span className="cat">Hospitality</span>
              <ClientImg
                src="https://www.optimiser.com/data/img/PHOTO-BO-(1)-(1).jpg"
                alt="Blue Orchid Hospitality"
              />
            </div>
            <div className="bfeat-body">
              <span className="qbig">&ldquo;</span>
              <h2
                style={{
                  fontSize: 'clamp(22px,2.4vw,30px)',
                  lineHeight: '1.28',
                  maxWidth: '24ch',
                }}
              >
                Transforming hospitality, communication and event management for Blue Orchid
                Hospitality with Optimiser.
              </h2>
              <div className="cs-chips" style={{ marginTop: '22px' }}>
                <span className="cs-chip">Hospitality</span>
                <span className="cs-chip">United Kingdom</span>
                <span className="cs-chip">Optimiser CRM</span>
              </div>
              <span className="cs-read">
                Read the story{' '}
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
      </section>

      {/* ============ MORE TESTIMONIALS ============ */}
      <section className="sec" id="stories" style={{ paddingTop: '20px' }}>
        <div className="wrap">
          <div className="sec-head rv" style={{ marginBottom: '36px' }}>
            <span className="eyebrow">More clients</span>
            <h2>
              One platform, <span className="grad-txt">every department</span>
            </h2>
          </div>
          <div className="qgrid">
            <a
              className="qcard rv"
              href="https://www.optimiser.com/testimonial/the-worshipful-company-of-spectacle-makers-wcsm"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="qm">&ldquo;</span>
              <h3>
                Transforming membership, communication and event management for WCSM with Optimiser.
              </h3>
              <div className="cs-chips">
                <span className="cs-chip">Membership Org</span>
                <span className="cs-chip">United Kingdom</span>
                <span className="cs-chip">CRM + Touchpoint</span>
              </div>
              <div className="qfoot">
                <span
                  className="qini"
                  style={{ background: 'linear-gradient(135deg,#075DA8,#00A1DF)' }}
                >
                  WS
                </span>
                <span>
                  <b>Worshipful Company of Spectacle Makers</b>
                  <span>Membership Organisation · UK</span>
                </span>
              </div>
            </a>

            <a
              className="qcard rv"
              href="https://www.optimiser.com/testimonial/the-worshipful-company-of-entrepreneurs-wce"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="qm">&ldquo;</span>
              <h3>
                Transforming membership, communication and event management for WCE with Optimiser.
              </h3>
              <div className="cs-chips">
                <span className="cs-chip">Membership Org</span>
                <span className="cs-chip">United Kingdom</span>
                <span className="cs-chip">CRM + Touchpoint</span>
              </div>
              <div className="qfoot">
                <span
                  className="qini"
                  style={{ background: 'linear-gradient(135deg,#7B5CFA,#A78BFA)' }}
                >
                  WE
                </span>
                <span>
                  <b>Worshipful Company of Entrepreneurs</b>
                  <span>Membership Organisation · UK</span>
                </span>
              </div>
            </a>
          </div>

          <div className="trust rv" style={{ marginTop: '72px' }}>
            <p className="tlabel">Join the organisations growing with Optimiser</p>
            <div className="trust-row">
              <span className="tl">Blue Orchid</span>
              <span className="tl">WCSM</span>
              <span className="tl">WCE</span>
              <span className="tl">YOTEL</span>
              <span className="tl">ITM</span>
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
                Join the clients <span className="grad-txt">growing with Optimiser</span>
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
