/* eslint-disable indent */
import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import { LocaleContext } from "../../../contexts/LocaleContext";
import { SideOpenSubMenu } from "../index";
import styles from "./Dropdown.module.scss";

export const Dropdown = ({
  index,
  buttonLabel,
  expanded,
  toggleExpand,
  productsAndServices,
}) => {
  const { region } = useContext(LocaleContext);
  const allButtons = Object.keys(productsAndServices).filter((button) => {
    if (region === "usa") return true;
    if (region !== "usa" && productsAndServices[button].id === "usa")
      return false;
    return true;
  });

  const [selectedButton, setselectedButton] = useState(allButtons[0]);

  const handleButtonClick = (buttonName) => {
    setselectedButton(buttonName);
  };

  return (
    <div key={`stringBtn-${index}`} className={styles.navigationList}>
      <p onClick={toggleExpand} className={styles.topNavlink}>
        {buttonLabel}
      </p>
      {expanded && (
        <>
          <ul className={`${styles.dropList} `}>
            {allButtons.map((button, idx) => (
              <li
                key={`dropdownBtnNav-${idx}`}
                className={`${styles.expandedLink} ${
                  button === selectedButton ? styles.selectedItem : ""
                }`}
                onClick={() => handleButtonClick(button)}
              >
                {button}
              </li>
            ))}

            <SideOpenSubMenu
              data={productsAndServices}
              onHide={toggleExpand}
              buttons={allButtons}
              activeButton={selectedButton}
            />
          </ul>
        </>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  index: PropTypes.number,
  buttonLabel: PropTypes.string,
  subItems: PropTypes.array,
  expanded: PropTypes.bool,
  toggleExpand: PropTypes.func,
  productsAndServices: PropTypes.object,
};
