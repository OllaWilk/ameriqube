import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import { SlideNavigation } from "./SlideNavigation/SlideNavigation";
import { CarouselSlide } from "./CarouselSlide/CarouselSlide";

import styles from "./Carousel.module.scss";

export const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isIntervalActive, setIsIntervalActive] = useState(true);

  useEffect(() => {
    let timer;
    if (isIntervalActive) {
      timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 6000);
    }

    return () => clearInterval(timer);
  }, [slides.length, isIntervalActive]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
    setIsIntervalActive(false);
  }, [slides.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    setIsIntervalActive(false);
  }, [slides.length]);

  const resumeAutoSlide = useCallback(() => {
    setIsIntervalActive(true);
  }, []);

  return (
    <>
      <div className={styles.carouselContainer}>
        <div className={styles.slider}>
          {slides.map((slide, index) => (
            <CarouselSlide
              key={`${index}-header-carousel`}
              slide={slide}
              isActive={index === currentIndex}
            />
          ))}
        </div>
        <SlideNavigation
          index={currentIndex}
          goToPrevious={goToPrevious}
          goToNext={goToNext}
          resumeAutoSlide={resumeAutoSlide}
          isPaused={!isIntervalActive}
        />
      </div>
    </>
  );
};

Carousel.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      header: PropTypes.string,
      span: PropTypes.string,
      subtitle: PropTypes.string,
      buttonGreen: PropTypes.arrayOf(PropTypes.string),
      buttonTransparent: PropTypes.arrayOf(PropTypes.string),
    })
  ).isRequired,
};
