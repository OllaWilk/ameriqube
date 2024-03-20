import { logos, iso, photos } from "../../images";

export const navigationNavbar = [
  "Startseite",
  "Über uns",
  { Lösungen: ["Integration", "Kühlungslösungen", "Dienstleistungen"] },
  "Kontakt",
];

export const productsAndServices = {
  integration: {
    abstract:
      "Integration umfasst eine breite Palette von Projektaktivitäten, einschließlich Engineering, Beschaffung, Testen, Verpacken, Versenden und Inbetriebnahme vor Ort, während die Montage nur ein Teil dieses umfangreichen Prozesses ist. Wir spezialisieren uns auf Ingenieurdesign, mechanische und elektrische Systeme, Niederspannungs-Stromverteilung, Steuerungssysteme und die Inbetriebnahme von OEM-Geräten unter Einhaltung internationaler Standards.",
    linkTo: ["Integration erkunden", "integration"],
    subjects: [
      {
        name: "Motorsteuerung",
        btnsList: [
          "Lösungen für variable Geschwindigkeit",
          "Soft-Start-Lösungen",
        ],
      },
      {
        name: "Messung & Analytik",
        btnsList: ["CEMS-Lösungen", "Chroma-Lösungen", "Spektro-Lösungen"],
      },
      {
        name: "Energie",
        btnsList: ["UPS-Lösungen"],
      },
      {
        name: "Netzwerk",
        btnsList: ["Passive Lösungen", "Aktive Lösungen"],
      },
      {
        name: "Individuell",
        btnsList: ["Ingenieurlösungen", "Lösungen nach Spezifikation"],
      },
    ],
  },

  ICEqube: {
    id: "usa",
    img: photos.logoAMERIqube,
    abstract:
      "Ice Qube liefert eine breite Palette von hochwertigen Produkten zur Klimakontrolle. Smart Qube nutzt ihre Lösungen und fungiert auch als Distributor für Europa.",
    linkTo: ["ICEqube besuchen", "https://www.iceqube.com"],
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
