import { css } from "@emotion/css";
import classNames from "classnames/bind";
import { ComponentPropsWithoutRef, FC, memo } from "react";

import styled from "./style.module.scss";

const cx = classNames.bind(styled);

type Props = ComponentPropsWithoutRef<"section"> & {
  variant?: "white" | "gray" | "pink";
  full?: boolean;
  color?: string;
  backgroundColor?: string;
};

const Section = memo(props => {
  const { children, className, variant, full, color, backgroundColor, ...attr } = props;
  const computedStyle = css`
    ${color &&
    css`
      color: ${color};
    `}
    ${backgroundColor &&
    !variant &&
    css`
      background-color: ${backgroundColor};
    `}
  `;
  const classes = cx(styled.section, computedStyle, variant && `is_${variant}`, className);

  return (
    <section className={classes} {...attr}>
      {full ? children : <div className={styled.inner}>{children}</div>}
    </section>
  );
}) as FC<Props>;

export default Section;
