import { css } from "@styled-system/css";
import { AnchorHTMLAttributes, ReactNode } from "react";

interface CardProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
}

const Card = ({ children, href = "#" }: CardProps) => {
  return (
    <a href={href} className={styles.card}>
      {children}
    </a>
  );
};

export default Card;

interface ImageProps {
  src: string;
  alt: string;
}

const Image = ({ src, alt }: ImageProps) => {
  return (
    <div className={styles.image}>
      <img src={src} alt={alt} className={styles.img} />
    </div>
  );
};

interface YearProps {
  children: ReactNode;
}

const Year = ({ children }: YearProps) => {
  return <div className={styles.year}>{children}</div>;
};

interface TitleProps {
  children: ReactNode;
}

const Title = ({ children }: TitleProps) => {
  return <div className={styles.title}>{children}</div>;
};

interface DescriptionProps {
  children: ReactNode;
}

const Description = ({ children }: DescriptionProps) => {
  return <div className={styles.description}>{children}</div>;
};

Card.Image = Image;
Card.Year = Year;
Card.Title = Title;
Card.Description = Description;

const styles = {
  card: css({
    width: "100%",
    minHeight: "49.7rem",
    borderRadius: "1.2rem",
    padding: "3.2rem 2.8rem",
    backgroundColor: "background.300",

    "@media (max-width: 768px)": {
      padding: "2.8rem 2.4rem",
      minHeight: "40.7rem",
    },
  }),
  image: css({
    overflow: "hidden",
    borderTopRadius: "1.2rem",
    width: "calc(100% + 5.6rem)",
    height: "284px",
    margin: "-3.2rem 0 3.2rem -2.8rem",
  }),
  img: css({
    width: '100%',
    height: '100%',
    objectFit: "cover",
  }),
  year: css({
    fontSize: "2.4rem",

    "@media (max-width: 768px)": {
      fontSize: "1.6rem",
    },
  }),
  title: css({
    fontSize: "3.2rem",
    fontWeight: 700,

    "@media (max-width: 768px)": {
      fontSize: "2rem",
    },
  }),
  description: css({
    fontSize: "2.4rem",

    "@media (max-width: 768px)": {
      fontSize: "1.4rem",
    },
  }),
};
