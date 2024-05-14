import React, {useState, useEffect} from "react";
import styles from "../styles/Header-dark.module.css";
import NavBar from "./NavBar";

const Header = ({isMobile}) => {
  return (
    <>
      <NavBar isMobile={isMobile} />
      <header>
        <div className={styles.hero}>
          <div className={styles.overlay}></div>

          <div className={`${styles.ctaBox} fade-in`}>
            <picture className={styles.logo}>
              <source srcSet="/images/logowhite.webp" type="image/webp" />
              <img
                className="orange-glow"
                src="/images/logowhite.png"
                alt="Logo"
              />
            </picture>

            <div className={styles.flexCenter}>
              <p className={`${styles.feastBlurb} orange-glow`}>
                Ready for a FEAST?
              </p>
              <button
                className={`${styles.orderButton} white-glow`}
                onClick={() => console.log("Order Now!")}
              >
                Order Now
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
