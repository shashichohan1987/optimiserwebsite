import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import GsapLenis from '@/components/GsapLenis';
import Animations from './Animations';
import SubscribeForm from './SubscribeForm';
import './styles.css';

export const metadata = {
  title: 'Blog — Optimiser | CRM Insights, Guides & Trends',
  description:
    'Read industry insights, guides and trends on CRM, sales, marketing, hospitality and project management from the Optimiser team.',
};

export default function BlogPage() {
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
      <header className="wn-hero" style={{ paddingBottom: '48px' }}>
        <div className="aur"></div>
        <div className="whero-grid-bg"></div>
        <div className="wrap">
          <span className="eyebrow rv">Resources · Blog</span>
          <h1 className="rv">
            The Optimiser <span className="grad-txt">blog</span>
          </h1>
          <p className="lede rv">
            Insights, guides and trends to help you boost customer relationships and run your whole
            business on one platform.
          </p>
          <div className="wn-search rv">
            <span className="si">
              <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4-4" />
              </svg>
            </span>
            <input
              type="search"
              id="blogSearch"
              placeholder="Search articles…"
              aria-label="Search articles"
            />
          </div>
        </div>
      </header>

      {/* ============ FEATURED ============ */}
      <section className="sec feat-wrap" style={{ paddingTop: '20px', paddingBottom: '56px' }}>
        <div className="wrap">
          <a className="bfeat rv" href="#">
            <div className="bphoto ut-hos">
              <span className="cat">Hospitality</span>
              <img
                src="https://www.optimiser.com/data/img/52qk-AI-Hospitality-Blog-Picture-thumbnail.jpg"
                alt="Before AI delivers value, hospitality needs clarity"
              />
            </div>
            <div className="bfeat-body">
              <span className="feat-badge">
                <i></i>Featured
              </span>
              <div className="feat-meta">
                <span className="feat-date">7 min read</span>
              </div>
              <h2>Before AI delivers value, hospitality needs clarity</h2>
              <p>
                A connected guest journey — profiles, bookings, loyalty and live revenue — is what
                turns AI from hype into measurable hospitality outcomes.
              </p>
              <span className="btn btn-pri">
                Read article <span className="arr">→</span>
              </span>
            </div>
          </a>
        </div>
      </section>

      {/* ============ ALL ARTICLES ============ */}
      <section className="sec" id="articles" style={{ paddingTop: '20px' }}>
        <div className="wrap">
          <div className="wn-bar rv">
            <h2>All articles</h2>
            <div className="wn-filters" id="blogFilters" role="tablist" aria-label="Filter articles">
              <button className="fpill on" data-cat="all">All</button>
              <button className="fpill" data-cat="crm">CRM</button>
              <button className="fpill" data-cat="sal">Sales</button>
              <button className="fpill" data-cat="mkt">Marketing</button>
              <button className="fpill" data-cat="pm">Project Mgmt</button>
              <button className="fpill" data-cat="evt">Events</button>
              <button className="fpill" data-cat="hos">Hospitality</button>
              <button className="fpill" data-cat="ana">Analytics</button>
            </div>
          </div>

          <div className="bgrid" id="blogGrid">

            <a className="bcard" href="#" data-cat="crm" data-title="2026 — the year your CRM strategy changes">
              <div className="bphoto ut-int">
                <span className="cat">Strategy</span>
                <img
                  src="https://www.optimiser.com/data/img/mnmp-2026-The-Year-Your-CRM-Strategy-Changes-thumbnail.png"
                  alt="2026 — the year your CRM strategy changes"
                  loading="lazy"
                />
              </div>
              <div className="bc-body">
                <div className="bc-meta">
                  <span>Article</span><span className="dot"></span><span>6 min read</span>
                </div>
                <h3>2026 — the year your CRM strategy changes</h3>
                <p>
                  Email marketing in 2026 isn&apos;t dying, it&apos;s evolving fast. The inbox is now an
                  AI-mediated space and one-way broadcast campaigns are past their expiry.
                </p>
                <span className="tl-more">
                  Read more{' '}
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </div>
            </a>

            <a className="bcard" href="#" data-cat="crm" data-title="Enhancing digital transformation: how customer experience leads the way">
              <div className="bphoto ut-int">
                <span className="cat">Experience</span>
                <img
                  src="https://www.optimiser.com/data/img/erhe-thumnail-main-image.jpg"
                  alt="Enhancing digital transformation: how customer experience leads the way"
                  loading="lazy"
                />
              </div>
              <div className="bc-body">
                <div className="bc-meta">
                  <span>Article</span><span className="dot"></span><span>5 min read</span>
                </div>
                <h3>Enhancing digital transformation: how customer experience leads the way</h3>
                <p>
                  Personalised, seamless, omnichannel service and data-driven decisions are what let
                  organisations meet customer expectations in the digital age.
                </p>
                <span className="tl-more">
                  Read more{' '}
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </div>
            </a>

            <a className="bcard" href="#" data-cat="crm" data-title="Customer lifetime value: the true worth of your customers">
              <div className="bphoto ut-int">
                <span className="cat">CRM</span>
                <img
                  src="https://www.optimiser.com/data/img/pv9r-thumnail-main-image.jpg"
                  alt="Customer lifetime value: the true worth of your customers"
                  loading="lazy"
                />
              </div>
              <div className="bc-body">
                <div className="bc-meta">
                  <span>Article</span><span className="dot"></span><span>6 min read</span>
                </div>
                <h3>Customer lifetime value: the true worth of your customers</h3>
                <p>
                  CLV is the metric for businesses building long-term relationships — increasing
                  profitability and deepening customer satisfaction over time.
                </p>
                <span className="tl-more">
                  Read more{' '}
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </div>
            </a>

            <a className="bcard" href="#" data-cat="mkt" data-title="Unveiling the impact of AI in marketing: key concerns revealed">
              <div className="bphoto ut-com">
                <span className="cat">Marketing</span>
                <img
                  src="https://www.optimiser.com/data/img/62ra-thumnail-main-image.jpg"
                  alt="Unveiling the impact of AI in marketing: key concerns revealed"
                  loading="lazy"
                />
              </div>
              <div className="bc-body">
                <div className="bc-meta">
                  <span>Article</span><span className="dot"></span><span>7 min read</span>
                </div>
                <h3>Unveiling the impact of AI in marketing: key concerns revealed</h3>
                <p>
                  AI can be harnessed responsibly to drive innovation and efficiency in marketing —
                  while keeping trust and respect for people at the centre.
                </p>
                <span className="tl-more">
                  Read more{' '}
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </div>
            </a>

            <a className="bcard" href="#" data-cat="pm" data-title="The power of project pipeline management">
              <div className="bphoto ut-int">
                <span className="cat">Project Mgmt</span>
                <img
                  src="https://www.optimiser.com/data/img/d31i-thumnail-main-image.jpg"
                  alt="The power of project pipeline management"
                  loading="lazy"
                />
              </div>
              <div className="bc-body">
                <div className="bc-meta">
                  <span>Article</span><span className="dot"></span><span>8 min read</span>
                </div>
                <h3>The power of project pipeline management</h3>
                <p>
                  Strategic alignment, smart resource allocation and clearer decisions: why teams
                  should put project pipeline management at the core of delivery.
                </p>
                <span className="tl-more">
                  Read more{' '}
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </div>
            </a>

            <a className="bcard" href="#" data-cat="ana" data-title="Maximising ROI with CRM analytics: 7 key metrics">
              <div className="bphoto ut-hos">
                <span className="cat">Analytics</span>
                <img
                  src="https://www.optimiser.com/data/img/0tg0-thumnail-main-image.jpg"
                  alt="Maximising ROI with CRM analytics: 7 key metrics"
                  loading="lazy"
                />
              </div>
              <div className="bc-body">
                <div className="bc-meta">
                  <span>Article</span><span className="dot"></span><span>6 min read</span>
                </div>
                <h3>Maximising ROI with CRM analytics: 7 key metrics</h3>
                <p>
                  Actionable insight beats guesswork. These seven metrics sharpen sales and marketing
                  strategy, optimise service and lift satisfaction.
                </p>
                <span className="tl-more">
                  Read more{' '}
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </div>
            </a>

            <a className="bcard" href="#" data-cat="pm" data-title="Project management by the numbers: essential statistics">
              <div className="bphoto ut-int">
                <span className="cat">Project Mgmt</span>
                <img
                  src="https://www.optimiser.com/data/img/ww8t-thumnail-main-image.jpg"
                  alt="Project management by the numbers: essential statistics"
                  loading="lazy"
                />
              </div>
              <div className="bc-body">
                <div className="bc-meta">
                  <span>Article</span><span className="dot"></span><span>5 min read</span>
                </div>
                <h3>Project management by the numbers: essential statistics</h3>
                <p>
                  The data behind productivity, collaboration and project success — and what it means
                  for how you plan, execute and monitor work.
                </p>
                <span className="tl-more">
                  Read more{' '}
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </div>
            </a>

            <a className="bcard" href="#" data-cat="crm" data-title="From chaos to order: how CRM integrations improve your processes">
              <div className="bphoto ut-int">
                <span className="cat">Integrations</span>
                <img
                  src="https://www.optimiser.com/data/img/eb5c-thumnail-main-image.jpg"
                  alt="From chaos to order: how CRM integrations improve your processes"
                  loading="lazy"
                />
              </div>
              <div className="bc-body">
                <div className="bc-meta">
                  <span>Article</span><span className="dot"></span><span>6 min read</span>
                </div>
                <h3>From chaos to order: how CRM integrations improve your processes</h3>
                <p>
                  Integration lets data and functionality flow between your CRM and other apps — a
                  unified view of the customer and leaner operations.
                </p>
                <span className="tl-more">
                  Read more{' '}
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </div>
            </a>

            <a className="bcard" href="#" data-cat="pm" data-title="Keep your project on track: 10 risk management tactics">
              <div className="bphoto ut-int">
                <span className="cat">Project Mgmt</span>
                <img
                  src="https://www.optimiser.com/data/img/ztnz-thumnail-main-image.jpg"
                  alt="Keep your project on track: 10 risk management tactics"
                  loading="lazy"
                />
              </div>
              <div className="bc-body">
                <div className="bc-meta">
                  <span>Article</span><span className="dot"></span><span>9 min read</span>
                </div>
                <h3>Keep your project on track: 10 risk management tactics</h3>
                <p>
                  Better decisions, stronger outcomes and resilient teams — the risk-management moves
                  every project manager should have ready.
                </p>
                <span className="tl-more">
                  Read more{' '}
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </div>
            </a>

            <a className="bcard" href="#" data-cat="sal" data-title="Maximising profitability: the power of AI in sales">
              <div className="bphoto ut-shop">
                <span className="cat">Sales</span>
                <img
                  src="https://www.optimiser.com/data/img/Maximising-Profitability-The-Power-Of-AI-In-Sales-2.png"
                  alt="Maximising profitability: the power of AI in sales"
                  loading="lazy"
                />
              </div>
              <div className="bc-body">
                <div className="bc-meta">
                  <span>Article</span><span className="dot"></span><span>7 min read</span>
                </div>
                <h3>Maximising profitability: the power of AI in sales</h3>
                <p>
                  AI is reshaping sales — improving efficiency, productivity and revenue. The teams
                  adopting it now are the ones who&apos;ll compete tomorrow.
                </p>
                <span className="tl-more">
                  Read more{' '}
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </div>
            </a>

            <a className="bcard" href="#" data-cat="evt" data-title="From attendance to ROI: eye-opening event industry stats">
              <div className="bphoto ut-com">
                <span className="cat">Events</span>
                <img
                  src="https://www.optimiser.com/data/img/wmz3-thumnail-main-image.jpg"
                  alt="From attendance to ROI: eye-opening event industry stats"
                  loading="lazy"
                />
              </div>
              <div className="bc-body">
                <div className="bc-meta">
                  <span>Article</span><span className="dot"></span><span>6 min read</span>
                </div>
                <h3>From attendance to ROI: eye-opening event industry stats</h3>
                <p>
                  Event software saves time, sharpens collaboration and improves the attendee
                  experience — raising the overall success and ROI of every event.
                </p>
                <span className="tl-more">
                  Read more{' '}
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </div>
            </a>

            <a className="bcard" href="#" data-cat="mkt" data-title="Web forms 101: best practices and common mistakes to avoid">
              <div className="bphoto ut-com">
                <span className="cat">Marketing</span>
                <img
                  src="https://www.optimiser.com/data/img/k6lu-thumnail-main-image.jpg"
                  alt="Web forms 101: best practices and common mistakes to avoid"
                  loading="lazy"
                />
              </div>
              <div className="bc-body">
                <div className="bc-meta">
                  <span>Article</span><span className="dot"></span><span>5 min read</span>
                </div>
                <h3>Web forms 101: best practices and common mistakes to avoid</h3>
                <p>
                  Web forms are how modern sites collect information. Get them right to improve
                  experience, generate leads and drive more sales.
                </p>
                <span className="tl-more">
                  Read more{' '}
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </div>
            </a>

            <a className="bcard" href="#" data-cat="pm" data-title="Improve project outcomes with CRM-driven resource management">
              <div className="bphoto ut-int">
                <span className="cat">Project Mgmt</span>
                <img
                  src="https://www.optimiser.com/data/img/wdft-thumnail-main-image.jpg"
                  alt="Improve project outcomes with CRM-driven resource management"
                  loading="lazy"
                />
              </div>
              <div className="bc-body">
                <div className="bc-meta">
                  <span>Article</span><span className="dot"></span><span>6 min read</span>
                </div>
                <h3>Improve project outcomes with CRM-driven resource management</h3>
                <p>
                  Resource management keeps organisations competitive — meeting customer needs and
                  hitting goals in a fast-changing environment.
                </p>
                <span className="tl-more">
                  Read more{' '}
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </div>
            </a>

            <a className="bcard" href="#" data-cat="crm" data-title="Revolutionising customer management: cloud CRM for small business">
              <div className="bphoto ut-int">
                <span className="cat">Small Biz</span>
                <img
                  src="https://www.optimiser.com/data/img/qr32-thumbnail.png"
                  alt="Revolutionising customer management: cloud CRM for small business"
                  loading="lazy"
                />
              </div>
              <div className="bc-body">
                <div className="bc-meta">
                  <span>Article</span><span className="dot"></span><span>5 min read</span>
                </div>
                <h3>Revolutionising customer management: cloud CRM for small business</h3>
                <p>
                  A cloud CRM lifts engagement, sales productivity and growth — giving smaller teams
                  enterprise-grade capability without the overhead.
                </p>
                <span className="tl-more">
                  Read more{' '}
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </span>
              </div>
            </a>

          </div>

          <p className="no-results" id="blogEmpty">
            No articles match your search. Try another keyword or category.
          </p>
          <div className="load-wrap">
            <button className="btn btn-gho" id="loadMore">
              Load more articles <span className="arr">↓</span>
            </button>
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
              <h2>Get new articles in your inbox</h2>
              <p>
                Practical CRM, sales and marketing insight from the Optimiser team — delivered when
                we publish, never more.
              </p>
            </div>
            <div>
              <SubscribeForm />
              <p className="sb-note">No spam. Unsubscribe anytime.</p>
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
                Put these ideas to work on <span className="grad-txt">one platform</span>
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
