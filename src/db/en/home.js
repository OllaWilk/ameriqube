import { photos, logos } from "../../images/index";
import videoBg from "../../images/videoBg.mp4";
import videoServices from "../../images/WideoServices.mp4";
import ICEqubeProducts from "../../images/ICEqubeProducts.mp4";
import enclosures from "../../images/enclosures.mp4";

export const home = {
  imgBg: photos.splash,
  videoBg: videoBg,
  slides: [
    {
      videoBg: videoBg,
      header:
        "WE INTEGRATE INNOVATION AND TECHNOLOGY TO DELIVER COMPREHENSIVE SOLUTIONS FOR EVERY ASPECT OF YOUR PROJECT",
      logo: logos.logoAMERIqubeText,
      subtitle: "Comprehensive Approach to Your Projects",
      text: "AMERIqube",
      buttonMainText: "Contact us",
      buttonMainUrl: "contact",
      buttonTransparentText: "Read more",
      buttonTransparentUrl: "about",
    },
    {
      videoBg: ICEqubeProducts,
      header:
        "HIGH-QUALITY AIR CONDITIONERS OF OUR OWN PRODUCTION, DESIGNED FOR EFFICIENT OPERATION EVEN IN INDUSTRIAL ZONES ZONE1 AND ZONE2",
      logo: logos.logoICEqube,
      subtitle: "Advanced Air Conditioners for Every Environment",
      text: "ICEqube",
      buttonMainText: "Visit ICEqube",
      buttonMainUrl: "https://www.iceqube.com",
      buttonTransparentText:
        "VISIT THE WEBSITE AND CALCULATE YOUR PROJECT TODAY",
      buttonTransparentUrl: "https://www.iceqube.com/technical/calculator/",
    },
    {
      videoBg: enclosures,
      header:
        "ICE QUBE OFFERS A WIDE RANGE OF INDUSTRIAL WALL-MOUNTED AND FREE-STANDING ENCLOSURES, AS WELL AS MODULAR ENCLOSURES WITH DUAL AND SINGLE ACCESS FOR THE TELECOMMUNICATIONS AND NETWORK MARKET",
      logo: logos.logoSMARTqube,
      subtitle:
        "Individual approach to the project, with the possibility of modifications and solutions",
      text: "ICEqube",
      buttonMainText: "Visit ICEqube",
      buttonMainUrl: "https://www.iceqube.com",
      // buttonTransparentText: "Check out ",
      // buttonTransparentUrl: "https://www.smartqube.com/#/integration",
    },
    {
      videoBg: videoServices,
      header:
        "OUR TEAM OF ENGINEERS SPECIALIZES IN DESIGN, MAINTENANCE, AND PLUG-AND-PLAY SOLUTIONS, OFFERING COMPREHENSIVE ONSITE AND REMOTE SUPPORT FOR THE MOST DEMANDING PROJECTS",
      logo: logos.logoSMARTqube,
      subtitle: "Engineering at Its Finest",
      text: "SMARTqube",
      buttonMainText: "Visit SMARTqube",
      buttonMainUrl: "https://www.smartqube.com",
      buttonTransparentText: "Comprehensive Industrial Integration Solutions",
      buttonTransparentUrl: "https://www.smartqube.com/#/integration",
    },
  ],

  about: {
    subtitle: "welcome to",
    title: "AMERIqube",
    abstract: `At AmeriQube, innovation meets reliability in the realm of climate control and enclosure solutions. As the parent company to ICEqube and SMARTqube, we uphold a legacy of excellence that spans decades, delivering cutting-edge products and services to industries around the globe.`,
    section1: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum unde voluptatibus eveniet! Ipsam, numquam repellendus! Ut nam eum distinctio cupiditate, veritatis nesciunt. Beatae necessitatibus aspernatur magni excepturi provident praesentium repudiandae? `,
    section2:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio aperiam optio nam. Odit, nostrum? Quam, et earum iusto quaerat ad dolore praesentium cum suscipit corrupti nobis perspiciatis, velit optio cumque.Id sequi, illo perspiciatis quam, doloribus quasi animi, iste deserunt nisi ratione ipsum explicabo iusto sint illum quod saepe praesentium qui commodi doloremque eveniet harum distinctio! Blanditiis eaque unde porro.",
    button: ["about", "see more"],
  },
  offers: {
    carts: [
      {
        image: logos.logoICEqube,
        title: "Cooling solutions",
        description:
          "Ice Qube supplies a wide range of high quality climate control products. The offer includes air conditioners for zones I and II, industrial air conditioners and specialized air conditioning solutions. ICEqube air conditioners are characterized by exceptional reliability. They meet high industry requirements and provide precise temperature and humidity control in various work environments.",
        button: ["Read more", "https://www.iceqube.com"],
      },
      {
        image: logos.logoSMARTqube,
        title: "WE WILL DESIGN THE FUTURE",
        description:
          "SMARTqube offers a comprehensive range of services, from equipment maintenance, calibration, and troubleshooting. Using ICEqube solutions, we design innovative solutions tailored to the changing needs of various industries. Additionally, as a distributor in Europe, SMARTqube facilitates seamless access to cutting-edge solutions, enabling businesses to thrive in an ever-changing landscape.",
        button: ["Read more", "https://www.smartqube.com"],
      },
    ],
  },
  callToaction: {
    titile: "Don't Hesitate to Contact Us Any Time.",
    subtitle: "Have Any Questions ?",
    button: ["Contact us", "contact"],
  },

  mission: {
    src: logos.logoAMERIqubeTextPng,
    title: "Empowering Excellence, Defining Standards",
    subtitle: "OUR MISSION",
    description:
      "At AmeriQube, our mission is to continuously strive for excellence in the field of climate control and enclosure solutions worldwide. As the parent company to ICEqube and SMARTqube, we inherit a long tradition of excellence spanning decades of innovation and reliability.  We commit to pushing the boundaries of what's possible in critical applications, providing cutting-edge products and services to diverse industries such as telecommunications, oil and gas, and industrial automation. We stand as a symbol of innovation and steadfastness. Our mission also includes providing our customers with unparalleled assistance and solutions tailored to their unique needs. We not only meet expectations but exceed them, ensuring optimal performance and peace of mind for every project. Join us in shaping the future of climate control and enclosure solutions. Together, we're building a world where excellence knows no limits.",
  },
};
