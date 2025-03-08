import { css } from "@styled-system/css";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Time = ({ children }: Props) => {
  return <div className={styles.time}>{children}</div>;
};

export default Time;

const styles = {
  time: css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "22.2rem",
    height: "7.3rem",

    borderRadius: "1.2rem",
    borderWidth: "0.2rem",
    borderColor: "autumn",
    fontSize: "2.8rem",
    fontWeight: 600,
    color: "autumn",
    textAlign: "center",
    marginBottom: "2rem",

    "@media (max-width: 768px)": {
      width: "11.4rem",
      height: "3rem",
      fontSize: "1.2rem",
      borderRadius: "0.8rem",
      borderWidth: "0.1rem",
      marginBottom: "0.8rem",
    },
  }),
};
