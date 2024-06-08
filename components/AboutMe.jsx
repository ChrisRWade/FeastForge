import React, {useEffect, useState, useRef} from "react";
import styles from "../styles/AboutMe.module.css";
import {debounce} from "lodash";

const AboutMe = ({isMobile}) => {
  const boxRef = useRef(null);
  const [blurbInView, setBlurbInView] = React.useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      debounce((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setBlurbInView(true);
          } else {
            setBlurbInView(false);
          }
        });
      }, 100), // Debounce with a 100ms delay
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (boxRef.current) {
      observer.observe(boxRef.current);
    }

    return () => {
      if (boxRef.current) {
        observer.unobserve(boxRef.current);
      }
    };
  }, [isMobile]);

  return (
    <section className={styles.aboutMeSection}>
      <div className={styles.imageContainer}>
        {!isMobile && (
          <div className={styles.featuresOverlay}>
            <h2>Why Choose FEASTFORGE?</h2>
            <ul>
              <li>Seamless Mobile and Web Ordering</li>
              <li>High-Performance Application</li>
              <li>Cost-Effective Solutions</li>
              <li>Customizable to Your Needs</li>
            </ul>
          </div>
        )}
        {isMobile && (
          <div className={`${styles.ctaBox} slide-in-left`} ref={boxRef}>
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
          <div
            className={`${styles.ctaBox} ${
              blurbInView ? "slide-in-right" : ""
            }`}
            ref={boxRef}
          >
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
