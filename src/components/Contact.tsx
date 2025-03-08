import { css } from "@styled-system/css";
import Signature2Big from "@/assets/svgs/signature2-big.svg";
import Signature2Small from "@/assets/svgs/signature2-small.svg";
import Email56 from "@/assets/svgs/email56.svg";
import Email16 from "@/assets/svgs/email16.svg";
import Instagram56 from "@/assets/svgs/instagram56.svg";
import Instagram16 from "@/assets/svgs/instagram16.svg";
import Kakaotalk56 from "@/assets/svgs/kakaotalk56.svg";
import Kakaotalk16 from "@/assets/svgs/kakaotalk16.svg";
import ArrowRight32 from "@/assets/svgs/arrow-right32.svg";
import ArrowRight16 from "@/assets/svgs/arrow-right16.svg";
import { forwardRef } from "react";

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
            <div className={styles.bigIcon}>
              <Email56 />
            </div>
            <div className={styles.smallIcon}>
              <Email16 />
            </div>
            <div>Email</div>
          </div>
          <div className={styles.bigIcon}>
            <ArrowRight32 />
          </div>
          <div className={styles.smallIcon}>
            <ArrowRight16 />
          </div>
        </a>
        <a
          href="https://www.instagram.com/letusgo_kor?igsh=eDBnazE5cXEzcnN0"
          className={styles.contactMethod}
        >
          <div className={styles.contactItem}>
            <div className={styles.bigIcon}>
              <Instagram56 />
            </div>
            <div className={styles.smallIcon}>
              <Instagram16 />
            </div>
            <div>Instagram</div>
          </div>
          <div className={styles.bigIcon}>
            <ArrowRight32 />
          </div>
          <div className={styles.smallIcon}>
            <ArrowRight16 />
          </div>
        </a>
        <a href="https://open.kakao.com/o/gyLape" className={styles.contactMethod}>
          <div className={styles.contactItem}>
            <div className={styles.bigIcon}>
              <Kakaotalk56 />
            </div>
            <div className={styles.smallIcon}>
              <Kakaotalk16 />
            </div>
            <div>Kakaotalk</div>
          </div>
          <div className={styles.bigIcon}>
            <ArrowRight32 />
          </div>
          <div className={styles.smallIcon}>
            <ArrowRight16 />
          </div>
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
};
