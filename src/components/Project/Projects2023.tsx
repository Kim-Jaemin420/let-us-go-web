import { css } from "@styled-system/css";
import Card from "./Card";
import rutImage from "@/assets/images/hackathon/2023/rut.png";
import runningRpgImage from "@/assets/images/hackathon/2023/runningRpg.png";
import collectorsImage from "@/assets/images/hackathon/2023/collectors.png";
import subtImage from "@/assets/images/hackathon/2023/subt.png";
import dipQuizImage from "@/assets/images/hackathon/2023/dipQuiz.png";
import reliciousImage from "@/assets/images/hackathon/2023/relicious.png";
import brainBurstImage from "@/assets/images/hackathon/2023/brainBurst.png";
import objectGoImage from "@/assets/images/hackathon/2023/objectGo.png";
import sukGiSiDaeImage from "@/assets/images/hackathon/2023/sukGiSiDae.png";
import ggPoImage from "@/assets/images/hackathon/2023/ggPo.png";

const Projects2023 = () => {
  return (
    <div className={styles.cardContainer}>
        <Card href="https://github.com/letusGo-Hack/RUT">
          <Card.Image src={rutImage} alt="프로젝트 RUT" />
          <Card.Year>2023</Card.Year>
          <Card.Title>RUT</Card.Title>
          <Card.Description>SharePlay를 이용한 MBTI 공유 지갑</Card.Description>
        </Card>
        <Card href="https://github.com/letusGo-Hack/RunningRPG">
          <Card.Image src={runningRpgImage} alt="프로젝트 running rpg" />
          <Card.Year>2023</Card.Year>
          <Card.Title>Running RPG</Card.Title>
          <Card.Description>
            Live Activity 기능을 활용하여 도보 운동과 러닝을 적극 장려하는 애플리케이션
          </Card.Description>
        </Card>
        <Card href="https://github.com/letusGo-Hack/Pocket-Object">
          <Card.Image src={collectorsImage} alt="프로젝트 collectors" />
          <Card.Year>2023</Card.Year>
          <Card.Title>Collectors</Card.Title>
          <Card.Description>
            RealityKit을 활용하여 모든 사물을 지도에 기록하는 서비스
          </Card.Description>
        </Card>

        <Card href="https://github.com/letusGo-Hack/Subt">
          <Card.Image src={subtImage} alt="프로젝트 subt" />
          <Card.Year>2023</Card.Year>
          <Card.Title>Subt</Card.Title>
          <Card.Description>
            ActivityKit, WidgetKit을 사용하여 Widget 으로 지하철을 내려야 할 시점을 알려주는 서비스
          </Card.Description>
        </Card>
        <Card href="https://github.com/letusGo-Hack/DipQuiz">
          <Card.Image src={dipQuizImage} alt="프로젝트 dip quiz" />
          <Card.Year>2023</Card.Year>
          <Card.Title>Dip Quiz</Card.Title>
          <Card.Description>
            여러 사람과 같이 유쾌 하게 ~ 퀴즈. SwiftData, SFSymbol Animation를 활용하여 여러 사람과
            같이 퀴즈를 푸는 애플리케이션
          </Card.Description>
        </Card>
        <Card href="https://github.com/letusGo-Hack/Relicious">
          <Card.Image src={reliciousImage} alt="프로젝트 relicious" />
          <Card.Year>2023</Card.Year>
          <Card.Title>Relicious</Card.Title>
          <Card.Description>위젯과 Live Activity 활용한 라면 타이머 애플리케이션</Card.Description>
        </Card>

        <Card href="https://github.com/letusGo-Hack/brain-burst">
          <Card.Image src={brainBurstImage} alt="프로젝트 brain burst" />
          <Card.Year>2023</Card.Year>
          <Card.Title>BrainBurst</Card.Title>
          <Card.Description>
            SharePlay와 SwiftData를 활용하여 근처에 있는 친구와 게임을 즐기는 서비스
          </Card.Description>
        </Card>
        <Card href="https://github.com/letusGo-Hack/Seven">
          <Card.Image src={objectGoImage} alt="프로젝트 object go" />
          <Card.Year>2023</Card.Year>
          <Card.Title>Object Go!</Card.Title>
          <Card.Description>
            지우가 되어 몬스터볼을 모아보자! ARKit, RealityKit을 활용하여 사물을 스캔하고 띄워주는
            서비스
          </Card.Description>
        </Card>
        <Card href="https://github.com/letusGo-Hack/CatchMind">
          <Card.Image src={sukGiSiDaeImage} alt="프로젝트 sukgisidae" />
          <Card.Year>2023</Card.Year>
          <Card.Title>SukGiSiDae</Card.Title>
          <Card.Description>
            페이스 타임을 연결하고 SharePlay를 통해 그림을 그려 맞추는 게임
          </Card.Description>
        </Card>

        <Card href="https://github.com/letusGo-Hack/GG.PO">
          <Card.Image src={ggPoImage} alt="프로젝트 GG.PO" />
          <Card.Year>2023</Card.Year>
          <Card.Title>GG.PO</Card.Title>
          <Card.Description>
            실시간 티어 대결, 최근 승률 등 OP.GG를 사용하면서 있었으면 했던 위젯들을 제작해 본
            서비스
          </Card.Description>
        </Card>
      </div>
  );
};

export default Projects2023;

const styles = {
  container: css({
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "3.2rem",
    width: "calc(100vw - 6.4rem)",
    maxWidth: "121.6rem",

    "@media (max-width: 1214px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },

    "@media (max-width: 768px)": {
      gridTemplateColumns: "repeat(1, 1fr)",
      width: "calc(100vw - 4rem)",
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
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gridGap: "3.2rem",
    width: "calc(100vw - 6.4rem)",
    maxWidth: "121.6rem",

    "@media (max-width: 1214px)": {
      gridTemplateColumns: "repeat(2, 1fr)",
    },

    "@media (max-width: 768px)": {
      gridTemplateColumns: "repeat(1, 1fr)",
      width: "calc(100vw - 4rem)",
    },
  }),
};
