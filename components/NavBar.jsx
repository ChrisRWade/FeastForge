import React, {useState, useEffect, useRef} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHome,
  faInfoCircle,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/NavBar.module.css";

const NavBar = ({isMobile}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false); // State to handle closing the menu [1
  const navbarRef = useRef(null); // Reference to the navbar
  const menuRef = useRef(null); // Reference to the menu

  useEffect(() => {
    if (!isMobile) {
      setIsOpen(false);
    }

    const handleOutsideClick = (event) => {
      // Check if the menu is open and the click is outside the menu
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        isOpen
      ) {
        setIsClosing(true);
        setTimeout(() => {
          setIsClosing(false);
          setIsOpen(false);
        }, 250);
      }
    };

    // Attach the listener
    document.addEventListener("mousedown", handleOutsideClick);

    // Cleanup the listener
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, isMobile]); // Ensure this runs only if isOpen or isMobile changes

  const toggleMenu = () => {
    console.log("Menu toggled");
    if (isOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setIsClosing(false);
        setIsOpen(!isOpen);
      }, 250);
    } else {
      setIsOpen(!isOpen);
    }
  };

  return (
    <>
      <nav className={`${styles.navbar} roll-down`} ref={navbarRef}>
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
        {!isMobile && (
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
        )}
        <button
          className={`${styles.orderBtn} ${
            !isMobile ? "white-glow" : "orange-glow"
          }`}
          onClick={() => console.log("Order Now clicked")}
        >
          Order Now
        </button>
      </nav>
      {isMobile && (
        <div
          className={`${isOpen ? styles.show : styles.hide} ${
            !isClosing ? "roll-down-fast" : "roll-up-fast"
          }`}
          ref={menuRef}
          style={{
            top: `${navbarRef.current ? navbarRef.current.offsetHeight : 0}px`,
          }}
        >
          <ul className={`${styles.navLinks} orange-glow`}>
            <li
              className={styles.navLink}
              onClick={() => console.log("Home clicked")}
            >
              <FontAwesomeIcon icon={faHome} className="pr1" /> Home
            </li>
            <li
              className={styles.navLink}
              onClick={() => console.log("About clicked")}
            >
              <FontAwesomeIcon icon={faInfoCircle} className="pr5" />
              About
            </li>
            <li
              className={styles.navLink}
              onClick={() => console.log("Menu clicked")}
            >
              <FontAwesomeIcon icon={faUtensils} className="pr7" />
              Menu
            </li>
            <li className={`${styles.line} draw-line`}></li>
          </ul>
        </div>
      )}
    </>
  );
};

export default NavBar;