import './styles.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import GsapLenis from '@/components/GsapLenis';
import Animations from './Animations';

export const metadata = {
  title: 'Media — Optimiser in the Press | Coverage & Interviews',
  description:
    'Press coverage, interviews and features about Optimiser — the one-platform CRM helping businesses grow.',
};

export default function MediaPage() {
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
          <span className="eyebrow rv">Resources · Media</span>
          <h1 className="rv">
            Optimiser in the <span className="grad-txt">media</span>
          </h1>
          <p className="lede rv">
            Interviews, features and coverage from the press — see what&apos;s being said about the
            one platform built to run your whole business.
          </p>
          <div className="logos rv">
            <span className="lo">Boutique Hotel News</span>
            <span className="lo">City A.M.</span>
          </div>
        </div>
      </header>

      {/* ============ FEATURED COVERAGE ============ */}
      <section className="sec feat-wrap" style={{ paddingTop: '24px', paddingBottom: '56px' }}>
        <div className="wrap">
          <a
            className="bfeat rv"
            href="https://www.optimiser.com/whats-new"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="bphoto ut-int" style={{ minHeight: '400px' }}>
              <span className="cat">Boutique Hotel News</span>
              <span className="play">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </div>
            <div className="bfeat-body">
              <span className="mtag video">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M23 7l-7 5 7 5V7z" />
                  <rect x="1" y="5" width="15" height="14" rx="2" />
                </svg>{' '}
                Video interview
              </span>
              <div className="feat-meta" style={{ marginTop: '16px' }}>
                <span className="feat-date">28 May 2021 · Boutique Hotel News</span>
              </div>
              <h2>Boutique Hotel News interviews the founders of Optimiser and CLA</h2>
              <p>
                Tony Matharu, founder of the Central London Alliance, and Varun Kapoor, founder of
                Optimiser, discuss how data and automation can power London&apos;s hospitality
                recovery — and the role one connected platform plays in rebuilding the capital.
              </p>
              <span className="btn btn-pri">
                Watch the interview <span className="arr">→</span>
              </span>
            </div>
          </a>
        </div>
      </section>

      {/* ============ MORE COVERAGE ============ */}
      <section className="sec" id="coverage" style={{ paddingTop: '20px' }}>
        <div className="wrap">
          <div className="sec-head rv" style={{ marginBottom: '36px' }}>
            <span className="eyebrow">Press coverage</span>
            <h2>
              More from the <span className="grad-txt">press</span>
            </h2>
          </div>
          <div className="press-list">
            <a
              className="prow rv"
              href="https://www.optimiser.com/whats-new"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="pr-meta">
                <span className="mtag press" style={{ alignSelf: 'flex-start' }}>
                  Press
                </span>
                <span className="pr-out">City A.M.</span>
                <span className="pr-date">05 Aug 2021</span>
              </div>
              <div>
                <h3>Optimiser featured by City A.M.</h3>
                <p>
                  The popular British business newspaper covered how Optimiser is helping the Central
                  London Alliance rebuild the capital&apos;s work culture — bringing organisations
                  together on one platform to drive London&apos;s recovery.
                </p>
              </div>
              <span className="pr-go">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                >
                  <path d="M7 17L17 7M17 7H9M17 7v8" />
                </svg>
              </span>
            </a>

            <a
              className="prow rv"
              href="https://www.optimiser.com/whats-new"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="pr-meta">
                <span className="mtag video" style={{ alignSelf: 'flex-start' }}>
                  Video
                </span>
                <span className="pr-out">Boutique Hotel News</span>
                <span className="pr-date">28 May 2021</span>
              </div>
              <div>
                <h3>Founders on powering London&apos;s hospitality recovery</h3>
                <p>
                  An in-depth conversation on automation, data and the power of one platform — and
                  why connected technology is central to the hospitality industry&apos;s rebound.
                </p>
              </div>
              <span className="pr-go">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                >
                  <path d="M7 17L17 7M17 7H9M17 7v8" />
                </svg>
              </span>
            </a>
          </div>

          <div className="penq rv" style={{ marginTop: '54px' }}>
            <div>
              <h3>Press &amp; media enquiries</h3>
              <p>Writing about Optimiser? Our team is happy to help with interviews, assets and data.</p>
            </div>
            <a className="btn btn-pri" href="mailto:press@optimiser.com">
              Contact the press team <span className="arr">→</span>
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
                Want this kind of platform{' '}
                <span className="grad-txt">working for you?</span>
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
