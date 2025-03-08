import { css } from "@styled-system/css";

interface Props {
  image: string;
  role: "speaker" | "supporter";
  nickname: string;
  comment: string;
}

const ProfileCard = ({ image, role, nickname, comment }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.profileImage}>
        <img src={image} />
      </div>
      <div className={styles.role(role)}>{role}</div>
      <div className={styles.nickname}>{nickname}</div>
      <div className={styles.comment}>{comment}</div>
    </div>
  );
};

export default ProfileCard;

const styles = {
  container: css({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "0.8rem",
    backgroundColor: "background.300",
    paddingY: "6rem",

    "@media (max-width: 768px)": {
      width: "100%",
      paddingY: "3rem",
      borderRadius: "0.4rem",
    },
  }),
  profileImage: css({
    width: "20rem",
    height: "20rem",
    borderRadius: "50rem",
    overflow: "hidden",

    "@media (max-width: 768px)": {
      width: "15rem",
      height: "15rem",
    },
  }),
  role: (role: "speaker" | "supporter") =>
    css({
      color: role === "speaker" ? "autumnSolid" : "autumn",
      textTransform: "uppercase",
      fontWeight: "bold",
      fontSize: "2rem",
      marginTop: "4.4rem",
      marginBottom: "0.4rem",

      "@media (max-width: 768px)": {
        marginTop: "2.2rem",
        marginBottom: "0.2rem",
        fontSize: "1rem",
      },
    }),
  nickname: css({
    fontWeight: "bold",
    fontSize: "3.2rem",
    marginBottom: "2.4rem",

    "@media (max-width: 768px)": {
      fontSize: "1.6rem",
      marginBottom: "1.2rem",
    },
  }),
  comment: css({
    fontSize: "2.4rem",
    textAlign: "center",
    maxWidth: "calc(100% - 0.4rem)",

    "@media (max-width: 768px)": {
      fontSize: "1.2rem",
    },
  }),
};
