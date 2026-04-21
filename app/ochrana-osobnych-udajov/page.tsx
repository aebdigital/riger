import type { Metadata } from "next";
import { privacyParagraphs, site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Ochrana osobných údajov",
  description: "Zásady ochrany osobných údajov spoločnosti Riger s.r.o.",
  alternates: {
    canonical: "/ochrana-osobnych-udajov"
  },
  openGraph: {
    title: "Ochrana osobných údajov - Riger s.r.o.",
    description: "Zásady ochrany osobných údajov spoločnosti Riger s.r.o.",
    url: `${site.url}/ochrana-osobnych-udajov`
  }
};

export default function PrivacyPage() {
  return (
    <main className="bg-zinc-50 pt-24">
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-bold uppercase text-orange-700">Riger s.r.o.</p>
          <h1 className="mt-3 text-4xl font-black tracking-normal text-zinc-950 sm:text-5xl">Ochrana osobných údajov</h1>

          <div className="mt-8 rounded-lg border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black tracking-normal text-zinc-950">Prevádzkovateľ</h2>
            <div className="mt-4 grid gap-1 text-sm font-medium leading-6 text-zinc-700">
              {site.billingAddress.slice(0, 4).map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p>E-mail: {site.email}</p>
              <p>Tel.: {site.phoneDisplay}</p>
            </div>
          </div>

          <article className="mt-8 grid gap-5 rounded-lg border border-zinc-200 bg-white p-6 text-base font-medium leading-8 text-zinc-700 shadow-sm">
            {privacyParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </article>
        </div>
      </section>
    </main>
  );
}
