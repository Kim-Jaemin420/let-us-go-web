import { css } from "@styled-system/css";
import { flex } from "@styled-system/patterns";
import Button from "./Button";

interface Props {
  onScrollToSection: (section: "about" | "program" | "location" | "contact") => void;
}

const Header = ({ onScrollToSection }: Props) => {
  return (
    <header className={styles.container}>
      <nav className={styles.nav}>
        <ul className={flex({ direction: "row", gap: "4.8rem" })}>
          <li onClick={() => onScrollToSection("about")}>about</li>
          <li onClick={() => onScrollToSection("program")}>program</li>
          <li onClick={() => onScrollToSection("location")}>location</li>
          <li onClick={() => onScrollToSection("contact")}>contact</li>
        </ul>
        <a href="https://smartstore.naver.com/let-us-go/products/9974040628" target="_blank">
          <Button className={styles.button} backgroundColor="primary.200" size="medium">
            ✍️ 선착순 등록하기
          </Button>
        </a>
      </nav>
    </header>
  );
};

export default Header;

const styles = {
  container: css({
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 101,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingX: "min(50px, 5%)",
    width: "100%",
    height: "8rem",
    textTransform: "uppercase",
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    fontSize: "2.4rem",

    "@media (max-width: 884px)": {
      display: "none",
    },

    "@media (max-width: 768px)": {
      display: "none",
    },
  }),
  nav: css({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "126rem",
    width: "100%",
    cursor: "pointer",
  }),
  button: css({
    fontSize: "1.6rem",
    fontWeight: 800,
    textTransform: "uppercase",
    minWidth: "17.6rem",
    zIndex: 101,

    "@media (max-width: 884px)": {
      fontSize: "2rem",
    },
  }),
};
