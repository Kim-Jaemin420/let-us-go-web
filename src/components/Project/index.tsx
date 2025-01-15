import { forwardRef } from "react";
import Signature3Big from "@/assets/svgs/signature3-big.svg?react";
import Signature3Small from "@/assets/svgs/signature3-small.svg?react";
import { css } from "@styled-system/css";
import Projects2024 from "./Projects2024";
import Projects2023 from "./Projects2023";

const Project = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <div ref={ref} className={styles.container}>
      <div className={styles.bigSignature}>
        <Signature3Big />
      </div>
      <div className={styles.smallSignature}>
        <Signature3Small />
      </div>
      <div className={styles.title}>Projects</div>
      <div className={styles.cardContainer}>
        <Projects2024 />
        <Projects2023 />
      </div>
    </div>
  );
});

export default Project;

const styles = {
  container: css({
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "center",
    marginBottom: "28rem",
    width: "calc(100vw - 6.4rem)",

    "@media (max-width: 768px)": {
      width: "calc(100vw - 4rem)",
      marginBottom: "12rem",
    },
  }),
  bigSignature: css({
    display: "block",

    "@media (max-width: 768px)": {
      display: "none",
    },
  }),
  smallSignature: css({
    display: "none",

    "@media (max-width: 768px)": {
      display: "block",
    },
  }),
  title: css({
    fontSize: "7.2rem",
    color: "summer",
    fontFamily: "Unbounded",
    fontWeight: 700,
    marginBottom: "4.4rem",

    "@media (max-width: 768px)": {
      fontSize: "3.2rem",
      marginBottom: "3.6rem",
    },
  }),
  cardContainer: css({
    display: "flex",
    flexDirection: "column",
    gap: "3.2rem",
  }),
};
