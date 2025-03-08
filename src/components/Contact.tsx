import { forwardRef } from "react";
import { css } from "@styled-system/css";
import Signature2Big from "@/assets/svgs/signature2-big.svg?react";
import Signature2Small from "@/assets/svgs/signature2-small.svg?react";
import EmailSvg from "@/assets/svgs/email.svg?react";
import InstagramSvg from "@/assets/svgs/instagram.svg?react";
import KakaotalkSvg from "@/assets/svgs/kakaotalk.svg?react";
import ArrowRightSvg from "@/assets/svgs/arrow-right.svg?react";

const Contact = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <div ref={ref} className={styles.container}>
      <div className={styles.bigSignature}>
        <Signature2Big />
      </div>
      <div className={styles.smallSignature}>
        <Signature2Small />
      </div>
      <div className={styles.title}>Contact</div>
      <div className={styles.contactContainer}>
        <a href="mailTo:iOSDevKor@gmail.com" className={styles.contactMethod}>
          <div className={styles.contactItem}>
            <EmailSvg className={styles.icon} />
            <div>Email</div>
          </div>
          <ArrowRightSvg className={styles.arrowRightIcon} />
        </a>
        <a
          href="https://www.instagram.com/letusgo_kor?igsh=eDBnazE5cXEzcnN0"
          className={styles.contactMethod}
        >
          <div className={styles.contactItem}>
            <InstagramSvg className={styles.icon} />
            <div>Instagram</div>
          </div>
          <ArrowRightSvg className={styles.arrowRightIcon} />
        </a>
        <a href="https://open.kakao.com/o/gyLape" className={styles.contactMethod}>
          <div className={styles.contactItem}>
            <KakaotalkSvg className={styles.icon} />
            <div>Kakaotalk</div>
          </div>
          <ArrowRightSvg className={styles.arrowRightIcon} />
        </a>
      </div>
    </div>
  );
});

export default Contact;

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
    background: "linear-gradient(to bottom, #7F42FF 0%, #4C00EE 100%)",
    backgroundClip: "text",
    color: "transparent",
    fontFamily: "Unbounded",
    fontWeight: 700,
    marginBottom: "4.4rem",

    "@media (max-width: 768px)": {
      fontSize: "3.2rem",
      marginBottom: "3.6rem",
    },
  }),
  contactContainer: css({
    display: "flex",
    flexFlow: "row nowrap",
    gap: "4.2rem",
    width: "100%",
    maxWidth: "121.6rem",

    "@media (max-width: 1214px)": {
      flexFlow: "column wrap",
      gap: "1.2rem",
    },
  }),
  contactMethod: css({
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "background.300",
    fontSize: "3.6rem",
    width: "calc(100% / 3)",
    height: "10.4rem",
    borderRadius: "1.2rem",
    paddingX: "3.6rem",

    "@media (max-width: 1214px)": {
      flexFlow: "row wrap",
      gap: "1.2rem",
      width: "100%",
    },

    "@media (max-width: 768px)": {
      width: "100%",
      height: "4.1rem",
      borderRadius: "0.4rem",
      fontSize: "1.4rem",
      paddingX: "1.6rem",
      alignItems: "space-between",
    },
  }),
  contactItem: css({
    display: "flex",
    flexFlow: "row nowrap",
    alignItems: "center",
    gap: "2.4rem",

    "@media (max-width: 768px)": {
      gap: "0.8rem",
    },
  }),
  arrowRightIcon: css({
    width: "3.2rem",
    height: "3.2rem",

    "@media (max-width: 768px)": {
      width: "1.6rem",
      height: "1.6rem",
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
};
