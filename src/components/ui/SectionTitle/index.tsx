import classnames from "classnames/bind";
import { ComponentPropsWithoutRef, ElementType, FC, ReactNode } from "react";

import styled from "./style.module.scss";

const cx = classnames.bind(styled);

type Props = ComponentPropsWithoutRef<"h1"> & {
  icon?: ReactNode;
  lv?: 1 | 2 | 3 | 4 | 5 | 6;
};

export default (props => {
  const { className, children, lv = 3, icon, ...attr } = props;
  const classes = cx(styled.heading, className);
  const Heading = `h${lv}` as ElementType;

  return (
    <Heading className={classes} {...attr}>
      {icon}
      <span className={styled.heading__text}>{children}</span>
    </Heading>
  );
}) as FC<Props>;
