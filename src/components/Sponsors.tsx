import { css } from "@styled-system/css";
import Signature4Big from "@/assets/svgs/signature4-big.svg?react";
import Signature4Small from "@/assets/svgs/signature4-small.svg?react";
import heydealerImage from "@/assets/images/sponsors/heydealer.png";
import inflearnImage from "@/assets/images/sponsors/inflearn.png";
import hanbitImage from "@/assets/images/sponsors/hanbit.png";
import kodecoImage from "@/assets/images/sponsors/kodeco.png";
import durumisImage from "@/assets/images/sponsors/durumis.png";
import konkukImage from "@/assets/images/sponsors/konkuk.png";
import ArrowRightSvg from "@/assets/svgs/arrow-right.svg?react";

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
        <div>let us: Go!는 커뮤니티 유지를 위해 후원을 받고 있습니다. </div>후원비는 대관비 등으로
        더 많은 기회에 도움이 됩니다.
      </div>
      <div className={styles.imageContainer}>
        <div>
          <img src={heydealerImage} alt="헤이딜러 로고" />
        </div>
        <div>
          <img src={inflearnImage} alt="인프런 로고" />
        </div>
        <div>
          <img src={hanbitImage} alt="한빛미디어 로고" />
        </div>
        <div>
          <img src={kodecoImage} alt="코데코 로고" />
        </div>
        <div>
          <img src={durumisImage} alt="두루미스 로고" />
        </div>
        <div>
          <img src={konkukImage} alt="건국대학교 로고" />
        </div>
      </div>
      <a className={styles.contactSponsorButton}>
        후원 문의 <ArrowRightSvg className={styles.arrowIcon} />
      </a>
    </div>
  );
};

export default Sponsors;

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
    },
  }),
  describe: css({
    fontSize: "2.8rem",
    marginBottom: "12rem",

    "@media (max-width: 768px)": {
      fontSize: "1.6rem",
      whiteSpace: "pre-line",
      marginBottom: "4rem",
    },
  }),
  imageContainer: css({
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    alignItems: "center",
    columnGap: "3rem",
    rowGap: "6.4rem",
    maxWidth: "121.6rem",
    width: "100%",
    marginBottom: "12rem",

    "@media (max-width: 768px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "3.5rem",
      marginBottom: "6rem",
    },
  }),
  contactSponsorButton: css({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "0.8rem",
    width: "28.5rem",
    height: "9.2rem",
    fontSize: "3.2rem",
    fontWeight: "bold",
    border: "0.1rem solid white",
    borderRadius: "5rem",

    "@media (max-width: 768px)": {
      width: "14rem",
      height: "4.5rem",
      fontSize: "1.6rem",
    },
  }),
  arrowIcon: css({
    width: "32px",
    height: "32px",

    "@media (max-width: 768px)": {
      width: "16px",
      height: "16px",
    },
  }),
};
