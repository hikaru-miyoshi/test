import classNames from "classnames/bind";
import { ComponentPropsWithoutRef, FC, memo } from "react";

import styled from "./style.module.scss";

const cx = classNames.bind(styled);

type Props = ComponentPropsWithoutRef<"span"> & {
  variant?: LabelVariant;
  size?: "small" | "medium" | "large";
};

const Label = memo(props => {
  const { children, className, variant, size, ...attr } = props;
  const classes = cx(styled.label, variant && `is_${variant}`, size && `is_${size}`, className);

  return (
    <span className={classes} {...attr}>
      {children}
    </span>
  );
}) as FC<Props>;

export default Label;
