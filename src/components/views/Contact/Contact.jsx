import React from "react";
import PropTypes from "prop-types";
import { footer } from "../../../db/en";
import { photos } from "../../../images/index";
import { ContactForm, GreenHeader, ImageBox, RequestCall } from "../../common";
import styles from "./Contact.module.scss";

export const Contact = ({ contact }) => {
  const { contactTitle, contactForm, errorsMessages } = contact;
  return (
    <div className={styles.contact}>
      <div className={styles.header}>
        <GreenHeader mainTitle={contactTitle} />
      </div>
      <div className={styles.wraper}>
        <div className={styles.videoWrap}>
          <img src={photos.splash} alt="splash" />
        </div>
        <div className={`${styles.contactPage} container`}>
          <div className={styles.imgWrap}>
            <ImageBox src={photos.worldMap} alt={"world map"} />
            <div className={styles.addressWrap}>
              <div className={styles.usa}>
                <div className={styles.usaAdress}>
                  <p>{footer.logoUSA.street}</p>
                  <p>{footer.logoUSA.zip}</p>
                </div>
              </div>
              <div className={styles.europe}>
                <div className={styles.europeAdress}>
                  <p>{footer.logo.street}</p>
                  <p>{footer.logo.zip}</p>
                </div>
              </div>
            </div>
          </div>
          <ContactForm
            contactForm={contactForm}
            errorsMessages={errorsMessages}
          />
        </div>
      </div>

      <div className={styles.requestToCall}>
        <RequestCall
          namePlaceholder={contactForm.name}
          phonePlaceholder={contactForm.phoneNumber}
          errorsMessages={errorsMessages}
        />
      </div>
    </div>
  );
};

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  region: PropTypes.string,
};
