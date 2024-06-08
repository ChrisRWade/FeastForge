import React from "react";
import styles from "../styles/Footer.module.css";
import MapComponent from "./MapComponent";

const Footer = ({isMobile}) => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerColumn}>
          <h4>Contact Us</h4>
          <p>Email: cwade@feastforge.app</p>
          <p>Phone: (252) 646-5493</p>
        </div>
        <div className={styles.footerColumn}>
          <h4>Legal</h4>
          <p onClick={() => console.log("Privacy Policy")}>Privacy Policy</p>
          <p onClick={() => console.log("Terms of Use")}>Terms of Use</p>
        </div>
        <div className={styles.footerColumnMap}>
          <h4>Find Us</h4>
          <MapComponent />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
