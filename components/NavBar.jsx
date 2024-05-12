import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/NavBar.module.css";

const NavBar = ({isMobile}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log("Menu toggled");
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`${styles.navbar} roll-down`}>
      <div
        className={`${styles.brand} orange-glow`}
        onClick={() => console.log("FEASTFORGE clicked")}
      >
        {isMobile && (
          <FontAwesomeIcon
            onClick={toggleMenu}
            icon={faBars}
            className={styles.burgerMenu}
          />
        )}
        FEASTFORGE
      </div>
      <div className={isMobile ? (isOpen ? styles.show : styles.hide) : ""}>
        <ul className={`${styles.navLinks} orange-glow`}>
          <li
            className={styles.navLink}
            onClick={() => console.log("Home clicked")}
          >
            Home
          </li>
          <li
            className={styles.navLink}
            onClick={() => console.log("About clicked")}
          >
            About
          </li>
          <li
            className={styles.navLink}
            onClick={() => console.log("Menu clicked")}
          >
            Menu
          </li>
        </ul>
      </div>
      <button
        className={`${styles.orderBtn} ${
          !isMobile ? "white-glow" : "orange-glow"
        }`}
        onClick={() => console.log("Order Now clicked")}
      >
        Order Now
      </button>
    </nav>
  );
};

export default NavBar;
