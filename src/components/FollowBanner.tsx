import Instagram56Icon from "@/assets/svgs/instagram-56.svg";
import Instagram20Icon from "@/assets/svgs/instagram-20.svg";
import Linkedin56Icon from "@/assets/svgs/linkedin-56.svg";
import Linkedin20Icon from "@/assets/svgs/linkedin-20.svg";
import { css } from "@styled-system/css";
import { Fragment } from "react";

const FollowBanner = () => (
  <Fragment>
    <div className={styles.follwerBanner}>
      <div className={styles.title}>✨ FOLLOW US ON</div>
      <a
        href="https://www.instagram.com/letusgo_kor?igsh=eDBnazE5cXEzcnN0"
        target="_blank"
        className={styles.icon}
      >
        Instagram
        <span className={styles.bigIcon}>
          <Instagram56Icon />
        </span>
        <span className={styles.smallIcon}>
          <Instagram20Icon />
        </span>
      </a>
      <a
        href="https://www.linkedin.com/company/letusgo-kr/"
        target="_blank"
        className={styles.icon}
      >
        LinkedIn
        <span className={styles.bigIcon}>
          <Linkedin56Icon />
        </span>
        <span className={styles.smallIcon}>
          <Linkedin20Icon />
        </span>
      </a>
      <div className={styles.title}>✨ FOLLOW US ON</div>
      <a
        href="https://www.instagram.com/letusgo_kor?igsh=eDBnazE5cXEzcnN0"
        target="_blank"
        className={styles.icon}
      >
        Instagram
        <span className={styles.bigIcon}>
          <Instagram56Icon />
        </span>
        <span className={styles.smallIcon}>
          <Instagram20Icon />
        </span>
      </a>
      <a
        href="https://www.linkedin.com/company/letusgo-kr/"
        target="_blank"
        className={styles.icon}
      >
        LinkedIn
        <span className={styles.bigIcon}>
          <Linkedin56Icon />
        </span>
        <span className={styles.smallIcon}>
          <Linkedin20Icon />
        </span>
      </a>
      <div className={styles.title}>✨ FOLLOW US ON</div>
      <a
        href="https://www.instagram.com/letusgo_kor?igsh=eDBnazE5cXEzcnN0"
        target="_blank"
        className={styles.icon}
      >
        Instagram
        <span className={styles.bigIcon}>
          <Instagram56Icon />
        </span>
        <span className={styles.smallIcon}>
          <Instagram20Icon />
        </span>
      </a>
      <a
        href="https://www.linkedin.com/company/letusgo-kr/"
        target="_blank"
        className={styles.icon}
      >
        LinkedIn
        <span className={styles.bigIcon}>
          <Linkedin56Icon />
        </span>
        <span className={styles.smallIcon}>
          <Linkedin20Icon />
        </span>
      </a>
    </div>
  </Fragment>
);

export default FollowBanner;

const styles = {
  follwerBanner: css({
    display: "inline-flex",
    flexFlow: "row nowrap",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "11.3rem",
    fontSize: "5.4rem",
    fontWeight: 600,
    textTransform: "uppercase",
    color: "white",
    backgroundColor: "primary.200",
    whiteSpace: "nowrap",
    marginRight: "2rem",

    "@media (max-width: 768px)": {
      fontSize: "1.6rem",
      height: "3.5rem",
    },
  }),
  title: css({
    marginLeft: "4.8rem",

    "@media (max-width: 768px)": {
      marginLeft: "1.2rem",
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
  icon: css({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "2.4rem",
    fontWeight: 700,
    cursor: "pointer",
  }),
};
