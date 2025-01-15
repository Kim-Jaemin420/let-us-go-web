import { css } from "@styled-system/css";
import { useRef } from "react";
import Header from "./components/Header";
import Title from "./components/Title";
import Banner from "./components/Banner";
import Invitation from "./components/Invitation";
import Timetable from "./components/Timetable";
import Project from "./components/Project";
import Sponsors from "./components/Sponsors";
import Location from "./components/Location";
import QnA from "./components/QnA";
import Contact from "./components/Contact";
import LastEvent from "./components/LastEvent";
import Footer from "./components/Footer";

const App = () => {
  const timetableRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);
  const qnaRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (section: "timetable" | "project" | "location" | "qna" | "contact") => {
    const sectionRef = {
      timetable: timetableRef,
      project: projectRef,
      location: locationRef,
      qna: qnaRef,
      contact: contactRef,
    }[section];

    if (sectionRef?.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.centered}>
        <Header onScrollToSection={scrollToSection} />
        <Title />
        <Banner />
        <div className={styles.contentContainer}>
          <Invitation />
          <Timetable ref={timetableRef} />
          <Project ref={projectRef} />
          <Sponsors />
          <Location ref={locationRef} />
          <QnA ref={qnaRef} />
          <Contact ref={contactRef} />
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
    backgroundColor: "background.500",
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
