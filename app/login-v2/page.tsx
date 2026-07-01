import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LoginV2Animations from "./Animations";
import "./styles.css";

export const metadata: Metadata = {
  title: "Log in — Optimiser",
  description:
    "Log in to your Optimiser account. Sign in with single sign-on (SSO) or your email — one secure login for sales, marketing, events and operations.",
};

export default function LoginV2Page() {
  return (
    <div className="auth">

      {/* ============ LEFT — BRAND ============ */}
      <aside className="brand">
        <div className="streaks" aria-hidden="true">
          <div className="sk" style={{ top: "2%", background: "linear-gradient(90deg,transparent,rgba(0,161,223,.55),rgba(150,236,255,.55),transparent)" }} />
          <div className="sk" style={{ top: "28%", background: "linear-gradient(90deg,transparent,rgba(7,93,168,.6),rgba(0,161,223,.5),transparent)", animationDelay: "-5s" }} />
          <div className="sk" style={{ top: "52%", background: "linear-gradient(90deg,transparent,rgba(0,161,223,.5),rgba(255,255,255,.35),transparent)", animationDelay: "-9s" }} />
          <div className="sk" style={{ top: "76%", background: "linear-gradient(90deg,transparent,rgba(7,93,168,.55),rgba(0,161,223,.45),transparent)", animationDelay: "-3s" }} />
        </div>
        <div className="brand-grid" aria-hidden="true" />
        <div className="brand-aur" aria-hidden="true" />

        <Link href="/" className="logo" aria-label="Optimiser home">
          <Image className="logo-img" src="/assets/optimiser-logo.svg" alt="Optimiser" width={120} height={34} />
        </Link>

        <div className="collage" aria-hidden="true">
          <div className="cc c-chart" style={{ top: 0, left: "-5%", width: "230px", "--rot": "rotate(-7deg)" } as React.CSSProperties}>
            <div className="cc-h">Revenue <span className="dots3">⋮</span></div>
            <div className="big" style={{ fontSize: "24px" }}>$40,832.32</div>
            <div className="cc-bars">
              <span style={{ height: "44px", background: "#CFEFE0" }} />
              <span style={{ height: "72px", background: "#19BE77" }} />
              <span style={{ height: "52px", background: "#FFD79A" }} />
              <span style={{ height: "80px", background: "#075DA8" }} />
              <span style={{ height: "58px", background: "#9CD8F4" }} />
            </div>
            <div className="cc-legend">
              <i style={{ "--lc": "#19BE77" } as React.CSSProperties}>Nov</i>
              <i style={{ "--lc": "#075DA8" } as React.CSSProperties}>Dec</i>
            </div>
          </div>

          <div className="cc c-income" style={{ top: "15%", right: "-8%", width: "218px", "--rot": "rotate(5deg)", animationDelay: "-1.5s" } as React.CSSProperties}>
            <div className="cc-h">
              <span className="cc-ic" style={{ background: "linear-gradient(135deg,#19BE77,#5CD9A0)" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </span>
              New Income
            </div>
            <div className="big" style={{ fontSize: "27px" }}>$40,832.32</div>
            <div className="chip">+13.6% ↗</div>
          </div>

          <div className="tile" style={{ top: "34%", left: "43%", "--rot": "rotate(-8deg)", animationDelay: "-2.4s" } as React.CSSProperties}>
            <span className="ti" style={{ background: "linear-gradient(135deg,#075DA8,#00A1DF)" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 3v18h18" /><path d="M7 15l4-4 3 3 5-6" />
              </svg>
            </span>
          </div>

          <div className="cc c-impr" style={{ top: "50%", left: "-2%", width: "188px", "--rot": "rotate(-4deg)", animationDelay: "-3.2s" } as React.CSSProperties}>
            <div className="cc-h">
              <span className="cc-ic" style={{ background: "linear-gradient(135deg,#7B5CFA,#A78BFA)" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3" />
                </svg>
              </span>
              Impressions
            </div>
            <div className="big" style={{ fontSize: "26px" }}>3,259</div>
            <div className="chip">+6.22% ↗</div>
          </div>

          <div className="cc c-contacts" style={{ top: "60%", right: "-6%", width: "178px", "--rot": "rotate(6deg)", animationDelay: "-4.6s" } as React.CSSProperties}>
            <div className="cc-h">
              <span className="cc-ic" style={{ background: "linear-gradient(135deg,#075DA8,#00A1DF)" }}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                </svg>
              </span>
              New Contacts
            </div>
            <div className="big" style={{ fontSize: "26px" }}>218</div>
            <div className="chip">+8.2% ↗</div>
          </div>

          <div className="tile" style={{ bottom: "1%", left: "26%", "--rot": "rotate(7deg)", animationDelay: "-5.5s" } as React.CSSProperties}>
            <span className="ti" style={{ background: "linear-gradient(135deg,#19BE77,#0E9E63)" }}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 4h18l-7 8v7l-4 2v-9z" />
              </svg>
            </span>
          </div>
        </div>

        <div className="brand-cap">
          <span className="eyebrow2">The power of one platform</span>
          <h2>Every number, in one place.</h2>
        </div>
      </aside>

      {/* ============ RIGHT — FORM ============ */}
      <main className="panel">
        <div className="panel-top">
          <Link href="/" className="logo panel-mobile-logo" aria-label="Optimiser home">
            <Image src="/assets/optimiser-logo.svg" alt="Optimiser" width={100} height={30} style={{ height: "30px", width: "auto" }} />
          </Link>
          <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
            <span>Not a customer?</span>
            <Link className="tlink" href="/free-crm">Try for free</Link>
          </div>
        </div>

        <div className="form-wrap">
          <LoginV2Animations />
        </div>

        <div className="panel-foot">
          <span>© 2026 Optimiser. All rights reserved.</span>
          <div className="links">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Status</a>
          </div>
        </div>
      </main>

    </div>
  );
}
