import { css } from "@styled-system/css";
import CommitteeCard from "./CommitteeCard";
import Slider from "./Slider";

const Committess = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>committees</div>
      <Slider pauseOnHover className={styles.firstRowCommittee}>
        <CommitteeCard />
      </Slider>
      <Slider pauseOnHover reverse>
        <CommitteeCard />
      </Slider>
    </div>
  );
};

export default Committess;

const styles = {
  container: css({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflow: "hidden",
    paddingTop: "24rem",

    "@media (max-width: 768px)": {
      paddingTop: "10rem",
    },
  }),
  title: css({
    textTransform: "uppercase",
    fontSize: "5.6rem",
    color: "primary.200",
    fontWeight: 700,
    marginBottom: "6.4rem",

    "@media (max-width: 768px)": {
      fontSize: "3.2rem",
      fontWeight: 800,
      marginBottom: "3.6rem",
    },
  }),
  firstRowCommittee: css({
    marginBottom: "4rem",

    "@media (max-width: 768px)": {
      marginBottom: "0.8rem",
    },
  }),
};
