import Signature4Big from "@/assets/svgs/signature4-big.svg?react";
import Signature4Small from "@/assets/svgs/signature4-small.svg?react";
import { css } from "@styled-system/css";
import eliceLabImage from "@/assets/images/sponsors/eliceLab.png";
import appknotImage from "@/assets/images/sponsors/appknot.png";

const Sponsors = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bigSignature}>
        <Signature4Big />
      </div>
      <div className={styles.smallSignature}>
        <Signature4Small />
      </div>
      <div className={styles.title}>Sponsors</div>
      <div className={styles.describe}>
        let us: Go!는 여러분과 후원사의 지원으로{"\n"} 만들어집니다.
      </div>
      <div className={styles.imageContainer}>
        <div>
          <div className={styles.eliceLab}>
            <img src={eliceLabImage} alt="엘리스랩" />
          </div>
          <div className={styles.place}>장소지원</div>
          <div className={styles.placeName}>엘리스랩</div>
        </div>
        <div>
          <div className={styles.eliceLab}>
            <img src={appknotImage} alt="앱노트" />
          </div>
          <div className={styles.place}>간식지원</div>
          <div className={styles.placeName}>앱노트</div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;

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
  smallSignature: css({
    display: "none",

    "@media (max-width: 768px)": {
      display: "block",
    },
  }),
  title: css({
    fontSize: "7.2rem",
    color: "summer",
    fontFamily: "Unbounded",
    fontWeight: 700,
    marginBottom: "4.4rem",

    "@media (max-width: 768px)": {
      fontSize: "3.2rem",
      marginBottom: "3.6rem",
    },
  }),
  describe: css({
    fontSize: "3.2rem",
    fontWeight: 600,
    textAlign: "center",
    marginBottom: "12rem",

    "@media (max-width: 768px)": {
      fontSize: "1.6rem",
      whiteSpace: "pre-line",
      marginBottom: "6rem",
    },
  }),
  imageContainer: css({
    display: "flex",
    flexFlow: "column wrap",
    gap: "10rem",

    "@media (max-width: 768px)": {
      gap: "3.5rem",
    },
  }),
  eliceLab: css({
    width: "22rem",
    marginBottom: "4.4rem",

    "@media (max-width: 768px)": {
      width: "11rem",
      marginBottom: "2.2rem",
    },
  }),
  place: css({
    fontSize: "3.6rem",
    fontWeight: 600,
    textAlign: "center",

    "@media (max-width: 768px)": {
      fontSize: "1.8rem",
    },
  }),
  placeName: css({
    fontSize: "3.6rem",
    color: "background.200",
    textAlign: "center",

    "@media (max-width: 768px)": {
      fontSize: "1.8rem",
    },
  }),
};
