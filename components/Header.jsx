import React, {useState, useEffect} from "react";
import styles from "../styles/Header-dark.module.css";
import NavBar from "./NavBar";

function Header() {
  const [isMobile, setIsMobile] = useState(false);

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
    <>
      <NavBar isMobile={isMobile} />
      <header>
        <div className={styles.hero}>
          <div className={styles.overlay}></div>

          <div className={`${styles.ctaBox} fade-import 'module';`}>
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
}

export default Header;
