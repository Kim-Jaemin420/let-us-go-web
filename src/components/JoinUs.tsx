import { forwardRef } from "react";
import { css } from "@styled-system/css";
import Signature1Big from "@/assets/svgs/signature1-big.svg?react";
import Signature1Small from "@/assets/svgs/signature1-small.svg?react";
import KakaoSvg from "@/assets/svgs/kakaotalk.svg?react";
import MailSvg from "@/assets/svgs/email.svg?react";

const JoinUs = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <div ref={ref} className={styles.container}>
      <div className={styles.bigSignature}>
        <Signature1Big />
      </div>
      <div className={styles.smallSignature}>
        <Signature1Small />
      </div>
      <div className={styles.title}>Join Us</div>
      <div className={styles.contactContainer}>
        <a href="https://open.kakao.com/o/gyLape" target="_blank" className={styles.contactInfo}>
          <KakaoSvg className={styles.icon} />
          <div className={styles.contactTitle}>카카오톡 오픈 채팅방</div>
          <div className={styles.contactDescription}>
            iOS 개발자들과 함께 어울리며 서로의 지식을{"\n"}
            공유하고 소통하는 오픈카톡방입니다.
          </div>
        </a>
        <a href="mailTo:iOSDevKor@gmail.com" target="_blank" className={styles.contactInfo}>
          <MailSvg className={styles.icon} />
          <div className={styles.contactTitle}>Mail</div>
          <div className={styles.contactDescription}>
            let us: Go! 활동문의 및 후원을 원하신다면{"\n"}언제든 메일을 보내주세요.
          </div>
        </a>
      </div>
    </div>
  );
});

export default JoinUs;

const styles = {
  container: css({
    display: "flex",
    flexFlow: "column wrap",
    maxWidth: "121.6rem",
    width: "100%",

    "@media (max-width: 768px)": {
      width: "calc(100vw - 4rem)",
      marginBottom: "10rem",
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
    color: "main",
    fontFamily: "Unbounded",
    fontWeight: 700,
    marginBottom: "4.4rem",

    "@media (max-width: 768px)": {
      fontSize: "3.2rem",
      marginBottom: "2.2rem",
    },
  }),
  contactContainer: css({
    display: "flex",
    justifyContent: "center",
    gap: "3.2rem",
    width: "100%",

    "@media (max-width: 768px)": {
      width: "100%",
      flexDirection: "column",
      alignItems: "center",
      gap: "1.2rem",
    },
  }),
  contactInfo: css({
    width: "100%",
    minWidth: "33.5rem",
    height: "auto",
    borderRadius: "1.2rem",
    backgroundColor: "background.300",
    padding: "4.8rem 6.4rem",
    marginBottom: "39.8rem",

    "@media (max-width: 768px)": {
      width: "100%",
      marginBottom: 0,
      borderRadius: "0.8rem",
      paddingX: "1.6rem",
      paddingTop: "2.4rem",
    },
  }),
  icon: css({
    width: "72px",
    height: "72px",
    marginBottom: "3.2rem",

    "@media (max-width: 768px)": {
      width: "32px",
      height: "32px",
      marginBottom: "1rem",
    },
  }),
  contactTitle: css({
    fontSize: "2.8rem",
    fontWeight: 600,

    "@media (max-width: 768px)": {
      fontSize: "2rem",
    },
  }),
  contactDescription: css({
    fontSize: "2.4rem",
    fontWeight: "normal",
    color: "#A2AFC7",
    whiteSpace: "pre-wrap",

    "@media (max-width: 1178px)": {
      wordBreak: "keep-all",
      whiteSpace: "normal",
    },

    "@media (max-width: 768px)": {
      fontSize: "1.6rem",
    },
  }),
};
