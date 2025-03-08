import { forwardRef } from "react";
import { css } from "@styled-system/css";
import ProfileCard from "./ProfileCard";
import Signature2Big from "@/assets/svgs/signature2-big.svg?react";
import Signature2Small from "@/assets/svgs/signature2-small.svg?react";
import ethanImage from "@/assets/images/SpeakersSupporters/ethan.jpeg";
import eunpyoImage from "@/assets/images/SpeakersSupporters/eunpyo.jpeg";
import jercyImage from "@/assets/images/SpeakersSupporters/jercy.png";
import summercatImage from "@/assets/images/SpeakersSupporters/summercat.jpeg";
import terryImage from "@/assets/images/SpeakersSupporters/terry.jpeg";

const SpeakersSupporters = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <div ref={ref} className={styles.container}>
      <div className={styles.logoContainer}>
        <div className={styles.bigSignature}>
          <Signature2Big />
        </div>
        <div className={styles.smallSignature}>
          <Signature2Small />
        </div>
      </div>
      <div className={styles.title}>Speakers & Supporters</div>
      <div className={styles.cardContainer}>
        <ProfileCard
          image={jercyImage}
          role="speaker"
          nickname="재르시"
          comment="모먼티카 많은 관심 부탁드려요"
        />
        <ProfileCard
          image={ethanImage}
          role="speaker"
          nickname="Ethan"
          comment="경력 8개월차 응애 개발자입니다."
        />
        <ProfileCard
          image={summercatImage}
          role="speaker"
          nickname="summercat"
          comment="수습이 아직 안 끝난 신입 개발자(진)"
        />
        <ProfileCard
          image={terryImage}
          role="speaker"
          nickname="Terry"
          comment="iOS, i는 소문자로 적어주세요"
        />
        <ProfileCard image={eunpyoImage} role="speaker" nickname="은표" comment="사실주의 개발자" />
        <ProfileCard image={eunpyoImage} role="speaker" nickname="은표" comment="사실주의 개발자" />
        <ProfileCard
          image={eunpyoImage}
          role="supporter"
          nickname="은표"
          comment="사실주의 개발자"
        />
      </div>
    </div>
  );
});

export default SpeakersSupporters;

const styles = {
  container: css({
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "center",
    justifyContent: "center",
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
  logoContainer: css({
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "center",
  }),
  smallSignature: css({
    display: "none",

    "@media (max-width: 768px)": {
      display: "block",
    },
  }),
  title: css({
    fontSize: "7.2rem",
    background: "linear-gradient(to bottom, #00D0F3 0%, #0066FF 100%)",
    backgroundClip: "text",
    color: "transparent",
    fontFamily: "Unbounded",
    fontWeight: 700,
    marginBottom: "4.4rem",
    textAlign: "center",

    "@media (max-width: 768px)": {
      fontSize: "3.2rem",
      marginBottom: "3.6rem",
    },
  }),
  cardContainer: css({
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "3.2rem",
    margin: "0 auto",

    "@media (max-width: 884px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    "@media (max-width: 768px)": {
      gridGap: "2rem",
      width: "100%",
      gridTemplateColumns: "repeat(2, 1fr)",
    },
  }),
};
