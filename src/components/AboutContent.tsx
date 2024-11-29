import { forwardRef } from "react";
import { css } from "@styled-system/css";
import groupPhotoImage from "@/assets/images/group-photo.png";
import useScrollCount from "@/hooks/useScrollCount";

const AboutContent = forwardRef<HTMLDivElement>((_props, ref) => {
  const { ref: operationPeriodRef } = useScrollCount({ end: 9, duration: 900 });
  const { ref: eventNumber } = useScrollCount({ end: 23, duration: 900 });
  const { ref: sessionNumber } = useScrollCount({ end: 82, duration: 900 });
  const { ref: participantsNumber } = useScrollCount({ start: 0, end: 1800, duration: 900 });

  return (
    <div id="about" ref={ref} className={styles.container}>
      <div className={styles.title}>about</div>
      <div className={styles.description}>
        <div>
          let us: Go!는 iOS 개발에 관심있는 모두가 모여 개발 노하우와{"\n"} 다양한 경험, 그리고
          정보를 서로 공유하고 자유롭게 소통하는
          {"\n"}iOS 커뮤니티입니다.
        </div>
        <div className={styles.secondDescription}>
          새로운 기대로 가득한 봄입니다. 점차 봄이라는 계절과 함께 따뜻한{"\n"} 에너지와 활기가 띠고
          있는 것 같아요. 따스한 봄의 기운으로{"\n"} let us: Go!와 함께 새로운 도전을 하며, 성장하는
          기회가{"\n"} 되어보는 건 어떠신가요?
          <div>예쁜 굿즈와 푸짐한 경품도 기대하세요!!</div>
        </div>
        <div className={styles.lastDescription}>
          ‘3월 30일 토요일’ [let us: Go! 2024 봄]을 개최합니다.
        </div>
      </div>
      <div className={styles.kungyaContainer}>
        <img src={groupPhotoImage} alt="단체사진" />
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

export default AboutContent;

const styles = {
  container: css({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  }),
  title: css({
    textTransform: "uppercase",
    fontSize: "5.6rem",
    color: "primary.200",
    fontWeight: 700,
    marginTop: "24rem",
    marginBottom: "6.4rem",

    "@media (max-width: 768px)": {
      fontSize: "3.2rem",
      marginBottom: "3.6rem",
      fontWeight: 800,
      marginTop: "4.5rem",
    },
  }),
  description: css({
    maxWidth: "82.9rem",
    marginX: "3.2rem",
    textAlign: "center",
    fontSize: "2.8rem",
    wordBreak: "keep-all",

    "@media (max-width: 834px) and (min-width: 769px)": {
      whiteSpace: "pre-wrap",
    },

    "@media (max-width: 768px)": {
      fontSize: "1.6rem",
      width: "33.5rem",
    },
  }),
  secondDescription: css({
    marginY: "2.4rem",

    "@media (max-width: 768px)": {
      marginY: "1.6rem",
    },
  }),
  lastDescription: css({
    fontWeight: 600,
    marginBottom: "9.2rem",

    "@media (max-width: 768px)": {
      marginBottom: "3.6rem",
    },
  }),
  kungyaContainer: css({
    maxWidth: "121.4rem",
    marginBottom: "9.2rem",
    width: "calc(100% - 6.4rem)",
    borderRadius: "2rem",
    overflow: "hidden",

    "@media (max-width: 768px)": {
      marginBottom: "3.6rem",
      width: "calc(100% - 4rem)",
      borderRadius: "0.8rem",
    },
  }),
  clubSummaryList: css({
    display: "flex",
    gap: "2.4rem",
    maxWidth: "121.4rem",
    width: "calc(100% - 6.4rem)",
    flexWrap: "wrap",

    "@media (max-width: 768px)": {
      width: "calc(100% - 4rem)",
      gap: "0.8rem",
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
    backgroundColor: "neutral.200",
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
  breakOnTablet: css({
    "@media (max-width: 834px) and (min-width: 769px)": {},
  }),
};
