import { css } from "@emotion/css";
import classNames from "classnames";
import { ComponentPropsWithoutRef, FC, memo } from "react";

import { isUndefined } from "@/utils/is-undefined";
import { mq } from "@/utils/media-query";

type Range = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type Props = ComponentPropsWithoutRef<"div"> & {
  cols: Range;
  colsTablet?: Range;
  colsDesktop?: Range;
  gap?: number;
  gapY?: number;
  gapTablet?: number;
  gapYTablet?: number;
  gapDesktop?: number;
  gapYDesktop?: number;
};

const basicStyle = css`
  display: grid;
`;

const Grid = memo(props => {
  const {
    children,
    className,
    cols,
    colsTablet,
    colsDesktop,
    gap = 0,
    gapY = gap,
    gapTablet,
    gapYTablet = gapTablet,
    gapDesktop,
    gapYDesktop = gapDesktop,
    ...attr
  } = props;
  const computedStyle = css`
    grid-template-columns: repeat(${cols}, minmax(0, 1fr));
    ${colsTablet &&
    css`
      ${mq.tablet} {
        grid-template-columns: repeat(${colsTablet}, minmax(0, 1fr));
      }
    `}
    ${colsDesktop &&
    css`
      ${mq.desktop} {
        grid-template-columns: repeat(${colsDesktop}, minmax(0, 1fr));
      }
    `}
    ${(!isUndefined(gap) || !isUndefined(gapY)) &&
    css`
      gap: ${gapY}px ${gap}px;
    `}
    ${(!isUndefined(gapTablet) || !isUndefined(gapYTablet)) &&
    css`
      ${mq.tablet} {
        gap: ${gapYTablet}px ${gapTablet}px;
      }
    `}
    ${(!isUndefined(gapDesktop) || !isUndefined(gapYDesktop)) &&
    css`
      ${mq.desktop} {
        gap: ${gapYDesktop}px ${gapDesktop}px;
      }
    `}
  `;

  return (
    <div className={classNames(basicStyle, computedStyle, className)} {...attr}>
      {children}
    </div>
  );
}) as FC<Props>;

export default Grid;
