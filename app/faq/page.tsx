import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GsapLenis from "@/components/GsapLenis";
import Animations from "./Animations";
import "./styles.css";

export const metadata = {
  title: "FAQs | Optimiser",
  description:
    "Frequently asked questions about Optimiser — CRM, pricing, onboarding, security, marketing automation and more.",
};

export default function FaqPage() {
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
      <header className="ig-hero" style={{ paddingBottom: "56px" }}>
        <div className="wrap">
          <div className="ig-center">
            <span className="eyebrow rv">FAQ</span>
            <h1 className="rv">
              Frequently asked <span className="grad-txt">questions</span>
            </h1>
            <p className="lede rv">
              Everything you're wondering about the platform, pricing and getting started.
              Can't find your answer? <a href="/contact-us">Contact us</a> — no question is
              too trivial.
            </p>
          </div>
        </div>
      </header>

      {/* ============ QUESTIONS ============ */}
      <section className="sec" id="questions" style={{ paddingTop: "56px" }}>
        <div className="wrap">
          <div className="faqp">
            <div className="grp rv">
              <h2>
                The <span className="grad-txt">platform</span>
              </h2>
              <details className="faq-item" open>
                <summary>
                  What is Optimiser?
                  <span className="pl">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="fa-body">
                  Optimiser is an all-in-one business management platform — CRM, sales,
                  marketing, events, projects and cloud storage under one subscription and
                  one login. Companies of any size use it to increase revenue, enhance
                  processes and deliver tangible results.
                </p>
              </details>
              <details className="faq-item">
                <summary>
                  What does "the Power of One" mean?
                  <span className="pl">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="fa-body">
                  One platform, one subscription, one source of truth. Instead of juggling
                  single-purpose tools, every module — from Pipeline to Marketing Suite to
                  Drive — works on the same live data.
                </p>
              </details>
              <details className="faq-item">
                <summary>
                  Which products does Optimiser offer?
                  <span className="pl">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="fa-body">
                  CRM, Touchpoint (website builder), Sales Suite, Marketing Suite, Workflow
                  Automation, Project Management, Shop Suite, Cloud Computing, Lead
                  Management, Event Management, Sales &amp; Catering, and integrations with
                  G-Suite, Outlook, Oracle Opera PMS and Shopify.
                </p>
              </details>
              <details className="faq-item">
                <summary>
                  Is Optimiser customisable?
                  <span className="pl">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="fa-body">
                  Fully. Custom fields, definable attributes, role-based layouts and a
                  modular subscription — choose only the apps you use, and fine-tune every
                  aspect down to the intricate details.
                </p>
              </details>
            </div>
            <div className="grp rv">
              <h2>
                Pricing &amp; <span className="grad-txt">trial</span>
              </h2>
              <details className="faq-item">
                <summary>
                  How does the free trial work?
                  <span className="pl">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="fa-body">
                  Every plan starts with a 30-day free trial — full features, no credit card
                  required. Keep your data if you subscribe afterwards.
                </p>
              </details>
              <details className="faq-item">
                <summary>
                  How much does Optimiser cost?
                  <span className="pl">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="fa-body">
                  One monthly rate per user with a scalable plan — no complicated costing
                  structures. Clients typically save up to 40% on software subscriptions by
                  consolidating tools. Contact us for a quote tailored to your modules.
                </p>
              </details>
              <details className="faq-item">
                <summary>
                  Is support really free?
                  <span className="pl">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="fa-body">
                  Yes — every client receives free support for as long as they are with us.
                  No hidden tiers, no extra costs.
                </p>
              </details>
            </div>
            <div className="grp rv">
              <h2>
                Getting <span className="grad-txt">started</span>
              </h2>
              <details className="faq-item">
                <summary>
                  How long does onboarding take?
                  <span className="pl">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="fa-body">
                  Clients are onboarded and go live in as few as 3 weeks, guided by a
                  dedicated team — including data transfer from your current systems,
                  tailored training and online tutorials throughout.
                </p>
              </details>
              <details className="faq-item">
                <summary>
                  Can you migrate our existing data?
                  <span className="pl">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="fa-body">
                  Yes. During onboarding, your current databases and all necessary
                  information are transferred to Optimiser's intelligent system by the
                  experienced onboarding team.
                </p>
              </details>
              <details className="faq-item">
                <summary>
                  Does Optimiser work with our email?
                  <span className="pl">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="fa-body">
                  Two-way integrations with G-Suite/Gmail and Microsoft Outlook keep
                  contacts, calendars and email in sync — manage your CRM from a single tab.
                </p>
              </details>
            </div>
            <div className="grp rv">
              <h2>
                Security &amp; <span className="grad-txt">data</span>
              </h2>
              <details className="faq-item">
                <summary>
                  How secure is our data?
                  <span className="pl">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="fa-body">
                  Optimiser is cloud-hosted with automatic security updates, role-based
                  access control and two-factor verification for files shared with third
                  parties. See our Data Compliance page for detail.
                </p>
              </details>
              <details className="faq-item">
                <summary>
                  Where is our data stored?
                  <span className="pl">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="fa-body">
                  On secure cloud infrastructure with live sync — accessible from any device,
                  anywhere in the world, and never shared with third-party hosts.
                </p>
              </details>
              <details className="faq-item">
                <summary>
                  Is Optimiser GDPR compliant?
                  <span className="pl">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <p className="fa-body">
                  Yes — data protection and regulatory compliance are maintained
                  platform-wide. Our Privacy Policy and Data Compliance pages describe how
                  personal data is collected, processed and protected.
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
                Still curious? Try <span className="grad-txt">one platform</span>
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
