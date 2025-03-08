import Signature3Big from "@/assets/svgs/signature3-big.svg";
import Signature3Small from "@/assets/svgs/signature3-small.svg";
import { css } from "@styled-system/css";
import { forwardRef } from "react";

const Timetable = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <div ref={ref} className={styles.container}>
      <div className={styles.logoContainer}>
        <div className={styles.bigSignature}>
          <Signature3Big />
        </div>
        <div className={styles.smallSignature}>
          <Signature3Small />
        </div>
      </div>
      <div className={styles.title}>Timetable</div>
      <div className={styles.timetableContainer}>
        <div className={styles.scheduleItem}>
          <div className={styles.time}>13:00 - 13:20</div>
          <div>
            <div className={styles.sessionTitle}>개회사</div>
            <div className={styles.hostInfo}>let us: Go!</div>
          </div>
        </div>
        <div className={styles.scheduleItem}>
          <div className={styles.time}>13:20 - 13:40</div>
          <div>
            <div className={styles.sessionTitle}>코딩테스트</div>
            <div className={styles.hostInfo}>수박/야곰아카데미</div>
            <div className={styles.sessionDescription}>
              새로운 관점과 기획으로 브랜드 성장을 이끄는 사람들의 이야기 새로운 관점과 기획으로
              브랜드 성장을 이끄는 사람들의 이야기새로운 관점과 기획으로 브랜드 성장을 이끄는
              사람들의 이야기새로운 관점과 기획으로 브랜드 성장을 이끄는 사람들의 이야기새로운
              관점과 기획으로 브랜드 성장을 이끄는 사람들의 이야기
            </div>
          </div>
        </div>
        <div className={styles.scheduleItem}>
          <div className={styles.time}>13:40 - 14:50</div>
          <div>
            <div className={styles.sessionTitle}>Networking & Photo</div>
          </div>
        </div>
        <div className={styles.scheduleItem}>
          <div className={styles.time}>15:00 - 15:50</div>
          <div>
            <div className={styles.sessionTitle}>Break Time</div>
          </div>
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
  bigSignature: css({
    display: "block",

    "@media (max-width: 768px)": {
      display: "none",
    },
  }),
  logoContainer: css({
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "center",
  }),
  smallSignature: css({
    display: "none",

    "@media (max-width: 768px)": {
      display: "block",
    },
  }),
  title: css({
    fontSize: "7.2rem",
    background: "linear-gradient(to bottom, #7F42FF 0%, #4C00EE 100%)",
    backgroundClip: "text",
    color: "transparent",
    fontFamily: "Unbounded",
    fontWeight: 700,
    marginBottom: "4.4rem",

    "@media (max-width: 768px)": {
      fontSize: "3.2rem",
      marginBottom: "2.2rem",
    },
  }),
  timetableContainer: css({
    display: "flex",
    flexDirection: "column",
    maxWidth: "121.6rem",
    width: "100%",
    paddingY: "2.8rem",
    paddingX: "5.8rem",
    backgroundColor: "background.300",
    borderRadius: "2rem",

    "@media (max-width: 768px)": {
      paddingY: "1.4rem",
      paddingX: "2rem",
    },
  }),
  scheduleItem: css({
    display: "flex",
    flexDirection: "row",
    marginTop: "4.8rem",
    paddingBottom: "5.7rem",
    gap: "7.4rem",
    width: "100%",
    fontSize: "2.8rem",
    borderBottom: "0.2rem solid",

    _last: {
      marginBottom: "4.8rem",
      border: "none",
    },

    "@media (max-width: 768px)": {
      fontSize: "1.4rem",
      paddingBottom: "2rem",
      gap: "3.7rem",
      marginTop: "2.4rem",
      borderBottom: "0.1rem solid",

      _last: {
        marginBottom: "2rem",
      },
    },
  }),
  time: css({
    minWidth: "16.8rem",
    fontWeight: "semibold",
    whiteSpace: "nowrap",

    "@media (max-width: 768px)": {
      minWidth: "fit-content",
    },
  }),
  sessionTitle: css({
    fontSize: "3.2rem",
    fontWeight: "bold",

    "@media (max-width: 768px)": {
      fontSize: "1.6rem",
    },
  }),
  hostInfo: css({
    color: "#CCD5E0",
    marginTop: "0.8rem",
  }),
  sessionDescription: css({
    fontSize: "2.4rem",
    marginTop: "3.2rem",

    "@media (max-width: 768px)": {
      fontSize: "1.2rem",
    },
  }),
};
