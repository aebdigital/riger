import type { Metadata } from "next";
import Link from "next/link";
import { InquiryForm } from "@/components/InquiryForm";
import { ArrowIcon } from "@/components/PriceTable";
import { site } from "@/lib/site-data";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktujte Riger s.r.o. pre prenájom fasádneho a pojazdného lešenia, debnenia, stojok a šalovacích svoriek.",
  alternates: {
    canonical: "/kontakt"
  },
  openGraph: {
    title: "Kontakt - Riger s.r.o.",
    description: "Telefón, email, sklad a kontaktný formulár pre prenájom lešenia Riger s.r.o.",
    url: absoluteUrl("/kontakt"),
    images: [
      {
        url: site.ogImage,
        alt: "Kontakt Riger s.r.o."
      }
    ]
  }
};

export default function KontaktPage() {
  return (
    <main>
      <section className="surface-grid px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase text-orange-700">Kontakt</p>
            <h1 className="mt-3 text-4xl font-black leading-[1.05] tracking-normal text-zinc-950 sm:text-6xl">
              Dohodnite si prenájom alebo cenovú ponuku
            </h1>
            <p className="mt-5 text-lg font-medium leading-8 text-zinc-700">
              Pre rýchly termín volajte priamo. Ak nám pošlete dopyt cez formulár, ozveme sa Vám s výpočtom a
              dostupnosťou.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="grid gap-6">
            <section className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-black tracking-normal text-zinc-950">Kontaktné údaje</h2>
              <div className="mt-6 grid gap-4 text-sm font-medium leading-6 text-zinc-700">
                <a className="flex items-center gap-3 font-bold text-zinc-950 hover:text-orange-700" href={site.phoneHref}>
                  <PhoneIcon />
                  {site.phoneDisplay}
                </a>
                <a className="flex items-center gap-3 font-bold text-zinc-950 hover:text-orange-700" href={`mailto:${site.email}`}>
                  <MailIcon />
                  {site.email}
                </a>
                <a
                  className="flex items-center gap-3 font-bold text-zinc-950 hover:text-orange-700"
                  href={site.facebook}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FacebookIcon />
                  Facebook Riger s.r.o.
                </a>
              </div>
            </section>

            <section className="rounded-lg border border-zinc-200 bg-zinc-50 p-6">
              <h2 className="text-2xl font-black tracking-normal text-zinc-950">Adresa skladu</h2>
              <div className="mt-5 text-sm font-medium leading-6 text-zinc-700">
                {site.warehouseAddress.map((line) => (
                  <p key={line}>{line}</p>
                ))}
                <p className="mt-4 font-bold text-zinc-950">{site.hours}</p>
                <p>{site.dispatchNote}</p>
              </div>
            </section>

            <section className="rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-black tracking-normal text-zinc-950">Fakturačná adresa</h2>
              <div className="mt-5 text-sm font-medium leading-6 text-zinc-700">
                {site.billingAddress.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </section>
          </div>

          <section className="rounded-lg border-t-4 border-orange-600 bg-white p-6 shadow-sm md:p-8">
            <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="text-sm font-bold uppercase text-orange-700">Dopytový formulár</p>
                <h2 className="mt-2 text-3xl font-black tracking-normal text-zinc-950">Napíšte nám</h2>
              </div>
              <Link
                href="/referencie"
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-zinc-300 px-4 py-2.5 text-sm font-bold text-zinc-950 transition hover:border-orange-600 hover:text-orange-700"
              >
                Referencie
                <ArrowIcon />
              </Link>
            </div>
            <div className="mt-7">
              <InquiryForm />
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5 shrink-0 text-orange-600" fill="none">
      <path
        d="M6.2 2.8 8 6.7 6.7 8c.9 1.9 2.4 3.4 4.3 4.3l1.3-1.3 3.9 1.8-.6 3.4c-.2.9-1 1.5-1.9 1.4C7.4 17.1 2.9 12.6 2.4 6.3c-.1-.9.5-1.7 1.4-1.9l2.4-.6Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5 shrink-0 text-orange-600" fill="none">
      <path
        d="M3.5 5.5h13v9h-13v-9Zm.7.4 5.8 4.5 5.8-4.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-5 w-5 shrink-0 text-orange-600" fill="currentColor">
      <path d="M11.5 18v-7h2.3l.4-2.7h-2.7V6.6c0-.8.2-1.3 1.4-1.3h1.4V2.9c-.7-.1-1.4-.1-2.1-.1-2.1 0-3.5 1.3-3.5 3.6v1.9H6.3V11h2.4v7h2.8Z" />
    </svg>
  );
}
