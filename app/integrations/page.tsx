import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GsapLenis from "@/components/GsapLenis";
import Animations from "./Animations";
import "./styles.css";

export const metadata = {
  title: "Integrations — Connect Your Tools | Optimiser",
  description:
    "Integrate third-party apps with Optimiser — G-Suite, Outlook, Oracle Opera PMS and Shopify. Seamless, automated data flow from a single login.",
};

export default function IntegrationsPage() {
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
            <span className="eyebrow rv">Integrations</span>
            <h1 className="rv">
              One strong, flexible <span className="grad-txt">digital platform.</span>
            </h1>
            <p className="lede rv">
              Integrate Optimiser with your legacy software — a seamless, automated flow of
              accurate data between systems, from a single login.
            </p>
            <div
              className="t2-cta rv"
              style={{ display: "flex", gap: "14px", flexWrap: "wrap", justifyContent: "center" }}
            >
              <a className="btn btn-pri" href="/free-crm">
                Try for free <span className="arr">→</span>
              </a>
              <a className="btn btn-gho" href="#apps">
                Browse integrations
              </a>
            </div>
          </div>
          <div className="ig-flow rv">
            <div className="ig-col l">
              <div className="ig-app">
                <span className="tile" style={{ background: "linear-gradient(135deg,#4285F4,#34A853)" }}>
                  G
                </span>
                G-Suite &amp; Gmail
                <span className="pulse"></span>
              </div>
              <div className="ig-app">
                <span className="tile" style={{ background: "linear-gradient(135deg,#0078D4,#00A1DF)" }}>
                  O
                </span>
                Microsoft Outlook
                <span className="pulse"></span>
              </div>
            </div>
            <div className="ig-hub">
              <img src="/assets/optimiser-icon.svg" alt="Optimiser" />
            </div>
            <div className="ig-col r">
              <div className="ig-app">
                <span className="tile" style={{ background: "linear-gradient(135deg,#C74634,#FF6F5B)" }}>
                  Op
                </span>
                Oracle Opera PMS
                <span className="pulse"></span>
              </div>
              <div className="ig-app">
                <span className="tile" style={{ background: "linear-gradient(135deg,#5E8E3E,#95BF47)" }}>
                  S
                </span>
                Shopify
                <span className="pulse"></span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ============ INTEGRATION CARDS ============ */}
      <section className="sec" id="apps">
        <div className="wrap">
          <div className="sec-head rv">
            <span className="eyebrow">Connect your everyday software</span>
            <h2>
              Optimiser plays well <span className="grad-txt">with others</span>
            </h2>
            <p>
              The full software suite integrates with the most important business tools —
              automations keep data accurate and flowing both ways.
            </p>
          </div>
          <div className="ig-grid">
            <article className="ig-card rv">
              <span className="tile" style={{ background: "linear-gradient(135deg,#4285F4,#34A853)" }}>
                G
              </span>
              <h3>G-Suite Integration</h3>
              <p>
                Implement seamless automated data flow between G-Suite and Optimiser — manage your
                CRM and emails from a single tab.
              </p>
              <span className="more">
                Know more{" "}
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </article>
            <article className="ig-card rv">
              <span className="tile" style={{ background: "linear-gradient(135deg,#0078D4,#00A1DF)" }}>
                O
              </span>
              <h3>Optimiser Outlook Suite</h3>
              <p>
                Accelerate productivity with seamless data transfer between Outlook and Optimiser
                — appointments and contacts stay in sync.
              </p>
              <span className="more">
                Know more{" "}
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </article>
            <article className="ig-card rv">
              <span className="tile" style={{ background: "linear-gradient(135deg,#C74634,#FF6F5B)" }}>
                Op
              </span>
              <h3>Oracle Opera PMS Integration</h3>
              <p>
                Rejuvenate hospitality with Optimiser CRM and Oracle&apos;s Opera Property
                Management System working as one.
              </p>
              <span className="more">
                Know more{" "}
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </article>
            <article className="ig-card rv">
              <span className="tile" style={{ background: "linear-gradient(135deg,#5E8E3E,#95BF47)" }}>
                S
              </span>
              <h3>Optimiser Shopify Suite</h3>
              <p>
                Integrate your Shopify store with Optimiser CRM and skyrocket the possibilities of
                your online store.
              </p>
              <span className="more">
                Know more{" "}
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </article>
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
                Connect your tools to <span className="grad-txt">one platform</span>
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
