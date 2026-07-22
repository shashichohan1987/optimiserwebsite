"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  const navRef = useRef<HTMLElement>(null);
  const megaRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const indMegaRef = useRef<HTMLDivElement>(null);
  const indTriggerRef = useRef<HTMLButtonElement>(null);
  const resMegaRef = useRef<HTMLDivElement>(null);
  const resTriggerRef = useRef<HTMLButtonElement>(null);

  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<"products" | "industries" | "resources" | null>(null);

  const closeMobile = () => {
    setMobileOpen(false);
    setOpenGroup(null);
  };

  const toggleGroup = (g: "products" | "industries" | "resources") => {
    setOpenGroup((cur) => (cur === g ? null : g));
  };

  useEffect(() => {
    if (!mobileOpen) return;
    const scrollY = window.scrollY;
    const { body } = document;
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    return () => {
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.width = "";
      window.scrollTo(0, scrollY);
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobile();
    };
    const onResize = () => {
      if (window.innerWidth > 860) closeMobile();
    };
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  useEffect(() => {
    const nav = navRef.current;
    const mega = megaRef.current;
    const trigger = triggerRef.current;
    const indMega = indMegaRef.current;
    const indTrigger = indTriggerRef.current;
    const resMega = resMegaRef.current;
    const resTrigger = resTriggerRef.current;
    if (!nav || !mega || !trigger || !indMega || !indTrigger || !resMega || !resTrigger) return;

    let lastY = 0;
    const onScroll = () => {
      const y = scrollY;
      nav.classList.toggle("hide", y > lastY && y > 300);
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
      resMega.classList.remove("open");
      resTrigger.classList.remove("active");
      resTrigger.setAttribute("aria-expanded", "false");
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

    const toggleResMega = () => {
      const opening = !resMega.classList.contains("open");
      closeAll();
      if (opening) {
        resMega.classList.add("open");
        resTrigger.classList.add("active");
        resTrigger.setAttribute("aria-expanded", "true");
      }
    };

    const handleOutsideClick = (e: MouseEvent) => {
      if (!nav.contains(e.target as Node)) closeAll();
    };

    trigger.addEventListener("click", toggleMega);
    indTrigger.addEventListener("click", toggleIndMega);
    resTrigger.addEventListener("click", toggleResMega);
    document.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      trigger.removeEventListener("click", toggleMega);
      indTrigger.removeEventListener("click", toggleIndMega);
      resTrigger.removeEventListener("click", toggleResMega);
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const products = [
    { title: "Cooper AI", desc: "Your AI analyst — live answers grounded in your CRM data", href: "/cooper-ai", icon: <><circle cx="12" cy="12" r="9" /><path d="M8 12.5l2.5 2.5L16 9.5" /></> },
    { title: "CRM", desc: "One platform to Optimise and manage customer relationships", href: "/crm", icon: <><circle cx="9" cy="7" r="4"/><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></> },
    { title: "Touchpoint", desc: "Smart way to develop, manage and grow your business online", href: "/touchpoint-v2", icon: <><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/></> },
    { title: "Sales Suite", desc: "Win more sales by Optimising your Pipeline & customer segmentation", href: "/sales-suite", icon: <><path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/></> },
    { title: "Marketing Suite", desc: "Marketing Automation to supercharge your strategies and grow your business", href: "/marketing-suite", icon: <><path d="M3 11l18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></> },
    { title: "Workflow Automation", desc: "Start automating your business workflow today", href: "/workflow-automation", icon: <><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 9v6a3 3 0 0 0 3 3h6"/><path d="M15 6h3a3 3 0 0 1 3 3v0"/></> },
    { title: "Project Management", desc: "Streamline workflow to manage teams and allocate budget resources", href: "/project-management", icon: <><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M8 4v16"/></> },
    { title: "Shop Suite", desc: "Complete shop management with a comprehensive set of tools", href: "/shop-suite", icon: <><path d="M3 9l1-5h16l1 5"/><path d="M4 9v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9"/><path d="M9 13h6"/></> },
    { title: "Cloud Computing", desc: "Centralise your team's data and content in a secure platform", href: "/cloud-computing", icon: <><path d="M17.5 19a4.5 4.5 0 0 0 .5-8.97A6 6 0 0 0 6.34 9.5 4 4 0 0 0 7 17.46"/><path d="M8 19h9.5"/></> },
    { title: "Lead Management", desc: "Track leads to increase conversions", href: "/lead-management", icon: <><path d="M22 12l-4-2-4 2-4-2-4 2-4-2"/><path d="M12 2v8M9 6l3-3 3 3"/><path d="M2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6"/></> },
    { title: "Event Management", desc: "Plan and Organise from one platform", href: "/event-management", icon: <><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/><path d="M9 16l2 2 4-4"/></> },
    { title: "Integrations", desc: "Integrate one powerful platform with everyday software", href: "/integrations", icon: <><path d="M14 7h5a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-5"/><path d="M10 17H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5"/><path d="M8 12h8"/></> },
    { title: "Sales and Catering", desc: "All-in-solution to revolutionise how hospitality industry manages sales", href: "/sales-and-catering", icon: <><path d="M3 3h2l2 5h10l3-7"/><path d="M6 8l1.5 8h10L20 8"/><path d="M5 3l-1 13a2 2 0 0 0 2 2h12"/><circle cx="9" cy="21" r="1"/><circle cx="17" cy="21" r="1"/></> },
  ];

  const industries = [
    { title: "Hospitality", desc: "Initiate and maintain relationship with guests to deliver exceptional services", href: "/hotel-management-system", icon: <><path d="M3 21h18M5 21V7l8-4 8 4v14M9 9h2M9 13h2M9 17h2M15 9h0M15 13h0M15 17h0"/></> },
    { title: "Small Business", desc: "Unify business processes, right from sales to marketing to data management", href: "/small-business", icon: <><path d="M3 9l1-5h16l1 5"/><path d="M4 9v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9"/><path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6"/></> },
    { title: "Enterprise", desc: "Manage large volumes of data, coordinate and execute complex business processes", href: "/enterprise", icon: <><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M12 12v4M10 14h4"/></> },
    { title: "For Sales", desc: "Capture and assign leads to concerned sales representatives with ease", href: "/for-sales", icon: <><path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/></> },
    { title: "For Marketing", desc: "Create stronger connections, fuel growth and customer engagement", href: "/for-marketing", icon: <><path d="M3 11l18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></> },
    { title: "Clubs", desc: "Management system to benefit existing and prospective members", href: "/clubs", icon: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></> },
    { title: "Charity", desc: "Run effective fundraising campaigns with more targeted communications", href: "/charity", icon: <><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></> },
    { title: "Membership Organisations", desc: "Unified cloud-based solution to build value for your membership organisation", href: "/membership-organisations", icon: <><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M16 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM6 10h2M6 14h8"/></> },
    { title: "Retail Management", desc: "Complete retail management with a comprehensive set of tools to help you sell smarter", href: "/retail-management", icon: <><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><path d="M3 6h18M16 10a4 4 0 0 1-8 0"/></> },
  ];

  const resources = [
    { title: "What's New", desc: "Find out latest updates on Optimiser", href: "/whats-new", icon: <><path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z"/><path d="M19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15z"/></> },
    { title: "Blog", desc: "Boost your Customer Relationship Management Software", href: "/blog", icon: <><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></> },
    { title: "Media", desc: "See Optimiser Platform's Media Coverage", href: "/media", icon: <><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2zm0 0a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2"/><path d="M18 14h-8M15 18h-5M10 6h8v4h-8V6z"/></> },
    { title: "Case Studies", desc: "Optimiser Platform Case Studies", href: "/case-studies", icon: <><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></> },
    { title: "Testimonial", desc: "Optimiser Platform Testimonial", href: "/testimonial", icon: <><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/><path d="M8 9h8M8 13h5"/></> },
  ];

  return (
    <>
    <nav className="nav" id="nav" ref={navRef}>
      <Link href="/" className="logo" aria-label="Optimiser home">
        <Image className="logo-img" src="/assets/optimiser-logo.svg" alt="Optimiser" width={120} height={34} style={{ height: "34px", width: "auto" }} />
      </Link>

      <div className="nav-links">
        <Link href="/why-optimiser">Why Optimiser</Link>
        <Link href="/cooper-ai">Cooper AI</Link>
        <button className="nav-trigger" ref={triggerRef} id="prodTrigger" aria-expanded="false" aria-controls="prodMega">
          Products{" "}
          <svg className="chev" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
        <button className="nav-trigger" ref={indTriggerRef} id="indTrigger" aria-expanded="false" aria-controls="indMega">
          Industries{" "}
          <svg className="chev" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
        <button className="nav-trigger" ref={resTriggerRef} id="resTrigger" aria-expanded="false" aria-controls="resMega">
          Resources{" "}
          <svg className="chev" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
        <Link href="/contact-us">Contact</Link>
        <Link href="/csr">CSR</Link>
      </div>

      <div className="nav-cta">
        <Link className="nav-login" href="/login-v3">Log in</Link>
        <Link className="btn btn-pri" href="/free-crm">
          Try for free <span className="arr">→</span>
        </Link>
        <button
          className={`burger${mobileOpen ? " open" : ""}`}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          aria-controls="mobilePanel"
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span className="burger-lines" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
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
            <Link className="mega-card" href="/cooper-ai">
              <span className="mega-ic" style={{ padding: "9px" }}>
                <img src="/assets/cooper-icon.svg" alt="" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
              </span>
              <span className="mega-tx">
                <h4>Cooper AI</h4>
                <p>Your AI analyst — live answers grounded in your CRM data</p>
              </span>
            </Link>
            {[
              { title: "CRM", desc: "One platform to Optimise and manage customer relationships", href: "/crm", icon: <><circle cx="9" cy="7" r="4"/><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></> },
              { title: "Touchpoint", desc: "Smart way to develop, manage and grow your business online", href: "/touchpoint-v2", icon: <><circle cx="12" cy="12" r="3"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/></> },
              { title: "Sales Suite", desc: "Win more sales by Optimising your Pipeline & customer segmentation", href: "/sales-suite", icon: <><path d="M3 3v18h18"/><path d="M7 15l4-4 3 3 5-6"/></> },
              { title: "Marketing Suite", desc: "Marketing Automation to supercharge your strategies and grow your business", href: "/marketing-suite", icon: <><path d="M3 11l18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></> },
              { title: "Workflow Automation", desc: "Start automating your business workflow today", href: "/workflow-automation", icon: <><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 9v6a3 3 0 0 0 3 3h6"/><path d="M15 6h3a3 3 0 0 1 3 3v0"/></> },
              { title: "Project Management", desc: "Streamline workflow to manage teams and allocate budget resources", href: "/project-management", icon: <><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M8 4v16"/></> },
              { title: "Shop Suite", desc: "Complete shop management with a comprehensive set of tools", href: "/shop-suite", icon: <><path d="M3 9l1-5h16l1 5"/><path d="M4 9v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9"/><path d="M9 13h6"/></> },
              { title: "Cloud Computing", desc: "Centralise your team's data and content in a secure platform", href: "/cloud-computing", icon: <><path d="M17.5 19a4.5 4.5 0 0 0 .5-8.97A6 6 0 0 0 6.34 9.5 4 4 0 0 0 7 17.46"/><path d="M8 19h9.5"/></> },
              { title: "Lead Management", desc: "Track leads to increase conversions", href: "/lead-management", icon: <><path d="M22 12l-4-2-4 2-4-2-4 2-4-2"/><path d="M12 2v8M9 6l3-3 3 3"/><path d="M2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6"/></> },
              { title: "Event Management", desc: "Plan and Organise from one platform", href: "/event-management", icon: <><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/><path d="M9 16l2 2 4-4"/></> },
              { title: "Integrations", desc: "Integrate one powerful platform with everyday software", href: "/integrations", icon: <><path d="M14 7h5a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-5"/><path d="M10 17H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5"/><path d="M8 12h8"/></> },
              { title: "Sales and Catering", desc: "All-in-solution to revolutionise how hospitality industry manages sales", href: "/sales-and-catering", icon: <><path d="M3 3h2l2 5h10l3-7"/><path d="M6 8l1.5 8h10L20 8"/><path d="M5 3l-1 13a2 2 0 0 0 2 2h12"/><circle cx="9" cy="21" r="1"/><circle cx="17" cy="21" r="1"/></> },
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

      {/* Resources mega menu */}
      <div className="mega" id="resMega" ref={resMegaRef} role="region" aria-label="Resources" style={{ width: "min(760px,calc(100vw - 28px))" }}>
        <div className="mega-inner">
          <div className="mega-grid">
            {resources.map(({ title, desc, href, icon }) => (
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
        </div>
      </div>
    </nav>

      {/* Mobile menu */}
      <div className={`mobile-panel${mobileOpen ? " open" : ""}`} id="mobilePanel" role="dialog" aria-modal="true" aria-label="Menu">
        <div className="mobile-scroll">
          <div className="mobile-links">
            <Link href="/why-optimiser" onClick={closeMobile}>Why Optimiser</Link>
            <Link href="/cooper-ai" onClick={closeMobile}>Cooper AI</Link>
          </div>

          <div className="mobile-group">
            <button className={`mobile-trigger${openGroup === "products" ? " open" : ""}`} onClick={() => toggleGroup("products")} aria-expanded={openGroup === "products"}>
              Products
              <svg className="chev" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M6 9l6 6 6-6" /></svg>
            </button>
            <div className={`mobile-sublist${openGroup === "products" ? " open" : ""}`}>
              <div className="mobile-sublist-inner">
                {products.map(({ title, href, icon }) => (
                  <Link key={title} href={href} onClick={closeMobile}>
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">{icon}</svg>
                    {title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mobile-group">
            <button className={`mobile-trigger${openGroup === "industries" ? " open" : ""}`} onClick={() => toggleGroup("industries")} aria-expanded={openGroup === "industries"}>
              Industries
              <svg className="chev" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M6 9l6 6 6-6" /></svg>
            </button>
            <div className={`mobile-sublist${openGroup === "industries" ? " open" : ""}`}>
              <div className="mobile-sublist-inner">
                {industries.map(({ title, href, icon }) => (
                  <Link key={title} href={href} onClick={closeMobile}>
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">{icon}</svg>
                    {title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mobile-group">
            <button className={`mobile-trigger${openGroup === "resources" ? " open" : ""}`} onClick={() => toggleGroup("resources")} aria-expanded={openGroup === "resources"}>
              Resources
              <svg className="chev" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4"><path d="M6 9l6 6 6-6" /></svg>
            </button>
            <div className={`mobile-sublist${openGroup === "resources" ? " open" : ""}`}>
              <div className="mobile-sublist-inner">
                {resources.map(({ title, href, icon }) => (
                  <Link key={title} href={href} onClick={closeMobile}>
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">{icon}</svg>
                    {title}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mobile-links">
            <Link href="/contact-us" onClick={closeMobile}>Contact</Link>
            <Link href="/csr" onClick={closeMobile}>CSR</Link>
          </div>
        </div>

        <div className="mobile-foot">
          <Link className="btn btn-gho" href="/login-v3" onClick={closeMobile}>Log in</Link>
          <Link className="btn btn-pri" href="/free-crm" onClick={closeMobile}>
            Try for free <span className="arr">→</span>
          </Link>
        </div>
      </div>
    </>
  );
}
