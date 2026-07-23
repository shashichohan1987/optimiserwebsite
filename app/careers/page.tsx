import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import GsapLenis from "@/components/GsapLenis";
import Animations from "./Animations";
import "./styles.css";

export const metadata = {
  title: "Careers | Optimiser",
  description:
    "Careers at Optimiser — join a lively, innovative team building a rapidly evolving CRM platform serving clients globally.",
};

export default function CareersPage() {
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
            <span className="eyebrow rv">Careers</span>
            <h1 className="rv">
              Do the best work of <span className="grad-txt">your career.</span>
            </h1>
            <p className="lede rv">
              Launch your career with Optimiser — work on an exciting, rapidly evolving CRM
              platform serving clients globally, with room to grow and room to get creative.
            </p>
            <div
              className="t2-cta rv"
              style={{ display: "flex", gap: "14px", flexWrap: "wrap", justifyContent: "center" }}
            >
              <a className="btn btn-pri" href="/contact-us">
                Get in touch <span className="arr">→</span>
              </a>
              <a className="btn btn-gho" href="/about-us">
                About Optimiser
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ============ WHY JOIN ============ */}
      <section className="sec" id="why-join">
        <div className="wrap">
          <div className="sec-head rv">
            <span className="eyebrow">Life at Optimiser</span>
            <h2>
              Why you'll <span className="grad-txt">thrive here</span>
            </h2>
            <p>
              A lively and innovative work environment that prioritises learning, equality
              and flexibility.
            </p>
          </div>
          <div className="ab-vals">
            <article className="ab-val rv">
              <span className="num">01</span>
              <h3>Room to grow</h3>
              <p>
                Starter and experienced roles alike come with plenty of opportunity for
                growth — rewarding, meaningful projects from day one.
              </p>
            </article>
            <article className="ab-val rv">
              <span className="num">02</span>
              <h3>Room to create</h3>
              <p>
                Help build an evolving brand into new markets and territories — your ideas
                shape the product and the company.
              </p>
            </article>
            <article className="ab-val rv">
              <span className="num">03</span>
              <h3>Learning first</h3>
              <p>
                An environment that prioritises learning, equality and flexibility — surpass
                your own expectations for yourself.
              </p>
            </article>
            <article className="ab-val rv">
              <span className="num">04</span>
              <h3>Global impact</h3>
              <p>
                The platform serves clients across industries and continents — your work
                ships to all of them.
              </p>
            </article>
            <article className="ab-val rv">
              <span className="num">05</span>
              <h3>A dedicated team</h3>
              <p>
                Join talented, hard-working colleagues who care about the craft and about
                each other.
              </p>
            </article>
            <article className="ab-val rv">
              <span className="num">06</span>
              <h3>One platform, many crafts</h3>
              <p>
                Engineering, design, sales, marketing, support — twelve modules mean there's
                always an interesting problem.
              </p>
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
                Build the future of <span className="grad-txt">one platform</span>
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
