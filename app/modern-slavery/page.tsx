import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GsapLenis from "@/components/GsapLenis";
import Animations from "./Animations";
import "./styles.css";

export const metadata = {
  title: "Modern Slavery Statement | Optimiser",
  description:
    "Optimiser Modern Slavery Statement — our commitment to preventing slavery and human trafficking in our business and supply chains.",
};

export default function ModernSlaveryPage() {
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
              Modern Slavery <span className="grad-txt">Statement</span>
            </h1>
            <p className="lede rv">Our commitment to preventing modern slavery and human trafficking in our business and supply chains.</p>
          </div>
        </div>
      </header>

      <section className="sec" style={{ paddingTop: "56px" }}>
        <div className="wrap">
          <div className="lg-wrap">
            <nav className="lg-toc rv" aria-label="Contents">
              <a href="#s1">Our commitment</a>
              <a href="#s2">Our business</a>
              <a href="#s3">Due diligence</a>
              <a href="#s4">Policies</a>
              <a href="#s5">Training</a>
              <a href="#s6">Reporting concerns</a>
            </nav>
            <article className="lg-doc rv">
              <span className="meta">Last updated · July 2026</span>
              <h2 id="s1">1. Our commitment</h2>
              <p>Optimiser is committed to acting ethically and with integrity in all business dealings and relationships, and to implementing effective systems and controls to ensure modern slavery is not taking place anywhere in our business or supply chains.</p>
              <h2 id="s2">2. Our business</h2>
              <p>Optimiser develops and operates a cloud-based business management platform, headquartered in London and serving clients globally. Our supply chain consists primarily of cloud infrastructure, software services and professional services providers.</p>
              <h2 id="s3">3. Due diligence</h2>
              <ul><li>Risk assessment of new suppliers before engagement.</li><li>Contractual commitments to anti-slavery compliance in supplier agreements.</li><li>Regular review of existing supplier relationships.</li></ul>
              <h2 id="s4">4. Policies</h2>
              <p>Our recruitment, procurement and whistleblowing policies support the identification and prevention of modern slavery risks. All employment is freely chosen with right-to-work verification.</p>
              <h2 id="s5">5. Training</h2>
              <p>Relevant staff receive guidance on identifying and reporting the signs of modern slavery and human trafficking.</p>
              <h2 id="s6">6. Reporting concerns</h2>
              <p>Concerns may be raised confidentially via the <a href="/contact-us">contact page</a>. All reports are investigated and acted upon.</p>
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
