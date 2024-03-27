import { logos, iso, photos } from "../../images";

export const navigationNavbar = [
  "home",
  "o nas",
  {
    "produkty & usługi": ["ICEqube", "SMARTqube"],
  },
  "kontakt",
];

export const productsAndServices = {
  ICEqube: {
    // id: "usa",
    img: logos.logoICEqube,
    abstract:
      "Ice Qube dostarcza szeroką gamę wysokiej jakości produktów do kontroli klimatu. Oferta obejmuje klimatyzatory dla stref I i II, przemysłowe klimatyzatory oraz specjalistyczne rozwiązania klimatyzacyjne. Klimatyzatory ICEqube charakteryzują się wyjątkową niezawodnością. Spełniają wysokie wymagania przemysłowe i zapewniają precyzyjną kontrolę temperatury i wilgotności w różnych środowiskach pracy",
    linkTo: ["odwiedź ICEqube ", "https://www.iceqube.com"],
  },
  SMARTqube: {
    // id: "usa",
    img: logos.logoSMARTqube,
    abstract:
      "SMARTqube oferuje kompleksowy zakres usług, od konserwacji sprzętu, kalibracji, po rozwiązywanie problemów. Korzystając z rozwiązań ICEqube, projektujemy innowacyjne rozwiązania dostosowane do zmieniających się potrzeb różnych branż. Dodatkowo, jako dystrybutor w Europie, SMARTqube ułatwia bezproblemowy dostęp do nowoczesnych rozwiązań, umożliwiając firmom rozwój w ciągle zmieniającym się krajobrazie",
    linkTo: ["odwiedź SMARTqube ", "https://www.smartqube.com"],
  },
};

export const footer = {
  logo: {
    imgUrl: logos.logoAMERIqube,
    companyName: "AMERIqube",
    street: "ul. Rakietowa 29E",
    zip: "51-311 Wrocław, Poland",
  },
  logoUSA: {
    imgUrl: logos.logoAMERIqube,
    street: "141 Wilson Avenue ",
    zip: "Greensburg, PA 15601",
  },

  iso: [
    "ISO 9001:2015 Certificate Number: 017884",
    "© 2024 AMERIqube",
    "All Rights Reserved",
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
    "Oglądasz domyślną wersję strony w języku angielskim dla regionu Ameryka (USA).",
  textRegion:
    " Wybierz swóju region i język aby dostosować treść strony do swoich preferencji.",
  close: "zamknij",
};
