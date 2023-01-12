---
to: src/components/<%= type %>/<%= h.changeCase.pascalCase(name) %>/index.tsx
---
import classnames from "classnames/bind";
import { ComponentPropsWithoutRef, FC, memo } from "react";

import styled from "./style.module.scss";

const cx = classnames.bind(styled);

type Props = ComponentPropsWithoutRef<"div">;

const <%= h.changeCase.pascalCase(name) %> = memo((props) => {
  const { children, className, ...attr } = props;
  const classes = cx(className);

  return (
    <div className={classes} {...attr}>Component</div>
  );
}) as FC<Props>;

export default <%= h.changeCase.pascalCase(name) %>;
