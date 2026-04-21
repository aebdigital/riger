export const site = {
  name: "Riger s.r.o.",
  title: "Prenájom lešenia - Riger s.r.o.",
  url: "https://pozicovnalesenia.sk",
  locale: "sk_SK",
  description:
    "Požičovňa fasádneho a pojazdného lešenia, stropného debnenia, podperných stojok a šalovacích svoriek v Dubnici nad Váhom.",
  seoTitle: "Prenájom lešenia Dubnica nad Váhom | Riger s.r.o.",
  seoDescription:
    "Prenájom fasádneho a pojazdného lešenia, stropného debnenia, stojok a šalovacích svoriek. Riger s.r.o. obsluhuje Dubnicu nad Váhom, Ilavu, Trenčín, Púchov a okolie.",
  keywords: [
    "prenájom lešenia",
    "požičovňa lešenia",
    "fasádne lešenie",
    "pojazdné lešenie",
    "stropné debnenie",
    "podperné stojky",
    "šalovacie svorky",
    "Dubnica nad Váhom",
    "Ilava",
    "Trenčín",
    "Púchov",
    "Považská Bystrica"
  ],
  phoneDisplay: "+421 917 52 62 63",
  phoneHref: "tel:+421917526263",
  phoneRaw: "+421917526263",
  email: "rigersro@gmail.com",
  logo: "/wp-content/uploads/2024/12/ezgif-3-11a93dd120.jpg",
  ogImage: "/wp-content/uploads/2024/12/Fasadne-lesenie-Dubnica-scaled-1-2048x1536.jpg",
  facebook: "https://www.facebook.com/profile.php?id=100067093181233",
  warehouseAddress: [
    "Areál poľnohospodárskeho družstva",
    "Ul. Družstevná, Kvášovec 10",
    "018 41 Dubnica nad Váhom"
  ],
  billingAddress: [
    "Riger s.r.o.",
    "Pod kaštieľom 634/21",
    "018 41 Dubnica nad Váhom",
    "IČO: 44414862, DIČ: 2022698480",
    "ORSR Trenčín oddiel Sro, vložka č. 20807/R.",
    "Fio Banka: SK75 8330 0000 0022 0116 9012"
  ],
  hours: "Ne: zatvorené, Po-Pia: 8:00-17:00",
  dispatchNote: "Čas vyskladnenia treba dohodnúť telefonicky na 0917 52 62 63.",
  areaServed: [
    "Dubnica nad Váhom",
    "Nová Dubnica",
    "Ilava",
    "Trenčín",
    "Púchov",
    "Považská Bystrica",
    "Bánovce nad Bebravou"
  ]
};

export type PriceTable = {
  caption: string;
  headers: string[];
  rows: string[][];
  note?: string;
};

export type Service = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  priceHint: string;
  cardImage: string;
  heroImage: string;
  galleryImages: string[];
  imageAlt: string;
  intro: string[];
  tables: PriceTable[];
  notes?: string[];
  process?: string[];
};

export const services: Service[] = [
  {
    slug: "fasadne-lesenie",
    title: "Fasádne lešenie",
    eyebrow: "MJ Uni 70",
    summary: "Vhodné pre prácu pri stenách: zateplovanie, výmeny krovov a nátery.",
    priceHint: "od 0,07 €/m²/1 deň",
    cardImage: "/wp-content/uploads/2024/12/lesenie.jpg",
    heroImage: "/wp-content/uploads/2024/12/Fasadne-lesenie-Dubnica-scaled-1-2048x1536.jpg",
    galleryImages: [
      "/wp-content/uploads/2024/12/Fasadne-lesenie-Dubnica-scaled-1-1024x768.jpg",
      "/wp-content/uploads/2024/12/Fasadne-lesenie-Ilava-scaled-1-1024x576.jpg",
      "/wp-content/uploads/2024/12/Fasadne-lesenie-scaled-1-1024x768.jpg",
      "/wp-content/uploads/2024/12/Lesenie-1-scaled-1-1024x576.jpg",
      "/wp-content/uploads/2024/12/lesenie4-scaled-1-1024x576.jpg",
      "/wp-content/uploads/2024/12/DSCF5425-scaled-1-1024x768.jpg"
    ],
    imageAlt: "Fasádne lešenie pri rodinnom dome",
    intro: [
      "Radi zdarma vypočítame zostavu potrebných dielcov a ich rozloženie.",
      "K prenájmu vieme pri menších stavbách zabezpečiť aj odbornú montáž.",
      "Lešenie na väčšie stavby treba rezervovať dopredu.",
      "Záloha za 100 m² systému je 750 Eur."
    ],
    tables: [
      {
        caption: "Cena prenájmu fasádneho lešenia",
        headers: ["Fasádne lešenie", "Od 1 do 7 dní", "Od 8 do 14 dní", "Nad 15 dní"],
        rows: [
          ["20-50 m²", "0,70 €/m²/1 deň", "0,30 €/m²/1 deň", "0,25 €/m²/1 deň"],
          ["50-100 m²", "0,40 €/m²/1 deň", "0,25 €/m²/1 deň", "0,18 €/m²/1 deň"],
          ["100-150 m²", "0,30 €/m²/1 deň", "0,18 €/m²/1 deň", "0,12 €/m²/1 deň"],
          ["150-300 m²", "0,25 €/m²/1 deň", "0,12 €/m²/1 deň", "0,10 €/m²/1 deň"],
          ["300-500 m²", "0,20 €/m²/1 deň", "0,10 €/m²/1 deň", "0,08 €/m²/1 deň"],
          ["Nad 500 m²", "0,15 €/m²/1 deň", "0,08 €/m²/1 deň", "0,07 €/m²/1 deň"]
        ]
      }
    ]
  },
  {
    slug: "pojazdne-lesenie",
    title: "Pojazdné lešenie",
    eyebrow: "Hliníkové a oceľové veže",
    summary:
      "Vhodné pre prácu v priestore: sadrokartóny, stropy, podhľady, nátery, výmeny okien či svietidiel.",
    priceHint: "od 8,70 €/1 deň",
    cardImage: "/wp-content/uploads/2024/12/Pojazdne-lesenie_1_optimized.png",
    heroImage: "/wp-content/uploads/2024/12/boss-obrazok-2.jpg",
    galleryImages: [
      "/wp-content/uploads/2024/12/boss-obrazok-2.jpg",
      "/wp-content/uploads/2024/12/Pojazdne-lesenie_optimized.png",
      "/wp-content/uploads/2024/12/Pojazdne-lesenie_1_optimized.png",
      "/wp-content/uploads/2024/12/Pojazdne-lesenie.png"
    ],
    imageAlt: "Pojazdná pracovná veža BOSS",
    intro: [
      "Pojazdné hliníkové lešenie, pojazd, veža BOSS.",
      "Vhodné pre prácu v priestore: sadrokartóny, stropy, podhľady, nátery, výmeny okien či svietidiel a pomoc pri stavaní konštrukcií.",
      "Ponúkame aj pojazdné oceľové lešenie MJ UNI 70 pre prácu pri stenách."
    ],
    tables: [
      {
        caption: "Veža 2,5 m x 1,5 m pracovnej výšky",
        headers: ["Výška", "Do 7 dní", "Od 8 do 14 dní", "Od 15 do 30 dní", "Nad 31 dní"],
        rows: [
          ["do 4,2 m", "17,70 €/1 deň", "15,70 €/1 deň", "13,70 €/1 deň", "8,70 €/1 deň"],
          ["do 6,2 m", "23,70 €/1 deň", "19,70 €/1 deň", "17,70 €/1 deň", "15,70 €/1 deň"],
          ["do 8,2 m", "29,70 €/1 deň", "25,70 €/1 deň", "19,70 €/1 deň", "19,70 €/1 deň"],
          ["do 10,2 m", "33,70 €/1 deň", "27,70 €/1 deň", "25,70 €/1 deň", "23,70 €/1 deň"],
          ["do 12,2 m", "37,70 €/1 deň", "33,70 €/1 deň", "27,70 €/1 deň", "25,70 €/1 deň"]
        ]
      },
      {
        caption: "Veža 2,5 m x 0,9 m pracovnej výšky",
        headers: ["Výška", "Do 7 dní", "Od 8 do 14 dní", "Od 15 do 30 dní", "Nad 31 dní"],
        rows: [
          ["do 4,2 m", "17,70 €/1 deň", "15,70 €/1 deň", "13,70 €/1 deň", "11,70 €/1 deň"],
          ["do 6,2 m", "23,70 €/1 deň", "19,70 €/1 deň", "15,70 €/1 deň", "13,70 €/1 deň"]
        ]
      },
      {
        caption: "Pojazdné oceľové lešenie - veža 300 x 80 cm pracovnej výšky",
        headers: ["Výška", "Do 3 dní", "Od 3 do 7 dní", "Od 7 do 14 dní", "Nad 14 dní"],
        rows: [
          ["do 4,4 m", "15,70 €/1 deň", "14,70 €/1 deň", "12,70 €/1 deň", "10,50 €/1 deň"],
          ["do 6,2 m", "19,70 €/1 deň", "17,70 €/1 deň", "15,70 €/1 deň", "13,70 €/1 deň"]
        ]
      },
      {
        caption: "Doprava a doplnkové služby - orientačný cenník",
        headers: ["Služba", "Cena"],
        rows: [
          ["Doprava", "individuálna cena podľa množstva a vzdialenosti"],
          ["Prenájom ochrannej siete", "0,015 €/m²/1 deň"],
          ["Montáž ochrannej siete", "0,4 €/m²"],
          ["Demontáž ochrannej siete", "0,3 €/m²"]
        ]
      }
    ]
  },
  {
    slug: "debnenie-a-stojky",
    title: "Debnenie a stojky",
    eyebrow: "Stropné debnenie",
    summary:
      "Vhodné pre betonáž stropov, prekladov a podoprenie keramických stropov.",
    priceHint: "od 0,15 €/stojka/1 deň",
    cardImage: "/wp-content/uploads/2024/12/Debnenie.jpg",
    heroImage: "/wp-content/uploads/2024/12/Debnenie-stropov-1536x1152.jpg",
    galleryImages: [
      "/wp-content/uploads/2024/12/Debnenie-stropov-1024x768.jpg",
      "/wp-content/uploads/2024/12/debnenie-vencov-1-1024x768.jpg",
      "/wp-content/uploads/2024/12/debnenie-vencov-1024x768.jpg",
      "/wp-content/uploads/2024/12/Debnenie-768x445.jpg",
      "/wp-content/uploads/2024/12/Stojky-rozmery.jpg"
    ],
    imageAlt: "Stropné debnenie a podperné stojky",
    intro: [
      "Stropné debnenie je vhodné pre betonáž stropov do 30 cm hrúbky.",
      "V priemere treba uložiť stojky od 0,5-1,2 ks/m² podľa typu stojky, nosníky každých 50-70 cm a podnosníky každé 2 m.",
      "Parametre závisia od hrúbky betónovej dosky a vždy podľa vášho stavebného dozoru, statika alebo architekta.",
      "V cene za m² nie sú zahrnuté voliteľné položky: odformovací olej 2,90 €/liter, spotreba cca 15 l/100 m².",
      "Nastaviteľná výška: 1,9 m - 3,6 m."
    ],
    tables: [
      {
        caption: "Cena prenájmu stropného debnenia",
        headers: ["Debnenie", "Od 5 do 20 dní", "Od 21 do 35 dní", "Nad 35 dní"],
        rows: [
          ["3 ks systém", "0,40 €/m²/1 deň", "0,30 €/m²/1 deň", "0,27 €/m²/1 deň"],
          ["5 ks systém", "0,50 €/m²/1 deň", "0,30 €/m²/1 deň", "0,27 €/m²/1 deň"]
        ]
      },
      {
        caption: "Cena prenájmu podperných stojok",
        headers: ["Stojky", "Do 7 dní", "Od 8 do 14 dní", "Nad 14 dní"],
        rows: [
          ["do 25 ks", "0,50 €/stojka/1 deň", "0,30 €/stojka/1 deň", "0,25 €/stojka/1 deň"],
          ["do 50 ks", "0,25 €/stojka/1 deň", "0,20 €/stojka/1 deň", "0,15 €/stojka/1 deň"],
          ["do 70 ks", "0,22 €/stojka/1 deň", "0,20 €/stojka/1 deň", "0,18 €/stojka/1 deň"],
          ["nad 70 ks", "0,20 €/stojka/1 deň", "0,20 €/stojka/1 deň", "0,15 €/stojka/1 deň"]
        ]
      },
      {
        caption: "Doplnky k debneniu a stojkám",
        headers: ["Doplnok", "Do 7 dní", "Od 8 do 14 dní", "Nad 14 dní"],
        rows: [
          ["Nástavec na hlavu", "0,20 €/ks/1 deň", "0,19 €/ks/1 deň", "0,10 €/ks/1 deň"],
          ["Pavúk", "0,20 €/ks/1 deň", "0,19 €/ks/1 deň", "0,15 €/ks/1 deň"],
          ["Nosník H20", "0,20 €/bm/1 deň", "0,19 €/bm/1 deň", "0,15 €/bm/1 deň"],
          ["Doka doska", "1,25 €/m²/1 deň", "1,00 €/m²/1 deň", "0,50 €/m²/1 deň"],
          ["Šalovacia svorka", "1,25 €/ks/1 deň", "1,00 €/ks/1 deň", "0,50 €/ks/1 deň"]
        ]
      }
    ],
    notes: [
      "Nosnosť podperných stojok: 8-18 kN.",
      "Podperné stojky sú vhodné pri betonáži stropov, prekladov a pri podoprení keramických stropov."
    ]
  },
  {
    slug: "svorky",
    title: "Šalovacie svorky",
    eyebrow: "Svorky + 3S dosky",
    summary: "Vhodné pre rýchle obojstranné debnenie vencov, múrikov a prekladov.",
    priceHint: "2,50 €/bm/1 deň",
    cardImage: "/wp-content/uploads/2024/12/Salovacie-svorky-1024x768.jpg",
    heroImage: "/wp-content/uploads/2024/12/svorky-2-1252x1536.jpg",
    galleryImages: [
      "/wp-content/uploads/2024/12/Salovacie-svorky-1-1024x768.jpg",
      "/wp-content/uploads/2024/12/Salovacie-svorky-1024x768.jpg",
      "/wp-content/uploads/2024/12/Svorky-1024x768.jpg",
      "/wp-content/uploads/2024/12/Svorky-rozmer.jpg",
      "/wp-content/uploads/2024/12/svorky-2-834x1024.jpg"
    ],
    imageAlt: "Šalovacie svorky na debnenie",
    intro: [
      "Hmotnosť svorky: cca 6 kg.",
      "Nastaviteľná rozteč: 24-54 cm, výška ramien 50 cm. Rozostupy cca každých 75 cm.",
      "Výhody: rýchle nastavenie pomocou aku skrutkovačky, závitová tyč skrytá vo vnútri svorky.",
      "Záloha za sadu 40 bm je 700 Eur."
    ],
    process: [
      "Uloženie a poviazanie armovania.",
      "Natretie 3S dosiek odformovacím olejom.",
      "Priloženie 3S dosiek na múr v požadovanej výške.",
      "Doplnenie dorezov na miesta, ktoré 3S dosky nevyplnili.",
      "Stiahnutie múru šalovacou svorkou vrátane vnútornej rozpery.",
      "Naliatie betónu.",
      "Po 12 hodinách očistiť svorky, oddebniť a očistiť diely."
    ],
    tables: [
      {
        caption: "Cena prenájmu šalovacích svoriek",
        headers: ["Sada", "Cena", "Jednotka"],
        rows: [["Šalovacie svorky + 3S dosky", "2,50", "€/bm/1 deň"]],
        note: "Doba prenájmu je väčšinou 3 až 4 dni."
      }
    ]
  }
];

export const serviceMap = Object.fromEntries(services.map((service) => [service.slug, service])) as Record<
  string,
  Service
>;

export const facts = [
  {
    title: "Lokality",
    text: "Dubnica nad Váhom, Nová Dubnica, Ilava, Trenčín, Púchov, Považská Bystrica, Bánovce a okolie.",
    icon: "/wp-content/uploads/2025/01/66698a3e289a236f7aabc740_icons8-tree-planting-256.webp"
  },
  {
    title: "Bezkonkurenčná cena",
    text: "Zdarma vypočítame zostavu potrebných dielcov a ich rozloženie.",
    icon: "/wp-content/uploads/2025/01/66698a3e7c1e8771a62e9650_icons8-worker-256-1.webp"
  },
  {
    title: "Flexibilita",
    text: "Vieme po dohode vyskladniť aj mimo štandardných otváracích hodín.",
    icon: "/wp-content/uploads/2025/01/66698a3e6ea4a6cf97b4bfc8_icons8-hot-line-256-1.webp"
  }
];

export const galleryGroups = [
  {
    slug: "lesenie",
    title: "Lešenie",
    images: [
      "/wp-content/uploads/2024/12/06-scaled-1-1024x768.jpg",
      "/wp-content/uploads/2024/12/lesenie4-scaled-1-1024x576.jpg",
      "/wp-content/uploads/2024/12/Lesenie-1-scaled-1-1024x576.jpg",
      "/wp-content/uploads/2024/12/IMG_20160404_184127_HDR-scaled-1-1024x576.jpg",
      "/wp-content/uploads/2024/12/Fasadne-lesenie-scaled-1-1024x768.jpg",
      "/wp-content/uploads/2024/12/Fasadne-lesenie-Ilava-scaled-1-1024x576.jpg",
      "/wp-content/uploads/2024/12/Fasadne-lesenie-Dubnica-scaled-1-1024x768.jpg",
      "/wp-content/uploads/2024/12/DSCF5425-scaled-1-1024x768.jpg",
      "/wp-content/uploads/2024/12/DSC00572-1024x768.jpg",
      "/wp-content/uploads/2024/12/05-scaled-1-1024x768.jpg",
      "/lesenie/IMG_20220408_111840.jpg",
      "/lesenie/IMG_20220408_112026.jpg",
      "/lesenie/IMG_20230621_123809.jpg",
      "/lesenie/IMG_20231020_135242.jpg",
      "/lesenie/IMG_20231020_135311.jpg",
      "/lesenie/IMG_20231020_135341.jpg",
      "/lesenie/IMG_20240509_214101.jpg",
      "/lesenie/IMG_20241010_114925.jpg",
      "/lesenie/IMG_20250430_180027.jpg",
      "/lesenie/IMG_20250430_180034.jpg",
      "/lesenie/IMG_20250430_180221.jpg",
      "/lesenie/IMG_20250610_121612.jpg"
    ]
  },
  {
    slug: "debnenie",
    title: "Debnenie",
    images: [
      "/wp-content/uploads/2024/12/Debnenie-stropov-1024x768.jpg",
      "/wp-content/uploads/2024/12/debnenie-vencov-1-1024x768.jpg",
      "/wp-content/uploads/2024/12/debnenie-vencov-1024x768.jpg"
    ]
  },
  {
    slug: "stojky-a-svorky",
    title: "Stojky a svorky",
    images: [
      "/wp-content/uploads/2024/12/Svorky-rozmer.jpg",
      "/wp-content/uploads/2024/12/svorky-2-834x1024.jpg",
      "/wp-content/uploads/2024/12/Svorky-1024x768.jpg",
      "/wp-content/uploads/2024/12/Stojky-rozmery.jpg",
      "/wp-content/uploads/2024/12/Salovacie-svorky-1-1024x768.jpg"
    ]
  }
];

export const homeReferenceImages = [
  {
    src: "/wp-content/uploads/2024/12/Fasadne-lesenie-Dubnica-scaled-1-1024x768.jpg",
    title: "Fasádne lešenie Dubnica nad Váhom",
    group: "Lešenie"
  },
  {
    src: "/wp-content/uploads/2024/12/lesenie4-scaled-1-1024x576.jpg",
    title: "Lešenie pri rodinnom dome",
    group: "Lešenie"
  },
  {
    src: "/wp-content/uploads/2024/12/Debnenie-stropov-1024x768.jpg",
    title: "Stropné debnenie",
    group: "Debnenie"
  },
  {
    src: "/wp-content/uploads/2024/12/Salovacie-svorky-1-1024x768.jpg",
    title: "Šalovacie svorky",
    group: "Stojky a svorky"
  },
  {
    src: "/wp-content/uploads/2024/12/Fasadne-lesenie-Ilava-scaled-1-1024x576.jpg",
    title: "Fasádne lešenie Ilava",
    group: "Lešenie"
  },
  {
    src: "/wp-content/uploads/2024/12/debnenie-vencov-1-1024x768.jpg",
    title: "Debnenie vencov",
    group: "Debnenie"
  },
  {
    src: "/wp-content/uploads/2024/12/Svorky-1024x768.jpg",
    title: "Svorky a stojky",
    group: "Stojky a svorky"
  },
  {
    src: "/wp-content/uploads/2024/12/DSCF5425-scaled-1-1024x768.jpg",
    title: "Realizácia lešenia",
    group: "Lešenie"
  }
];

export const privacyParagraphs = [
  "Tieto Zásady ochrany osobných údajov popisujú, aké osobné údaje spracúvame v súvislosti s používaním našej webovej stránky a kontaktných formulárov.",
  "Na stránke www.pozicovnalesenia.sk prevádzkujeme kontaktný formulár, ktorého účelom je umožniť vám položiť otázku k našim produktom a službám alebo požiadať o cenovú ponuku.",
  "Rozsah spracúvaných údajov: meno a priezvisko, e-mailová adresa a telefónne číslo.",
  "Spracúvame uvedené údaje, aby sme vás mohli kontaktovať a reagovať na váš dopyt. Právny základ je článok 6 ods. 1 písm. b) GDPR - plnenie opatrení pred uzavretím zmluvy na žiadosť dotknutej osoby.",
  "Osobné údaje budeme uchovávať maximálne 10 rokov od odozvy na váš dopyt, pokiaľ nevznikne ďalší zmluvný vzťah.",
  "Na našej webovej stránke používame nevyhnutné cookies na základnú funkčnosť stránky a štatistické cookies iba so súhlasom používateľa.",
  "Používateľ môže kedykoľvek odvolať súhlas s využívaním štatistických cookies prostredníctvom nastavení cookie lišty alebo priamo v prehliadači.",
  "Podľa nariadenia GDPR máte právo na prístup k osobným údajom, opravu nepresných údajov, vymazanie, obmedzenie spracovania, prenosnosť údajov, odvolanie súhlasu a podanie sťažnosti u Úradu na ochranu osobných údajov SR.",
  "V prípade otázok alebo uplatnenia vašich práv nás môžete kontaktovať na rigersro@gmail.com alebo telefónnom čísle +421 917 52 62 63.",
  "Tieto Zásady nadobúdajú účinnosť dňom 8. 6. 2025."
];
