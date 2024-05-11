import React, {useState, useEffect} from "react";
import styles from "../styles/Header-dark.module.css";

function Header() {
  const [isMobile, setIsMobile] = useState(false);
  //use effect that changes ismobile to true when the viewport width is less than 768px and false when it is greater than 768px and changes the state of ismobile when the viewport width changes
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header>
      <div className={styles.hero}>
        <div className={styles.overlay}></div>
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
        <div className={styles.ctaBox}>
          <picture className={styles.logo}>
            <source srcSet="/images/logo.webp" type="image/webp" />
            <img src="/images/logo.png" alt="Logo" />
          </picture>

          <div className={styles.flexCenter}>
            <p className={styles.feastBlurb}>Ready for a Feast?</p>
            <button
              className={styles.orderButton}
              onClick={() => console.log("Order Now!")}
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
