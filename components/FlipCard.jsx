import React from "react";
import styles from "../styles/FlipCard.module.css";

const FlipCard = ({image, title, description, detailedInfo}) => {
  return (
    <div className={styles.flipCard}>
      <div className={styles.flipCardInner}>
        <div
          className={styles.flipCardFront}
          style={{backgroundImage: `url(${image})`}}
        >
          <div className={styles.cardContent}>
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardDescription}>{description}</p>
          </div>
        </div>
        <div className={styles.flipCardBack}>
          <p className={styles.cardDetailedInfo}>{detailedInfo}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
