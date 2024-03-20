import React from "react";
import PropTypes from "prop-types";

import {
  AboutUs,
  Offer,
  CallToAction,
  OurMission,
  ScrollBtn,
  Carousel,
} from "../../common/index";

import styles from "./Home.module.scss";

export const Home = ({ home }) => {
  const { imgBg, slides, about, offers, callToaction, mission } = home;

  return (
    <div className={styles.homePage} id="header">
      <ScrollBtn />
      {/* HEADER */}
      <section>
        <Carousel slides={slides} />
      </section>
      {/* <Welcome /> */}
      <section id="about">
        <AboutUs
          subtitle={about.subtitle}
          title={about.title}
          abstract={about.abstract}
          section1={about.section1}
          section2={about.section2}
          linkTo={about.button[0]}
          btnName={about.button[1]}
        />
      </section>
      <section id="offer" className={styles.offerBackground}>
        <div className={styles.videoWrap}>
          <img src={imgBg} alt="splash" />
        </div>
        <Offer
          offers={offers.carts}
          title={offers.title}
          subtitle={offers.subtitle}
        />
      </section>

      <section id="callToActionHome" className={styles.callToActionBackground}>
        <CallToAction
          h4={callToaction.subtitle}
          h2={callToaction.titile}
          btnTitle={callToaction.button[0]}
          url={callToaction.button[1]}
        />
      </section>
      <section id="ourMission">
        <OurMission
          src={mission.src}
          alt={mission.title}
          title={mission.title}
          subtitle={mission.subtitle}
          description={mission.description}
        />
      </section>
      <section></section>
    </div>
  );
};

Home.propTypes = {
  home: PropTypes.object.isRequired,
};
