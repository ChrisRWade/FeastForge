import React from "react";
import FlipCard from "./FlipCard";
import styles from "../styles/FlipCardGrid.module.css";

const FlipCardGrid = () => {
  const cards = [
    {
      image: "/path/to/image1.jpg",
      title: "Card 1",
      description: "Short Info 1",
      detailedInfo: "Detailed Info 1",
    },
    {
      image: "/path/to/image2.jpg",
      title: "Card 2",
      description: "Short Info 2",
      detailedInfo: "Detailed Info 2",
    },
    {
      image: "/path/to/image3.jpg",
      title: "Card 3",
      description: "Short Info 3",
      detailedInfo: "Detailed Info 3",
    },
    {
      image: "/path/to/image4.jpg",
      title: "Card 4",
      description: "Short Info 4",
      detailedInfo: "Detailed Info 4",
    },
  ];

  return (
    <div className={styles.flipCardGrid}>
      {cards.map((card) => (
        <FlipCard key={card.title} {...card} />
      ))}
    </div>
  );
};

export default FlipCardGrid;
