import classNames from "classnames/bind";
import { ComponentPropsWithoutRef, FC, memo, useEffect, useState } from "react";

import styled from "./style.module.scss";

const cx = classNames.bind(styled);

type Props = ComponentPropsWithoutRef<"div"> & {
  height?: number;
};

export default memo(props => {
  const { children, className, height, ...attr } = props;
  const classes = cx(styled.contentSection, className);
  const icon = cx(styled.icon);

  const [open, setOpen] = useState(false);

  const actualHeight = open ? "100%" : height ? height + "px" : "500px";

  function toggleOpen() {
    setOpen(!open);
  }

  return (
    <div className={cx(classes, open && styled[`is_open`])} {...attr} style={{ height: actualHeight }}>
      {children}
      <button type={"button"} className={icon} onClick={toggleOpen} />
    </div>
  );
}) as FC<Props>;
