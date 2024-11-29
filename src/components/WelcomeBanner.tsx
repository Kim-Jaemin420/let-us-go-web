import { css } from "@styled-system/css";
import Slider from "./Slider";

const WelcomeBanner = () => {
  const message = " 💥 WELCOME 👋 SPRING CONFERENCE ";
  const repeatedMessage = Array(3).fill(message).join("");

  return (
    <Slider className={styles.slider}>
      <div>
        <div className={styles.message}>{repeatedMessage}</div>
      </div>
    </Slider>
  );
};

export default WelcomeBanner;

const styles = {
  slider: css({
    display: "flex",
    alignItems: "center",
    height: "11.3rem",
    color: "primary.200",
    overflow: "hidden",

    borderY: "0.1rem solid",
    borderColor: "primary.200",
    whiteSpace: "pre",
    marginX: "1rem",
    marginTop: "30rem",
    _last: {
      margin: 0,
    },

    "@media (max-width: 768px)": {
      height: "3.5rem",
      fontSize: "1.6rem",
    },
  }),
  message: css({
    display: "inline-block",
    fontSize: "5.4rem",
    fontWeight: 700,

    "@media (max-width: 768px)": {
      fontSize: "1.6rem",
    },
  }),
};
