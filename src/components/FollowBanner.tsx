import InstagramSvg from "@/assets/svgs/instagram.svg?react";
import LinkedinSvg from "@/assets/svgs/linkedin.svg?react";
import { css } from "@styled-system/css";
import { Fragment } from "react";

const FollowBanner = () => (
  <Fragment>
    <div className={styles.follwerBanner}>
      <div className={styles.title}>✨ FOLLOW US ON</div>
      <a
        href="https://www.instagram.com/letusgo_kor?igsh=eDBnazE5cXEzcnN0"
        target="_blank"
        className={styles.anchor}
      >
        Instagram
        <InstagramSvg className={styles.icon} />
      </a>
      <a
        href="https://www.linkedin.com/company/letusgo-kr/"
        target="_blank"
        className={styles.anchor}
      >
        LinkedIn
        <LinkedinSvg className={styles.icon} />
      </a>
      <div className={styles.title}>✨ FOLLOW US ON</div>
      <a
        href="https://www.instagram.com/letusgo_kor?igsh=eDBnazE5cXEzcnN0"
        target="_blank"
        className={styles.anchor}
      >
        Instagram
        <InstagramSvg className={styles.icon} />
      </a>
      <a
        href="https://www.linkedin.com/company/letusgo-kr/"
        target="_blank"
        className={styles.anchor}
      >
        LinkedIn
        <LinkedinSvg className={styles.icon} />
      </a>
      <div className={styles.title}>✨ FOLLOW US ON</div>
      <a
        href="https://www.instagram.com/letusgo_kor?igsh=eDBnazE5cXEzcnN0"
        target="_blank"
        className={styles.anchor}
      >
        Instagram
        <InstagramSvg className={styles.icon} />
      </a>
      <a
        href="https://www.linkedin.com/company/letusgo-kr/"
        target="_blank"
        className={styles.anchor}
      >
        LinkedIn
        <LinkedinSvg className={styles.icon} />
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
  icon: css({
    width: "5.6rem",
    height: "5.6rem",
    marginRight: "3.2rem",

    "@media (max-width: 768px)": {
      width: "2rem",
      height: "2rem",
      marginRight: "1.2rem",
    },
  }),
  anchor: css({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginLeft: "2.4rem",
    fontWeight: 700,
    cursor: "pointer",
  }),
};
