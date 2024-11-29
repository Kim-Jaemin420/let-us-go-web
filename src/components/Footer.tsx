import { css } from "@styled-system/css";
import Slider from "./Slider";
import FollowBanner from "./FollowBanner";
import Mail56Icon from "@/assets/svgs/white-mail-56.svg";
import Mail20Icon from "@/assets/svgs/white-mail-20.svg";
import Instagram56Icon from "@/assets/svgs/instagram-56.svg";
import Instagram20Icon from "@/assets/svgs/instagram-20.svg";
import Linkedin56Icon from "@/assets/svgs/linkedin-56.svg";
import Linkedin20Icon from "@/assets/svgs/linkedin-20.svg";
import classNames from "classnames";

const lastEventsText = "🧑‍💻 지난 행사 보기 → ";
const repeatedEventsText = Array(6).fill(lastEventsText).join(" ");

const Footer = () => {
  return (
    <div>
      <div className={styles.sliderContainer}>
        <Slider pauseOnHover>
          <a
            href="https://letusgo2023fall.vercel.app/"
            target="_blank"
            className={styles.lastEvent}
          >
            {repeatedEventsText}
          </a>
        </Slider>
        <Slider pauseOnHover reverse>
          <FollowBanner />
        </Slider>
      </div>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div>
            <div className={styles.footerTitle}>let us: Go!</div>
            <div className={styles.copyRight}>
              &copy; let us: Go! iOS Developers Korea All rights reserved
            </div>
          </div>
          <div className={styles.iconContainer}>
            <a href="mailTo:iOSDevKor@gmail.com" className={styles.bigIcon}>
              <Mail56Icon />
            </a>
            <a href="mailTo:iOSDevKor@gmail.com" className={styles.smallIcon}>
              <Mail20Icon />
            </a>
            <a
              href="https://www.instagram.com/letusgo_kor?igsh=eDBnazE5cXEzcnN0"
              className={classNames(styles.bigIcon, styles.instagram)}
            >
              <Instagram56Icon />
            </a>
            <div className={classNames(styles.smallIcon, styles.instagram)}>
              <Instagram20Icon />
            </div>
            <a href="https://www.linkedin.com/company/letusgo-kr/" className={styles.bigIcon}>
              <Linkedin56Icon />
            </a>
            <a href="https://www.linkedin.com/company/letusgo-kr/" className={styles.smallIcon}>
              <Linkedin20Icon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const styles = {
  sliderContainer: css({
    marginX: "auto",
    backgroundColor: "primary.200",
    maxWidth: "192rem",
  }),
  lastEvent: css({
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "11.3rem",
    fontSize: "5.4rem",
    fontWeight: 700,
    color: "white",
    backgroundColor: "primary.200",
    whiteSpace: "nowrap",
    marginLeft: "1rem",

    "@media (max-width: 768px)": {
      fontSize: "1.6rem",
      height: "3.5rem",
    },
  }),
  container: css({
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "neutral.700",
    width: "100%",
    maxWidth: "192rem",
    marginX: "auto",
  }),
  footerContent: css({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "calc(100% - 6.4rem)",
    maxWidth: "121.4rem",
    height: "32.8rem",

    "@media (max-width: 768px)": {
      flexFlow: "column wrap",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      height: "14.4rem",
    },
  }),
  iconContainer: css({
    display: "flex",
    justifyContent: "center",

    "@media (max-width: 768px)": {
      marginTop: "3.2rem",
    },
  }),
  bigIcon: css({
    display: "block",
    "@media (max-width: 768px)": {
      display: "none",
    },
  }),
  smallIcon: css({
    display: "none",
    "@media (max-width: 768px)": {
      display: "block",
    },
  }),
  instagram: css({
    marginX: "3.2rem",

    "@media (max-width: 768px)": {
      marginX: "1.2rem",
    },
  }),
  footerTitle: css({
    fontSize: "5.6rem",
    color: "white",
    fontWeight: 800,

    "@media (max-width: 768px)": {
      fontSize: "2rem",
    },
  }),
  copyRight: css({
    fontSize: "2.4rem",
    color: "neutral.500",

    "@media (max-width: 768px)": {
      fontSize: "1rem",
    },
  }),
};
