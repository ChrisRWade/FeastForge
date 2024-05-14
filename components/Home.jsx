import styles from "../styles/Home.module.css";
import AboutMe from "./AboutMe";

function Home({isMobile}) {
  return (
    <div className={styles.content}>
      <AboutMe isMobile={isMobile} />
      <p>Functional Electronic Application for Service and Transaction</p>
    </div>
  );
}

export default Home;
