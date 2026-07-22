import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GsapLenis from "@/components/GsapLenis";
import Animations from "./Animations";
import "./styles.css";

export const metadata = {
  title: "Data Compliance | Optimiser",
  description:
    "Optimiser Data Compliance — GDPR alignment, security controls, hosting, encryption and data processing commitments.",
};

export default function DataCompliancePage() {
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
      <header className="ig-hero" style={{ paddingBottom: "48px" }}>
        <div className="wrap">
          <div className="ig-center">
            <span className="eyebrow rv">Legal</span>
            <h1 className="rv" style={{ fontSize: "clamp(30px,4vw,48px)" }}>
              Data <span className="grad-txt">Compliance</span>
            </h1>
            <p className="lede rv">How the Optimiser platform keeps your data secure, compliant and under your control.</p>
          </div>
        </div>
      </header>

      <section className="sec" style={{ paddingTop: "56px" }}>
        <div className="wrap">
          <div className="lg-wrap">
            <nav className="lg-toc rv" aria-label="Contents">
              <a href="#s1">GDPR alignment</a>
              <a href="#s2">Hosting and encryption</a>
              <a href="#s3">Access control</a>
              <a href="#s4">Data residency and portability</a>
              <a href="#s5">Sub-processors</a>
              <a href="#s6">Incident response</a>
              <a href="#s7">Questions</a>
            </nav>
            <article className="lg-doc rv">
              <span className="meta">Last updated · July 2026</span>
              <h2 id="s1">1. GDPR alignment</h2>
              <p>Optimiser processes customer content solely as a processor on your documented instructions, in line with UK and EU GDPR. Data processing agreements are available for all subscriptions.</p>
              <h2 id="s2">2. Hosting and encryption</h2>
              <p>The platform is hosted on secure cloud infrastructure with encryption in transit and at rest. Automatic server updates ensure you are always protected by the latest security.</p>
              <h2 id="s3">3. Access control</h2>
              <ul><li>Role-based permissions and customisable folder access per user.</li><li>Two-factor verification for files shared with third parties.</li><li>Full audit trail of record access and changes.</li></ul>
              <h2 id="s4">4. Data residency and portability</h2>
              <p>Customer data is stored in-region where available and is exportable in standard formats at any time — your data remains yours.</p>
              <h2 id="s5">5. Sub-processors</h2>
              <p>A current list of sub-processors, their roles and locations is available on request. All are bound by data processing agreements with equivalent protections.</p>
              <h2 id="s6">6. Incident response</h2>
              <p>Documented incident response procedures ensure affected customers are notified without undue delay, with remediation steps and root-cause analysis.</p>
              <h2 id="s7">7. Questions</h2>
              <p>For compliance documentation, DPAs or security questionnaires, contact us via the <a href="/contact-us">contact page</a>.</p>
              <div className="lg-note"><b>Note:</b> this page is a design recreation. Replace the copy above with the official legal text from your legal team before publishing.</div>
            </article>
          </div>
        </div>
      </section>

      {/* ============ CTA (omitted on legal pages) ============ */}
      <Footer />
    </>
  );
}
