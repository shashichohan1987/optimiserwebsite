import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GsapLenis from "@/components/GsapLenis";
import Animations from "./Animations";
import "./styles.css";

export const metadata = {
  title: "Touchpoint — Build, Manage & Grow Your Website | Optimiser",
  description:
    "Optimiser Touchpoint is more than a website builder — create, manage and grow your business online with an integrated CRM platform.",
};

export default function TouchpointV2Page() {
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
      <header className="t2-hero">
        <div className="wrap">
          <div className="t2-hero-center">
            <span className="eyebrow rv">Touchpoint · Website Builder</span>
            <h1 className="rv">
              Your website, built by you. <span className="grad-txt">Run by one platform.</span>
            </h1>
            <p className="lede rv">
              Drag, drop and publish a website that looks great everywhere — with every visitor,
              form and enquiry flowing straight into the Optimiser CRM behind it.
            </p>
            <div className="t2-cta rv">
              <a className="btn btn-pri" href="/free-crm">
                Try for free <span className="arr">→</span>
              </a>
              <a className="btn btn-gho" href="#pillars">
                See how it works
              </a>
            </div>
            <span className="t2-note rv">
              <i></i>30-day free trial — <b>&nbsp;no credit card required</b>
            </span>
          </div>

          <div className="t2-build rv">
            <div className="t2-build-glow"></div>
            <div className="t2-frame">
              <div className="plat-bar">
                <i className="d r"></i>
                <i className="d y"></i>
                <i className="d g"></i>
                <span className="url">yourbusiness.com — Touchpoint editor</span>
              </div>
              <div className="t2-body">
                <div className="t2-side">
                  <span className="lbl">Sections</span>
                  <span className="t2-block">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="5" rx="1.5" />
                    </svg>
                    Navigation
                  </span>
                  <span className="t2-block">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="16" rx="2" />
                      <path d="M3 15l5-5 4 4 3-3 6 6" />
                    </svg>
                    Hero banner
                  </span>
                  <span className="t2-block">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="7" height="7" rx="1.5" />
                      <rect x="14" y="4" width="7" height="7" rx="1.5" />
                      <rect x="3" y="15" width="7" height="7" rx="1.5" />
                      <rect x="14" y="15" width="7" height="7" rx="1.5" />
                    </svg>
                    Feature grid
                  </span>
                  <span className="t2-block">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="M7 10h6M7 14h10" />
                    </svg>
                    Enquiry form
                  </span>
                  <span className="t2-block">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 3l2.5 5 5.5.8-4 3.9.9 5.5L12 21l-4.9-2.8.9-5.5-4-3.9L9.5 8z" />
                    </svg>
                    Testimonials
                  </span>
                </div>
                <div className="t2-canvas">
                  <div className="t2-sk nav">
                    <i></i>
                    <i></i>
                    <i></i>
                    <i></i>
                  </div>
                  <div className="t2-sk hero">
                    <i></i>
                    <i></i>
                    <b></b>
                  </div>
                  <div className="t2-cols">
                    <div className="t2-sk col">
                      <i></i>
                      <b></b>
                      <b></b>
                    </div>
                    <div className="t2-sk col">
                      <i></i>
                      <b></b>
                      <b></b>
                    </div>
                    <div className="t2-sk col">
                      <i></i>
                      <b></b>
                      <b></b>
                    </div>
                  </div>
                  <div className="t2-dz" aria-hidden="true">
                    <span className="hint">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                      Drop section here
                    </span>
                    <span className="dropped">
                      <i></i>
                      <i></i>
                      <b></b>
                    </span>
                  </div>
                </div>
                <div className="t2-ghost" aria-hidden="true">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M7 10h6M7 14h10" />
                  </svg>
                  Enquiry form
                  <span className="cur">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#fff" stroke="currentColor" strokeWidth="1.6">
                      <path d="M5 3l14 9-6.5 1.5L15 20l-3 1.2-2.5-6.5L5 18V3z" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="t2-drag d1">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 9l-3 3 3 3M9 5l3-3 3 3M15 19l-3 3-3-3M19 9l3 3-3 3M2 12h20M12 2v20" />
              </svg>
              Drag to reorder
            </div>
            <div className="t2-drag d2">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M20 6L9 17l-5-5" />
              </svg>
              Enquiry → CRM · synced
            </div>
          </div>
        </div>
      </header>

      {/* ============ LOGO MARQUEE ============ */}
      <section className="t2-mq">
        <p className="tl">Websites powered by Touchpoint</p>
        <div className="t2-mq-track">
          <span className="lo">Blue Orchid Hotels</span>
          <span className="lo">St Andrew&apos;s Club</span>
          <span className="lo">Central London Alliance</span>
          <span className="lo">New Bridge</span>
          <span className="lo">YOTEL</span>
          <span className="lo">Fox Harb&apos;r Resort</span>
          <span className="lo">Blue Orchid Hotels</span>
          <span className="lo">St Andrew&apos;s Club</span>
          <span className="lo">Central London Alliance</span>
          <span className="lo">New Bridge</span>
          <span className="lo">YOTEL</span>
          <span className="lo">Fox Harb&apos;r Resort</span>
        </div>
      </section>

      {/* ============ SHOWCASE ============ */}
      <section className="sec" id="pillars">
        <div className="wrap">
          <div className="sec-head rv">
            <span className="eyebrow">One builder, three jobs</span>
            <h2>
              Create. Connect. <span className="grad-txt">Grow.</span>
            </h2>
            <p>
              Touchpoint is more than a website builder — it&apos;s the front door to the platform
              that runs the rest of your business.
            </p>
          </div>
          <div className="t2-show rv">
            <div id="showList" role="tablist" aria-label="Touchpoint pillars">
              <div className="show-item on" role="tab" aria-selected="true">
                <h3>
                  <span className="n">01</span>Freedom to create
                </h3>
                <p>
                  Design a stunning, responsive website with easy drag and drop — no coding or
                  design knowledge needed. Publish on your own domain in minutes.
                </p>
                <span className="bar">
                  <i></i>
                </span>
              </div>
              <div className="show-item" role="tab" aria-selected="false">
                <h3>
                  <span className="n">02</span>Powered by Optimiser CRM
                </h3>
                <p>
                  Web forms feed enquiries straight into your pipeline, and every visitor
                  interaction lands on the contact record. One login for website, sales and
                  marketing.
                </p>
                <span className="bar">
                  <i></i>
                </span>
              </div>
              <div className="show-item" role="tab" aria-selected="false">
                <h3>
                  <span className="n">03</span>Promote and grow
                </h3>
                <p>
                  Engage customers with AI-enabled, targeted campaigns built from real visitor
                  behaviour — with in-built SEO and social tools to boost visibility.
                </p>
                <span className="bar">
                  <i></i>
                </span>
              </div>
            </div>
            <div id="showStage">
              <div className="panel on">
                <div className="plat-bar">
                  <i className="d r"></i>
                  <i className="d y"></i>
                  <i className="d g"></i>
                  <span className="url">touchpoint.optimiser.com/builder</span>
                </div>
                <img
                  id="touchBuilderImg"
                  src="https://www.optimiser.com/image/touchbuilder.svg"
                  alt="Touchpoint drag-and-drop builder"
                  loading="lazy"
                  style={{ background: "#fff", padding: "22px" }}
                />
              </div>
              <div className="panel">
                <div className="plat-bar">
                  <i className="d r"></i>
                  <i className="d y"></i>
                  <i className="d g"></i>
                  <span className="url">app.optimiser.com/contacts</span>
                </div>
                <img src="/assets/list-view.webp" alt="Enquiries flowing into the Optimiser CRM" loading="lazy" />
              </div>
              <div className="panel">
                <div className="plat-bar">
                  <i className="d r"></i>
                  <i className="d y"></i>
                  <i className="d g"></i>
                  <span className="url">app.optimiser.com/campaigns</span>
                </div>
                <img src="/assets/kanban-view.webp" alt="Campaign pipeline in Optimiser" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="t2-stats rv">
            <div className="t2-stat">
              <b>0</b>
              <span>lines of code required</span>
            </div>
            <div className="t2-stat">
              <b>30</b>
              <span>days free — no credit card</span>
            </div>
            <div className="t2-stat">
              <b>12+</b>
              <span>products on one platform</span>
            </div>
            <div className="t2-stat">
              <b>1</b>
              <span>login for website, sales &amp; marketing</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============ INDUSTRIES (BENTO) ============ */}
      <section className="sec" id="industries" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="sec-head rv">
            <span className="eyebrow">Unlock more as you grow</span>
            <h2>
              Ideal for businesses <span className="grad-txt">of every size</span>
            </h2>
            <p>
              In-built tools to boost your online visibility — with features tuned to the way
              your industry works.
            </p>
          </div>
          <div className="t2-bento">
            <article className="t2-b lead rv">
              <span className="ic">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M3 21h18M6 21V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14M10 9h1M13 9h1M10 12h1M13 12h1M10 15h1M13 15h1" />
                </svg>
              </span>
              <h3>Travel &amp; Hospitality</h3>
              <p>
                An excellent website plays a vital role in a hospitality business&apos;s ability
                to entice guests — from first look to booked enquiry, all on one platform.
              </p>
            </article>
            <article className="t2-b rv">
              <span className="ic" style={{ background: "rgba(123,92,250,.12)", color: "var(--violet)" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </span>
              <h3>Membership Organisations</h3>
              <p>Implement changes quickly to grow and engage with your membership base.</p>
            </article>
            <article className="t2-b rv">
              <span className="ic" style={{ background: "rgba(255,111,91,.12)", color: "var(--coral)" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="9" cy="21" r="1.5" />
                  <circle cx="19" cy="21" r="1.5" />
                  <path d="M2 3h3l2.7 12.4a2 2 0 0 0 2 1.6h8.9a2 2 0 0 0 2-1.6L22 7H6" />
                </svg>
              </span>
              <h3>Retail &amp; E-commerce</h3>
              <p>A visually appealing store with integrated CRM to improve conversion rate.</p>
            </article>
            <article className="t2-b rv">
              <span className="ic" style={{ background: "rgba(25,190,119,.12)", color: "var(--green)" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 21C7 17 2 13.5 2 8.8A4.8 4.8 0 0 1 6.8 4c2 0 3.9 1 5.2 2.9A6.2 6.2 0 0 1 17.2 4 4.8 4.8 0 0 1 22 8.8c0 4.7-5 8.2-10 12.2z" />
                </svg>
              </span>
              <h3>Wellness</h3>
              <p>
                Mobile-friendly websites that look professional, load quickly and are easy to
                navigate.
              </p>
            </article>
            <article className="t2-b rv">
              <span className="ic" style={{ background: "rgba(0,161,223,.12)", color: "var(--blue)" }}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M3 3v18h18" />
                  <path d="M7 14l3-3 3 3 5-6" />
                </svg>
              </span>
              <h3>Small Business</h3>
              <p>
                Get online fast and grow at your own pace — unlock more of the platform as you
                need it.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ============ STEPS ============ */}
      <section className="sec" id="steps" style={{ paddingTop: "20px" }}>
        <div className="wrap">
          <div className="sec-head rv">
            <span className="eyebrow">Create websites in easy steps</span>
            <h2>
              From idea to online, <span className="grad-txt">in an afternoon</span>
            </h2>
          </div>
          <div className="t2-tl rv">
            <div className="t2-step">
              <span className="dot"></span>
              <h3>Pick your design</h3>
              <p>Choose a template that matches your industry or passion.</p>
            </div>
            <div className="t2-step">
              <span className="dot"></span>
              <h3>Make it yours</h3>
              <p>Add content just the way you like it with easy drag and drop.</p>
            </div>
            <div className="t2-step">
              <span className="dot"></span>
              <h3>Publish</h3>
              <p>Go live on your own domain name — no hosting headaches.</p>
            </div>
            <div className="t2-step">
              <span className="dot"></span>
              <h3>Connect the CRM</h3>
              <p>Integrate with Optimiser for seamless operations and productivity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="sec" id="faq" style={{ paddingTop: "40px" }}>
        <div className="wrap">
          <div className="faq-grid">
            <div className="sec-head rv" style={{ marginBottom: 0 }}>
              <span className="eyebrow">FAQ</span>
              <h2>
                Frequently asked <span className="grad-txt">questions</span>
              </h2>
              <p>Everything you&apos;re wondering before you build.</p>
              <a
                className="btn btn-gho"
                href="https://www.optimiser.com/touchpoint-faqs"
                target="_blank"
                rel="noopener"
                style={{ marginTop: "22px" }}
              >
                View all FAQs <span className="arr">→</span>
              </a>
            </div>
            <div className="rv">
              <details className="faq-item" open>
                <summary>
                  How easy is it to make a website?
                  <span className="pl">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="fa-body">
                  Very easy. Touchpoint provides all the tools and freedom to design a website
                  without any knowledge of coding or design. Choose a template, add design
                  features, and publish it to get online.
                </p>
              </details>
              <details className="faq-item">
                <summary>
                  Why does my business need a website?
                  <span className="pl">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="fa-body">
                  More than 90% of consumers look online to find goods and services. A website
                  has become essential to gain credibility, find new customers and retain existing
                  ones.
                </p>
              </details>
              <details className="faq-item">
                <summary>
                  Can someone build it on my behalf?
                  <span className="pl">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="fa-body">
                  Yes — Touchpoint is simple enough that anyone without technical knowledge can
                  build a website for your business, and its DIY approach means you can keep
                  customising as your needs change.
                </p>
              </details>
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
                Take your business online with <span className="grad-txt">one platform</span>
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
