import { css } from "@styled-system/css";
import { useState } from "react";
import Signature3Big from "@/assets/svgs/signature3-big.svg?react";
import Signature3Small from "@/assets/svgs/signature3-small.svg?react";
import jercyImage from "@/assets/images/SpeakersSupporters/jercy.png";

interface CrewMember {
  name: string;
  image: string;
  description: string;
}

interface Crews {
  [category: string]: CrewMember[];
}

const crews: Crews = {
  운영진: [
    { name: "김운영", image: jercyImage, description: "팀을 이끌고 있습니다." },
    { name: "이운영", image: jercyImage, description: "팀장을 도와 팀을 이끌고 있습니다." },
    {
      name: "정운영",
      image: jercyImage,
      description: "디지털보다 아날로그를 사랑하는 프로그래머입니다",
    },
  ],
  기획: [
    { name: "박기획", image: jercyImage, description: "행사를 기획하고 있습니다." },
    { name: "최기획", image: jercyImage, description: "콘텐츠를 기획하고 있습니다." },
    { name: "김기획", image: jercyImage, description: "돈 많은 백수가 꿈" },
    { name: "강기획", image: jercyImage, description: "불로소득 최고" },
  ],
  개발: [
    { name: "정개발", image: jercyImage, description: "웹사이트를 개발하고 있습니다." },
    { name: "강개발", image: jercyImage, description: "앱을 개발하고 있습니다." },
  ],
  디자인: [
    { name: "윤디자인", image: jercyImage, description: "UI/UX를 디자인하고 있습니다." },
    { name: "한디자인", image: jercyImage, description: "그래픽을 디자인하고 있습니다." },
  ],
};

const Crew = () => {
  const [activeTab, setActiveTab] = useState("운영진");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.container}>
      <div className={styles.bigSignature}>
        <Signature3Big />
      </div>
      <div className={styles.smallSignature}>
        <Signature3Small />
      </div>
      <div className={styles.title}>Crew</div>

      <div className={styles.tabContainer}>
        {Object.keys(crews).map((tab) => (
          <button
            key={tab}
            className={`${styles.tabButton} ${activeTab === tab ? styles.activeTab : ""}`}
            onClick={() => handleTabClick(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      <ul className={styles.crewContainer}>
        {crews[activeTab].map((crew: CrewMember, index) => (
          <li key={index} className={styles.crewCard}>
            <div className={styles.crewImage}>
              <img src={crew.image} />
            </div>
            <div className={styles.crewInfoContainer}>
              <div className={styles.crewName}>{crew.name}</div>
              <div className={styles.crewDescription}>{crew.description}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Crew;

const styles = {
  container: css({
    display: "flex",
    flexFlow: "column wrap",
    marginBottom: "28rem",
    maxWidth: "121.6rem",
    width: "100%",

    "@media (max-width: 768px)": {
      width: "calc(100vw - 4rem)",
      marginBottom: "12rem",
    },
  }),
  bigSignature: css({
    display: "block",
    alignSelf: "flex-start",

    "@media (max-width: 768px)": {
      display: "none",
    },
  }),
  smallSignature: css({
    display: "none",
    alignSelf: "flex-start",

    "@media (max-width: 768px)": {
      display: "block",
    },
  }),
  title: css({
    fontSize: "7.2rem",
    color: "main",
    fontFamily: "Unbounded",
    fontWeight: 700,
    marginBottom: "4.4rem",
    alignSelf: "flex-start",

    "@media (max-width: 768px)": {
      fontSize: "3.2rem",
      marginBottom: "3.2rem",
    },
  }),
  tabContainer: css({
    display: "flex",
    gap: "1.6rem",
    marginBottom: "5.6rem",
    width: "100%",

    "@media (max-width: 768px)": {
      flexWrap: "wrap",
      gap: "1rem",
      marginBottom: "2.8rem",
    },
  }),
  tabButton: css({
    padding: "2.1rem 4rem",
    fontSize: "3.2rem",
    fontWeight: "bold",
    borderRadius: "5rem",
    border: "0.1rem solid",
    borderColor: "#9EA6B2",
    color: "#9EA6B2",
    backgroundColor: "transparent",
    cursor: "pointer",

    "@media (max-width: 768px)": {
      fontSize: "1.6rem",
      padding: "0.8rem 1.6rem",
    },
  }),
  activeTab: css({
    backgroundColor: "white",
    color: "background.500",
  }),
  crewContainer: css({
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "3.2rem",

    "@media (max-width: 1024px)": {
      gridTemplateColumns: "1fr",
    },

    "@media (max-width: 768px)": {
      gridTemplateColumns: "1fr",
      gap: "2rem",
    },
  }),
  crewCard: css({
    display: "flex",
    flexFlow: "row nowrap",
    gap: "3.2rem",
    width: "100%",

    "@media (max-width: 768px)": {
      gap: "1rem",
    },
  }),
  crewImage: css({
    width: "17.6rem",
    height: "17.6rem",
    borderRadius: "20rem",
    overflow: "hidden",
    flexShrink: 0,

    "@media (max-width: 768px)": {
      width: "10rem",
      height: "10rem",
    },
  }),
  crewInfoContainer: css({
    display: "flex",
    flexDirection: "column",
    width: "100%",
    flex: "1",
  }),
  crewName: css({
    fontSize: "3.2rem",
    marginBottom: "2rem",

    "@media (max-width: 768px)": {
      fontSize: "1.8rem",
      marginBottom: "1rem",
    },
  }),
  crewDescription: css({
    display: "flex",
    alignItems: "center",
    minHeight: "12.8rem",
    backgroundColor: "background.300",
    fontSize: "2.8rem",
    color: "white",
    borderRadius: "1.2rem",
    borderTopLeftRadius: 0,
    paddingX: "2.4rem",
    wordBreak: "break-word",

    "@media (max-width: 768px)": {
      fontSize: "1.6rem",
      minHeight: "6rem",
      flex: 1,
    },
  }),
};
