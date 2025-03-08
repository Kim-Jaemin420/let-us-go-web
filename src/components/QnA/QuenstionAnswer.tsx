import { ReactNode, useEffect, useRef, useState } from "react";
import { css } from "@styled-system/css";
import ArrowDown32 from "@/assets/svgs/arrow-down32.svg";
import ArrowDown16 from "@/assets/svgs/arrow-down16.svg";
import ArrowUp32 from "@/assets/svgs/arrow-up32.svg";
import ArrowUp16 from "@/assets/svgs/arrow-up16.svg";

interface Props {
  question: ReactNode;
  answer: ReactNode;
}

const QuestionAnswer = ({ question, answer }: Props) => {
  const [isAnswerOpen, setIsAnswerOpen] = useState(false);
  const answerRef = useRef<HTMLDivElement>(null);

  const toggleAnswer = () => {
    setIsAnswerOpen(!isAnswerOpen);
  };

  useEffect(() => {
    if (answerRef.current) {
      if (isAnswerOpen) {
        answerRef.current.style.maxHeight = `${answerRef.current.scrollHeight}px`;
      } else {
        answerRef.current.style.maxHeight = "0px";
      }
    }
  }, [isAnswerOpen]);

  return (
    <li className={styles.questionList}>
      <div className={styles.question(isAnswerOpen)} onClick={toggleAnswer}>
        <div>
          <span className={styles.questionQ(isAnswerOpen)}>Q</span>
          <span>{question}</span>
        </div>
        <div className={styles.bigIcon}>{isAnswerOpen ? <ArrowUp32 /> : <ArrowDown32 />}</div>
        <div className={styles.smallIcon}>{isAnswerOpen ? <ArrowUp16 /> : <ArrowDown16 />}</div>
      </div>
      <div ref={answerRef} className={styles.answerWrapper}>
        <div className={styles.answer}>{answer}</div>
      </div>
    </li>
  );
};

export default QuestionAnswer;

const styles = {
  questionList: css({
    listStyle: "none",
    marginBottom: "3.2rem",

    "@media (max-width: 768px)": {
      marginBottom: "1.2rem",
    },
  }),
  question: (isAnswerOpen: boolean) =>
    css({
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
      height: "9.1rem",
      fontSize: "3.6rem",
      fontWeight: isAnswerOpen ? "600" : "400",
      backgroundColor: isAnswerOpen ? "summer" : "background.300",
      color: isAnswerOpen ? "background.500" : "inherit",
      paddingX: "3.2rem",
      borderRadius: "1.2rem",
      cursor: "pointer",

      "@media (max-width: 768px)": {
        height: "4.1rem",
        fontSize: "1.4rem",
        paddingX: "1.6rem",
      },
    }),
  questionQ: (isAnswerOpen: boolean) =>
    css({
      color: isAnswerOpen ? "background.500" : "summer",
      marginRight: "2.4rem",

      "@media (max-width: 768px)": {
        marginRight: "0.8rem",
      },
    }),
  answerWrapper: css({
    maxHeight: "100vh",
    overflow: "hidden",
    transition: "max-height 0.3s ease-in-out",
  }),
  answer: css({
    padding: "4rem 3.2rem",
    fontSize: "2.8rem",

    "@media (max-width: 768px)": {
      fontSize: "1.4rem",
      padding: "1.2rem 1.6rem",
    },
  }),
  bigIcon: css({
    display: "block",
    "@media (max-width: 768px)": {
      display: "none",
    },
  }),
  smallIcon: css({
    display: "none",
    "@media (max-width: 768px)": {
      display: "block",
    },
  }),
};
