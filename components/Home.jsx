import styles from "../styles/Home.module.css";
import AboutMe from "./AboutMe";
import Header from "./Header";
import FlipCardGrid from "./FlipCardGrid";
import {useUser} from "../context/UserContext";

function Home({isMobile}) {
  const {user} = useUser();
  return (
    <div className={styles.content}>
      <Header isMobile={isMobile} />
      <AboutMe isMobile={isMobile} />
      <FlipCardGrid />
    </div>
  );
}

export default Home;
