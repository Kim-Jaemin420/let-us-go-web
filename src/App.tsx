import { css } from "@styled-system/css";
import Hackathon from "./components/Hackathon";

const App = () => {
  return (
    <div className={styles.container}>
      <Hackathon />
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
