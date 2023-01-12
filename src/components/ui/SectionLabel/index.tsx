import classnames from "classnames/bind";
import { ComponentPropsWithoutRef, FC, memo } from "react";

import styled from "./style.module.scss";

const cx = classnames.bind(styled);

type Props = ComponentPropsWithoutRef<"span">;

const SectionLabel = memo(props => {
  const { children, className, ...attr } = props;
  const classes = cx(styled.label, className);

  return (
    <span className={classes} {...attr}>
      {children}
    </span>
  );
}) as FC<Props>;

export default SectionLabel;
