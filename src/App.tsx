import { css } from "@styled-system/css";
import Network from "./components/Network";

const App = () => {
  return (
    <div className={styles.container}>
      <Network />
    </div>
  );
};

export default App;

const styles = {
  container: css({
    backgroundColor: "background.500",
    height: "100vh",
  }),
};
