import { css } from "@styled-system/css";
import EmailSvg from "@/assets/svgs/email.svg?react";
import InstagramSvg from "@/assets/svgs/instagram.svg?react";
import LinkedinSvg from "@/assets/svgs/linkedin.svg?react";
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
          <a href="mailTo:iOSDevKor@gmail.com">
            <EmailSvg className={styles.icon} />
          </a>
          <a href="https://www.instagram.com/letusgo_kor?igsh=eDBnazE5cXEzcnN0">
            <InstagramSvg className={styles.icon} />
          </a>
          <a href="https://www.linkedin.com/company/letusgo-kr/">
            <LinkedinSvg className={styles.icon} />
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
