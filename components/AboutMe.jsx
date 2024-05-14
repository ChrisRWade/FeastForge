import React, {useEffect, useRef} from "react";
import styles from "../styles/AboutMe.module.css";

const AboutMe = ({isMobile}) => {
  const boxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (boxRef.current) {
        const rect = boxRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          boxRef.current.classList.add(styles.animateIn);
        } else {
          boxRef.current.classList.remove(styles.animateIn);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className={styles.aboutMeSection}>
      <div className={styles.imageContainer}>
        {isMobile && (
          <div className={styles.ctaBox} ref={boxRef}>
            <h2>What is FEASTFORGE?</h2>
            <p>
              FEASTFORGE is a cutting-edge web and mobile platform built with
              state-of-the-art technologies like Next.js and React Native.
              Designed specifically for restaurant owners, FEASTFORGE allows you
              to establish a high-performance application for seamless mobile
              and web ordering. This platform provides your customers with a
              smooth and efficient ordering experience, giving your business a
              competitive edge without the need to invest thousands of dollars
              in software development.
            </p>
            <p>This page serves as a demo for the FEASTFORGE platform.</p>
          </div>
        )}
      </div>
      {!isMobile && (
        <div className={styles.complementaryDiv}>
          <div className={styles.ctaBox} ref={boxRef}>
            <h2>What is FEASTFORGE?</h2>
            <p>
              FEASTFORGE is a cutting-edge web and mobile platform built with
              state-of-the-art technologies like Next.js and React Native.
              Designed specifically for restaurant owners, FEASTFORGE allows you
              to establish a high-performance application for seamless mobile
              and web ordering. This platform provides your customers with a
              smooth and efficient ordering experience, giving your business a
              competitive edge without the need to invest thousands of dollars
              in software development.
            </p>
            <p>This page serves as a demo for the FEASTFORGE platform.</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutMe;
