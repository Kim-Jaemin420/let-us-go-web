import { css } from "@styled-system/css";
import Slider from "./common/Slider";

const LastEvent = () => {
  const message =
    " 🧑‍💻 지난 행사 보기 → 🧑‍💻 지난 행사 보기 → 🧑‍💻 지난 행사 보기 → 🧑‍💻 지난 행사 보기 → ";
  const repeatedMessage = Array(3).fill(message).join("");

  return (
    <Slider className={styles.slider}>
      <a href="https://letusgo2024-summer.vercel.app/">
        <div className={styles.message}>{repeatedMessage}</div>
      </a>
    </Slider>
  );
};

export default LastEvent;

const styles = {
  slider: css({
    display: "flex",
    alignItems: "center",
    height: "11.3rem",
    overflow: "hidden",
    backgroundColor: "autumnSolid",
    fontFamily: "Unbounded",

    whiteSpace: "pre",
    marginX: "1rem",
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
    fontWeight: 800,

    "@media (max-width: 768px)": {
      fontSize: "1.6rem",
    },
  }),
};
