"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  const navRef = useRef<HTMLElement>(null);
  const megaRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const indMegaRef = useRef<HTMLDivElement>(null);
  const indTriggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    const mega = megaRef.current;
    const trigger = triggerRef.current;
    const indMega = indMegaRef.current;
    const indTrigger = indTriggerRef.current;
    if (!nav || !mega || !trigger || !indMega || !indTrigger) return;

    let lastY = 0;
    const onScroll = () => {
      const y = scrollY;
      nav.classList.toggle("hide", y > lastY && y > 80);
      lastY = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    const closeAll = () => {
      mega.classList.remove("open");
      trigger.classList.remove("active");
      trigger.setAttribute("aria-expanded", "false");
      indMega.classList.remove("open");
      indTrigger.classList.remove("active");
      indTrigger.setAttribute("aria-expanded", "false");
    };

    const toggleMega = () => {
      const opening = !mega.classList.contains("open");
      closeAll();
      if (opening) {
        mega.classList.add("open");
        trigger.classList.add("active");
        trigger.setAttribute("aria-expanded", "true");
      }
    };

    const toggleIndMega = () => {
      const opening = !indMega.classList.contains("open");
      closeAll();
      if (opening) {
        indMega.classList.add("open");
        indTrigger.classList.add("active");
        indTrigger.setAttribute("aria-expanded", "true");
      }
    };

    const handleOutsideClick = (e: MouseEvent) => {
      if (!nav.contains(e.target as Node)) closeAll();
    };

    trigger.addEventListener("click", toggleMega);
    indTrigger.addEventListener("click", toggleIndMega);
    document.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      trigger.removeEventListener("click", toggleMega);
      indTrigger.removeEventListener("click", toggleIndMega);
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const industries = [
    { title: "Hospitality", desc: "Initiate and maintain relationship with guests to deliver exceptional services", href: "/hotel-management-system", icon: <><path d="M3 21h18M5 21V7l8-4 8 4v14M9 9h2M9 13h2M9 17h2M15 9h0M15 13h0M15 17h0"/></> },
    { title: "Small Business", desc: "Unify business processes, right from sales to marketing to data management", href: "/free-crm", icon: <><path d="M3 9l1-5h16l1 5"/><path d="M4 9v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9"/><path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6"/></> },
    { title: "Enterprise", desc: "Manage large volumes of data, coordinate and execute complex business processes", href: "/crm", icon: <><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M12 12v4M10 14h4"/></> },
    { title: "For Sales", desc: "Capture and assign leads to concerned sales representatives with ease", href: "/crm", icon: <><path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/></> },
    { title: "For Marketing", desc: "Create stronger connections, fuel growth and customer engagement", href: "/crm", icon: <><path d="M3 11l18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></> },
    { title: "Clubs", desc: "Management system to benefit existing and prospective members", href: "/free-crm", icon: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></> },
    { title: "Charity", desc: "Run effective fundraising campaigns with more targeted communications", href: "/csr", icon: <><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></> },
    { title: "Membership Organisations", desc: "Unified cloud-based solution to build value for your membership organisation", href: "/free-crm", icon: <><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M16 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM6 10h2M6 14h8"/></> },
    { title: "Retail Management", desc: "Complete retail management with a comprehensive set of tools to help you sell smarter", href: "/crm", icon: <><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18M16 10a4 4 0 0 1-8 0"/></> },
  ];

  return (
    <nav className="nav" id="nav" ref={navRef}>
      <Link href="/" className="logo" aria-label="Optimiser home">
        <Image className="logo-img" src="/assets/optimiser-logo.svg" alt="Optimiser" width={120} height={34} />
      </Link>

      <div className="nav-links">
        <Link href="/why-optimiser">Why Optimiser</Link>
        <Link href="/crm">Cooper AI</Link>
        <button className="nav-trigger" ref={indTriggerRef} id="indTrigger" aria-expanded="false" aria-controls="indMega">
          Industries{" "}
          <svg className="chev" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
        <button className="nav-trigger" ref={triggerRef} id="prodTrigger" aria-expanded="false" aria-controls="prodMega">
          Products{" "}
          <svg className="chev" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
        <Link href="/why-optimiser">How it works</Link>
        <Link href="/whats-new">What&apos;s New</Link>
      </div>

      <div className="nav-cta">
        <Link className="nav-login" href="/login">Log in</Link>
        <Link className="btn btn-pri" href="/free-crm">
          Try for free <span className="arr">→</span>
        </Link>
        <button className="burger" aria-label="Menu">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>

      {/* Industries mega menu */}
      <div className="mega" id="indMega" ref={indMegaRef} role="region" aria-label="Industries">
        <div className="mega-inner">
          <div className="mega-ind-grid">
            {industries.map(({ title, desc, href, icon }) => (
              <Link key={title} className="mega-card" href={href}>
                <span className="mega-ic">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">{icon}</svg>
                </span>
                <span className="mega-tx">
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </span>
              </Link>
            ))}
          </div>
          <div className="mega-foot">
            <span className="mf-txt">Solutions tailored to <b>every industry</b> — built around the way you work.</span>
            <Link className="mf-link" href="/why-optimiser">
              View all industries{" "}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      {/* Products mega menu */}
      <div className="mega" id="prodMega" ref={megaRef} role="region" aria-label="Products">
        <div className="mega-inner">
          <div className="mega-grid">
            {[
              { title: "CRM", desc: "One platform to Optimise and manage customer relationships", href: "/crm", icon: <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>, icon2: <><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></> },
              { title: "Touchpoint", desc: "Smart way to develop, manage and grow your business online", href: "/crm", icon: <><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/></> },
              { title: "Sales Suite", desc: "Win more sales by Optimising your Pipeline & customer segmentation", href: "/crm", icon: <><path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/></> },
              { title: "Marketing Suite", desc: "Marketing Automation to supercharge your strategies and grow your business", href: "/crm", icon: <><path d="M3 11l18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></> },
              { title: "Workflow Automation", desc: "Start automating your business workflow today", href: "/crm", icon: <><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 9v6a3 3 0 0 0 3 3h6"/><path d="M15 6h3a3 3 0 0 1 3 3v0"/></> },
              { title: "Project Management", desc: "Streamline workflow to manage teams and allocate budget resources", href: "/crm", icon: <><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M8 4v16"/></> },
              { title: "Shop Suite", desc: "Complete shop management with a comprehensive set of tools", href: "/crm", icon: <><path d="M3 9l1-5h16l1 5"/><path d="M4 9v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9"/><path d="M9 13h6"/></> },
              { title: "Cloud Computing", desc: "Centralise your team's data and content in a secure platform", href: "/crm", icon: <><path d="M17.5 19a4.5 4.5 0 0 0 .5-8.97A6 6 0 0 0 6.34 9.5 4 4 0 0 0 7 17.46"/><path d="M8 19h9.5"/></> },
              { title: "Lead Management", desc: "Track leads to increase conversions", href: "/crm", icon: <><path d="M22 12l-4-2-4 2-4-2-4 2-4-2"/><path d="M12 2v8M9 6l3-3 3 3"/><path d="M2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6"/></> },
              { title: "Event Management", desc: "Plan and Organise from one platform", href: "/crm", icon: <><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/><path d="M9 16l2 2 4-4"/></> },
              { title: "Integrations", desc: "Integrate one powerful platform with everyday software", href: "/crm", icon: <><path d="M14 7h5a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-5"/><path d="M10 17H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5"/><path d="M8 12h8"/></> },
              { title: "Sales and Catering", desc: "All-in-solution to revolutionise how hospitality industry manages sales", href: "/hotel-management-system", icon: <><path d="M3 3h2l2 5h10l3-7"/><path d="M6 8l1.5 8h10L20 8"/><path d="M5 3l-1 13a2 2 0 0 0 2 2h12"/><circle cx="9" cy="21" r="1"/><circle cx="17" cy="21" r="1"/></> },
            ].map(({ title, desc, href, icon }) => (
              <Link key={title} className="mega-card" href={href}>
                <span className="mega-ic">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">{icon}</svg>
                </span>
                <span className="mega-tx">
                  <h4>{title}</h4>
                  <p>{desc}</p>
                </span>
              </Link>
            ))}
          </div>
          <div className="mega-foot">
            <span className="mf-txt">One platform, <b>12+ products</b> — built to work better together.</span>
            <Link className="mf-link" href="/free-crm">
              Compare all products{" "}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
