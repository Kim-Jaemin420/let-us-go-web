import { css } from "@styled-system/css";
import BlueStarSvg from "@/assets/svgs/blue-star.svg?react";

interface Props {
  nickname: string;
  imageUrl: string;
  comment: string;
}

const SpeakerCard = ({ nickname, imageUrl, comment }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <img src={imageUrl} alt={nickname} className={styles.image} />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.nicknameContainer}>
          <BlueStarSvg className={styles.icon} />
          <span className={styles.nickname}>{nickname}</span>
          <span className={styles.tag}>speaker</span>
        </div>
        <span className={styles.mobileTag}>speaker</span>
        <div className={styles.comment}>{comment}</div>
      </div>
    </div>
  );
};

export default SpeakerCard;

const styles = {
  container: css({
    width: "100%",
  }),
  imageContainer: css({
    width: "100%",
    height: "0",
    paddingTop: "100%",
    borderRadius: "0.8rem",
    overflow: "hidden",
    marginBottom: "1.2rem",
    position: "relative",

    "@media (max-width: 768px)": {
      borderRadius: "0.4rem",
      marginBottom: "0.4rem",
      minWidth: "15rem",
    },
  }),
  image: css({
    objectFit: "cover",
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
  }),
  contentContainer: css({
    display: "flex",
    flexDirection: "column",
    backgroundColor: "neutral.200",
    borderRadius: "0.8rem",
    padding: "2rem",
    width: "100%",
    height: "25.6rem",

    "@media (max-width: 768px)": {
      minWidth: "15rem",
      maxHeight: "16.8rem",
      width: "100%",
      padding: "1.2rem",
      borderRadius: "0.4rem",
    },
  }),
  nicknameContainer: css({
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  }),
  nickname: css({
    fontSize: "3.2rem",
    fontWeight: 700,
    marginLeft: "0.8rem",
    marginRight: "1.2rem",

    "@media (max-width: 768px)": {
      fontSize: "1.6rem",
    },
  }),
  tag: css({
    textTransform: "uppercase",
    fontWeight: 700,
    backgroundColor: "primary.200",
    borderRadius: "0.4rem",
    color: "white",
    paddingX: "0.8rem",

    "@media (max-width: 768px)": {
      display: "none",
    },
  }),
  mobileTag: css({
    display: "none",
    "@media (max-width: 768px)": {
      display: "inline-block",
      width: "fit-content",
      fontSize: "1rem",
      textTransform: "uppercase",
      fontWeight: 700,
      backgroundColor: "primary.200",
      borderRadius: "0.4rem",
      color: "white",
      paddingX: "0.8rem",
      marginTop: "0.4rem",
      marginBottom: "0.7rem",
    },
  }),
  description: css({
    color: "neutral.500",

    "@media (max-width: 768px)": {
      fontSize: "1.2rem",
    },
  }),
  comment: css({
    display: "flex",
    alignItems: "center",
    flex: 1,
    fontSize: "2.4rem",

    "@media (max-width: 768px)": {
      fontSize: "1.2rem",
    },
  }),
  contactContainer: css({
    display: "flex",
    gap: "1.2rem",
    cursor: "pointer",
  }),
  icon: css({
    width: "3.2rem",
    height: "3.2rem",

    "@media (max-width: 768px)": {
      width: "2rem",
      height: "2rem",
    },
  }),
};
