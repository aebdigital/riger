"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type GalleryGroup = {
  slug: string;
  title: string;
  images: string[];
};

type ReferenceGalleryProps = {
  groups: GalleryGroup[];
};

export function ReferenceGallery({ groups }: ReferenceGalleryProps) {
  const [active, setActive] = useState("vsetko");

  const filteredImages = useMemo(
    () =>
      groups
        .filter((group) => active === "vsetko" || group.slug === active)
        .flatMap((group) =>
          group.images.map((image) => ({
            image,
            group: group.title
          }))
        ),
    [active, groups]
  );

  return (
    <div className="grid gap-8">
      <div className="flex flex-wrap gap-2">
        <button
          type="button"
          aria-pressed={active === "vsetko"}
          onClick={() => setActive("vsetko")}
          className="rounded-md border border-zinc-300 bg-white px-4 py-2 text-sm font-bold text-zinc-950 transition hover:border-orange-600 hover:text-orange-700 aria-pressed:border-orange-600 aria-pressed:bg-orange-600 aria-pressed:text-white"
        >
          Všetko
        </button>
        {groups.map((group) => (
          <button
            key={group.slug}
            type="button"
            aria-pressed={active === group.slug}
            onClick={() => setActive(group.slug)}
            className="rounded-md border border-zinc-300 bg-white px-4 py-2 text-sm font-bold text-zinc-950 transition hover:border-orange-600 hover:text-orange-700 aria-pressed:border-orange-600 aria-pressed:bg-orange-600 aria-pressed:text-white"
          >
            {group.title}
          </button>
        ))}
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredImages.map((item) => {
          const isProductImage = item.image.endsWith(".png");

          return (
            <a
              key={`${item.group}-${item.image}`}
              href={item.image}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-zinc-200 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <Image
                src={item.image}
                alt={`${item.group} - Riger s.r.o.`}
                fill
                sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className={`${isProductImage ? "object-contain p-5" : "object-cover"} transition duration-300 group-hover:scale-105`}
              />
              <span className="absolute left-3 top-3 rounded-md bg-zinc-950/82 px-2.5 py-1 text-xs font-bold text-white">
                {item.group}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
