import React, { useMemo } from "react";
import PropTypes from "prop-types";
import pause from "../../../../images/icons/pause-icon.png";
import styles from "./SlideNavigation.module.scss";

const SlideNavigation = ({
  goToPrevious,
  goToNext,
  index,
  resumeAutoSlide,
  isPaused,
}) => {
  const currentIndexDisplay = useMemo(() => {
    return index + 1;
  }, [index]);

  return (
    <div className={`${styles.slideNavigation} container`}>
      <div></div>
      <div className={styles.prevNext}>
        <span className={styles.prev} onClick={goToPrevious}>
          &lt;
        </span>
        <span onClick={resumeAutoSlide}>
          {isPaused ? (
            <img src={pause} className={styles.pause} alt="pause" />
          ) : (
            currentIndexDisplay
          )}
        </span>
        <span className={styles.next} onClick={goToNext}>
          &gt;
        </span>
      </div>
    </div>
  );
};

SlideNavigation.propTypes = {
  goToPrevious: PropTypes.func.isRequired,
  goToNext: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
  isPaused: PropTypes.bool.isRequired,
};

export { SlideNavigation };
