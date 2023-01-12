import classNames from "classnames/bind";
import { ComponentPropsWithoutRef, FC } from "react";

import { SnsUrls } from "@/types/sns";
import { Thumbnail } from "@/types/thumbnail";

import SnsIcon from "../SnsIcon";
import styled from "./style.module.scss";

const cx = classNames.bind(styled);

type Props = ComponentPropsWithoutRef<"article"> & {
  thumbnail: Thumbnail;
  title: string;
  date: string;
  sns: SnsUrls;
};

export default (props => {
  const { className, thumbnail, title, date, sns, ...attr } = props;
  const classes = cx(styled.card, className);

  return (
    <article className={classes} {...attr}>
      <div className={styled.thumbnail}>
        <img className={styled.image} src={thumbnail.src} alt={thumbnail?.src} />
      </div>
      <div className={styled.content}>
        <h4 className={styled.title}>{title}</h4>
        <p className={styled.date}>{date}</p>
      </div>
      <SnsIcon className={styled.sns} sns={sns} />
    </article>
  );
}) as FC<Props>;
