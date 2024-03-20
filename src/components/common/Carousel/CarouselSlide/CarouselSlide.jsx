import React, { useMemo } from "react";
import { Video, MainColorBtn, TransparentBtn } from "../../index";
import { CarouselHeader } from "../CarouselHeader/CarouselHeader";
import styles from "./CarouselSlide.module.scss";

export const CarouselSlide = ({ slide, isActive }) => {
  const memoizedSlide = useMemo(() => slide, [slide]);

  return (
    <div className={`${styles.slide} ${isActive ? styles.active : ""}`}>
      <div className={styles.videoWrap}>
        <Video src={memoizedSlide.videoBg} />
      </div>
      <div className={` ${styles.textWrap}`}>
        <div className={styles.titlewrap}>
          <h6 className={styles.header}>{memoizedSlide.subtitle}</h6>
        </div>

        <CarouselHeader
          header={memoizedSlide.header}
          logo={memoizedSlide.logo}
          subtitle={memoizedSlide.subtitle}
        />
        <div className={styles.btnsWrap}>
          <MainColorBtn
            text={memoizedSlide.buttonMainText}
            linkTo={memoizedSlide.buttonMainUrl}
          />
          <TransparentBtn
            text={memoizedSlide.buttonTransparentText}
            linkTo={memoizedSlide.buttonTransparentUrl}
          />
        </div>
      </div>
    </div>
  );
};
