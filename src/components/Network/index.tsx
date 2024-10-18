import { css } from "@styled-system/css";
import Title from "./Title";
import Banner from "./Banner";
import Invitation from "./Invitation";
import Timetable from "./Timetable";
// import Sponsors from "./Sponsors";
import Location from "./Location";
import Contact from "./Contact";
import LastEvent from "./LastEvent";
import Footer from "./Footer";
import Header from "./Header";
import { useRef } from "react";

const Network = () => {
  const timetableRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: "timetable" | "location" | "contact") => {
    const sectionRef = {
      timetable: timetableRef,
      project: projectRef,
      location: locationRef,
      contact: contactRef,
    }[section];

    if (sectionRef?.current) {
      const yOffset = -80;
      const element = sectionRef.current;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className={styles.container}>
      <Header onScrollToSection={scrollToSection} />
      <Title />
      <Banner />
      <div className={styles.contentContainer}>
        <Invitation />
        <Timetable ref={timetableRef} />
        {/* <Sponsors /> */}
        <Location ref={locationRef} />
        <Contact ref={contactRef} />
      </div>
      <LastEvent />
      <Footer />
    </div>
  );
};

export default Network;

const styles = {
  container: css({
    backgroundColor: "background.500",
    margin: "0 auto",
  }),
  contentContainer: css({
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
  }),
};
