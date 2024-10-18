import Signature2Pc from "@/assets/svgs/signature2-pc.svg?react";
import Signature2Mobile from "@/assets/svgs/signature2-mobile.svg?react";
import { css } from "@styled-system/css";
import { forwardRef } from "react";
import Time from "./Time";
import Schedule from "./Schedule";

const Timetable = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <div ref={ref} className={styles.container}>
      <div className={styles.logoContainer}>
        <div className={styles.signaturePc}>
          <Signature2Pc />
        </div>
        <div className={styles.signatureMobile}>
          <Signature2Mobile />
        </div>
      </div>
      <div className={styles.title}>Timetable</div>
      <div className={styles.timetableContainer}>
        <div className={styles.timeContainer}>
          <Time>19:00-19:10</Time>
          <Time>19:30-20:00</Time>
          <Time>20:00-20:30</Time>
          <Time>20:30-21:00</Time>
          <Time>21:00-21:10</Time>
          <Time>21:10-21:30</Time>
          <Time>22:30-23:00</Time>
          <Time>상시</Time>
        </div>
        <div className={styles.scheduleContainer}>
          <Schedule>
            🎤 개회사 <span className={styles.time}>(19:00 - 19:10)</span>
          </Schedule>
          <Schedule>
            🥳 개인 앱 페스티벌 <span className={styles.time}>(19:30 - 20:00)</span>
          </Schedule>
          <Schedule>
            🍚 심야식당 <span className={styles.time}>(20:00 - 20:30)</span>
          </Schedule>
          <Schedule>
            🤑 바자회 <span className={styles.time}>(20:30 - 21:00)</span>
          </Schedule>
          <Schedule>
            📸 단체사진 촬영
            <span className={styles.time}>(21:00 - 21:10)</span>
          </Schedule>
          <Schedule>
            🍚 심야식당 <span className={styles.time}>(21:10 - 21:30)</span>
          </Schedule>
          <Schedule>
            🧹 마무리 <span className={styles.time}>(22:30 - 23:00)</span>
          </Schedule>
          <Schedule>🎄 소원나무, 바자회(가판)</Schedule>
        </div>
      </div>
    </div>
  );
});

export default Timetable;

const styles = {
  container: css({
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "center",
    marginBottom: "28rem",
    width: "calc(100vw - 6.4rem)",

    "@media (max-width: 768px)": {
      width: "calc(100vw - 4rem)",
      marginBottom: "12rem",
    },
  }),
  logoContainer: css({
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "center",
  }),
  signaturePc: css({
    display: "block",

    "@media (max-width: 768px)": {
      display: "none",
    },
  }),
  signatureMobile: css({
    display: "none",

    "@media (max-width: 768px)": {
      display: "block",
    },
  }),
  title: css({
    fontSize: "7.2rem",
    color: "winter",
    fontFamily: "Unbounded",
    fontWeight: 700,
    marginBottom: "4.4rem",

    "@media (max-width: 768px)": {
      fontSize: "3.2rem",
      marginBottom: "3.6rem",
    },
  }),
  timetableContainer: css({
    display: "flex",
    alignItems: "flex-start",
    maxWidth: "121.6rem",
    width: "100%",
  }),
  timeContainer: css({
    color: "winter",
    marginRight: "3.6rem",

    "@media (max-width: 768px)": {
      marginRight: "1.2rem",
    },
  }),
  scheduleContainer: css({
    flexGrow: 1,
  }),
  time: css({
    fontSize: "2.8rem",
    fontWeight: 500,
    marginLeft: "0.5rem",

    "@media (max-width: 768px)": {
      fontSize: "1rem",
    },
  }),
  scheduleSmall: css({
    height: "5.9rem",

    "@media (max-width: 768px)": {
      height: "3rem",
    },
  }),
  scheduleMedium: css({
    height: "9.1rem",

    "@media (max-width: 768px)": {
      height: "4.6rem",
    },
  }),
  scheduleBig: css({
    height: "65.8rem",
    display: "flex",
    flexDirection: "column",
    textAlign: "center",

    "@media (max-width: 768px)": {
      height: "35rem",
    },
  }),
  lastPresentation: css({
    height: "9.1rem",

    "@media (max-width: 1214px)": {
      fontSize: "2.5rem",
    },

    "@media (max-width: 768px)": {
      height: "2.6rem",
    },
  }),
  awards: css({
    height: "5.9rem",

    "@media (max-width: 768px)": {
      height: "2.6rem",
    },
  }),
};
