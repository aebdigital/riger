import Link from "next/link";
import { services, site } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer id="kontakt" className="bg-zinc-950 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.3fr_1fr_1fr] lg:px-8">
        <section>
          <h2 className="text-3xl font-bold tracking-normal">Kontakt</h2>
          <div className="mt-6 grid gap-5 text-sm leading-6 text-zinc-300 sm:grid-cols-2 md:grid-cols-1">
            <div>
              <h3 className="font-bold text-white">Adresa skladu</h3>
              {site.warehouseAddress.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p className="mt-3">{site.hours}</p>
              <p>{site.dispatchNote}</p>
            </div>
            <div>
              <h3 className="font-bold text-white">Fakturačná adresa</h3>
              {site.billingAddress.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold">Rýchly kontakt</h2>
          <div className="mt-5 grid gap-3 text-sm text-zinc-300">
            <a className="font-semibold text-white underline-offset-4 hover:underline" href={site.phoneHref}>
              {site.phoneDisplay}
            </a>
            <a className="font-semibold text-white underline-offset-4 hover:underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <a
              className="inline-flex items-center gap-2 font-semibold text-white underline-offset-4 hover:underline"
              href={site.facebook}
              target="_blank"
              rel="noreferrer"
            >
              <FacebookIcon />
              Riger s.r.o.
            </a>
          </div>
        </section>

        <section>
          <h2 className="text-lg font-bold">Cenník služieb</h2>
          <nav className="mt-5 grid gap-2 text-sm text-zinc-300" aria-label="Pätičková navigácia">
            {services.map((service) => (
              <Link key={service.slug} href={`/${service.slug}`} className="hover:text-white">
                {service.title}
              </Link>
            ))}
            <Link href="/referencie" className="pt-2 hover:text-white">
              Referencie
            </Link>
            <Link href="/kontakt" className="hover:text-white">
              Kontakt
            </Link>
            <Link href="/ochrana-osobnych-udajov" className="pt-2 hover:text-white">
              Ochrana osobných údajov
            </Link>
            <button 
              onClick={() => window.dispatchEvent(new CustomEvent('open-cookie-settings'))}
              className="pt-2 text-left hover:text-white"
            >
              Nastavenia cookies
            </button>
          </nav>
        </section>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Riger s.r.o.</p>
          <p>
            Tvorba webu -{" "}
            <a className="text-zinc-300 underline-offset-4 hover:text-white hover:underline" href="https://aebdigital.sk/" target="_blank" rel="noreferrer">
              AEB Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FacebookIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor">
      <path d="M11.5 18v-7h2.3l.4-2.7h-2.7V6.6c0-.8.2-1.3 1.4-1.3h1.4V2.9c-.7-.1-1.4-.1-2.1-.1-2.1 0-3.5 1.3-3.5 3.6v1.9H6.3V11h2.4v7h2.8Z" />
    </svg>
  );
}
