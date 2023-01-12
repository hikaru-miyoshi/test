import classnames from "classnames/bind";
import { ComponentPropsWithoutRef, FC, memo } from "react";

import styled from "./style.module.scss";

const cx = classnames.bind(styled);

type Props = ComponentPropsWithoutRef<"div"> & {
  thumbnail?: ComponentPropsWithoutRef<"img">;
  title: string;
  datetime: string;
  active?: boolean;
};

const SlideItem = memo(props => {
  const { className, thumbnail, title, datetime, active, ...attr } = props;
  const classes = cx(styled.item, active && "is_active", className);

  return (
    <div className={classes} {...attr}>
      {thumbnail ? (
        <div className={styled.thumbnail}>
          <img src={thumbnail.src} alt={thumbnail.alt} {...thumbnail} />
        </div>
      ) : (
        false
      )}
      <div className={styled.contents}>
        <p className={styled.title}>{title}</p>
        <time className={styled.datetime}>{datetime}</time>
      </div>
    </div>
  );
}) as FC<Props>;

export default SlideItem;
