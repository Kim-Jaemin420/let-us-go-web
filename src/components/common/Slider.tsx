import { css } from "@styled-system/css";
import classNames from "classnames";

interface Props {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
}

const Slider = ({ children, className, reverse = false }: Props) => {
  return (
    <div className={classNames(styles.slider, className)}>
      <div className={styles.slidesContainer}>
        <div className={styles.slide}>
          <div
            className={classNames({
              [styles.slideRightLoop1]: !reverse,
              [styles.slideLeftLoop1]: reverse,
            })}
          >
            {children}
          </div>
          <div
            className={classNames({
              [styles.slideRightLoop2]: !reverse,
              [styles.slideLeftLoop2]: reverse,
            })}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  slider: css({
    overflow: "hidden",
    maxWidth: "192rem",
    marginX: "auto",
    "@media (max-width: 768px)": {
      maxWidth: "76.8rem",
    },
  }),
  slidesContainer: css({
    display: "flex",
    width: "200%",
    "@media screen and (max-width: 768px)": {
      width: "100%",
    },
  }),
  slide: css({
    display: "flex",
    width: "100%",
  }),
  slideRightLoop1: css({
    animation: "50s linear infinite slideRightLoop1",
  }),
  slideRightLoop2: css({
    animation: "50s linear infinite slideRightLoop2",
  }),
  slideLeftLoop1: css({
    animation: "50s linear infinite slideLeftLoop1",
  }),
  slideLeftLoop2: css({
    animation: "50s linear infinite slideLeftLoop2",
  }),
};

export default Slider;
