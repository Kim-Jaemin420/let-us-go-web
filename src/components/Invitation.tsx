import classNames from "classnames";
import Signature1Big from "@/assets/svgs/signature1-big.svg?react";
import Signature1Small from "@/assets/svgs/signature1-small.svg?react";
import groupPhotoImage from "@/assets/images/group-photo.jpg";
import { css } from "@styled-system/css";

const Invitation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.bigSignature}>
        <Signature1Big />
      </div>
      <div className={styles.smallSignature}>
        <Signature1Small />
      </div>
      <div className={styles.title}>Invitation</div>
      <div className={classNames(styles.description, styles.desktopOnly)}>
        뜨거운 햇살이 시작되는 6월입니다.{"\n"}WWDC의 분위기와 더불어 날씨도 뜨거워지고 있는데요, 이
        뜨거운 열정을 함께 나누는{"\n"}찍먹톤을 개최합니다. WWDC24의 기술을 슬쩍 찍어먹어보는
        해커톤인 찍먹톤,{"\n"}새로운 도전과 함께 성장하는 기회를 가져보는 것은 어떨까요?
      </div>
      <div className={classNames(styles.description, styles.mobileOnly)}>
        뜨거운 햇살이 시작되는 6월입니다.{"\n"}WWDC의 분위기와 더불어 날씨도 뜨거워지고 {"\n"}
        있는데요, 이 뜨거운 열정을 함께 나누는 찍먹톤을 {"\n"}개최합니다. WWDC24의 기술을 슬쩍
        찍어먹어{"\n"}보는 해커톤인 찍먹톤, 새로운 도전과 함께 성장하는 {"\n"}기회를 가져보는 것은
        어떨까요?
      </div>
      <div className={styles.eventIntro}>
        6월 29일 토요일, {"\n"}함께 모여 뜨거운 여름을 불태워보자구요 🙌
      </div>
      <div className={styles.imageContainer}>
        <img src={groupPhotoImage} alt="단체사진" />
      </div>
    </div>
  );
};

export default Invitation;

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
    color: "summer",
    fontFamily: "Unbounded",
    fontWeight: 700,

    "@media (max-width: 768px)": {
      fontSize: "3.2rem",
    },
  }),
  description: css({
    fontSize: "2.8rem",
    whiteSpace: "pre-line",
    textAlign: "center",
    marginTop: "4.4rem",
    marginBottom: "2.4rem",

    "@media (max-width: 768px)": {
      fontSize: "1.6rem",
      marginTop: "3.6rem",
    },
  }),
  desktopOnly: css({
    display: "block",

    "@media (max-width: 768px)": {
      display: "none",
    },
  }),
  mobileOnly: css({
    display: "none",

    "@media (max-width: 768px)": {
      display: "block",
    },
  }),
  eventIntro: css({
    fontSize: "2.8rem",
    fontWeight: 600,
    textAlign: "center",
    marginBottom: "9.4rem",

    "@media (max-width: 768px)": {
      fontSize: "1.6rem",
      marginBottom: "3.6rem",
      whiteSpace: "pre-line",
    },
  }),
  imageContainer: css({
    maxWidth: "121.6rem",

    width: "calc(100% - 6.4rem)",
    borderRadius: "2.4rem",
    overflow: "hidden",

    "@media (max-width: 768px)": {
      marginBottom: "3.6rem",
      width: "calc(100% - 4rem)",
      borderRadius: "0.8rem",
    },
  }),
};
