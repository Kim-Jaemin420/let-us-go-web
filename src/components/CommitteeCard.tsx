import { FC, Fragment, SVGProps } from "react";
import { ColorToken, token } from "@styled-system/tokens";
import { css } from "@styled-system/css";
import { Filter } from "@/types/utils";
import Orange24Icon from "@/assets/svgs/committee-orange24.svg?react";
import Orange20Icon from "@/assets/svgs/committee-orange20.svg?react";
import Pink24Icon from "@/assets/svgs/committee-pink24.svg?react";
import Pink20Icon from "@/assets/svgs/committee-pink20.svg?react";
import Blue20Icon from "@/assets/svgs/committee-blue20.svg?react";
import Blue24Icon from "@/assets/svgs/committee-blue24.svg?react";
import Yellow20Icon from "@/assets/svgs/committee-yellow20.svg?react";
import Yellow24Icon from "@/assets/svgs/committee-yellow24.svg?react";
import Purple24Icon from "@/assets/svgs/committe-purple24.svg?react";
import Purple20Icon from "@/assets/svgs/committee-purple20.svg?react";
import LinkSvg from "@/assets/svgs/link.svg?react";
import GithubSvg from "@/assets/svgs/github.svg?react";
import yagomImage from "@/assets/images/yagom.png";
import jercyImage from "@/assets/images/jercy.png";
import mingsoImage from "@/assets/images/mingso.png";
import mindiImage from "@/assets/images/mindi.png";
import unchainImage from "@/assets/images/unchain.png";
import tomImage from "@/assets/images/tom.png";
import kuuImage from "@/assets/images/kuu.png";
import soriImage from "@/assets/images/sori.png";
import teoImage from "@/assets/images/teo.png";
import miiiiImage from "@/assets/images/miiii.png";
import jaeminImage from "@/assets/images/jaemin.jpeg";

export type TagBackgroundColor = Filter<ColorToken, "purple" | "orange" | "blue" | "yellow">;

interface CommitteeMember {
  nickname: string;
  role: string;
  color: "purple" | "orange" | "blue" | "yellow" | "pink";
  comment: string;
  imageUrl: string;
  githubLink?: string;
  blogLink?: string;
  Icon24: FC<SVGProps<SVGSVGElement>>;
  Icon20: FC<SVGProps<SVGSVGElement>>;
}

const committees: CommitteeMember[] = [
  {
    nickname: "야곰",
    role: "기획",
    color: "orange",
    comment: "디지털보다 아날로그를 사랑하는\n프로그래머입니다",
    blogLink: "https://yagom.net/",
    imageUrl: yagomImage,
    Icon24: Orange24Icon,
    Icon20: Orange20Icon,
  },
  {
    nickname: "재르시",
    role: "개발",
    color: "blue",
    comment: "호그와트 입학이 꿈",
    blogLink: "https://jercy.dev/",
    imageUrl: jercyImage,
    Icon24: Blue24Icon,
    Icon20: Blue20Icon,
  },

  {
    nickname: "밍소",
    role: "영상촬영/기획",
    color: "yellow",
    comment: "올해 목표 아스날 우승",
    imageUrl: mingsoImage,
    Icon24: Yellow24Icon,
    Icon20: Yellow20Icon,
  },
  {
    nickname: "민디",
    role: "기획",
    color: "pink",
    comment: "오쓰 🤙",
    imageUrl: mindiImage,
    Icon24: Pink24Icon,
    Icon20: Pink20Icon,
  },
  {
    nickname: "언체인",
    role: "기획",
    color: "purple",
    comment: "철인3종나가실 동료 구합니다!\n연락주세요",
    blogLink: "https://app.rmbr.in/dlx3V9kViHb",
    imageUrl: unchainImage,
    Icon24: Purple24Icon,
    Icon20: Purple20Icon,
  },
  {
    nickname: "Tom",
    role: "디자인",
    color: "orange",
    comment: "오래오래 일하게 해주세요. ",
    imageUrl: tomImage,
    Icon24: Orange24Icon,
    Icon20: Orange20Icon,
  },
  {
    nickname: "쿠우",
    role: "기획",
    color: "blue",
    comment: "모두 건강하고 행복하세요 💕",
    imageUrl: kuuImage,
    Icon24: Blue24Icon,
    Icon20: Blue20Icon,
  },
  {
    nickname: "소리",
    role: "디자인",
    color: "yellow",
    comment: "이제 Command S 안해도 돼\n(행복)",
    imageUrl: soriImage,
    Icon24: Yellow24Icon,
    Icon20: Yellow20Icon,
  },
  {
    nickname: "Teo",
    role: "개발",
    color: "pink",
    comment: "나는 고양이\n꿈을 꾸는 고양이",
    imageUrl: teoImage,
    Icon24: Pink24Icon,
    Icon20: Pink20Icon,
  },
  {
    nickname: "미",
    role: "개발",
    color: "purple",
    comment: "귀여운게 최고야🐶",
    imageUrl: miiiiImage,
    Icon24: Purple24Icon,
    Icon20: Purple20Icon,
  },
  {
    nickname: "재민",
    role: "개발",
    color: "blue",
    comment: "웹 개발자로 살아남기",
    imageUrl: jaeminImage,
    blogLink: "https://velog.io/@kim-jaemin420",
    githubLink: "https://github.com/Kim-Jaemin420",
    Icon24: Blue24Icon,
    Icon20: Blue20Icon,
  },
];

const CommitteeCard = () => {
  return (
    <ul className={styles.list}>
      {[...committees].map(
        (
          {
            nickname,
            role,
            color,
            imageUrl,
            comment,
            blogLink,
            githubLink,
            Icon24,
            Icon20,
          }: CommitteeMember,
          index,
        ) => (
          <li key={`${index}-${nickname}`} className={styles.container}>
            <div className={styles.imageContainer}>
              <img src={imageUrl} alt={nickname} className={styles.image} />
            </div>
            <div className={styles.committeeInfo}>
              <div>
                <div className={styles.name}>
                  <div className={styles.bigIcon}>
                    <Icon24 />
                  </div>
                  <div className={styles.smallIcon}>
                    <Icon20 />
                  </div>
                  <span>{nickname}</span>
                </div>
              </div>
              <span style={{ backgroundColor: token(`colors.${color}`) }} className={styles.tag}>
                {role}
              </span>
              <div className={styles.content}>{comment}</div>
              <div className={styles.contactContainer}>
                {blogLink && (
                  <Fragment>
                    <a href={blogLink} target="_blank">
                      <LinkSvg className={styles.icon} />
                    </a>
                  </Fragment>
                )}
                {githubLink && (
                  <Fragment>
                    <a href={githubLink} target="_blank">
                      <GithubSvg className={styles.icon} />
                    </a>
                  </Fragment>
                )}
              </div>
            </div>
          </li>
        ),
      )}
    </ul>
  );
};

export default CommitteeCard;

const styles = {
  list: css({
    display: "flex",

    "@media (max-width: 768px)": {
      display: "flex",
    },
  }),
  container: css({
    display: "flex",
    flexDirection: "row",
    gap: "2.4rem",
    marginRight: "3.2rem",

    width: "59.2rem",
    height: "32.4rem",
    backgroundColor: "neutral.200",
    borderRadius: "2rem",
    padding: "2.4rem",
    listStyle: "none",
    _last: {
      marginRight: "3rem",
    },

    "@media (max-width: 768px)": {
      maxHeight: "13rem",
      width: "24rem",
      height: "13rem",
      padding: "0.8rem",
      gap: "0.8rem",
      marginRight: "0.8rem",
      borderRadius: "0.8rem",

      _last: {
        marginRight: "0.8rem",
      },
    },
  }),
  committeeInfo: css({
    display: "flex",
    flexDirection: "column",
    width: "auto",
    height: "100%",
    fontSize: "2.4rem",

    "@media (max-width: 768px)": {
      maxWidth: "14rem",
      maxHeight: "11.4rem",
    },
  }),
  imageContainer: css({
    width: "18.9rem",
    maxWidth: "18.9rem",
    height: "27.6rem",
    overflow: "hidden",
    borderRadius: "0.8rem",

    "@media (max-width: 768px)": {
      minWidth: "7.6rem",
      width: "7.6rem",
      height: "11.4rem",
    },
  }),
  image: css({
    width: "100%",
    height: "100%",
    objectFit: "cover",
  }),
  name: css({
    display: "flex",
    alignItems: "center",
    fontSize: "3.2rem",
    fontWeight: 700,

    "@media (max-width: 768px)": {
      fontSize: "1.6rem",
    },
  }),
  tag: css({
    display: "inline-flex",
    alignItems: "center",
    maxWidth: "max-content",
    height: "2.7rem",
    borderRadius: "0.4rem",
    fontSize: "1.6rem",
    fontWeight: 700,
    color: "white",
    marginTop: "1.2rem",
    padding: "0.4rem 0.8rem",

    "@media (max-width: 768px)": {
      height: "2rem",
      fontSize: "1rem",
      marginTop: "0.4rem",
      marginBottom: "0.4rem",
    },
  }),
  content: css({
    display: "flex",
    alignItems: "center",
    flex: "1",
    whiteSpace: "pre",

    "@media (max-width: 768px)": {
      fontSize: "1.2rem",
    },
  }),
  contactContainer: css({
    display: "flex",
    gap: "1.2rem",
    cursor: "pointer",
  }),
  icon: css({
    width: "2.8rem",
    height: "2.8rem",

    "@media (max-width: 768px)": {
      width: "2rem",
      height: "2rem",
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
