import { TypeAnimation } from "react-type-animation";
import classNames from "classnames";
import { css } from "@styled-system/css";
import Logo1 from "@/assets/svgs/logo1.svg?react";
import Logo1Small from "@/assets/svgs/logo1-small.svg?react";

const Title = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bigLogo}>
        <Logo1 />
      </div>
      <div className={styles.smallLogo}>
        <Logo1Small />
      </div>
      <div className={styles.svgWrapper}>
        <svg className={styles.svg} viewBox="0 0 480 100" xmlns="http://www.w3.org/2000/svg">
          <text x="0" y="60%" dominantBaseline="middle" className={styles.title}>
            let us:
          </text>
        </svg>
        <svg
          className={classNames(styles.mobileSvg, styles.svg)}
          viewBox="0 0 480 300"
          xmlns="http://www.w3.org/2000/svg"
        >
          <text x="0" y="55%" dominantBaseline="middle" className={styles.title}>
            let us:
          </text>
        </svg>
        <span className={styles.network}>
          <TypeAnimation
            sequence={["Network", 1000, "", 1000]}
            wrapper="span"
            speed={30}
            style={{
              display: "inline-block",
              fontFamily: "Unbounded",
              fontWeight: "700",
              color: "#FF8EFF",
              verticalAlign: "middle",
            }}
            repeat={Infinity}
          />
        </span>
      </div>
      <div className={styles.description}>iOS 개발자들의 2024 연말 네트워킹에 초대합니다.</div>
      <div className={styles.date}>2024.11.29(FRI) 19:00 - 22:30</div>
      <a
        href="https://smartstore.naver.com/let-us-go/products/11017888414"
        target="_blank"
        className={styles.applyButton}
      >
        🥳 네트워킹 신청하기
      </a>
    </div>
  );
};

export default Title;

const styles = {
  container: css({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    maxWidth: "121.6rem",
    margin: "0 auto",
    width: "calc(100vw - 6.4rem)",
    height: "calc(100vh + 8.1rem)",

    "@media (max-width: 768px)": {
      width: "calc(100vw - 4rem)",
    },
  }),
  bigLogo: css({
    display: "block",

    "@media (max-width: 768px)": {
      display: "none",
    },
  }),
  smallLogo: css({
    display: "none",

    "@media (max-width: 768px)": {
      display: "block",
    },
  }),
  svgWrapper: css({
    display: "flex",
    alignItems: "center",

    "@media (max-width: 1214px)": {
      display: "flex",
      flexFlow: "column wrap",
      alignItems: "flex-start",
    },

    "@media (max-width: 768px)": {
      display: "flex",
      flexFlow: "row nowrap",
      alignItems: "center",
    },
  }),
  svg: css({
    display: "inline-block",
    height: "100px",
    width: "auto",
    marginRight: "1rem",

    "@media (max-width: 768px)": {
      display: "none",
      marginRight: 0,
    },
  }),
  mobileSvg: css({
    display: "none",

    "@media (max-width: 768px)": {
      display: "block",
    },
  }),
  title: css({
    fontFamily: "Unbounded",
    fontSize: "12rem",
    fontWeight: "700",
    fill: "background.500",
    stroke: "white",
    strokeWidth: "0.5rem",
    paintOrder: "stroke",
  }),
  network: css({
    fontSize: "12rem",

    "@media (max-width: 768px)": {
      fontSize: "3.6rem",
    },
  }),
  description: css({
    display: "inline-block",
    fontSize: "3.2rem",
    backgroundColor: "background.300",
    padding: "2.4rem",
    borderRadius: "0.8rem",
    marginBottom: "5.6rem",

    "@media (max-width: 768px)": {
      fontSize: "1.6rem",
      padding: "1.2rem",
      marginTop: "-1.5rem",
      marginBottom: "3.6rem",
    },
  }),
  date: css({
    fontWeight: 700,
    fontSize: "4.8rem",
    marginBottom: "8rem",

    "@media (max-width: 768px)": {
      fontSize: "2rem",
      marginBottom: "7.2rem",
    },
  }),
  applyButton: css({
    fontWeight: 700,
    fontSize: "3.2rem",
    padding: "2.7rem 6rem",
    borderRadius: "5rem",
    backgroundColor: "winter",
    color: "background.500",

    "@media (max-width: 768px)": {
      fontSize: "1.6rem",
      padding: "1.2rem 2.4rem",
    },
  }),
};
