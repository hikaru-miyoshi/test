import classnames from "classnames/bind";
import { ComponentPropsWithoutRef, FC, memo } from "react";

import styled from "./style.module.scss";

const cx = classnames.bind(styled);

type Props = ComponentPropsWithoutRef<"button"> & {
  active?: boolean;
};

const RoundedButton = memo(props => {
  const { children, className, active, ...attr } = props;
  const classes = cx(styled.button, active && "is_active", className);

  return (
    <button className={classes} {...attr}>
      {children}
    </button>
  );
}) as FC<Props>;

export default RoundedButton;
