import { css } from "@styled-system/css";
import Slider from "../common/Slider";

const Banner = () => {
  const message = " 🧑‍💻 Welcome 👋 let us: Go! ";
  const repeatedMessage = Array(5).fill(message).join("");

  return (
    <Slider className={styles.slider}>
      <div>
        <div className={styles.message}>{repeatedMessage}</div>
      </div>
    </Slider>
  );
};

export default Banner;

const styles = {
  slider: css({
    display: "flex",
    alignItems: "center",
    height: "11.3rem",
    overflow: "hidden",
    color: "winter",
    fontFamily: "Unbounded",
    marginBottom: "28rem",

    borderY: "0.1rem solid",
    whiteSpace: "pre",
    marginX: "1rem",
    _last: {
      margin: 0,
    },

    "@media (max-width: 768px)": {
      height: "3.5rem",
      fontSize: "1.6rem",
      marginBottom: "7.8rem",
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
