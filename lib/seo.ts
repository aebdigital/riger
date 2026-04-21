import { services, site } from "@/lib/site-data";

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) {
    return path;
  }

  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
      "@id": `${site.url}/#organization`,
      name: site.name,
      legalName: site.name,
      url: site.url,
      logo: absoluteUrl(site.logo),
      image: absoluteUrl(site.ogImage),
      description: site.seoDescription,
      telephone: site.phoneRaw,
      email: site.email,
      taxID: "44414862",
      vatID: "SK2022698480",
      priceRange: "€",
      sameAs: [site.facebook],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Ul. Družstevná, Kvášovec 10",
        addressLocality: "Dubnica nad Váhom",
        postalCode: "018 41",
        addressCountry: "SK"
      },
      areaServed: site.areaServed.map((area) => ({
        "@type": "City",
        name: area
      })),
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "17:00"
        }
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Prenájom stavebného vybavenia",
        itemListElement: services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.summary,
            url: absoluteUrl(`/${service.slug}`)
          }
        }))
      }
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.title,
      description: site.seoDescription,
      inLanguage: "sk-SK",
      publisher: {
        "@id": `${site.url}/#organization`
      }
    }
  ]
};
