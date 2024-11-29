import { ButtonHTMLAttributes } from "react";
import classNames from "classnames";
import { css } from "@styled-system/css";
import { ColorToken } from "@styled-system/tokens";
import { flex } from "@styled-system/patterns";
import { Filter } from "@/types/utils";

export type ButtonBackgroundColor = Filter<
  ColorToken,
  "primary.100" | "primary.200" | "primary.300" | "primary.400"
>;

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundColor: ButtonBackgroundColor;
  size: "large" | "medium" | "small";
  className?: string;
}

const Button = ({ backgroundColor, size, className, children, onClick }: Props) => {
  const buttonStyle = classNames(
    styles.base,
    styles.variants.backgroundColor[backgroundColor],
    styles.variants.size[size],
    className,
  );

  return (
    <button
      onClick={onClick}
      className={classNames(buttonStyle, flex({ direction: "row", align: "center" }))}
    >
      {children}
    </button>
  );
};

export default Button;

const styles = {
  base: css({
    color: "white",
    borderRadius: "5rem",
    cursor: "pointer",
  }),
  variants: {
    backgroundColor: {
      "primary.100": css({ backgroundColor: "primary.100" }),
      "primary.200": css({ backgroundColor: "primary.200" }),
      "primary.300": css({ backgroundColor: "primary3400" }),
      "primary.400": css({ backgroundColor: "primary.400" }),
    },
    size: {
      large: css({
        fontSize: "3.2rem",
        height: "9.2rem",
        padding: "2.7rem 6rem",
      }),
      medium: css({
        height: "4.3rem",
        padding: "1.2rem 2.4rem",
      }),
      small: css({
        fontSize: "1.2rem",
        height: "3rem",
        padding: "0.8rem 1.6rem",
      }),
    },
  },
};
