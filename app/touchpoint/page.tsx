import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GsapLenis from "@/components/GsapLenis";
import Animations from "./Animations";
import "./styles.css";

export const metadata = {
  title: "Touchpoint — Website Builder with Integrated CRM | Optimiser",
  description:
    "Optimiser Touchpoint is more than a website builder — create, manage and grow your business online with an integrated CRM platform.",
};

export default function TouchpointPage() {
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
      <header className="whero">
        <div className="aur aur-1"></div>
        <div className="whero-grid-bg"></div>
        <div className="wrap">
          <div className="whero-grid">
            <div>
              <span className="eyebrow rv">Touchpoint · Website Builder</span>
              <h1 className="rv">
                More than just a <span className="grad-txt">website builder.</span>
              </h1>
              <p className="lede rv">
                Build your presence online and grow your business with Touchpoint — a simple,
                drag-and-drop website builder powered by the full Optimiser CRM platform.
              </p>
              <ul className="hero-points rv">
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Design stunning websites that look great on every device
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  No coding or design knowledge needed — drag, drop, publish
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Every visitor flows straight into your CRM and pipeline
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Built-in SEO and social tools to boost your visibility
                </li>
              </ul>
              <div className="whero-cta rv">
                <a className="btn btn-pri" href="/free-crm">
                  Try for free <span className="arr">→</span>
                </a>
                <a className="btn btn-gho" href="#how">
                  See how it works
                </a>
              </div>
              <div className="whero-note rv">
                <i></i>30-day free trial — <b>no credit card required.</b>
              </div>
            </div>
            <div className="hero-shot rv-r">
              <div className="hero-shot-glow"></div>
              <div className="hero-shot-frame">
                <div className="plat-bar">
                  <i className="d r"></i>
                  <i className="d y"></i>
                  <i className="d g"></i>
                  <span className="url">yourbusiness.com</span>
                </div>
                <img
                  src="https://www.optimiser.com/image/ezgif-5-ef9edc1821.webp"
                  alt="Website built with Optimiser Touchpoint shown in a browser"
                  decoding="async"
                  fetchPriority="high"
                />
              </div>
              <div className="hero-chip hc1">
                <i style={{ background: "var(--green)" }}></i>Site published
              </div>
              <div className="hero-chip hc4">
                <i style={{ background: "var(--cyan)" }}></i>Enquiry → CRM · synced
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ============ CLIENT LOGOS ============ */}
      <section className="lstrip">
        <div className="wrap rv">
          <p className="tlabel">Websites powered by Touchpoint</p>
          <div className="lrow">
            <span className="lo">Blue Orchid Hotels</span>
            <span className="lo">St Andrew&apos;s Club</span>
            <span className="lo">Central London Alliance</span>
            <span className="lo">New Bridge</span>
            <span className="lo">YOTEL</span>
            <span className="lo">Fox Harb&apos;r Resort</span>
          </div>
        </div>
      </section>

      {/* ============ PROOF STRIP ============ */}
      <section className="proof" id="overview">
        <div className="wrap">
          <div className="pf rv">
            <span className="pic">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                <path d="M12 19l7-7 3 3-7 7-3-3z" />
                <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
                <path d="M2 2l7.586 7.586" />
                <circle cx="11" cy="11" r="2" />
              </svg>
            </span>
            <div>
              <h3>Freedom to create</h3>
              <p>Design and manage a website that looks great everywhere — no code, no agency.</p>
            </div>
          </div>
          <div className="pf rv">
            <span className="pic">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                <circle cx="18" cy="18" r="3" />
                <circle cx="6" cy="6" r="3" />
                <path d="M6 9v6a3 3 0 0 0 3 3h6" />
                <path d="M15 6h3a3 3 0 0 1 3 3" />
              </svg>
            </span>
            <div>
              <h3>Powered by Optimiser CRM</h3>
              <p>Contacts, accounts and pipeline connect natively — your website feeds your business.</p>
            </div>
          </div>
          <div className="pf rv">
            <span className="pic">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                <path d="M3 3v18h18" />
                <path d="M7 14l3-3 3 3 5-6" />
              </svg>
            </span>
            <div>
              <h3>Promote and grow</h3>
              <p>AI-enabled campaigns and analytics turn visitors into loyal, repeat customers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FEATURE ROWS ============ */}
      <section className="sec" id="how">
        <div className="wrap">
          <div className="crm-stack">
            <div className="frow">
              <div className="rv">
                <div className="f-num">01 / CREATE</div>
                <h2>Freedom to create and manage websites</h2>
                <p className="f-lead">
                  Create a stunning website that looks great on all devices, then manage and
                  promote it with the power of one platform.
                </p>
                <ul className="feat-list">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Responsive designs that adapt to every screen size
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Easy drag-and-drop editing — no coding required
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Publish on your own domain in minutes
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Templates matched to your industry, fully customisable
                  </li>
                </ul>
              </div>
              <div className="f-vis rv-r">
                <div className="f-glow"></div>
                <div className="plat-bar">
                  <i className="d r"></i>
                  <i className="d y"></i>
                  <i className="d g"></i>
                  <span className="url">touchpoint.optimiser.com/builder</span>
                </div>
                <img
                  src="https://www.optimiser.com/image/touchbuilder.svg"
                  alt="Touchpoint drag-and-drop website builder"
                  loading="lazy"
                  decoding="async"
                  style={{ background: "#fff", padding: "22px" }}
                />
              </div>
            </div>

            <div className="frow">
              <div className="rv">
                <div className="f-num">02 / CONNECT</div>
                <h2>Powered by the Optimiser CRM platform</h2>
                <p className="f-lead">
                  Connect your website with Optimiser to manage contacts, accounts and sales
                  pipeline — and unlock the full potential of your business.
                </p>
                <ul className="feat-list">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Web forms feed enquiries straight into your pipeline
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Every visitor interaction lands on the contact record
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    One login for website, sales and marketing
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Skyrocket team productivity with shared data
                  </li>
                </ul>
              </div>
              <div className="f-vis rv-r">
                <div className="f-glow"></div>
                <div className="plat-bar">
                  <i className="d r"></i>
                  <i className="d y"></i>
                  <i className="d g"></i>
                  <span className="url">app.optimiser.com/contacts</span>
                </div>
                <img
                  src="/assets/list-view.webp"
                  alt="Website enquiries flowing into the Optimiser CRM contact list"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>

            <div className="frow">
              <div className="rv">
                <div className="f-num">03 / GROW</div>
                <h2>Promote and grow your business</h2>
                <p className="f-lead">
                  Engage customers with targeted campaigns that cater to their specific needs —
                  and grow sales with the AI-enabled, integrated platform.
                </p>
                <ul className="feat-list">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Multi-channel campaigns built from real visitor behaviour
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    In-built SEO and social media tools for visibility
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Easy-to-read graphs for quick, informed decisions
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Nurture existing customers into loyal relationships
                  </li>
                </ul>
              </div>
              <div className="f-vis rv-r">
                <div className="f-glow"></div>
                <div className="plat-bar">
                  <i className="d r"></i>
                  <i className="d y"></i>
                  <i className="d g"></i>
                  <span className="url">app.optimiser.com/campaigns</span>
                </div>
                <img
                  src="/assets/kanban-view.webp"
                  alt="Campaign pipeline in Optimiser"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ INDUSTRIES ============ */}
      <section className="sec" id="industries" style={{ paddingTop: "0" }}>
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
          <div className="ind-grid">
            <article className="ind rv">
              <span className="ic" style={{ background: "rgba(123,92,250,.12)", color: "#7B5CFA" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </span>
              <h3>Membership Organisations</h3>
              <p>Implement changes quickly to grow and engage with your membership base.</p>
            </article>
            <article className="ind rv">
              <span className="ic" style={{ background: "rgba(0,161,223,.12)", color: "var(--blue)" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M3 21h18M6 21V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14M10 9h1M13 9h1M10 12h1M13 12h1M10 15h1M13 15h1" />
                </svg>
              </span>
              <h3>Travel &amp; Hospitality</h3>
              <p>An excellent website plays a vital role in a hospitality business&apos;s ability to entice.</p>
            </article>
            <article className="ind rv">
              <span className="ic" style={{ background: "rgba(255,111,91,.12)", color: "var(--coral)" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="9" cy="21" r="1.5" />
                  <circle cx="19" cy="21" r="1.5" />
                  <path d="M2 3h3l2.7 12.4a2 2 0 0 0 2 1.6h8.9a2 2 0 0 0 2-1.6L22 7H6" />
                </svg>
              </span>
              <h3>Retail &amp; E-commerce</h3>
              <p>A visually appealing store with integrated CRM to improve conversion rate.</p>
            </article>
            <article className="ind rv">
              <span className="ic" style={{ background: "rgba(25,190,119,.12)", color: "var(--green)" }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 21C7 17 2 13.5 2 8.8A4.8 4.8 0 0 1 6.8 4c2 0 3.9 1 5.2 2.9A6.2 6.2 0 0 1 17.2 4 4.8 4.8 0 0 1 22 8.8c0 4.7-5 8.2-10 12.2z" />
                </svg>
              </span>
              <h3>Wellness</h3>
              <p>Mobile-friendly websites that look professional, load quickly and are easy to navigate.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ============ WHY TOUCHPOINT ============ */}
      <section className="sec why" id="why-touchpoint">
        <div className="wrap">
          <div className="sec-head rv">
            <span className="eyebrow">What Touchpoint does for you</span>
            <h2>
              Your website, working as hard <span className="grad-txt">as you do</span>
            </h2>
            <p>
              Set up your business online, engage visitors, convert more customers — Touchpoint
              gives you the freedom to create, design and manage your online presence.
            </p>
          </div>
          <div className="vgrid">
            <article className="vcard rv">
              <h3>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                  <path d="M3 11l18-5v12L3 14v-3z" />
                  <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
                </svg>
                Personalised campaigns
              </h3>
              <p>
                Create targeted multi-channel campaigns based on how people interact with your
                business. Easy to build, launch and measure.
              </p>
            </article>
            <article className="vcard rv">
              <h3>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                </svg>
                Customer data that sells
              </h3>
              <p>
                Boost conversion and manage higher enquiry volume with the pipeline. Nurture
                existing customers into loyal, repeat business.
              </p>
            </article>
            <article className="vcard rv">
              <h3>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                  <path d="M12 3l2.5 5 5.5.8-4 3.9.9 5.5L12 21l-4.9-2.8.9-5.5-4-3.9L9.5 8z" />
                </svg>
                Customise with ease
              </h3>
              <p>
                It&apos;s your business — design it the way you want with drag and drop.
                Customise everything the way you like it, and your customers want it.
              </p>
            </article>
            <article className="vcard rv">
              <h3>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                  <path d="M3 3v18h18" />
                  <path d="M7 14l3-3 3 3 5-6" />
                </svg>
                Holistic business view
              </h3>
              <p>
                A complete view at a glance with easy-to-understand graphs and charts. Make
                quick, informed decisions with reliable visual data.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ============ STEPS ============ */}
      <section className="sec" id="steps" style={{ paddingTop: "40px" }}>
        <div className="wrap">
          <div className="sec-head rv">
            <span className="eyebrow">Create websites in easy steps</span>
            <h2>
              From idea to online, <span className="grad-txt">in an afternoon</span>
            </h2>
            <p>
              Build a website for your business, your portfolio, or yourself — and connect it to
              the platform that runs the rest of your day.
            </p>
          </div>
          <div className="tp-steps">
            <div className="tstep rv">
              <h3>Pick your design</h3>
              <p>Choose a template that matches your industry or passion.</p>
            </div>
            <div className="tstep rv">
              <h3>Make it yours</h3>
              <p>Add content just the way you like it with easy drag and drop.</p>
            </div>
            <div className="tstep rv">
              <h3>Publish</h3>
              <p>Go live on your own domain name — no hosting headaches.</p>
            </div>
            <div className="tstep rv">
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
            <div className="sec-head rv" style={{ marginBottom: "0" }}>
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
                  has become essential to gain credibility, find new customers and retain
                  existing ones.
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
