import React from "react";
import styles from "../styles/FlipCard.module.css";

const FlipCard = ({image, title, description, detailedInfo}) => {
  return (
    <div className={styles.flipCard}>
      <div className={styles.flipCardInner}>
        <div
          className={`${styles.flipCardFront} overlay-black maroon-glow`}
          style={{backgroundImage: `url(${image})`}}
        >
          <div className={styles.cardContent}>
            <h3 className={`${styles.cardTitle} orange-glow`}>{title}</h3>
            <p className={`${styles.cardDescription} orange-flow`}>
              {description}
            </p>
          </div>
        </div>
        <div className={`${styles.flipCardBack} maroon-glow`}>
          <p className={styles.cardDetailedInfo}>{detailedInfo}</p>
        </div>
      </div>
    </div>
  );
};

export default FlipCard;
