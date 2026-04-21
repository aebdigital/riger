import type { Metadata } from "next";
import { ReferenceGallery } from "@/components/ReferenceGallery";
import { galleryGroups, site } from "@/lib/site-data";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Referencie",
  description:
    "Fotografie realizácií Riger s.r.o. - fasádne lešenie, pojazdné lešenie, debnenie, stojky a šalovacie svorky.",
  alternates: {
    canonical: "/referencie"
  },
  openGraph: {
    title: "Referencie - Riger s.r.o.",
    description: "Pozrite si realizácie prenájmu lešenia, debnenia, stojok a šalovacích svoriek.",
    url: absoluteUrl("/referencie"),
    images: [
      {
        url: site.ogImage,
        alt: "Referencie Riger s.r.o."
      }
    ]
  }
};

export default function ReferenciePage() {
  return (
    <main>
      <section className="surface-grid px-4 pb-16 pt-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase text-orange-700">Referencie</p>
            <h1 className="mt-3 text-4xl font-black leading-[1.05] tracking-normal text-zinc-950 sm:text-6xl">
              Realizácie lešenia, debnenia a šalovacích prvkov
            </h1>
            <p className="mt-5 text-lg font-medium leading-8 text-zinc-700">
              Výber fotografií z prenájmu fasádneho lešenia, debnenia, stojok a šalovacích svoriek v Dubnici nad Váhom
              a okolí.
            </p>
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <ReferenceGallery groups={galleryGroups} />
        </div>
      </section>
    </main>
  );
}
