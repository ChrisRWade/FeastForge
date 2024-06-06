import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Home from "../components/Home";
import NavBar from "../components/NavBar";

function Index() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <NavBar isMobile={isMobile} />
      {/* <Header isMobile={isMobile} /> */}
      <Home isMobile={isMobile} />
      <Footer isMobile={isMobile} />
    </div>
  );
}

export default Index;
