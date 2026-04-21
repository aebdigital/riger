import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ParallaxHeroBackground } from "@/components/ParallaxHeroBackground";
import { ArrowIcon } from "@/components/PriceTable";
import { InquiryForm } from "@/components/InquiryForm";
import { facts, homeReferenceImages, services, site } from "@/lib/site-data";

export const metadata: Metadata = {
  title: site.seoTitle,
  description: site.seoDescription,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: site.seoTitle,
    description: site.seoDescription,
    url: site.url,
    images: [
      {
        url: site.ogImage,
        width: 2048,
        height: 1536,
        alt: "Prenájom lešenia Riger s.r.o."
      }
    ]
  }
};

export default function HomePage() {
  return (
    <main>
      <section className="relative flex min-h-[78vh] items-end overflow-hidden pt-24 text-white">
        <ParallaxHeroBackground image="/wp-content/uploads/2024/12/Fasadne-lesenie-Dubnica-scaled-1-2048x1536.jpg" />
        <div className="absolute inset-0 bg-zinc-950/60" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
          <div className="hero-copy max-w-4xl" data-no-reveal>
            <p className="mb-4 text-sm font-bold uppercase text-orange-300">Riger s.r.o. - Dubnica nad Váhom</p>
            <h1 className="text-4xl font-black leading-[1.05] tracking-normal sm:text-6xl lg:text-7xl">
              Požičovňa lešenia, debnenia, svoriek a pojazdných veží
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-medium leading-8 text-zinc-100">
              Naša spoločnosť Vám ponúka prenájom fasádneho a pojazdného lešenia. Ponúkame taktiež debnenie, stojky a
              šalovacie svorky pre stavby v Dubnici nad Váhom a okolí.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={site.phoneHref}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-orange-600 px-5 py-3 font-bold text-white shadow-sm transition hover:bg-orange-700"
              >
                <PhoneIcon />
                {site.phoneDisplay}
              </a>
              <Link
                href="#sluzby"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/70 bg-white/10 px-5 py-3 font-bold text-white backdrop-blur transition hover:bg-white/20"
              >
                Cenník služieb
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="sluzby" className="bg-zinc-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase text-orange-700">Naše služby a cenník</p>
              <h2 className="mt-3 text-3xl font-black tracking-normal text-zinc-950 md:text-5xl">Ponúkame široké spektrum služieb</h2>
            </div>
            <p className="max-w-xl text-base font-medium leading-7 text-zinc-600">
              Vyberte typ prenájmu a pozrite si orientačný cenník. Pri konkrétnej stavbe Vám radi vypočítame zostavu a
              rozloženie dielcov.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <article key={service.slug} className="overflow-hidden rounded-lg border border-zinc-200 bg-white shadow-sm">
                <div className="relative aspect-[4/3] bg-zinc-100">
                  <Image
                    src={service.cardImage}
                    alt={service.imageAlt}
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                    className={service.slug === "pojazdne-lesenie" ? "object-contain p-5" : "object-cover"}
                  />
                </div>
                <div className="grid min-h-64 content-between gap-6 p-5">
                  <div>
                    <p className="text-sm font-bold text-orange-700">{service.eyebrow}</p>
                    <h3 className="mt-2 text-2xl font-black tracking-normal text-zinc-950">{service.title}</h3>
                    <p className="mt-3 text-sm font-medium leading-6 text-zinc-600">{service.summary}</p>
                    <p className="mt-4 text-sm font-black text-zinc-950">{service.priceHint}</p>
                  </div>
                  <Link
                    href={`/${service.slug}`}
                    className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-orange-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-orange-700"
                  >
                    Cenník
                    <ArrowIcon />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="surface-grid px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-bold uppercase text-orange-700">Riger s.r.o.</p>
            <h2 className="mt-3 text-3xl font-black tracking-normal text-zinc-950 md:text-5xl">
              Staviame svoju reputáciu od roku 2009.
            </h2>
            <p className="mt-5 text-lg font-medium leading-8 text-zinc-700">
              Sme malá firma zaoberajúca sa požičiavaním fasádneho a pojazdného lešenia, stropného debnenia a
              podperných stojok. Našou hlavnou prednosťou je flexibilita a dôslednosť.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {facts.map((fact) => (
              <article key={fact.title} className="rounded-lg border border-zinc-200 bg-white p-5 shadow-sm">
                <Image src={fact.icon} alt="" width={52} height={52} className="h-12 w-12 rounded-md bg-orange-50 p-2" />
                <h3 className="mt-5 text-xl font-black tracking-normal text-zinc-950">{fact.title}</h3>
                <p className="mt-3 text-sm font-medium leading-6 text-zinc-600">{fact.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="objednavka" className="bg-zinc-50 px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-center">
          <div className="rounded-lg border-t-4 border-orange-600 bg-white p-6 shadow-sm md:p-8">
            <h2 className="text-3xl font-black tracking-normal text-zinc-950">Objednajte si nás</h2>
            <p className="mt-3 max-w-2xl text-sm font-medium leading-6 text-zinc-600">
              Pošlite dopyt k lešeniu, debneniu alebo svorkám. Pre rýchlejší termín volajte priamo na telefón.
            </p>
            <div className="mt-7">
              <InquiryForm />
            </div>
          </div>
          <div className="relative mx-auto aspect-[663/1024] w-full max-w-sm overflow-hidden rounded-lg bg-zinc-100 shadow-sm">
            <Image
              src="/wp-content/uploads/2024/12/sms-photo-1325x2048-1-663x1024.webp"
              alt="SMS komunikácia pri objednávke"
              fill
              sizes="(min-width: 1024px) 30vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section id="referencie" className="surface-grid px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase text-orange-700">Referencie</p>
              <h2 className="mt-3 text-3xl font-black tracking-normal text-zinc-950 md:text-5xl">Pozrite sa bližšie na naše projekty</h2>
            </div>
            <Link
              href="/referencie"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-zinc-300 px-4 py-2.5 text-sm font-bold text-zinc-950 transition hover:border-orange-600 hover:text-orange-700"
            >
              Všetky referencie
              <ArrowIcon />
            </Link>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {homeReferenceImages.map((item) => (
              <a
                key={item.src}
                href={item.src}
                className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-zinc-200 transition hover:-translate-y-0.5 hover:shadow-md"
              >
                <Image
                  src={item.src}
                  alt={`${item.title} - Riger s.r.o.`}
                  fill
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-md bg-zinc-950/82 px-2.5 py-1 text-xs font-bold text-white">
                  {item.group}
                </span>
              </a>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <Link
              href="/referencie"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-orange-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-orange-700"
            >
              Všetky referencie
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>
    </main>
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
