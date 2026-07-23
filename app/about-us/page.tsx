import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GsapLenis from "@/components/GsapLenis";
import Animations from "./Animations";
import "./styles.css";

export const metadata = {
  title: "About Us | Optimiser",
  description:
    "About Optimiser — the all-in-one CRM platform. Our mission: one personalised, consolidated platform for every organisation, saving clients up to 40% on software subscriptions.",
};

export default function AboutUsPage() {
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
      <header className="ig-hero">
        <div className="wrap">
          <div className="ig-center">
            <span className="eyebrow rv">About Optimiser</span>
            <h1 className="rv">
              One platform. <span className="grad-txt">One promise.</span>
            </h1>
            <p className="lede rv">
              Fostering productivity and accelerating business growth is what Optimiser
              strives to do — combining every user experience into a single platform under a
              unified subscription, so our clients streamline workflow and maximise
              resources.
            </p>
            <div
              className="t2-cta rv"
              style={{ display: "flex", gap: "14px", flexWrap: "wrap", justifyContent: "center" }}
            >
              <a className="btn btn-pri" href="/free-crm">
                Try for free <span className="arr">→</span>
              </a>
              <a className="btn btn-gho" href="/why-optimiser">
                Why Optimiser
              </a>
            </div>
          </div>
          <div className="ab-stats rv">
            <div className="ab-stat">
              <b>40%</b>
              <span>saved on software subscriptions</span>
            </div>
            <div className="ab-stat">
              <b>3 wks</b>
              <span>to onboard and go live</span>
            </div>
            <div className="ab-stat">
              <b>12+</b>
              <span>modules on one subscription</span>
            </div>
            <div className="ab-stat">
              <b>Free</b>
              <span>support for as long as you stay</span>
            </div>
          </div>
        </div>
      </header>

      {/* ============ MISSION ============ */}
      <section className="sec" id="mission">
        <div className="wrap">
          <div className="sec-head rv">
            <span className="eyebrow">Our promise</span>
            <h2>
              What we hold <span className="grad-txt">ourselves to</span>
            </h2>
            <p>
              Optimiser delivers a personalised, consolidated platform for every organisation
              — dedicated to saving you time and money without compromising on power or
              quality.
            </p>
          </div>
          <div className="ab-vals">
            <article className="ab-val rv">
              <span className="num">01</span>
              <h3>Transparent, always</h3>
              <p>
                We are transparent in all our relationships and actions — always doing what
                we do to the very best of our ability.
              </p>
            </article>
            <article className="ab-val rv">
              <span className="num">02</span>
              <h3>Fully adaptable</h3>
              <p>
                Every aspect of our service can be fine-tuned down to the intricate details.
                We respect that each of our clients' needs are unique.
              </p>
            </article>
            <article className="ab-val rv">
              <span className="num">03</span>
              <h3>Always on hand</h3>
              <p>
                Practical, user-friendly advice whenever you need it — no problem is too
                small and no question too trivial.
              </p>
            </article>
            <article className="ab-val rv">
              <span className="num">04</span>
              <h3>Value without compromise</h3>
              <p>
                One platform and one monthly rate avoids complicated costing structures — the
                financially-efficient option, every time.
              </p>
            </article>
            <article className="ab-val rv">
              <span className="num">05</span>
              <h3>Innovation at the front</h3>
              <p>
                We keep our technology at the forefront of innovation, helping clients stay
                ahead of the competition and revolutionise how they operate.
              </p>
            </article>
            <article className="ab-val rv">
              <span className="num">06</span>
              <h3>A global community</h3>
              <p>
                From boutique hotels to national charities — our community of clients spans
                industries and continents.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ============ HOW WE WORK ============ */}
      <section className="sec" id="how" style={{ paddingTop: "40px" }}>
        <div className="wrap">
          <div className="crm-stack">
            <div className="frow">
              <div className="rv">
                <div className="f-num">HOW WE WORK</div>
                <h2>From first analysis to lasting partnership</h2>
                <p className="f-lead">We start with your business, not our software.</p>
                <ul className="feat-list">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    In-depth analysis of your business — scope, challenges, growth blockers
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    A solution proposed within the system or fully customised to your requirements
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Hassle-free onboarding: data transfer, training and setup by our team
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Free support for as long as you're with us — no hidden tiers
                  </li>
                </ul>
              </div>
              <div className="f-vis rv-r">
                <div className="f-glow"></div>
                <div className="plat-bar">
                  <i className="d r"></i>
                  <i className="d y"></i>
                  <i className="d g"></i>
                  <span className="url">app.optimiser.com</span>
                </div>
                <img
                  src="/assets/list-view.webp"
                  alt="The Optimiser platform"
                  loading="lazy"
                  decoding="async"
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
                Join the businesses running on <span className="grad-txt">one platform</span>
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
