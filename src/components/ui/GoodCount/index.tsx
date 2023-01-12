import classnames from "classnames/bind";
import { ComponentPropsWithoutRef, FC, memo } from "react";

import Heart from "./assets/heart.inline.svg";
import styled from "./style.module.scss";

const cx = classnames.bind(styled);

type Props = ComponentPropsWithoutRef<"button"> & {
  count: number;
};

const GoodCount = memo(props => {
  const { className, count, ...attr } = props;
  const classes = cx(styled.goodCount, className);

  return (
    <button type="button" className={classes} {...attr}>
      <Heart />
      {count}
    </button>
  );
}) as FC<Props>;

export default GoodCount;
