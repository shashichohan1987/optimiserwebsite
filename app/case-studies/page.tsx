import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GsapLenis from "@/components/GsapLenis";
import Animations from "./Animations";
import "./styles.css";

export const metadata = {
  title: "Case Studies — Optimiser Client Success Stories",
  description:
    "See how businesses of every size use Optimiser to grow revenue, unify their data and run everything on one platform.",
};

export default function CaseStudiesPage() {
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
      <header className="wn-hero" style={{ paddingBottom: "40px" }}>
        <div className="aur"></div>
        <div className="whero-grid-bg"></div>
        <div className="wrap">
          <span className="eyebrow rv">Resources · Case studies</span>
          <h1 className="rv">
            Don&apos;t just believe us —{" "}
            <span className="grad-txt">believe our clients</span>
          </h1>
          <p className="lede rv">
            From global hotel groups to membership organisations, see how teams
            use Optimiser to grow revenue and run everything in one place.
          </p>
        </div>
      </header>

      {/* ============ FEATURED STORY ============ */}
      <section
        className="sec feat-wrap"
        style={{ paddingTop: "24px", paddingBottom: "56px" }}
      >
        <div className="wrap">
          <a className="bfeat rv" href="/yotel-case-study">
            <div className="bphoto ut-hos" style={{ minHeight: "420px" }}>
              <span className="cat">Featured story</span>
              <span className="cs-logo">
                <span className="ini">YOTEL</span>
                <span className="nm">Enterprise · Global</span>
              </span>
            </div>
            <div className="bfeat-body">
              <span className="feat-badge">
                <i></i>Client success
              </span>
              <h2>
                Yotel Group: enhancing growth and insight with Optimiser CRM
              </h2>
              <div className="cs-stats">
                <div className="st">
                  <b>Global</b>
                  <span>multi-property rollout</span>
                </div>
                <div className="st">
                  <b>1</b>
                  <span>connected platform</span>
                </div>
                <div className="st">
                  <b>360°</b>
                  <span>guest &amp; sales view</span>
                </div>
              </div>
              <div className="cs-chips">
                <span className="cs-chip">Enterprise / Group</span>
                <span className="cs-chip">Global</span>
                <span className="cs-chip">Optimiser CRM</span>
              </div>
              <span className="btn btn-pri">
                Read the story <span className="arr">→</span>
              </span>
            </div>
          </a>
        </div>
      </section>

      {/* ============ MORE STORIES ============ */}
      <section
        className="sec"
        id="stories"
        style={{ paddingTop: "20px" }}
      >
        <div className="wrap">
          <div className="sec-head rv" style={{ marginBottom: "36px" }}>
            <span className="eyebrow">More stories</span>
            <h2>
              Growth, in their <span className="grad-txt">own words</span>
            </h2>
          </div>

          <div
            className="bgrid"
            style={{ gridTemplateColumns: "repeat(2,1fr)" }}
          >
            {/* ITM card */}
            <a className="bcard rv" href="#">
              <div
                className="bphoto ut-com"
                style={{ aspectRatio: "16/9" }}
              >
                <span className="cat">Membership</span>
                <span className="cs-logo">
                  <span className="ini">ITM</span>
                  <span className="nm">United Kingdom</span>
                </span>
              </div>
              <div className="bc-body">
                <div
                  className="cs-chips"
                  style={{ marginBottom: "14px" }}
                >
                  <span className="cs-chip">Membership Org</span>
                  <span className="cs-chip">United Kingdom</span>
                  <span className="cs-chip">CRM + Touchpoint</span>
                </div>
                <h3>
                  Transforming membership, communication &amp; event management
                  for ITM
                </h3>
                <p>
                  How ITM unified member records, communications and events on
                  one platform — replacing disconnected tools with a single
                  source of truth.
                </p>
                <span className="cs-read">
                  Read the story{" "}
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

            {/* YOTEL card */}
            <a className="bcard rv" href="/yotel-case-study">
              <div
                className="bphoto ut-hos"
                style={{ aspectRatio: "16/9" }}
              >
                <span className="cat">Hospitality</span>
                <span className="cs-logo">
                  <span className="ini">YOTEL</span>
                  <span className="nm">Global</span>
                </span>
              </div>
              <div className="bc-body">
                <div
                  className="cs-chips"
                  style={{ marginBottom: "14px" }}
                >
                  <span className="cs-chip">Enterprise / Group</span>
                  <span className="cs-chip">Global</span>
                  <span className="cs-chip">Optimiser CRM</span>
                </div>
                <h3>
                  Yotel Group: enhancing growth and insight with Optimiser CRM
                </h3>
                <p>
                  A fast-growing, tech-led hotel group brings sales, guests and
                  revenue insight together — and scales it across properties
                  worldwide.
                </p>
                <span className="cs-read">
                  Read the story{" "}
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

          {/* Trusted by */}
          <div className="trust rv" style={{ marginTop: "72px" }}>
            <p className="tlabel">Trusted by teams across industries</p>
            <div className="trust-row">
              <span className="tl">YOTEL</span>
              <span className="tl">ITM</span>
              <span className="tl">Blue Orchid</span>
              <span className="tl">WCSM</span>
              <span className="tl">WCE</span>
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
                Ready to write your{" "}
                <span className="grad-txt">success story?</span>
              </h2>
              <p>
                Start your 30-day free trial today. One powerful platform,
                simple to use, comprehensive — and no credit card required.
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
