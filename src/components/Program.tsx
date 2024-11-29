import { css } from "@styled-system/css";
import { forwardRef } from "react";

const Program = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <div ref={ref} className={styles.container}>
      <div className={styles.title}>program</div>
      <div className={styles.contentContainer}>
        <ul>
          <li className={styles.programList}>
            <div className={styles.programContainer}>
              <div className={styles.eventTitle}>오프닝</div>
              <div className={styles.subTitle}>Kuu</div>
              {/* <div className={styles.description}>let us: go</div> */}
            </div>
          </li>
          <li className={styles.programList}>
            <div className={styles.programContainer}>
              <div className={styles.eventTitle}>헤이딜러는 이렇게 일해요</div>
              <div className={styles.subTitle}>헤이딜러</div>
            </div>
          </li>
          <li className={styles.programList}>
            <div className={styles.programContainer}>
              <div className={styles.eventTitle}>고급진 코드를 위한 exception 다루기</div>
              <div className={styles.subTitle}>곰튀김</div>
            </div>
          </li>
          <li className={styles.programList}>
            {/* <div className={styles.time}>13:00 - 13:20</div> */}
            <div className={styles.programContainer}>
              <div className={styles.eventTitle}>신입 개발자의 macOS 배포기</div>
              <div className={styles.subTitle}>은표</div>
            </div>
          </li>
          <li className={styles.programList}>
            <div className={styles.programContainer}>
              <div className={styles.eventTitle}>iOS 개발자 취업 이모저모 토크쇼</div>
              <div className={styles.subTitle}>summercat, Terry, 아실, wade</div>
            </div>
          </li>
          <li className={styles.programList}>
            <div className={styles.programContainer}>
              <div className={styles.eventTitle}>네트워킹</div>
            </div>
          </li>
          <li className={styles.programList}>
            <div className={styles.programContainer}>
              <div className={styles.eventTitle}>모듈화 A to Z</div>
              <div className={styles.subTitle}>재르시</div>
            </div>
          </li>
          <li className={styles.programList}>
            <div className={styles.programContainer}>
              <div className={styles.eventTitle}>비전프로 앱 개발하기</div>
              <div className={styles.subTitle}>Ethan</div>
            </div>
          </li>
          <li className={styles.programList}>
            <div className={styles.programContainer}>
              <div className={styles.eventTitle}>경품추첨/사진촬영/폐회</div>
              <div className={styles.subTitle}>Kuu</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
});

export default Program;

const styles = {
  container: css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "18rem",
    backgroundColor: "neutral.100",
    marginX: "auto",
    paddingBottom: "18rem",

    "@media (max-width: 768px)": {
      paddingTop: "10rem",
      paddingBottom: "4.8rem",
    },
  }),
  title: css({
    textTransform: "uppercase",
    fontSize: "5.6rem",
    color: "primary.200",
    fontWeight: 700,
    marginBottom: "6.4rem",

    "@media (max-width: 768px)": {
      fontSize: "3.2rem",
      fontWeight: 800,
      marginBottom: "3.6rem",
    },
  }),
  contentContainer: css({
    borderRadius: "2rem",
    backgroundColor: "neutral.500",
    padding: "2.6rem 5.6rem",
    maxWidth: "121.4rem",
    width: "calc(100% - 6.4rem)",

    "@media (max-width: 768px)": {
      width: "calc(100% - 4rem)",
      padding: "1.6rem 2rem",
    },
  }),
  programList: css({
    display: "flex",
    gap: "7.2rem",
    borderBottom: "0.2rem solid white",
    paddingY: "4.8rem",
    wordBreak: "keep-all",

    _last: {
      border: "none",
    },

    "@media (max-width: 768px)": {
      gap: "2.4rem",
      borderBottom: "0.1rem solid white",
      paddingY: "2rem",
    },
  }),
  time: css({
    fontSize: "2.8rem",
    color: "white",
    fontWeight: 700,
    minWidth: "17.8rem",

    "@media (max-width: 768px)": {
      fontSize: "1.6rem",
      minWidth: "10.5rem",
    },
  }),
  programContainer: css({
    display: "flex",
    flexFlow: "column wrap",
  }),
  eventTitle: css({
    fontSize: "3.2rem",
    color: "white",
    fontWeight: 800,

    "@media (max-width: 768px)": {
      fontSize: "2rem",
    },
  }),
  subTitle: css({
    fontSize: "2.8rem",
    color: "neutral.300",
    fontWeight: 700,

    "@media (max-width: 768px)": {
      fontSize: "1.6rem",
    },
  }),
  description: css({
    fontSize: "2.4rem",
    color: "white",
    marginTop: "4.4rem",
  }),
};
