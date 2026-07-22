import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GsapLenis from "@/components/GsapLenis";
import Animations from "./Animations";
import "./styles.css";

export const metadata = {
  title: "Privacy Policy | Optimiser",
  description:
    "Optimiser Privacy Policy — how we collect, use and protect personal data.",
};

export default function PrivacyPolicyPage() {
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
              Privacy <span className="grad-txt">Policy</span>
            </h1>
            <p className="lede rv">How Optimiser collects, uses, stores and protects your personal data.</p>
          </div>
        </div>
      </header>

      <section className="sec" style={{ paddingTop: "56px" }}>
        <div className="wrap">
          <div className="lg-wrap">
            <nav className="lg-toc rv" aria-label="Contents">
              <a href="#s1">Who we are</a>
              <a href="#s2">Data we collect</a>
              <a href="#s3">How we use data</a>
              <a href="#s4">Legal bases</a>
              <a href="#s5">Sharing and processors</a>
              <a href="#s6">Retention</a>
              <a href="#s7">Your rights</a>
              <a href="#s8">Contact</a>
            </nav>
            <article className="lg-doc rv">
              <span className="meta">Last updated · July 2026</span>
              <h2 id="s1">1. Who we are</h2>
              <p>Optimiser (&quot;we&quot;, &quot;us&quot;) provides an all-in-one business management platform. This policy explains how we handle personal data when you visit our website, trial or subscribe to our products, or contact our team.</p>
              <h2 id="s2">2. Data we collect</h2>
              <ul><li><b>Account data</b> — name, email address, company, role and login credentials when you register.</li><li><b>Usage data</b> — pages visited, features used and device information, collected to improve the product.</li><li><b>Customer content</b> — data you store in the platform (contacts, accounts, documents), processed on your instructions only.</li><li><b>Communications</b> — messages you send to our support and sales teams.</li></ul>
              <h2 id="s3">3. How we use data</h2>
              <p>We use personal data to provide and secure the service, process payments, respond to enquiries, send service communications, and — with consent — product updates and marketing. We never sell personal data.</p>
              <h2 id="s4">4. Legal bases</h2>
              <p>We process data under contract performance (providing the service), legitimate interests (security, product improvement), consent (marketing) and legal obligation (accounting, compliance).</p>
              <h2 id="s5">5. Sharing and processors</h2>
              <p>Data is shared only with vetted sub-processors that host or support the service, under data processing agreements. Files you share externally are protected with two-factor verification.</p>
              <h2 id="s6">6. Retention</h2>
              <p>Account data is retained for the duration of your subscription and deleted or anonymised after closure, except where law requires longer retention.</p>
              <h2 id="s7">7. Your rights</h2>
              <p>You may request access, correction, deletion, portability or restriction of your personal data, and object to processing based on legitimate interests. Contact us to exercise any right; you may also complain to your supervisory authority.</p>
              <h2 id="s8">8. Contact</h2>
              <p>For privacy enquiries, contact our data protection team via the <a href="/contact-us">contact page</a> or call +44 203 972 1702 (9am–5:30pm GMT, Mon–Fri).</p>
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
