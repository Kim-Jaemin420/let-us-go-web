import { css } from "@styled-system/css";
import Slider from "./common/Slider";

const Banner = () => {
  const createMessage = () => (
    <>
      <span> 🧑‍💻 </span>
      <span className={styles.gradientText}>Welcome</span>
      <span> 👋 </span>
      <span className={styles.gradientText}>let us: Go!</span>
      <span> </span>
    </>
  );

  const repeatedMessage = Array(5)
    .fill(null)
    .map((_message, index) => <span key={index}>{createMessage()}</span>);

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
    fontFamily: "Unbounded",
    marginBottom: "28rem",
    borderY: "0.1rem solid",
    borderColor: "main",
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
  gradientText: css({
    color: "main",
  }),
};
