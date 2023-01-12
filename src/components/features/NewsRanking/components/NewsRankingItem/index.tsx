import classnames from "classnames/bind";
import Link from "next/link";
import { ComponentPropsWithoutRef, FC, memo } from "react";
import { Url } from "url";

import styled from "./style.module.scss";

const cx = classnames.bind(styled);

type Props = ComponentPropsWithoutRef<"div"> & {
  thumbnail?: ComponentPropsWithoutRef<"img">;
  href: string | Url;
  title: string;
  rank: 1 | 2 | 3 | 4 | 5;
};

const NewsRankingItem = memo(props => {
  const { className, thumbnail, href, title, rank, ...attr } = props;
  const classes = cx(styled.cardWrapper, className);
  const rankClasses = cx(styled.rankNum, rank && `is_${rank}`);

  return (
    <article className={classes} {...attr}>
      <Link href={href}>
        <a className={styled.card}>
          {thumbnail && (
            <div className={styled.thumbnail}>
              <div className={rankClasses}>{rank}</div>
              <img className={styled.img} src={thumbnail.src} alt={thumbnail?.alt} {...thumbnail} />
            </div>
          )}
          <div>
            <h4 className={styled.title}>{title}</h4>
          </div>
        </a>
      </Link>
    </article>
  );
}) as FC<Props>;

export default NewsRankingItem;
