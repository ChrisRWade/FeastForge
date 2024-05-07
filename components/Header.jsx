import React from "react";
import styles from "../styles/Header-dark.module.css";

function Header() {
  return (
    <header>
      <div className={styles.hero}>
        <div className={styles.overlay}></div>
        <picture className={styles.logo}>
          <source srcSet="/images/logo.webp" type="image/webp" />
          <img src="/images/logo.png" alt="Logo" />
        </picture>
        <div className={styles.menuLinks}>
          <span
            className={styles.menuLink}
            onClick={() => console.log("Home clicked")}
          >
            Home
          </span>
          <span
            className={styles.menuLink}
            onClick={() => console.log("About clicked")}
          >
            About
          </span>
          <span
            className={styles.menuLink}
            onClick={() => console.log("Contact clicked")}
          >
            Contact
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
