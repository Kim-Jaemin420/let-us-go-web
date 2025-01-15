import { ReactNode, useEffect, useRef, useState } from "react";
import { css } from "@styled-system/css";
import ArrowDownSvg from "@/assets/svgs/arrow-down.svg?react";
import ArrowUpSvg from "@/assets/svgs/arrow-up.svg?react";

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
        {isAnswerOpen ? (
          <ArrowUpSvg className={styles.icon} />
        ) : (
          <ArrowDownSvg className={styles.icon} />
        )}
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
  icon: css({
    width: "3.2rem",
    height: "3.2rem",

    "@media (max-width: 768px)": {
      width: "1.6rem",
      height: "1.6rem",
    },
  }),
};
