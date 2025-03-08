import { css } from "@styled-system/css";
import classNames from "classnames";
import Email56 from "@/assets/svgs/email56.svg";
import Email20 from "@/assets/svgs/email20.svg";
import Instagram56 from "@/assets/svgs/instagram56.svg";
import Instagram20 from "@/assets/svgs/instagram20.svg";
import Linkedin56 from "@/assets/svgs/linkedin56.svg";
import Linkedin20 from "@/assets/svgs/linkedin20.svg";
import footerLogo from "@/assets/images/footer-logo.png";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footerContent}>
        <div>
          <div className={styles.footerTitle}>
            <img src={footerLogo} alt="로고" className={styles.footerLogo} />
          </div>
          <div className={styles.copyRight}>
            &copy; let us: Go! iOS Developers Korea All rights reserved
          </div>
        </div>
        <div className={styles.iconContainer}>
          <a href="mailTo:iOSDevKor@gmail.com" className={styles.bigIcon}>
            <Email56 />
          </a>
          <a href="mailTo:iOSDevKor@gmail.com" className={styles.smallIcon}>
            <Email20 />
          </a>
          <a
            href="https://www.instagram.com/letusgo_kor?igsh=eDBnazE5cXEzcnN0"
            className={classNames(styles.bigIcon, styles.instagram)}
          >
            <Instagram56 />
          </a>
          <div className={classNames(styles.smallIcon, styles.instagram)}>
            <Instagram20 />
          </div>
          <a href="https://www.linkedin.com/company/letusgo-kr/" className={styles.bigIcon}>
            <Linkedin56 />
          </a>
          <a href="https://www.linkedin.com/company/letusgo-kr/" className={styles.smallIcon}>
            <Linkedin20 />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const styles = {
  container: css({
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "background.400",
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
    height: "8rem",

    "@media (max-width: 768px)": {
      display: "flex",
      justifyContent: "center",
      height: "3.2rem",
      marginBottom: "0.8rem",
    },
  }),
  footerLogo: css({
    maxHeight: "100%",
    maxWidth: "100%",
  }),
  copyRight: css({
    fontSize: "2.4rem",
    color: "neutral.500",

    "@media (max-width: 768px)": {
      fontSize: "1rem",
    },
  }),
};
