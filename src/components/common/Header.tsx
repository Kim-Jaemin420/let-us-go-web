import { css } from "@styled-system/css";

const Header = () => {
  return (
    <header>
      <ul>
        <li className={styles.logo}>
          <h1>let us Go!</h1>
        </li>
      </ul>
    </header>
  );
};

export default Header;

const styles = {
  logo: css({
    fontFamily: "Unbounded",
  }),
};
