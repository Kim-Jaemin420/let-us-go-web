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
              [styles.rightToLeftChildren1]: !reverse,
              [styles.infinite1]: reverse,
            })}
          >
            {children}
          </div>
          <div
            className={classNames({
              [styles.rightToLeftChildren2]: !reverse,
              [styles.infinite2]: reverse,
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
  rightToLeftChildren1: css({
    animation: "50s linear infinite leftToRightInfiniteSlide1",
  }),
  rightToLeftChildren2: css({
    animation: "50s linear infinite leftToRightInfiniteSlide2",
  }),
  infinite1: css({
    animation: "50s linear infinite infiniteAnimation1",
  }),
  infinite2: css({
    animation: "50s linear infinite infiniteAnimation2",
  }),
};

export default Slider;
