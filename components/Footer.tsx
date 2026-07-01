import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="f-grid">
          <div>
            <Link href="/" className="logo" aria-label="Optimiser home">
              <Image className="logo-img" src="/assets/logo-drak-bg.svg" alt="Optimiser" width={120} height={40} />
            </Link>
            <p className="f-tag">The power of one CRM platform. Sales, marketing, events and more — together at last.</p>
          </div>
          <div>
            <h4>Products</h4>
            <ul>
              <li><Link href="/crm">CRM</Link></li>
              <li><Link href="/crm">Sales Suite</Link></li>
              <li><Link href="/crm">Marketing Suite</Link></li>
              <li><Link href="/crm">Workflow Automation</Link></li>
              <li><Link href="/crm">Event Management</Link></li>
            </ul>
          </div>
          <div>
            <h4>Solutions</h4>
            <ul>
              <li><Link href="/hotel-management-system">Hospitality</Link></li>
              <li><Link href="/free-crm">Small Business</Link></li>
              <li><Link href="/free-crm">Enterprise</Link></li>
              <li><Link href="/free-crm">Clubs &amp; Memberships</Link></li>
              <li><Link href="/csr">Charity</Link></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><Link href="/why-optimiser">Why Optimiser</Link></li>
              <li><Link href="/case-studies">Case Studies</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/whats-new">What&apos;s New</Link></li>
              <li><Link href="/media">Media</Link></li>
              <li><Link href="/contact-us">Contact</Link></li>
              <li><Link href="/csr">CSR</Link></li>
            </ul>
          </div>
        </div>
        <div className="f-bottom">
          <span>© 2026 Optimiser. All rights reserved.</span>
          <span>+44 203 972 1702 · 9am–5:30pm GMT (Mon–Fri)</span>
        </div>
        <div className="f-water" aria-hidden="true">OPTIMISER</div>
      </div>
    </footer>
  );
}
