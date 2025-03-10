import { TypeAnimation } from "react-type-animation";
import classNames from "classnames";
import { css } from "@styled-system/css";
import Logo1 from "@/assets/svgs/logo1.svg?react";
import Logo1Small from "@/assets/svgs/logo1-small.svg?react";
import ArrowDownSvg from "@/assets/svgs/arrow-down.svg?react";

interface Props {
  onScrollToSection: (section: "about") => void;
}

const Title = ({ onScrollToSection }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.bigLogo}>
        <Logo1 />
      </div>
      <div className={styles.smallLogo}>
        <Logo1Small />
      </div>
      <div className={styles.svgWrapper}>
        <svg className={styles.svgStyle} viewBox="0 0 480 100" xmlns="http://www.w3.org/2000/svg">
          <text x="0" y="60%" dominantBaseline="middle" className={styles.title}>
            let us:
          </text>
        </svg>
        <svg
          className={classNames(styles.svgStyle, styles.mobileSvg)}
          viewBox="0 0 480 300"
          xmlns="http://www.w3.org/2000/svg"
        >
          <text x="0" y="55%" dominantBaseline="middle" className={styles.title}>
            let us:
          </text>
        </svg>
        <span className={styles.hack}>
          <TypeAnimation
            sequence={["Go!", 1000, "Conf", 1000, "Hack", 1000, "Network", 1000]}
            wrapper="span"
            speed={30}
            style={{
              display: "inline-block",
              fontFamily: "Unbounded",
              fontWeight: "700",
              background: "linear-gradient(to bottom, #00D0F3 0%, #00D0F3 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              verticalAlign: "middle",
            }}
            repeat={Infinity}
          />
        </span>
      </div>
      <div className={styles.description}>iOS 개발자들의 지식공유와 네트워킹을 위한 커뮤니티</div>
      <a href="https://forms.gle/XYgxktLg4RuHBntX6" target="_blank" className={styles.applyButton}>
        🔔 알림 신청하기
      </a>
      <button className={styles.scrollButton} onClick={() => onScrollToSection("about")}>
        <ArrowDownSvg className={styles.arrowIcon} />
      </button>
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
  svgStyle: css({
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
    display: "none ",

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
  hack: css({
    fontSize: "12rem",

    "@media (max-width: 768px)": {
      fontSize: "3.6rem",
    },
  }),
  description: css({
    display: "inline-block",
    fontSize: "3.2rem",
    marginBottom: "5.6rem",

    "@media (max-width: 768px)": {
      fontSize: "1.6rem",
      marginTop: "-1.5rem",
      marginBottom: "3.6rem",
    },
  }),
  applyButton: css({
    fontWeight: 700,
    fontSize: "3.2rem",
    padding: "2.7rem 6rem",
    borderRadius: "5rem",
    backgroundColor: "main",
    color: "background.100",

    "@media (max-width: 768px)": {
      fontSize: "1.6rem",
      padding: "1.2rem 2.4rem",
    },
  }),
  scrollButton: css({
    position: "absolute",
    bottom: "5rem",
    left: "50%",
    transform: "translateX(-50%)",
    background: "transparent",
    border: "0.1rem solid",
    borderRadius: "50rem",
    padding: "1rem",
    cursor: "pointer",
    animation: "bounce 2s infinite",

    "@media (max-width: 768px)": {
      bottom: "3rem",
    },
  }),

  "@keyframes bounce": {
    "0%, 20%, 50%, 80%, 100%": {
      transform: "translateY(0) translateX(-50%)",
    },
    "40%": {
      transform: "translateY(-10px) translateX(-50%)",
    },
    "60%": {
      transform: "translateY(-5px) translateX(-50%)",
    },
  },
  arrowIcon: css({
    width: "72px",
    height: "72px",

    "@media (max-width: 768px)": {
      width: "20px",
      height: "20px",
    },
  }),
};
