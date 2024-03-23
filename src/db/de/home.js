import { photos, logos } from "../../images/index";
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
        "INTEGRATION VON INNOVATION UND TECHNOLOGIE, UM UMFASSENDE LÖSUNGEN FÜR JEDEN ASPEKT IHRES PROJEKTS ZU LIEFERN",
      logo: logos.logoAMERIqubeText,
      subtitle: "Umfassender Ansatz für Ihre Projekte",
      text: "AMERIqube",
      buttonMainText: "Kontaktieren Sie uns",
      buttonMainUrl: "contact",
      buttonTransparentText: "Über uns",
      buttonTransparentUrl: "about",
    },
    {
      videoBg: ICEqubeProducts,
      header:
        "HOCHWERTIGE KLIMAANLAGEN EIGENER PRODUKTION, ENTWICKELT FÜR EFFIZIENTEN BETRIEB AUCH IN INDUSTRIEZONE ZONE1 UND ZONE2",
      logo: logos.logoICEqube,
      subtitle: "Fortgeschrittene Klimaanlagen für jede Umgebung",
      text: "ICEqube",
      buttonMainText: "Besuchen Sie ICEqube",
      buttonMainUrl: "https://www.iceqube.com",
      buttonTransparentText:
        "BESUCHEN SIE DIE WEBSITE UND BERECHNEN SIE IHR PROJEKT HEUTE",
      buttonTransparentUrl: "https://www.iceqube.com/technical/calculator/",
    },
    {
      videoBg: enclosures,
      header:
        "ICE QUBE BIETET EINE BREITE PALETTE VON INDUSTRIELLEN WAND- UND FREISTEHENDEN GEHÄUSEN SOWIE MODULARE GEHÄUSE MIT DOPPEL- UND EINZELZUGANG FÜR DEN TELEKOMMUNIKATIONS- UND NETZWERKMARKT",
      logo: logos.logoSMARTqube,
      subtitle:
        "Individueller Ansatz zum Projekt, mit der Möglichkeit von Modifikationen und Lösungen",
      text: "ICEqube",
      buttonMainText: "Visit ICEqube",
      buttonMainUrl: "https://www.iceqube.com",
      // buttonTransparentText: "Check out ",
      // buttonTransparentUrl: "https://www.smartqube.com/#/integration",
    },
    {
      videoBg: videoServices,
      header:
        "UNSER TEAM VON INGENIEUREN IST SPEZIALISIERT AUF DESIGN, WARTUNG UND PLUG-AND-PLAY-LÖSUNGEN, BIETET UMFASSENDE UNTERSTÜTZUNG VOR ORT UND AUS DER FERNE FÜR DIE ANSPRUCHSVOLLSTEN PROJEKTE",
      logo: logos.logoSMARTqube,
      subtitle: "Ingenieurwesen in seiner besten Form",
      text: "SMARTqube",
      buttonMainText: "Besuchen Sie SMARTqube",
      buttonMainUrl: "https://www.smartqube.com",
      buttonTransparentText:
        "Umfassende Integrationslösungen für die Industrie",
      buttonTransparentUrl: "https://www.smartqube.com/#/integration",
    },
  ],
  about: {
    subtitle: "willkommen bei",
    title: "SMARTqube",
    abstract: `SMARTqube entstand aus dem Mutterunternehmen ICEqube in den USA. SMARTqube befindet sich in Breslau, Polen, im Herzen der EU und ermöglicht so einen schnellen Zugang zur EU und zum Nahen Osten. Als Distributor und Servicedienstleister für ICEqube-Produkte nutzen wir den Zugang zu ausgezeichneten Produkten und Erfahrungen in der Integration, um Komponenten, Engineering, Dienstleistungen und integrierte Lösungen anzubieten.`,
    section1: `Die offensichtlichste Herausforderung der modernen Welt besteht nicht nur darin, eine Möglichkeit zur Lösung eines einzelnen
      Problems zu bieten - es geht darum, eine umfassende globale Unterstützung, Zugänglichkeit und einen technischen Ansatz zu gewährleisten, der
      eine effektive Verbesserung der industriellen Produktionsprozesse ermöglicht. Dies kann nur durch eine detaillierte Analyse, Planung, Auswahl der richtigen Ausrüstung und Beseitigung der Auswirkungen von
      negativen Faktoren erreicht werden.`,
    section2: `Das ist die Rolle, die SMARTqube übernehmen will - ein Logistik- und Servicezentrum für das Klimakontroll- und Gehäuseportfolio von ICEqube in der EU und ein Mehrwertanbieter als Systemintegrationsanlage. Mit unserem eigenen Lager, moderner Werkstatt und einem hocherfahrenen Team führen unsere Aktivitäten zur Vereinfachung des Zugangs zu den in den USA entwickelten Lösungen und erweitern die Kundenbetreuung durch lokale technische Unterstützung, Service, Logistik und schlüsselfertiges Engineering.`,
    button: ["about", "mehr sehen"],
  },
  offers: {
    carts: [
      {
        image: logos.logoICEqube,
        title: "Kühlungslösungen",
        description:
          "Ice Qube bietet eine breite Palette an hochwertigen Produkten für die Klimakontrolle. Das Angebot umfasst Klimaanlagen für die Zonen I und II, industrielle Klimaanlagen und spezialisierte Klimatisierungslösungen. Klimaanlagen von ICEqube zeichnen sich durch außergewöhnliche Zuverlässigkeit aus. Sie erfüllen hohe Industrieanforderungen und bieten präzise Temperatur- und Feuchtigkeitskontrolle in verschiedenen Arbeitsumgebungen.",
        button: ["Mehr lesen", "https://www.iceqube.com"],
      },
      {
        image: logos.logoSMARTqube,
        title: "WIR WERDEN DIE ZUKUNFT GESTALTEN",
        description:
          "SMARTqube bietet ein umfassendes Spektrum an Dienstleistungen, von der Wartung der Ausrüstung über Kalibrierung bis hin zur Fehlersuche. Mit Lösungen von ICEqube entwerfen wir innovative Lösungen, die auf die sich wandelnden Bedürfnisse verschiedener Industrien zugeschnitten sind. Als Distributor in Europa erleichtert SMARTqube zudem den nahtlosen Zugang zu modernsten Lösungen und ermöglicht es Unternehmen, in einer sich ständig verändernden Landschaft zu florieren.",
        button: ["Mehr lesen", "https://www.smartqube.com"],
      },
    ],
  },
  callToaction: {
    titile: "Zögern Sie nicht, uns jederzeit zu kontaktieren.",
    subtitle: "Haben Sie Fragen?",
    button: ["Kontaktieren Sie uns", "contact"],
  },

  mission: {
    src: logos.logoAMERIqubeTextPng,
    title: "Exzellenz Fördern, Standards Definieren",
    subtitle: "UNSERE MISSION",
    description:
      "Bei AmeriQube ist es unsere Mission, kontinuierlich nach Exzellenz im Bereich der Klimakontroll- und Gehäuselösungen weltweit zu streben. Als Muttergesellschaft von ICEqube und SMARTqube erben wir eine lange Tradition der Exzellenz, die Jahrzehnte der Innovation und Zuverlässigkeit umfasst. Wir verpflichten uns dazu, die Grenzen des Möglichen in kritischen Anwendungen zu verschieben, indem wir branchenführende Produkte und Dienstleistungen für verschiedene Industrien wie Telekommunikation, Öl und Gas sowie industrielle Automatisierung bereitstellen. Wir stehen als Symbol für Innovation und Beständigkeit. Unsere Mission umfasst auch, unseren Kunden unübertroffene Unterstützung und maßgeschneiderte Lösungen für ihre einzigartigen Bedürfnisse zu bieten. Wir erfüllen nicht nur Erwartungen, sondern übertreffen sie, indem wir optimale Leistung und Seelenfrieden für jedes Projekt sicherstellen. Schließen Sie sich uns an, um die Zukunft der Klimakontroll- und Gehäuselösungen zu gestalten. Gemeinsam bauen wir eine Welt, in der Exzellenz keine Grenzen kennt.",
  },
};
