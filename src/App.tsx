import { css } from "@styled-system/css";
import { useRef } from "react";
import Header from "./components/Header";
import Title from "./components/Title";
import Banner from "./components/Banner";
import Sponsors from "./components/Sponsors";
import LastEvent from "./components/LastEvent";
import Footer from "./components/Footer";
import About from "./components/About";
import Schedule from "./components/Schedule";
import Crew from "./components/Crew";
import JoinUs from "./components/JoinUs";

const App = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: "about") => {
    const sectionRef = { about: aboutRef }[section];

    if (sectionRef?.current) {
      const yOffset = -80;
      const element = sectionRef.current;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.centered}>
        <Header onScrollToSection={scrollToSection} />
        <Title onScrollToSection={scrollToSection} />
        <Banner />
        <div className={styles.contentContainer}>
          <About ref={aboutRef} />
          <Schedule />
          <Crew />
          <Sponsors />
          <JoinUs />
        </div>
        <LastEvent />
        <Footer />
      </div>
    </div>
  );
};

export default App;

const styles = {
  container: css({
    height: "100vh",
  }),
  centered: css({
    margin: "0 auto",
  }),
  contentContainer: css({
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
  }),
};
