import { css } from "@emotion/css";
import classNames from "classnames";
import { ComponentPropsWithoutRef, FC, memo } from "react";

import { isUndefined } from "@/utils/is-undefined";
import { mq } from "@/utils/media-query";

type Props = ComponentPropsWithoutRef<"div"> & {
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  wrap?: boolean;
  gap?: number;
  gapTablet?: number;
  gapDesktop?: number;
};

const basicStyle = css`
  display: flex;
  flex-direction: column;
`;

const Stack = memo(props => {
  const { children, className, gap = 0, gapTablet, gapDesktop, direction = "column", wrap, ...attr } = props;
  const computedStyle = css`
    gap: ${gap}px;
    flex-direction: ${direction};
    ${!isUndefined(gapTablet) &&
    css`
      ${mq.tablet} {
        gap: ${gapTablet}px;
      }
    `}
    ${!isUndefined(gapDesktop) &&
    css`
      ${mq.desktop} {
        gap: ${gapDesktop}px;
      }
    `}
    ${wrap &&
    css`
      flex-wrap: wrap;
    `}
  `;

  return (
    <div className={classNames(basicStyle, computedStyle, className)} {...attr}>
      {children}
    </div>
  );
}) as FC<Props>;

export default Stack;
