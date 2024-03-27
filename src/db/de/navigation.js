import { logos, iso, photos } from "../../images";

export const navigationNavbar = [
  "Startseite",
  "Über uns",
  {
    "Produkte & Dienstleistungen": ["ICEqube", "SMARTqube"],
  },
  "Kontakt",
];

export const productsAndServices = {
  ICEqube: {
    // id: "usa",
    img: logos.logoICEqube,
    abstract:
      "Ice Qube bietet eine breite Palette von hochwertigen Produkten für die Klimakontrolle an. Das Angebot umfasst Klimaanlagen für die Zonen I und II, industrielle Klimaanlagen sowie spezialisierte Klimatisierungslösungen. ICEqube-Klimaanlagen zeichnen sich durch außergewöhnliche Zuverlässigkeit aus. Sie erfüllen hohe Industriestandards und gewährleisten präzise Temperatur- und Feuchtigkeitskontrolle in verschiedenen Arbeitsumgebungen.",
    linkTo: ["BESUCHEN SIE ICEqube", "https://www.iceqube.com"],
  },
  SMARTqube: {
    // id: "usa",
    img: logos.logoSMARTqube,
    abstract:
      "SMARTqube bietet ein umfassendes Angebot an Dienstleistungen, von der Wartung der Ausrüstung, Kalibrierung bis hin zur Fehlerbehebung. Mit den Lösungen von ICEqube entwerfen wir innovative Lösungen, die auf die wechselnden Bedürfnisse verschiedener Branchen zugeschnitten sind. Zusätzlich erleichtert SMARTqube als Distributor in Europa den problemlosen Zugang zu modernen Lösungen und ermöglicht es Unternehmen, sich in einer ständig verändernden Landschaft zu entwickeln",
    linkTo: ["BESUCHEN SIE SMARTqube", "https://www.smartqube.com"],
  },
};

export const footer = {
  logo: {
    imgUrl: logos.logoAMERIqube,
    companyName: "AMERIqube",
    street: "ul. Rakietowa 29E",
    zip: "51-311 Breslau, Polen",
  },
  logoUSA: {
    imgUrl: logos.logoAMERIqube,
    street: "141 Wilson Avenue ",
    zip: "Greensburg, PA 15601",
  },

  iso: [
    "ISO 9001:2015 Zertifikatsnummer: 017884",
    "© 2024 AMERIqube",
    "Alle Rechte vorbehalten",
  ],

  certificates: [
    iso.sri,
    iso.ce,
    iso.crus,
    iso.culus,
    iso.ex,
    iso.iec,
    iso.iecx,
    iso.ukca,
  ],
};

export const geolocation = {
  textLanguage:
    "Sie betrachten die Standardversion der Website auf Englisch für die Region Amerika (USA).",
  textRegion:
    " Wählen Sie Ihre Region und Sprache, um den Inhalt der Website Ihren Vorlieben anzupassen.",
  close: "schließen",
};
