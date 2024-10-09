import { css } from "@styled-system/css";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  size?: "small" | "medium";
}

const Time = ({ children, size = "medium" }: Props) => {
  return <div className={styles.time(size)}>{children}</div>;
};

export default Time;

const styles = {
  time: (size: "small" | "medium") =>
    css({
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: size === "small" ? "6.1rem" : "8.9rem",
      width: "22.2rem",
      borderRadius: "1.2rem",
      borderWidth: "0.2rem",
      borderColor: "summer",
      fontSize: "2.8rem",
      fontWeight: 600,
      color: "summer",
      textAlign: "center",
      marginBottom: "2rem",

      "@media (max-width: 768px)": {
        width: "11.4rem",
        height: size === "small" ? "3rem" : "4.6rem",
        fontSize: "1.2rem",
        borderRadius: "0.8rem",
        borderWidth: "0.1rem",
        marginBottom: "0.8rem",
      },
    }),
};
