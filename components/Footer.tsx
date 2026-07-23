"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  const handleLogoClick = () => {
    if (pathname === "/") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer>
      <div className="wrap">
        <div className="f-grid">
          <div>
            <Link href="/" className="logo" aria-label="Optimiser home" onClick={handleLogoClick}>
              <Image className="logo-img" src="/assets/optimiser-logo-dark-bg.svg" alt="Optimiser" width={120} height={40} style={{ height: "40px", width: "auto" }} />
            </Link>
            <p className="f-tag">The power of one CRM platform. Sales, marketing, events and more — together at last.</p>
            <div className="f-social">
              <a href="https://www.facebook.com/optimisersaas/" target="_blank" rel="noopener" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12z" /></svg>
              </a>
              <a href="https://twitter.com/optimisersaas" target="_blank" rel="noopener" aria-label="X">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.24 2H21.5l-7.13 8.15L22.75 22h-6.57l-5.14-6.72L5.16 22H1.9l7.62-8.72L1.25 2h6.74l4.64 6.14zm-1.15 18h1.81L7.01 3.88H5.06z" /></svg>
              </a>
              <a href="https://www.linkedin.com/company/optimiser-saas/" target="_blank" rel="noopener" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5zM3 9h4v12H3zM9 9h3.8v1.71h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.54 4.78 5.85V21h-4v-5.34c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.81V21H9z" /></svg>
              </a>
              <a href="https://www.instagram.com/optimisersaas/" target="_blank" rel="noopener" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5.5" /><circle cx="12" cy="12" r="4.2" /><circle cx="17.4" cy="6.6" r="1.2" fill="currentColor" stroke="none" /></svg>
              </a>
            </div>
          </div>
          <div>
            <h4>Products</h4>
            <ul>
              <li><Link href="/crm">CRM</Link></li>
              <li><Link href="/touchpoint-v2">Touchpoint</Link></li>
              <li><Link href="/sales-suite">Sales Suite</Link></li>
              <li><Link href="/marketing-suite">Marketing Suite</Link></li>
              <li><Link href="/workflow-automation">Workflow Automation</Link></li>
              <li><Link href="/project-management">Project Management</Link></li>
              <li><Link href="/shop-suite">Shop Suite</Link></li>
              <li><Link href="/cloud-computing">Cloud Computing</Link></li>
              <li><Link href="/lead-management">Lead Management</Link></li>
              <li><Link href="/event-management">Event Management</Link></li>
              <li><Link href="/sales-and-catering">Sales &amp; Catering</Link></li>
              <li><Link href="/integrations">Integrations</Link></li>
            </ul>
          </div>
          <div>
            <h4>Solutions</h4>
            <ul>
              <li><Link href="/hotel-management-system">Hospitality</Link></li>
              <li><Link href="/small-business">Small Business</Link></li>
              <li><Link href="/enterprise">Enterprise</Link></li>
              <li><Link href="/for-sales">For Sales</Link></li>
              <li><Link href="/for-marketing">For Marketing</Link></li>
              <li><Link href="/clubs">Clubs</Link></li>
              <li><Link href="/membership-organisations">Membership Organisations</Link></li>
              <li><Link href="/charity">Charity</Link></li>
              <li><Link href="/retail-management">Retail Management</Link></li>
            </ul>
          </div>
          <div>
            <h4>Features</h4>
            <ul>
              <li><Link href="/feature-dashboard">Dashboard</Link></li>
              <li><Link href="/feature-calendar">Calendar</Link></li>
              <li><Link href="/feature-contacts">Contacts</Link></li>
              <li><Link href="/feature-accounts">Accounts</Link></li>
              <li><Link href="/feature-pipeline">Pipeline</Link></li>
              <li><Link href="/feature-analytics">Analytics</Link></li>
              <li><Link href="/feature-email-marketing">Email Marketing</Link></li>
              <li><Link href="/feature-tasks">Tasks</Link></li>
              <li><Link href="/feature-cloud-storage">Cloud Storage</Link></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><Link href="/about-us">About Us</Link></li>
              <li><Link href="/why-optimiser">Why Optimiser</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/csr">CSR &amp; ESG</Link></li>
              <li><Link href="/faq">FAQs</Link></li>
              <li><Link href="/case-studies">Case Studies</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/contact-us">Contact</Link></li>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/modern-slavery">Modern Slavery</Link></li>
              <li><Link href="/data-compliance">Data Compliance</Link></li>
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
