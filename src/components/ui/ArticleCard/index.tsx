import classnames from "classnames/bind";
import Link from "next/link";
import { ComponentPropsWithoutRef, FC, memo } from "react";
import { Url } from "url";

import GoodCount from "../GoodCount";
import Label from "../Label";
import styled from "./style.module.scss";

const cx = classnames.bind(styled);

type Props = Omit<ComponentPropsWithoutRef<"a">, "href"> & {
  href: string;
  title: string;
  thumbnail?: ComponentPropsWithoutRef<"img">;
  datetime: string;
  count: number;
  transparent?: boolean;
  label?: {
    text: string;
    variant: LabelVariant;
  };
};


const ArticleCard = memo(props => {
  const { title, className, thumbnail, datetime, count, transparent, href, label, ...attr } = props;
  const classes = cx(styled.card, transparent && "is_transparent", className);

  return (
    <Link href={href} {...attr}>
      <div className={classes}>
        {thumbnail ? (
          <div className={styled.thumbnail}>
            <img src={thumbnail.src} alt={thumbnail.alt} {...thumbnail} />
          </div>
        ) : (
          false
        )}
        <div className={styled.content}>
          {label && (
            <div className={styled.labels}>
              <Label variant={label.variant}>{label.text}</Label>
            </div>
          )}
          <p className={styled.title}>{title}</p>
          <div className={styled.footer}>
            <time>{datetime}</time>
            <GoodCount count={count} />
          </div>
        </div>
      </div>
    </Link>
  );
}) as FC<Props>;

export default ArticleCard;
