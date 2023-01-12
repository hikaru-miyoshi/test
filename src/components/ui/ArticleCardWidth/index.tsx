import classnames from "classnames/bind";
import Link from "next/link";
import { ComponentPropsWithoutRef, FC, memo } from "react";
import { Url } from "url";

import { isUndefined } from "@/utils/is-undefined";

import GoodCount from "../GoodCount";
import Label from "../Label";
import styled from "./style.module.scss";

const cx = classnames.bind(styled);

type Props = ComponentPropsWithoutRef<"div"> & {
  thumbnail?: ComponentPropsWithoutRef<"img">;
  datetime: string;
  favCount?: number;
  href: string | Url;
  title: string;
  rank?: number;
  changed?: "up" | "down" | "invariant";
  label?: {
    text: string;
    variant: LabelVariant;
  };
};

const ArticleCardWidth = memo(props => {
  const { className, thumbnail, datetime, favCount, href, title, rank, changed = "invariant", label, ...attr } = props;
  const classes = cx(styled.cardWrapper, className);
  const rankClasses = cx(styled.rankNum, changed && `is_${changed}`);

  return (
    <div className={classes} {...attr}>
      {!isUndefined(rank) && rank != 0 && <div className={rankClasses}>{rank}</div>}
      <Link href={href}>
        <a className={styled.card}>
          {thumbnail ? (
            <div className={styled.thumbnail}>
              <img src={thumbnail.src} alt={thumbnail.alt} {...thumbnail} />
            </div>
          ) : (
            false
          )}
          <div className={styled.contents}>
            {label && <Label variant={label.variant}>{label.text}</Label>}
            <p className={styled.title}>{title}</p>
            <div className={styled.footer}>
              <time>{datetime}</time>
              {!isUndefined(favCount) && <GoodCount count={Number(favCount)}></GoodCount>}
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}) as FC<Props>;

export default ArticleCardWidth;
