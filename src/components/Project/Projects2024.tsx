import { css } from "@styled-system/css";
import Card from "./Card";
import visionDeskImage from "@/assets/images/hackathon/2024/visionDesk.png";
import toimerImage from "@/assets/images/hackathon/2024/toimer.png";
import emotionalystImage from "@/assets/images/hackathon/2024/emotionalyst.png";
import ttogiokImage from "@/assets/images/hackathon/2024/ttogiok.png";
import oneLineDiaryImage from "@/assets/images/hackathon/2024/oneLineDiary.png";
import saveUsImage from "@/assets/images/hackathon/2024/saveUs.png";
import roadKillImage from "@/assets/images/hackathon/2024/roadKill.png";
import tripLoggerImage from "@/assets/images/hackathon/2024/tripLogger.png";
import meokcipyImage from "@/assets/images/hackathon/2024/meokcipy.png";

const Projects2024 = () => {
  return (
    <div className={styles.cardContainer}>
      <Card href="https://github.com/letusGo-Hack/Team_6_HomP_XR_Mini">
        <Card.Image src={visionDeskImage} alt="프로젝트 vision desk" />
        <Card.Year>2024</Card.Year>
        <Card.Title>Vision Desk</Card.Title>
        <Card.Description>SharePlay를 이용한 MBTI 공유 지갑</Card.Description>
      </Card>
      <Card href="https://github.com/letusGo-Hack/Team_5_Tomato">
        <Card.Image src={toimerImage} alt="프로젝트 토이머" />
        <Card.Year>2024</Card.Year>
        <Card.Title>토이머</Card.Title>
        <Card.Description>
          Live Activity 기능을 활용하여 도보 운동과 러닝을 적극 장려하는 애플리케이션
        </Card.Description>
      </Card>
      <Card href="https://github.com/letusGo-Hack/Team_7_Emotionalyst">
        <Card.Image src={emotionalystImage} alt="프로젝트 emotionalyst" />
        <Card.Year>2024</Card.Year>
        <Card.Title>Emotionalyst</Card.Title>
        <Card.Description>
          RealityKit을 활용하여 모든 사물을 지도에 기록하는 서비스
        </Card.Description>
      </Card>
      <Card href="https://github.com/letusGo-Hack/Team_9_TToGiO">
        <Card.Image src={ttogiokImage} alt="프로젝트 또기옥" />
        <Card.Year>2023</Card.Year>
        <Card.Title>또기옥</Card.Title>
        <Card.Description>
          SharePlay와 SwiftData를 활용하여 근처에 있는 친구와 게임을 즐기는 서비스
        </Card.Description>
      </Card>

      <Card href="https://github.com/letusGo-Hack/Team_1_Banana">
        <Card.Image src={oneLineDiaryImage} alt="프로젝트 한 줄 일기" />
        <Card.Year>2024</Card.Year>
        <Card.Title>한 줄 일기</Card.Title>
        <Card.Description>
          ActivityKit, WidgetKit을 사용하여 Widget 으로 지하철을 내려야 할 시점을 알려주는 서비스
        </Card.Description>
      </Card>
      <Card href="https://github.com/letusGo-Hack/Team_2_SaveUs">
        <Card.Image src={saveUsImage} alt="프로젝트 save us" />
        <Card.Year>2024</Card.Year>
        <Card.Title>Save us</Card.Title>
        <Card.Description>
          여러 사람과 같이 유쾌 하게 ~ 퀴즈. SwiftData, SFSymbol Animation를 활용하여 여러 사람과
          같이 퀴즈를 푸는 애플리케이션
        </Card.Description>
      </Card>
      <Card href="https://github.com/letusGo-Hack/Team_3_Roadkill">
        <Card.Image src={roadKillImage} alt="프로젝트 로드킬" />
        <Card.Year>2024</Card.Year>
        <Card.Title>로드킬</Card.Title>
        <Card.Description>위젯과 Live Activity 활용한 라면 타이머 애플리케이션</Card.Description>
      </Card>

      <Card href="https://github.com/letusGo-Hack/Team_4_TripLogger">
        <Card.Image src={tripLoggerImage} alt="프로젝트 trip logger" />
        <Card.Year>2024</Card.Year>
        <Card.Title>Trip Logger</Card.Title>
        <Card.Description>
          지우가 되어 몬스터볼을 모아보자! ARKit, RealityKit을 활용하여 사물을 스캔하고 띄워주는
          서비스
        </Card.Description>
      </Card>
      <Card href="https://github.com/letusGo-Hack/Team_8_Meok-Kkae-Bi">
        <Card.Image src={meokcipyImage} alt="프로젝트 먹시피" />
        <Card.Year>2023</Card.Year>
        <Card.Title>먹시피</Card.Title>
        <Card.Description>
          페이스 타임을 연결하고 SharePlay를 통해 그림을 그려 맞추는 게임
        </Card.Description>
      </Card>
    </div>
  );
};

export default Projects2024;

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
