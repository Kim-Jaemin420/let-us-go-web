import { css } from "@styled-system/css";
import heyDealerImage from "@/assets/images/heyDealer.png";
import inflearnImage from "@/assets/images/inflearn.png";
import hanbitImage from "@/assets/images/hanbit.png";
import kodecoImage from "@/assets/images/kodeco.png";
import konkukImage from "@/assets/images/konkuk.png";
import durumisImage from "@/assets/images/durumis.png";

const Sponsers = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>sponsors</div>
      <ul className={styles.sponsorList}>
        <li>
          <div className={styles.grade}>Platinum</div>

          <div className={styles.sponsorImageContainer}>
            <img className={styles.sponsorImage} src={heyDealerImage} alt="헤이딜러" />
          </div>
        </li>
        <li>
          <div className={styles.grade}>Silver</div>
          <div className={styles.sponsorImageContainer}>
            <img className={styles.sponsorImage} src={inflearnImage} alt="인프런" />
          </div>
        </li>
        <li>
          <div className={styles.grade}>Bronze</div>
          <div className={styles.sponsorImageContainer}>
            <img className={styles.sponsorImage} src={hanbitImage} alt="한빛미디어" />
            <img className={styles.sponsorImage} src={kodecoImage} alt="코데코" />
            <img className={styles.sponsorImage} src={durumisImage} alt="꿈많은청년들" />
          </div>
        </li>
        <li>
          <div className={styles.grade}>장소 제공</div>
          <div className={styles.sponsorImageContainer}>
            <img className={styles.sponsorImage} src={konkukImage} alt="건국대학교" />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Sponsers;

const styles = {
  container: css({
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    marginTop: "24rem",

    "@media (max-width: 768px)": {
      marginTop: "10rem",
    },
  }),
  title: css({
    textTransform: "uppercase",
    fontSize: "5.6rem",
    color: "primary.200",
    fontWeight: 700,
    marginBottom: "6.4rem",

    "@media (max-width: 768px)": {
      fontWeight: 800,
      fontSize: "3.2rem",
      marginBottom: "3.6rem",
    },
  }),
  sponsorList: css({
    display: "flex",
    flexFlow: "column wrap",
    gap: "12rem",
    justifyContent: "center",
    alignItems: "center",

    "@media (max-width: 768px)": {
      gap: "4.4rem",
    },
  }),
  sponsorItem: css({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  }),
  grade: css({
    fontSize: "3.6rem",
    fontWeight: 700,
    textAlign: "center",
    marginBottom: "4.4rem",

    "@media (max-width: 768px)": {
      fontSize: "2rem",
      marginBottom: "1.6rem",
    },
  }),
  sponsorImageContainer: css({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "5.2rem",
    width: "auto",
    height: "6rem",
    _last: {
      marginBottom: "12rem",
    },

    "@media (max-width: 768px)": {
      height: "2.3rem",
      gap: "2rem",

      _last: {
        marginBottom: "4.4rem",
      },
    },
  }),
  sponsorImage: css({
    height: "100%",
    objectFit: "contain",
  }),
};
