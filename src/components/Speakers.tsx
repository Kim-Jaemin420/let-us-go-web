import { css } from "@styled-system/css";
import SpeakerCard from "./SpeakerCard";
import jercyImage from "@/assets/images/speakers/jercy.png";
import bearImage from "@/assets/images/speakers/bear.jpeg";
import ethanImage from "@/assets/images/speakers/ethan.jpeg";
import summercatImage from "@/assets/images/speakers/summercat.jpeg";
import eunpyoImage from "@/assets/images/speakers/eunpyo.jpeg";
import wadeImage from "@/assets/images/speakers/wade.jpeg";
import terryImage from "@/assets/images/speakers/terry.jpeg";
import daesungImage from "@/assets/images/speakers/daesung.jpeg";

const speakers = [
  {
    nickname: "재르시",
    comment: "모먼티카 많은 관심 부탁드려요",
    imageUrl: jercyImage,
  },
  {
    nickname: "곰튀김",
    comment: "사실주의 개발자",
    imageUrl: bearImage,
  },
  {
    nickname: "Ethan",
    comment: "경력 8개월차 응애 개발자입니다.",
    imageUrl: ethanImage,
  },
  {
    nickname: "summercat",
    comment: "수습이 아직 안 끝난 신입 개발자(진)",
    imageUrl: summercatImage,
  },
  {
    nickname: "은표",
    comment: "1일 1코테",
    imageUrl: eunpyoImage,
  },
  {
    nickname: "Wade",
    comment: "아이폰 개발자입니다",
    imageUrl: wadeImage,
  },
  {
    nickname: "Terry",
    comment: "iOS, i는 소문자로 적어주세요",
    imageUrl: terryImage,
  },
  {
    nickname: "아실",
    comment: "",
    imageUrl: daesungImage,
  },
];

const Speakers = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Speakers</div>
      <div className={styles.speakerContainer}>
        {speakers.map(({ nickname, comment, imageUrl }) => (
          <SpeakerCard nickname={nickname} comment={comment} imageUrl={imageUrl} />
        ))}
      </div>
    </div>
  );
};

export default Speakers;

const styles = {
  container: css({
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    paddingTop: "24rem",
    marginBottom: "24rem",
    width: "calc(100% - 6.4rem)",
    maxWidth: "121.4rem",
    marginX: "auto",

    "@media (max-width: 768px)": {
      width: "calc(100% - 4rem)",
      paddingTop: "10rem",
      marginBottom: "10rem",
    },
  }),
  title: css({
    textTransform: "uppercase",
    fontSize: "5.6rem",
    color: "primary.200",
    fontWeight: 700,
    marginBottom: "6.4rem",
    textAlign: "center",

    "@media (max-width: 768px)": {
      fontSize: "3.2rem",
      fontWeight: 800,
      marginBottom: "3.6rem",
    },
  }),
  speakerContainer: css({
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "3.2rem",
    width: "100%",

    "@media (max-width: 884px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },
    "@media (max-width: 768px)": {
      gridGap: "2rem",
      gridTemplateColumns: "repeat(2, 1fr)",
    },
  }),
};
