import { css } from "@styled-system/css";

const App = () => {
  return <div className={styles.container}></div>;
};

export default App;

const styles = {
  container: css({
    backgroundColor: "background.500",
    height: "100vh",
  }),
};
