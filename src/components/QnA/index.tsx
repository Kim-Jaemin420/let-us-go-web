import { forwardRef } from "react";
import { css } from "@styled-system/css";
import Signature2Big from "@/assets/svgs/hackathon/signature2-big.svg";
import Signature2Small from "@/assets/svgs/hackathon/signature2-small.svg";
import QuestionAnswer from "./QuenstionAnswer";

const QnA = forwardRef<HTMLDivElement>((_props, ref) => {
  return (
    <div ref={ref} className={styles.container}>
      <div className={styles.bigSignature}>
        <Signature2Big />
      </div>
      <div className={styles.smallSignature}>
        <Signature2Small />
      </div>
      <div className={styles.title}>QnA</div>
      <div className={styles.content}>
        <QuestionAnswer
          question="찍먹톤이 무엇인가요?"
          answer="WWDC24에서 새로 나온 기술을 이용하여 하루 동안 진행되는 해커톤입니다."
        />
        <QuestionAnswer
          question="참가 대상이 누군가요?"
          answer="학생부터 주니어, 10년 차 이상 시니어까지 Swift를 이용하여 개발할 수 있는 분이라면 누구나 참여 가능합니다."
        />
        <QuestionAnswer
          question="참가 신청은 언제하나요?"
          answer="신청 기간은 5월 31일 ~ 6월 11일 18시까지 입니다. 연차별로 TO가 있어 먼저 마감이 될 수도 있습니다. 빠르게 지원해주세요! 참여 여부 발표는 6월 15일에 발표될 예정입니다."
        />
        <QuestionAnswer
          question="팀은 어떻게 구성되나요?"
          answer="신청서를 바탕으로 연차, 성향들을 고려하여 팀을 구성한 뒤 행사 전에 디스코드에 팀별로 초대해 드릴 예정입니다."
        />
        <QuestionAnswer
          question="친구들과 같이 팀으로 신청도 가능한가요?"
          answer="팀으로 신청은 불가능하고, 개인으로만 신청이 가능합니다."
        />
        <QuestionAnswer
          question="뒷풀이도 있나요?"
          answer="아니요. 공식적인 뒷풀이는 따로 진행되지 않습니다."
        />
        <QuestionAnswer
          question="하루종일 진행하는데 밥도 주나요?"
          answer="네 점심, 저녁, 간식을 제공해 드릴 예정입니다. 개인적으로 따로 간식거리를 챙겨오셔도 좋아요! 단 주류는 반입 불가능합니다."
        />
        <QuestionAnswer
          question="챙겨가야 할것이 있나요?"
          answer="노트북과 충전기를 꼭 챙겨오셔야 합니다! 멀티탭은 제공해 드릴 예정입니다."
        />
        <QuestionAnswer
          question="환불이 가능한가요?"
          answer="입금 기간동안만 환불이 가능합니다. 입금기간이 지난 이후에는 저희가 굿즈등 구매를 진행하기때문에 환불 및 양도가 불가능합니다."
        />
      </div>
    </div>
  );
});

export default QnA;

const styles = {
  container: css({
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "center",
    marginBottom: "28rem",
    width: "calc(100vw - 6.4rem)",

    "@media (max-width: 768px)": {
      width: "calc(100vw - 4rem)",
      marginBottom: "12rem",
      fontSize: "1.6rem",
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
  content: css({
    width: "calc(100vw - 6.4rem)",
    maxWidth: "121.6rem",
  }),
};
