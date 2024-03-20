import { logos, iso } from "../../images";

export const navigationNavbar = [
  "home",
  "about",
  {
    "products & services": ["ICEqube", "SMARTqube"],
  },
  "contact",
];

//ENCLOSURES
export const productsAndServices = {
  ICEqube: {
    // id: "usa",
    img: logos.logoICEqube,
    abstract:
      "Ice Qube supplies a wide range of high quality climate control products. The offer includes air conditioners for zones I and II, industrial air conditioners and specialized air conditioning solutions. ICEqube air conditioners are characterized by exceptional reliability. They meet high industry requirements and provide precise temperature and humidity control in various work environments",
    linkTo: ["visit ICEqube ", "https://www.iceqube.com"],
  },
  SMARTqube: {
    // id: "usa",
    img: logos.logoSMARTqube,
    abstract:
      "SMARTqube offers a comprehensive range of services, from equipment maintenance, calibration, and troubleshooting. Using ICEqube solutions, we design innovative solutions tailored to the changing needs of various industries. Additionally, as a distributor in Europe, SMARTqube facilitates seamless access to cutting-edge solutions, enabling businesses to thrive in an ever-changing landscape",
    linkTo: ["visit SMARTqube ", "https://www.smartqube.com"],
  },
};

export const footerNavigation = [
  "home",
  "about",
  { "products & services": ["ICEqube", "SMARTqube"] },
  "contact",
];

export const footer = {
  logo: {
    imgUrl: logos.logoAMERIqube,
    companyName: "",
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
    "You are viewing the default version of the site in English for the region America (USA).",
  textRegion:
    " Choose your region and language to customize the site content to your preferences.",
  close: "close",
};
