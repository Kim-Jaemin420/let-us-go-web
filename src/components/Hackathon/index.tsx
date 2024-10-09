import { css } from "@styled-system/css";
import Title from "./Title";
import Banner from "./Banner";
import Invitation from "./Invitation";
import Timetable from "./Timetable";
import Project from "./Project";
import Sponsors from "./Sponsors";
import Location from "./Location";
import QnA from "./QnA/index";
import Contact from "./Contact";
import LastEvent from "./LastEvent";
import Footer from "./Footer";
import Header from "./Header";
import { useRef } from "react";

const Hackathon = () => {
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
      <Header onScrollToSection={scrollToSection} />
      <div className={styles.title}>
        <Title />
      </div>
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
  );
};

export default Hackathon;

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
  title: css({
    // height: "calc(100vh - 8rem)",
  }),
};
