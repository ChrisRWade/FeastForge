import React from "react";
import styles from "../styles/FlipCard.module.css";

const FlipCard = ({image, title, description, detailedInfo}) => {
  return (
    <div className={styles.flipCard}>
      <div className={styles.flipCardInner}>
        <div className={styles.flipCardFront}>
          <img src={image} alt={title} className={styles.cardImage} />
          <h3 className={styles.cardTitle}>{title}</h3>
          <p className={styles.cardDescription}>{description}</p>
        </div>
        <div className={styles.flipCardBack}>
          <p className={styles.cardDetailedInfo}>{detailedInfo}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
