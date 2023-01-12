import classNames from "classnames/bind";
import { ComponentPropsWithoutRef, FC, memo } from "react";

import styled from "./style.module.scss";

const cx = classNames.bind(styled);

type Props = ComponentPropsWithoutRef<"span">;

const BaloonLabel = memo(props => {
  const { children, className, ...attr } = props;
  const classes = cx(styled.baloon, className);

  return (
    <span className={classes} {...attr}>
      {children}
    </span>
  );
}) as FC<Props>;

export default BaloonLabel;
