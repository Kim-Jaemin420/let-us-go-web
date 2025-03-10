import { forwardRef } from "react";
import { css } from "@styled-system/css";
import classNames from "classnames";
import useScrollCount from "@/hooks/useScrollCount";
import Signature1Big from "@/assets/svgs/signature1-big.svg?react";
import Signature1Small from "@/assets/svgs/signature1-small.svg?react";

const About = forwardRef<HTMLDivElement>((_props, ref) => {
  const { ref: operationPeriodRef } = useScrollCount({ end: 9, duration: 900 });
  const { ref: eventNumber } = useScrollCount({ end: 23, duration: 900 });
  const { ref: sessionNumber } = useScrollCount({ end: 82, duration: 900 });
  const { ref: participantsNumber } = useScrollCount({ start: 0, end: 1800, duration: 900 });

  return (
    <div ref={ref} className={styles.container}>
      <div className={styles.bigSignature}>
        <Signature1Big />
      </div>
      <div className={styles.smallSignature}>
        <Signature1Small />
      </div>
      <div className={styles.title}>About</div>
      <div className={classNames(styles.description, styles.desktopOnly)}>
        <div>let us: Go!는</div>
        <div className={styles.numbering}>
          <div>➊ iOS 개발 관련 최신 정보와 기술 동향 공유</div>
          <div>➋ 실무 활용 가능한 개발 노하우와 팁 전수</div>
          <div>➌ iOS 개발자들 간 네트워킹 기회 제공</div>
          <div>➍ 새로운 아이디어와 영감을 얻을 수 있는 세션 진행</div>
        </div>
        <div>을 위해 세워진 iOS 개발자들의 커뮤니티입니다.</div>
      </div>
      <div className={classNames(styles.description, styles.mobileOnly)}>
        <div>let us: Go!는</div>
        <div className={styles.numbering}>
          <div>➊ iOS 개발 관련 최신 정보와 기술 동향 공유</div>
          <div>➋ 실무 활용 가능한 개발 노하우와 팁 전수</div>
          <div>➌ iOS 개발자들 간 네트워킹 기회 제공</div>
          <div>➍ 새로운 아이디어와 영감을 얻을 수 있는 세션 진행</div>
        </div>
        <div>을 위해 세워진 iOS 개발자들의 커뮤니티입니다.</div>
      </div>
      <ul className={styles.clubSummaryList}>
        <li className={styles.clubSummary}>
          <div className={styles.classification}>운영 기간 🕘</div>
          <div className={styles.times}>
            <span ref={operationPeriodRef}>
              {Math.floor(Number(operationPeriodRef.current?.innerText) || 0)}
            </span>
            년
          </div>
        </li>
        <li className={styles.clubSummary}>
          <div className={styles.classification}>진행 행사 수 🎡</div>
          <div className={styles.times}>
            <span ref={eventNumber}>0</span>회
          </div>
        </li>
        <li className={styles.clubSummary}>
          <div className={styles.classification}>총 발표세션 수 🎙️</div>
          <span ref={sessionNumber} className={styles.times}>
            0
          </span>
        </li>
        <li className={styles.clubSummary}>
          <div className={styles.classification}>총 참가자 수 🏃‍♂️</div>
          <div className={styles.times}>
            <span className={styles.about}>약</span>
            <span ref={participantsNumber}>0</span>명
          </div>
        </li>
      </ul>
    </div>
  );
});

export default About;

const styles = {
  container: css({
    display: "flex",
    flexFlow: "column wrap",
    marginBottom: "28rem",
    maxWidth: "121.6rem",
    width: "100%",

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
  smallSignature: css({
    display: "none",

    "@media (max-width: 768px)": {
      display: "block",
    },
  }),
  title: css({
    fontSize: "7.2rem",
    color: "main",
    fontFamily: "Unbounded",
    fontWeight: 700,

    "@media (max-width: 768px)": {
      fontSize: "3.2rem",
    },
  }),
  description: css({
    color: "#9EA6B2",
    fontSize: "2.8rem",
    whiteSpace: "pre-line",
    marginTop: "4.4rem",
    marginBottom: "2.4rem",

    "@media (max-width: 768px)": {
      fontSize: "1.6rem",
      marginTop: "3.6rem",
    },
  }),
  numbering: css({
    fontWeight: "bold",
    color: "white",
    marginY: "4rem",

    "@media (max-width: 768px)": {
      marginY: "2rem",
    },
  }),
  desktopOnly: css({
    display: "block",

    "@media (max-width: 768px)": {
      display: "none",
    },
  }),
  mobileOnly: css({
    display: "none",

    "@media (max-width: 768px)": {
      display: "block",
    },
  }),
  clubSummaryList: css({
    display: "flex",
    gap: "2.4rem",
    maxWidth: "121.4rem",
    width: "100%",
    flexWrap: "wrap",
    marginTop: "7.2rem",
    flexGrow: 1,

    "@media (max-width: 768px)": {
      gap: "0.8rem",
      marginTop: "3.6rem",
    },
  }),
  clubSummary: css({
    display: "flex",
    flexFlow: "column wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "calc(50% - 3.2rem)",
    paddingY: "4.8rem",
    maxWidth: "37.3rem",
    minWidth: "22.2rem",
    borderRadius: "1.2rem",
    backgroundColor: "background.300",
    flex: "1 0 calc(25% - 2.4rem)",

    "@media (max-width: 1023px)": {
      maxWidth: "none",
      minWidth: "16.3rem",
      flex: "1 0 calc(50% - 3.2rem)",
      flexWrap: "nowrap",
      margin: 0,
    },

    "@media (max-width: 768px)": {
      flex: "1 0 calc(50% - 2rem)",
      width: "calc(50% - 2rem)",
      maxWidth: "37.3rem",
      minWidth: "15rem",
      padding: "2.4rem 2rem",
    },
  }),
  classification: css({
    fontSize: "2.8rem",
    fontWeight: 600,

    "@media (max-width: 768px)": {
      fontSize: "1.6rem",
    },
  }),
  times: css({
    fontSize: "4.8rem",
    fontWeight: 700,

    "@media (max-width: 768px)": {
      fontSize: "2.8rem",
    },
  }),
  about: css({
    fontSize: "2.8rem",
    verticalAlign: "middle",

    "@media (max-width: 768px)": {
      fontSize: "1.6rem",
    },
  }),
};
