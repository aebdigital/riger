import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowIcon, PriceTable } from "@/components/PriceTable";
import { serviceMap, services, site } from "@/lib/site-data";
import { absoluteUrl } from "@/lib/seo";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceMap[slug];

  if (!service) {
    return {};
  }

  return {
    title: service.title,
    description: service.summary,
    keywords: [...site.keywords, service.title, service.eyebrow],
    alternates: {
      canonical: `/${service.slug}`
    },
    openGraph: {
      title: `${service.title} - Riger s.r.o.`,
      description: service.summary,
      url: absoluteUrl(`/${service.slug}`),
      images: [
        {
          url: service.heroImage,
          alt: service.imageAlt
        }
      ],
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} - Riger s.r.o.`,
      description: service.summary,
      images: [service.heroImage]
    }
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = serviceMap[slug];

  if (!service) {
    notFound();
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Domov",
                    item: site.url
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: service.title,
                    item: absoluteUrl(`/${service.slug}`)
                  }
                ]
              },
              {
                "@type": "Service",
                "@id": `${absoluteUrl(`/${service.slug}`)}#service`,
                name: service.title,
                description: service.summary,
                serviceType: service.title,
                url: absoluteUrl(`/${service.slug}`),
                image: absoluteUrl(service.heroImage),
                provider: {
                  "@id": `${site.url}/#organization`
                },
                areaServed: site.areaServed.map((area) => ({
                  "@type": "City",
                  name: area
                })),
                offers: {
                  "@type": "Offer",
                  priceCurrency: "EUR",
                  description: service.priceHint,
                  availability: "https://schema.org/InStock",
                  url: absoluteUrl(`/${service.slug}`)
                }
              }
            ]
          })
        }}
      />
      <section className="relative flex min-h-[58vh] items-end overflow-hidden pt-24 text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${service.heroImage}')` }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-zinc-950/60" aria-hidden="true" />
        <div className="relative mx-auto w-full max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase text-orange-300">{service.eyebrow}</p>
            <h1 className="mt-4 text-4xl font-black leading-[1.05] tracking-normal sm:text-6xl">{service.title}</h1>
            <p className="mt-5 text-lg font-medium leading-8 text-zinc-100">{service.summary}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={site.phoneHref}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-orange-600 px-5 py-3 font-bold text-white shadow-sm transition hover:bg-orange-700"
              >
                Zavolať {site.phoneDisplay}
              </a>
              <Link
                href="/kontakt"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-white/70 bg-white/10 px-5 py-3 font-bold text-white backdrop-blur transition hover:bg-white/20"
              >
                Poslať dopyt
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[18rem_minmax(0,1fr)]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="grid gap-5">
              <nav className="rounded-lg border border-zinc-200 bg-white p-3 shadow-sm" aria-label="Navigácia služieb">
                <p className="px-3 pb-2 pt-1 text-xs font-bold uppercase text-orange-700">Služby</p>
                {services.map((item) => {
                  const isActive = item.slug === service.slug;

                  return (
                    <Link
                      key={item.slug}
                      href={`/${item.slug}`}
                      aria-current={isActive ? "page" : undefined}
                      className={`block rounded-md px-3 py-2.5 text-sm font-bold transition ${
                        isActive ? "bg-orange-600 text-white" : "text-zinc-800 hover:bg-orange-50 hover:text-orange-700"
                      }`}
                    >
                      {item.title}
                    </Link>
                  );
                })}
              </nav>

              <div className="rounded-lg border border-zinc-200 bg-zinc-50 p-6">
                <p className="text-sm font-bold uppercase text-orange-700">Orientačný cenník</p>
                <p className="mt-3 text-3xl font-black tracking-normal text-zinc-950">{service.priceHint}</p>
                <p className="mt-4 text-sm font-medium leading-6 text-zinc-600">
                  Ceny sa odvíjajú od množstva, trvania prenájmu a vzdialenosti dopravy. Pre presný výpočet nás
                  kontaktujte.
                </p>
                <Link
                  href="/kontakt"
                  className="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-md bg-orange-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-orange-700"
                >
                  Rýchly dopyt
                </Link>
              </div>
            </div>
          </aside>

          <div className="grid gap-12">
            <section className="grid gap-4">
              <h2 className="text-3xl font-black tracking-normal text-zinc-950">Informácie k prenájmu</h2>
              <div className="grid gap-3 text-base font-medium leading-8 text-zinc-700">
                {service.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {service.notes ? (
                <div className="grid gap-2 rounded-lg border border-orange-200 bg-orange-50 p-5 text-sm font-semibold text-orange-950">
                  {service.notes.map((note) => (
                    <p key={note}>{note}</p>
                  ))}
                </div>
              ) : null}
            </section>

            <div className="grid gap-10">
              {service.tables.map((table) => (
                <PriceTable key={table.caption} table={table} />
              ))}
            </div>

            <section>
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <p className="text-sm font-bold uppercase text-orange-700">Fotogaléria</p>
                  <h2 className="mt-2 text-3xl font-black tracking-normal text-zinc-950">Fotografie služby</h2>
                </div>
              </div>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {service.galleryImages.map((image) => {
                  const isProductImage = image.endsWith(".png");

                  return (
                    <a
                      key={image}
                      href={image}
                      className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-zinc-200 transition hover:-translate-y-0.5 hover:shadow-md"
                    >
                      <Image
                        src={image}
                        alt={`${service.title} - Riger s.r.o.`}
                        fill
                        sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                        className={`${isProductImage ? "object-contain p-5" : "object-cover"} transition duration-300 group-hover:scale-105`}
                      />
                    </a>
                  );
                })}
              </div>
              <div className="mt-6">
                <Link
                  href="/referencie"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-orange-600 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-orange-700"
                >
                  Všetky referencie
                  <ArrowIcon />
                </Link>
              </div>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
