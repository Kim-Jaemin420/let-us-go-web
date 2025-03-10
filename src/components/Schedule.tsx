import { css } from "@styled-system/css";
import Signature2Big from "@/assets/svgs/signature2-big.svg?react";
import Signature2Small from "@/assets/svgs/signature2-small.svg?react";
import groupPhotoImage from "@/assets/images/group-photo.jpg";

const Schedule = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bigSignature}>
        <Signature2Big />
      </div>
      <div className={styles.smallSignature}>
        <Signature2Small />
      </div>
      <div className={styles.title}>Schedule</div>
      <div>
        <div className={styles.sectionContainer}>
          <div className={styles.photo}>
            <img src={groupPhotoImage} />
          </div>
          <div className={styles.contentLeft}>
            <div className={styles.springTItle}>Spring</div>
            <div className={styles.conference}>Conference</div>
            <div className={styles.description}>
              봄 컨퍼런스 설명 봄 컨퍼런스 설명 봄 컨퍼런스 설명 봄 컨퍼런스 설명 봄 컨퍼런스 설명
              봄 컨퍼런스 설명
            </div>
          </div>
        </div>

        <div className={styles.sectionContainer}>
          <div className={styles.contentRight}>
            <div className={styles.summerTItle}>Summer</div>
            <div className={styles.conference}>Hackathon</div>
            <div className={styles.description}>
              여름 행사 설명 여름 행사 설명 여름 행사 설명 여름 행사 설명 여름 행사 설명 여름 행사
              설명
            </div>
          </div>
          <div className={styles.photo}>
            <img src={groupPhotoImage} />
          </div>
        </div>

        <div className={styles.sectionContainer}>
          <div className={styles.photo}>
            <img src={groupPhotoImage} />
          </div>
          <div className={styles.contentLeft}>
            <div className={styles.autumnTitle}>Fall</div>
            <div className={styles.conference}>Conference</div>
            <div className={styles.description}>
              가을 컨퍼런스 설명 가을 컨퍼런스 설명 가을 컨퍼런스 설명 가을 컨퍼런스 설명 가을
              컨퍼런스 설명 가을 컨퍼런스 설명
            </div>
          </div>
        </div>

        <div className={styles.sectionContainer}>
          <div className={styles.contentRight}>
            <div className={styles.winterTItle}>Winter</div>
            <div className={styles.conference}>Networking</div>
            <div className={styles.description}>
              겨울 행사 설명 겨울 행사 설명 겨울 행사 설명 겨울 행사 설명 겨울 행사 설명 겨울 행사
              설명
            </div>
          </div>
          <div className={styles.photo}>
            <img src={groupPhotoImage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Schedule;

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
    marginBottom: "4.4rem",

    "@media (max-width: 768px)": {
      fontSize: "3.2rem",
      marginBottom: "2rem",
    },
  }),
  sectionContainer: css({
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    gap: "3.2rem",
    width: "100%",
    marginBottom: "14rem",

    _last: {
      marginBottom: 0,
    },

    "@media (max-width: 768px)": {
      gap: "1rem",
      marginBottom: "6rem",
    },
  }),
  contentLeft: css({
    wordBreak: "break-word",
  }),
  contentRight: css({
    textAlign: "end",
    wordBreak: "break-word",
  }),
  photo: css({
    width: "59.2rem",
    height: "44rem",
    maxWidth: "100%",
    borderRadius: "1.2rem",
    overflow: "hidden",
    flexShrink: 0,

    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },

    "@media (max-width: 768px)": {
      width: "15rem",
      height: "11.1rem",
      flexShrink: 0,
    },
  }),
  conference: css({
    fontSize: "4.4rem",
    fontWeight: "bold",
    marginBottom: "2.8rem",

    "@media (max-width: 768px)": {
      fontSize: "1.8rem",
      marginBottom: "0rem",
    },
  }),
  springTItle: css({
    fontSize: "3.2rem",
    fontWeight: "bold",
    color: "spring",

    "@media (max-width: 768px)": {
      fontSize: "1.6rem",
    },
  }),
  summerTItle: css({
    fontSize: "3.2rem",
    fontWeight: "bold",
    color: "summer",

    "@media (max-width: 768px)": {
      fontSize: "1.6rem",
    },
  }),
  autumnTitle: css({
    fontSize: "3.2rem",
    fontWeight: "bold",
    color: "autumn",

    "@media (max-width: 768px)": {
      fontSize: "1.6rem",
    },
  }),
  winterTItle: css({
    fontSize: "3.2rem",
    fontWeight: "bold",
    color: "winter",

    "@media (max-width: 768px)": {
      fontSize: "1.6rem",
    },
  }),
  description: css({
    fontSize: "2.8rem",
    color: "#9EA6B2",

    "@media (max-width: 768px)": {
      fontSize: "1.4rem",
    },
  }),
};
