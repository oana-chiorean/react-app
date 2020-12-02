import React from "react";
import styles from "./Rating.module.css";
import StarIcon from "@material-ui/icons/Star";

const Rating = (props) => {
  const stars = [1, 2, 3, 4, 5];
  const activeIndex = props.activeIndex ? props.activeIndex : 0;

  return (
    <div className={styles.ratingContainer}>
      {stars.map((index) => {
        const activeClass = (index <= activeIndex) ? styles.active : "";
        return (
          <span className={activeClass} onClick={() => props.handleOnClick(props.itemIndex, index)} key={index}>
            <StarIcon />
          </span>
        );
      })}
    </div>
  );
};

export default Rating;
