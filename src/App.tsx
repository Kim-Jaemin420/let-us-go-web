import { css } from "@styled-system/css";
import BannerTItle from "./components/BannerTItle";
import Header from "./components/common/Header";
import WelcomeBanner from "./components/WelcomeBanner";
import AboutContent from "./components/AboutContent";
import Committess from "./components/Committess";
import Location from "./components/Location";
import JoinUs from "./components/JoinUs";
import Footer from "./components/Footer";
import { useRef } from "react";
import Speakers from "./components/Speakers";
import Program from "./components/Program";
import Sponsers from "./components/Sponsors";

const App = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const programRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: "about" | "program" | "location" | "contact") => {
    const sectionRef = {
      about: aboutRef,
      program: programRef,
      location: locationRef,
      contact: contactRef,
    }[section];

    if (sectionRef?.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <Header onScrollToSection={scrollToSection} />
      <div className={styles.contentContainer}>
        <BannerTItle />
        <div className={styles.container}>
          <WelcomeBanner />
          <AboutContent ref={aboutRef} />
        </div>
        <Speakers />
        <Program ref={programRef} />
        <Sponsers />
        <Committess />
        <Location ref={locationRef} />
        <JoinUs ref={contactRef} />
        <Footer />
      </div>
    </div>
  );
};

export default App;

const styles = {
  contentContainer: css({
    height: "calc(100% - 8rem)",

    "@media (max-width: 884px)": {
      height: "100%",
    },
  }),
  container: css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflowX: "hidden",
  }),
};
