import React from "react";
import PropTypes from "prop-types";

import {
  Header,
  CallToAction,
  ImgOnTheLeftAndTextOnRight,
  ScrollBtn,
} from "../../common/index";

import styles from "./About.module.scss";

export const About = ({ about, region }) => {
  const { header, companyDescription, callToaction } = about;

  return (
    <div className={styles.aboutPage}>
      <ScrollBtn />
      {/* HEADER */}
      <section className={styles.splashBackgroundImg}>
        <Header
          description={header.description}
          mainTitle={header.slogan}
          subtitle={header.companyName}
          greenBtn={header.greenBtn}
          transparentBtn={header.transparentBtn}
          greenBtnLinkTo={header.greenBtnLinkTo}
          transparentBtnLinkTo={header.transparentBtnLinkTo}
        />
      </section>
      {/* OUR PEOPLE */}
      <section className={`${styles.ourPeople} container`}>
        <ImgOnTheLeftAndTextOnRight
          alt={companyDescription.title}
          src={companyDescription.img}
          title={companyDescription.title}
          subtitle={companyDescription.subtitle}
          description={companyDescription.paragraphOne}
          paragraphOne={companyDescription.paragraphTwo}
          paragraphTwo={companyDescription.paragraphTree}
        />
      </section>

      {/* call to action */}
      <section className={`${styles.callToActionBackground} `}>
        <CallToAction
          h4={callToaction.subtitle}
          h2={callToaction.titile}
          btnTitle={callToaction.button[0]}
          url={callToaction.button[1]}
        />
      </section>
      {/* location */}

      <section></section>
    </div>
  );
};

About.propTypes = {
  about: PropTypes.object,
  region: PropTypes.string,
};
