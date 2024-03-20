import React, { useMemo } from "react";
import styles from "./CarouselHeader.module.scss";

const CarouselHeader = ({ header, logo, subtitle }) => {
  const memoizedProps = useMemo(
    () => ({
      header,
      logo,
      subtitle,
    }),
    [header, logo, subtitle]
  );

  return (
    <div className={styles.companyWrap}>
      <h2>{memoizedProps.header}</h2>
    </div>
  );
};

export { CarouselHeader };
