import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GsapLenis from "@/components/GsapLenis";
import Animations from "./Animations";
import "./styles.css";

export const metadata = {
  title: "Marketing Suite — Marketing Automation Software | Optimiser",
  description:
    "Optimiser Marketing Suite — AI marketing automations, responsive email campaigns, customer segmentation and integrated CRM analytics on one platform.",
};

export default function MarketingSuitePage() {
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
        <div className="whero-grid-bg"></div>
        <div className="wrap">
          <div className="whero-grid">
            <div>
              <span className="eyebrow rv">Marketing Suite · Automation</span>
              <h1 className="rv">
                Marketing automations to <span className="grad-txt">achieve more with less.</span>
              </h1>
              <p className="lede rv">
                Save resources and increase productivity through AI automations — with sales and
                marketing data united for an optimised customer journey.
              </p>
              <ul className="hero-points rv">
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Save resources and increase productivity through AI automations
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Unite sales and marketing data for an optimised customer journey
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  Analytics for insight into demographics, funnels, leads and mailers
                </li>
                <li>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  A/B testing to discover the formula for successful campaigns
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
                  <span className="url">app.optimiser.com/campaigns/summer-launch</span>
                </div>
                <div className="ms-mock">
                  <div className="ms-mail">
                    <span className="tag">Draft</span>
                    <span className="tag sent">Sent · 2,431 recipients</span>
                    <div className="hdr">
                      <i></i>
                    </div>
                    <span className="ln" style={{ width: "88%" }}></span>
                    <span className="ln" style={{ width: "72%" }}></span>
                    <span className="ln" style={{ width: "80%" }}></span>
                    <span className="btn-sk"></span>
                    <span className="ms-plane">
                      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
                      </svg>
                    </span>
                  </div>
                  <div className="ms-stats">
                    <div className="ms-stat">
                      <div className="lb">
                        <span>Delivered</span>
                        <b>98%</b>
                      </div>
                      <div className="track">
                        <i style={{ "--w": ".98" } as React.CSSProperties}></i>
                      </div>
                    </div>
                    <div className="ms-stat">
                      <div className="lb">
                        <span>Open rate</span>
                        <b>46%</b>
                      </div>
                      <div className="track">
                        <i style={{ "--w": ".46" } as React.CSSProperties}></i>
                      </div>
                    </div>
                    <div className="ms-stat">
                      <div className="lb">
                        <span>Click-through</span>
                        <b>12%</b>
                      </div>
                      <div className="track">
                        <i style={{ "--w": ".12" } as React.CSSProperties}></i>
                      </div>
                    </div>
                    <div className="ms-seg">
                      <span className="chip" style={{ background: "rgba(123,92,250,.14)", color: "#5A3FD6" }}>Members</span>
                      <span className="chip" style={{ background: "rgba(0,161,223,.14)", color: "#046A93" }}>Repeat guests</span>
                      <span className="chip" style={{ background: "rgba(255,111,91,.14)", color: "#B03A28" }}>New leads</span>
                      <span className="chip" style={{ background: "rgba(25,190,119,.14)", color: "#0B7A4C" }}>VIP</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hero-chip hc1">
                <i style={{ background: "var(--green)" }}></i>Campaign sent · 2,431
              </div>
              <div className="hero-chip hc4">
                <i style={{ background: "var(--violet)" }}></i>A/B test · variant B wins
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ============ PROOF STRIP ============ */}
      <section className="proof" id="overview">
        <div className="wrap">
          <div className="pf rv">
            <span className="pic">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </span>
            <div>
              <h3>AI automations</h3>
              <p>Save time and financial resources — let your team get creative.</p>
            </div>
          </div>
          <div className="pf rv">
            <span className="pic">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M2 7l10 6 10-6" />
              </svg>
            </span>
            <div>
              <h3>Engaging emails</h3>
              <p>Custom layouts, personalisation and A/B testing tailored to your KPI goals.</p>
            </div>
          </div>
          <div className="pf rv">
            <span className="pic">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a10 10 0 0 1 10 10h-10z" />
              </svg>
            </span>
            <div>
              <h3>Smart segmentation</h3>
              <p>Tailor communications to the unique needs of every audience segment.</p>
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
                <div className="f-num">01 / CAMPAIGNS</div>
                <h2>Create fans of your brand with each campaign</h2>
                <p className="f-lead">
                  Optimiser&apos;s powerful Marketing Suite uses automations to supercharge your
                  strategies and grow your business.
                </p>
                <ul className="feat-list">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Understand the way consumers think with detailed data and insights
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Automations save time and resources, letting teams get creative
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Watch quality leads turn into your all-star accounts
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
                  src="https://www.optimiser.com/image/marketing-automation-02.svg"
                  alt="Campaign management in Optimiser Marketing Suite"
                  loading="lazy"
                  decoding="async"
                  style={{ background: "#fff", padding: "22px" }}
                />
              </div>
            </div>

            <div className="frow">
              <div className="rv">
                <div className="f-num">02 / EMAILS</div>
                <h2>Create responsive and engaging emails</h2>
                <p className="f-lead">
                  Design custom email layouts to create engaging campaigns tailored to your KPI
                  goals.
                </p>
                <ul className="feat-list">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Personalise emails according to unique customer segments
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    A/B testing to discover the formula for successful mailers
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Feedback reports on your CTR, bounce rate and conversions
                  </li>
                </ul>
              </div>
              <div className="f-vis rv-r">
                <div className="f-glow"></div>
                <div className="plat-bar">
                  <i className="d r"></i>
                  <i className="d y"></i>
                  <i className="d g"></i>
                  <span className="url">app.optimiser.com/email-builder</span>
                </div>
                <img
                  src="https://www.optimiser.com/image/marketing-automation-03.png"
                  alt="Email builder in Optimiser"
                  loading="lazy"
                  decoding="async"
                  style={{ background: "#fff", padding: "22px" }}
                />
              </div>
            </div>

            <div className="frow">
              <div className="rv">
                <div className="f-num">03 / SEGMENTATION</div>
                <h2>Relevant and engaging customer segmentation</h2>
                <p className="f-lead">
                  Unite marketing with sales for a cohesive, customer-oriented approach to
                  prospect onboarding.
                </p>
                <ul className="feat-list">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Cloud-based pipeline targets campaigns at any point of the funnel
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Build and organise customer segments with ease
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Tailor communications to the unique needs of your audience
                  </li>
                </ul>
              </div>
              <div className="f-vis rv-r">
                <div className="f-glow"></div>
                <div className="plat-bar">
                  <i className="d r"></i>
                  <i className="d y"></i>
                  <i className="d g"></i>
                  <span className="url">app.optimiser.com/segments</span>
                </div>
                <img
                  src="https://www.optimiser.com/image/marketing-automation-04.svg"
                  alt="Customer segmentation in Optimiser"
                  loading="lazy"
                  decoding="async"
                  style={{ background: "#fff", padding: "22px" }}
                />
              </div>
            </div>

            <div className="frow">
              <div className="rv">
                <div className="f-num">04 / ANALYTICS</div>
                <h2>Optimiser&apos;s integrated CRM and analytics</h2>
                <p className="f-lead">
                  Bridge the gap between sales and marketing by collating all customer cycle data
                  in one place.
                </p>
                <ul className="feat-list">
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    A leak-free user journey that captures even more customers
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Data-driven insights from your client database
                  </li>
                  <li>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Evolve your marketing strategies with every campaign
                  </li>
                </ul>
              </div>
              <div className="f-vis rv-r">
                <div className="f-glow"></div>
                <div className="plat-bar">
                  <i className="d r"></i>
                  <i className="d y"></i>
                  <i className="d g"></i>
                  <span className="url">app.optimiser.com/analytics</span>
                </div>
                <img
                  src="https://www.optimiser.com/image/marketing-automation-05.svg"
                  alt="Marketing analytics in Optimiser"
                  loading="lazy"
                  decoding="async"
                  style={{ background: "#fff", padding: "22px" }}
                />
              </div>
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
              <p>Everything you&apos;re wondering before you launch.</p>
              <a
                className="btn btn-gho"
                href="https://www.optimiser.com/faq"
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
                  What does Marketing Suite mean?
                  <span className="pl">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="fa-body">
                  Marketing Suite is a collection of software tools for managing marketing
                  resources, budget and campaigns. Integrated with CRM, the suite allows you to
                  create customer-oriented marketing targeted towards unique audience
                  demographics.
                </p>
              </details>
              <details className="faq-item">
                <summary>
                  Who needs marketing automation software?
                  <span className="pl">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="fa-body">
                  Businesses of all sizes, from SMEs to enterprises, can benefit from marketing
                  automations. By reducing resources wasted on false leads and non-tailored
                  marketing, your team will find increased ROI and stronger brand relationships
                  in both B2B and B2C campaigns.
                </p>
              </details>
              <details className="faq-item">
                <summary>
                  What is a marketing automation system and how is it used?
                  <span className="pl">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="fa-body">
                  While there are many types of marketing automation software available, every
                  system helps you manage your marketing assets: clean and analyse data,
                  distribute resources where they are needed, and eliminate repetitive tasks.
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
                Supercharge your marketing with <span className="grad-txt">one platform</span>
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
