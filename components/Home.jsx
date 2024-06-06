import styles from "../styles/Home.module.css";
import AboutMe from "./AboutMe";
import Header from "./Header";
import FlipCardGrid from "./FlipCardGrid";

function Home({isMobile}) {
  return (
    <div className={styles.content}>
      <Header isMobile={isMobile} />
      <AboutMe isMobile={isMobile} />
      <FlipCardGrid />
      <p>Functional Electronic Application for Service and Transaction</p>
    </div>
  );
}

export default Home;
