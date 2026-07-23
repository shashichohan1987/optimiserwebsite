import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import GsapLenis from '@/components/GsapLenis';
import Animations from './Animations';
import './styles.css';

export const metadata = {
  title: 'Corporate Social Responsibility — Optimiser',
  description:
    'Optimiser positively contributes to communities locally and globally — supporting youth clubs, heritage societies and entrepreneurs with technology and time.',
};

export default function CSRPage() {
  return (
    <>
      <GsapLenis />
      <Animations />

      {/* Ambient layer */}
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
          <span className="eyebrow rv">Company · CSR</span>
          <h1 className="rv">
            Doing right by our <span className="grad-txt">communities</span>
          </h1>
          <p className="lede rv">
            Optimiser recognises the significance of its social and economic
            responsibilities. We aim to contribute positively to organisations in
            our local communities — and globally.
          </p>
        </div>
      </header>

      {/* ============ IMPACT BAND ============ */}
      <section className="sec" style={{ paddingTop: '16px', paddingBottom: '64px' }}>
        <div className="wrap">
          <div className="impact rv">
            <div className="grid-lines"></div>
            <div className="inner">
              <span className="eyebrow">Our impact so far</span>
              <div className="big">£32,000</div>
              <p className="cap">
                In platform and technology solutions provided to help businesses
                and communities do more with less.
              </p>
              <div className="impact-stats">
                <div className="is">
                  <b>3</b>
                  <span>organisations supported</span>
                </div>
                <div className="is">
                  <b>1,050+</b>
                  <span>members connected</span>
                </div>
                <div className="is">
                  <b>London</b>
                  <span>&amp; beyond</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ INITIATIVES ============ */}
      <section className="sec" id="initiatives" style={{ paddingTop: '20px' }}>
        <div className="wrap">
          <div className="sec-head rv" style={{ maxWidth: '620px', marginBottom: '64px' }}>
            <span className="eyebrow">Where we help</span>
            <h2>
              The organisations <span className="grad-txt">we support</span>
            </h2>
            <p>
              We give our platform, our expertise and our time to causes that
              strengthen communities and protect what matters.
            </p>
          </div>

          {/* Row 1 — St Andrew's Youth Club */}
          <div className="csr-row rv">
            <div className="csr-media">
              <span className="badge">Youth &amp; community</span>
              <img
                src="/assets/st-andrew.jpg"
                alt="St Andrew's Youth Club"
              />
            </div>
            <div className="csr-body">
              <span className="csr-num">01 — St Andrew&apos;s Youth Club</span>
              <h2>Backing the world&apos;s oldest youth club</h2>
              <p>
                Established in 1866 in South Westminster, St Andrew&apos;s is
                the oldest youth club in the world, supporting more than 700
                disadvantaged young members. Optimiser helps the club connect
                members, supporters and suppliers on one platform — and build a
                clearer picture of its fundraising impact.
              </p>
              <div className="csr-facts">
                <span className="csr-fact">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>{' '}
                  Est. 1866
                </span>
                <span className="csr-fact">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>{' '}
                  South Westminster, London
                </span>
                <span className="csr-fact">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  </svg>{' '}
                  700+ members
                </span>
              </div>
            </div>
          </div>

          {/* Row 2 — The Thorney Island Society */}
          <div className="csr-row alt rv">
            <div className="csr-media">
              <span className="badge">Heritage</span>
              <img
                src="/assets/thorne.jpg"
                alt="The Thorney Island Society"
              />
            </div>
            <div className="csr-body">
              <span className="csr-num">02 — The Thorney Island Society</span>
              <h2>Protecting a World Heritage Site</h2>
              <p>
                Founded in 1985 to save the first public library in London, the
                society now watches over the World Heritage Site around
                Westminster Abbey and the Houses of Parliament. Optimiser
                provided a fully customised platform to connect its 350+ members
                and coordinate events — with our parent, Glotelligence, assisting
                on web development and digital marketing.
              </p>
              <div className="csr-facts">
                <span className="csr-fact">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                  </svg>{' '}
                  Est. 1985
                </span>
                <span className="csr-fact">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>{' '}
                  Westminster, London
                </span>
                <span className="csr-fact">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  </svg>{' '}
                  350+ members
                </span>
              </div>
            </div>
          </div>

          {/* Row 3 — The Company of Entrepreneurs */}
          <div className="csr-row rv">
            <div className="csr-media">
              <span className="badge">Enterprise</span>
              <img
                src="/assets/ezgif-5-1ae7beb797.webp"
                alt="The Company of Entrepreneurs"
              />
            </div>
            <div className="csr-body">
              <span className="csr-num">03 — The Company of Entrepreneurs</span>
              <h2>Championing enterprise &amp; giving back</h2>
              <p>
                An aspirant livery company of London, the Company of
                Entrepreneurs brings together women and men who have built
                successful businesses. It fosters excellence in entrepreneurship,
                supports the work of the Lord Mayor, and gives both money and
                time to charitable causes across the City.
              </p>
              <div className="csr-facts">
                <span className="csr-fact">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>{' '}
                  City of London
                </span>
                <span className="csr-fact">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                  </svg>{' '}
                  Founders &amp; leaders
                </span>
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
                Run your organisation on{' '}
                <span className="grad-txt">one platform</span>
              </h2>
              <p>
                From charities and member organisations to global enterprises —
                start your 30-day free trial today. No credit card required.
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
