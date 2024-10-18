import classNames from "classnames";
import { css } from "@styled-system/css";
import Signature1Pc from "@/assets/svgs/signature1-pc.svg?react";
import Signature1Mobile from "@/assets/svgs/signature1-mobile.svg?react";
import groupPhotoImage from "@/assets/images/group-photo.png";

const Invitation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.signaturePc}>
        <Signature1Pc />
      </div>
      <div className={styles.signatureMobile}>
        <Signature1Mobile />
      </div>
      <div className={styles.title}>Invitation</div>
      <div className={classNames(styles.description, styles.pcOnly)}>
        길었던 여름이 지나고 차가운 겨울 공기가 느껴지는 요즘, {"\n"}
        함께 모여 따뜻한 저녁을 보내는건 어떨까요? ❄️{"\n"}
        이번 겨울에는 한 해의 피로를 풀고, 힐링의 시간을 가져보려 합니다. {"\n"}
        또한, 바자회와 개인 앱을 홍보할 기회도 있으니 함께 따뜻한 대화를 나누며 {"\n"}한 해를
        마무리할 완벽한 시간이 될 거에요.
        {"\n"}
      </div>
      <div className={classNames(styles.description, styles.mobileOnly)}>
        길었던 여름이 지나고 차가운 겨울 공기가 느껴지는 요즘, {"\n"}
        함께 모여 따뜻한 저녁을 보내는건 어떨까요? ❄️{"\n"}
        이번 겨울에는 한 해의 피로를 풀고, {"\n"}
        힐링의 시간을 가져보려 합니다. {"\n"}
        또한, 바자회와 개인 앱을 홍보할 기회도 있으니 {"\n"}함께 따뜻한 대화를 나누며 {"\n"}한 해를
        마무리할 완벽한 시간이 될 거에요.
        {"\n"}
      </div>
      <div className={styles.eventIntro}>11월 29일 금요일, {"\n"}잊지 못할 저녁 함께 하실래요?</div>
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
  signaturePc: css({
    display: "block",

    "@media (max-width: 768px)": {
      display: "none",
    },
  }),
  signatureMobile: css({
    display: "none",

    "@media (max-width: 768px)": {
      display: "block",
    },
  }),
  title: css({
    fontSize: "7.2rem",
    color: "winter",
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
  pcOnly: css({
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
