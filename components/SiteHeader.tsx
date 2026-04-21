"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { services, site } from "@/lib/site-data";

const primaryLinks = [
  { href: "/", label: "Domov" },
  { href: "/referencie", label: "Referencie" },
  { href: "/kontakt", label: "Kontakt" }
];

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href;
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/30 bg-white/88 shadow-sm backdrop-blur">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="brand-wordmark shrink-0" aria-label="Riger s.r.o. domov">
            <span className="brand-wordmark__frame" aria-hidden="true">
              RIGER
            </span>
            <span className="brand-wordmark__suffix" aria-hidden="true">
              s.r.o.
            </span>
          </Link>

          <nav aria-label="Hlavná navigácia" className="hidden items-center gap-7 lg:flex">
            {primaryLinks.slice(0, 1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1 text-sm font-bold transition-colors hover:text-orange-600 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-orange-600 after:transition-all after:duration-300 ${
                  isActive(link.href) 
                    ? "text-orange-600 after:w-full" 
                    : "text-zinc-900 after:w-0 hover:after:w-full"
                }`}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
            <div className="group relative">
              <button className={`flex items-center gap-1 py-1 text-sm font-bold transition hover:text-orange-600 ${
                services.some(s => pathname === `/${s.slug}`) ? "text-orange-600" : "text-zinc-900"
              }`}>
                Cenník
                <svg aria-hidden="true" viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none">
                  <path d="m4 6 4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className="invisible absolute right-0 top-full w-64 pt-4 opacity-0 transition group-hover:visible group-hover:opacity-100">
                <div className="rounded-lg border border-zinc-200 bg-white p-2 shadow-lg">
                  {services.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/${service.slug}`}
                      className={`block rounded-md px-3 py-2 text-sm font-semibold transition ${
                        isActive(`/${service.slug}`)
                          ? "bg-orange-600 text-white"
                          : "text-zinc-800 hover:bg-orange-50 hover:text-orange-700"
                      }`}
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {primaryLinks.slice(1).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-1 text-sm font-bold transition-colors hover:text-orange-600 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-orange-600 after:transition-all after:duration-300 ${
                  isActive(link.href) 
                    ? "text-orange-600 after:w-full" 
                    : "text-zinc-900 after:w-0 hover:after:w-full"
                }`}
                aria-current={isActive(link.href) ? "page" : undefined}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-md bg-orange-600 px-4 py-2.5 text-sm font-bold text-white shadow-sm transition hover:bg-orange-700"
            >
              <PhoneIcon />
              {site.phoneDisplay}
            </a>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-zinc-300 text-zinc-950 lg:hidden"
            aria-label={isOpen ? "Zavrieť menu" : "Otvoriť menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </header>

      <div className={`fixed inset-0 z-[100] lg:hidden transition-all duration-300 ${isOpen ? "visible" : "invisible pointer-events-none"}`}>
        <button
          type="button"
          aria-label="Zavrieť mobilné menu"
          onClick={() => setIsOpen(false)}
          className={`absolute inset-0 bg-zinc-950/20 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0"}`}
        />
        <nav 
          className={`absolute inset-x-0 bottom-0 h-[75dvh] overflow-y-auto border-t border-zinc-200 bg-white px-4 pb-10 pt-5 shadow-2xl transition-transform duration-300 ease-out ${
            isOpen ? "translate-y-0" : "translate-y-full"
          }`} 
          aria-label="Mobilná navigácia"
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between border-b border-zinc-200 pb-4">
            <Link href="/" className="brand-wordmark brand-wordmark--mobile" aria-label="Riger s.r.o. domov" onClick={() => setIsOpen(false)}>
              <span className="brand-wordmark__frame" aria-hidden="true">
                RIGER
              </span>
              <span className="brand-wordmark__suffix" aria-hidden="true">
                s.r.o.
              </span>
            </Link>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-zinc-300 text-zinc-950"
              aria-label="Zavrieť menu"
              onClick={() => setIsOpen(false)}
            >
              <CloseIcon />
            </button>
          </div>

          <div className="mx-auto mt-5 grid max-w-7xl gap-2">
            {[
              ...primaryLinks.slice(0, 1),
              ...services.map((service) => ({ href: `/${service.slug}`, label: service.title })),
              ...primaryLinks.slice(1)
            ].map((link) => {
              const active = isActive(link.href);
              const isService = services.some((service) => `/${service.slug}` === link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`rounded-md border px-4 py-3.5 font-bold transition ${
                    active 
                      ? "border-orange-200 bg-orange-50 text-orange-700" 
                      : `border-transparent hover:border-orange-200 hover:bg-orange-50 hover:text-orange-700 ${
                          isService ? "text-[0.95rem] text-zinc-700" : "text-lg text-zinc-950"
                        }`
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href={site.phoneHref}
              onClick={() => setIsOpen(false)}
              className="mt-3 inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-orange-600 px-4 py-3 font-bold text-white shadow-sm transition hover:bg-orange-700"
            >
              <PhoneIcon />
              {site.phoneDisplay}
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none">
      <path
        d="M6.2 2.8 8 6.7 6.7 8c.9 1.9 2.4 3.4 4.3 4.3l1.3-1.3 3.9 1.8-.6 3.4c-.2.9-1 1.5-1.9 1.4C7.4 17.1 2.9 12.6 2.4 6.3c-.1-.9.5-1.7 1.4-1.9l2.4-.6Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5" fill="none">
      <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5" fill="none">
      <path d="m5 5 10 10M15 5 5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}
