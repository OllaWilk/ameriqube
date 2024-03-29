import { logos, photos } from "../../images";
import videoBg from "../../images/videoBg.mp4";
import videoServices from "../../images/WideoServices.mp4";
import enclosures from "../../images/enclosures.mp4";
import ICEqubeProducts from "../../images/ICEqubeProducts.mp4";

export const home = {
  imgBg: photos.splash,
  videoBg: videoBg,
  slides: [
    {
      videoBg: videoBg,
      header:
        "INTEGROWANIE INNOWACJI I TECHNOLOGII, ABY DOSTARCZAĆ KOMPLEKSOWE ROZWIĄZANIA DLA KAŻDEGO ASPEKTU TWOJEGO PROJEKTU",
      logo: logos.logoAMERIqubeText,
      subtitle: "Kompleksowe podejście do twoich projektów",
      text: "AMERIqube",
      buttonMainText: "Skontaktuj się z nami",
      buttonMainUrl: "contact",
      buttonTransparentText: "O nas",
      buttonTransparentUrl: "about",
    },
    {
      videoBg: ICEqubeProducts,
      header:
        "WYSOKIEJ JAKOŚCI KLIMATYZATORY NASZEJ PRODUKCJI, PROJEKTOWANE DO EFEKTYWNEJ PRACY NAWET W STREFACH PRZEMYSŁOWYCH ZONE1 I ZONE2",
      logo: logos.logoICEqube,
      subtitle: "Zaawansowane klimatyzatory dla każdego środowiska",
      text: "ICEqube",
      buttonMainText: "Odwiedź ICEqube",
      buttonMainUrl: "https://www.iceqube.com",
      buttonTransparentText: "ODWIEDŹ STRONĘ I OBLICZ SWÓJ PROJEKT JUŻ DZIŚ",
      buttonTransparentUrl: "https://www.iceqube.com/technical/calculator/",
    },
    {
      videoBg: enclosures,
      header:
        "ICE QUBE OFERUJE SZEROKĄ GAMĘ OBUDÓW. PRZEMYSŁOWYCH OBUDÓW MONTOWANYCH NA ŚCIANIE I WOLNOSTOJĄCYCH. MODUŁOWYCH OBUDÓW Z PODWÓJNYM I POJEDYNCZYM DOSTĘPEM DLA RYNKU TELEKOMUNIKACYJNEGO I SIECIOWEGO.",
      logo: logos.logoSMARTqube,
      subtitle:
        "Indywidualne podejście do projektu, z możliwością modyfikacji i rozwiązań",
      text: "ICEqube",
      buttonMainText: "Visit ICEqube",
      buttonMainUrl: "https://www.iceqube.com",
      // buttonTransparentText: "Check out ",
      // buttonTransparentUrl: "https://www.smartqube.com/#/integration",
    },
    {
      videoBg: videoServices,
      header:
        "NASZ ZESPÓŁ INŻYNIERÓW SPECJALIZUJE SIĘ W PROJEKTOWANIU, UTRZYMANIU I ROZWIĄZANIACH PLUG-AND-PLAY, OFERUJĄC KOMPLEKSOWE WSPARCIE NA MIEJSCU I ZDALNIE DLA NAJBARDZIEJ WYMAGAJĄCYCH PROJEKTÓW",
      logo: logos.logoSMARTqube,
      subtitle: "Inżynieria w najlepszym wydaniu",
      text: "SMARTqube",
      buttonMainText: "Odwiedź SMARTqube",
      buttonMainUrl: "https://www.smartqube.com",
      buttonTransparentText:
        "Kompleksowe rozwiązania integracyjne dla przemysłu",
      buttonTransparentUrl: "https://www.smartqube.com/#/integration",
    },
  ],
  about: {
    subtitle: "witaj w",
    title: "AMERIqube",
    abstract: `W AmeriQube, innowacja spotyka się z niezawodnością w dziedzinie kontroli klimatu i rozwiązań obudowy. Jako spółka macierzysta ICEqube i SMARTqube, podtrzymujemy dziedzictwo doskonałości, które obejmuje dziesięciolecia, dostarczając innowacyjne produkty i usługi dla przemysłu na całym świecie.`,
    section1: `Nasze zobowiązanie do jakości nie zna granic, ponieważ nadal przesuwamy granice możliwości w kluczowych zastosowaniach. Posiadając zróżnicowane portfolio dostosowane do branż takich jak telekomunikacja, przemysł naftowy i gazowy, automatyka przemysłowa i inne, AmeriQube stoi jako symbol innowacji i niezawodności.`,
    section2: `Od naszych nowoczesnych zakładów produkcyjnych po nasz oddany zespół ekspertów, dążymy do zapewnienia niezrównanej pomocy i rozwiązań dostosowanych do unikalnych potrzeb naszych klientów. W AmeriQube nie tylko spełniamy oczekiwania; przekraczamy je, zapewniając optymalną wydajność i spokój dla każdego projektu, za każdym razem.`,
    button: ["about", "zobacz więcej"],
  },
  offers: {
    carts: [
      {
        image: logos.logoICEqube,
        title: "Rozwiązania chłodzące",
        description:
          "Ice Qube oferuje szeroką gamę wysokiej jakości produktów do kontroli klimatu. Oferta obejmuje klimatyzatory do stref I i II, klimatyzatory przemysłowe i specjalistyczne rozwiązania klimatyzacyjne. Klimatyzatory ICEqube charakteryzują się wyjątkową niezawodnością. Spełniają wysokie wymagania przemysłowe i zapewniają precyzyjną kontrolę temperatury i wilgotności w różnych środowiskach pracy.",
        button: ["Czytaj więcej", "https://www.iceqube.com"],
      },
      {
        image: logos.logoSMARTqube,
        title: "ZAPROJEKTUJEMY PRZYSZŁOŚĆ",
        description:
          "SMARTqube oferuje kompleksowy zakres usług, od konserwacji sprzętu, kalibracji, po rozwiązywanie problemów. Korzystając z rozwiązań ICEqube, projektujemy innowacyjne rozwiązania dostosowane do zmieniających się potrzeb różnych branż. Dodatkowo, jako dystrybutor w Europie, SMARTqube ułatwia bezproblemowy dostęp do najnowocześniejszych rozwiązań, umożliwiając firmom rozwój w ciągle zmieniającym się krajobrazie.",
        button: ["Czytaj więcej", "https://www.smartqube.com"],
      },
    ],
  },
  callToaction: {
    titile: "Nie wahaj się kontaktować z nami o dowolnej porze.",
    subtitle: "Masz jakieś pytania?",
    button: ["Skontaktuj się z nami", "contact"],
  },

  mission: {
    src: logos.logoAMERIqubeTextPng,
    title: "Wspieranie Doskonałości, Definiowanie Standardów",
    subtitle: "NASZA MISJA",
    description:
      "W AmeriQube naszą misją jest nieustanne dążenie do doskonałości w dziedzinie kontroli klimatu i rozwiązań obudowy na całym świecie. Jako spółka macierzysta ICEqube i SMARTqube, dziedziczymy długą tradycję doskonałości, która obejmuje dziesięciolecia innowacji i niezawodności. Zobowiązujemy się do przesuwania granic możliwości w krytycznych zastosowaniach, dostarczając najnowocześniejsze produkty i usługi dla różnorodnych branż takich jak telekomunikacja, przemysł naftowy i gazowy oraz automatyka przemysłowa. Stoimy jako symbol innowacji i niezłomności. Nasza misja obejmuje również zapewnienie naszym klientom niezrównanej pomocy i rozwiązań dostosowanych do ich unikalnych potrzeb. Nie tylko spełniamy oczekiwania, ale je przekraczamy, zapewniając optymalną wydajność i spokój ducha dla każdego projektu. Dołącz do nas w kształtowaniu przyszłości kontroli klimatu i rozwiązań obudowy. Razem budujemy świat, w którym doskonałość nie zna granic.",
  },
};
