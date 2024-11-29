import { css } from "@styled-system/css";
import Button from "./common/Button";
import { Fragment, useEffect, useRef, useState } from "react";
import classNames from "classnames";
import codingManImage from "@/assets/images/coding-man.png";
import fightingGirlImage from "@/assets/images/fighting-girl.png";
import rainbowUnicornImage from "@/assets/images/rainbow-unicorn.png";
import robotImage from "@/assets/images/robot.png";
import spinnerImage from "@/assets/images/spinner.png";
import xCodeImage from "@/assets/images/x-code.png";
import threeOrangeImage from "@/assets/images/three-orange-twinkle.png";
import toggleImage from "@/assets/images/toggle.png";
import rightArrowImage from "@/assets/images/yellow-right-arrow.png";
import swiftImage from "@/assets/images/swift.png";
import starFallingImage from "@/assets/images/star-falling.png";
import greenStarImage from "@/assets/images/green-start.png";
import orangeStarImage from "@/assets/images/orange-star.png";
import threeBlueStarImage from "@/assets/images/three-blue-twinkle.png";
import RightArrow from "@/assets/svgs/right-arrow.svg?react";

const BannerTItle = () => {
  const containerRef = useRef(null);
  const buttonRef = useRef(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    if (buttonRef.current) {
      observer.observe(buttonRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Fragment>
      <div className={styles.container} ref={containerRef}>
        <div className={styles.contentContainer}>
          <div className={styles.titleContainer}>
            <img
              className={classNames(styles.fixedIcons, styles.rightArrow)}
              src={rightArrowImage}
              alt=""
              aria-hidden
            />
            <img
              className={classNames(styles.fixedIcons, styles.toggle)}
              src={toggleImage}
              alt=""
              aria-hidden
            />
            <img
              className={classNames(styles.fixedIcons, styles.threeOrange)}
              src={threeOrangeImage}
              alt=""
              aria-hidden
            />
            <img
              className={classNames(styles.fixedIcons, styles.spinner)}
              src={spinnerImage}
              alt=""
              aria-hidden
            />
            <img
              className={classNames(styles.fixedIcons, styles.swift)}
              src={swiftImage}
              alt=""
              aria-hidden
            />
            <img
              className={classNames(styles.fixedIcons, styles.starFalling)}
              src={starFallingImage}
              alt=""
              aria-hidden
            />
            <img
              className={classNames(styles.fixedIcons, styles.robot)}
              src={robotImage}
              alt=""
              aria-hidden
            />
            <div className={classNames(styles.fixedIcons, styles.fightingGirlContainer)}>
              <img className={styles.fightingGirl} src={fightingGirlImage} alt="" aria-hidden />
            </div>
            <img
              className={classNames(styles.fixedIcons, styles.codingMan)}
              src={codingManImage}
              alt=""
              aria-hidden
            />
            <div className={classNames(styles.fixedIcons, styles.rainbowUnicornContainer)}>
              <img className={styles.rainbowUnicorn} src={rainbowUnicornImage} alt="" aria-hidden />
            </div>
            <div className={classNames(styles.fixedIcons, styles.xCodeContainer)}>
              <img className={styles.xCode} src={xCodeImage} alt="" aria-hidden />
            </div>
            <img
              className={classNames(styles.fixedIcons, styles.greenStar)}
              src={greenStarImage}
              alt=""
              aria-hidden
            />
            <img
              className={classNames(styles.fixedIcons, styles.orangeStar)}
              src={orangeStarImage}
              alt=""
              aria-hidden
            />
            <img
              className={classNames(styles.fixedIcons, styles.threeBlueStar)}
              src={threeBlueStarImage}
              alt=""
              aria-hidden
            />

            <div className={styles.clubName}>let us: Go!</div>
            <div>spring</div>
            <div>conference</div>
            <div>2024</div>
          </div>
          <div className={styles.time}>
            <span className={styles.date}>2024.3.30(SAT)</span>
            <span>13:00 - 18:00</span>
          </div>
          <a
            href="https://smartstore.naver.com/let-us-go/products/9974040628"
            target="_blank"
            ref={buttonRef}
          >
            <Button className={styles.button(isVisible)} backgroundColor="primary.200" size="large">
              ✍️ 등록하기
              <span className={styles.arrow}>
                <RightArrow />
              </span>
            </Button>
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default BannerTItle;

const styles = {
  container: css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "8rem",
    paddingTop: "6rem",
    position: "relative",

    "@media (max-width: 768px)": {
      marginTop: "3rem",
    },
  }),
  contentContainer: css({
    width: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  }),
  titleContainer: css({
    textAlign: "center",
    fontSize: "12rem",
    fontWeight: 700,
    lineHeight: "initial",
    textTransform: "uppercase",

    "@media (max-width: 768px)": {
      fontSize: "5rem",
      margin: 0,
      alignSelf: "center",
    },
  }),
  clubName: css({
    color: "primary.200",
    textTransform: "initial",
  }),
  time: css({
    fontFamily: "intelone-mono-font-family-regular, sans-serif",
    fontSize: "3.6rem",
    color: "neutral.500",
    marginTop: "2.8rem",
    textAlign: "center",

    "@media (max-width: 768px)": {
      fontSize: "2rem",
      "& span": {
        display: "block",
      },
    },
  }),
  date: css({
    marginRight: "1.5rem",
    textAlign: "center",

    "@media (max-width: 768px)": {
      marginRight: "0",
    },
  }),
  button: (isVisible: boolean) =>
    css({
      fontSize: "3.2rem",
      fontWeight: 700,
      marginTop: "8.1rem",
      padding: "1.2rem 2.4rem",
      textTransform: "uppercase",
      cursor: "pointer",

      "@media (max-width: 768px)": {
        fontSize: "1.6rem",
        height: "4.3rem",
        padding: "1.2rem 2.4rem",

        position: isVisible ? "static" : "fixed",
        bottom: isVisible ? 0 : "2rem",
        left: isVisible ? 0 : "50%",
        transform: isVisible ? "none" : "translateX(-50%)",
        zIndex: isVisible ? 0 : 10,
      },
    }),
  arrow: css({
    marginLeft: "0.8rem",

    "@media (max-width: 768px)": {
      display: "none",
    },
  }),
  bigImage: css({
    display: "block",
    width: "100vw",
    height: "100%",

    "@media (max-width: 768px)": {
      display: "none",
    },
  }),
  smallImage: css({
    display: "none",
    width: "100vw",
    height: "100%",

    "@media (max-width: 768px)": {
      display: "block",
    },
  }),
  fixedIcons: css({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 10,
  }),

  threeOrange: css({
    top: "5rem",
    width: "18.4rem",

    "@media (max-width: 768px)": {
      width: "8.8rem",
    },
  }),
  toggle: css({
    top: "13rem",
    left: "calc(50% - 40rem)",
    width: "14rem",

    "@media (max-width: 884px) and (min-width: 769px)": {
      top: "3rem",
      left: "calc(50% - 30rem)",
    },

    "@media (max-width: 768px)": {
      width: "6.4rem",
      top: "3rem",
      left: "5rem",
    },
  }),
  rightArrow: css({
    top: "57rem",
    left: "calc(50% - 25rem)",
    width: "18.4rem",

    "@media (max-width: 768px)": {
      width: "7.8rem",
      top: "27rem",
      left: "calc(50% - 11rem)",
    },
  }),
  spinner: css({
    width: "12rem",
    top: "50rem",
    left: "calc(50% + 45rem)",

    "@media (max-width: 884px) and (min-width: 769px)": {
      top: "57rem",
      left: "calc(50% + 30rem)",
    },

    "@media (max-width: 768px)": {
      width: "4.8rem",
      top: "30rem",
      left: "calc(50% + 13rem)",
    },
  }),
  swift: css({
    width: "16.4rem",
    top: "0rem",
    left: "calc(50% + 30rem)",
    transform: "rotate(15deg)",

    "@media (max-width: 884px) and (min-width: 769px)": {
      top: "-5rem",
      left: "calc(50% + 20rem)",
    },

    "@media (max-width: 768px)": {
      width: "8.5rem",
      top: "0rem",
      left: "calc(50% + 7rem)",
    },
  }),
  starFalling: css({
    zIndex: 9,
    width: "24.8rem",
    top: "11rem",
    left: "calc(50% + 32rem)",

    "@media (max-width: 884px) and (min-width: 769px)": {
      top: "5rem",
      left: "calc(50% + 28rem)",
    },

    "@media (max-width: 768px)": {
      width: "14.5rem",
      top: "5rem",
      left: "calc(50% + 11rem)",
    },
  }),
  robot: css({
    width: "14.4rem",
    top: "42rem",
    left: "calc(50% + 8rem)",
    animation: "float 3s ease-in-out infinite",

    "@media (max-width: 768px)": {
      width: "6.4rem",
      top: "22rem",
      left: "calc(50% + 3rem)",
    },
  }),
  fightingGirlContainer: css({
    transform: "rotate(351deg)",
    top: "45rem",
    left: "calc(50% - 55rem)",

    "@media (max-width: 884px) and (min-width: 769px)": {
      display: "none",
    },
  }),
  fightingGirl: css({
    width: "14.4rem",
    animation: "float 3s ease-in-out infinite",
  }),
  codingMan: css({
    width: "13.8rem",
    top: "20rem",
    left: "calc(50% + 35rem)",
    animation: "float 3s ease-in-out infinite",

    "@media (max-width: 884px) and (min-width: 769px)": {
      left: "calc(50% + 28rem)",
    },

    "@media (max-width: 768px)": {
      width: "7rem",
      top: "13rem",
      left: "calc(50% + 12rem)",
    },
  }),
  rainbowUnicornContainer: css({
    transform: "rotate(346deg)",
    top: "25rem",
    left: "calc(50% - 53rem)",

    "@media (max-width: 884px) and (min-width: 769px)": {
      top: "20rem",
      left: "calc(50% - 40rem)",
    },

    "@media (max-width: 768px)": {
      width: "9.4rem",
      top: "35rem",
      left: "calc(50% - 18rem)",
    },
  }),
  rainbowUnicorn: css({
    width: "15.6rem",

    "@media (max-width: 768px)": {
      animation: "float 3s ease-in-out infinite",
    },
  }),
  xCodeContainer: css({
    transform: "rotate(20deg)",
    top: "72rem",
    left: "calc(50% - 43rem)",

    "@media (max-width: 884px) and (min-width: 769px)": {
      left: "calc(50% - 40rem)",
    },

    "@media (max-width: 768px)": {
      top: "53rem",
      left: "2rem",
    },
  }),
  xCode: css({
    width: "18.6rem",

    "@media (max-width: 768px)": {
      width: "9.6rem",
    },
  }),
  greenStar: css({
    width: "4.4rem",
    top: "4rem",
    left: "5rem",

    "@media (min-width: 1440px)": {
      left: "calc(50% - 60rem)",
    },

    "@media (max-width: 884px) and (min-width: 769px)": {
      top: "-3rem",
      left: "25rem",
    },

    "@media (max-width: 768px)": {
      width: "3.2rem",
      top: "0rem",
      left: "12rem",
    },
  }),
  orangeStar: css({
    width: "5.6rem",
    top: "80rem",
    left: "calc(50% + 48rem)",

    "@media (max-width: 884px) and (min-width: 769px)": {
      top: "90rem",
      left: "calc(50% + 34rem)",
    },

    "@media (max-width: 768px)": {
      width: "3.6rem",
      top: "55rem",
      left: "calc(50% + 13rem)",
    },
  }),
  threeBlueStar: css({
    width: "5.6rem",
    top: "72rem",
    left: "calc(50% - 50rem)",
  }),
};
