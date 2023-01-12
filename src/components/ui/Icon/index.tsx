import classnames from "classnames/bind";
import { ComponentPropsWithoutRef, FC, memo } from "react";

import styled from "./style.module.scss";

const cx = classnames.bind(styled);

type Props = ComponentPropsWithoutRef<"img">;

const Icon = memo(props => {
  const { className, src, alt, ...attr } = props;
  const classes = cx(styled.img, className);

  return (
    <>
      {src && (
        <div className={classes}>
          <img src={src} alt={alt} {...attr} />
        </div>
      )}
    </>
  );
}) as FC<Props>;

export default Icon;
