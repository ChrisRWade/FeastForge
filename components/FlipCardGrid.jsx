import React from "react";
import FlipCard from "./FlipCard";
import styles from "../styles/FlipCardGrid.module.css";

const FlipCardGrid = () => {
  const cards = [
    {
      image: "/images/Appetizers.webp",
      title: "Appetizers",
      description: "Begin your Feast",
      detailedInfo:
        "Embark on your culinary adventure with our selection of appetizers, each carefully crafted to awaken your palate. From artisan cheeses to hand-cured meats, start your meal with the true taste of tradition.",
    },
    {
      image: "/images/Entrees.webp",
      title: "Entrees",
      description: "Hearty and Healthy",
      detailedInfo:
        "Savor the heart of our kitchen with entrees steeped in medieval heritage. Each dish is a tribute to the rich, robust flavors that once graced the tables of kings and knights.",
    },
    {
      image: "/images/Deserts.webp",
      title: "Deserts",
      description: "Sweet Endings",
      detailedInfo:
        "Conclude your feast on a sweet note with our desserts, inspired by age-old recipes. Our desserts are not just treats; they're a journey through time, crafted to delight and surprise.",
    },
    {
      image: "/images/Beverages.webp",
      title: "Beverages",
      description: "Brews and Potions",
      detailedInfo:
        "From frothy ales to fine wines, our beverage selection is a toast to the taverns of old. Each drink complements your meal, enhancing the rich flavors and bold adventures on your plate.",
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
