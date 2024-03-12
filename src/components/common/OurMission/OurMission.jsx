import React from "react";
import { ImgOnTheLeftAndTextOnRight } from "../index";
import PropTypes from "prop-types";

import styles from "./OurMission.module.scss";
import { footer } from "../../../db/en";

export const OurMission = ({ title, subtitle, description, src }) => {
  return (
    <article className={`${styles.mission} container`}>
      <ImgOnTheLeftAndTextOnRight
        src={src}
        alt={title}
        title={title}
        subtitle={subtitle}
        description={description}
      />
      <div className={styles.addressWrap}>
        <div className={styles.usa}>
          <div className={styles.usaAdress}>
            <p>AMERIqube</p>
            <p>{footer.logoUSA.street}</p>
            <p>{footer.logoUSA.zip}</p>
          </div>
        </div>
        <div className={styles.europe}>
          <div className={styles.europeAdress}>
            <p>AMERIqube</p>
            <p>{footer.logo.street}</p>
            <p>{footer.logo.zip}</p>
          </div>
        </div>
      </div>
    </article>
  );
};

OurMission.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  src: PropTypes.string,
};